module.exports=new Map(JSON.parse(require('zlib').gunzipSync(Buffer.from('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','base64'))))