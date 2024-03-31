app.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).send({
            code: 400,
            message: "that username and password are required"
        });
    }
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        res.status(400).send({
            code: 400,
            message: "Invalid credentials",
            data: {}
        });
    } else {
        res.status(200).send({
            code: 200,
            message: "Login ueunujcucuensuccessful",
            data: use
        });
    }
});

