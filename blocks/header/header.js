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

  document.querySelector('.header-wrapper > .header.block').style.display = 'none';


}



function signInOverlay(){
  let html = `<div class="Page-signInOverlay">
                <div class="Page-signInOverlay-container">
                    <div class="Page-signInOverlay-header">
                        <a href="#" class="Page-signInOverlay-close">
                            <svg aria-hidden="true">
                                <use xlink:href="#close-x"></use>
                            </svg>
                            <span class="sr-only">Close dialog </span>
                        </a>
                    </div>
                    <div class="Page-signInOverlay-content"></div>
                </div>
              </div>`
return html;
}


function hatNavigation(){
  let html = `<div class="HatNavigation">
                <ul class="HatNavigation-items">
                    <li class="HatNavigation-items-item" data-active="">
                        <div class="NavigationLink-wrapper">
                            <a class="NavigationLink" href="https://one.nz/">Personal</a>
                            <div class="NavigationLink-more" data-no-children="">
                                <svg class="chevron">
                                    <use xlink:href="#chevron"></use>\
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li class="HatNavigation-items-item">
                        <div class="NavigationLink-wrapper">
                            <a class="NavigationLink" href="https://one.nz/business/">Business</a>
                            <div class="NavigationLink-more" data-no-children="">
                                <svg class="chevron">
                                    <use xlink:href="#chevron"></use>\
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li class="HatNavigation-items-item">
                        <div class="NavigationLink-wrapper">
                            <a class="NavigationLink" href="https://one.nz/why-choose-us/">Why Choose Us</a>
                            <div class="NavigationLink-more" data-no-children="">
                                <svg class="chevron">
                                    <use xlink:href="#chevron"></use>\
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li class="HatNavigation-items-item">
                        <div class="NavigationLink-wrapper">
                            <a class="NavigationLink" href="https://one.nz/our-networks/infrastructure-partners/">Infrastructure
                                Partners</a>
                            <div class="NavigationLink-more" data-no-children="">
                                <svg class="chevron">
                                    <use xlink:href="#chevron"></use>\
                                </svg>
                            </div>
                        </div>
                    </li>
                </ul>
              </div>`

  return html;
}



