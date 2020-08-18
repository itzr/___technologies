# Core

- Default port: 27017
- JSON-like
- Support arrays and nested objects
- Filter & sort by any field (n x nested is ok)
- Queries are JSON
- ACID transactions (atomicity, consistency, isolation, durability)
- Snapshot isolation
- Distributed multi-document
- Support for joins
- Two relationships: 
    - Reference
    - Embedded
    
## Software 

- Community Server
- Enterprise Server
- Developer Tools
- Compass
- Ops Manager
- Connectors 

...
- Enterprise & Community Kubernetes Operator

### MongoDB Atlas - Global cloud database
- multi-node clusters
- globally distributed clusters
- backups
- monitoring & alerts
- serverless triggers (based on database events)
- security (SSL, encryption at rest, network peering, firewalling)
    
The newly available free tier on Azure Cloud, 
known as the M0, grants users 512 MB of 
storage and is ideal for learning MongoDB, 
prototyping, and early development.

For Guide: https://docs.atlas.mongodb.com/getting-started/

* It's pretty easy.

## With NodeJs

Options: 
- Mongoose (favourite)
- Mongo 

## Mongoose

Ordering Schemas: https://stackoverflow.com/questions/19051041/cannot-overwrite-model-once-compiled-mongoose

`module.exports = mongoose.models.Users || mongoose.model('Users', UsersSchema);`
