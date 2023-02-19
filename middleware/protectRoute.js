const protectRoute = async(req, res, next) => {
    // verificar si hay token
    const { _token } = req.cookies;

    if(!_token){
        return res.redirect('/auth/login');
    }
}

export default protectRoute;