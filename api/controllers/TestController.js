/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async getName(req, res) {
        const name = req.query.name;
        if (!name) {
            return res.send('Error: Nombre no definido')
        }
        return res.send('GET => Nombre: '+name);
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

