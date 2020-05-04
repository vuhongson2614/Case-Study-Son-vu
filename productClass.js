
class Product {
    constructor(name,amount , address ,phone , email ) {
        this.name = name;
        this.amount = amount;
        this.address = address;
        this.phone = phone ;
        this.email = email;
    }
    setName(name){
        this.name = name;
    }
    getHTML(){
        let str = `<tr>
<th>${this.name}</th>
<th>${this.amount}</th>
<th>${this.phone}</th>
<th>${this.address}</th>
<th>${this.email}</th>
<th><button id="<button id="delete" onclick="deletel(${this.id});">Delete</button>"</th>
</tr>
    `;
    }
}
