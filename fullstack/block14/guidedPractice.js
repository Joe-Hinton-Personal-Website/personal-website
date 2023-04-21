const customArray = ["Honda", "Toyota", "Ford", "Subaru"]

/*
  -pop -removes last element from array
  -push -adds to end of the array
  -shift -deletes from the beginning of the array
  -unshift -adds to the beginning of the array
  -splice 
    -deletes
    -adds
    -replaces
    from middle of the array
  -slice
    -creates an array
    -returns a subarray
*/

customArray.pop();
console.log(customArray);
customArray.push("Tesla");
console.log(customArray);
customArray.shift();
console.log(customArray);
customArray.unshift(["BMW", "Volkswagen"]);
console.log(customArray);

// splice delete
customArray.splice(3, 2);
console.log(customArray);
// splice and replace 'BMW' with 'Tesla'
customArray.splice(1, 1, "Tesla");
console.log(customArray);
//splice and add




