const { Message } = require("../message");

describe("Message", () => {
    it("should create a message with the correct properties", () => {
        const sender = "foo.lana@example.com";
        const receiver = "si.crana@example.com";
        const text = "Opa, Si Crana!";

        const message = new Message(sender, receiver, text);

        expect(message.sender).toBe(sender);
        expect(message.receiver).toBe(receiver);
        expect(message.text).toBe(text);
    });

    it("should throw an error if text length exceeds the limit", () => {
        const longMessage = "A".repeat(1001);

        expect(() => new Message("foo.lana@example.com", "si.crana@example.com", longMessage)).toThrow(
            "O texto da mensagem excede o limite de caracteres permitido."
        );
    });

    it("should not throw an error if text length is within the limit", () => {
        const messageText = "Opa, Si Crana!";

        expect(() => new Message("foo.lana@example.com", "si.crana@example.com", messageText)).not.toThrow();
    });
});
