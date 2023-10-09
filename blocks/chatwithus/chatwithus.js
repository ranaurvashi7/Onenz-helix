//
var mainDiv = document.querySelector('.chatwithus-wrapper');

document.querySelector('.chatwithus-wrapper > .chatwithus.block').style.display = 'none';

//changing mainDiv className
mainDiv.setAttribute('class','Container-wrapper');
mainDiv.style.backgroundColor = '#ebebeb';

//getting content from that div
var firstContent = document.querySelector('.Container-wrapper > .chatwithus.block > div > div > h2').innerText;
var secondContent = document.querySelector('.Container-wrapper > .chatwithus.block > div > div  > p > picture');
var thirdContent = document.querySelector('.Container-wrapper > .chatwithus.block > div > div  > h3').innerText;
var fourthContent = document.querySelectorAll('.Container-wrapper > .chatwithus.block > div > div  > p')[1].innerText;
var fifthContentLink = document.querySelector('.Container-wrapper > .chatwithus.block > div > div > a').attributes[0].value;
var fifthContent = document.querySelector('.Container-wrapper > .chatwithus.block > div > div > a').innerText;
//
var firstDiv = document.createElement('div');
firstDiv.setAttribute('class','Container');
mainDiv.appendChild(firstDiv);

//
var secondDiv = document.createElement('div');
secondDiv.setAttribute('class','Container-title');
firstDiv.appendChild(secondDiv);

//
var firstHeader = document.createElement('h3');
firstHeader.append(firstContent);
secondDiv.appendChild(firstHeader);

//
var thirdDiv = document.createElement('div');
thirdDiv.setAttribute('class','Container-rows');
firstDiv.appendChild(thirdDiv);

//
var fourthDiv = document.createElement('div');
fourthDiv.setAttribute('class','OneColumnContainer');
thirdDiv.appendChild(fourthDiv);

//
var fifthDiv = document.createElement('div');
fifthDiv.setAttribute('class','OneColumnContainer-row');
fourthDiv.appendChild(fifthDiv);

//
var sixthDiv = document.createElement('div');
sixthDiv.setAttribute('class','OneColumnContainer-column');
fifthDiv.appendChild(sixthDiv);

//
var seventhDiv = document.createElement('div');
seventhDiv.setAttribute('class','IconPromo');
seventhDiv.setAttribute('data-icon-size','large');
sixthDiv.appendChild(seventhDiv);

//
var eigthDiv = document.createElement('div');
eigthDiv.setAttribute('class','IconPromo-icon');
eigthDiv.append(secondContent);
seventhDiv.appendChild(eigthDiv);

// //`<use xlink:href="#chevron"></use>`
// var dummySVG = document.createElement('use');
// dummySVG.setAttribute('xlink:href','#chevron');

// //
// var dummyDivOne = document.createElement('svg');
// dummyDivOne.setAttribute('class','chevron');
// dummyDivOne.append(dummySVG);

//
var dummyDivOne = document.createElement('svg');

//firstSVG.setAttribute('class','chevron');

dummyDivOne.classList.add('bi' ,'bi-chevron-right');

dummyDivOne.setAttribute('xmlns','http://www.w3.org/2000/svg');

dummyDivOne.setAttribute('width','100');

dummyDivOne.setAttribute('height','100');

dummyDivOne.setAttribute('viewBox','0 0 16 16');

dummyDivOne.setAttribute('data-inactive','');

dummyDivOne.style.marginTop = '-2px';

dummyDivOne.style.height = '22px';

dummyDivOne.style.width = '24px';

dummyDivOne.style.color = 'var(--headerTextColor)';

dummyDivOne.style.strokeWidth = '0.1px';

dummyDivOne.innerHTML = `<path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>`;


//
var ninenthDiv = document.createElement('div');
ninenthDiv.setAttribute('class','IconPromo-title');
ninenthDiv.append(thirdContent);
ninenthDiv.append(dummyDivOne);
seventhDiv.appendChild(ninenthDiv);

//
var anchorDummyOne = document.createElement('a');
anchorDummyOne.setAttribute('class','CtaLink');
anchorDummyOne.setAttribute('href',fifthContentLink);
anchorDummyOne.setAttribute('data-cta-priority','primary');
anchorDummyOne.innerText = fifthContent;

//
var tenthDiv = document.createElement('div');
tenthDiv.setAttribute('class','IconPromo-description');
tenthDiv.innerHTML = fourthContent + `<br>`;
tenthDiv.append(anchorDummyOne);
seventhDiv.appendChild(tenthDiv);