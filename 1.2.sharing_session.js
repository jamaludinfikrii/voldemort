// Q N A

// Kalau tengah malam atau siang tiba tiba ada prompt cmd ? gapapa
// kemarin pemakaian dolar sign gabisa ?  karena pake ' bukan `
// Terus do while vs while ? `do while`, kerjain sekali baru cek kodisi, kalo while, cek kondisi, baru kerjain
// Sharing session hari kamis untuk bahas exercise ? Bakalan di vote di group
// true + true = 2, apakah di js doang ? iyaa sofar baru nemu.
// Exercise susah banget sedangkan materi basic ? yap begitulah adanya.
// Ada function buat nambahin angka kayak sum ? ada
// Kenapa declare variable dengan string kosong ? karena expected nya isi variable nya string
// Method, function, object, property ?
// Ada tracking kalau semisal dua orang ngerjain bareng bareng ? nanti pake git & github
// Selain pake vs code pake apa ? banyak banget pilihannya, sublime, atom, notepad ++, VIM
// diajarin deployment gak ? diajarin
// Frontend vs Backend ? frontend segala sesuatu yang diliat user, backend yang gak diliat


// Action items
// kirim soal soal day 1 ke whatsapp !
// vote di group tentang bahas exercise
// Bikin group discord / slack ?
// hosting dan domain di provide gak ?









// ====================  BAHAS SOAL EXERCISE ================

// *
// **
// ***
// ****
// *****


// console.log('*\n**\n***\n****\n*****')

// var x = 1 // 2 // 3 // 4 // 5 // 6
// var totalBaris = 5
// do {
//   console.log("*".repeat(x))
//   x = x + 1
// }while (x <= totalBaris)


// var baris = 3

// //   *        // jumlah spasi = baris - 0 // jumlah '+' = 1
// //  ***       // jumlah spasi = baris - 1 // jumlah '+' = 3
// // *****      // jumlah spasi = baris - 2 // jumlah '+' = 5

var result = ''
for(var i = 0; i < baris; i ++) {
  result += ' '.repeat(baris - i)
  result += '+'.repeat(i * 2 + 1)
  if(i === baris - 1) {
    break;
  }
  result += '\n'
}

// console.log(result)


var baris = 3

var result = ''
for(var i = 0; i < baris; i ++) {
  for(var j = 0 ; j < baris - i ; j ++) {
    result += ' '
  }

  for(var k = 0; k < i * 2 + 1 ; k ++ ) {
    result += '*'
  }

  result += '\n'
}


// console.log(result)








// +=



// loop (x = 1 ; x < 3; x ++)
  // console andi
  // loop (j = 1 ; j < 5 ; j ++)
    // console fikri


// andi
// fikri
// fikri
// fikri
// fikri
// andi
// fikri
// fikri
// fikri
// fikri


// =============== INTRO OBJECT AND FUNCTION =================

// data orang

var namaOrang = 'fikri'
var umurOrang = 100
var rumah = 'Bandung'



// object
var orang = {
  nama: 'fikri',
  umur: 100,
  rumah: 'Bandung',
}

// function (alat) // js udah ada built in function
// console log bintang sebanyak x kali

function printBintang(input) {
  console.log('*'.repeat(input))
}

// printBintang(100)

function printSegitiga(baris) {
  var result = ''
  for(var i = 0; i < baris; i ++) {
    for(var j = 0 ; j < baris - i ; j ++) {
      result += ' '
    }

    for(var k = 0; k < i * 2 + 1 ; k ++ ) {
      result += '*'
    }

    result += '\n'
  }
  console.log(result)
}