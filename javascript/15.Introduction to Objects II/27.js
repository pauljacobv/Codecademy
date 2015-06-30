var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var lg in languages)
{
    if(typeof(languages[lg])=== "string")
    {
        console.log(languages[lg]);
    }
}