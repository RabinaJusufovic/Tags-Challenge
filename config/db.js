//configuration file to connect to database
const{Pool}=require('pg');
const db= new Pool({
    host: 'dumbo.db.elephantsql.com',
    password: 'FZIkvhofDT5KdbwxpTcvUqvH4cpA8rMe',
    user: 'kgoghmxf',
    port: 5432,
    database: 'kgoghmxf',
    max:100,
    idleTimeoutMillis: 30000
});

module.exports = db;