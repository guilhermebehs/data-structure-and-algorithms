

function bubbleSort(list){
  let swapped

  do{
    swapped  = false
    for(let i =0; i < list.length; i++){
      if(list[i] > list[i+1]){
          const temp = list[i+1]
          list[i+1] = list[i]
          list[i] = temp
          swapped = true
      }
  }
    }while(swapped)
  

   return list  
}

function quickSort(list){
   
    let pivot

    if(list.length === 1)
      return list
    if(list.length === 2)
      return  list[0] > list[1] ? [list[1], list[0]] : [list[0], list[1]]

    pivot = list[Math.floor(Math.random() * list.length)]

    let smallerThan =[]
    let greaterThan = []
    let equalThan = []      
    for(const number of list)
        if(pivot > number) 
          smallerThan.push(number)
        else if(pivot < number)
          greaterThan.push(number)
        else
          equalThan.push(number)

   return [...quickSort(smallerThan), ...equalThan, ...quickSort(greaterThan)]  
}

function selectionSort(list){
  let sortedList = []
  const listOriginalLength = list.length
  for(let i=0; i < listOriginalLength; i++){
      let smallerIndex = 0;
      for(let y=0; y < list.length; y++){
        if(list[y] < list[smallerIndex])
           smallerIndex = y
      }
      sortedList.push(list[smallerIndex])
      list.splice(smallerIndex,1)

  }
      
  return sortedList

}

const unorderedList = Array(8).fill(0).map(()=> Math.floor(Math.random() * 30))  

console.time('Bubble sort')
console.log(bubbleSort(unorderedList))
console.timeEnd('Bubble sort')


console.time('Quick sort')
console.log(quickSort(unorderedList))
console.timeEnd('Quick sort')


console.time('Selection sort')
console.log(selectionSort(unorderedList))
console.timeEnd('Selection sort')