

export const verifyInputValue = (inputValue) => {

    const verifiedInputValue = inputValue.toLowerCase().trim().replace(/\s+/g, '+');

    return verifiedInputValue; 
   
} 