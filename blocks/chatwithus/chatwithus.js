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
var fifthContent = document.querySelectorAll('.Container-wrapper > .chatwithus.block > div > div')[1].innerHTML;

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

//
var dummyDivOne = document.createElement('svg');
dummyDivOne.setAttribute('class','chevron');
dummyDivOne.innerHTML = `<use xlink:href="#chevron"></use>`;

//
var ninenthDiv = document.createElement('div');
ninenthDiv.setAttribute('class','IconPromo-title');
ninenthDiv.append(thirdContent);
ninenthDiv.append(dummyDivOne);
seventhDiv.appendChild(ninenthDiv);

//
var tenthDiv = document.createElement('div');
tenthDiv.setAttribute('class','IconPromo-description');
tenthDiv.innerHTML = fourthContent + `<br>` + fifthContent;
seventhDiv.appendChild(tenthDiv);