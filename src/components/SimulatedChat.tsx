import { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    sender: 'user' | 'ai';
    text: string;
    timestamp: Date;
}

const SimulatedChat = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            sender: 'ai',
            text: "Hello, I'm Dr. AI. How can I assist you with your health today?",
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            sender: 'user',
            text: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate AI thinking and response
        setTimeout(() => {
            const responses = [
                "I understand. Based on those symptoms, could you tell me how long you've been experiencing this?",
                "I'm analyzing that information. Are you experiencing any other related symptoms?",
                "Please seek immediate medical attention if the pain is severe. Otherwise, rest and hydration are recommended.",
                "That sounds like it could be related to stress or fatigue. Have you been sleeping well?",
                "I've noted that down. Let's monitor this for the next 24 hours."
            ];

            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                text: randomResponse,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="container" style={{ padding: '2rem 1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div className="glass-card animate-fade-in" style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                height: '70vh',
                maxWidth: '900px',
                margin: '0 auto',
                width: '100%',
                padding: 0,
                overflow: 'hidden'
            }}>
                {/* Header */}
                <div style={{
                    padding: '1.5rem',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'rgba(15,23,42,0.5)'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: 'var(--color-brand-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.25rem'
                    }}>🤖</div>
                    <div>
                        <h3 style={{ fontSize: '1.1rem', margin: 0 }}>Dr. AI Assistant</h3>
                        <div style={{ fontSize: '0.8rem', color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor' }}></span>
                            Online
                        </div>
                    </div>
                </div>

                {/* Messages */}
                <div style={{
                    flex: 1,
                    padding: '1.5rem',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                }}>
                    {messages.map((msg) => (
                        <div key={msg.id} style={{
                            alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                            maxWidth: '80%',
                            backgroundColor: msg.sender === 'user' ? 'var(--color-brand-primary)' : 'rgba(255,255,255,0.05)',
                            padding: '1rem',
                            borderRadius: '1rem',
                            borderBottomRightRadius: msg.sender === 'user' ? '2px' : '1rem',
                            borderTopLeftRadius: msg.sender === 'ai' ? '2px' : '1rem',
                        }}>
                            <p style={{ margin: 0 }}>{msg.text}</p>
                            <div style={{
                                fontSize: '0.7rem',
                                opacity: 0.7,
                                marginTop: '0.5rem',
                                textAlign: msg.sender === 'user' ? 'right' : 'left'
                            }}>
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </div>
                        </div>
                    ))}
                    {isTyping && (
                        <div style={{
                            alignSelf: 'flex-start',
                            backgroundColor: 'rgba(255,255,255,0.05)',
                            padding: '1rem',
                            borderRadius: '1rem',
                            borderTopLeftRadius: '2px',
                            display: 'flex', gap: '0.3rem'
                        }}>
                            <span className="dot" style={{ animation: 'bounce 1s infinite' }}>•</span>
                            <span className="dot" style={{ animation: 'bounce 1s infinite 0.2s' }}>•</span>
                            <span className="dot" style={{ animation: 'bounce 1s infinite 0.4s' }}>•</span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div style={{
                    padding: '1.5rem',
                    background: 'rgba(15,23,42,0.5)',
                    borderTop: '1px solid rgba(255,255,255,0.05)'
                }}>
                    <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '1rem' }}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your symptoms..."
                            style={{
                                flex: 1,
                                padding: '1rem',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                background: 'rgba(0,0,0,0.2)',
                                color: 'white',
                                outline: 'none',
                                fontFamily: 'inherit'
                            }}
                        />
                        <button type="submit" className="btn btn-primary" disabled={!inputValue.trim() || isTyping}>
                            Send
                        </button>
                    </form>
                </div>
            </div>
            <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
      `}</style>
        </div>
    );
};

export default SimulatedChat;
