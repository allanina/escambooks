class EmailValidator {
    static validate(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            throw new Error("Email inválido. Verifique as informações e tente novamente");
        }
    }
}

export default EmailValidator;