class Message {
    constructor(sender, receiver, text) {
        this.sender = sender;
        this.receiver = receiver;
        this.text = text;
        const options = { timeZone: 'America/Sao_Paulo' }; 
        this.timestamp = new Date().toLocaleString('pt-BR', options);
    }
}

export { Message }