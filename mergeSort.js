//Merge sort

//divides the given array into two halves in subarrays
//stable based on the divide and conquer technique

function mergeSort(array){
    if (array.length < 2 ){
        return array
    }

    const middle = Math.floor(array.length/2) //exactly division
    const left = array.slice(0, middle)
    const right = array.slice(middle)

    return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right){
    const sorted = []
    while(left.length && right.length){
        if (left[0]<= right[0]) {
            sorted.push(left.shift()) //delete first elemet of array

        }else{
            sorted.push(right.shift())
        }
    }

    const results = [...sorted,...left,...right]
    
    console.log(results)

    return results



}

const numbers = [10, 5, 6, 3,2,4,7,9,8,122,33]
mergeSort(numbers)