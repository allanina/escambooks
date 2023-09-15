class Message {
    constructor(sender, receiver, text) {
        this.sender = sender;
        this.receiver = receiver;
        this.text = text;
        this.timestamp = this.getCurrentTimestamp();
        this.maxTextLength = 1000; 
        this.validateTextLength();
    }

    getCurrentTimestamp() {
        const options = { timeZone: 'America/Sao_Paulo' };
        return new Date().toLocaleString('pt-BR', options);
    }

    validateTextLength() {
        if (this.text.length > this.maxTextLength) {
            throw new Error("O texto da mensagem excede o limite de caracteres permitido.");
        }
    }
}

export { Message }