module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))