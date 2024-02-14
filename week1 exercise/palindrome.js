// return true if the input string is a palindrome and false otherwise
let isPalindrome = "Race car";

let notPalindrome = "Not matching";

/*function palindrome(wordCheck){
    let x = 0;
    let y = wordCheck.length;
    for (let i = 0; i < wordCheck.length; i++){
        if (wordCheck[x]==='\s') {
            x++;
        }
        if (wordCheck[y]==='\s') {
            y--;
        }
        if (wordCheck[x]!==wordCheck[y]){
            return console.log(false);
        }
        x++;
        y--;
    }
    return console.log(true);
}*/



function palindrome(word) {
    var noSpace = word.replaceAll(" ","").toLowerCase();
    var reversedArr = [];
    

    for (let i = noSpace.length; i >= 0; i--) {
        reversedArr.push(noSpace[i]);
    }

    var reversedString = reversedArr.join("");

    for (let i = 0; i < noSpace.length; i++) {
        if (noSpace[i]!=reversedString[i]){
            return console.log(false);
        }
    }

    return console.log(true);
}

palindrome(isPalindrome);
palindrome(notPalindrome);