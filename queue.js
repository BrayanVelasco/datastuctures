//Fifo first in first out
//METHODS
//* enqueue = add item to queue 
//*dequeue = return final item and remove this item
//*peek return first element
//*length return size of queue
//*is empty boolean if have elements

function createQueue(){
    const queue = [];
    return{
        enqueue(item){
            queue.unshift(item); //unfish add top
        },
        dequeue(){
            return queue.pop(); //del last element first in
        },
        get length(){
            return queue.length;
        },
        peek(){
            return queue[queue.length-1]
        },
        isEmpty(){
            return queue.length === 0;
        },
        print(){
            queue.forEach((value) => console.log(value));
        }
    }
}

let queue = createQueue();

queue.enqueue(133)
queue.enqueue("hello")
queue.enqueue(56)
queue.enqueue("Brian")
console.log(queue.peek())

console.log(queue.isEmpty());
queue.print();

console.log("size"+ queue.length);

//example 

export  {createQueue};