// sorting array of objects by title value
var library =[
  {
    author: "Bill gates",
    title: "The road Ahead",
    libraryID: "1254"
  }, 
  {
    author: "steve jobs",
    title: "walther Isaacson",
    libraryID: "4264"
  }, 
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The final Book of the Hunger Games",
    libraryID: "3245"
  }
];
function compareTitles(a,b) {
  if(a.title < b.title){
    return -1;
  }
  if(a.title > b.title){
    return 1
  }
  return 0
}
console.log(library.sort(compareTitles))

// ===================================
// merging two arrays and eliminating duplicate numbers
// ===================================

var array1 =[1,2,3]
var array2 =[2,30,1]

// var c = array1.concat(array2.filter((item)=>array1.indexOf(item) < 0 ))
// console.log(c)

function mergeUnique(array1,array2){
  // concat keyword merges two designated array
  return array1.concat(array2.filter(function(item){
 // filter keyword filters out any repeated value in array2 before being merged with array1
    return array1.indexOf(item)=== -1;
  }))
}
console.log(mergeUnique(array1,array2));
// ======================================
// adding two elements from array to equal a target number
// ======================================
let twoSum = (array, sum) => {
  let hasMap = {},
  results = []

  for(let i =0; i < array.length; i++){
    if(hasMap[array[i]]){
      results.push([hasMap[array[i]], array[i]])
    }else{
      hasMap[sum - array[i]] = array[i];
    }
    // hasMaps are structures that store data in an array-like format
  }
  return results
}

console.log(twoSum([10,20,30,40,50,60,70,30],50));


