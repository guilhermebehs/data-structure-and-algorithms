class Item {

    constructor(name){
       this._name = name
    }

    _next = null
    _name = null

    print(){
        console.log(this._name)
    }

    next(){
        return this._next
    }

    setNext(item){
      this._next = item
    }
}

class GroceryList{

    list = null
    lastItem = null

    iterate(){
        
        let item = this.list 
        while(item){
            item.print()
            item = item.next()
        }
    }

    add(item){
       if(!this.list){
        this.list = item
       }
       if(this.lastItem){
        this.lastItem.setNext(item)
       }
       this.lastItem = item          
    }
}



const list = new GroceryList()

list.add(new Item('Bread'))
list.add(new Item('Tomato'))

list.iterate()

list.add(new Item('Meat'))
list.add(new Item('Ketchup'))

list.iterate()

