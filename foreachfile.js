//calls a function for each element in an array, changes org array and returns undefined

const initialArray = [-1,-9,1,2,3,4,5]

const forEachFunction = (arr,anyfunction) => {
    for(let i = 0;i< arr.length;i++){
       let value =  anyfunction(arr[i]);
        initialArray[i] = value
    }
    return undefined
}

const callbackAction = (number) =>{ 
    
        return number+5 //add one for each element
    }

forEachFunction(initialArray,callbackAction)

console.log(initialArray)
