module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))