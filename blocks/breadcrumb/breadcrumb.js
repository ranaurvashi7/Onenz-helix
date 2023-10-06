//
var mainDiv = document.querySelector('.breadcrumb-wrapper');
//getting content from that div

document.querySelector('.breadcrumb-wrapper > .breadcrumb.block').style.display= 'none';
//changing mainDiv className
mainDiv.setAttribute('class','SectionPage-breadcrumbs');

var firstContent = document.querySelector('.SectionPage-breadcrumbs > .breadcrumb.block > div > div > ul > li > a').innerText;
var firstContentlink = document.querySelector('.SectionPage-breadcrumbs > .breadcrumb.block > div > div > ul > li > a').attributes[0].value;
var secondContent = document.querySelectorAll('.SectionPage-breadcrumbs > .breadcrumb.block > div > div > ul > li')[1].innerText;

//
var firstDiv = document.createElement('div');
firstDiv.setAttribute('class','SectionPage-breadcrumbs-wrapper');
mainDiv.appendChild(firstDiv);

//
var firstAnchor = document.createElement('a');
firstAnchor.setAttribute('class','Link');
firstAnchor.setAttribute('href',firstContentlink)
firstAnchor.append(firstContent);
firstDiv.appendChild(firstAnchor);

//`<use xlink:href="#chevron"></use>`
var dummySVG = document.createElement('use');
dummySVG.setAttribute('xlink:href','#chevron');

//
var firstSVG = document.createElement('svg');
firstSVG.setAttribute('class','chevron');
firstSVG.setAttribute('data-inactive','');
firstSVG.append(dummySVG);
firstDiv.appendChild(firstSVG);

//
var firstSpan = document.createElement('span');
firstSpan.setAttribute('class','Link');
firstSpan.append(secondContent);
firstDiv.appendChild(firstSpan);