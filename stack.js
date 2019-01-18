//Stacks LIFO (Last In First Out)
//Methods:
//push add value to end of stack
//pop  return last value of stack and del
//peek return last value not delete
//lenght size of stack
//print show elemets of stack
//is empty

function createStack(){
    const array =[]
    return{
        push(item){
            array.push(item);
        },
        pop(){
            return array.pop();
        },
        peek(){
            return array[array.length -1];
        },
        get length(){
            return array.length;
        },
        isEmpty(){
            return array === 0;
            
        },
        print(){
            array.forEach((value) => console.log(value));
        }
        

    }
}

const stack = createStack();
stack.push("Jeans");
stack.push("Sox");
stack.push("shoes");
//stack.print();
stack.pop()
console.log(stack.peek());
