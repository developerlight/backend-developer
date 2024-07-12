const auth = (req, res, next) => {
    if (req?.session.isAuth) {
        next();
    } else {
        res.status(401).json({ message: 'Anda belum login' });
    }
}

module.exports = auth;