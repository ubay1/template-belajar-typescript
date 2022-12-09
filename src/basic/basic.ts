/* eslint-disable @typescript-eslint/no-unused-vars */
/* -------------------------------------------------------------------------- */
/*                                    Basic                                   */
/* -------------------------------------------------------------------------- */

/* ---------------------- 14. number, string, boolean Types --------------------- */
function basicType1(num1: number, str1: string, bool1: boolean) {
  const data = {
    num1,
    str1,
    bool1,
  };
  return data;
}

const result1 = basicType1(10, "hi", true);
console.log("type number,string, boolean = ", result1);

/* ---------------------------- 16. Object Types ---------------------------- */
const testObjectType: { name: string; age: number } = {
  name: "khansa",
  age: 8,
};

testObjectType.name = "Qanita";
testObjectType.age = 2;
console.log("type object = ", testObjectType);

/* ----------------------------- 18. Array Types ---------------------------- */
const arrayType: string[] = ["a", "b"];
console.log("type array = ", arrayType);

/* ---------------------------- 19. Tuples Types ---------------------------- */
const arrayTuplesType: [number, string] = [1, "b"];

// push bisa memasukan data yang sesuai dengan type tuples yang diberikan, namun
// jika kita masukan suatu nilai namun dengan tipe yang tidak sesuai maka akan menampilkan error.
arrayTuplesType.push(1);

console.log("type array = ", arrayTuplesType);

/* ----------------------------- 20. Enum Types ----------------------------- */
// Enum digunakan untuk mendefiniskan atau menge-set suatu value dengan sifat constant atau istilah yang disebut dengan Initialization (Inisiasi). enum disediakan dalam bentuk numeric dan string atau bahkan keduanya.
// default nilai awal pada enum yaitu 0 dan enum menganut auto increment pada number.
// contoh dibawah jika kita eksekusi maka a=0, b=3, c=5

// numeric enum
enum testEnumNumber {
  a, // 0
  b = 3,
  c = 5,
}
enum testEnumString {
  naruto = "Rasengan",
  sasuke = "Chidori",
}
enum testEnumGabungan {
  a, // 0
  sasuke = "Chidori",
}

console.log("type enum = ", testEnumGabungan.a);

/* ------------------------------ 21. Any Types ----------------------------- */
// type any kita bisa menyimpan jenis tipe data apa saja atau istilahg lainnya adalah menonaktifkan semua pemeriksaan tipe pada typescript.
// namun tidak disarankan menggunakan any, karena menggunakan any sama saja seperti kita saat menggunakan javascript.
// kecuali jika kita memang tidak tahu data apa yang akan disimpan.

/* ----------------------------- 22. Union Types ---------------------------- */
// union type kegunannya untuk kita memasukan lebih dari 1 type.
const testUnion = (a: number, b: number | string) => {
  console.log(a, b);
};
testUnion(12, "aa");

/* ---------------------------- 23. Literal Types ---------------------------- */
// kegunaan literal types adalah memberikan exact value atau nilai yang pasti atau nilai yang sudah kita definisikan sebelumnya. Artinya, jika parameter atau nilai balikan dari sebuah function tidak ada di salah satu nilai yang sudah kita definisikan sebelumnya, maka akan terjadi error.
// ada tiga jenis Literal Types di Typescript. Di antaranya adalah String, Numeric, Boolean.
type testLiteral1 = "Samsung" | "Xiaomi" | "Sony"; // type alias

function testLiteral(phone: testLiteral1, price: number): string {
  return `My phone = ${phone} and price = ${price}`;
}
const resultTestLiteral = testLiteral("Samsung", 2000000);
console.log(resultTestLiteral);

/* ----------------------------- 24. Type alias ----------------------------- */
// Tipe alias dapat digunakan untuk "membuat" tipe Anda sendiri. Anda tidak terbatas untuk menyimpan tipe union.
type testalias1 = "Samsung" | "Xiaomi" | "Sony";
type testalias2 = { name: string; desc: string };

function testAliasProfil(profil: testalias2): void {
  console.log(profil.name + " - " + profil.desc);
}
testAliasProfil({ name: "test alias", desc: "wow ini toh type alias" });

/* ------------ 26. Mengembalikan Function dengan types atau void ----------- */
// contoh dibawah ini salah, karena function meminta kembaliannya adalah string
// sedangkan a mengembalikan tipe number.

function testReturnType(a: number): string {
  return a.toString();
}
const resReturnType = testReturnType(100);
console.log("test return types/void = ", resReturnType);

// jika kita memberikan tipe void, artinya tidak mengembalikan apa-apa pada function tersebut.

/* ------- 27. Membuat Function sebagai types dan memberikan callback ------- */
function testFunctionAsTypes1(n1: number, n2: number) {
  return n1 + n2;
}
function testFunctionAsTypes2(n1: number): void {
  console.log("Result = ", n1);
}
let testFunctionAsTypes3: (n1: number, n2: number) => number;
testFunctionAsTypes3 = testFunctionAsTypes1;
testFunctionAsTypes3 = testFunctionAsTypes3;
console.log(testFunctionAsTypes3(2, 4));

/* ---------------------------- 29. Unknown type ---------------------------- */
// unknown type mirip seperti any namun lebih baik.
// contoh:
let testUnknownType1: unknown;
let testUnknownType2: string;

testUnknownType1 = 109;
testUnknownType1 = "109";

// dibawah ini error karena type unknown tidak dapat ditetapkan untuk tipe string
// testUnknownType2 = testUnknownType1;

// untuk memperbaikinya kita bisa memeriksanya dengan typeof
if (typeof testUnknownType1 === "string") {
  testUnknownType2 = testUnknownType1;
}

// note: tapi lebih baiknya jika kita tidak tahu apa yang ingin kita masukan ke variabel testUnknownType1 apakah string/number/lainnya kita bisa gunakan union type terlebih dahulu dibanding unknown.

/* ----------------------------- 30. Never type ----------------------------- */
// tipe never dimasukan jika kita tahu bahwa nilai tidak akan dikembalikan, contohnya dibawah ini.
// ada 2 kasus yang bisa kita berikan type never:
// 1. loop tanpa akhir, contohnya dibawah ini:
// const sing = function (): never {
//   while (true) {
//     console.log("Never gonna give you up");
//     console.log("Never gonna let you down");
//     console.log("Never gonna run around and desert you");
//     console.log("Never gonna make you cry");
//     console.log("Never gonna say goodbye");
//     console.log("Never gonna tell a lie and hurt you");
//   }
// };

// 2. Fungsi yang melempar kesalahan, contohnya dibawah ini.
function generateError(msg: string, code: number): never {
  throw { msg, code };
}

try {
  const resError = generateError("Error bro", 500);
  console.log("error = ", resError);
} catch (error) {
  console.log("errors = ", error);
}
