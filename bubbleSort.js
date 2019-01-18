//compare each elemet of list with the next and swap 
function bubbleSort(array){
    let swaped = false
    
    do{
        swaped = false
        array.forEach((item, index) => {
            console.log(array)
            if (item > array[index + 1]){
                const temporary = item
                array[index] = array[index +1]
                array[index + 1] = temporary
                swaped = true
            }
        })
    }while(swaped)
    return array
}

const numbers = [10, 5, 6, 3,2,44,1,2,3,122,3]

console.log(bubbleSort(numbers))

