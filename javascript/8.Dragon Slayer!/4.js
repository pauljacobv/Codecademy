var slaying=true;
var youHit=Math.floor(Math.random()*2);
var damageThisRound=Math.floor(Math.random()*5+1);
var totalDamage=0;
while(slaying)
{
    
    if(youHit)
    {
        console.log("you hit the dragon!");
        slaying=false;
    }
    else
    {
        console.log("the dragon defeted you!");
        slaying=false;
    }
}