/* eslint-disable class-methods-use-this */
const { SeqTransport } = require('@datalust/winston-seq');

module.exports  = SeqService = new SeqTransport({
    serverUrl: "http://10.43.102.56:5341",
    apiKey: "A0O03qZS7UezNmGXEze1",
    onError: (e => { console.error(e) }),
  })
