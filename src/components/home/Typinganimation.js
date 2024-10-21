import { useEffect, useState } from 'react';

const useTypingAnimation = (text, delay) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isCursorVisible, setIsCursorVisible] = useState(true);
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        if (text.length === 0) return; // Exit if there's no text

        // Reset the state for new typing animation
        setDisplayedText('');
        setIsTypingComplete(false);

        let index = 0;

        // Start typing animation
        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText((prev) => prev + text.charAt(index));
                index++;
            } else {
                clearInterval(typingInterval); // Stop when done
                setIsTypingComplete(true); // Mark typing as complete
            }
        }, delay);

        // Cursor blinking effect
        const cursorInterval = setInterval(() => {
            if (isTypingComplete) {
                setIsCursorVisible((prev) => !prev);
            }
        }, 500);

        // Cleanup function to clear intervals on unmount
        return () => {
            clearInterval(typingInterval);
            clearInterval(cursorInterval);
        };
    }, [text, delay,isTypingComplete]); // Only run effect when text or delay changes

    return { displayedText, isCursorVisible };
};

export default useTypingAnimation;
