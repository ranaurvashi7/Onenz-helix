import { readBlockConfig, decorateIcons } from '../../scripts/aem.js';

 

/**

 * loads and decorates the footer

 * @param {Element} block The footer block element

 */

export default async function decorate(block) {

  const cfg = readBlockConfig(block);

  block.textContent = '';

 

  // fetch footer content

  const footerPath = cfg.footer || '/footer';

  const resp = await fetch(`${footerPath}.plain.html`, window.location.pathname.endsWith('/footer') ? { cache: 'reload' } : {});

 

  if (resp.ok) {

    const html = await resp.text();

 

    // decorate footer DOM

    const footer = document.createElement('div');

    footer.innerHTML = html;

 

    decorateIcons(footer);

    block.append(footer);

  }

  var mainDiv = document.querySelector('footer');

 

  //changing mainDiv className

 

mainDiv.setAttribute('class','Page-footer');

document.querySelector('.Page-footer > .footer.block').style.display = 'none';

var firstContent =document.querySelector('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a').innerText;

var firstAnchorContentlink = document.querySelector('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a').attributes[0].value;

 

 

mainDiv.style.backgroundColor = '#323232';

 

//

 

var firstDiv = document.createElement('div');

 

firstDiv.setAttribute('class','Page-footer-body');

 

mainDiv.appendChild(firstDiv);

 

 

 

//

 

var ffDiv = document.createElement('div');

 

ffDiv.setAttribute('class','Page-footer-navigation');

 

firstDiv.appendChild(ffDiv);

 

//

 

var nav = document.createElement('nav');

 

nav.setAttribute('class','FooterNavigation');

 

ffDiv.appendChild(nav);

 

 

 

var ul = document.createElement('ul');

 

ul.setAttribute('class','FooterNavigation-items');

 

nav.appendChild(ul);

 

 

 

var li = document.createElement('li');

 

li.setAttribute('class','FooterNavigation-items-item');

 

ul.appendChild(li);

 

var ps = document.createElement('ps-toggler');

ps.setAttribute('class','FooterNavigationItem');

ps.setAttribute('data-toggle','footer-item');

ps.setAttribute('data-has-items','');

li.appendChild(ps);

 

 

var lidiv = document.createElement('div');

 

lidiv.setAttribute('class','FooterNavigationItem-heading');

lidiv.setAttribute('data-toggle-trigger','footer-item');

lidiv.setAttribute('data-has-items','')

ps.appendChild(lidiv);

 

 

 

var a = document.createElement('a');

 

a.setAttribute('class','FooterNavigationItem-text');

a.setAttribute('href',firstAnchorContentlink);

a.innerHTML = firstContent;

lidiv.appendChild(a);

 

 

 

var lisvg = document.createElement('svg');

 

lisvg.setAttribute('class','chevron');

 

lidiv.appendChild(lisvg);

 

 

 

var fourthDiv = document.createElement('div');

 

fourthDiv.setAttribute('class','FooterNavigationItem-heading');

 

ps.appendChild(fourthDiv);

 

 

 

var a2 = document.createElement('a');

 

a2.setAttribute('class','FooterNavigationItem-text');

 

ps.appendChild(a2);

 

 

 

//

 

 

 

var LastDiv = document.createElement('div');

 

LastDiv.setAttribute('class','IconPromo-description');

 

LastDiv.innerHTML = nav + `<br>` + Content;

 

fourthDiv.appendChild(LastDiv);

//

 

var fsDiv = document.createElement('div');

 

fsDiv.setAttribute('class','Page-footer-floor');

 

firstDiv.appendChild(fsDiv);

}
