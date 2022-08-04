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

    async postLastName(req, res) {
        const lastname = req.body.lastname;
        if (!lastname) {
            return res.send('Error: Apellido no definido')
        }
        return res.send('POST => Apellido: '+lastname);
    },

    async putName(req, res) {
        const name = req.params.name;
        if(!name){
            return res.send('Error');
        }
        return res.send('PUT => Nombre: '+ name);
    }
};

