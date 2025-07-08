const JWT=require('jsonwebtoken');

const secret = "vvvrushhh@22";

function createTokenForUser(user){
    const payLoad={
        _id:user._id,
        email:user.email,
        profileImageURL:user.profileImageURL,
        role:user.role,
    };

    const token=JWT.sign(payLoad,secret);
    return token;
};


function validateToken(token){
    const payLoad=JWT.verify(token,secret);
    return payLoad;
};


module.exports={
    createTokenForUser,
    validateToken,
};