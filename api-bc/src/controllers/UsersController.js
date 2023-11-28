const UsersModel = require("../models/Users");

const usersController = {

    create: async(req, res) => {
        try{
            console.log(req.body)
            const user = {
                author_name: req.body.name,
                author_email: req.body.email,
                author_user: req.body.user,
                author_pwd: req.body.pwd,
                author_level: req.body.level,
                author_status: req.body.status
            };
            

            const response = await UsersModel.create(user);

            res.status(201).json({response, msg: "Usuário criado com sucesso."});
        } catch(error){
            console.log(error);
        }
    },

    getAll: async (req,res) => {
        try{
            const users = await UsersModel.find();
            res.json(users);
        } catch(error){
            console.log(error);
        }
    },

    get: async (req,res) => {
        try{
            const id = req.params.id;
            const user = await UsersModel.findById(id);

            if(!user){
                res.status(404).json({msg:"Usuário não encontrado."})
            }

            res.json(user);
        } catch(error){
            console.log(error);
        }
    },

    delete: async (req,res) => {
        try{
            const id = req.params.id;
            const user = await UsersModel.findById(id);

            if(!user){
                res.status(404).json({msg:"Usuário não encontrado."})
            }

            const userDeleted = await UsersModel.findByIdAndDelete(id);

            res.status(201).json({userDeleted, msg: "Usuário deletado com sucesso."});
        } catch(error){
            console.log(error);
        }
    },

    update: async (req,res) => {
        try{
            const id = req.params.id;

            const user = {
                author_name: req.body.name,
                author_email: req.body.email,
                author_user: req.body.user,
                author_pwd: req.body.pwd,
                author_level: req.body.level,
                author_status: req.body.status
            };
          
            const updatedUser = await UsersModel.findByIdAndUpdate(id, user);

            if(!updatedUser){
                res.status(404).json({msg:"Usuário não encontrado."})
            }

            res.status(201).json({updatedUser, msg: "Usuário atualizado com sucesso."});
        } catch(error){
            console.log(error);
        }
    }


};

module.exports = usersController;
