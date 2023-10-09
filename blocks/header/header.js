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
  (function () {

    let desc = {}

     let targetELEMENT = document.querySelector('.header-wrapper');  
  
      let newELEMENT = (desc) => {
  
   
  
          return `
  
  <ps-header class ="Page-header">
  
          <div class="Page-header-hamburger-menu">
  
   
  
          <div class="Page-header-hamburger-menu-wrapper">
  
  <div class="Page-header-hamburger-menu-content">
  
              <nav class="Navigation">
  
   
  
  <ul class="Navigation-items">
  
   
  
          <li class="Navigation-items-item">
  
  <div class="NavigationItem"></div>
  
         <a class="NavigationItem-text-link"  href="https://one.nz/mobile/"/a> ${desc.mobile}>    
  
          </a>
  
   
  
  </div>
  
   
  
  <div class="NavigationLink-more">
  
      <button arial-label="Open Sun Navigation"
  
   
  
      <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
   
  
  </div>
  
   
  
  </div>
  
   
  
  </li>
  
   
  
    <ul class="NavigationItem-items">
  
             
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/mobile-plans/">${desc.plans}</a>
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/pay-monthly/">${desc.PayMonthly}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/prepay/">${desc.Prepay}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/mobile-plans/add-ons/one-upgrade/">${desc.OneUpgrade}</a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/mobile-phones/">${desc.Phones}</a>
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/iphone/">${desc.iPhone}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/samsung-galaxy/">${desc.Samsunggalaxy}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/oppo/">${desc.oppo}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/smart/">${desc.Smart}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/online-shop/mobile/product-listing/">${desc.productlisting} </a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/specials-promos/">${desc.latestDeals}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://tradein.one.nz">>${desc.tradein}</a
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/roaming/">${desc.roaming}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/mobile-broadband/">${desc.mobileBroadband}</a>
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/ipad/">${desc.ipad}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/samsung-galaxy/tablet/">${desc.samsunggalaxy}</a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
             
  
          </ul>
  
          <ul class="NavigationItem-items-placeholder">
  
             
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/mobile-plans/">${desc.mobilePlans}</a>
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/pay-monthly/">${desc.payMonthly}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/prepay/">${desc.prepay}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/mobile-plans/add-ons/one-upgrade/">${desc.oneUpgrade}</a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/mobile-phones/">${phones}</a>
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/iphone/">${desc.iphone}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/samsung-galaxy/">${desc.samsung}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/oppo/">${desc.oppo}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/smart/">${desc.smart}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/online-shop/mobile/product-listing/">${desc.productListing} </a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/specials-promos/">${desc.latestDeal}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://tradein.one.nz">${desc.tradein}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/roaming/">${desc.roaming}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/mobile-broadband/">${desc.mobilebroadband}</a>
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/ipad/">${desc.ipad}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/samsung-galaxy/tablet/">${desc.galaxytab}</a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
             
  
          </ul>
  
     
  
  </div></li>
  
             
  
                  <li class="Navigation-items-item" ><div class="NavigationItem"  >
  
      <div class="NavigationItem-text">
  
         
  
              <a class="NavigationItem-text-link" href="https://one.nz/broadband/">${desc.broadband}</a>
  
         
  
          <div class="NavigationItem-more" >
  
              <button aria-label="Open Sub Navigation">
  
                  <svg class="chevron"><use xlink:href="#chevron"></use></svg>
  
              </button>
  
          </div>
  
      </div>
  
   
  
     
  
          <ul class="NavigationItem-items">
  
             
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/broadband/internet-plans/">${desc.broadbandplans}
  
      <div class="NavigationLink-more" data-no-children></a>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
  <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/broadband/superwifi/">${desc.superwifi}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/broadband/wireless-broadband/">${desc.wirelessbroadband}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/broadband/ultra-fast-fibre/">${desc.fibreBroadband}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="#">About Broadband</a>${desc.aboutBroadband}
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/broadband/what-can-i-get/">${desc.broadbandTypes}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/broadband/understand-your-speed/">${desc.howItWorks}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/broadband/rural/">${desc.ruralBroadband}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/broadband/about-your-charges/">${desc.aboutYourCharges}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/home-phone/calling-features/">${desc.homePhone}</a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
             
  
          </ul>
  
          <ul class="NavigationItem-items-placeholder">
  
             
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/broadband/internet-plans/">${desc.BroadbandPlans}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/broadband/superwifi/">${desc.superwifi}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/broadband/wireless-broadband/">${desc.wirelessBroadband}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/broadband/ultra-fast-fibre/">${desc.fibreBroadband}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="#">${desc.aboutBroadband}</a>
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/broadband/what-can-i-get/">${desc.Broadbandtypes}</a>
  
  </li></a>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/broadband/understand-your-speed/">${desc.HowItWorks}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/broadband/rural/">${desc.ruralBroadband}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/broadband/about-your-charges/">${desc.aboutYourCharges}</a>
  
  </li>
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/home-phone/calling-features/">${desc.HomePhone}</a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
             
  
          </ul>
  
     
  
  </div></li>
  
             
  
                  <li class="Navigation-items-item" ><div class="NavigationItem"  >
  
      <div class="NavigationItem-text">
  
         
  
              <a class="NavigationItem-text-link" href="https://one.nz/online-shop/accessories/">${desc.accessories}</a>
  
         
  
          <div class="NavigationItem-more" >
  
              <button aria-label="Open Sub Navigation">
  
                  <svg class="chevron"><use xlink:href="#chevron"></use></svg>
  
              </button>
  
          </div>
  
      </div>
  
   
  
     
  
          <ul class="NavigationItem-items">
  
             
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Wearables">Wearables</a>${desc.wearables}
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/samsung-galaxy/galaxy-watch/">${desc.galaxywatch}</a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Headphones/Speakers">Headphones &amp; Audio</a>${desc.speakers}
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Case">${desc.phonecases}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item" ><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Chargers">Chargers &amp; cables</a>${desc.chargersAndcables}
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
             
  
          </ul>
  
          <ul class="NavigationItem-items-placeholder">
  
             
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Wearables">${desc.wearables}</a>
  
      <div class="NavigationLink-more" >
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
        <ul class="NavigationLink-tertiary">
  
         
  
            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/samsung-galaxy/galaxy-watch/">${desc.galaxyWatch}</a>
  
  </li>
  
         
  
        </ul>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Headphones/Speakers">Headphones &amp; Audio</a>${desc.speakers}
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Case">${desc.phonecases}</a>
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
                      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">
  
      <a class="NavigationLink" href="https://one.nz/online-shop/accessory/product-listing/?_bc_fsnf=1&amp;sort=featured&amp;Type=Chargers">Chargers &amp; cables</a>${desc.chargersAndcables}
  
      <div class="NavigationLink-more" data-no-children>
  
         
  
              <svg class="chevron"><use xlink:href="#chevron"></use>\</svg>
  
         
  
      </div>
  
     
  
  </div>
  
  </li>
  
                 
  
             
  
          </ul>
  
     
  
  </div></li>
  
             
  
                  <li class="Navigation-items-item" ><div class="NavigationItem"  >
  
      <div class="NavigationItem-text">
  
         
  
              <a class="NavigationItem-text-link" href="https://one.nz/5g/">${desc.5g}</a>
  
         
  
          <div class="NavigationItem-more" data-no-children>
  
             
  
                  <svg class="chevron"><use xlink:href="#chevron"></use></svg>
  
             
  
          </div>
  
      </div>
  
   
  
     
  
  </div></li>
  
             
  
                  <><li class="Navigation-items-item"><div class="NavigationItem">

      <div class="NavigationItem-text">



        <a class="NavigationItem-text-link" href="https://rewards.one.nz" target="_blank">${desc.rewards}

        </a>

        <div class="NavigationItem-more" data-no-children>



          <svg class="chevron"><use xlink: href="#chevron"></use></svg>



        </div>

      </div>





    </div></li><li class="Navigation-items-item"><div class="NavigationItem">

      <div class="NavigationItem-text">



        <a class="NavigationItem-text-link" href="https://one.nz/help/">${desc.help}</a>



        <div class="NavigationItem-more">

          <button aria-label="Open Sub Navigation">

            <svg class="chevron"><use xlink: href="#chevron"></use></svg>

          </button>

        </div>

      </div>





      <ul class="NavigationItem-items">





        <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

          <a class="NavigationLink" href="https://one.nz/faq/">${desc.helpFaq}</a>

          <div class="NavigationLink-more" data-no-children>



            <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



          </div>



        </div>

        </li>



        <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

          <a class="NavigationLink" href="https://one.nz/help/bill-payment/">${desc.billsandpayment}</a>

          <div class="NavigationLink-more">



            <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



          </div>



          <ul class="NavigationLink-tertiary">



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/bill-payment/about-fixed-broadband-bill/">>${desc.BroadbandBills}</a>

            </li>



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/bill-payment/about-mobile-bill/">${desc.mobileBill}</a>

            </li>



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/bill-payment/prepay-topup/">${desc.topUp}</a>

            </li>



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/bill-payment/ways-to-pay/">${desc.HowToPay} </a>

            </li>



          </ul>



        </div>

        </li>



        <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

          <a class="NavigationLink" href="https://one.nz/help/mobile-phones/">${desc.helpForMobile}</a>

          <div class="NavigationLink-more">



            <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



          </div>



          <ul class="NavigationLink-tertiary">



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/mobile-device-settings/">${desc.Set} up your phone}</a>

            </li>



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/mobile/travel-overseas/">${.Help} with roaming}</a>

            </li>



          </ul>



        </div>

        </li>



        <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

          <a class="NavigationLink" href="https://one.nz/help/broadband/">${desc.broadbandHelp}</a>

          <div class="NavigationLink-more">



            <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



          </div>



          <ul class="NavigationLink-tertiary">



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/broadband/modem-support/">>${desc.setYourModem}</a>

            </li>



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/broadband/wifi-connections/">${desc.WI - FIhelp}</a>

            </li>



            <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/fibre-broadband/">${desc.FibreHelp}

            </></li></a>



          <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href=""></a>

          </li>



        </ul>



        </div>

      </li>



      <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

        <a class="NavigationLink" href="https://one.nz/mobile/apps-services/">${desc.AppsAndServices}</a>

        <div class="NavigationLink-more">



          <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



        </div>



        <ul class="NavigationLink-tertiary">



          <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/my-one-nz/">${desc.OneNZhep}</a>

          </li>



          <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/store-locations/">${desc.findStore}</a>

          </li>



          <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/our-networks/">${desc.networkStatus} </a>

          </li>



        </ul>



      </div>

      </li>





    </ul>

        <ul class="NavigationItem-items-placeholder">





          <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

            <a class="NavigationLink" href="https://one.nz/faq/">${desc.HelpFAQ}</a>

            <div class="NavigationLink-more" data-no-children>



              <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



            </div>



          </div>

          </li>



          <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

            <a class="NavigationLink" href="https://one.nz/help/bill-payment/">${desc.BillPayment}</a>

            <div class="NavigationLink-more">



              <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



            </div>



            <ul class="NavigationLink-tertiary">



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/bill-payment/about-fixed-broadband-bill/">Your broadband bill</a>

              </li>



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/bill-payment/about-mobile-bill/">Your mobile bill</a>

              </li>



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/bill-payment/prepay-topup/">How to Top Up</a>

              </li>



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/bill-payment/ways-to-pay/">How to pay </a>

              </li>



            </ul>



          </div>

          </li>



          <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

            <a class="NavigationLink" href="https://one.nz/help/mobile-phones/">${desc.mobileHelp}</a>

            <div class="NavigationLink-more">



              <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



            </div>



            <ul class="NavigationLink-tertiary">



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/mobile-device-settings/">${desc.Set} up your phone}</a>

              </li>



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/mobile/travel-overseas/">${desc.Help} with roaming}</a>

              </li>



            </ul>



          </div>

          </li>



          <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

            <a class="NavigationLink" href="https://one.nz/help/broadband/">${desc.HelpforBroadband}</a>

            <div class="NavigationLink-more">



              <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



            </div>



            <ul class="NavigationLink-tertiary">



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/broadband/modem-support/">${desc.Setupyourmodem}</a>

              </li>



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/broadband/wifi-connections/">${desc.HelpwithWi - Fi}</a>

              </li>



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/fibre-broadband/">${desc.HelpwithFibre}</a>

              </li>



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href=""></a>

              </li>



            </ul>



          </div>

          </li>



          <li class="NavigationItem-items-item"><div class="NavigationLink-wrapper">

            <a class="NavigationLink" href="https://one.nz/mobile/apps-services/">${desc.appandservices}</a>

            <div class="NavigationLink-more">



              <svg class="chevron"><use xlink: href="#chevron"></use>\</svg>



            </div>



            <ul class="NavigationLink-tertiary">



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/my-one-nz/">${desc.OneNZhelp}</a>



              </li>

              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/help/store-locations/">${desc.FindStore}</a>

              </li>



              <li class="NavigationLink-tertiary-link"><a class="TertiaryNavLink" href="https://one.nz/our-networks/">${desc.NetworkStatus} </a>

              </li>



            </ul>



          </div>

          </li>





        </ul>



      </div></></li>
  
             
  
          </ul>
  
     
  
  </nav>  
  
   
  
           
  
              </div>
  
   
  
              <><div class="Page-header-end">

                  <div class="Page-header-cartIcon">

                    <a href="/shop/cart/confirm-product/">

                      <span class="sr-only">Mini Basket</span>

                      <span class="Page-header-cartIcon-indicator"></span>

                      <span class="Page-header-cartIcon-icon">

                        <svg aria-hidden="true">

                          <use xlink: href="#icon-shopping-trolley"></use>

                        </svg>

                      </span>

                    </a>

                  </div>



                  <a class="Page-header-search-button"><svg class="icon-magnify"><use xlink: href="#icon-magnify"></use></svg><span class="sr-only">Show Search</span><svg class="close-x"><use xlink: href="#close-x"></use></svg></a>

                  <ps-typeahead class="Page-header-search-overlay">

                    <h2 class="Page-header-search-title">Search</h2>

                    <form data-typeahead-form class="Page-header-search-form" action="https://one.nz/search#nt=navsearch" novalidate="" autocomplete="off">

                      <label><input data-typeahead-input placeholder="How can we help you?" type="text" class="Page-header-search-input" name="q" required="true"><span class="sr-only">Search Query</span></></label>

                      <button data-typeahead-clear class="Page-header-search-clear"><svg><use xlink: href="#close-x"></use></svg><span class="sr-only">Submit Search</span></button>

                      <button data-typeahead-submit type="submit" class="Page-header-search-submit"><svg><use xlink: href="#icon-magnify"></use></svg><span class="sr-only">Clear Search</span></button>

                    </form>

                    <div data-typeahead-results class="Page-header-search-results"></div>

                    <div class="Page-header-search-link"><a data-searchpage-link href="https://one.nz/search">view all results for &quot;{queryText}&quot; <svg class="chevron"><use xlink: href="#chevron"></use></svg></a></div>

                  </ps-typeahead>









                  <div class="Page-header-userIcon">

                    <a href="/ps-sign-in-overlay/" class="Page-header-userIcon-trigger">

                      <span class="sr-only">My One NZ</span>

                      <span class="Page-header-userIcon-loggedInIcon">

                        <svg aria-hidden="true">

                          <use xlink: href="#icon-tick"></use>

                        </svg>

                      </span>

                      <span class="Page-header-userIcon-icon">

                        <svg aria-hidden="true">

                          <use xlink: href="#icon-my-vodafone"></use>

                        </svg>

                      </span>

                      <span class="Page-header-menu-close">

                        <svg aria-hidden="true">

                          <use xlink: href="#close-x"></use>

                        </svg>

                      </span>

                    </a>

                  </div>



                  < />!-- Secondary dropdown for logged in My One NZ Users -->

                  <nav class="SecondaryDropdownNavigation">

                    <ul class="SecondaryDropdownNavigation-items">

                      <li class="SecondaryDropdownNavigation-items-item">

                        <div class="SecondaryDropdownNavigationItem">

                          <ul class="SecondaryDropdownNavigationItem-items">

                            <li class="SecondaryDropdownNavigationItem-items-item">

                              <div class="SecondaryNavigationLink-wrapper">

                                <a class="SecondaryNavigationLink" href="/myvodafone/ng/landing" target="_self">Account Summary</a>

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



                </div><button class="Page-header-menu-trigger" aria-expanded="false" tabindex="1"><svg class="burger-menu"><use xlink: href="#burger-menu"></use></svg><svg class="close-x"><use xlink: href="#close-x"></use></svg><span class="label">Menu</span></button></>
  
          </div>
  
      </ps-header>
  
   
  `
      }
   
  
   
  
         
  
      //nav actual data fetching
  
   
  
  //document.querySelectorAll('.header-wrapper >  .header.block > .nav-wrapper > #nav > div > .headernavigation > div > div > ul > li > a')[0].attributes[0].value
  
  document.querySelectorAll('.header-wrapper >  .header.block > .nav-wrapper > #nav > div > .headernavigation > div > div > ul > li > a')[0].innerText
  
   
  
     
  
  desc.Mobile = document.querySelectorAll('.Page-header > .header.block > nav > div > button > svg > ul > li > div> a')[0].attributes[0].value .innertext;
  
   
  
      desc.plans = document.querySelectorAll('.Page-header> .header.block > ul > li > a > div > svg')[1].innerText;
  
   
  
   desc.paymonthly = document.querySelectorAll('.Page-header> .header.block > ul > li > a > div > li > a >li>a')[3].innerText;
  
   
  
   
  
      desc.Phones = document.querySelectorAll('.Page-header > .headerr.block >li > div > a > div > svg ')[0].attributes[0].value .innerText[1];
  
   
  
      desc.latestDeals = document.querySelectorAll('.Page-header> .header.block > div > a > div > div > svg')[1].innerText;
  
   
  
   
  
   
  
      desc.tadeIn = document.querySelectorAll('.Page-header > .header.block > li > div > a  > li > div > svg')[0].attributes[0].value;
  
   
  
      desc.roaming = document.querySelectorAll('.Page-header > .header.block > li > div > a > div > svg')[2].innerText;
  
   
  
   
  
   
  
      desc.mobileBroadband = document.querySelectorAll('.Page-header > .header.block >  li > div > a > div > svg)[3].attributes[0].value;
  
   
  
      desc.broadband = document.querySelectorAll('.Page-header > .header.block > li > div > div > a > div > ul > li > a')[5].innerText;
  
   
  
   
  
   
  
      desc.broadbandPlans = document.querySelectorAll('.Page-header > .header.block > div > div >  div > div > ul > li > a')[4].attributes[0].value;
  
   
  
      desc.superWi-FI = document.querySelectorAll('.Page-header > .header.block > div > div >  div > div > ul > li > a')[4].innerText;
  
   
  
   
  
   
  
      desc.wirelessBroadband = document.querySelectorAll('.Page-header > .header.block > div > div > > div > div > ul > li > a')[5].attributes[0].value;
  
   
  
      desc.fibreBroadband = document.querySelectorAll('.Page-header > .header.block > div > div >> div > div > ul > li > a')[5].innerText;
  
   
  
   
  
   
  
      desc.aboutBroadband = document.querySelectorAll('.Page-header > .header.block > div > div >  > div > div > ul > li > a')[5].attributes[0].value;
  
   
  
      desc.accessories = document.querySelectorAll('.Page-header > .header.block > div > div >  div > div > ul > li > a')[6].innerText;
  
   
  
   
  
   
  
      desc.wearables = document.querySelectorAll('.Page-header> .header.block > div > div > div > div > ul > li > a')[7].attributes[0].value;
  
   
  
      desc.HeadphonesAndAudio = document.querySelectorAll('.Page-header > .header.block > div > div >  div > div > ul > li > a')[7].innerText;
  
   
  
   
  
   
  
      desc.phoneCases = document.querySelectorAll('.Page-header> .header.block > div > div >  div > div > ul > li > a')[8].attributes[0].value;
  
   
  
      desc.chargersAncables = document.querySelectorAll('.Page-header > .headerblock > div > div >div > div > ul > li > a')[8].innerText;
  
   
  
   
  
   
  
      desc.5g = document.querySelectorAll('.Page-footer > .Page-header > div > div >  div > div > ul > li > a')[9].attributes[0].value;
  
   
  
      desc.rewards = document.querySelectorAll('.Page-header > .header.block > div > div >  div > div > ul > li > a')[9].innerText;
  
   
  
   
  
   
  
      desc.help = document.querySelectorAll('.Page-header > .header.block > div > div >  div > div > ul > li > a')[10].attributes[0].value;
  
   
  
      desc.helpFAQ = document.querySelectorAll('.Page-header > .header.block > div > div > div > div > ul > li > a')[10].innerText;
  
   
  
   
  
   
  
      desc.billPayment = document.querySelectorAll('.Page-header > .header.block > div > div > div > div > ul > li > a')[11].attributes[0].value;
  
   
  
     desc.mobileHelp = document.querySelectorAll('.Page-header> .header.block > div > div >  div > div > ul > li > a')[11].innerText;
  
   
  
   
  
   
  
      desc.broadbandHelp = document.querySelectorAll('.Page-header > .header.block > div > div >  div > div > ul > li > a')[10].attributes[0].value;
  
   
  
      desc.appAndServices = document.querySelectorAll('.Page-header > .header.block > div > div > div > div > ul > li > a')[10].innerText;

   targetELEMENT.innerHTML=newELEMENT(desc)
  })()




//document.querySelector('.headernavigation').style.display = 'none';
  //document.querySelector('.signinoverlay').style.display = 'none';
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
