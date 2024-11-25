const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);
/*
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});
*/
const nums = [0,10,20,30,40,50];
nums_filtered = nums.filter( function(num) {
    return num > 20;
})

console.log(nums_filtered);

mapped_array = [0,10,20,30,40,50].map( function(num) {
    return num / 10
})

console.log(mapped_array);

