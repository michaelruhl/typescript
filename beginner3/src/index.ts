let someLegacyVariable

someLegacyVariable = loadString();
if (typeof someLegacyVariable == 'string')  {
    console.log(someLegacyVariable.trim())
}
someLegacyVariable = loadNumber()
if (typeof someLegacyVariable == 'number')  {
    console.log(someLegacyVariable.toFixed(2))
}

function log(value: unknown) {
    if (typeof value =='number')    {
        console.log(value.toFixed(2))
    } else {
        console.log(value)
    }
}

log(123.456)
log('Hello World')
