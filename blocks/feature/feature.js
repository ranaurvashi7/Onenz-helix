//
var mainDiv = document.querySelector('.feature-wrapper');

document.querySelector('.feature-wrapper > .feature.block').style.display = 'none';

//changing mainDiv className
mainDiv.setAttribute('class','Container-wrapper');
//getting content from that div
var firstContent = document.querySelector('.Container-wrapper > .feature.block > div > div > h2').innerText;
var firstAnchorContent = document.querySelector('.Container-wrapper > .feature.block > div > div > p > a').attributes[0].value;
var secondContent = document.querySelector('.Container-wrapper > .feature.block > div > div > p > picture');
var thirdContent = document.querySelector('.Container-wrapper > .feature.block > div > div > p > a').innerText;
var fourthContent = document.querySelectorAll('.Container-wrapper > .feature.block > div > div > p')[2].innerText;

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

//
var seventhDiv = document.createElement('div');
seventhDiv.setAttribute('class','IconPromo');
seventhDiv.setAttribute('data-icon-size','medium');
seventhDiv.setAttribute('data-has-url','');
firstAnchor.appendChild(seventhDiv);

//
var eigthDiv = document.createElement('div');
eigthDiv.setAttribute('class','IconPromo-icon')
eigthDiv.append(secondContent);
seventhDiv.appendChild(eigthDiv);

//
var ninethDiv = document.createElement('div');
ninethDiv.setAttribute('class','IconPromo-title');
ninethDiv.append(thirdContent);
seventhDiv.appendChild(ninethDiv);

// //`<use xlink:href="#chevron"></use>`
// var dummySVG = document.createElement('use');
// dummySVG.setAttribute('xlink:href','#chevron');

// //
// var firstSVG = document.createElement('svg');
// firstSVG.setAttribute('class','chevron');
// firstSVG.setAttribute('data-inactive','');
// firstSVG.append(dummySVG);
// ninethDiv.appendChild(firstSVG);

//
var firstSVG = document.createElement('svg');

//firstSVG.setAttribute('class','chevron');

firstSVG.classList.add('bi' ,'bi-chevron-right');

firstSVG.setAttribute('xmlns','http://www.w3.org/2000/svg');

firstSVG.setAttribute('width','100');

firstSVG.setAttribute('height','100');

firstSVG.setAttribute('viewBox','0 0 16 16');

firstSVG.setAttribute('data-inactive','');

firstSVG.style.marginTop = '-2px';

firstSVG.style.height = '22px';

firstSVG.style.width = '24px';

firstSVG.style.color = 'var(--headerTextColor)';

firstSVG.style.strokeWidth = '0.1px';

firstSVG.innerHTML = `<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>`;

ninethDiv.appendChild(firstSVG);


//
var tenthDiv = document.createElement('div');
tenthDiv.setAttribute('class','IconPromo-description');
tenthDiv.append(fourthContent);
seventhDiv.appendChild(tenthDiv);

//
var firstOneAnchorContent = document.querySelectorAll('.Container-wrapper > .feature.block > div > div > p > a')[1].attributes[0].value;
var secondOneContent = document.querySelector('.Container-wrapper > .feature.block > div > div > p > picture');
var thirdOneContent = document.querySelectorAll('.Container-wrapper > .feature.block > div > div > p')[4].innerText;
var fourthOneContent = document.querySelectorAll('.Container-wrapper > .feature.block > div > div > p')[5].innerText;

var sixthOneDiv = document.createElement('div');
sixthOneDiv.setAttribute('class','ThreeColumnContainer-column');
fifthDiv.appendChild(sixthOneDiv);

//
var firstAnchorOne = document.createElement('a');
firstAnchorOne.setAttribute('href',firstOneAnchorContent);
sixthOneDiv.appendChild(firstAnchorOne);

//
var seventhOneDiv = document.createElement('div');
seventhOneDiv.setAttribute('class','IconPromo');
seventhOneDiv.setAttribute('data-icon-size','medium');
seventhOneDiv.setAttribute('data-has-url','');
firstAnchorOne.appendChild(seventhOneDiv);

//
var eigthOneDiv = document.createElement('div');
eigthOneDiv.setAttribute('class','IconPromo-icon')
eigthOneDiv.append(secondOneContent);
seventhOneDiv.appendChild(eigthOneDiv);

//
var ninethOneDiv = document.createElement('div');
ninethOneDiv.setAttribute('class','IconPromo-title');
ninethOneDiv.append(thirdOneContent);
seventhOneDiv.appendChild(ninethOneDiv);

// //`<use xlink:href="#chevron"></use>`
// var dummySVGOne = document.createElement('use');
// dummySVGOne.setAttribute('xlink:href','#chevron');

