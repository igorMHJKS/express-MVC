var users= require('../data/users.json');
users = users.data


const UserCsontroller = {
    //Read - ler
    // Ler/Listar todfos os usuários e pode filtra eles
    index: (req, res) =>{
        return res
        .status(200)
       .json({data:users, message: 'listagem bem sucedida'})
    },
    //Read - ler
    //Ler apenas um usuário
    show: (req, res) => {
        const { id } = req.params;
        const result = users.find((user) => {
          // return user.id === id;
          // return user.id.toString() === id;
          return user.id === parseInt(id);
        });
        if (result === undefined) {
          return res.status(400).json({ message: "Nenhum usuário encontrado" });
        }
        return res
          .status(200)
          .json({ data: result, message: "Usuário encontrado" });
      },
    
    //Create - Criar
    // Criar um usuário
    store: (req, res) => {
        const { nome, sobrenome, email, idade } = req.body;
        if (!nome || !sobrenome || !email || !idade) {
          return res.status(400).json({ message: "Preencha todos os campos" });
        }
        users.push({
          id: users.length + 1,
          nome,
          sobrenome,
          email,
          idade,
        });
        return res.status(201).json({ message: "Usuário criado com sucesso!" });
      },
    
    //update - Atualizar
    //Atualizar um usuário
    update: (req, res) => {
        const { id } = req.params;
        const { nome, sobrenome, email, idade } = req.body;
        const result = users.find(
          (user) =>
            //  user.id.toString() === id;
            user.id === parseInt(id)
        );
        if (!result) {
          return res.status(400).json({ message: "Nenhum usuário encontrado" });
        }
        const newUser = result;
        if (nome) newUser.nome = nome;
        if (sobrenome) newUser.sobrenome = sobrenome;
        if (email) newUser.email = email;
        if (idade) newUser.idade = idade;
        return res
          .status(200)
          .json({ message: "Atualização realizada com sucesso" });
      },
    
    //delete - Deletar
    //Delatar um usuário
    delete: (req, res) => {
        const { id } = req.params;
        const result = users.findIndex(
          (user) =>
            //  user.id.toString() === id;
            user.id === parseInt(id)
        );
        if (result === -1) {
          return res.status(400).json({ message: "Nenhum usuário encontrado" });
        }
        users.splice(result, 1);
        return res.status(200).json({ message: "Usuário deletado com sucesso" });
      },
    
};
module.exports = UserCsontroller;