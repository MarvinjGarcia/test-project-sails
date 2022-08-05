/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    async getUsers(req, res) {
        const users = await User.find();
        return res.status(200).json(users);
    },

    async postUser(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        await User.create({
            name: name,
            email: email
        });
        let newUser = await User.findOne({name: name, email: email});
        if (!newUser) {
            return res.notFound();
        }
        return res.json(newUser);
    },

    async putUser(req, res) {
        const id = req.params.id
        const updatedName = req.body.name;
        const updatedEmail = req.body.email;
        await User.update({id: id})
            .set({
                name: updatedName,
                email: updatedEmail
            });
        let updatedUser = await User.findOne({name: updatedName, email: updatedEmail});
        return res.json(updatedUser);
    }
};

