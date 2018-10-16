const PubSub = require('../helpers/pub_sub.js');

const ResultView = function (){

};

ResultView.prototype.bindEvents = function (){
PubSub.subscribe('PrimeChecker:result-calculated', (event) =>{
const primeNumber = event.detail;
this.displayResult(primeChecker)

});
}

ResultView.prototype.displayResult = function (result){
const resultElement = document.querySelector(`#result`);
resultElement.checkerContent  = `The result is ${result}`;


};

module.exports = ResultView
