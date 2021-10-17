// QNA
// 1. Perbedaan antara make if else sama switch?
  // gunanya bener bener sama, kayak (while ,do while), preferensi aja mau pake yang mana, kalau aku pake switch kalau kondisi nya ada banyak banget
// 2. kemarin di cancel, kalau bisa jangan mendadak.
  // solution, kalau misal ada deployment agak berat, bisa kabar kabar dulu.
  // bisa juga kelas mulai jam 8, nanti satu jam di save ke meet yang lain
  // discuss ke head lecturer, possibility assisten.
// 3. Kapan function butuh return, kapan enggak?
  // function ada dua jenis, bisa return bisa enggak
  // function return = ngehasilin sesuatu
  // function gak return = dia cuma ngelakuin sesuatu, tapi gak ngehasilin sesuatu
  // tergantung yang make, mau return sesuatu, atau cuma ngelakuin sesuatu
  // dia di return dulu, biasanya karena mau di proses lagi
// 4. Bedanya undefined dan error dan NaN
  // undefined dia tempat yang gak ada isinya
  // error itu ketika ngelakuin kesalahan, ex salah syntax
  // NaN ==> Not a Number, contoh nya console.log('abc' * 'abc')
// 5. Bisa gak delete array lebih dari satu, tapi gak satu satu
  // Bisa contoh di nomor 1
// 6. di class, ada properti yang gak ada constructor nya
  // constructor itu dia init value, jadi kalau gak ada constructor nya, gak bisa di kasih init value
  // materi nomor 2

// ACTION ITEM
// Cari tau penggunaan Every
// Discuss ke head lecturer, possibility assisten.
// Function ada 3 parameter, yang ketiga gak tau buat apaan (session 5 di dalam function ngejelasin scope)
// cari tau di vscode bisa ada browser di pojok



// MATERI
// Nomor 1
// var things = ["book", "pen", "clock", "paper"]
// var indexsToDelete = [2,0]
// for(var i = 0 ; i < indexsToDelete.length ; i ++) {
//   var index = indexsToDelete[i]
//   delete things[index]
// }
// console.log(things)


// // Nomor 2
// class Manusia {
//   // constructor buat initial assignment
//   constructor(a, b) {
//     this.name = a;
//     this.age = b;
//     this.category = "Manusia"
//   }
// }

//             // initial asignment
// var fiqri = new Manusia("Fiqri", 100)

// console.log(fiqri)













// Given a number n, return the number of positive odd numbers below n, EASY!
// odd === ganjil

function oddCount (n) {
  // var result = Math.floor(n / 2)
  // return result

  var totalOdd = 0;

  for(var i = 1 ; i < n ; i ++) {

    // check ganjil atau bukan
    if(i % 2 === 1) {
      totalOdd += 1
    }


  }

  return totalOdd;

  // looping aja sebanyak n
  // tiap loop, check index nya ganjil atau bukan
  // kalau ganjil tambahin di count

}

oddCount(3) // 1
oddCount(10) // 5
oddCount(15)

// console.log(oddCount(10))




function like(names) {

  // check arr length
  var namesLength = names.length

  // if length === 0
  if(namesLength === 0) {
    return 'no one likes this'
  }

  // if length === 1
  if(namesLength === 1) {
    return `${names[0]} likes this`
  }


  if(namesLength === 2) {
    return `${names[0]} and ${names[1]} like this`
  }

  // if length === 3
  if(namesLength === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }

  // if length > 3
    // ambil dua nama pertama
    // ambil sisa length - 2
  if(namesLength > 3) {
    return `${names[0]}, ${names[1]} and ${namesLength-2} others like this`
  }
}


function likes(names) {
  names = names || [];
  switch(names.length){
    case 0: return 'no one likes this'; break;
    case 1: return names[0] + ' likes this'; break;
    case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
    case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
    default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

like(['Peter']) // Peter likes this
like([]) // no one likes this
like(["Max", "John", "Mark"]) // Max, John and Mark like this
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
















// var number = 10
// var isOdd;

// if(number % 2 === 0) {
//   isOdd = false
// }else {
//   isOdd = true
// }

var number = 10
var isOdd = number % 2 === 0 ? false : true
// if ternary
var score = 100
var result = score < 50 ? 'remidi' : score < 80 ? 'enough' : 'great'

console.log(result)