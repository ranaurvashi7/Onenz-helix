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

 

(function () {

    let desc = {}

    let targetELEMENT = document.querySelector(".footer-wrapper")

    targetELEMENT.setAttribute('class','Page-footer')

 

    let newELEMENT = (desc) => {

        return `

        <div class="Page-footer-body">

           

        <div class="Page-footer-navigation">

            <nav class="FooterNavigation">

 

<ul class="FooterNavigation-items">

   

        <li class="FooterNavigation-items-item">

            <ps-toggler data-toggle="footer-item" data-has-items="" class="FooterNavigationItem">

 

<div class="FooterNavigationItem-heading" data-toggle-trigger="footer-item" data-has-items="">

   

        <a class="FooterNavigationItem-text" href="${desc.aboutDataLink }">${desc.aboutData}          

        </a>

   

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

</div>

 

 

 

<ul class="FooterNavigationItem-items" data-toggle-expandable="footer-item">

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" hhref="${desc.corporateResponseLink}">${desc.corporateResponseData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.executiveLink}">${desc.executiveData} </a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.careersLink}">${desc.careersData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.legalDataLink}">${desc.legalData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.foundationLink}">${desc.foundationData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.goodDataLink}">${desc.goodData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

</ul>

 

</ps-toggler>

        </li>

   

        <li class="FooterNavigation-items-item">

            <ps-toggler data-toggle="footer-item" data-has-items="" class="FooterNavigationItem">

 

<div class="FooterNavigationItem-heading" data-toggle-trigger="footer-item" data-has-items="">

   

        <a class="FooterNavigationItem-text" hhref="${desc.buyingOLLink}">${desc.buyingOLData}

           

        </a>

   

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

</div>

 

 

 

<ul class="FooterNavigationItem-items" data-toggle-expandable="footer-item">

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.mobileDataLink}">${desc.mobileData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.browseDataLink}">${desc.browseData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>    

</ul>

 

</ps-toggler>

        </li>

   

        <li class="FooterNavigation-items-item">

            <ps-toggler data-toggle="footer-item" data-has-items="" class="FooterNavigationItem">

 

<div class="FooterNavigationItem-heading" data-toggle-trigger="footer-item" data-has-items="">

   

        <a class="FooterNavigationItem-text" href="${desc.popularDataLink}">${desc.popularData}

           

        </a>

   

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

</div>

 

 

 

<ul class="FooterNavigationItem-items" data-toggle-expandable="footer-item">

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.iphoneproDataLink}">${desc.iphoneproData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.iphonepromaxDataLink}">${desc.iphonepromaxData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

   

</ul>

 

</ps-toggler>

        </li>

   

        <li class="FooterNavigation-items-item">

            <ps-toggler data-toggle="footer-item" data-has-items="" class="FooterNavigationItem">

 

<div class="FooterNavigationItem-heading" data-toggle-trigger="footer-item" data-has-items="">

   

        <a class="FooterNavigationItem-text" ${desc.contactDataLink}/">${desc.contactData}

           

        </a>

   

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

</div>

 

 

 

<ul class="FooterNavigationItem-items" data-toggle-expandable="footer-item">

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.chatLink}">${desc.chatData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.feedbackLink}">${desc.feedbackData}</a>

<div class="NavigationLink-more" data-no-children="">

 

<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

        <li class="FooterNavigationItem-items-item"><div class="NavigationLink-wrapper">

<a class="NavigationLink" href="${desc.storeLink}">${desc.storeData}</a>

<div class="NavigationLink-more" data-no-children="">

 

   <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

 

</div>

 

</div>

</li>

   

</ul>

 

</ps-toggler>

        </li>

   

        <li class="FooterNavigation-items-item">

            <ps-toggler class="FooterNavigationItem">

 

<div class="FooterNavigationItem-heading">

   

        <a class="FooterNavigationItem-text" href="${desc.businessLink}">${desc.businessData}

           

                <svg class="arrow-right"><use xlink:href="#arrow-right"></use></svg>

           

        </a>

   

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

</div>

 

 

 

</ps-toggler>

        </li>

   

        <li class="FooterNavigation-items-item">

            <ps-toggler class="FooterNavigationItem">

 

<div class="FooterNavigationItem-heading">

   

        <a class="FooterNavigationItem-text" href="${desc.chooseDataLink}">${desc.chooseData}

           

                <svg class="arrow-right"><use xlink:href="#arrow-right"></use></svg>

           

        </a>

   

        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

</div>

 

 

 

</ps-toggler>

        </li>

   

</ul>

 

</nav>

        </div>            

 

            <div class="Page-footer-floor">

               

                    <div class="Page-footer-floorLinks">

                       

                            <div class="Page-footer-floorLinks-link">

                                <div class="NavigationLink-wrapper">

    <a class="NavigationLink" href="${desc.termsLink}">${desc.termsData}</a>

    <div class="NavigationLink-more" data-no-children="">

       

    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

       

    </div>

   

</div>

 

                            </div>

                       

                            <div class="Page-footer-floorLinks-link">

                                <div class="NavigationLink-wrapper">

    <a class="NavigationLink" href="${desc.privacyLink}">${desc.privacyData}</a>

    <div class="NavigationLink-more" data-no-children="">

       

    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

       

    </div>

   

</div>

 

                            </div>

                       

                            <div class="Page-footer-floorLinks-link">

                                <div class="NavigationLink-wrapper">

    <a class="NavigationLink" href="${desc.sitemapLink}">${desc.sitemapData}</a>

    <div class="NavigationLink-more" data-no-children="">

       

    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" class="bi bi-chevron-right" viewBox="0 0 16 16" style="margin-top: -2px;height: 22px;width: 24px;color: transparent;stroke: var(--headerTextColor);stroke-width: 0.1px !important;color: black;>  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path></svg>

       

    </div>

   

</div>

 

                            </div>

                       

                    </div>

               

               

                    <div class="Page-footer-disclaimer">${desc.cpyrightData}</div>

               

            </div>

        </div>

                `

    }

 

    //footer actual data fetching

//document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li')

    desc.aboutDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[0].attributes[0].value;

    desc.aboutData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[0].innerText;

 

    desc.corporateResponseLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[1].attributes[0].value;

    desc.corporateResponseData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[1].innerText;

 

    desc.executiveLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[2].attributes[0].value;

    desc.executiveData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[2].innerText;

 

    desc.careersLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[3].attributes[0].value;

    desc.careersData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[3].innerText;

 

    desc.legalDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[4].attributes[0].value;

    desc.legalData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[4].innerText;

 

    desc.foundationLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[5].attributes[0].value;

    desc.foundationData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[5].innerText;

 

    desc.goodDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[6].attributes[0].value;

    desc.goodData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[6].innerText;

 

    desc.buyingOLLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[7].attributes[0].value;

    desc.buyingOLData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[7].innerText;

 

    desc.mobileDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[8].attributes[0].value;

    desc.mobileData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[8].innerText;

 

    desc.browseDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[9].attributes[0].value;

    desc.browseData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[9].innerText;

 

    desc.popularDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[10].attributes[0].value;

    desc.popularData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[10].innerText;

 

    desc.iphoneproDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[11].attributes[0].value;

    desc.iphoneproData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[11].innerText;

 

    desc.iphonepromaxDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[12].attributes[0].value;

    desc.iphonepromaxData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[12].innerText;

 

    desc.contactDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[13].attributes[0].value;

    desc.contactData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[13].innerText;

 

    desc.chatLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[14].attributes[0].value;

    desc.chatData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[14].innerText;

 

    desc.feedbackLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[15].attributes[0].value;

    desc.feedbackData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[15].innerText;

 

    desc.storeLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[16].attributes[0].value;

    desc.storeData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[16].innerText;

 

    desc.businessLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[17].attributes[0].value;

    desc.businessData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[17].innerText;

   

    desc.chooseDataLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[18].attributes[0].value;

    desc.chooseData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer > div > div > ul > li > a')[18].innerText;

 

    //footer-floor data fetching

   desc.termsLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer-bottom > div > div > ul > li > a')[0].attributes[0].value;

   desc.termsData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer-bottom > div > div > ul > li > a')[0].innerText;

 

   desc.privacyLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer-bottom > div > div > ul > li > a')[1].attributes[0].value;

   desc.privacyData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer-bottom > div > div > ul > li > a')[1].innerText;

 

   desc.sitemapLink = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer-bottom > div > div > ul > li > a')[2].attributes[0].value;

   desc.sitemapData =  document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer-bottom > div > div > ul > li > a')[2].innerText;

   

   desc.cpyrightData = document.querySelectorAll('.Page-footer > .footer.block > div > div > .footer-bottom > div > div > ul > li')[3].innerText;

   

   targetELEMENT.innerHTML=newELEMENT(desc)

})();

 

}
