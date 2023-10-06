//
var mainDiv = document.querySelector('.feature-wrapper');
//getting content from that div
var firstContent = document.querySelector('.Container-wrapper > .feature.block > div > div > h2').innerText;
var firstAnchorContent = document.querySelector('.Container-wrapper > .feature.block > div > div > p > a').attributes[0].value;
document.querySelector('.feature-wrapper > .feature.block').style.display = 'none';

//changing mainDiv className
mainDiv.setAttribute('class','Container-wrapper');

//
var firstDiv = document.createElement('div');
firstDiv.setAttribute('class','Container');
mainDiv.appendChild(firstDiv);

//
var secondDiv = document.createElement('div');
secondDiv.setAttribute('class','Container-title');
firstDiv.appendChild(secondDiv);

//What can we help you with today
var firstHeader = document.createElement('h2');
firstHeader.append(firstContent);
secondDiv.appendChild(firstHeader);

//
var thirdDiv = document.createElement('div');
thirdDiv.setAttribute('class','Container-rows');
firstDiv.appendChild(thirdDiv);

//
var fourthDiv = document.createElement('div');
fourthDiv.setAttribute('class','ThreeColumnContainer');
thirdDiv.appendChild(fourthDiv);

//
var fifthDiv = document.createElement('div');
fifthDiv.setAttribute('class','ThreeColumnContainer-row');
fourthDiv.appendChild(fifthDiv);

//
var sixthDiv = document.createElement('div');
sixthDiv.setAttribute('class','ThreeColumnContainer-column');
fifthDiv.appendChild(sixthDiv);

//
var firstAnchor = document.createElement('a');
firstAnchor.setAttribute('href',firstAnchorContent);
sixthDiv.appendChild(firstAnchor);
