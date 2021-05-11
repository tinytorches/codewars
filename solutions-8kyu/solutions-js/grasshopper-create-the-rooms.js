// Grasshopper - Create the rooms
// https://www.codewars.com/kata/56a29b237e9e997ff2000048/train/javascript

// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

let rooms = {
    'basement': {
        'name': 'basement',
        'description': 'It\'s dark and creepy. Best to bring a flashlight.',
        'completed': false 
    },
    
    'attic': {
        'name': 'attic',
        'description': 'Use height to your advantage. This looks like a good location to keep the terrors away. You could probably spruce up the place though.',
        'completed': false
    },

    'den': {
        'name': 'den',
        'description': 'Any useful items in the drawers and chests? Perhaps you can fill your inventory with some useful items.',
        'completed': false
    }
}