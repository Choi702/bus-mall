'user strict'


var skyMallArray = [];
var totalImageClicks = 0;
var totalClicks = 0;


function skyMallProduct (imageName, src){
  this.numberOfClicks = 0;
  this.imageName = imageName;
  this.imageSrc = src;
  skyMallArray.push(this);
  
}

skyMallProduct.prototype.renderskyMallHtml = function() {
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

  


function handleClickOnProduct(event) {
  
  if (event.target.tagName === 'IMG') {
    
    totalClicks++;
    console.log(totalClicks);
    
    
    //we need to redisplay totalClicks everytime its clicked. In order to do that you have to keep feeding the html a new number everytime it gets clicked here
    
    
    for (var productIndex = 0; productIndex < skyMallArray.length; productIndex++){
      if (skyMallArray[productIndex].imageSrc === event.target.getAttribute('src')) {
        skyMallArray[productIndex].numberOfClicks++;
        
      }
    } 
    displayskyMall();
    
    if(totalClicks === 10){
      var productList = document.getElementById('product-list');
      // productList.innerHTML = '';
      
     
      productList.removeEventListener('click', handleClickOnProduct);
      
    }
    
  } 
}


function displayskyMall(){
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

new skyMallProduct('Dragon', 'img/dragon.jpg');
new skyMallProduct('Bubblegum', 'img/bubblegum.jpg');
new skyMallProduct('Dog Duck', 'img/dog-duck.jpg');
new skyMallProduct('Boots', 'img/boots.jpg');
new skyMallProduct('Chair', 'img/chair.jpg');
new skyMallProduct('Bathroom', 'img/bathroom.jpg');


skyMallArray[0].renderskyMallHtml();
skyMallArray[1].renderskyMallHtml();
skyMallArray[2].renderskyMallHtml();
skyMallArray[3].renderskyMallHtml();
skyMallArray[4].renderskyMallHtml();
skyMallArray[5].renderskyMallHtml();

var getNumberToDisplay = document.getElementById('Product_Vote')
var newLi = document.createElement('li')
newLi.textContent = ('hello');
getNumberToDisplay.appendChild(newLi)

