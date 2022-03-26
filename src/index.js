// import _ from 'lodash';
import Print from './print';
// import printMe from './print';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  let element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], '');

  element.onclick = Print.bind(null, 'Hello webpack!');

  // const { default: _ } = await import(/*webpackChunkName: "lodash" */ 'lodash');
  // element.innerHTML = _.join(['Hello1', 'Webpack'], '');

  // let button = document.createElement('button');
  // var br = document.createElement('br');

  // button.innerHTML = 'Click me and look at the console!';
  // element.innerHTML = _.join(['Hello', 'webpack'], '');

  // element.appendChild(br);
  // element.appendChild(button);

  // button.onclick = (e) =>
  //   import(/*webpackChunkName: "print" */ './print').then((module) => {
  //     var print = module.default;

  //     print();
  //   });

  return element;
}

document.body.appendChild(component());
// getComponent().then((component) => {
//   document.body.appendChild(component);
// });

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');
//     printMe();
//     document.body.removeChild(element);
//     element = component();
//     element = component();
//     document.body.appendChild(element);
//   });
// }
