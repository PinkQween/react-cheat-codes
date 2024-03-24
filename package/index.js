import { useEffect, useState } from "react";

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

    return typedCode;
};