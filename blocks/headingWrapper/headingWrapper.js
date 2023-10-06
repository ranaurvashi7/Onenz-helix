//SectionPage-topContainer
//
var mainDiv = document.querySelector('.headingwrapper-wrapper');

document.querySelector('.headingwrapper-wrapper > .headingwrapper.block').style.display = 'none';

//changing mainDiv className
mainDiv.setAttribute('class','SectionPage-topContainer');

//getting content from doc
var firstWrapperContent = document.querySelector('.SectionPage-topContainer > .headingwrapper.block > div > div > h2').innerText;

//
var firstDivHeaderWrapper = document.createElement('div');
firstDivHeaderWrapper.setAttribute('class','SectionPage-headingWrapper');
firstDivHeaderWrapper.setAttribute('data-lead-animation','true');
firstDivHeaderWrapper.setAttribute('data-lead-overlay','true');
mainDiv.appendChild(firstDivHeaderWrapper);

//
var secondDivHeaderWrapper = document.createElement('div');
secondDivHeaderWrapper.setAttribute('class','SectionPage-heading');
firstDivHeaderWrapper.appendChild(secondDivHeaderWrapper);

//
var thirdHeaderWrapper = document.createElement('h1');
thirdHeaderWrapper.setAttribute('class','SectionPage-pageHeading');
thirdHeaderWrapper.append(firstWrapperContent);
secondDivHeaderWrapper.appendChild(thirdHeaderWrapper);