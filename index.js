//  Remove duplicate from the string

const removeDuplicate=(str)=>{
 let uniqueStr=[]
 let freq={}
 let count=0
 const len = str.length;
 for(let i=0;i<len;i++){

   let ch=str[i]
   if(freq[ch]){
    freq[ch]++
   }else{
    freq[ch]=1
   }
   

    if(!uniqueStr.includes(str[i])){
        uniqueStr.push(str[i])
        count++
    } 
 }
 console.log(freq)

 for (const key in freq) {
   console.log(freq[key]+key)
 }

 console.log(' uniqueStr length:', count);
 return uniqueStr.join('')
}

console.log(removeDuplicate('aabbccc'))