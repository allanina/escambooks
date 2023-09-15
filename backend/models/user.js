import { Book } from "./book.js";
import { Message } from "./message.js";

class User {
    constructor(name, email, password, city, state, country) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.city = city;
        this.state = state;
        this.country = country;
        this.messages = {};
        this.bookshelf = []
    }



    logIn(email, password) {
        if (email === this.email && password === this.password) {
            console.log("Login realizado com sucesso!")
            localStorage.setItem('escambooks:user-name', this.name)
            return true
        } else {
            console.log("Login inválido. Verifique os dados informados e tente novamente!")
            return false;
        }
    }

    addNewBookToBookshelf(title, author, pages, publisher, isbn, bookCover) {
        const confirmExistingBook = this.bookshelf.find((book) => book.isbn === isbn);

        if (confirmExistingBook) {
            console.log(`Você já possui um livro com o ISBN ${isbn} em sua estante. Verifique as informações e tente novamente`)
            return;
        }

        const newBook = new Book(title, author, pages, publisher, isbn, bookCover)
        this.bookshelf.push(newBook);

        console.log(`Livro "${newBook.title}" adicionado à prateleira.`);
    }

    sendNewMessage(receiverEmail, text) {
        if (!this.messages[receiverEmail]) {
            this.messages[receiverEmail] = [];
        }

        const message = new Message(this.email, receiverEmail, text);
        this.messages[receiverEmail].push(message);
        console.log(`Mensagem de "${this.email}" para "${receiverEmail}" enviada.`);
    }


}

export { User }