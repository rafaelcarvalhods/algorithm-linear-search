// Step 1: First, read the search element (Target element) in the array.
// Step 2: In the second step compare the search element with the first element in the array.
// Step 3: If both are matched, display “Target element is found” and terminate the Linear Search 
// function.
// Step 4: If both are not matched, compare the search element with the next element in the array.
// Step 5: In this step, repeat steps 3 and 4 until the search (Target) element is compared with the 
// last element of the array.
// Step 6: If the last element in the list does not match, the Linear Search Function will be 
// terminated, and the message “Element is not found” will be displayed.

function linearSearch(arr, name) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] == name){
            return i
        }
    }

    return -1
}

let list = ["Ester", "Rafael", "Marcia"]
let fName = "Josue"

result = linearSearch(list, fName)

if (result == -1){
    console.log(`The name ${fName} is not on the list`)
} else {
    console.log(`The name ${fName} is on the index ${result}.`)
}