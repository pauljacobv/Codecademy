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