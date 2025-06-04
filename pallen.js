const pallenDrom=(n)=>{
    let original=n
    let rev=0
   while(n>0){
   let digit=n%10
   rev=rev*10+digit
   n = Math.floor(n / 10);
   }
   if(original===rev){
    console.log('given number is pallendrom')
   }else{
    console.log('not a pallendrom number')
   }
}

pallenDrom(121)