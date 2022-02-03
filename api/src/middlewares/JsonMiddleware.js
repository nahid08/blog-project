const jwt = require("jsonwebtoken");

const sercret_value =  "3c486fd13eaa183325446c3aa1c793a880c54e4ae0bc34f50fe91f466cc10adbfc277a069db17f65e5b4efe88e22d54b3f7fc46c95f9743081e548c7f9f7d6a0";

const cookieOptions = {
    expires: new Date(Date.now() + 90 * 24 * 60* 60 *1000),
    httpOnly: true
};

const createToken = (req,res,next) => {

    var { id } = req.body;
    const accessToken = jwt.sign({id: id.toString()}, sercret_value, { expiresIn: "2days"});
    
    res.cookie("jwt", accessToken, cookieOptions)
    .json(req.body);
    next();
};

const authenticateToken = (req,res,next) => {
    const token = req.cookies.jwt;

    jwt.verify(token, sercret_value, (err, decoded) => {
        if(err) {
            console.log(err);
            res.status(403).send("Forbidden");
            return;
        }
        req.body.id = parseInt(decoded.id);
        console.log(decoded.id, 'tes');
        next();
    });
};

const clearToken = (req, res) => {
   
    res.clearCookie('jwt');
    res.status(200).send('user is logged out.');
}

module.exports = {
    createToken, authenticateToken,clearToken
};