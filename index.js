const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

function titleCased () {
const seperateWords = tutorials.map((tutorials) => {return tutorials.split(' ')});
//console.log(seperateWords)

 const Words = seperateWords.map(words => {
   //console.log('words',words);
   let arrayOfWords = words.map(word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
})
 return(arrayOfWords.join(' '));
 })
 
 return Words
 

}
console.log(titleCased());