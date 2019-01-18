//INSERTION SORT

//USE NESTED LOOPS
//ASSUMES A SORTED LIST OF LENGTH 1
//COMPARA THE NEXT ITEM 

function insertionSort(array){
    let i
    let j

    for(i = 1; i < array.length; i++){
        for(j = 0; j < i; j++){
            console.log(array)
            if(array[i] < array[j]){
                const[item] = array.splice(i,1) //remplace i 
                array.splice(j, 0, item)
            }
        }
    }


    return array
}

const numbers = [10, 5, 6, 3,2,44,1,2,3,122,3]

console.log(insertionSort(numbers))