//trees
//trees are graphs without cycles
//Graph === have neighbors, not hierachical
//trees == have children are hierachical

function createNode(key){
    const children = [] //array with the children of every root

    return {
        key, //value 
        children, //array
        addChild(childKey){
            const childNode = createNode(childKey)
            children.push(childNode)
            return childNode
       }
    }

}

function createTree(rootKey){
    const root = createNode(rootKey)
    return{
        root,
        print(){
            let result = ''
            function traverse(node, visitFn, depth){
                visitFn(node, depth)

                if(node.children.length){
                    node.children.forEach(child => {
                        traverse(child, visitFn, depth+1)
                    });
                }
            }
            function addKeyResult(node, depth){
                result +=
                result.length ===0
                ? node.key
                : `\n${ ' '.repeat(depth * 2)}${
                    node.key
                }`
            }
            traverse(root, addKeyResult, 1)

            return result
        }
    }
}

const dom = createTree('htm')
const head = dom.root.addChild('head')
const body = dom.root.addChild('body')
const title = head.addChild('title - Tree lesson')
const header = body.addChild('header')
const main = body.addChild('main')
const footer = body.addChild('footer')
const h1 = header.addChild('hq- tree lesson')
const p = main.addChild('Learn about tree')
const copyright = footer.addChild(
    `Copyright ${new Date().getUTCFullYear()}`
)

console.log(dom.print())