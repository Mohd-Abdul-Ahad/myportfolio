import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, delay = 2000, typingSpeed = 150, erasingSpeed = 100 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer;
    
    const handleTyping = () => {
      const currentWord = words[loopNum % words.length];
      const updatedText = isDeleting 
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);
      
      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        // Word is fully typed, pause before deleting
        setTypingDelay(delay);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === '') {
        // Word is fully deleted, move to next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(typingSpeed);
      } else {
        // Continue typing or deleting
        setTypingDelay(isDeleting ? erasingSpeed : typingSpeed);
      }
    };

    timer = setTimeout(handleTyping, typingDelay);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingDelay, words, delay, typingSpeed, erasingSpeed]);

  return (
    <span className="typewriter-text">
      I Can build <span className="text-blue-400 font-bold">{text}</span>
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;