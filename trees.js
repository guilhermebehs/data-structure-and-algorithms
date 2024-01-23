class Node{
    value = null
    left = null
    right = null

    constructor(value){
      this._value = value
    }

}


class BinarySearchTree{
    _root = null

    constructor(root){
      this._root = root
    }

    addNode(node){
       if(this._root === null){
         this._root = node
         return
       }
       let currentNode = this._root
       do{ 
         if(currentNode.value > node.value){
            if(currentNode.left === null){
              currentNode.left = node
              break
            } else{
                currentNode = currentNode.left
            }
         }
         else{
            if(currentNode.right === null){
              currentNode.right = node
              break
            }
            else{
              currentNode = currentNode.right
            }
         }

       }while(currentNode !== null)
    }

    printPreorder(){
        if(this._root === null)
            return
        let currentNode = this._root
        this._preorder(currentNode)
    }

    printPostorder(){
        if(this._root === null)
            return
        let currentNode = this._root
        this._postorder(currentNode)
    }

    printInorder(){
        if(this._root === null)
            return
        let currentNode = this._root
        this._inorder(currentNode)
    }

    _preorder(node){
        if(node === null)
            return
        console.log(node.value)
        this._preorder(node.left)
        this._preorder(node.right)
    }

    _postorder(node){
        if(node === null)
            return
        this._postorder(node.left)
        this._postorder(node.right)
        console.log(node.value)
    }

    _inorder(node){
        if(node === null)
            return
        this._inorder(node.left)
        console.log(node.value)
        this._inorder(node.right)
    }
    
}

const root = new Node(100)
const tree = new BinarySearchTree(root)

tree.addNode(new Node(20))
tree.addNode(new Node(200))
tree.addNode(new Node(10))
tree.addNode(new Node(30))
tree.addNode(new Node(150))
tree.addNode(new Node(300))

console.log('\nPre Order')
tree.printPreorder()
console.log('\nPost Order')
tree.printPostorder()
console.log('\nIn Order')
tree.printInorder()
