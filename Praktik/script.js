const UPPERCASE = document.querySelector('#uppercase')

let celerates = 'celeRates'
celerates = celerates.toUpperCase()
console.log('TOUPPERCASE ' + celerates)
UPPERCASE.innerText = celerates

let content1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia corporis, aliquam doloribus odit a soluta sint quidem facere, earum suscipit iure! Magni architecto voluptas nesciunt repellendus maiores perspiciatis quia quasi!`


content1 = content1.toLowerCase()
console.log('lowercase' + content1)

const lowercase = document.querySelector('#lowercase')

lowercase.innerText = content1

// split
const foods = "Mie, Nasi goreng, Sate, Lontong, Nasi Telor"
const splittedFoods = foods.split(', ')
console.log( splittedFoods)

// replace
console.log(foods.replace('Nasi goreng', 'NASI GORENG'))

// ARRAY
// PUSH
// Tidak membuat array baru
const tropicalFruits = ['Coconut', "Apple", 'Rambutan', 'Mango']
console.log('Jumlah array stlh ditambahkan data baru ' + tropicalFruits.push('Durian'))

console.log(tropicalFruits)

// POP
// const newTropicalFruits = tropicalFruits // lokasi penyimpanan datanya bukan isi datanya
// newTropicalFruits.pop()
// console.log(tropicalFruits)

// const newTropicalFruits =  tropicalFruits.slice() // membuat array baru dari array yg telah ada
// const newTropicalFruits =  Array.from(tropicalFruits) 
const newTropicalFruits = [...tropicalFruits] // spread operator ... membuat array baru
newTropicalFruits.pop()
console.log(`Array lama : ` + tropicalFruits)
console.log(`Array baru : ` + newTropicalFruits)

// SHIFT
// Menghapus data dari depan
newTropicalFruits.shift()
console.log(newTropicalFruits)

// UNSHIFT
// menambahkan data dari depan
const myFavoriteFruits = ['Melon', 'Grapes']
newTropicalFruits.unshift('Pineapple', 'Banana', ...myFavoriteFruits)
console.log(newTropicalFruits)

// CONCAT
// menggabungkan 2 array atau lebih
// mengembalikan array baru
const elsiFavFruits = ['Durian', 'Kelengkang']

const favFruits = newTropicalFruits.concat(elsiFavFruits)
console.log(favFruits)

const arrNum1 = [1, 2, 3, 1, 4, 6]
const arrNum2 = [9, 7, 8,5]
const arrNum3 = [...arrNum1, ...arrNum2]
console.log(arrNum3)

// REDUCE
const totalNum = arrNum3.reduce((acc, currItem) => acc + currItem)
console.log(totalNum)

// ForEach
favFruits.forEach((fruit, index) => console.log('Index ke ${index} buah: ${fruit}'))

// Find
console.log('Array NUM3 ' + arrNum3)
const findNumberLargerThan2 = arrNum3.find((num) => num > 2)
console.log(findNumberLargerThan2)




class Antrian {
    constructor() {
        this.queue = [];
    }

    // Menambahkan pembeli ke antrian
    enqueue(pembeli) {
        this.queue.push(pembeli);
    }

    // Menghapus pembeli dari antrian (yang sudah mendapatkan belanjaan)
    dequeue() {
        return this.queue.shift();
    }

    // Menampilkan antrian saat ini
    display() {
        console.log("Antrian saat ini: " + this.queue.join(", "));
    }
}

// Membuat instance antrian
let antrian = new Antrian();

// Antrian awal
antrian.enqueue("Ray");
antrian.enqueue("Fiki");
antrian.enqueue("Fadhilla");
antrian.enqueue("Farah");

// Pembeli yang datang
antrian.enqueue("Nabila");
antrian.enqueue("Maza");
antrian.enqueue("Elsi");

// Maza dan Elsi pulang
console.log("Maza dan Elsi pulang.");
antrian.dequeue(); // Maza pergi
antrian.dequeue(); // Elsi pergi

// Ray mendapatkan belanjaan
console.log("Ray sudah mendapatkan belanjaannya.");
antrian.dequeue(); // Ray sudah belanja

// Fiki mendapatkan belanjaan
console.log("Fiki sudah mendapatkan belanjaannya.");
antrian.dequeue(); // Fiki sudah belanja

// Tomi datang dan nyerobot antrian
antrian.enqueue("Tomi");

// Menampilkan antrian akhir
antrian.display();