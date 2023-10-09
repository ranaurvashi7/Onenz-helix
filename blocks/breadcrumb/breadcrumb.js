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

// //`<use xlink:href="#chevron"></use>`
// var dummySVG = document.createElement('use');
// dummySVG.setAttribute('xlink:href','#chevron');

// //
// var firstSVG = document.createElement('svg');
// firstSVG.setAttribute('class','chevron');
// firstSVG.setAttribute('data-inactive','');
// firstSVG.append(dummySVG);
// firstDiv.appendChild(firstSVG);

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

firstDiv.appendChild(firstSVG);

//
var firstSpan = document.createElement('span');
firstSpan.setAttribute('class','Link');
firstSpan.append(secondContent);
firstDiv.appendChild(firstSpan);