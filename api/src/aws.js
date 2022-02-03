const aws = require('aws-sdk');


const region = "ap-south-1";
const accessKeyId = "AKIAWOK7KL2NKJ2HXZMV";
const secretAccessKey= "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";

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey
})


module.exports = {
    s3
}