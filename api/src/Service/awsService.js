const { s3 } = require("../aws");
const fs = require("fs");

const params = {
    Bucket: "demo5408",
    
}
const imageUpload = (req ,res) => {
    const fileContent = fs.readFileSync(req.file.path);

    const params = {
        Bucket: "demo5408",
        Body: fileContent,
        Key: "demon"
    }

    s3.upload(params, (err,data) => {
        if(err) {
            console.log(err);
        }

        return res.json({text:"ok"});
    })
}

module.exports = {
    imageUpload
}