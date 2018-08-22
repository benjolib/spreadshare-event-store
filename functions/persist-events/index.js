'use strict'

export default (event, context, callback) => {
  // read all kinesis data from event
  const kinesisData = event.Records.map(record => {
    const string = Buffer.from(record.kinesis.data, 'base64').toString('utf8')
    const data = JSON.parse(string)

    return data
  })

  // TODO: push data to DB source

  callback(null, {sent: kinesisData.length})
}
