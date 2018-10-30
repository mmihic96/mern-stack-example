module.exports = {
    server: 'localhost',
    port: 27017,
    database: 'mongoSample',
    username: 'admin',
    password: 'asd',
    getUrl: function() { 
      return `mongodb://${this.server}:${this.port}/${this.database}`;
    }
  };;