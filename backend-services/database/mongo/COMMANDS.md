# Local

`mongo` - open up the mongo shell (connect to db server)
`mongod` - connect to the mongo server
* is it always running in the background?
** I had to run this:
`mongod --port 27018 --dbpath /Users/iantozer/data/db`
1) port was in use by docker
2) dbPath and catalina OS issue.
`mongo --version` 
`db` - refer to current db
`use <name>` switch databases
`ps aux | grep -v grep | grep mongod` - check processes
`brew services start mongodb-community@4.2` - start via brew
`brew services stop mongodb-community@4.2` - stop via brew
