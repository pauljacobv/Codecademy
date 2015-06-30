/*jshint multistr:true */

var text="bla bla james blaaa ble blu bla james blie blu";
var myName="james";
var hits=[];

for(var i=0;i<(text.length);i++)
{
    if(text[i]==="j")
    {
        for(var j=i;j<(myName.length+i);j++)
        {
            hits.push(myName);
        }
    }
}

if(hits.length===0) {
    console.log("Your name wasn't found!");
} else {
    console.log(hits);
}