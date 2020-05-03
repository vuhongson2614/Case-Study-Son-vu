
class product {
    constructor(name,price , address ,phone , email ) {
        this.name = name;
        this.price= price;
        this.address = address;
        this.phone = phone ;
        this.email = email;
    }
    get name() {
        return this.name;
    }
    setName(name){
        this.name=name;
    }
    get price () {
        return this.price;
    }
    setPrice(price){
        this.price = price;
    }

    get address (){
        return this.address;
    }
    setAddress(address){
        this.address = address;
    }
    get phone(){
        return this.phone;
    }
    setPhone(phone){
        this.phone = phone;
    }
    get email(){
        return this.email;
    }
    setEmail(email){
        this.email = email;
    }
}
let Product = new product();