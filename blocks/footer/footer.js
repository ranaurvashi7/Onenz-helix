import { readBlockConfig, decorateIcons } from "../../scripts/aem.js";


let footerBody = (desc) => {
	let HTMLFooterHeading = ''
	desc.forEach((element,index)=>{
		let htmlHeadingBuild = ''
		let htmlLlBuild = ''
		element.forEach((e,i)=>{
			if(i==0){
				if(index==4 || index==5){
					htmlHeadingBuild+=`<div class="FooterNavigationItem-heading" data-viewport-large="">
											<a class="FooterNavigationItem-text" href="${e.href}">${e.text}
												<svg class="arrow-right"><use xlink:href="#arrow-right"></use></svg>
											</a>
										</div>`
				}else{
					htmlHeadingBuild+=`<div class="FooterNavigationItem-heading" data-toggle-trigger="footer-item" data-has-items="">
									<a class="FooterNavigationItem-text" href="${e.href}">${e.text}
									</a>
									<svg class="chevron">
										<use xlink:href="#chevron"></use>
									</svg>
								</div>
								<div class="FooterNavigationItem-heading" data-viewport-large="">
									<a class="FooterNavigationItem-text" href="${e.href}">${e.text}
									</a>
								</div>`
				}
			}else{
				htmlLlBuild+=`<li class="FooterNavigationItem-items-item">
								<div class="NavigationLink-wrapper">
									<a class="NavigationLink"
										href="${e.href}">${e.text}</a>
									<div class="NavigationLink-more" data-no-children="">
										<svg class="chevron">
											<use xlink:href="#chevron">
											</use>\
										</svg>
									</div>
								</div>
							</li>`
			}
		})
		htmlHeadingBuild+=`<ul class="FooterNavigationItem-items" data-toggle-expandable="footer-item">
								${htmlLlBuild}
							</ul>`
		HTMLFooterHeading+=`<li class="FooterNavigation-items-item">
								<ps-toggler data-toggle="footer-item" data-has-items="" class="FooterNavigationItem">
									${htmlHeadingBuild}
								</ps-toggler>
							</li>`
	})
	return `<div class="Page-footer-navigation">
				<nav class="FooterNavigation">
					<ul class="FooterNavigation-items">
						
						${HTMLFooterHeading}
						
					</ul>
				</nav>
			</div>`
}

let footerFloor = (desc) => {
	let HTMLFooterLeft = ''
	desc[0].forEach(element => {
		HTMLFooterLeft+=`<div class="Page-footer-floorLinks-link">
						<div class="NavigationLink-wrapper">
							<a class="NavigationLink" href="${element.href}">${element.text}</a>
							<div class="NavigationLink-more" data-no-children="">
								<svg class="chevron">
									<use xlink:href="#chevron"></use>\
								</svg>
							</div>
						</div>
					</div>`
	});
	let HTMLFooterRight = ''
	desc[1].forEach(element => {
		HTMLFooterRight+=`<div class="Page-footer-disclaimer">${element.text}</div>`
	})
	return `<div class="Page-footer-floor">
				<div class="Page-footer-floorLinks">
				${HTMLFooterLeft}
				</div>
				${HTMLFooterRight}
			</div>`
}


/**


 * loads and decorates the footer

 * @param {Element} block The footer block element

 */

export default async function decorate(block) {
  const cfg = readBlockConfig(block);
  block.textContent = "";
  // fetch footer content
  const footerPath = cfg.footer || "/footer";
  const resp = await fetch(
    `${footerPath}.plain.html`,
    window.location.pathname.endsWith("/footer") ? { cache: "reload" } : {}
  );
  if (resp.ok) {
    const html = await resp.text();
    // decorate footer DOM
    const footer = document.createElement("div");
    footer.innerHTML = html;

	const footerHTML = document.querySelector(".footer-wrapper")
	footerHTML.classList.add("Page-footer")

	let div1 = document.createElement("div")
	div1.classList.add("Page-footer-body")

	let navListData = []
	let navList = footer.querySelectorAll(".footer > div")
	for(let i=0;i<navList.length;i++){
		if(navList[i]==undefined || navList[i]==null){
			continue;
		}else{
			let verList = []
			let liTags = navList[i].querySelectorAll("ul>li")
			for(let j=0;j<liTags.length;j++){
				if(liTags[j]==undefined || liTags[j]==null){
					continue;
				}else{
					let dObj = {}
					let aTag = liTags[j].querySelector("a")
					if(aTag == undefined){
						dObj = {href:null,text:liTags[j].innerText}
					}else{
						dObj = {href:aTag.getAttribute("href"),text:aTag.innerText}
					}
					verList.push(dObj)
				}
			}
			navListData.push(verList)
		}
	}
	// console.log(navListData)

	let navFloorData = []
	let navFloorList = footer.querySelectorAll(".footer-bottom > div")
	for(let i=0;i<navFloorList.length;i++){
		if(navFloorList[i]==undefined || navFloorList[i]==null){
			continue;
		}else{
			let verList = []
			let liTags = navFloorList[i].querySelectorAll("ul>li")
			for(let j=0;j<liTags.length;j++){
				if(liTags[j]==undefined || liTags[j]==null){
					continue;
				}else{
					let dObj= {}
					let aTag = liTags[j].querySelector("a")
					if(aTag == undefined){
						dObj = {href:null,text:liTags[j].innerText}
					}else{
						dObj = {href:aTag.getAttribute("href"),text:aTag.innerText}
					}
					verList.push(dObj)
				}
			}
			navFloorData.push(verList)
		}
	}

	div1.innerHTML = footerBody(navListData)
	div1.innerHTML += footerFloor(navFloorData)

	footerHTML.appendChild(div1)
    decorateIcons(footer);
    block.append(footer);
  }
  document.querySelector('.footer-wrapper > .footer.block').style.display = 'none';
}
