// // alert("heyho")

// // prompt("Masukkan usia anda");

// // var Usia = 30;
// // console.log("Heyho Usia anda adalah" + Usia);

// // var usia = prompt("Masukkan usia anda");
// // alert("Usia Heyho Adalah" + usia);

// let nama = "Dea Afrizal";
// let usia = 30;
// let tinggiBadan = 173.5;
// let beratBadan;
// let pacar = null;

// beratBadan = 30;

// // if (pacar == null) {
// //   pacar = "belum punya";
// // } else {
// //   pacar = "udah punya";
// // }

// // switch(pacar){
// //     case 1:
// //         pacar = "punya 1 aja"
// //         break
// //     case 2:
// //         pacar = "punya pacar 2, bagus"
// //         break
// //     default:
// //         pacar = "belum punya pacar"
// // }

// let saldoAwal = 50000
// let saldoTambahan = 80000
// const hutang = 30000
// const saldoAkhir = saldoAwal + saldoTambahan - hutang

// const x = 3
// const y = 5
// const z = x*y

// alert(
//     `nilai x = ${x} & nilai y = ${y} maka hasilnya adalah ${z}`
// )
// alert(
//   `Nama saya ${nama} usia saya ${usia} tinggi badan ${tinggiBadan} berat badan saya ${beratBadan} pacar saya ${pacar}`,
// );

// alert(`saldo awal saya sebesar Rp${saldoAwal} & saldo tambahan yang akan saya miliki sebesar RRp.${saldoTambahan} jadi total saldo yang saya miliki adalah sebanyak ${saldoAkhir} `,)

// let namaGuru = ["Hasi", "Gani", "Bani"];
// namaGuru.push("dea", "fikri"); //masukin kata dari belakang
// namaGuru.shift() //ngapus nama dari depan
// namaGuru.pop() //ngapus nama dari belakang
// alert(namaGuru);

// let namaGuru = []

// namaGuru[0] = "dea" //buat nimpa nilai
// namaGuru[1] = "fikri"

// alert(namaGuru)
// let namaGuru = ["Dea", "Afrizal", "Retno", "Bunga"];
// for (let i = 0; i <= namaGuru.length; i++) {
//   console.log(namaGuru[i]);
// }

// let i = 0;
// while (i < 10) {
//   i++;
//   console.log("dea Afrizal");
// }

// atau
// do {
//   i++;
//   console.log("dea Afrizal");
// } while (i < 10);

// Tugas 1

// let saldoUser = Number(prompt("Masukkan Saldo Anda"));
// let Pemasukan = Number(prompt("Masukkan Pemasukan Anda"));
// let Pengeluaran = Number(prompt("Masukkan Pengeluaran Anda"));

// let saldoAkhir = saldoUser + Pemasukan - Pengeluaran;

// alert(`Saldo Akhir Anda Adalah ${saldoAkhir}`);

// Tugas 2

// var myDays = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
// var Date = new Date();
// var day = Date.getDate();
// var thisDay = Date.getDay();
// thisDay = myDays[thisDay];
// console.log(thisDay);

// Materi hari ke 2

// document.title = "Samuel Joshua";
// document.h1;
// console.log(document.body);
// const body = document.body;
// body.append("Hello World");
// const h1 = document.createElement("h1");
// h1.textContent = "ANJAY INI H1";
// body.append(h1);
// -------------------------------------------------------------------------------------------------------
// document.title = "Ayam";
// const body = document.body;
// body.append("Hello World");

// const h1 = document.createElement("h1");
// h1.textContent = "Anjay";

// const namaSaya = document.createElement("p");
// namaSaya.textContent = "Samuel Joshua";

// const namaKamu = document.createElement("p");
// namaKamu.innerHTML = "<marquee> KAMA <marquee>";

// body.append(namaKamu);
// body.append(namaSaya);
// body.append(h1);
// -------------------------------------------------------------------------------------------------------
// Tugas 1
document.title = "Fikri Gobles";
const body = document.body;
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector("#btn2");

const defaultText = "Klik Saya 1";
btn1.textContent = defaultText;

btn1.style.border = "none";
btn1.style.padding = "8px";
btn1.style.fontSize = "34px";
btn1.style.background = "tomato";

function clickButton() {
  btn1.style.background = "blueviolet";
  const newText = document.createElement("p");
  newText.textContent = "Halo Bung Apa Kabar!";
  body.append(newText);
}

function ubahText() {
  btn1.textContent = "hihhihih";
}

function oriText() {
  btn1.textContent = defaultText;
}
//-------------------------------------------------------------------------------
// function hasilkanText() {
//   const newText2 = document.createElement("p");
//   newText2.textContent = "Halo Bung Apa Kabar!";
//   body.append(newText2);
// }

// function ubahWarna() {
//   body.style.color = "red";
//   body.style.background = "black";
// }
////----------------------------------------------------------------------------------
// Tugas 2
const defaultText2 = "Klik Saya 2";
btn2.textContent = defaultText2;

const newText = document.createElement("p");
body.append(newText);

function hasilkanText() {
  newText.style.color = "black";
  newText.textContent = "Halo Bung Apa Kabar!";
}

function ubahWarna() {
  newText.style.color = "aqua";
}
