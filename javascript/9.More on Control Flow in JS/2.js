var isEven = function(number) {
  // Your code goes here!
  if(number%2===0)
  {
      return true;
  }
  else if(isNaN(number)===true)
  {
      return "do input a number";
}
  else
  {
      return false;
  }
  
};