let listNames = ["Rafael", "Marcia", "Ester"]

function searchName(name){
    for(let i=0; i<listNames.length; i++){
        if(name == listNames[i]){
            return i
        }
    }

    return -1
}

result = searchName("Ester")

if(result == -1){
    console.log("The name is not in this list.")
} else {
    console.log(`The element is in the index ${result}.`)
}
