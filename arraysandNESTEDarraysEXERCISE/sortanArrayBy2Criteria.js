function solve(array) {
    array.sort((a,b) => a.length - b.length || a.localeCompare(b));
    for (let each of array) {
        console.log(each);
    }
}
solve(['alpha', 
'beta', 
'gamma']
);