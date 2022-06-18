import React from "react";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[]; // means storing array of string
let role: [number, string]; // it's called tuple
let personName: unknown; // if you don't know what kind of data type will be used, use this instead of any

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "Louis",
};

let lotsOfPeople: Person[] = [];

let printName: (name: string) => void;
// let printName: (name: string) => never;  // the difference between void and never is void returns undefined while never doesn't return anything
// let printName: (name: string) => number; // and so on, this is going to return number

// difference between type and interface

interface A {
  a: string;
  b: number;
}

interface B extends A {
  // you can also extends to type
  c: string;
}

let ab: B = {
  a: "sfsdf",
  b: 1,
  c: "haha",
};

// anyway you can put the same variable name with interface and type because they are similar

type C = {
  a: number;
  b: number;
};

type D = C & {
  c: number;
};

let cd: D = {
  a: 1,
  b: 2,
  c: 3,
};

const App = () => {
  return <div>App</div>;
};

export default App;
