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
  const seperateWords = tutorials.map((tutorials) => {return tutorials.toLowerCase().split(' ')});
  console.log(seperateWords)
  
  for (let word of seperateWords) {
    //console.log(word)
   
    const capitalizeWords = word.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  console.log(capitalizeWords)
  //return(capitalizeWords)
  }
  
  }
   
 
 // const initialValue = "";
 
//    let stringSum = whatThis2.reduce(
//   (previousValue, currentValue) => previousValue + currentValue + " ",
//   initialValue
// );
  //return whatThis3
}
  // const stringSum = whatThis2.map((whatThis2) => whatThis2.join(" "));
//console.log(whatThis2)

// const initialValue = 0;
// const sumWithInitial = whatThis2.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

//console.log(whatThis3);

  
}

titleCased();