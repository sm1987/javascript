// Differences between var, let and const
// When to use each

// Var

/*
    var = "Var are function scoped (scope is limited to the function it was defined in). Var is not blocked-scoped (scope is not limited to the block it was defined in)."
*/

function myVar() {
    var i = 0;
}

console.log(i); // ReferenceError: i is not defined

var x = 0;
if(true) {
    var x = 1
}

console.log(x); // 1 x was overwritten in if block

// let

/*
    It work same as var except; let are block-scoped! which means less mistake
*/

let y = 0;
if(true) {
    let y = 2;
}

console.log(y); // 0 though y was assigned to 2 in the if block, that assignment was local; so our gobal y was intact (it was still 0)

// const 

/*
    const is short for constant, it restrcit over-writing variables
*/

const z = 0;
z = 1; // TypeError: Assignment to constant variable

const a; // const doesnt let you declare a variable without assigning its (constant) value!

// const is also block-scoped

