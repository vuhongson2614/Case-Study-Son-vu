class ManagerProduct
{
    constructor() {
        this.data = [];
        this.count=-1;
    }
    add(product){
        this.data.push(product);
    }
    delete(index){
        this.data.splice(index,1);
    }
}
let manager = new ManagerProduct();