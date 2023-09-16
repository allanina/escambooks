const { Message } = require("../message");
const { User } = require("../user");

describe("User", () => {
    let user;

    beforeEach(() => {
        user = new User(
            "Foo Lana",
            "foo.lana@email.com",
            "senha123",
            "Igarassu",
            "Pernambuco",
            "Brasil"
        );
    });

    it("should create a user with the correct properties", () => {
        expect(user.name).toBe("Foo Lana");
        expect(user.email).toBe("foo.lana@email.com");
        expect(user.password).toBe("senha123");
        expect(user.city).toBe("Igarassu");
        expect(user.state).toBe("Pernambuco");
        expect(user.country).toBe("Brasil");
        expect(user.messages).toEqual({});
        expect(user.bookshelf).toEqual([]);
    });

    it("should successfully log in with the correct email and password", () => {
        expect(user.logIn("foo.lana@email.com", "senha123")).toBe(true);
    });

    it("should fail to log in with incorrect email or password", () => {
        expect(user.logIn("foo.lana@email.com", "wrongpassword")).toBe(false);
    });

    it("should add a new book to the bookshelf", () => {
        const bookData = {
            title: "Orgulho e Preconceito",
            author: "Jane Austen",
            pages: 576,
            publisher: "Penguin-Companhia",
            isbn: "978-8563560155",
            bookCover: "https://m.media-amazon.com/images/I/81JdM-o7K3S._SL1500_.jpg",
        };

        user.addNewBookToBookshelf(
            bookData.title,
            bookData.author,
            bookData.pages,
            bookData.publisher,
            bookData.isbn,
            bookData.bookCover
        );

        expect(user.bookshelf).toHaveLength(1);
        expect(user.bookshelf[0]).toEqual(expect.objectContaining(bookData));
    });

    it("should not add a book with duplicate ISBN to the bookshelf", () => {
        const bookData = {
            title: "Orgulho e Preconceito",
            author: "Jane Austen",
            pages: 576,
            publisher: "Penguin-Companhia",
            isbn: "978-8563560155",
            bookCover: "https://m.media-amazon.com/images/I/81JdM-o7K3S._SL1500_.jpg",
        };

        user.addNewBookToBookshelf(
            bookData.title,
            bookData.author,
            bookData.pages,
            bookData.publisher,
            bookData.isbn,
            bookData.bookCover
        );

        user.addNewBookToBookshelf(
            bookData.title,
            bookData.author,
            bookData.pages,
            bookData.publisher,
            bookData.isbn,
            bookData.bookCover
        );

        expect(user.bookshelf).toHaveLength(1);
    });

    it("should send a new message", () => {
        const receiverEmail = "si.crana@email.com";
        const text = "Olá, Si Crana!";

        user.sendNewMessage(receiverEmail, text);

        expect(user.messages[receiverEmail]).toHaveLength(1);
        expect(user.messages[receiverEmail][0].text).toBe(text);
    });

    it("should send a new message when messages with the same recipient already exist", () => {
        const receiverEmail = "si.crana@email.com";
        const text1 = "Olá, Si Crana!";
        const text2 = "Como você está?";

        user.messages[receiverEmail] = [new Message("bel.trana@example.com", receiverEmail, "Mensagem existente")];

        user.sendNewMessage(receiverEmail, text1);
        user.sendNewMessage(receiverEmail, text2);

        expect(user.messages[receiverEmail]).toHaveLength(3);
        expect(user.messages[receiverEmail][1].text).toBe(text1);
        expect(user.messages[receiverEmail][2].text).toBe(text2);
    });

});
