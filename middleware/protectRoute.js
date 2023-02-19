import jwt from "jsonwebtoken";
import { User } from "../models/index.js";

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
        
        const user = await User.scope('deleteSensitiveData').findByPk(verifiedToken.id);
        
        // almacenar en la request
        if(user){
            req.user = user;
        } else {
            return res.redirect('/auth/login')
        }
        next();

    } catch(error){
        return res.clearCookie('_token').redirect('/auth/login')
    }
}

export default protectRoute;