// //
// var firstSVGOne = document.createElement('svg');
// firstSVGOne.setAttribute('class','chevron');
// firstSVGOne.setAttribute('data-inactive','');
// firstSVGOne.append(dummySVGOne);
// ninethOneDiv.appendChild(firstSVGOne);

//
var firstSVGOne = document.createElement('svg');

//firstSVG.setAttribute('class','chevron');

firstSVGOne.classList.add('bi' ,'bi-chevron-right');

firstSVGOne.setAttribute('xmlns','http://www.w3.org/2000/svg');

firstSVGOne.setAttribute('width','100');

firstSVGOne.setAttribute('height','100');

firstSVGOne.setAttribute('viewBox','0 0 16 16');

firstSVGOne.setAttribute('data-inactive','');

firstSVGOne.style.marginTop = '-2px';

firstSVGOne.style.height = '22px';

firstSVGOne.style.width = '24px';

firstSVGOne.style.color = 'var(--headerTextColor)';

firstSVGOne.style.strokeWidth = '0.1px';

firstSVGOne.innerHTML = `<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>`;

ninethOneDiv.appendChild(firstSVGOne);

//
var tenthOneDiv = document.createElement('div');
tenthOneDiv.setAttribute('class','IconPromo-description');
tenthOneDiv.append(fourthOneContent);
seventhOneDiv.appendChild(tenthOneDiv);

//
var firstTwoAnchorContent = document.querySelectorAll('.Container-wrapper > .feature.block > div > div > p > a')[2].attributes[0].value;
var secondTwoContent = document.querySelector('.Container-wrapper > .feature.block > div > div > p > picture');
var thirdTwoContent = document.querySelectorAll('.Container-wrapper > .feature.block > div > div > p')[7].innerText;
var fourthTwoContent = document.querySelectorAll('.Container-wrapper > .feature.block > div > div > p')[8].innerText;

var sixthTwoDiv = document.createElement('div');
sixthTwoDiv.setAttribute('class','ThreeColumnContainer-column');
fifthDiv.appendChild(sixthTwoDiv);

//
var firstAnchorTwo = document.createElement('a');
firstAnchorTwo.setAttribute('href',firstTwoAnchorContent);
sixthTwoDiv.appendChild(firstAnchorTwo);

//
var seventhTwoDiv = document.createElement('div');
seventhTwoDiv.setAttribute('class','IconPromo');
seventhTwoDiv.setAttribute('data-icon-size','medium');
seventhTwoDiv.setAttribute('data-has-url','');
firstAnchorTwo.appendChild(seventhTwoDiv);

//
var eigthTwoDiv = document.createElement('div');
eigthTwoDiv.setAttribute('class','IconPromo-icon')
eigthTwoDiv.append(secondTwoContent);
seventhTwoDiv.appendChild(eigthTwoDiv);

//
var ninethTwoDiv = document.createElement('div');
ninethTwoDiv.setAttribute('class','IconPromo-title');
ninethTwoDiv.append(thirdTwoContent);
seventhTwoDiv.appendChild(ninethTwoDiv);

// //`<use xlink:href="#chevron"></use>`
// var dummySVGTwo = document.createElement('use');
// dummySVGTwo.setAttribute('xlink:href','#chevron');

// //
// var firstSVGTwo = document.createElement('svg');
// firstSVGTwo.setAttribute('class','chevron');
// firstSVGTwo.setAttribute('data-inactive','');
// firstSVGTwo.append(dummySVGTwo);
// ninethTwoDiv.appendChild(firstSVGTwo);

//
var firstSVGTwo = document.createElement('svg');

//firstSVG.setAttribute('class','chevron');

firstSVGTwo.classList.add('bi' ,'bi-chevron-right');

firstSVGTwo.setAttribute('xmlns','http://www.w3.org/2000/svg');

firstSVGTwo.setAttribute('width','100');

firstSVGTwo.setAttribute('height','100');

firstSVGTwo.setAttribute('viewBox','0 0 16 16');

firstSVGTwo.setAttribute('data-inactive','');

firstSVGTwo.style.marginTop = '-2px';

firstSVGTwo.style.height = '22px';

firstSVGTwo.style.width = '24px';

firstSVGTwo.style.color = 'var(--headerTextColor)';

firstSVGTwo.style.strokeWidth = '0.1px';

firstSVGTwo.innerHTML = `<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>`;

ninethTwoDiv.appendChild(firstSVGTwo);

//
var tenthTwoDiv = document.createElement('div');
tenthTwoDiv.setAttribute('class','IconPromo-description');
tenthTwoDiv.append(fourthTwoContent);
seventhTwoDiv.appendChild(tenthTwoDiv);