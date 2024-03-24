import { useEffect, useState } from "react";

/**
 * Custom React hook to detect a specific code sequence typed by the user.
 * 
 * @param {string} code - The code to match against.
 * @param {Function} callback - The callback function to call when the code is typed.
 * @returns {Void} - The currently typed code.
 */

export default (code, callback) => {
    const [typedCode, setTypedCode] = useState("");

    const codeListener = (event) => {
        const typed = (event.key || String.fromCharCode(event.keyCode || event.which)).toLowerCase();
        const newTypedCode = typedCode + typed;

        if (newTypedCode === code.substr(0, newTypedCode.length)) {
            setTypedCode(newTypedCode);

            if (newTypedCode === code) {
                callback();
                setTypedCode(""); // Reset the typed code after successful typing if you want to allow typing the code again
            }
        } else {
            setTypedCode("");
        }
    };

    useEffect(() => {
        document.addEventListener("keypress", codeListener);

        return () => {
            document.removeEventListener("keypress", codeListener); // Clean up the listener when the component unmounts
        };
    }, [code, callback, typedCode]);
};

/**
 * Custom React hook to detect a specific code sequence with a timeout.
 * 
 * @param {string} code - The code to match against.
 * @param {Function} callback - The callback function to call when the code is typed.
 * @param {number} timeout - The timeout in milliseconds after which the typed code resets.
 * @returns {Void} - The currently typed code.
 */
const useTimeSensitiveCode = (code, callback, timeout) => {
    const [typedCode, setTypedCode] = useState("");
    const [timer, setTimer] = useState(null);

    const resetTypedCode = () => {
        setTypedCode("");
        clearTimeout(timer);
    };

    const codeListener = (event) => {
        const typed = (event.key || String.fromCharCode(event.keyCode || event.which)).toLowerCase();
        const newTypedCode = typedCode + typed;

        if (newTypedCode === code.substr(0, newTypedCode.length)) {
            setTypedCode(newTypedCode);

            if (newTypedCode === code) {
                callback();
                resetTypedCode();
            } else if (timeout) {
                clearTimeout(timer);
                const newTimer = setTimeout(resetTypedCode, timeout);
                setTimer(newTimer);
            }
        } else {
            resetTypedCode();
        }
    };

    useEffect(() => {
        document.addEventListener("keypress", codeListener);

        return () => {
            document.removeEventListener("keypress", codeListener); // Clean up the listener when the component unmounts
            clearTimeout(timer); // Clear the timeout on unmount
        };
    }, [code, callback, typedCode, timer, timeout]);
};

/**
 * Custom React hook to detect a specific code sequence with a timeout per character.
 * 
 * @param {string} code - The code to match against.
 * @param {Function} callback - The callback function to call when the code is typed.
 * @param {number} timeoutPerCharacter - The timeout in milliseconds after typing each character.
 * @returns {Void} - The currently typed code.
 */
const useTimeSensitiveCodeEachCharacter = (code, callback, timeoutPerCharacter) => {
    const [typedCode, setTypedCode] = useState("");

    useEffect(() => {
        let timeoutId;

        const codeListener = (event) => {
            clearTimeout(timeoutId);

            const typed = (event.key || String.fromCharCode(event.keyCode || event.which)).toLowerCase();
            const newTypedCode = typedCode + typed;

            if (newTypedCode === code.substr(0, newTypedCode.length)) {
                setTypedCode(newTypedCode);

                if (newTypedCode === code) {
                    callback();
                    setTypedCode("");
                } else {
                    timeoutId = setTimeout(() => {
                        setTypedCode("");
                    }, timeoutPerCharacter);
                }
            } else {
                setTypedCode("");
            }
        };

        document.addEventListener("keypress", codeListener);

        return () => {
            document.removeEventListener("keypress", codeListener);
            clearTimeout(timeoutId);
        };
    }, [code, callback, typedCode, timeoutPerCharacter]);
};

/**
 * Custom React hook to detect a specific code sequence with both timeout per character and overall timeout.
 * 
 * @param {string} code - The code to match against.
 * @param {Function} callback - The callback function to call when the code is typed.
 * @param {number} timeoutPerCharacter - The timeout in milliseconds after typing each character.
 * @param {number} overallTimeout - The overall timeout in milliseconds after which the typed code resets.
 * @returns {Void} - The currently typed code.
 */
const useCombinedTimeSensitiveCode = (code, callback, timeoutPerCharacter, overallTimeout) => {
    const [typedCode, setTypedCode] = useState("");
    const [timer, setTimer] = useState(null);

    const resetTypedCode = () => {
        setTypedCode("");
        clearTimeout(timer);
    };

    useEffect(() => {
        let timeoutId;

        const codeListener = (event) => {
            clearTimeout(timeoutId);

            const typed = (event.key || String.fromCharCode(event.keyCode || event.which)).toLowerCase();
            const newTypedCode = typedCode + typed;

            if (newTypedCode === code.substr(0, newTypedCode.length)) {
                setTypedCode(newTypedCode);

                if (newTypedCode === code) {
                    callback();
                    resetTypedCode();
                } else {
                    timeoutId = setTimeout(() => {
                        setTypedCode("");
                    }, timeoutPerCharacter);
                }
            } else {
                resetTypedCode();
            }
        };

        const overallTimeoutHandler = () => {
            resetTypedCode();
        };

        document.addEventListener("keypress", codeListener);
        const overallTimer = setTimeout(overallTimeoutHandler, overallTimeout);

        return () => {
            document.removeEventListener("keypress", codeListener);
            clearTimeout(timeoutId);
            clearTimeout(overallTimer);
        };
    }, [code, callback, typedCode, timeoutPerCharacter, overallTimeout]);
};

export {
    useTimeSensitiveCode,
    useTimeSensitiveCodeEachCharacter,
    useCombinedTimeSensitiveCode
}