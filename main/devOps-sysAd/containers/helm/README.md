## Architecture

## Charts

- Helm uses a packaging format called charts: collection of files that describe
a related set of Kubernetes resources

`
wordpress/
  Chart.yaml          # A YAML file containing information about the chart
  LICENSE             # OPTIONAL: A plain text file containing the license for the chart
  README.md           # OPTIONAL: A human-readable README file
  values.yaml         # The default configuration values for this chart
  values.schema.json  # OPTIONAL: A JSON Schema for imposing a structure on the values.yaml file
  charts/             # A directory containing any charts upon which this chart depends.
  crds/               # Custom Resource Definitions
  templates/          # A directory of templates that, when combined with values,
                      # will generate valid Kubernetes manifest files.
  templates/NOTES.txt # OPTIONAL: A plain text file containing short usage notes
`


### Helm Chart Templates

- uses Go templates for templating resource files (https://godoc.org/text/template)
- uses all Sprig Functions (https://masterminds.github.io/sprig/)

* For querks: https://helm.sh/docs/howto/charts_tips_and_tricks/

## Complex Charts with Many Dependencies

TL;DR - Create a top-level umbrella chart that exposes the global 
        configurations, and then use the charts/ subdirectory to embed each 
        of the components.


- Many of the charts in the official charts repository are "building blocks" 
for creating more advanced applications. But charts may be used to create 
instances of large-scale applications. In such cases, a single umbrella chart 
may have multiple subcharts, each of which functions as a piece of the whole.

- The current best practice for composing a complex application from discrete 
parts is to create a top-level umbrella chart that exposes the global 
configurations, and then use the charts/ subdirectory to embed each 
of the components.

#### Managing Dependencies with the dependencies field
     
The charts required by the current chart are 
defined as a list in the `dependencies` field.

```
dependencies:
  - name: apache
    version: 1.2.3
    repository: https://example.com/charts
  - name: mysql
    version: 3.2.1
    repository: https://another.example.com/charts
 - name: awesomeness
    version: 1.0.0
    repository: "@fantastic-charts"
```

Once you have defined dependencies, 
you can run `helm dependency update`
and it will use your dependency file to download all 
the specified charts into your charts/ directory for you.

### Values

Values files can declare values for the top-level chart, 
as well as for any of the charts that are included 
in that chart's charts/ directory.

Example:

```
title: "My WordPress Site" # Sent to the WordPress template
 
 mysql:
   max_connections: 100 # Sent to MySQL
   password: "secret"
 
 apache:
   port: 8080 # Passed to Apache
```

### Custom Resource Definitions

For example, if your chart had a 
CRD for CronTab in the crds/ directory, 
you may create instances of the CronTab kind 
in the templates/ directory:

```
crontabs/
  Chart.yaml
  crds/
    crontab.yaml
  templates/
    mycrontab.yaml
```

The crontab.yaml file must contain the CRD with no template directives:


```
kind: CustomResourceDefinition
metadata:
  name: crontabs.stable.example.com
spec:
  group: stable.example.com
  versions:
    - name: v1
      served: true
      storage: true
  scope: Namespaced
  names:
    plural: crontabs
    singular: crontab
    kind: CronTab
```

Then the template mycrontab.yaml may create a new CronTab (using templates as usual):

```
apiVersion: stable.example.com
kind: CronTab
metadata:
  name: {{ .Values.name }}
spec:
   # ...
```

Helm will make sure that the CronTab kind has been installed and is 
available from the Kubernetes API server before it proceeds 
installing the things in templates/.

### Chart Hooks

Helm provides a hook mechanism to 
allow chart developers to intervene 
at certain points in a release's life cycle. 
