//Binary trees and tree traversal
//binary tree, nodes can have 2 children


function createBinaryNode(key){
    return{
        key,
        left: null,
        right: null,
        addLeft(leftKey){
            const newLeft = createBinaryNode(leftKey)
            this.left = newLeft
            return newLeft
        },
        addRight(righttKey){
            const newRight = createBinaryNode(righttKey)
            this.right = newRight
            return newRight

        }
    }
}

const Traversals = {
    //LEFTCHILD--ROOT--RIGHT
    IN_ORDER: (node, visitFn ) =>{
        if(node!=null){
            Traversals.IN_ORDER(node.left, visitFn)
            visitFn(node)
            Traversals.IN_ORDER(node.right, visitFn)
        }
        
    },
    //ROOT--LEFT--RIGHT
    PRE_ORDER: (node,visitFn)=>{
        if(node!=null){
            visitFn(node)
            Traversals.PRE_ORDER(node.left, visitFn)
            Traversals.PRE_ORDER(node.right, visitFn)
        }

    },
    //LEFT--RIGHT-ROOT
    POST_ORDER: (node,visitFn)=>{
        if(node!=null){
            Traversals.POST_ORDER(node.left, visitFn)
            Traversals.POST_ORDER(node.right, visitFn)
            visitFn(node)
        }

    }  
}

function createBinaryTree(rootKey){
    const root = createBinaryNode(rootKey)

    return{
        root,
        print(traversalType = 'IN_ORDER'){
            let result = ''
            const visit = node =>{
                result += result.length ===0
                ? node.key
                :`=> ${node.key}`
            }

            Traversals[traversalType](this.root, visit)

            return result
        }
    }
}


const tree = createBinaryTree('a') //root
const b = tree.root.addLeft('b')
const c = tree.root.addRight('c')
const d = b.addLeft('d')
const e = b.addRight('e')
const f = c.addLeft('f')
const g = c.addRight('g')
const h = d.addLeft('h')
const i = d.addRight('i')

console.log(tree.print('PRE_ORDER'));