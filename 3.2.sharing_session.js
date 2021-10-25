
// ACTION ITEM
// tanyain detail exam.
// jelasin jeroan dari filter, sort, reduce dsb.

// QUESTIONS
// 1. BAHAS FUNCTION DAN OBJECT SECARA KESELURUHAN.
// 2. FOREACH DAN MAP


// ANSWER
// 1.
// - gampangnya function input ==> function ==> output
// - a set of instructions bundled together to achieve a specific outcome

// recursive function ==> programming technique using function or algorithm that calls itself one or more times until a specified condition is met
// OBJECT ==> another way to define data, bisa punya property dan methods, kalau bisa di solve tanpa object yaudah gausah pake object
// CRUD (Create, read, update, delete)

var obj = {
  name: 'budi',
  address : {
    street: 'jalan raya',
    city: 'bandung',
    country: 'indonesia',
  },
  hobbies: ['coding', 'reading', 'listening to music'],
}



function x () {
  return {
    name: [
      {
        yz : [
          0,
          1,
          {
            ab : function() {
              return {
                cd : 'fikri'
              }
            }
          }
        ]
      }
    ],
  }
}




console.log(x().name[0].yz[2].ab().cd)
let objX = {
  a : 'fikri',
  b : [
    1,
    2,
    {
      named : 'budi',
      abc : function () {
        return 'andi'
      }
    }
  ]
}

console.log(objX.b[2].abc())
console.log(objX.b[2].named)





function bcd(){
  return {
    dcb : function () {
      return 'heloworld'
    }
  }

}




console.log(bcd().dcb()) // helloworld










var a = [1,2,3,4]







function x () {
  return {
    name : [
      {
        yz: [
          1,
          2,
          {
            ab : function () {
              return {
                cd : 'helo fikri'
              }
            }
          }
        ]
      }
    ]
  }
}



console.log(x().name[0].yz[2].ab().cd) // helo fikri







function greetings(name) {
  console.log('hello ' + name)
  console.log('welcome...')
}


function hitungTotalPajak(harga, jumlah) {
  var totalBiaya = harga * jumlah
  var totalPajak = totalBiaya * 0.1
  return totalPajak;
}


// RECURSIVE FUNCTION

let total = 0
function counter(x) {
  if (x <= 0) {
    console.log(total)
  } else {
    total += 2
    counter(x - 1)
  }
}

// counter(10)

// 2. FOREACH DAN MAP
// foreach nggak return value, pure cuma looping aja
// map, return value array baru


var arrINput = [1,2,3,4,5,6,7,8,9,10]
const result = arrINput.map(function(item) { return item * 2 })
// console.log(result)

const newArr = []
arrINput.forEach(function(item) { newArr.push(item * 2) })
// console.log(newArr)




// MATERI
// VARIABLE, CONDITIONAL STATEMENT, LOOPING, ARRAY, OBJECT, FUNCTION, CLASS







// CODEWARS

function arrayPlusArray(arr1, arr2) {
  // sediain variable counter
  var counter = 0

  // loop di arr1, tiap item di ++ ke counter
  for(var i = 0; i < arr1.length; i ++) {
    counter += arr1[i]
  }

  // loop di arr2, tiap item di ++ ke counter
  for(var i = 0; i < arr2.length; i ++) {
    counter += arr2[i]
  }

  return counter
}

function arrayPlusArray(arr1, arr2) {
  // sediain variable counter
  var counter = 0

  // loop di arr1, tiap item di ++ ke counter
  arr1.forEach(function(item) { counter += item })

  // loop di arr2, tiap item di ++ ke counter
  arr2.forEach(function(item) { counter += item })

  return counter
}

function arrayPlusArray(arr1, arr2) {
  return [...arr1, ...arr2].reduce((prev, cur) => prev + cur)
}

var a = [1,2,3,4]
var b = [1,2,3,4]
var c = a.concat(b)
console.log(c)



function createPhoneNumber(numbers){
  // input [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  numbers.splice(0,0,'(') // [(,1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  numbers.splice(4,0,') ') // [(,1, 1, 1, ) , 1, 1, 1, 1, 1, 1, 1]
  numbers.splice(8,0,'-')

  console.log(numbers.join(''))

  // seludupin `()` [(,1, 1, 1,), 1, 1, 1, 1, 1, 1, 1]
  // seludupin spasi setelah kurung tutup [(,1, 1, 1,), ,1, 1, 1, 1, 1, 1, 1]
  // seludupin - di index ke 4 dari belakang [(,1, 1, 1,), ,1, 1, 1, - , 1, 1, 1, 1]
  // join
}

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])

// describe('Basic tests', () => {
//   Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
//   Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
//   Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// });





const number = [1,2,3]

const hasil = number.reduce((prev,cur) => prev.replace('x',cur) , 'x-x-x')

// loop sebanyak 3 x
// loop 0 || prev = x-x-x || cur = 1 || action = 1-x-x
// loop 1 || prev = 1-x-x || cur = 2 || action = 1-2-x
// loop 2 || prev = 1-2-x || cur = 3 ||
console.log(hasil)























var bcs = 'aaaa'
bcs = bcs.replace('a','b')
console.log(bcs)









function freqSeq(str, sep) {
  const arrString = str.split('')
  const arrMap = arrString.map((v, i, arr) => arr.filter(vi => vi === v).length);
  console.log(arrMap.join(sep))



}

freqSeq('hello world', '-')





const nameString = 'hello'
console.log( nameString.split('').filter(zz => zz === 'h').length)










const abc =[1,2,3]

console.log(abc.join('fikri'))