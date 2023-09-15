class UserRepository {
    constructor() {
        this.users = []
    }

    getAllUsers() {
        return this.users
    }

    getUserByEmail(email) {
        const foundUser = this.users.find((user) => user.email === email);
        return foundUser;
    }

    addUser(user) {
        const existingUser = this.getUserByEmail(user.email);

        if (existingUser) {
            throw new Error("Usuário com o mesmo email já existe!")
        } else {
            this.users.push(user)
        }
    }
}

export { UserRepository }