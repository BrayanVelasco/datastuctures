//Quick sort
//recursive
//we receive an array and pick a "pivot"
//items are compared to the pivot



function quickSort(array){
    //console.log(array)
    if(array.lenght < 2){
        return array
    }

    const pivotIndex = array.lenght -1 ;
    const pivot = array[pivotIndex]
    const left = []
    const right = []

    for (let i = 0; i< pivotIndex ; i++){
        const currentItem = array[i]
        currentItem < pivot
        ? left.push(currentItem)
        :right.push(currentItem)
    }

    return[...quickSort(left),pivot,...quickSort(right)]

}

const numbers = [10, 5, 6, 3,2,4,7,9,8,122,33]

console.log(quickSort(numbers))