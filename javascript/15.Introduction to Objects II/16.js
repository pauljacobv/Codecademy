// create your Animal class here
function Animal(name,numLegs)
{
    this.name=name;
    this.numLegs=numLegs;
};
Animal.prototype.sayName=function()
{
    console.log("Hi my name is "+this.name);

}
// create the sayName method for Animal





// provided code to test above constructor and method
var penguin = new Animal("Captain Cook", 2);
penguin.sayName();