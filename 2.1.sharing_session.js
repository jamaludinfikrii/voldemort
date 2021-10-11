// Q&A
// - array dua dimensi, susah ambil data di dalemnya, konsepnya masih agak pusing ? masih pusing cara make method ? dibahas di Materi
// - Function kadang ada yang pake kurung kurawal ada yang pake tanda panah ??
    // itu cuma beda sintax, gampangnya yang pake tanda panah, itu baru ada di ES6
    // const newPeopleName = peopleNames.filter((dataName) => dataName.length > 3) // ini pake arrow function
    // const newPeopleName = peopleNames.filter(function (dataName) {return dataName.length > 3 }) // ini pake arrow function
// - Bedanya callback sama calling other function ? callback itu udah pasti calling other function, sedangkan calling other function itu belum tentu callback
    // lebih jelas tentang callback kalau udah belajar asyncronus
    // callback itu function yang dijadiin parameter dari function lain
    // sedangkan calling other function, itu buka di jadiin parameter dari function lain
// -

// MATERI

// // Array

// var peopleName1 = "fiqri"
// var peopleName2 = "Andi"
// var peopleName3 = "Budi"

// var peopleName = ["Fiqri", "Andi", "Budi"]
// // nyimpen data di array
//   // method nya lebih banyak, (tools tools atau function function) buat array
//   // lebih enak maintain nya

// var address = [
//   ['Jawa Tengah', 'Banyumas', 'Purwokerto' , ['Jalan Merdeka', [ 1, 2 ]]],
//   ['Jawa Barat', 'Bandung', 'Bandung'],
// ]
// // console.log(address)
// // console.log(address[0][2])


// console.log(address[0][3][1][0])

// var peopleNames = ['Fiqri','Andi','Budi', 'Caca']

// // goal, cek tiap people, panjang namanya lebih dari 3 atau enggak
// // bakal false kalau salah satu orang namanya ada yang kurang dari tiga
// // ================ TANPA LOOPS
// var isPassed = true;

// if(peopleNames[0].length < 3) {
//   isPassed = false
// }

// if(peopleNames[1].length < 3) {
//   isPassed = false
// }

// if(peopleNames[2].length < 3) {
//   isPassed = false
// }

// if(peopleNames[3].length < 3) {
//   isPassed = false
// }

// console.log(isPassed) // true or false ??



// ================ LOOPS FOR


// var isPassed = true
// var peopleNames = ['Fiqri','Andi','al', 'Caca', 'Yono']
// // goal, cek tiap people, panjang namanya lebih dari 3 atau enggak
// // bakal false kalau salah satu orang namanya ada yang kurang dari tiga

// for(var i = 0 ; i < peopleNames.length ; i ++) {
//   var dataName = peopleNames[i]
//   console.log(dataName)

//   if(dataName.length < 3) {
//     isPassed = false
//     break
//   }

// }

// console.log(isPassed) // true


// ================ Every, Foreach, Filter, Map,

// var peopleNames = ['Fiqri','Andi','al', 'Caca', 'Yono']
// var ages = [10,11,13]
// goal, filter nama orang yang length nya lebih dari 3
// jadi cuma return yang namanya lebih dari
// functions ==> tata cara penulisan nya, (syn)
// const newPeopleName = peopleNames.filter((dataName) => dataName.length > 3)
// const newPeopleName = peopleNames.filter(function (dataName) {return dataName.length > 3 })

// function checkNameLength (xyz, indx) {
//   console.log(xyz)
//   return xyz.length > 3
// }

// const newPeopleName = peopleNames.filter(checkNameLength)

// console.log(newPeopleName)



// FIlter pake Forr Loops

// var peopleNames = ['Fiqri','Andi','al', 'Caca', 'Yono']

// var peopleNameFiltered = []
// for(var i = 0 ; i < peopleNames.length ; i ++) {
//   var dataName = peopleNames[i]

//   if(dataName.length > 3) {
//     peopleNameFiltered.push(dataName)
//   }

// }

// console.log(peopleNameFiltered)


// // FUNCTIONS ===================

// yang perlu di ketahui
// Function itu bisa terima input (parameter / argument) , terus ngehasilin sesuatu
// Function itu untuk nge hindari block of code yang di jalanin berulang ulang
// Function itu bisa return sesuatu
// Function bisa manggil function lain
// Function argumennya / parameter nya bisa berupa function (callback)



// function sayHello () {
//   console.log('hello')
// }

// function apapun() {
//   console.log('apapun')
// }


// function checkPeopleNameLength(peoples, nameLength, fn) {
//   var peopleFiltered = []

//   for(var i = 0 ; i < peoples.length; i ++) {
//     var namePeople = peoples[i]

//     if(namePeople.length > nameLength) {
//       peopleFiltered.push(namePeople)
//     }
//   }

//   // function ini gak nge hasilin sesuatu, tapi mengerjakan sesuatu

//   sayHello()
//   fn()
//   console.log(peopleFiltered)
// }

// var data2 = [true,false,'suyono','seno', [1,2,3]]
// checkPeopleNameLength(data2, 2, apapun)





function bebasFunction () {
  return 123
}
var result = bebasFunction()[0]
console.log(result)


var numbers = 123
console.log(numbers.toString()[0])







// Materi yang udah dipelajari
// - Intro to web development
// - Variables
// - Conditional Statement
// - Looping
// - Array
// - Function
// - Objects

// ACTION ITEM
// vote di group tentang bahas exercise
// Cari tau penggunaan Every
// cari cara buat jelasin callback vs calling other function // tonton juga di vidio di purwadhika