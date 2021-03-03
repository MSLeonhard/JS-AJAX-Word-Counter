console.log('connected...')

//part 1 steps
//1. input text file
//2. iterate through the text file for unique words
//3. count instances of each unique word
//4. output words and their amount of times that word appears

let xhr = new XMLHttpRequest();

let parseResponse = function (input) {
    let noPunctuation = input.replace(/[.,\/#!$%\^&\*;:{}=\_`~()]?/g,"").replace(/-/g, " ");
    let splitArr = splitString(noPunctuation)
    console.log(splitArr)
}

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById('test').innerHTML = this.responseText
        parseResponse(this.responseText)
    }
};

xhr.open('GET', 'https://class-demo-files-and-resources.s3.amazonaws.com/Green-Eggs-And-Ham.txt', true);

xhr.send()

let words = {};

function splitString (string) {
    let arr = string.split(" ")
    for (i = 0; i<arr.length; i++) {
        arr[i] = arr[i].split("\n")
    }
    return arr
}


























//part 2 steps
//1. create an object that accepts a text file
//2. return the word count of the file
//3. display unique word count
//4. display most and least used words
//5. return longest word
//6. create method that accepts a string, and returns the number of instances of that string in the text file
