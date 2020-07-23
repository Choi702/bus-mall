'user strict'

// global target///
var SkyMallArray = [];
var totalImageClicks = 0;
var totalClicks = 0;
var totalDisplayImages =[0, 1, 3];
var pageRefreshTotal =0;


function SkyMallProduct(imageName, src) {
  this.numberOfClicks = 0;
  this.imageName = imageName;
  this.imageSrc = src;
  this.productShown = 0; //created  to show product shown
  SkyMallArray.push(this);
  
}

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



// adding event listner
function handleClickOnProduct(event) {
  
  if (event.target.tagName === 'IMG') {
    
    totalClicks++;
    
    
    renderTotalAsList();
    
    //we need to redisplay totalClicks everytime its clicked. In order to do that you have to keep feeding the html a new number everytime it gets clicked here
    
    
    for (var productIndex = 0; productIndex < SkyMallArray.length; productIndex++) {
      if (SkyMallArray[productIndex].imageSrc === event.target.getAttribute('src')) {
        SkyMallArray[productIndex].numberOfClicks++;
        
        
      }
    }
    displayskyMall();
    
    if (totalClicks === 10) {
      var productList = document.getElementById('product-list');
      // productList.innerHTML = '';
      
      productList.removeEventListener('click', handleClickOnProduct);
      myGraphChart();
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
    
  
    
    
    
    
    
    
    console.log(renderTotalAsList);
    
  }
}


// Random numnber generator//
function displayskyMall() {
  document.getElementById("product-list").innerHTML = "";
  var index0 = Math.floor(Math.random() * SkyMallArray.length);
  var index1 = Math.floor(Math.random() * SkyMallArray.length);
  while(index1 === totalDisplayImages[0] || index1 === totalDisplayImages[1]){
    index1 = Math.floor(Math.random() * SkyMallArray.length);
  }
  var index2 = Math.floor(Math.random() * SkyMallArray.length);
  while(index1 ===  index2){
    index2 = Math.floor(Math.random() * SkyMallArray.length);
  }
  
  
  
  
  var newskyMall0 = SkyMallArray[index0];
  var newskyMall1 = SkyMallArray[index1];
  var newskyMall2 = SkyMallArray[index2];
  newskyMall0.productShown ++  //capture image 
  newskyMall1.productShown ++
  newskyMall2.productShown ++ 
  
  
  
  var skyMallList = document.getElementById('product-list');
  skyMallList.innerHTML = '';
  newskyMall0.renderskyMallHtml();
  newskyMall1.renderskyMallHtml();
  newskyMall2.renderskyMallHtml();
  
  
  
  
  
}

// As a marketeer, I want to prevent users from seeing the same image in two subsequent iterations, so that they are not biased.
// Update your algorithm to randomly generate three unique product images from the images directory.
// Update your algorithm so that new products are generated, confirm that these products are not duplicates from the immediate previous set.
// As a user, I would like to track how many times a product has appeared in a voting session, so that I can track analytics on each piece of data.
// Add an additional property to your constructor function that tracks the number of times the product has been shown.
// Update this new property every time the product is shown as one of the three options on the screen for the viewer to choose.
// As a marketing manager, I would like a visual representation of how many times a product was clicked so that I can visually analyze the results.

// Using ChartJS (imported from CDN), display the vote totals and the number of times a product was viewed in a bar chart format. (hint: don’t forget about the <canvas> tags)
// Place the bar chart in the section located beneath your three product images
// The bar charts should only appear after all voting data has been collected.



  


//====function calls ==================

// handleClickOnProduct();
var listOfProduct = document.getElementById('product-list');
listOfProduct.addEventListener('click', handleClickOnProduct);
// document.addEventListener('click', handleClickOnProduct);

new SkyMallProduct('Dragon', 'img/dragon.jpg');
new SkyMallProduct('Bubblegum', 'img/bubblegum.jpg');
new SkyMallProduct('Dog Duck', 'img/dog-duck.jpg');
new SkyMallProduct('Boots', 'img/boots.jpg');
new SkyMallProduct('Chair', 'img/chair.jpg');
new SkyMallProduct('Bag', 'img/bag.jpg');
new SkyMallProduct('Banana', 'img/banana.jpg');
new SkyMallProduct('Bathroom', 'img/bathroom.jpg');
new SkyMallProduct('Boots', 'img/boots.jpg');
new SkyMallProduct('Breakfast', 'img/breakfast.jpg');
new SkyMallProduct('Cthulhu', 'img/cthulhu.jpg');
new SkyMallProduct('Pen', 'img/pen.jpg');
new SkyMallProduct('Pet-Sweep', 'img/pet-sweep.jpg');
new SkyMallProduct('Scissors', 'img/scissors.jpg');






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
function getChartData(){
for (var i = 0; i < SkyMallArray.length; i++){
  console.log('hello');

 clickArray.push(SkyMallArray[i].numberOfClicks);

 productShownArray.push(SkyMallArray[i].productShown);


 
}
}


//============================== Chart ========================================

function myGraphChart() {
getChartData(); // to get the data for the product shown and number of clicks
  // var chartArray = [SkyMallArray[0].imageName, 'Dragon', 'Bubblegum', 'Dog Duck', 'Boots', 'Chair', 'Bathroom'];
  var ctx = document.getElementById('myChart').getContext('2d');
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
        borderWidth: 10
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

}

var ctx2 = document.getElementById('myChart2').getContext('2d');
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
      borderWidth: 10
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






