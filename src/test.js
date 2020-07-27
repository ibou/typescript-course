var operatives = [
    { id: 12, name: 'Baze Malbus', pilot: false },
    { id: 44, name: 'Bodhi Rook', pilot: true },
    { id: 59, name: 'Chirrut Îmwe', pilot: true },
    { id: 122, name: 'Jyn Erso', pilot: false }
];

let l = operatives.some(operative => {
    return operative.pilot;
});
console.log("Some: ", l); // Some:  true

let lv = operatives.every(operative => {
    return operative.id > 12;
});
console.log("Every: ", lv); // Every:  false

let ll = operatives.find(operative => {
    return operative.pilot;
});
console.log("Find: ", ll); // Find:  { id: 44, name: 'Bodhi Rook', pilot: true }

let la = operatives.filter(operative => {
    return operative.pilot;
});
console.log("Filter: ", la);
// return Filter:  [
//     { id: 44, name: 'Bodhi Rook', pilot: true },
//     { id: 59, name: 'Chirrut Îmwe', pilot: true }
//   ]

let lo = operatives.map(operative => {
    return operative.pilot;
});
console.log("Map: ", lo); // Map:  [ false, true, true, false ]
