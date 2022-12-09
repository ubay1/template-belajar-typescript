/* -------------------------------------------------------------------------- */
/*                                Advance Type                                */
/* -------------------------------------------------------------------------- */

/* ---------------------------- Intersection type --------------------------- */
// intersection type mirip seperti extends pada interface. kita bisa menggabungkan 2 type/lebih menjadi 1.
type User1 = {
  name: string;
};
type User2 = {
  age: number;
};
type CombineUser = User1 & User2;
const el: CombineUser = {
  name: "Test",
  age: 10,
};
console.log(el);

/* ------------------------------ Type Assertion ------------------------------ */
// Terkadang kita akan memiliki informasi tentang jenis nilai yang tidak dapat diketahui oleh TypeScript.
// Misalnya, jika kita menggunakan document.getElementById, TypeScript hanya mengetahui bahwa ini akan mengembalikan semacam HTMLElement, tetapi Anda mungkin tahu bahwa laman Anda akan selalu memiliki HTMLElement / elemen lainnya dengan ID tertentu.
// Dalam situasi ini, Anda bisa menggunakan assertion tipe untuk menentukan tipe yang lebih spesifik.
if (typeof document !== "undefined") {
  const paragraf = document.getElementById("test") as HTMLElement;
  paragraf.innerHTML = "hi wakwaw";
}

/* ---------------------------- Dynamic Properties ---------------------------- */
// Ada saatnya kita tidak dapat mengetahui karakteristik property dari object yang akan kita buat, sehingga diperlukan mekanisme pembuatan object yang mendukung dynamic properties untuk mengatasinya.

// 1. index type signature
// hanya bisa 'string', 'number', 'symbol', atau literal type.
type IndexSignature = {
  [prop: string]: string;
};
const testIndexSignature: IndexSignature = {
  a: "aku",
};
console.log(testIndexSignature);
// catatan:
// kita lihat pada [prop: string], pada testIndexSignature kita bisa masukan angka ataupun huruf.
// namun jika kita ubah [prop: number] kita hanya bisa masukan angka.

// 2. Record type
// Kita juga dapat menggunakan Record Type untuk membuat object dengan dynamic properties.
// Record<tipe, return type>
// tipe disini adalah jenis properti yang akan kita buat. namun lebih sering yang digunakan adalah string.
// return type disini adalah type balikannya kita bisa tentukan sendiri, bisa string, number, ataupun interface.

const agent: Record<string, string> = {};
agent.name = "Gun";
agent.age = "30";
// agent.skill = ["DevOps", "Blockchain"]; // error
console.log(agent); //{ name: 'Gun', age: 30, skill: [ 'DevOps', 'Blockchain' ] }

interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
console.log(cats.boris);
