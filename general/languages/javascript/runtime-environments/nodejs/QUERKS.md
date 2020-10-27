### Using argv
docs: https://nodejs.org/docs/latest/api/process.html#process_process_argv

process.argv[2]
var port = parseInt(process.argv[2])

###### Example
code:
```
// print process.argv
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
```

executable:
```
node process-args.js one two=three four
```

argv output:
```
0: /usr/local/bin/node
1: /Users/mjr/work/node/process-args.js
2: one
3: two=three
4: four
```
