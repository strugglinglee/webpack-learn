// export default function printMe() {
//   console.log("updating print.js...");
// }

console.log(
  "The print.js module has loaded! See the network tab in dev tools..."
);

// export default () => {
//   console.log('Button Clicked: Here\'s "some text"!');
// };

export default function print(text) {
  console.log(text);
}
