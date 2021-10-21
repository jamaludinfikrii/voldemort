// QNA
// biar bisa langsung di kanan ? pake control + arrow kanan / arrow kiri
// tanya regex ? regular expression, buat pattern, contoh di materi 2.1
// simple remove duplicate codewar ? 2.2
// reduce buat sum ? 2.3
// sort descending ascending ?
  // paling enak, pahamin advance sort (di video learning)
  // kalaupun gak paham, kalian apalin aja kalau a-b = ascending || b-a = descending
  // sometimes, kita yang penting tau cara makenya dan hasilnya seperti apa.
// gimana cara nerapin pemahaman ke kode ?
  // bikin pseudo code
  // baru translate ke js
// class dan object 2.4





// ACTION ITEM
// Discuss ke head lecturer, possibility assisten.
// jelasin jeroan dari filter, sort, reduce dsb.



// apa bedanya function sama method ?? method, itu function di dalam object
// var obj = {
//   name: "fikri",
//   fn : function () {
//     console.log(this.name)
//   }
// }

// // Method Every ( array ) ==> return boolean // untuk check tiap element di dalam array
// var peopleName = ['fikri','andi','budi']
// var result = peopleName.every(function(el){ // anonymous function,
//   return el.includes('i')
// })
// console.log(result)



// 2.1
// var peopleName = "fikri123"

// peopleName = peopleName.replace(/[^a-zA-Z]+/g, '')
// console.log(peopleName)



// 2.2

// describe("Basic tests", function(){
//   Test.assertDeepEquals(solve([3,4,4,3,6,3]),[4,6,3]);
//   Test.assertDeepEquals(solve([1,2,1,2,1,2,3]),[1,2,3]);
//   Test.assertDeepEquals(solve([1,2,3,4]),[1,2,3,4]);
//   Test.assertDeepEquals(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
//   Test.assertDeepEquals(solve([1,2,1,2,1,1,3]),[2,1,3]);
// });


// pseudo code cara nya mas Rocky
// sediain array kosong (filteredArr = [4,6,3])
// loop di dalam array input
  // check tiap element,
    // kalau belum ada di dalam filtered arr, kita push
    // kalau udah ada, kita hapus yang existing, baru kita push
// contoh input [3,4,4,3,6,3]






function removeDupV1(arr) {
  var newArr = []
  for(var i = 0; i < arr.length; i++) {
    var curItem = arr[i]
    if (newArr.includes(curItem)) {
      // action kalau item udah ada di dalam array
      var indexExisting = newArr.indexOf(curItem)
      newArr.splice(indexExisting, 1)
    }
    newArr.push(curItem)
  }
}

// pseudo code cara nya mas Daniel
// sediain array kosong (filteredArr = [4,6,3])
// loop di array input dimulai dari belakang
// check tiap element
  // kalau udah ada lanjut
  // kalau belum ada, push ke paling depan pake shift
// input = [3,4,4,3,6,3]

function removeDupV2 (arr) {
  var newArr = []

  for(var i = arr.length-1; i >= 0; i--) {
    var curItem = arr[i]
    if(!newArr.includes(curItem)) {
      newArr.unshift(curItem)
    }
  }

  console.log(newArr)
}



// cara hapus spesific array
// const index = names.indexOf('andi')
// names.splice(index, 1)
// console.log(names)


// cara looping dari belakang
// var names = ['fikri','andi','budi']
// for(var i = names.length-1; i >= 0; i--){
//   console.log(names[i])
// }


// looping dari belakang
// var numbers = [2,3,45,6,10]
// for(initial variable; condition; increment / decrement){
// actions
//}
// for(var i = 0; i < 4; i++) {
//   console.log(numbers[i])
// }
// for(var i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i])
// }












// 2.3 Reduce

const numbers = [1,2,3,4,5]

const sum = numbers.reduce((prev, val, ind) => {
  return prev + ind + val
}, 0)




// 2.4 class and object

// object itu simple nya another way to store data
  // object itu buat nyimpen data banyak props
  // object bisa ada method

// class itu cetakannya object / blueprint (rancangan) nya object


class User {
  constructor(a,b,c){
    this.username = a;
    this.password = b;
    this.birthDay = c;
    this.printFullData = function () {
      console.log(`
        username = ${this.username}
        password = ${this.password}
        birthDay = ${this.birthDay}
      `)
    }
  }
}



const users = [
  new User('fikri', 'asd', '282801'),
  new User('andi', 'asdfghjkl','101010'),
  new User('seto', '123123', '111111'),
]

users.forEach((val) => {
  val.printFullData()
})