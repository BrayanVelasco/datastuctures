import  { createQueue } from './queue.js'

function createPriorityQueue(){
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();

    return{
        enqueue(item, isHighPriority = false){ //(item, if is priority true)
               if(isHighPriority){
                   highPriorityQueue.enqueue(item); // true -> add item in high queue
               }
               else{
                   lowPriorityQueue.enqueue(item); //lowpriority -> if is false
               }
        },
        dequeue(){
            if(!highPriorityQueue.isEmpty()){
                return highPriorityQueue.dequeue(); //if hpq have elements deque 
            }
            else{
                return lowPriorityQueue.dequeue(); //if hpq dont have elements del in lwpq
            }
        },
        peek(){
            if(!highPriorityQueue.isEmpty()){
                return highPriorityQueue.peek();
            }
            else{
                return lowPriorityQueue.peek();
            }

        },
        get length(){
            return highPriorityQueue.length + lowPriorityQueue.length
        },
        isEmpty(){
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
        }

    }

}



const Pq = createPriorityQueue();

Pq.enqueue("first elemet");
Pq.enqueue("second element");
Pq.enqueue("third element");
Pq.enqueue("Priority element", true)
console.log(Pq.peek());

