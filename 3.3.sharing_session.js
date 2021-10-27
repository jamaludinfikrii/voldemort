// Action Item
// tanyain detail exam.
// jelasin jeroan dari filter, sort, reduce dsb.
// jelasin git dan github

// QNA
// 1. Fibonacci (materi 1)
// 2. var count = (str.match(/\,/g) || []).length maksudnya apaa? (materi 2)
// 3. error git || (materi 3)
// 4. mending pake arrow function atau function biasa
  // - mending arrow function
// 5. HTML Module 1 vs HTML Module 2
  // - module 1 html + js (logic)
  // - module 2 html + css (style)
  // - module 2 html + react js (style + logic)






// MATERI

// ========== 1 ============
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

// fibo (3) // 1
// fibo (5) // 5

const fibo = (seq) => {
  if(seq < 3) {
    return 1
  } else {
    // return fibo(seq - 1) + fibo(seq - 2);

    // return fibo(4)                       + fibo(3)
    // return fibo(2) + fibo(3)             + fibo(1) + fibo(2)
    // return 1       + fibo(1) + fibo(2)   + 1  +  1

    //  return 1 + 1 + 1 + 1 + 1
    //  return 5
  }
}

// console.log(fibo(5))


// =============== 2 ===========

const pepname = 0

const result = (pepname || 'username')

// console.log(result)


const str = 'halo halo'
const comma = str.match(/\,/g) === null ? 0 : str.match(/\,/g).length
// console.log(comma)


// =========== 3 ===============
// PS C:\Users\Rocky\Desktop\Purwadhika\Practice> git add . warning: LF will be replaced by CRLF in Module 2/Session 5/bootstrap-4.6.0-dist/css/bootstrap-grid.css. The file will have its original line endings in your working directory warning: LF will be replaced by CRLF in Module 2/Session 5/bootstrap-4.6.0-dist/css/bootstrap-grid.min.css. The file will have its original line endings in your working directory warning: LF will be replaced by CRLF in Module 2/Session 5/bootstrap-4.6.0-dist/css/bootstrap-reboot.css. The file will have its original line endings in your working directory warning: LF will be replaced by CRLF in Module 2/Session 5/bootstrap-4.6.0-dist/css/bootstrap-reboot.min.css. The file will have its original line endings in your working directory warning: LF will be replaced by CRLF in Module 2/Session 5/bootstrap-4.6.0-dist/css/bootstrap.css. The file will have its original line endings in your working directory The file will


// VARIABLE, DATA TYPE, CONDITIONAL STATEMENT, LOOPING, ARRAY, FUNCTION, OBJECT, CLASS, GIT & GITHUB
// HTML + DOM






// IMPORTANT !! JANGAN HAFALIN SYNTAX, PAHAMI KONSEP


// const hello = () => 'hello'

// function hello () {
//   return 'hello'
// }



// ============== 4 =============

// Anagrams

const anagrams = (word, words) => {
  const sortedWord = word.split('').sort()
  const wordAnagrams = []

  let curItem;
  let sortedItem;
  for(let i = 0; i < words.length; i++) {
    curItem = words[i]
    if(curItem.length === sortedWord.length) {
      sortedItem = curItem.split('').sort()

      if(sortedWord.join('') === sortedItem.join('')) {
        wordAnagrams.push(curItem)
      }

    }
  }

  return wordAnagrams;

}

console.log(anagrams('fikri', ['rifki', 'ikrif','ikkrif']))



/**
'abba' & 'baab' == true
'abba' & 'bbaa' == true
'abba' & 'abbba' == false
'abba' & 'abca' == false


// psudo code

// provide empty array
// input 1 sort alphabetically
// looping di array
  // ambil tiap item
  // check length item
    // if beda dengan input 1, continue
  // sort alphabetically item
  // compare item dengan input 1
  // if true push ke new array

//

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('fikri', ['kifri', 'rifki', 'ikirf']) => ['kifri','rifki','ikirf']
 */

//


// const words1 = 'fikri'
// const sorted = words1.split('').sort()


// const words2 = 'kifri'
// const sorted2 = words2.split('').sort()
// console.log(sorted2.join('') === sorted.join(''))
// const words3 = 'kkkiiifffrii'




// ================== 5 ===============


function iqTest(numbers) {
  const arrNum = numbers.split(' ');
  const evenIdx = []
  const oddIdx = []

  arrNum.forEach((item, index) => {
    if (item % 2 === 0) {
      evenIdx.push(index + 1)
    } else {
      oddIdx.push(index + 1)
    }
  })

  const result = evenIdx.length === 1 ? evenIdx : oddIdx
  return result[0]
}


function iqTest(numbers){ // 2 4 5 6 8
  var nums = numbers.split(" ").map(x => x % 2);

  // numssplit
  // nums = [2,4,5,6,8]

  // numsmap
  // nums = [0, 0, 1, 0, 0]
  var sum = nums.reduce((a,b) => a + b);

  // sum = 1
  var target = sum > 1 ? 0 : 1;

  // target = 1
  return nums.indexOf(target) + 1;

  // 2 + 1
  // 3
}

/**
 *
 *
psudo code :
  // bikin 2 array odd and even
  // masukin index ke tiap tiap array
  // return array yang isinya cuma satu

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

iqTest("1,3,5,7,10") => 5
iqTest("4,6,5,6,2") => 3
 */