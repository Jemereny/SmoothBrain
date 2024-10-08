# NoSQL vs SQL

Should you choose one or the other? Or perhaps both? Most complex applications tend to use multiple databases to ensure they fulfill their requirements effectively. 

Here's an analogy: Have you ever encountered a situation where you had to use two data structures to maintain the efficiency of your code?

## Comparison
NoSQL, aka "Not Only SQL" is another approach to database design that uses a different way of modelling and storing data compared to tabular, relational models (Used in SQL databases).

SQL databases, on the other hand, are typically ACID-compliant where data integrity is of utmost importance.

1. In terms of scalability, NoSQL databases scale better than SQL databases
    1. Sharding is very complex as it is manually performed for SQL databases. SQL databases use fixed schemas to model complex relationships. When the data is sharded, complex logic may have to be involved to keep the data integrity.
1. In terms of consistency, NoSQL databases are eventually consistent
    1. Reducing the strictness in being fully ACID-compliant, it leads to a higher performance as there will be lesser overheads in maintaining strict ACID properties.
1. In terms of conflict resolution, it depends on the strategy and can be something like "Last Write Wins" while in SQL databases, it can be controlled in a tranasaction.

---

### When to use NoSQL?

1. Data is available and has a very high throughput.
2. When schema needs to be flexible
3. Small, transactional operations that may not required data integrity. i.e. Shopping cart.

### Types of NoSQL
1. Key/Value Store
    1. DynamoDB
    1. Cassandra
1. Document Stores
    1. MongoDB
1. Data cache
    1. Redis
1. Time-series
1. Graph

### When to use SQL?

1. Data integrity is important
2. Transactional support for concurrency
3. Data has a complex relationship; SQL provides rich querying capabilities to be able to write queries to transform data into different kinds of datasets to perform analysis.

### Types of SQL

1. MySQL
2. PostgreSQL
