const { Book } = require("../book");

describe("Book", () => {
    it("should create a book with the correct properties", () => {
        const newBook = new Book(
            "Orgulho e Preconceito",
            "Jane Austen",
            576,
            "Penguin-Companhia",
            "978-8563560155",
            "https://m.media-amazon.com/images/I/81JdM-o7K3S._SL1500_.jpg"
        );

        expect(newBook.title).toBe("Orgulho e Preconceito");
        expect(newBook.author).toBe("Jane Austen");
        expect(newBook.pages).toBe(576);
        expect(newBook.publisher).toBe("Penguin-Companhia");
        expect(newBook.isbn).toBe("978-8563560155");
        expect(newBook.bookCover).toBe(
            "https://m.media-amazon.com/images/I/81JdM-o7K3S._SL1500_.jpg"
        );
    });
});
