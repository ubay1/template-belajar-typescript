interface StringArray {
  [index: string]: string | number; // mendefinisikan index dengan number,
  // dan hanya dapat diisi dengan string
  name: string;
  leng: number;
}
const myArray: StringArray = {
  name: "aku",
  leng: 2,
};
const myStr: unknown = myArray;
console.log(myStr); // tampil bob
