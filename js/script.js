console.log('connected...')

//part 1 steps
//1. input text file
//2. iterate through the text file for unique words
//3. count instances of each unique word
//4. output words and their amount of times that word appears

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://class-demo-files-and-resources.s3.amazonaws.com/Green-Eggs-And-Ham.txt', true);

xhr.send()

let parseResponse = function (input) {
    let noPunctuation = input.replace(/[.,?\/#!$%\^&\*;:{}=\_`~()]/g,"").replace(/-/g, " ").replace(/\n/g, " ");
    let makeUniform = noPunctuation.toUpperCase()
    let splitArr = splitString(makeUniform)
    let removeEmpty = splitArr.filter(e => e) //total word count
    console.log(removeEmpty)
    for (i = 0; i<removeEmpty.length; i++) {
        if (words[removeEmpty[i]]) {
            words[removeEmpty[i]]++
        } else {
            words[removeEmpty[i]] = 1
        }
    }
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        parseResponse(this.responseText)
    }
};

function splitString (string) {
    let arr = string.split(" ")
    return arr
}

let words = {
}

console.log(words)

//iterate through the array with all of our words in it (removeEmpty)
//create name value pairs for new words with a starting value of 1
//if a word is already in the object/array, increment its value by 1

//need to return:
//length of text (remove empty length)
//unique word count (words object length)
//most used word (words object pair with highest value)
//least used word (words object pair with lowest value)
//longest word (words object key with longest length)





//part 2 steps
//1. create an object that accepts a text file
//2. return the word count of the file
//3. display unique word count
//4. display most and least used words
//5. return longest word
//6. create method that accepts a string, and returns the number of instances of that string in the text file