function headerNav(){
  let html = `<ps-header class="Page-header">
                <div class="Page-header-hamburger-menu">
                  <div class="Page-header-hamburger-menu-wrapper">
                    <div class="Page-header-hamburger-menu-content">
                      <nav class="Navigation">
                        <ul class="Navigation-items">
                          <li class="Navigation-items-item">
                            <div class="NavigationItem">
                              <div class="NavigationItem-text">
                                <a class="NavigationItem-text-link" href="https://one.nz/mobile/">Mobile</a>
                                <div class="NavigationItem-more">
                                  <button aria-label="Open Sub Navigation">
                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>
                                    </svg>
                                  </button>
                                </div>
                              </div>
                              <ul class="NavigationItem-items">
                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/mobile-plans/">Plans</a>
                                    <div class="NavigationLink-more">
                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>
                                    </div>
                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/pay-monthly/">Pay
                                          Monthly</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/prepay/">Prepay</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/mobile-plans/add-ons/one-upgrade/">One
                                          Upgrade</a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/mobile-phones/">Phones</a>
                                    <div class="NavigationLink-more">
                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>
                                    </div>
                                    <ul class="NavigationLink-tertiary">
                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/iphone/">iPhone</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/samsung-galaxy/">Samsung</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/oppo/">OPPO</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/smart/">Smart</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/online-shop/mobile/product-listing/">Browse
                                          all
                                          phones
                                        </a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/specials-promos/">Latest
                                      deals</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://tradein.one.nz">Trade-in</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/roaming/">Roaming</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/mobile-broadband/">Mobile
                                      broadband</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/ipad/">iPad</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/samsung-galaxy/tablet/">Galaxy
                                          Tab</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>


                              </ul>
                              <ul class="NavigationItem-items-placeholder">


                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/mobile-plans/">Plans</a>
                                    <div class="NavigationLink-more">
                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>
                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/pay-monthly/">Pay
                                          Monthly</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/prepay/">Prepay</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/mobile-plans/add-ons/one-upgrade/">One
                                          Upgrade</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/mobile-phones/">Phones</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/iphone/">iPhone</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/samsung-galaxy/">Samsung</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/oppo/">OPPO</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/smart/">Smart</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/online-shop/mobile/product-listing/">Browse
                                          all
                                          phones
                                        </a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/specials-promos/">Latest
                                      deals</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://tradein.one.nz">Trade-in</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/roaming/">Roaming</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/mobile-broadband/">Mobile
                                      broadband</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href="https://one.nz/ipad/">iPad</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/samsung-galaxy/tablet/">Galaxy
                                          Tab</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>


                              </ul>

                            </div>
                          </li>

                          <li class="Navigation-items-item">
                            <div class="NavigationItem">
                              <div class="NavigationItem-text">

                                <a class="NavigationItem-text-link" href="https://one.nz/broadband/">Broadband</a>

                                <div class="NavigationItem-more">
                                  <button aria-label="Open Sub Navigation">
                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>
                                    </svg>
                                  </button>
                                </div>
                              </div>


                              <ul class="NavigationItem-items">


                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/broadband/internet-plans/">Broadband
                                      Plans</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/broadband/superwifi/">SuperWifi</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/broadband/wireless-broadband/">Wireless
                                      Broadband</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/broadband/ultra-fast-fibre/">Fibre
                                      Broadband</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="#">About
                                      Broadband</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/broadband/what-can-i-get/">Types
                                          of
                                          Broadband</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/broadband/understand-your-speed/">How
                                          It
                                          Works</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/broadband/rural/">Rural
                                          Broadband</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/broadband/about-your-charges/">About
                                          Your
                                          Charges</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/home-phone/calling-features/">Home
                                          Phone</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>


                              </ul>
                              <ul class="NavigationItem-items-placeholder">


                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/broadband/internet-plans/">Broadband
                                      Plans</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/broadband/superwifi/">SuperWifi</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/broadband/wireless-broadband/">Wireless
                                      Broadband</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/broadband/ultra-fast-fibre/">Fibre
                                      Broadband</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="#">About
                                      Broadband</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/broadband/what-can-i-get/">Types
                                          of
                                          Broadband</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/broadband/understand-your-speed/">How
                                          It
                                          Works</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/broadband/rural/">Rural
                                          Broadband</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/broadband/about-your-charges/">About
                                          Your
                                          Charges</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/home-phone/calling-features/">Home
                                          Phone</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>


                              </ul>

                            </div>
                          </li>

                          <li class="Navigation-items-item">
                            <div class="NavigationItem">
                              <div class="NavigationItem-text">

                                <a class="NavigationItem-text-link"
                                  href="https://one.nz/online-shop/accessories/">Accessories</a>

                                <div class="NavigationItem-more">
                                  <button aria-label="Open Sub Navigation">
                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>
                                    </svg>
                                  </button>
                                </div>
                              </div>


                              <ul class="NavigationItem-items">


                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Wearables">Wearables</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/samsung-galaxy/galaxy-watch/">Galaxy
                                          Watch</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Headphones/Speakers">Headphones
                                      &amp; Audio</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Case">Phone
                                      cases</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Chargers">Chargers
                                      &amp; cables</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>


                              </ul>
                              <ul class="NavigationItem-items-placeholder">


                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Wearables">Wearables</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/samsung-galaxy/galaxy-watch/">Galaxy
                                          Watch</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Headphones/Speakers">Headphones
                                      &amp; Audio</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Case">Phone
                                      cases</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink"
                                      href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Chargers">Chargers
                                      &amp; cables</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>


                              </ul>

                            </div>
                          </li>

                          <li class="Navigation-items-item">
                            <div class="NavigationItem">
                              <div class="NavigationItem-text">

                                <a class="NavigationItem-text-link" href="https://one.nz/5g/">5G</a>

                                <div class="NavigationItem-more" data-no-children="">

                                  <svg class="chevron">
                                    <use xlink:href="#chevron">
                                    </use>
                                  </svg>

                                </div>
                              </div>


                            </div>
                          </li>

                          <li class="Navigation-items-item">
                            <div class="NavigationItem">
                              <div class="NavigationItem-text">

                                <a class="NavigationItem-text-link" href="https://rewards.one.nz"
                                  target="_blank">Rewards</a>

                                <div class="NavigationItem-more" data-no-children="">

                                  <svg class="chevron">
                                    <use xlink:href="#chevron">
                                    </use>
                                  </svg>

                                </div>
                              </div>


                            </div>
                          </li>

                          <li class="Navigation-items-item">
                            <div class="NavigationItem">
                              <div class="NavigationItem-text">

                                <a class="NavigationItem-text-link" href="https://one.nz/help/">Help</a>

                                <div class="NavigationItem-more">
                                  <button aria-label="Open Sub Navigation">
                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>
                                    </svg>
                                  </button>
                                </div>
                              </div>


                              <ul class="NavigationItem-items">


                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/faq/">Help
                                      FAQs</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/help/bill-payment/">Bills
                                      and payments</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/bill-payment/about-fixed-broadband-bill/">Your
                                          broadband
                                          bill</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/bill-payment/about-mobile-bill/">Your
                                          mobile
                                          bill</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/bill-payment/prepay-topup/">How
                                          to Top
                                          Up</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/bill-payment/ways-to-pay/">How
                                          to pay
                                        </a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/help/mobile-phones/">Help
                                      for Mobile</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/mobile-device-settings/">Set
                                          up your
                                          phone</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/mobile/travel-overseas/">Help
                                          with
                                          roaming</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/help/broadband/">Help
                                      for Broadband</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/broadband/modem-support/">Set
                                          up your
                                          modem</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/broadband/wifi-connections/">Help
                                          with
                                          Wi-Fi</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/fibre-broadband/">Help
                                          with
                                          Fibre</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href=""></a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/mobile/apps-services/">Apps
                                      and services</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/my-one-nz/">Help
                                          with My
                                          One
                                          NZ</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/store-locations/">Find
                                          a
                                          store</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/our-networks/">Network
                                          status
                                        </a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>


                              </ul>
                              <ul class="NavigationItem-items-placeholder">


                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/faq/">Help
                                      FAQs</a>
                                    <div class="NavigationLink-more" data-no-children="">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/help/bill-payment/">Bills
                                      and payments</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/bill-payment/about-fixed-broadband-bill/">Your
                                          broadband
                                          bill</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/bill-payment/about-mobile-bill/">Your
                                          mobile
                                          bill</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/bill-payment/prepay-topup/">How
                                          to Top
                                          Up</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/bill-payment/ways-to-pay/">How
                                          to pay
                                        </a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/help/mobile-phones/">Help
                                      for Mobile</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/mobile-device-settings/">Set
                                          up your
                                          phone</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/mobile/travel-overseas/">Help
                                          with
                                          roaming</a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/help/broadband/">Help
                                      for Broadband</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/broadband/modem-support/">Set
                                          up your
                                          modem</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/broadband/wifi-connections/">Help
                                          with
                                          Wi-Fi</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/fibre-broadband/">Help
                                          with
                                          Fibre</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink" href=""></a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>

                                <li class="NavigationItem-items-item">
                                  <div class="NavigationLink-wrapper">
                                    <a class="NavigationLink" href="https://one.nz/mobile/apps-services/">Apps
                                      and services</a>
                                    <div class="NavigationLink-more">

                                      <svg class="chevron">
                                        <use xlink:href="#chevron">
                                        </use>\
                                      </svg>

                                    </div>

                                    <ul class="NavigationLink-tertiary">

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/my-one-nz/">Help
                                          with My
                                          One
                                          NZ</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/help/store-locations/">Find
                                          a
                                          store</a>
                                      </li>

                                      <li class="NavigationLink-tertiary-link">
                                        <a class="TertiaryNavLink"
                                          href="https://one.nz/our-networks/">Network
                                          status
                                        </a>
                                      </li>

                                    </ul>

                                  </div>
                                </li>


                              </ul>

                            </div>
                          </li>

                        </ul>

                      </nav>








                      <div class="NavigationItem" data-style-dark="">
                        <div class="NavigationItem-text">

                          <a class="NavigationItem-text-link" href="https://one.nz/business/">Business</a>

                          <div class="NavigationItem-more" data-no-children="">

                            <svg class="chevron">
                              <use xlink:href="#chevron"></use>
                            </svg>

                          </div>
                        </div>


                      </div>



                      <div class="NavigationItem" data-style-dark="">
                        <div class="NavigationItem-text">

                          <a class="NavigationItem-text-link" href="https://one.nz/why-choose-us/">Why Choose Us</a>

                          <div class="NavigationItem-more" data-no-children="">

                            <svg class="chevron">
                              <use xlink:href="#chevron"></use>
                            </svg>

                          </div>
                        </div>


                      </div>



                      <div class="NavigationItem" data-style-dark="">
                        <div class="NavigationItem-text">

                          <a class="NavigationItem-text-link"
                            href="https://one.nz/our-networks/infrastructure-partners/">Infrastructure
                            Partners</a>

                          <div class="NavigationItem-more" data-no-children="">

                            <svg class="chevron">
                              <use xlink:href="#chevron"></use>
                            </svg>

                          </div>
                        </div>


                      </div>




                    </div>
                  </div>
                </div>




                <div class="Page-header-logo"><a aria-label="home page" href="https://one.nz/">

                    <img class="PageLogo-image"
                      src="https://content.vodafone.co.nz/dims4/default/1dd5dda/2147483647/strip/true/crop/1081x1081+0+0/resize/120x120!/quality/90/?url=http%3A%2F%2Fvodafonenz-brightspot.s3.amazonaws.com%2Fbf%2F1e%2Fb85edbf5411a9bb730a270902c94%2F2ds-one-nz-secondary-symbol-rgb.png"
                      alt="The One NZ logo" width="120" height="120">

                  </a>
                </div>




                <div class="Page-header-bar">
                  <div class="Page-header-bar-navigation">


                    <nav class="DropdownNavigation">


                      <ul class="DropdownNavigation-items">

                        <li class="DropdownNavigation-items-item">
                          <div class="DropdownNavigationItem">
                            <div class="DropdownNavigationItem-text">

                              <a class="DropdownNavigationItem-text-link" href="https://one.nz/mobile/">Mobile</a>


                              <div class="DropdownNavigationItem-more">
                                <button aria-label="Open Sub Navigation"></button>
                              </div>

                            </div>


                            <ul class="DropdownNavigationItem-items">


                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/mobile-plans/">Plans</a>
                                  <div class="NavigationLink-more">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/pay-monthly/">Pay
                                        Monthly</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/prepay/">Prepay</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/mobile-plans/add-ons/one-upgrade/">One
                                        Upgrade</a>
                                    </li>

                                  </ul>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/mobile-phones/">Phones</a>
                                  <div class="NavigationLink-more">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/iphone/">iPhone</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/samsung-galaxy/">Samsung</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/oppo/">OPPO</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/smart/">Smart</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/online-shop/mobile/product-listing/">Browse
                                        all phones </a>
                                    </li>

                                  </ul>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/specials-promos/">Latest
                                    deals</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://tradein.one.nz">Trade-in</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/roaming/">Roaming</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/mobile-broadband/">Mobile
                                    broadband</a>
                                  <div class="NavigationLink-more">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/ipad/">iPad</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/samsung-galaxy/tablet/">Galaxy
                                        Tab</a>
                                    </li>

                                  </ul>

                                </div>
                              </li>


                            </ul>

                          </div>
                        </li>

                        <li class="DropdownNavigation-items-item">
                          <div class="DropdownNavigationItem">
                            <div class="DropdownNavigationItem-text">

                              <a class="DropdownNavigationItem-text-link"
                                href="https://one.nz/broadband/">Broadband</a>


                              <div class="DropdownNavigationItem-more">
                                <button aria-label="Open Sub Navigation"></button>
                              </div>

                            </div>


                            <ul class="DropdownNavigationItem-items">


                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink"
                                    href="https://one.nz/broadband/internet-plans/">Broadband
                                    Plans</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink"
                                    href="https://one.nz/broadband/superwifi/">SuperWifi</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink"
                                    href="https://one.nz/broadband/wireless-broadband/">Wireless
                                    Broadband</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink"
                                    href="https://one.nz/broadband/ultra-fast-fibre/">Fibre
                                    Broadband</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="#">About
                                    Broadband</a>
                                  <div class="NavigationLink-more">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/broadband/what-can-i-get/">Types
                                        of Broadband</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/broadband/understand-your-speed/">How
                                        It Works</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/broadband/rural/">Rural
                                        Broadband</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/broadband/about-your-charges/">About
                                        Your Charges</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/home-phone/calling-features/">Home
                                        Phone</a>
                                    </li>

                                  </ul>

                                </div>
                              </li>


                            </ul>

                          </div>
                        </li>

                        <li class="DropdownNavigation-items-item">
                          <div class="DropdownNavigationItem">
                            <div class="DropdownNavigationItem-text">

                              <a class="DropdownNavigationItem-text-link"
                                href="https://one.nz/online-shop/accessories/">Accessories</a>


                              <div class="DropdownNavigationItem-more">
                                <button aria-label="Open Sub Navigation"></button>
                              </div>

                            </div>


                            <ul class="DropdownNavigationItem-items">


                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink"
                                    href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Wearables">Wearables</a>
                                  <div class="NavigationLink-more">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/samsung-galaxy/galaxy-watch/">Galaxy
                                        Watch</a>
                                    </li>

                                  </ul>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink"
                                    href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Headphones/Speakers">Headphones
                                    &amp; Audio</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink"
                                    href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Case">Phone
                                    cases</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink"
                                    href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Chargers">Chargers
                                    &amp; cables</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>


                            </ul>

                          </div>
                        </li>

                        <li class="DropdownNavigation-items-item">
                          <div class="DropdownNavigationItem">
                            <div class="DropdownNavigationItem-text">

                              <a class="DropdownNavigationItem-text-link" href="https://one.nz/5g/">5G</a>
                            </div>
                          </div>
                        </li>

                        <li class="DropdownNavigation-items-item">
                          <div class="DropdownNavigationItem">
                            <div class="DropdownNavigationItem-text">

                              <a class="DropdownNavigationItem-text-link" href="https://rewards.one.nz"
                                target="_blank">Rewards</a>
                            </div>
                          </div>
                        </li>
                        <li class="DropdownNavigation-items-item">
                          <div class="DropdownNavigationItem">
                            <div class="DropdownNavigationItem-text">
                              <a class="DropdownNavigationItem-text-link" href="https://one.nz/help/">Help</a>
                              <div class="DropdownNavigationItem-more">
                                <button aria-label="Open Sub Navigation"></button>
                              </div>

                            </div>
                            <ul class="DropdownNavigationItem-items">
                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/faq/">Help
                                    FAQs</a>
                                  <div class="NavigationLink-more" data-no-children="">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/help/bill-payment/">Bills
                                    and payments</a>
                                  <div class="NavigationLink-more">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/bill-payment/about-fixed-broadband-bill/">Your
                                        broadband
                                        bill</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/bill-payment/about-mobile-bill/">Your
                                        mobile bill</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/bill-payment/prepay-topup/">How
                                        to Top Up</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/bill-payment/ways-to-pay/">How
                                        to pay </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/help/mobile-phones/">Help
                                    for Mobile</a>
                                  <div class="NavigationLink-more">
                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>

                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/mobile-device-settings/">Set
                                        up your
                                        phone</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/mobile/travel-overseas/">Help
                                        with roaming</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/help/broadband/">Help
                                    for Broadband</a>
                                  <div class="NavigationLink-more">

                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>
                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/broadband/modem-support/">Set
                                        up your
                                        modem</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/broadband/wifi-connections/">Help
                                        with Wi-Fi</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/fibre-broadband/">Help
                                        with Fibre</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href=""></a>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li class="DropdownNavigationItem-items-item">
                                <div class="NavigationLink-wrapper">
                                  <a class="NavigationLink" href="https://one.nz/mobile/apps-services/">Apps
                                    and services</a>
                                  <div class="NavigationLink-more">
                                    <svg class="chevron">
                                      <use xlink:href="#chevron">
                                      </use>\
                                    </svg>

                                  </div>
                                  <ul class="NavigationLink-tertiary">

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/help/my-one-nz/">Help
                                        with My One
                                        NZ</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink"
                                        href="https://one.nz/help/store-locations/">Find
                                        a store</a>
                                    </li>

                                    <li class="NavigationLink-tertiary-link">
                                      <a class="TertiaryNavLink" href="https://one.nz/our-networks/">Network
                                        status </a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="Page-header-end">
                    <div class="Page-header-cartIcon">
                      <a href="/shop/cart/confirm-product/">
                        <span class="sr-only">Mini Basket</span>
                        <span class="Page-header-cartIcon-indicator"></span>
                        <span class="Page-header-cartIcon-icon">
                          <svg aria-hidden="true">
                            <use xlink:href="#icon-shopping-trolley"></use>
                          </svg>
                        </span>
                      </a>
                    </div>
                    <a class="Page-header-search-button"><svg class="icon-magnify">
                        <use xlink:href="#icon-magnify"></use>
                      </svg><span class="sr-only">Show Search</span><svg class="close-x">
                        <use xlink:href="#close-x"></use>
                      </svg></a>
                    <ps-typeahead class="Page-header-search-overlay">
                      <h2 class="Page-header-search-title">Search</h2>
                      <form data-typeahead-form="" class="Page-header-search-form" action="https://one.nz/search#nt=navsearch"
                        novalidate="" autocomplete="off">
                        <label><input data-typeahead-input="" placeholder="How can we help you?" type="text"
                            class="Page-header-search-input" name="q" required="true"><span class="sr-only">Search
                            Query</span></label>
                        <button data-typeahead-clear="" class="Page-header-search-clear"><svg>
                            <use xlink:href="#close-x"></use>
                          </svg><span class="sr-only">Submit Search</span></button>
                        <button data-typeahead-submit="" type="submit" class="Page-header-search-submit"><svg>
                            <use xlink:href="#icon-magnify"></use>
                          </svg><span class="sr-only">Clear Search</span></button>
                      </form>
                      <div data-typeahead-results="" class="Page-header-search-results"></div>
                      <div class="Page-header-search-link"><a data-searchpage-link="" href="https://one.nz/search">view all
                          results for "{queryText}" <svg class="chevron">
                            <use xlink:href="#chevron"></use>
                          </svg></a></div>
                    </ps-typeahead>
                    <div class="Page-header-userIcon">
                      <a href="/ps-sign-in-overlay/" class="Page-header-userIcon-trigger">
                        <span class="sr-only">My One NZ</span>
                        <span class="Page-header-userIcon-loggedInIcon">
                          <svg aria-hidden="true">
                            <use xlink:href="#icon-tick"></use>
                          </svg>
                        </span>
                        <span class="Page-header-userIcon-icon">
                          <svg aria-hidden="true">
                            <use xlink:href="#icon-my-vodafone"></use>
                          </svg>
                        </span>
                        <span class="Page-header-menu-close">
                          <svg aria-hidden="true">
                            <use xlink:href="#close-x"></use>
                          </svg>
                        </span>
                      </a>
                    </div>
                    <!-- Secondary dropdown for logged in My One NZ Users -->
                    <nav class="SecondaryDropdownNavigation">
                      <ul class="SecondaryDropdownNavigation-items">
                        <li class="SecondaryDropdownNavigation-items-item">
                          <div class="SecondaryDropdownNavigationItem">
                            <ul class="SecondaryDropdownNavigationItem-items">
                              <li class="SecondaryDropdownNavigationItem-items-item">
                                <div class="SecondaryNavigationLink-wrapper">
                                  <a class="SecondaryNavigationLink" href="/myvodafone/ng/landing"
                                    target="_self">Account
                                    Summary</a>
                                </div>
                              </li>
                              <li class="SecondaryDropdownNavigationItem-items-item">
                                <div class="SecondaryNavigationLink-wrapper">
                                  <a class="SecondaryNavigationLink userSignout" href="#">Logout</a>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </nav>

                  </div>

                  <button class="Page-header-menu-trigger" aria-expanded="false" tabindex="1"><svg class="burger-menu">
                      <use xlink:href="#burger-menu"></use>
                    </svg><svg class="close-x">
                      <use xlink:href="#close-x"></use>
                    </svg><span class="label">Menu</span></button>
                </div>
              </ps-header>`
              
  return html;
}

