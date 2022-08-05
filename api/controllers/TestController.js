/**
 * TestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
    //Obtener todos los usuarios de la BD
    async getUsers(req, res) {
        const users = await User.find();
        return res.status(200).json(users);
    },

    //Agregar un nuevo usuario a la BD 
    async postUser(req, res) {
        const name = req.body.name;
        const email = req.body.email;
        if(!name || !email){
            return res.notFound();
        }
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

    //Editar usuario en la BD
    async putUser(req, res) {
        const id = req.params.id
        const updatedName = req.body.name;
        const updatedEmail = req.body.email;
        if(!id || !updatedName || !updatedEmail){
            return res.notFound();
        }
        await User.update({id: id})
            .set({
                name: updatedName,
                email: updatedEmail
            });
        let updatedUser = await User.findOne({name: updatedName, email: updatedEmail});
        return res.json(updatedUser);
    }
};

