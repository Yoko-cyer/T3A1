// let fish = ["salmon", "king fish", "snapper", "tuna", "salmon","barramundi"];
// fish.splice(0, 2, "mullet", "hoki", "flounder")
// let fish1 = fish.slice(1)
// console.log(fish1);

// let fish2 = fish.slice(1, 3)
// console.log(fish2);

// let firstName = 'Bolaji';
// // return the string as an array
// firstName.split() // ["Bolaji"]
// console.log(firstName)

// let firstName = 'hello, my name is bolaji, I am a dev.';
// firstName.split(',', 2); // ["hello", " my name is bolaji"]

// let fruits = ['apple', 'orange', false, 3]
// fruits.indexOf('orange'); // returns 1
// fruits.indexOf(3); // returns 3
// friuts.indexOf(null); // returns -1 (not found)

// console.log(fish.indexOf("king fish"), fish.indexOf(3), fish.indexOf(null)); // returns 1
// fish.indexOf(3); // returns 3
// fish.indexOf(null); // returns -1 (not found)
// let fish = ["salmon", "king fish", "snapper", "tuna", "salmon","barramundi"];

// console.log(fish.lastIndexOf("salmon"))

// let fruits = ['apple', 'orange', false, 3, 'apple']
// console.log(fruits.lastIndexOf("orange")); // returns 4

// let movie = {
//     "movieTitle": "Violet Evergarden: The Movie",
//     "genre": "Fantasy/Romance",
//     "releseYear": 2020,
//     "runTime": "2h 20m",
//     "cast": [
//       {
//         "name": "Yui Ishikawa",
//         "age": 36,
//         "role": "Violet Evergarden",
//         "otherVoiceActingRoles": [
//           "Shiroi Suna no Aquatope",
//           "Attack on Titan",
//           "Tropical-Rouge! Precure"
//         ]
//       },
//       {
//         "name": "Daisuke Namikawa",
//         "age": 40,
//         "role": "Gilbert Bougainvillea",
//         "otherVoiceActingRoles": [
//           "JoJo no Kimyou na Bouken Part 6: Stone Ocean",
//           "Jujutsu Kaisen",
//           "Arslan Senki" 
//         ]
//       }
//     ]
//   }

// let json = JSON.stringify(movie)

// console.log(json)

// let json = '{"name":"Yui Ishikawa", "age":36, "role":"Violet Evergarden"}'

// let obj = JSON.parse(json)
// console.log(obj)

let kpopIdol = {
    groupName: "Blackpink",
    type: "girl group",
    label: "YG Entertainment",
    member: 4
};

// let label = kpopIdol["label"];
// console.log(label)

// let values = Object.values(kpopIdol)
// console.log(values)

// var keys = Object.keys(kpopIdol);
// console.log(keys)

Object.freeze(kpopIdol);

console.log(Object.isFrozen(kpopIdol));

let members = {vicalist: "Rose, Jennie", dancer: "Lisa", visual: "Jisoo"}
let songs = {1: "How You Like That", 2: "Pretty Savage", 3: "Love sick Girls"}
let blackPink = {...members, ...songs}

console.log(blackPink)