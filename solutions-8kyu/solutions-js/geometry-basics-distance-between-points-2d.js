// Geometry Basics: Distance between points in 2D
// This series of katas will introduce you to basics of doing geometry with computers.
// Point objects have x and y attributes (X and Y in C#) attributes.
// Write a function calculating distance between Point a and Point b.
// Tests round answers to 6 decimal places.

// Object.keys(object) if you don't know the property name before-hand
// Otherwise we can use x or y since we know they're coordinates

function distanceBetweenPoints(a, b) {
    return Math.sqrt(Math.pow((b.x - a.x), 2) + Math.pow((b.y - a.y), 2))
}