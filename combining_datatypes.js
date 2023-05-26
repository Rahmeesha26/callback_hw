//============================================== Combining Datatypes =========================================//

const crayonBox = [
          "Yellow", "Blue", "Purple", "Green", "Brown"
]

console.log(crayonBox[4])

const bottle = cap = [
          {material: "Metal", color: "Purple"},
          {material: "Plastic", color: "Green"},
          {material: "Biodegradeable Plastic", color: "Brown"}
]

console.log(bottle[1].color)

const receipt = [
          {item: "Fruit", price: "3.55"},
          {item: "Vegetables", price: "4.50"},
          {item: "Beans", price: "7.99"}
]

console.log(receipt[1].item)

const apartmentBuilding = [
          {tenet: "Joe", age: "45", employment: "N/A"},
          {tenet: "Samantha", age: "26", employment: "Flight Attendent"},
          {tenet: "Jamie", age: "30", employment: "College"}
];
console.log(apartmentBuilding[0].employment)