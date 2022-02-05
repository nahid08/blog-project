const { s3 } = require("../aws");
const fs = require("fs");
const res = require("express/lib/response");

const params = {
    Bucket: "demo5408",
    
}
const imageUpload = (req ,res) => {
    const fileContent = fs.readFileSync(req.file.path);
    let params = {
        Bucket: "demo5408",
        Body: fileContent,
        Key: req.body.id.toString()
    }

    s3.upload(params, (err,data) => {
        if(err) {
            res.status(404).json(err);
        }

    })

    params = {
        Bucket: "demo5408",
        Key: req.body.id.toString()
    }

    const imageUrl = s3.getSignedUrl('getObject',params);
    console.log(imageUrl);
    return res.json({url: imageUrl});
}

const getImage = (req, res) => {

    const params = {
        Bucket: "demo5408",
        Key: req.body.id.toString()
    }

    const imageUrl = s3.getSignedUrl('getObject',params);
    return res.json({url: imageUrl});
}

module.exports = {
    imageUpload,getImage
}