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

    async putName(req, res) {
        const name = req.params.name;
        if(!name){
            return res.send('Error');
        }
        return res.send('PUT => Nombre: '+ name);
    }
};

