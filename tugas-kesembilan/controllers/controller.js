const { hashPassword, comparePassword } = require("../utils/bcrypt");
const { WithoutParams } = require("../utils/query");

const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await hashPassword(password);
        
        await WithoutParams(`
            INSERT INTO users (username, password) VALUES ('${username}', '${hashedPassword}')
            `);

        res.status(200).json({ message: 'Registrasi berhasil' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await WithoutParams(`
            SELECT * FROM users WHERE username = '${username}'
            `);
        const dbPwd = user[0].password;
        const compare = await comparePassword(password, dbPwd);

        if (compare) {
            req.session.isAuth = true;
            res.status(200).json({ message: 'Login berhasil' });
        } else {
            res.status(400).json({ message: 'Login gagal' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const logout = async (req, res) => {
    try {
        req.session.destroy();
        res.status(200).json({ message: 'Logout berhasil' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

}

const data = (req, res) => {
    res.status(200).json({ message: 'Data berhasil diambil' });
}

const open = (req, res) => {
    res.status(200).json({ message: 'Open' });
}

module.exports = { 
    register,
    login,
    data,
    logout,
    open
};