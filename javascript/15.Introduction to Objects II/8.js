var suitcase = {
    shirt: "Hawaiian"
};

if( suitcase.hasOwnProperty("shorts"))
{
    console.log(suitcase.shorts);
}
else
{
    suitcase.shorts="sho";
     console.log(suitcase.shorts);
}