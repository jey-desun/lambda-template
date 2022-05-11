module.exports.handler = async (event: any, context: any, callback: any) => {
  console.log("event = ", event)
  callback(null, 'DONE');
}
