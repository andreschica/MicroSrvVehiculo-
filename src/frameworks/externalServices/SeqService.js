/* eslint-disable class-methods-use-this */
const { SeqTransport } = require('@datalust/winston-seq');

module.exports  = SeqService = new SeqTransport({
    serverUrl: "http://34.132.151.243:80",
    apiKey: "A0O03qZS7UezNmGXEze1",
    onError: (e => { console.error(e) }),
  })
