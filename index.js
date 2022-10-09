// Compare the Triplets
function compareTriplets(a0, a1, a2, b0, b1, b2) {

     var solution = []
 
     if (a0 > b0 || a1 > b1 || a2 > b2) {
         solution += 1;
     }
     if (a0 < b0 || a1 < b1 || a2 < b2 ) {
         solution += 1;
     }
     return solution.split('');
 }
    
// output  1
 console.log('compare Triplets',compareTriplets(0,0,1,1,2,2))

 //Check Prime
 const isPrime = num => {
     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
         if(num % i === 0) return false; 
     return num > 1;
 }
 console.log('check prime’',isPrime(237))// false
 console.log('check prime',isPrime(137)) //true

 //Remove Duplicate
 function removeDuplicate(arr) {
     var exists = {},
         outArr = [],
         elm;
 
     for (var i = 0; i < arr.length; i++) {
         elm = arr[i];
         if (!exists[elm]) {
             outArr.push(elm);
             exists[elm] = true;
         }
     }
     return outArr;
 }

 const  removeArrayDuplicate = [1,3,3,3,1,5,6,7,8,1]
 console.log('removeDuplicate :',removeDuplicate(removeArrayDuplicate));
//output [1, 3, 5, 6, 7, 8]


//Reverse In Place

function reverseInPlace(str) {
     var words = [];
     words = str.match(/\S+/g);
     var result = "";
     for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('') + " ";
     }
     return result
   }
   console.log('Check ReverseIn Place',reverseInPlace("what is your name"))
   //output Check ReverseIn Place tahw si ruoy eman
  
  
   //First non repeating char
   
   function firstNonRepeatedCharacter(string) {
     for (let i = 0; i < string.length; i++) {
         let f = string.charAt(i);
         if (string.indexOf(f) == i && string.indexOf(f, i + 1) == -1) {
             return f;
         }
     }
     return null;
 }
 
 const string = 'the quick brown fox jumps then quickly blow air';
 console.log('RepEated :',firstNonRepeatedCharacter(string));
 //output f

 
