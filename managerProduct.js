class productManage {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    display() {
        let src = "";
        this.products.forEach((product, index) => {
            index++;
            product.setID(index);
            src += product.getCueAsHTML()
        })
        document.getElementById("lish-addproduct").innerHTML = this.getTitle() + str;
    }

    getTitle() {
        let title = `<tr>
<th>#</th>
<th>name</th>
<th>amount</th>
<th>phone</th>
<th>address</th>
<th>email</th>
</tr>
      `;
        return title
    }

    delete(id) {
        this.products.splice(id -1,1);
    }
    displayIndex(products){
        let str = "";
        products.forEach((product,index) => {
            index++;
            product.setItem(index);
            str += product.getProduct();
            }
        )
        document.getElementById("lish-addproduct").innerHTML = str;
    }
}

let productManage = new ProductManage();