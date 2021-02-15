// Convert number to  reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(num) {
    return Array.from(String(num), Number).reverse()
}

// Array.from() creates a new copied array instance from an array-like or iterable object.
// String() constructor is used to create a new String object. When called as a function, it performs type conversion to a primitive string.
// Number() constructor creates a Number object.
// reverse() reverses an array in place. The first array element becomes the last, and the last array element becomes the first.