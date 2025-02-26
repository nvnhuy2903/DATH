const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config({ path: "./config/.env" });

const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) return res.status(400).json({ message: "Vui lòng điền đầy đủ thông tin!" });
        const existingUsername = await User.findOne({ where: { Username: username } });
        if (existingUsername) return res.status(400).json({ message: "Tên người dùng đã tồn tại!" });
        
        const existingUseremail = await User.findOne({ where: { Email: email } });
        if (existingUseremail) return res.status(400).json({ message: "Email đã tồn tại!" });

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            Username: username,
            Email: email,
            Password: hashedPassword,
        });

        res.status(201).json({ message: "Đăng ký thành công!", user: newUser });
    } catch (err) {
        res.status(500).json({ message: "Lỗi server!", error: err.message });
    }
};

module.exports = { register };