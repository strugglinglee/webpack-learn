// import _ from 'lodash';
// import printMe from './print';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

async function getComponent() {
  let element = document.createElement('div');
  const { default: _ } = await import(/*webpackChunkName: "lodash" */ 'lodash');
  element.innerHTML = _.join(['Hello1', 'Webpack'], '');

  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

if (module.hot) {
  module.hot.accept('./print.js', function () {
    console.log('Accepting the updated printMe module!');
    // printMe();
    // document.body.removeChild(element);
    // element = component();
    // element = component();
    // document.body.appendChild(element);
  });
}
