//============================================== Combining Datatypes =========================================//

// const crayonBox = [
//           "Yellow", "Blue", "Purple", "Green", "Brown"
// ]

// console.log(crayonBox[4])

const bottle = cap = [
          {material: "Metal", color: "Purple"},
          {material: "Plastic", color: "Green"},
          {material: "Biodegradeable Plastic", color: "Brown"}
]

console.log(bottle)

const receipt = [
          {item: "Fruit", price: "3.55"},
          {item: "Vegetables", price: "4.50"},
          {item: "Beans", price: "7.99"}
]

console.log(receipt)

const apartmentBuilding = [
          {tenet: "Joe", age: "45", employment: "N/A"},
          {tenet: "Samantha", age: "26", employment: "Flight Attendent"},
          {tenet: "Jamie", age: "30", employment: "College"}
];
console.log(apartmentBuilding)

console.log("........................................")

// Combine objects, arrays, and functions more than one level deep

// I'm not entirely sure what's wrong, I know I did something wrong
function knit (index) {
          [
                    {item: "Scarf", size: "6ft"},
                    {item: "Crochet Needle", size: "9in"},
                    {item: "Basket", size: "20in deep"}
          ]
          return index
};


function crayonSelector (crayonBox) {
          [
                    "Yellow", "Purple", "Gray", "Brown", "Black", "Blue"
          ]
          return crayonBox
}  
          

function powerButton (options) {
          [
                    {song: "Jealous", artist: "Labrinth"},
                    {song: "Hanging Tree", artist: "Elijah Blake"}, 
                    {song: "No Ordinary", artist: "Labrinth"}
          ]
          return "select a song" + options[2].song
}

////////////////////////////////////////////////////////