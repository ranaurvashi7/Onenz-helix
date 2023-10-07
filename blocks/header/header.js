import { getMetadata, decorateIcons } from '../../scripts/aem.js';

// media query match that indicates mobile/tablet width
const isDesktop = window.matchMedia('(min-width: 900px)');

function closeOnEscape(e) {
  if (e.code === 'Escape') {
    const nav = document.getElementById('nav');
    const navSections = nav.querySelector('.nav-sections');
    const navSectionExpanded = navSections.querySelector('[aria-expanded="true"]');
    if (navSectionExpanded && isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleAllNavSections(navSections);
      navSectionExpanded.focus();
    } else if (!isDesktop.matches) {
      // eslint-disable-next-line no-use-before-define
      toggleMenu(nav, navSections);
      nav.querySelector('button').focus();
    }
  }
}

function openOnKeydown(e) {
  const focused = document.activeElement;
  const isNavDrop = focused.className === 'nav-drop';
  if (isNavDrop && (e.code === 'Enter' || e.code === 'Space')) {
    const dropExpanded = focused.getAttribute('aria-expanded') === 'true';
    // eslint-disable-next-line no-use-before-define
    toggleAllNavSections(focused.closest('.nav-sections'));
    focused.setAttribute('aria-expanded', dropExpanded ? 'false' : 'true');
  }
}

function focusNavSection() {
  document.activeElement.addEventListener('keydown', openOnKeydown);
}

/**
 * Toggles all nav sections
 * @param {Element} sections The container element
 * @param {Boolean} expanded Whether the element should be expanded or collapsed
 */
function toggleAllNavSections(sections, expanded = false) {
  sections.querySelectorAll('.nav-sections > ul > li').forEach((section) => {
    section.setAttribute('aria-expanded', expanded);
  });
}

/**
 * Toggles the entire nav
 * @param {Element} nav The container element
 * @param {Element} navSections The nav sections within the container element
 * @param {*} forceExpanded Optional param to force nav expand behavior when not null
 */
function toggleMenu(nav, navSections, forceExpanded = null) {
  const expanded = forceExpanded !== null ? !forceExpanded : nav.getAttribute('aria-expanded') === 'true';
  const button = nav.querySelector('.nav-hamburger button');
  document.body.style.overflowY = (expanded || isDesktop.matches) ? '' : 'hidden';
  nav.setAttribute('aria-expanded', expanded ? 'false' : 'true');
  toggleAllNavSections(navSections, expanded || isDesktop.matches ? 'false' : 'true');
  button.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  // enable nav dropdown keyboard accessibility
  const navDrops = navSections.querySelectorAll('.nav-drop');
  if (isDesktop.matches) {
    navDrops.forEach((drop) => {
      if (!drop.hasAttribute('tabindex')) {
        drop.setAttribute('role', 'button');
        drop.setAttribute('tabindex', 0);
        drop.addEventListener('focus', focusNavSection);
      }
    });
  } else {
    navDrops.forEach((drop) => {
      drop.removeAttribute('role');
      drop.removeAttribute('tabindex');
      drop.removeEventListener('focus', focusNavSection);
    });
  }
  // enable menu collapse on escape keypress
  if (!expanded || isDesktop.matches) {
    // collapse menu on escape press
    window.addEventListener('keydown', closeOnEscape);
  } else {
    window.removeEventListener('keydown', closeOnEscape);
  }
}

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // fetch nav content
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const resp = await fetch(`${navPath}.plain.html`);

  if (resp.ok) {
    const html = await resp.text();

    // decorate nav DOM
    const nav = document.createElement('nav');
    nav.id = 'nav';
    nav.innerHTML = html;

    decorateIcons(nav);
    const navWrapper = document.createElement('div');
    navWrapper.className = 'nav-wrapper';
    navWrapper.append(nav);
    block.append(navWrapper);
  }
  //document.querySelector('.header-wrapper > .header.block').style.display = 'none';
