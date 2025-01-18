'use strict';

try {
    console.log('Student Name: Phorn Panhaudom');
    let x = 10; 
    console.log(x); 
} catch (error) {
    console.error(error.message);
}

function demo() {
    try {
        let y = 20; 
        console.log(y); 
    } catch (error) {
        console.error(error.message);
    }
}
demo();

try {
    eval('var z = 50; delete z;'); 
} catch (error) {
    console.error(error.message); 
}
