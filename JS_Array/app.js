let dummyArray = [
    {_id : 1 , name: 'John'},
    {_id : 2, name: 'Smith'},
    {_id : 3, name: 'James'},
    {_id : 4, name: 'Wick'},
    {_id : 5, name: 'Jennifer'},
    {_id : 2, name: 'Lorenz'}
]

console.log(dummyArray)

console.log(dummyArray.find(e => e._id === 2)) // Return first element (only 1 element) with _id equal to 2

console.log(dummyArray.filter(e => e._id === 2)) // Return the array which element with _id equal to 2 

console.log(dummyArray.map(e => e._id === 2)) // Returns the array of boolean

dummyArray.forEach(e => {
    if (e._id === 2) {
        console.log(e); // Logs each element with _id equal to 2
    }
})

console.log(dummyArray.some(e => e._id === 3)) // Contains 3 or not

console.log(dummyArray.every(e => e._id < 6)) // all elements less than 6 or not

console.log(dummyArray[0]._id)