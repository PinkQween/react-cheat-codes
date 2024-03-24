import { Terminal } from 'react-terminal-component';

const TerminalEmulator = () => {
    const handleInput = (input) => {
        // Handle commands or inputs from the terminal
        console.log('Input received:', input);
    };

    return (
        <div className="terminal-wrapper">
            <Terminal
                welcomeMessage="Welcome to My Portfolio"
                onInput={handleInput}
                autoFocus
            />
        </div>
    );
};

export default TerminalEmulator;
