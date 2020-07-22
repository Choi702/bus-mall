'user strict'

// global target///
var skyMallArray = [];
var totalImageClicks = 0;
var totalClicks = 0;


function SkyMallProduct(imageName, src) {
  this.numberOfClicks = 0;
  this.imageName = imageName;
  this.imageSrc = src;
  skyMallArray.push(this);

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


    for (var productIndex = 0; productIndex < skyMallArray.length; productIndex++) {
      if (skyMallArray[productIndex].imageSrc === event.target.getAttribute('src')) {
        skyMallArray[productIndex].numberOfClicks++;


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
  for (var i = 0; i < skyMallArray.length; i++) {


    var list = document.getElementById('product-vote');
    var listItem = document.createElement('li');
    listItem.textContent = skyMallArray[i].imageName + ' : ' + skyMallArray[i].numberOfClicks + ' click';
    list.appendChild(listItem);








    console.log(renderTotalAsList);

  }
}


// Random numnber generator//
function displayskyMall() {
  var index0 = Math.floor(Math.random() * skyMallArray.length);
  var index1 = Math.floor(Math.random() * skyMallArray.length);
  var index2 = Math.floor(Math.random() * skyMallArray.length);
  var index3 = Math.floor(Math.random() * skyMallArray.length);
  var index4 = Math.floor(Math.random() * skyMallArray.length);
  var index5 = Math.floor(Math.random() * skyMallArray.length);




  var newskyMall0 = skyMallArray[index0];
  var newskyMall1 = skyMallArray[index1];
  var newskyMall2 = skyMallArray[index2];
  var newskyMall3 = skyMallArray[index3];
  var newskyMall4 = skyMallArray[index4];
  var newskyMall5 = skyMallArray[index5];



  var skyMallList = document.getElementById('product-list');
  skyMallList.innerHTML = '';
  newskyMall0.renderskyMallHtml();
  newskyMall1.renderskyMallHtml();
  newskyMall2.renderskyMallHtml();
  newskyMall3.renderskyMallHtml();
  newskyMall4.renderskyMallHtml();
  newskyMall5.renderskyMallHtml();




}


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
new SkyMallProduct('Bathroom', 'img/bathroom.jpg');




skyMallArray[0].renderskyMallHtml();
skyMallArray[1].renderskyMallHtml();
skyMallArray[2].renderskyMallHtml();
skyMallArray[3].renderskyMallHtml();
skyMallArray[4].renderskyMallHtml();
skyMallArray[5].renderskyMallHtml();

renderTotalAsList();



//============================== Chart ========================================

function myGraphChart() {

  // var chartArray = [skyMallArray[0].imageName, 'Dragon', 'Bubblegum', 'Dog Duck', 'Boots', 'Chair', 'Bathroom'];
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Dragon', 'Bubblegum', 'Dog Duck', 'Boots', 'Chair', 'Bathroom'],
      datasets: [{
        label: '# of Votes',
        data: [2, 5, 9, 10, 34, 26],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
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
