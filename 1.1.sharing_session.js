// materi
// 1. intro web and mobile dev,variable, logic statement?, loop statement?

// QNA
  // 1. penilaian ? cuma dari ujian
  // 2. number di javascript apakah sama dengan number di c++ ?
    // '1' + 1 = '11';
    // C++ '1' + 1 = 'error';
    // pahami konsepnya, tiap bahasa pemrograman punya behavior sendiri sendiri
  // 3. js pake titik koma atau tidak ? bebas, tapi saya prefer pake.
  // 4. js ada indentation error ?? gak ada, clean code.
  // 5. bikin variable `name` ada coretan di vs code ? karena udah deprecated  https://stackoverflow.com/questions/65379554/why-does-my-variable-show-its-deprecated#:~:text=It's%20because%20you%20overwrite%20your,Mark'%20in%20the%20first%20place.&text=For%20Dai%2C%20even%20if%20I,)%2C%20it%20still%20says%20deprecated.
  // 6. kalau misal tidak sempat hadir ? boleh aja, asal nonton video
  // 7. bedanya var dan let ? var bebas di declare berkali kali, kalau let gabisa
  // 8. biar auto completion di terminal ? ketik huruf awal, abis itu tab
  // 9. VS code bisa buat bahasa lain ? bisa banget
  // 10. Apakah js dan PHP mirip ? tata cara penulisan beda, konsep pemrogramannya sama.
  // 11. Framework ??
      // 1. dia punya standard, style, atau rules ?
      // 2. function function agar lebih cepet ketika develop ?
      // 3. optimize secara performance nya ?
  // 12. Library ??
      // 1. function function yang disediain buat mempercepat proses development
  // 13. Ujian module ?? gak ada teori sama sekali, pure ngoding.
  // 14. Apakah bakalan diajarin framework yang dipake companya company gede ? enggak, diajarinnya cuma react js, kalau fundamental udah oke, framework lain tinggal belajar dikit
  // 15. Nanti bakal diajarin bikin portfolio ?? Frontend 2 portfolio, di backend 1 portfolio, di Frontend mobile 1 lagi.
  // 16. Kehadiran harus tepat waktu ?? Kabarin aja kalau mau telat.


  // notes
  // kenapa belajar JS ??
  // framework paling laris manis di web development ( reactjs, vuejs, angular )
  // backend / server (node js)
  // mobile development ( react native (js) , flutter (dart) )

  // action items
    // tanya tentang ujian module
    // berapa portfolio yng bakal dibikin
    // tanya tentang absensi student








// MATERI

// VARIABLE
  // nyimpen data dalam variable
  // data = string, integer / number, boolean, symbol

  // use case variable => store data to use in any operations
var peopleName = "Andi"

console.log(peopleName)
console.log(peopleName)
console.log(peopleName)
console.log(peopleName)


  // variable ada 3 proses, declaration, assignment, usage / call


  var bookTitle // declaration
  bookTitle = "Harry potter" // Assignment
  console.log(bookTitle) // call / usage


  var colors = "blue"  // declare + assign


  storeName = "Rita" // not recommended, di beberapa framework error
  console.log(storeName)



  var username = "fikri"

  console.log(username) // fikri


  username = "andi" // re assign
  console.log(username)  // andi

  username = username + ' sulistiyo'
  console.log(username) // andi sulistiyo


  username = 100
  console.log(username) // 100


  username = 'sulistiyo ' + username + username
  console.log(username) //


  // 100100 sulistiyo / !!!
  // 200 sulistiyo / !!!!!!!!!
  // andi 100 sulistiyo



  // sulistiyo 100100


  // operasi aritmatik + - * /
  // operasi comparison == != > < >= <=


  console.log(username === 'sulistiyo 100100') //

  console.log(true !== false) // ???


  console.log(10 == '10') // true
  console.log(10 === '10') // false

  console.log(10 === 10)






// CONDITIONAL STATEMENT



var score = 80

if(score > 70) {
  // action
  console.log('LULUS')
  console.log("A")
  console.log("A")
  console.log("A")
  console.log("A")
  console.log("A")
  console.log("A")
  console.log("A")
  console.log("A")
} else {
  console.log('TIDAK LULUS')
}





// if(result > 100 ) {
//   console.log('kurang dari seratus')
// } else if(result > 80) {
//   console.log('kurang dari nol') // 1111111111
// } else if(result > 10) {
//   console.log('kurang dari delapan puluh') // 1
// } else {
//   console.log('kurang dari sepuluh')
// }

var result = 110

if(result > 100) {
  console.log('kurang dari seratus')
}

if(result > 80) {
  console.log('kurang dari nol') // 1111111111
}

if(result > 10) {
  console.log('kurang dari delapan puluh') // 1
}



// LOOPING


// pengkondisian => ketika kondisi true, action di execute (sekali)
// looping => selama kondisi true, action di execute terus

var result = 100


while (result > 10) {
  console.log(`diatas ` + result)
  result = result - 10
}