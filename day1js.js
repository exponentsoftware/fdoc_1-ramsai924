/*
1.a. Write a function which count the number of occurrence of words in a paragraph or a sentence.
The function countWords takes a paragraph and two words as parameters. It compare which word is most frequently
 occurred in the paragraph.

const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do 
not love something which can give life to your application what else can you love.';
console.log(countWords(paragraph,'love', 'you'));
*/

//1.a solution
function countWords(para, word1, word2){

    let filterArguments = Object.values(arguments).filter((ele, i) => i > 0)
    let paraArray = para.split(" ")
    let arrayWords = filterArguments
    let resultObj = {}

    function filterWords(word){
        return word.split(".").join('')
    }

    arrayWords.forEach(element => {
        let count = 0;
        paraArray.forEach((ele) => {
            if (filterWords(ele) === element){
                count++
            }
        })
        resultObj[element] = count
    });

    let objvals = Object.values(resultObj)
    let ObjKeys = Object.keys(resultObj)
    let maxVal = Math.max(...objvals)
    let ObjValsIndex = objvals.findIndex((ele) => ele === maxVal)
 
    return `The word ${ObjKeys[ObjValsIndex]} is more frequently occurred than you.`;
}
const paragraph = 'I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.';
// console.log(countWords(paragraph, 'love', 'you'))


//1.b. Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.
const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

function cleanText(text){
    const textArray = text.split(' ')
    let cleanText = ''
    const regex = /[A-Za-z]+/g
    textArray.forEach((ele) => {
        let nestedWord = ele.split("").filter((word) => word.match(regex)).join('')
        cleanText += `${nestedWord} `;
    })
    
    return cleanText;
}
// console.log(cleanText(sentence))

//1.b. Write a function called cleanText. The function takes raw text as a parameter and returns the clean text.

function countWords(string){
    let count = 0
    let stringArray = string.split(" ");
    stringArray.forEach((ele) => {
        let nestedEle = ele.split("").join("")
        if (nestedEle.length > 1){
            count++
        }
    })

    return count;
}

console.log(countWords(cleanText(sentence)))