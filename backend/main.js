import { User } from "./models/user.js"
import { UserRepository } from "./models/userRepository.js";

const userRepository = new UserRepository();
const user1 = new User("Foo Lana", "foo.lana@email.com", 'senha123', 'Igarassu', 'Pernambuco', 'Brasil');

if (!userRepository.getUserByEmail(user1.email)) {
    userRepository.addUser(user1);
    console.log(`Usuário ${user1.name} criado com sucesso!`)
    console.log(userRepository.getAllUsers())
} else {
    console.log("Já existe uma conta vinculada a este email")
}

const messageText = "Teste de mensagem para outro usuário";
if (user1) {
    user1.sendNewMessage('si.crana@email.com', messageText)
    console.log(user1.messages)
}


user1.addNewBookToBookshelf('Orgulho e Preconceito', 'Jane Austen', 576, "Penguin-Companhia", '978-8563560155', 'https://m.media-amazon.com/images/I/81JdM-o7K3S._SL1500_.jpg');
console.log(user1.bookshelf)