const { UserRepository } = require("../userRepository");
const { User } = require("../user");

describe("UserRepository", () => {
    let userRepository;

    beforeEach(() => {
        userRepository = new UserRepository();
    });

    it("should add a new user to the repository", () => {
        const user = new User("Foo Lana", "foo.lana@email.com", "senha123", "Igarassu", "Pernambuco", "Brasil");
        userRepository.addUser(user);
        const users = userRepository.getAllUsers();

        expect(users).toHaveLength(1);
        expect(users[0]).toBe(user);
    });

    it("should not add a user with the same email to the repository", () => {
        const user1 = new User("Foo Lana", "foo.lana@email.com", "senha123", "Igarassu", "Pernambuco", "Brasil");
        const user2 = new User("Si Crana", "foo.lana@email.com", "senha123", "Igarassu", "Pernambuco", "Brasil");

        userRepository.addUser(user1);

        expect(() => {
            userRepository.addUser(user2);
        }).toThrow("Usuário com o mesmo email já existe!");

        const users = userRepository.getAllUsers();
        expect(users).toHaveLength(1); 
    });

    it("should retrieve a user by email", () => {
        const user = new User("Foo Lana", "foo.lana@email.com", "senha123", "Igarassu", "Pernambuco", "Brasil");
        userRepository.addUser(user);

        const retrievedUser = userRepository.getUserByEmail("foo.lana@email.com");
        expect(retrievedUser).toBe(user);

        const nonExistentUser = userRepository.getUserByEmail("bel.trana@email.com");
        expect(nonExistentUser).toBeUndefined(); 
    });
});
