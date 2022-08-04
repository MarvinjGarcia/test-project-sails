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
        let newUser = await User.create({
            name: name,
            email: email
        });
        console.log('Usuario '+name+ ' creado!')
        return res.ok();
    },

    async putName(req, res) {
        const name = req.params.name;
        if(!name){
            return res.send('Error');
        }
        return res.send('PUT => Nombre: '+ name);
    }
};

