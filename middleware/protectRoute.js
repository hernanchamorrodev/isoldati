const protectRoute = async(req, res, next) => {
    // verificar si hay token
    const token = req.cookies._token;

    console.log(token)
}

export default protectRoute;