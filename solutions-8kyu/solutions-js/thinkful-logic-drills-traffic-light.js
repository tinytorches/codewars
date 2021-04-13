// Thinkful-Logic Drills: Traffic Light
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
// For example, update_light('green') should return 'yellow'.
function updateLight(current) {
    let light;
    switch(current) {
        case 'green':
            light = 'yellow';
            break;
        case 'yellow':
            light = 'red';
            break;
        case 'red':
            light = 'green';
            break;
    }
    return light
}