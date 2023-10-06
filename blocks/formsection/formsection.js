//
var mainDiv = document.querySelector('.formsection-wrapper');

document.querySelector('.formsection-wrapper > .formsection.block').style.display = 'none';

//changing mainDiv className
mainDiv.setAttribute('class','Container-wrapper');
mainDiv.style.backgroundColor = '#ebebeb';
//getting content from that div
var firstContent = document.querySelector('.Container-wrapper > .formsection.block > div > div > h2').innerText;
var firstAnchorContent = document.querySelectorAll('.Container-wrapper > .formsection.block > div > div > p > a')[0].attributes[0].value;
var thirdContent = document.querySelector('.Container-wrapper > .formsection.block > div > div > p > a').innerText;
var fourthContent = document.querySelectorAll('.Container-wrapper > .formsection.block > div > div > p')[1].innerText;
var fifthContent = document.querySelector('.Container-wrapper > .formsection.block > div > div > ul');

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
var secondaryDiv = document.createElement('div');
secondaryDiv.setAttribute('class','PromoB');
secondaryDiv.setAttribute('data-content-type','oneOffPage');
secondaryDiv.setAttribute('data-no-media','');
secondaryDiv.setAttribute('data-image-align','top');
sixthDiv.appendChild(secondaryDiv);

//
var firstAnchor = document.createElement('a');
firstAnchor.setAttribute('href',firstAnchorContent);
secondaryDiv.appendChild(firstAnchor);

//
var seventhDiv = document.createElement('div');
seventhDiv.setAttribute('class','PromoB-content');
firstAnchor.appendChild(seventhDiv);

//
var eigthDiv = document.createElement('div');
eigthDiv.setAttribute('class','PromoB-title');
seventhDiv.appendChild(eigthDiv);

var dummyHeader = document.createElement('h3');
dummyHeader.append(thirdContent);
eigthDiv.appendChild(dummyHeader);

//`<use xlink:href="#chevron"></use>`
var dummySVG = document.createElement('use');
dummySVG.setAttribute('xlink:href','#chevron');

//
var firstSVG = document.createElement('svg');
firstSVG.setAttribute('class','chevron');
firstSVG.append(dummySVG);
eigthDiv.appendChild(firstSVG);

//description
var ninenthDiv = document.createElement('div');
ninenthDiv.setAttribute('class','PromoB-title');
ninenthDiv.append(fourthContent);
ninenthDiv.append(fifthContent);
seventhDiv.appendChild(ninenthDiv);

////
var firstAnchorOneContent = document.querySelectorAll('.Container-wrapper > .formsection.block > div > div > p > a')[1].attributes[0].value;
var thirdOneContent = document.querySelectorAll('.Container-wrapper > .formsection.block > div > div > p')[2].innerText;
var fourthOneContent = document.querySelectorAll('.Container-wrapper > .formsection.block > div > div > p')[3].innerText;
var fifthOneContent = document.querySelector('.Container-wrapper > .formsection.block > div > div > ul');

//
var sixthOneDiv = document.createElement('div');
sixthOneDiv.setAttribute('class','ThreeColumnContainer-column');
fifthDiv.appendChild(sixthOneDiv);

//
var secondaryOneDiv = document.createElement('div');
secondaryOneDiv.setAttribute('class','PromoB');
secondaryOneDiv.setAttribute('data-content-type','external');
secondaryOneDiv.setAttribute('data-no-media','');
secondaryOneDiv.setAttribute('data-image-align','top');
sixthOneDiv.appendChild(secondaryOneDiv);

//
var firstAnchorOne = document.createElement('a');
firstAnchorOne.setAttribute('href',firstAnchorOneContent);
secondaryOneDiv.appendChild(firstAnchorOne);

//
var seventhOneDiv = document.createElement('div');
seventhOneDiv.setAttribute('class','PromoB-content');
firstAnchorOne.appendChild(seventhOneDiv);

//
var eigthOneDiv = document.createElement('div');
eigthOneDiv.setAttribute('class','PromoB-title');
seventhOneDiv.appendChild(eigthOneDiv);

var dummyHeaderOne = document.createElement('h3');
dummyHeaderOne.append(thirdOneContent);
eigthOneDiv.appendChild(dummyHeaderOne);

//`<use xlink:href="#chevron"></use>`
var dummySVGOne = document.createElement('use');
dummySVGOne.setAttribute('xlink:href','#chevron');

//
var firstSVGOne = document.createElement('svg');
firstSVGOne.setAttribute('class','chevron');
firstSVGOne.append(dummySVGOne);
eigthOneDiv.appendChild(firstSVGOne);

//description
var ninenthOneDiv = document.createElement('div');
ninenthOneDiv.setAttribute('class','PromoB-title');
ninenthOneDiv.append(fourthOneContent);
ninenthOneDiv.append(fifthOneContent);
seventhOneDiv.appendChild(ninenthOneDiv);


////
var firstAnchorTwoContent = document.querySelectorAll('.Container-wrapper > .formsection.block > div > div > p > a')[2].attributes[0].value;
var thirdTwoContent = document.querySelectorAll('.Container-wrapper > .formsection.block > div > div > p')[4].innerText;
var fifthTwoContent = document.querySelector('.Container-wrapper > .formsection.block > div > div > ul');

//
var sixthTwoDiv = document.createElement('div');
sixthTwoDiv.setAttribute('class','ThreeColumnContainer-column');
fifthDiv.appendChild(sixthTwoDiv);

//
var secondaryTwoDiv = document.createElement('div');
secondaryTwoDiv.setAttribute('class','PromoB');
secondaryTwoDiv.setAttribute('data-content-type','external');
secondaryTwoDiv.setAttribute('data-no-media','');
secondaryTwoDiv.setAttribute('data-image-align','top');
sixthTwoDiv.appendChild(secondaryTwoDiv);

//
var firstAnchorTwo = document.createElement('a');
firstAnchorTwo.setAttribute('href',firstAnchorTwoContent);
secondaryTwoDiv.appendChild(firstAnchorTwo);

//
var seventhTwoDiv = document.createElement('div');
seventhTwoDiv.setAttribute('class','PromoB-content');
firstAnchorTwo.appendChild(seventhTwoDiv);

//
var eigthTwoDiv = document.createElement('div');
eigthTwoDiv.setAttribute('class','PromoB-title');
seventhTwoDiv.appendChild(eigthTwoDiv);

var dummyHeaderTwo = document.createElement('h3');
dummyHeaderTwo.append(thirdTwoContent);
eigthTwoDiv.appendChild(dummyHeaderTwo);

//`<use xlink:href="#chevron"></use>`
var dummySVGTwo = document.createElement('use');
dummySVGTwo.setAttribute('xlink:href','#chevron');

//
var firstSVGTwo = document.createElement('svg');
firstSVGTwo.setAttribute('class','chevron');
firstSVGTwo.append(dummySVGTwo);
eigthTwoDiv.appendChild(firstSVGTwo);

//description
var ninenthTwoDiv = document.createElement('div');
ninenthTwoDiv.setAttribute('class','PromoB-title');
ninenthTwoDiv.append(fifthTwoContent);
seventhTwoDiv.appendChild(ninenthTwoDiv);
