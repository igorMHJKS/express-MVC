const UserCsontroller = {
    //Read - ler
    // Ler/Listar todfos os usuários e pode filtra eles
    index: (req, res) =>{
        res.send('index')
    },
    //Read - ler
    //Ler apenas um usuário
    show: (req, res) =>{
        const {id} = req.params;
        res.send('show ' +  id)
    },
    //Create - Criar
    // Criar um usuário
    store: (req, res) =>{
        res.send('store')
    },
    //update - Atualizar
    //Atualizar um usuário
    update: (req, res) =>{
        res.send(`Update ${id}`);
    },
    //delete - Deletar
    //Delatar um usuário
    delete: (req, res) =>{
        res.send(`Delete ${id}`);
    }
};
module.exports = UserCsontroller;