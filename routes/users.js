    let User = require('../model/user');

function getUser(req, res) {
    let username = req.params.username;

    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.error("Erreur lors de la recherche de l'utilisateur:", err);
            return res.status(500).send(err);
        }
        if (!user) {
            return res.status(404).send("User not found");
        }
        res.json(user);
    });
}

module.exports = { getUser };
