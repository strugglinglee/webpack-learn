import _ from 'lodash';
import printMe from './print';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
  let element = document.createElement('div');
  let btn = document.createElement('button');

  element.innerHTML = _.join(['Hello1', 'Webpack'], '');

  btn.innerHTML = '点击这里，查看console';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component();
    element = component();
    document.body.appendChild(element);
  });
}
