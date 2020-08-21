Prometheus, a Cloud Native Computing Foundation project, is a systems and service monitoring system. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to be true.

Prometheus's main distinguishing features as compared to other monitoring systems are:

    a multi-dimensional data model (timeseries defined by metric name and set of key/value dimensions)
    PromQL, a powerful and flexible query language to leverage this dimensionality
    no dependency on distributed storage; single server nodes are autonomous
    timeseries collection happens via a pull model over HTTP
    pushing timeseries is supported via an intermediary gateway
    targets are discovered via service discovery or static configuration
    multiple modes of graphing and dashboarding support
    support for hierarchical and horizontal federation

Default: port 9090