document.querySelector('.headernavigation').style.display = 'none';
  document.querySelector('.signinoverlay').style.display = 'none';
  //hatNavigation starts--
  //

  var mainDiv = document.querySelector(".Page-signInOverlay");

  document.querySelector(

    ". Page-signInOverlay> .Page-signInOverlay.block"

  ).style.display = "none";

 

 

  var firstContent = document.querySelector(

    ". Page-signInOverlay> .Page-signInOverlay.block > div > div > .Page-signInOverlay > div > div > ul > li > a"

  ).innerText;

  var firstAnchorContentlink = document.querySelector(

    ".Page-signInOverlay > .Page-signInOverlay.block > div > div > .Page-signInOverlay > div > div > ul > li > a"

  ).attributes[0].value;

 

  mainDiv.style.backgroundColor = "#434343";

  //

  var firstDiv = document.createElement("div");

  firstDiv.setAttribute("class", "Page-signInOverlay");

  mainDiv.appendChild(firstDiv);

  //

  var secondDiv = document.createElement("div");

  secondDiv.setAttribute("class", "Page-signInOverlay-container");

  secondDiv.appendChild(secondDiv);

 

  var a = document.createElement("a");

  a.setAttribute("class", "Page-signInOverlay-close");

  a.setAttribute("href", Page - signInOverlay - close);

  a.innerHTML = firstContent;

 

  var svg = document.createElement("svg");

  svg.setAttribute("href", "close-x");

  svg.appendChild(svg);

  //

  var secondDiv = document.createElement("div");

  secondDiv.setAttribute("class", "Page-signInOverlay-container");

  secondDiv.appendChild(secondDiv);

  //

  var secondDiv = document.createElement("div");

 

  thirdDiv.setAttribute("class", "Page-signInOverlay-header");

 

  thirdDiv.appendChild(thirdDiv);

  //

  var a = document.createElement("a");

  a.setAttribute("href", "Page-signInOverlay-close");

  a.appendChild(a);

  //

  var svg = document.createElement("svg");

  svg.setAttribute("xlink", "close-x");

  svg.appendChild(svg);

 

  var spanclass = document.createElement("spanclass");

  spanclass.setAttribute("xlink", "close-x");

  spanclass.appendChild(spanclass)// Close dialog;

 

  //

  var fourthDiv = document.createElement("fourthDiv");

  ourthDiv.setAttribute("class", "Page-signInOverlay-content");

  fourthDiv.appendChild(fourthDiv);

  //

  var fifthDiv = document.createElement("a");

  fifthDiv.setAttribute("class", "HatNavigation");

  fifthDiv.appendChild(fifthDiv);

 

  var ul = document.createElement("ul");

  ul.setAttribute("class", "HatNavigation-items");

  ul.appendChild(ul);

 

  var li = document.createElement("li");

  li.setAttribute("class", "HatNavigation-items-item");

  li.setAttribute("class", "data-active");

  li.appendChild(li);

 

  var sixDiv = document.createElement("div");

  sixDiv.setAttribute("class", "NavigationLink-wrapper");

  sixDiv.appendChild(sixDiv);

 

  var a = document.createElement("a");

  a.setAttribute("href", "NavigationLink"); //Personal

  a.appendChild(a);

 

  var sevenDiv = document.createElement("div");

  sevenDiv.setAttribute("class", "NavigationLink-more");

  sevenDiv.appendChild(sevenDiv);

 

  var svg = document.createElement("svg");

  svg.setAttribute("href", "chevron");

  svg.appendChild(svg);

 

  var li = document.createElement("li");

  li.setAttribute("class", "HatNavigation-items-item");

  li.appendChild(li);

 

  var eightDiv = document.createElement("div");

  eightDiv.setAttribute("class", "NavigationLink-wrapper");

  eightDiv.appendChild(eightDiv);

 

  var a = document.createElement("a");

  a.setAttribute("href", "NavigationLink"); //Bussiness

  a.appendChild(a);

 

  var nineDiv = document.createElement("div");

  nineDiv.setAttribute("class", "NavigationLink-more");

  nineDiv.appendChild(nineDiv);

 

  var svg = document.createElement("svg");

  svg.setAttribute("href", "chevron");

  svg.appendChild(svg);

 

  var li = document.createElement("li");

  li.setAttribute("class", "HatNavigation-items-item");

  li.appendChild(li);

 

  var tenthDiv = document.createElement("div");

  tenthDiv.setAttribute("class", "NavigationLink-wrapper");

  tenthDiv.appendChild(tenthDiv);

 

  var a = document.createElement("a");

  a.setAttribute("href", "NavigationLink"); //Why Choose Us

  a.appendChild(a);

 

  var eDiv = document.createElement("div");

  eDiv.setAttribute("class", "NavigationLink-more");

  eDiv.appendChild(eDiv);

 

  var svg = document.createElement("svg");

  svg.setAttribute("href", "chevron");

  svg.appendChild(svg);

 

  var eeDiv = document.createElement("div");

  eeDiv.setAttribute("class", "NavigationLink-wrapper");

  eeDiv.appendChild(eeDiv);

 

  var a = document.createElement("a");

  a.setAttribute("href", "NavigationLink");// Infrastructure Partners

  a.appendChild(a);

 

  var nDiv = document.createElement("div");

  nDiv.setAttribute("class", "NavigationLink-more");

  nDiv.appendChild(nDiv);

 

  var svg = document.createElement("svg");

  svg.setAttribute("href", "chevron");

  svg.appendChild(svg);
  //hatNavigation ends ---
}
