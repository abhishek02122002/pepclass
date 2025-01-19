let words = ["eat","tea","listen","silent","messi","semsi"];

function anagramGroup(array_words){
     const obj = {};
     for(let word of array_words){
          const sorted = word.split('').sort().join('');

          if(!obj[sorted]){
               obj[sorted]=[];

          }
          obj[sorted].push(word);
     }
     return Object.values(obj);
}

const result = anagramGroup(words);
console.log(result)