'user strict'

// global target///
var SkyMallArray = [];
var totalImageClicks = 0;
var totalClicks = 0;
var totalDisplayImages = [0, 1, 2,];
var pageRefreshTotal = 0;

function productOutput() {

  var getSkyMallArray = localStorage.getItem('storedItems');

  if (getSkyMallArray) {
    outputMallArray = JSON.parse(getSkyMallArray);
    
    //Instantiation
    for (let i = 0; i < outputMallArray.length; i++) {
      new SkyMallProduct(outputMallArray[i].imageName, outputMallArray[i].imageSrc, outputMallArray[i].numberOfClicks, outputMallArray[i].productShown);
    }

  }
}
productOutput();

//Constructor

function SkyMallProduct(imageName, src, numberOfClicks, productShown) {
  this.numberOfClicks = numberOfClicks;
  this.imageName = imageName;
  this.imageSrc = src;
  this.productShown = productShown; //created  to show product shown
  this.productRefresh = 0;
  SkyMallArray.push(this);

}
//Protoype

SkyMallProduct.prototype.renderskyMallHtml = function () {
  var target = document.getElementById('product-list');
  var productClicksLi = document.createElement('li');
  // console.log(skyMallArray);

  var productImg = document.createElement('img');
  productImg.src = this.imageSrc;
  productImg.alt = this.imageName;
  productClicksLi.appendChild(productImg);

  var productTextP = document.createElement('p');
  productTextP.textContent = this.imageName;
  productClicksLi.appendChild(productTextP);

  target.appendChild(productClicksLi);

};

// Adding event listner
function handleClickOnProduct(event) {

  if (event.target.tagName === 'IMG') {

    totalClicks++;


    renderTotalAsList();

    //we need to redisplay totalClicks everytime its clicked. In order to do that you have to keep feeding the html a new number everytime it gets clicked here

    for (var productIndex = 0; productIndex < SkyMallArray.length; productIndex++) {
      if (SkyMallArray[productIndex].imageSrc === event.target.getAttribute('src')) {
        SkyMallArray[productIndex].numberOfClicks++;


      }
      console.log('skyMallArray', SkyMallArray);
      var contents = JSON.stringify(SkyMallArray);
      localStorage.setItem('storedItems', contents);
    }
    displayskyMall();

    if (totalClicks === 10) {
      var productList = document.getElementById('product-list');
      // productList.innerHTML = '';

      productList.removeEventListener('click', handleClickOnProduct);
      myGraphChart();
      myVoteChart();
    }

  }
}
function renderTotalAsList() {
  //make sure to delete what is already in the list before removing
  document.getElementById("product-vote").innerHTML = "";
  for (var i = 0; i < SkyMallArray.length; i++) {


    var list = document.getElementById('product-vote');
    var listItem = document.createElement('li');
    listItem.textContent = 'the image ' + SkyMallArray[i].imageName + ' : ' + SkyMallArray[i].numberOfClicks + ' click' + ' shown ' + SkyMallArray[i].productShown;

    list.appendChild(listItem);



  }
}


// Random number generator
function displayskyMall() {
  document.getElementById('product-list').innerHTML = "";
  var index0 = Math.floor(Math.random() * SkyMallArray.length);
  var index1 = Math.floor(Math.random() * SkyMallArray.length);
  while (index1 === totalDisplayImages[0] || index1 === totalDisplayImages[1]) {
    index1 = Math.floor(Math.random() * SkyMallArray.length);
  }


  var index2 = Math.floor(Math.random() * SkyMallArray.length);


  {
    index1 = Math.floor(Math.random() * SkyMallArray.length);
  }

  var newskyMall0 = SkyMallArray[index0];
  var newskyMall1 = SkyMallArray[index1];
  var newskyMall2 = SkyMallArray[index2];
  newskyMall0.productShown++  //capture image 
  newskyMall1.productShown++
  newskyMall2.productShown++


  var skyMallList = document.getElementById('product-list');
  // skyMallList.innerHTML = '';
  newskyMall0.renderskyMallHtml();
  newskyMall1.renderskyMallHtml();
  newskyMall2.renderskyMallHtml();

}


//====function calls ==================

// handleClickOnProduct();
var listOfProduct = document.getElementById('product-list');
listOfProduct.addEventListener('click', handleClickOnProduct);
// document.addEventListener('click', handleClickOnProduct);
if (SkyMallArray.length === 0) {

  new SkyMallProduct('Dragon', 'img/dragon.jpg', 0, 0);
  new SkyMallProduct('Bubblegum', 'img/bubblegum.jpg', 0, 0);
  new SkyMallProduct('Dog Duck', 'img/dog-duck.jpg', 0, 0);
  new SkyMallProduct('Chair', 'img/chair.jpg', 0, 0);
  new SkyMallProduct('Bag', 'img/bag.jpg', 0, 0);
  new SkyMallProduct('Banana', 'img/banana.jpg', 0, 0);
  new SkyMallProduct('Bathroom', 'img/bathroom.jpg', 0, 0);
  new SkyMallProduct('Boots', 'img/boots.jpg', 0, 0);
  new SkyMallProduct('Breakfast', 'img/breakfast.jpg', 0, 0);
  new SkyMallProduct('Cthulhu', 'img/cthulhu.jpg', 0, 0);
  new SkyMallProduct('Pen', 'img/pen.jpg', 0, 0);
  new SkyMallProduct('Pet-Sweep', 'img/pet-sweep.jpg', 0, 0);
  new SkyMallProduct('Scissors', 'img/scissors.jpg', 0, 0);
}



SkyMallArray[0].renderskyMallHtml();
SkyMallArray[1].renderskyMallHtml();
SkyMallArray[2].renderskyMallHtml();


// SkyMallArray[3].renderskyMallHtml();
// SkyMallArray[4].renderskyMallHtml();
// SkyMallArray[5].renderskyMallHtml();

renderTotalAsList();


//looping over the skymall array

var clickArray = [];
var productShownArray = [];
function getChartData() {
  for (var i = 0; i < SkyMallArray.length; i++) {


    clickArray.push(SkyMallArray[i].numberOfClicks);

    productShownArray.push(SkyMallArray[i].productShown);

  }
}

//============================== Chart ========================================

   // to get the data for the product shown and number of clicks
function myGraphChart() {
  getChartData(); 
  
  // var chartArray = [SkyMallArray[0].imageName, 'Dragon', 'Bubblegum', 'Dog Duck', 'Boots', 'Chair', 'Bathroom'];
  var ctx = document.getElementById('myChart').getContext('2d');
  ctx.canvas.width = 100;
  ctx.canvas.height = 100;
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: ['Dragon', 'Bubblegum', 'Dog Duck', 'Boots', 'Chair', 'Bathroom', 'Bag', 'Banana', 'Breakfast', 'Cthulhu', 'Pen', 'Pet-Sweep', 'Scissors'],
      datasets: [{
        label: '# of click',
        data: clickArray, // input where you will put clickArray
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)'

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


  var ctx2 = document.getElementById('myChart2').getContext('2d');
  ctx2.canvas.width = 100;
  ctx2.canvas.height = 100;
  var myChart = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
      labels: ['Dragon', 'Bubblegum', 'Dog Duck', 'Boots', 'Chair', 'Bathroom', 'Bag', 'Banana', 'Breakfast', 'Cthulhu', 'Pen', 'Pet-Sweep', 'Scissors'],
      datasets: [{
        label: '# of Vote',
        data: productShownArray,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

};





