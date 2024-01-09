function fibonacci(size, list = [0,1]){
   const listLength = list.length
   if(listLength === size)
      return list
   
   list.push(list[listLength-1]+list[listLength-2])
   return fibonacci(size, list)  
}

console.log('Fibonacci',fibonacci(10))