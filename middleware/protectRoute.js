import jwt from "jsonwebtoken";

const protectRoute = async(req, res, next) => {
    // verificar si hay token
    const { _token } = req.cookies;

    if(!_token){
        return res.redirect('/auth/login');
    }

    // comprobar el token
    try {
        const verifiedToken = jwt.verify(_token, process.env.JWT_SECRET)
    
        // si el token es valido, se pasa al siguiente middleware
        req.user = verifiedToken;
        next();
        
    } catch(error){
        return res.clearCookie('_token').redirect('/auth/login')
    }
}

export default protectRoute;