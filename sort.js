// sort array

const sortArr=(arr)=>{
  const len=arr.length-1
  for (let i = 0; i < len; i++) {
   for (let j = 0; j <len; j++) {
    if(arr[j+1]<arr[j]){
        [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
    }
    
   }
    
  }
  return arr
}

console.log(sortArr([3,9,5,7]))