var cashRegister = {
    total:0,
    add: function(itemCost){
        this.total += itemCost;
    }
};


//call the add method for our items
cashRegister.add(0.98+1.23+4.99+0.45);

//Show the total bill
console.log('Your bill is '+cashRegister.total);
