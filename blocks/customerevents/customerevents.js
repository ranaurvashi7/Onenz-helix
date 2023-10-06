//getting main DIV

var mainDiv = document.querySelector('.customerevents-wrapper');
document.querySelector('.customerevents-wrapper > .customerevents.block').style.display = 'none';

//changin mainDiv className
mainDiv.setAttribute('class','Page-below');

//getting content from that div
var firstContent = document.querySelector('.Page-below > .customerevents.block > div > div > h2').innerText ;
var secondContentLink = document.querySelector('.Page-below > .customerevents.block > div > div > ul > li > a').attributes[0].value;
var thirdContent = document.querySelector('.Page-below > .customerevents.block > div > div > ul > li > a').innerText;
var fourthContent = document.querySelector('.Page-below > .customerevents.block > div > div > ul > li > a').nextSibling;
var lastOneContentLink = document.querySelectorAll('.Page-below > .customerevents.block > div > div > ul > li > a')[1].attributes[0].value;
var lastOneContent = document.querySelectorAll('.Page-below > .customerevents.block > div > div > ul > li > a')[1].innerText;
var lastTwoContent = document.querySelectorAll('.Page-below > .customerevents.block > div > div > ul > li > a')[1].nextSibling;
var excellentContent = document.querySelectorAll('.Page-below > .customerevents.block > div > div > ul > li ')[2].innerText;
var gooodContent = document.querySelectorAll('.Page-below > .customerevents.block > div > div > ul > li ')[3].innerText;
var fairContent = document.querySelectorAll('.Page-below > .customerevents.block > div > div > ul > li ')[4].innerText;
var noConnectionContent = document.querySelectorAll('.Page-below > .customerevents.block > div > div > ul > li ')[5].innerText;
//
var firstDiv = document.createElement('div');
firstDiv.setAttribute('class','NetworkStatus');
mainDiv.appendChild(firstDiv);

 

//Customer Impacting Events

var firstHeader = document.createElement('h2');

firstHeader.setAttribute('class','NetworkStatus-title');

firstHeader.append(firstContent);

firstDiv.appendChild(firstHeader);

 

//

var secondDiv = document.createElement('div');

secondDiv.setAttribute('class','NetworkStatus-content');

firstDiv.appendChild(secondDiv);

 

//

var thirdDiv = document.createElement('div');

thirdDiv.setAttribute('class','NetworkStatus-item');

secondDiv.appendChild(thirdDiv);

 

//https://one.nz/help/network-status/

//Mobile &amp; Wireless Broadband ›

var firstAnchor = document.createElement('a');

firstAnchor.setAttribute('class','NetworkStatus-heading');

firstAnchor.setAttribute('href',secondContentLink);

firstAnchor.append(thirdContent);

thirdDiv.appendChild(firstAnchor);

 

//

var fourthDiv = document.createElement('div');

fourthDiv.setAttribute('class','NetworkStatusIndicator');

thirdDiv.appendChild(fourthDiv);

 

//Excellent

var firstSpan = document.createElement('span');

firstSpan.setAttribute('class','NetworkStatusIndicator-excellent');

firstSpan.append(excellentContent);

fourthDiv.appendChild(firstSpan);

 

//Very Good

var secondSpan = document.createElement('span');

secondSpan.setAttribute('class','NetworkStatusIndicator-veryGood');

secondSpan.setAttribute('data-active','');

secondSpan.append(fourthContent);

fourthDiv.appendChild(secondSpan);

 

// //Good

var thirdSpan = document.createElement('span');

thirdSpan.setAttribute('class','NetworkStatusIndicator-good');

thirdSpan.append(gooodContent);

fourthDiv.appendChild(thirdSpan);

 

// //Fair

var fourthSpan = document.createElement('span');

fourthSpan.setAttribute('class','NetworkStatusIndicator-fair');

fourthSpan.append(fairContent);

fourthDiv.appendChild(fourthSpan);

 

// //Low

// var fifthSpan = document.createElement('span');

// fifthSpan.setAttribute('class','NetworkStatusIndicator-low');

// fifthSpan.append(document.querySelector());

// fourthDiv.appendChild(fifthSpan);

 

// //No Connection

var sixthSpan = document.createElement('span');

sixthSpan.setAttribute('class','NetworkStatusIndicator-noConnection');

sixthSpan.append(noConnectionContent);

fourthDiv.appendChild(sixthSpan); 

//

var spacerDiv = document.createElement('div');

spacerDiv.setAttribute('class','NetworkStatus-spacer');

secondDiv.appendChild(spacerDiv);

//

//

var thirdOneDiv = document.createElement('div');

thirdOneDiv.setAttribute('class','NetworkStatus-item');

secondDiv.appendChild(thirdOneDiv);

 

//https://one.nz/help/network-status/#landlineandbroadband

//Fixed Line (Fibre, DSL, HFC) Broadband &amp; Landline ›

var firstOneAnchor = document.createElement('a');

firstOneAnchor.setAttribute('class','NetworkStatus-heading');

firstOneAnchor.setAttribute('href',lastOneContentLink);

firstOneAnchor.append(lastOneContent);

thirdOneDiv.appendChild(firstOneAnchor);

 

//

var fourthOneDiv = document.createElement('div');

fourthOneDiv.setAttribute('class','NetworkStatusIndicator');

thirdOneDiv.appendChild(fourthOneDiv);

 

//Excellent

var firstOneSpan = document.createElement('span');

firstOneSpan.setAttribute('class','NetworkStatusIndicator-excellent');

firstOneSpan.append(excellentContent);

fourthOneDiv.appendChild(firstOneSpan);

 

//Very Good

var secondOneSpan = document.createElement('span');

secondOneSpan.setAttribute('class','NetworkStatusIndicator-veryGood');

secondOneSpan.setAttribute('data-active','');

secondOneSpan.append(lastTwoContent);

fourthOneDiv.appendChild(secondOneSpan);

 

//Good

var thirdOneSpan = document.createElement('span');

thirdOneSpan.setAttribute('class','NetworkStatusIndicator-good');

thirdOneSpan.append(gooodContent);

fourthOneDiv.appendChild(thirdOneSpan);

 

// // //Fair

var fourthOneSpan = document.createElement('span');

fourthOneSpan.setAttribute('class','NetworkStatusIndicator-fair');

fourthOneSpan.append(fairContent);

fourthOneDiv.appendChild(fourthOneSpan);

 

// // //Low

// // var fifthOneSpan = document.createElement('span');

// // fifthOneSpan.setAttribute('class','NetworkStatusIndicator-low');

// // fifthOneSpan.appendC(document.querySelector());

// // fourthOneDiv.appendChild(fifthOneSpan);

 

// // //No Connection

var sixthOneSpan = document.createElement('span');

sixthOneSpan.setAttribute('class','NetworkStatusIndicator-noConnection');

sixthOneSpan.append(noConnectionContent);

fourthOneDiv.appendChild(sixthOneSpan);