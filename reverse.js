const greetings = 'Hello how are you?';
function reverseString(test){
    let reverse = '';
    for(const letter of test){
        console.log(letter);
        reverse = reverse + letter;
        // reverse = letter + reverse;     // Reverse angle '?uoy era woh olleH'
    }
}

const reversed = reverseString(greetings);
console.log(reversed);