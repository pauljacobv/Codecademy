var friends=new Object();
friends.bill = new Object();
friends.steve = new Object();

friends.bill.firstName="Bill";
friends.bill.lastName="man";
friends.steve.firstName="Steve";
friends.steve.lastName="mon"
friends.bill.number="123"
friends.steve.number="21"
friends.steve.address=["123","abc"];
friends.bill.address=["123","abc"];

var list = function(a){
    
    for(var i in friends)
    {
        console.log(i);
    }
};
list();

var search = function(name){
    for(var key in friends)
    {
        if(friends[key].firstName === name)
        {
            console.log(friends[key]);
            return friends[key];
        }
    }
};

search("Steve");