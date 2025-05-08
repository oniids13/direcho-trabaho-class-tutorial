const foo = 1;

function bar() {
  return 2;
}

export default function MyMainFunction() {
  return <div>Hello World!</div>;
}

function MyNewFunction(name, age, gender) {
  return <span>{name}</span>;
}

const MyExtraFunction = (name, age, gender) => {
  return <span>{age}</span>;
};

const CalculateProduct = (a, b) => a * b;

export { foo, bar };
