const PubSub = require('../helpers/pub_sub.js');
const FormView = function(){


};

FormView.prototype.bindEvents = function () {
  const form = document.querySelector('#primechecker');
  form.addEventListener('submit', (event) =>{
    const inputtedNum = event.target.number.value;
    PubSub.publish('FormView: Num-submitted', inputtedNum);
    event.preventDefault();
  });
};


module.exports = FormView;
