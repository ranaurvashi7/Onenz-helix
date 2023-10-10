import { getMetadata, decorateIcons } from "../../scripts/aem.js";
let svghtml = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" id="iconsMap">
                    <symbol id="chevron-down-regular" viewBox="0 0 448 512">
                    <path
                        d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z">
                    </path>
                    </symbol>
                    <symbol id="mono-icon-facebook" viewBox="0 0 10 19">
                    <path fill-rule="evenodd"
                        d="M2.707 18.25V10.2H0V7h2.707V4.469c0-1.336.375-2.373 1.125-3.112C4.582.62 5.578.25 6.82.25c1.008 0 1.828.047 2.461.14v2.848H7.594c-.633 0-1.067.14-1.301.422-.188.235-.281.61-.281 1.125V7H9l-.422 3.2H6.012v8.05H2.707z">
                    </path>
                    </symbol>
                    <symbol id="mono-icon-instagram" viewBox="0 0 17 17">
                    <g>
                        <path fill-rule="evenodd"
                            d="M8.281 4.207c.727 0 1.4.182 2.022.545a4.055 4.055 0 0 1 1.476 1.477c.364.62.545 1.294.545 2.021 0 .727-.181 1.4-.545 2.021a4.055 4.055 0 0 1-1.476 1.477 3.934 3.934 0 0 1-2.022.545c-.726 0-1.4-.182-2.021-.545a4.055 4.055 0 0 1-1.477-1.477 3.934 3.934 0 0 1-.545-2.021c0-.727.182-1.4.545-2.021A4.055 4.055 0 0 1 6.26 4.752a3.934 3.934 0 0 1 2.021-.545zm0 6.68a2.54 2.54 0 0 0 1.864-.774 2.54 2.54 0 0 0 .773-1.863 2.54 2.54 0 0 0-.773-1.863 2.54 2.54 0 0 0-1.864-.774 2.54 2.54 0 0 0-1.863.774 2.54 2.54 0 0 0-.773 1.863c0 .727.257 1.348.773 1.863a2.54 2.54 0 0 0 1.863.774zM13.45 4.03c-.023.258-.123.48-.299.668a.856.856 0 0 1-.65.281.913.913 0 0 1-.668-.28.913.913 0 0 1-.281-.669c0-.258.094-.48.281-.668a.913.913 0 0 1 .668-.28c.258 0 .48.093.668.28.187.188.281.41.281.668zm2.672.95c.023.656.035 1.746.035 3.269 0 1.523-.017 2.62-.053 3.287-.035.668-.134 1.248-.298 1.74a4.098 4.098 0 0 1-.967 1.53 4.098 4.098 0 0 1-1.53.966c-.492.164-1.072.264-1.74.3-.668.034-1.763.052-3.287.052-1.523 0-2.619-.018-3.287-.053-.668-.035-1.248-.146-1.74-.334a3.747 3.747 0 0 1-1.53-.931 4.098 4.098 0 0 1-.966-1.53c-.164-.492-.264-1.072-.299-1.74C.424 10.87.406 9.773.406 8.25S.424 5.63.46 4.963c.035-.668.135-1.248.299-1.74.21-.586.533-1.096.967-1.53A4.098 4.098 0 0 1 3.254.727c.492-.164 1.072-.264 1.74-.3C5.662.394 6.758.376 8.281.376c1.524 0 2.62.018 3.287.053.668.035 1.248.135 1.74.299a4.098 4.098 0 0 1 2.496 2.496c.165.492.27 1.078.317 1.757zm-1.687 7.91c.14-.399.234-1.032.28-1.899.024-.515.036-1.242.036-2.18V7.689c0-.961-.012-1.688-.035-2.18-.047-.89-.14-1.524-.281-1.899a2.537 2.537 0 0 0-1.512-1.511c-.375-.14-1.008-.235-1.899-.282a51.292 51.292 0 0 0-2.18-.035H7.72c-.938 0-1.664.012-2.18.035-.867.047-1.5.141-1.898.282a2.537 2.537 0 0 0-1.512 1.511c-.14.375-.234 1.008-.281 1.899a51.292 51.292 0 0 0-.036 2.18v1.125c0 .937.012 1.664.036 2.18.047.866.14 1.5.28 1.898.306.726.81 1.23 1.513 1.511.398.141 1.03.235 1.898.282.516.023 1.242.035 2.18.035h1.125c.96 0 1.687-.012 2.18-.035.89-.047 1.523-.141 1.898-.282.726-.304 1.23-.808 1.512-1.511z">
                        </path>
                    </g>
                    </symbol>
                    <symbol id="mono-icon-email" viewBox="0 0 512 512">
                    <g>
                        <path
                            d="M67,148.7c11,5.8,163.8,89.1,169.5,92.1c5.7,3,11.5,4.4,20.5,4.4c9,0,14.8-1.4,20.5-4.4c5.7-3,158.5-86.3,169.5-92.1
                        c4.1-2.1,11-5.9,12.5-10.2c2.6-7.6-0.2-10.5-11.3-10.5H257H65.8c-11.1,0-13.9,3-11.3,10.5C56,142.9,62.9,146.6,67,148.7z">
                        </path>
                        <path d="M455.7,153.2c-8.2,4.2-81.8,56.6-130.5,88.1l82.2,92.5c2,2,2.9,4.4,1.8,5.6c-1.2,1.1-3.8,0.5-5.9-1.4l-98.6-83.2
                        c-14.9,9.6-25.4,16.2-27.2,17.2c-7.7,3.9-13.1,4.4-20.5,4.4c-7.4,0-12.8-0.5-20.5-4.4c-1.9-1-12.3-7.6-27.2-17.2l-98.6,83.2
                        c-2,2-4.7,2.6-5.9,1.4c-1.2-1.1-0.3-3.6,1.7-5.6l82.1-92.5c-48.7-31.5-123.1-83.9-131.3-88.1c-8.8-4.5-9.3,0.8-9.3,4.9
                        c0,4.1,0,205,0,205c0,9.3,13.7,20.9,23.5,20.9H257h185.5c9.8,0,21.5-11.7,21.5-20.9c0,0,0-201,0-205
                        C464,153.9,464.6,148.7,455.7,153.2z"></path>
                    </g>
                    </symbol>
                    <symbol viewBox="0 0 160 131.25" id="icon-refresh">
                    <title>refresh</title>
                    <g id="refresh-025bc3d1-fd59-4a92-a9e7-cd975c83c2c3" data-name="Refresh">
                        <path id="refresh-50cf1659-49e7-4571-986c-42c631892d58" data-name="<Pfad>"
                            d="M110.37,157.78A61.63,61.63,0,1,0,48.66,96.15v28.1" transform="translate(-16 -30.53)"
                            stroke-linecap="round" stroke-linejoin="round"></path>
                        <polyline id="refresh-c1a43dbf-2077-4b8f-83ba-4fc3d48eb591" data-name="<Pfad>"
                            points="62.12 65.47 32.66 93.72 4 65.47" stroke-linecap="round" stroke-linejoin="round"></polyline>
                    </g>
                    </symbol>
                    <symbol viewBox="0 0 112 160" id="icon-report">
                    <title>main_icn_Bill_or_Report</title>
                    <line id="report-b9470b2f-d5d0-4629-a572-f176b2186854" data-name="<Pfad>" x1="84" y1="68" x2="52" y2="68"
                        stroke-linecap="round" stroke-miterlimit="10"></line>
                    <line id="report-ed145543-d392-4b41-9890-d30bd1eabc64" data-name="<Pfad>" x1="36" y1="68" x2="28" y2="68"
                        stroke-linecap="round" stroke-miterlimit="10"></line>
                    <line id="report-09f42415-9ac2-4696-9482-c79b586256dd" data-name="<Pfad>" x1="84" y1="92" x2="52" y2="92"
                        stroke-linecap="round" stroke-miterlimit="10"></line>
                    <line id="report-56a07597-3269-4604-80a4-7bd9b7283f5e" data-name="<Pfad>" x1="36" y1="92" x2="28" y2="92"
                        stroke-linecap="round" stroke-miterlimit="10"></line>
                    <line id="report-11cbff70-98cf-478b-aba3-825753a9003d" data-name="<Pfad>" x1="84" y1="116" x2="52" y2="116"
                        stroke-linecap="round" stroke-miterlimit="10"></line>
                    <line id="report-92ba8901-38c7-4445-92c4-e3e11483833b" data-name="<Pfad>" x1="36" y1="116" x2="28" y2="116"
                        stroke-linecap="round" stroke-miterlimit="10"></line>
                    <path d="M148,52,116,20H56A12,12,0,0,0,44,32V160a12,12,0,0,0,12,12h80a12,12,0,0,0,12-12V52Z"
                        transform="translate(-40 -16)" stroke-linejoin="round"></path>
                    <polyline points="76 4.23 76 36 107 36" stroke-linejoin="round"></polyline>
                    </symbol>
                    <symbol viewBox="0 0 121.45 86.55" id="icon-tick">
                    <title>main_icn_Tick_simple</title>
                    <polyline points="117.45 4 38.91 82.55 4 47.64" stroke-linecap="round" stroke-linejoin="round"></polyline>
                    </symbol>
                    <symbol id="mono-icon-print" viewBox="0 0 12 12">
                    <g fill-rule="evenodd">
                        <path fill-rule="nonzero"
                            d="M9 10V7H3v3H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3.132A2.868 2.868 0 0 1 9.132 10H9zm.5-4.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM3 0h6v2H3z">
                        </path>
                        <path d="M4 8h4v4H4z"></path>
                    </g>
                    </symbol>
                    <symbol id="mono-icon-copylink" viewBox="0 0 12 12">
                    <g fill-rule="evenodd">
                        <path
                            d="M10.199 2.378c.222.205.4.548.465.897.062.332.016.614-.132.774L8.627 6.106c-.187.203-.512.232-.75-.014a.498.498 0 0 0-.706.028.499.499 0 0 0 .026.706 1.509 1.509 0 0 0 2.165-.04l1.903-2.06c.37-.398.506-.98.382-1.636-.105-.557-.392-1.097-.77-1.445L9.968.8C9.591.452 9.03.208 8.467.145 7.803.072 7.233.252 6.864.653L4.958 2.709a1.509 1.509 0 0 0 .126 2.161.5.5 0 1 0 .68-.734c-.264-.218-.26-.545-.071-.747L7.597 1.33c.147-.16.425-.228.76-.19.353.038.71.188.931.394l.91.843.001.001zM1.8 9.623c-.222-.205-.4-.549-.465-.897-.062-.332-.016-.614.132-.774l1.905-2.057c.187-.203.512-.232.75.014a.498.498 0 0 0 .706-.028.499.499 0 0 0-.026-.706 1.508 1.508 0 0 0-2.165.04L.734 7.275c-.37.399-.506.98-.382 1.637.105.557.392 1.097.77 1.445l.91.843c.376.35.937.594 1.5.656.664.073 1.234-.106 1.603-.507L7.04 9.291a1.508 1.508 0 0 0-.126-2.16.5.5 0 0 0-.68.734c.264.218.26.545.071.747l-1.904 2.057c-.147.16-.425.228-.76.191-.353-.038-.71-.188-.931-.394l-.91-.843z">
                        </path>
                        <path d="M8.208 3.614a.5.5 0 0 0-.707.028L3.764 7.677a.5.5 0 0 0 .734.68L8.235 4.32a.5.5 0 0 0-.027-.707">
                        </path>
                    </g>
                    </symbol>
                    <symbol id="mono-icon-linkedin" viewBox="0 0 16 17">
                    <g fill-rule="evenodd">
                        <path
                            d="M3.734 16.125H.464V5.613h3.27zM2.117 4.172c-.515 0-.96-.188-1.336-.563A1.825 1.825 0 0 1 .22 2.273c0-.515.187-.96.562-1.335.375-.375.82-.563 1.336-.563.516 0 .961.188 1.336.563.375.375.563.82.563 1.335 0 .516-.188.961-.563 1.336-.375.375-.82.563-1.336.563zM15.969 16.125h-3.27v-5.133c0-.844-.07-1.453-.21-1.828-.259-.633-.762-.95-1.512-.95s-1.278.282-1.582.845c-.235.421-.352 1.043-.352 1.863v5.203H5.809V5.613h3.128v1.442h.036c.234-.469.609-.856 1.125-1.16.562-.375 1.218-.563 1.968-.563 1.524 0 2.59.48 3.2 1.441.468.774.703 1.97.703 3.586v5.766z">
                        </path>
                    </g>
                    </symbol>
                    <symbol id="mono-icon-pinterest" viewBox="0 0 512 512">
                    <g>
                        <path d="M256,32C132.3,32,32,132.3,32,256c0,91.7,55.2,170.5,134.1,205.2c-0.6-15.6-0.1-34.4,3.9-51.4
                        c4.3-18.2,28.8-122.1,28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2,19.2-58,43.2-58c20.4,0,30.2,15.3,30.2,33.6
                        c0,20.5-13.1,51.1-19.8,79.5c-5.6,23.8,11.9,43.1,35.4,43.1c42.4,0,71-54.5,71-119.1c0-49.1-33.1-85.8-93.2-85.8
                        c-67.9,0-110.3,50.7-110.3,107.3c0,19.5,5.8,33.3,14.8,43.9c4.1,4.9,4.7,6.9,3.2,12.5c-1.1,4.1-3.5,14-4.6,18
                        c-1.5,5.7-6.1,7.7-11.2,5.6c-31.3-12.8-45.9-47-45.9-85.6c0-63.6,53.7-139.9,160.1-139.9c85.5,0,141.8,61.9,141.8,128.3
                        c0,87.9-48.9,153.5-120.9,153.5c-24.2,0-46.9-13.1-54.7-27.9c0,0-13,51.6-15.8,61.6c-4.7,17.3-14,34.5-22.5,48
                        c20.1,5.9,41.4,9.2,63.5,9.2c123.7,0,224-100.3,224-224C480,132.3,379.7,32,256,32z"></path>
                    </g>
                    </symbol>
                    <symbol id="mono-icon-tumblr" viewBox="0 0 512 512">
                    <g>
                        <path d="M321.2,396.3c-11.8,0-22.4-2.8-31.5-8.3c-6.9-4.1-11.5-9.6-14-16.4c-2.6-6.9-3.6-22.3-3.6-46.4V224h96v-64h-96V48h-61.9
                        c-2.7,21.5-7.5,44.7-14.5,58.6c-7,13.9-14,25.8-25.6,35.7c-11.6,9.9-25.6,17.9-41.9,23.3V224h48v140.4c0,19,2,33.5,5.9,43.5
                        c4,10,11.1,19.5,21.4,28.4c10.3,8.9,22.8,15.7,37.3,20.5c14.6,4.8,31.4,7.2,50.4,7.2c16.7,0,30.3-1.7,44.7-5.1
                        c14.4-3.4,30.5-9.3,48.2-17.6v-65.6C363.2,389.4,342.3,396.3,321.2,396.3z"></path>
                    </g>
                    </symbol>
                    <symbol id="mono-icon-twitter" viewBox="0 0 19 16">
                    <g>
                        <path fill-rule="evenodd"
                            d="M16.48 4.594c.024.094.036.246.036.457 0 1.687-.41 3.316-1.23 4.887-.845 1.664-2.028 2.988-3.552 3.972-1.664 1.102-3.574 1.652-5.73 1.652-2.063 0-3.95-.55-5.66-1.652.258.024.55.035.879.035 1.71 0 3.246-.527 4.605-1.582-.82 0-1.54-.24-2.162-.72a3.671 3.671 0 0 1-1.283-1.811c.234.023.457.035.668.035.328 0 .656-.035.984-.105a3.72 3.72 0 0 1-2.11-1.301 3.54 3.54 0 0 1-.843-2.32v-.07a3.475 3.475 0 0 0 1.652.492A4.095 4.095 0 0 1 1.54 5.227a3.546 3.546 0 0 1-.457-1.776c0-.644.176-1.26.527-1.845a10.18 10.18 0 0 0 3.358 2.742 10.219 10.219 0 0 0 4.236 1.125 5.124 5.124 0 0 1-.07-.844c0-.656.164-1.272.492-1.846a3.613 3.613 0 0 1 1.336-1.353 3.565 3.565 0 0 1 1.828-.492c.54 0 1.037.105 1.494.316.457.21.861.492 1.213.844a7.51 7.51 0 0 0 2.356-.88c-.282.868-.82 1.548-1.618 2.04a7.93 7.93 0 0 0 2.11-.598 8.114 8.114 0 0 1-1.864 1.934z">
                        </path>
                    </g>
                    </symbol>
                    <symbol id="mono-icon-youtube" viewBox="0 0 512 512">
                    <g>
                        <path fill-rule="evenodd" d="M508.6,148.8c0-45-33.1-81.2-74-81.2C379.2,65,322.7,64,265,64c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,1-169.6,3.6
                        c-40.8,0-73.9,36.4-73.9,81.4C1,184.6-0.1,220.2,0,255.8C-0.1,291.4,1,327,3.4,362.7c0,45,33.1,81.5,73.9,81.5
                        c58.2,2.7,117.9,3.9,178.6,3.8c60.8,0.2,120.3-1,178.6-3.8c40.9,0,74-36.5,74-81.5c2.4-35.7,3.5-71.3,3.4-107
                        C512.1,220.1,511,184.5,508.6,148.8z M207,353.9V157.4l145,98.2L207,353.9z"></path>
                    </g>
                    </symbol>
                    <symbol id="icon-magnify" viewBox="0 0 160 160">
                    <circle cx="60" cy="60" r="56" stroke-linecap="round" stroke-linejoin="round"></circle>
                    <line x1="99.6" y1="99.6" x2="156" y2="156" stroke-linecap="round" stroke-linejoin="round"></line>
                    </symbol>
                    <symbol id="burger-menu" viewBox="0 0 161 112.5">
                    <g>
                        <line id="menu-2c72b4d9-1bf0-417d-b181-2a961c0178ac" data-name="<Pfad>" x1="156.5" y1="108" x2="4.5" y2="108"
                            stroke-linecap="round" stroke-miterlimit="10"></line>
                        <line id="menu-f2f5e9a8-6d2b-4645-ae26-076f673e451d" data-name="<Pfad>" x1="156.5" y1="56" x2="4.5" y2="56"
                            stroke-linecap="round" stroke-miterlimit="10"></line>
                        <line id="menu-60a467c5-af20-4a0f-87ba-d7208d8cf83b" data-name="<Pfad>" x1="156.5" y1="4" x2="4.5" y2="4"
                            stroke-linecap="round" stroke-miterlimit="10"></line>
                    </g>
                    </symbol>
                    <symbol id="close-x" viewBox="0 0 144 144">
                    <g>
                        <line id="close-2b810136-93de-4622-a0cc-fbdf15eb7667" data-name="<Pfad>" x1="4" y1="4" x2="140" y2="140"
                            stroke-linecap="round" stroke-linejoin="round"></line>
                        <line id="close-2d18ff19-f34e-4c5d-9791-2549bee849dd" data-name="<Pfad>" x1="4" y1="140" x2="140" y2="4"
                            stroke-linecap="round" stroke-linejoin="round"></line>
                    </g>
                    </symbol>
                    <symbol id="share-more-arrow" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;">
                    <g>
                        <g>
                            <path d="M512,241.7L273.643,3.343v156.152c-71.41,3.744-138.015,33.337-188.958,84.28C30.075,298.384,0,370.991,0,448.222v60.436
                            l29.069-52.985c45.354-82.671,132.173-134.027,226.573-134.027c5.986,0,12.004,0.212,18.001,0.632v157.779L512,241.7z
                            M255.642,290.666c-84.543,0-163.661,36.792-217.939,98.885c26.634-114.177,129.256-199.483,251.429-199.483h15.489V78.131
                            l163.568,163.568L304.621,405.267V294.531l-13.585-1.683C279.347,291.401,267.439,290.666,255.642,290.666z">
                            </path>
                        </g>
                    </g>
                    </symbol>
                    <symbol id="chevron" viewBox="0 0 76 144">
                    <g>
                        <polyline data-name="<Pfad>" points="4 4 72 72 4 140" stroke-linecap="round" stroke-linejoin="round">
                        </polyline>
                    </g>
                    </symbol>
                    <svg id="arrow-right" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                    <symbol id="play-arrow" viewBox="0 0 106 144">
                    <path
                        d="M52,37.71V153.79A10.08,10.08,0,0,0,61.51,164a9.82,9.82,0,0,0,6.31-2l1.39-1,74.26-55.21,2.19-1.64a9.67,9.67,0,0,0-.07-16.19l-2.11-1.59-74-55.05c-3.08-2.53-6.91-4.38-11.37-2.42A10.55,10.55,0,0,0,52,38.55v.78"
                        transform="translate(-48 -24)" stroke-linecap="round" stroke-linejoin="round"></path>
                    </symbol>
                    <symbol id="bookmark" viewBox="0 0 9 12">
                    <g>
                        <path fill="none" fill-rule="evenodd" d="M.5.5v10.997l3.431-2.374a1 1 0 0 1 1.138 0L8.5 11.497V.5h-8z">
                        </path>
                    </g>
                    </symbol>
                    <symbol id="heart" viewBox="0 0 14 12">
                    <g>
                        <path fill="none" fill-rule="evenodd"
                            d="M10.24.5c-1.098 0-2.152.576-2.808 1.7L7 2.938l-.432-.74C5.912 1.076 4.858.5 3.76.5 1.996.5.5 1.899.5 3.859.5 5.2 1.644 6.912 3.57 8.747a27.774 27.774 0 0 0 3.373 2.738A.099.099 0 0 0 7 11.5a.104.104 0 0 0 .061-.018 27.75 27.75 0 0 0 3.368-2.735C12.356 6.912 13.5 5.201 13.5 3.859 13.5 1.899 12.003.5 10.24.5z">
                        </path>
                    </g>
                    </symbol>
                    <symbol id="grid" viewBox="0 0 32 32">
                    <g>
                        <path
                            d="M6.4,5.7 C6.4,6.166669 6.166669,6.4 5.7,6.4 L0.7,6.4 C0.233331,6.4 0,6.166669 0,5.7 L0,0.7 C0,0.233331 0.233331,0 0.7,0 L5.7,0 C6.166669,0 6.4,0.233331 6.4,0.7 L6.4,5.7 Z M19.2,5.7 C19.2,6.166669 18.966669,6.4 18.5,6.4 L13.5,6.4 C13.033331,6.4 12.8,6.166669 12.8,5.7 L12.8,0.7 C12.8,0.233331 13.033331,0 13.5,0 L18.5,0 C18.966669,0 19.2,0.233331 19.2,0.7 L19.2,5.7 Z M32,5.7 C32,6.166669 31.766669,6.4 31.3,6.4 L26.3,6.4 C25.833331,6.4 25.6,6.166669 25.6,5.7 L25.6,0.7 C25.6,0.233331 25.833331,0 26.3,0 L31.3,0 C31.766669,0 32,0.233331 32,0.7 L32,5.7 Z M6.4,18.5 C6.4,18.966669 6.166669,19.2 5.7,19.2 L0.7,19.2 C0.233331,19.2 0,18.966669 0,18.5 L0,13.5 C0,13.033331 0.233331,12.8 0.7,12.8 L5.7,12.8 C6.166669,12.8 6.4,13.033331 6.4,13.5 L6.4,18.5 Z M19.2,18.5 C19.2,18.966669 18.966669,19.2 18.5,19.2 L13.5,19.2 C13.033331,19.2 12.8,18.966669 12.8,18.5 L12.8,13.5 C12.8,13.033331 13.033331,12.8 13.5,12.8 L18.5,12.8 C18.966669,12.8 19.2,13.033331 19.2,13.5 L19.2,18.5 Z M32,18.5 C32,18.966669 31.766669,19.2 31.3,19.2 L26.3,19.2 C25.833331,19.2 25.6,18.966669 25.6,18.5 L25.6,13.5 C25.6,13.033331 25.833331,12.8 26.3,12.8 L31.3,12.8 C31.766669,12.8 32,13.033331 32,13.5 L32,18.5 Z M6.4,31.3 C6.4,31.766669 6.166669,32 5.7,32 L0.7,32 C0.233331,32 0,31.766669 0,31.3 L0,26.3 C0,25.833331 0.233331,25.6 0.7,25.6 L5.7,25.6 C6.166669,25.6 6.4,25.833331 6.4,26.3 L6.4,31.3 Z M19.2,31.3 C19.2,31.766669 18.966669,32 18.5,32 L13.5,32 C13.033331,32 12.8,31.766669 12.8,31.3 L12.8,26.3 C12.8,25.833331 13.033331,25.6 13.5,25.6 L18.5,25.6 C18.966669,25.6 19.2,25.833331 19.2,26.3 L19.2,31.3 Z M32,31.3 C32,31.766669 31.766669,32 31.3,32 L26.3,32 C25.833331,32 25.6,31.766669 25.6,31.3 L25.6,26.3 C25.6,25.833331 25.833331,25.6 26.3,25.6 L31.3,25.6 C31.766669,25.6 32,25.833331 32,26.3 L32,31.3 Z"
                            id=""></path>
                    </g>
                    </symbol>
                    <symbol id="filter" viewBox="0 0 16 12">
                    <path d="M0 2V0h16v2H0zm2.4 5V5h11.2v2H2.4zm2.4 5v-2h6.4v2H4.8z"></path>
                    </symbol>
                    <symbol id="eye" viewBox="0 0 576 512">
                    <path
                        d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z">
                    </path>
                    </symbol>
                    <symbol id="eye-close" viewBox="0 0 650 512">
                    <path fill="currentColor"
                        d="M637 485.25L23 1.75A8 8 0 0 0 11.76 3l-10 12.51A8 8 0 0 0 3 26.75l614 483.5a8 8 0 0 0 11.25-1.25l10-12.51a8 8 0 0 0-1.25-11.24zM320 96a128.14 128.14 0 0 1 128 128c0 21.62-5.9 41.69-15.4 59.57l25.45 20C471.65 280.09 480 253.14 480 224c0-36.83-12.91-70.31-33.78-97.33A294.88 294.88 0 0 1 576.05 256a299.73 299.73 0 0 1-67.77 87.16l25.32 19.94c28.47-26.28 52.87-57.26 70.93-92.51a32.35 32.35 0 0 0 0-29.19C550.3 135.59 442.94 64 320 64a311.23 311.23 0 0 0-130.12 28.43l45.77 36C258.24 108.52 287.56 96 320 96zm60.86 146.83A63.15 63.15 0 0 0 320 160c-1 0-1.89.24-2.85.29a45.11 45.11 0 0 1-.24 32.19zm-217.62-49.16A154.29 154.29 0 0 0 160 224a159.39 159.39 0 0 0 226.27 145.29L356.69 346c-11.7 3.53-23.85 6-36.68 6A128.15 128.15 0 0 1 192 224c0-2.44.59-4.72.72-7.12zM320 416c-107.36 0-205.47-61.31-256-160 17.43-34 41.09-62.72 68.31-86.72l-25.86-20.37c-28.48 26.28-52.87 57.25-70.93 92.5a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448a311.25 311.25 0 0 0 130.12-28.43l-29.25-23C389.06 408.84 355.15 416 320 416z">
                    </path>
                    </symbol>
                    <symbol viewBox="0 0 33 23" id="icon-viewed-show">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                        <g id="1x-show" stroke-width="1.633" stroke="#989898">
                            <g id="Page-1-Copy-6">
                                <path
                                    d="M16.3166,21.8167 C5.8136,21.8167 1.0616,12.1247 0.8776,11.6797 C0.7956,11.4177 0.7956,11.1347 0.8776,10.8727 C1.0616,10.5087 5.8136,0.8167 16.3166,0.8167 C26.8196,0.8167 31.5716,10.5087 31.7556,10.9527 C31.8366,11.2157 31.8366,11.4987 31.7556,11.7607 C31.5716,12.1247 26.8196,21.8167 16.3166,21.8167 Z"
                                    id="Stroke-1"></path>
                                <path
                                    d="M16.3166,16.9701 C13.1346,16.9701 10.6066,14.4661 10.6066,11.3161 C10.6066,8.1661 13.1346,5.6621 16.3166,5.6621 C19.4976,5.6621 22.0266,8.1661 22.0266,11.3161 C22.0266,14.4661 19.4976,16.9701 16.3166,16.9701 Z"
                                    id="Stroke-3"></path>
                            </g>
                        </g>
                    </g>
                    </symbol>
                    <symbol viewBox="0 0 33 23" id="icon-viewed-hide">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                        <g id="1x-hide" stroke="#989898">
                            <g id="Page-1-Copy-5">
                                <path d="M30.8161,2.6229 L1.8161,20.6229" id="Stroke-1" stroke-width="1.75"></path>
                                <path
                                    d="M16.3166,21.8167 C5.8136,21.8167 1.0616,12.1247 0.8776,11.6797 C0.7956,11.4177 0.7956,11.1347 0.8776,10.8727 C1.0616,10.5087 5.8136,0.8167 16.3166,0.8167 C26.8196,0.8167 31.5716,10.5087 31.7556,10.9527 C31.8366,11.2157 31.8366,11.4987 31.7556,11.7607 C31.5716,12.1247 26.8196,21.8167 16.3166,21.8167 Z"
                                    id="Stroke-3" stroke-width="1.633" stroke-linejoin="round"></path>
                                <path
                                    d="M16.3166,16.9701 C13.1346,16.9701 10.6066,14.4661 10.6066,11.3161 C10.6066,8.1661 13.1346,5.6621 16.3166,5.6621 C19.4976,5.6621 22.0266,8.1661 22.0266,11.3161 C22.0266,14.4661 19.4976,16.9701 16.3166,16.9701 Z"
                                    id="Stroke-5" stroke-width="1.633" stroke-linejoin="round"></path>
                            </g>
                        </g>
                    </g>
                    </symbol>
                    <symbol viewBox="0 0 160 160" id="icon-block">
                    <g id="block-4bed162d-c643-4387-ae3b-c4470515ed90" data-name="Block_ic">
                        <line x1="26.26" y1="133.74" x2="133.74" y2="26.26" stroke-linecap="round" stroke-linejoin="round"></line>
                        <circle cx="80" cy="80" r="76" stroke-linecap="round" stroke-linejoin="round"></circle>
                    </g>
                    </symbol>
                    <symbol viewBox="0 0 128 144.28" id="icon-my-vodafone">
                    <circle id="my-vodafone-6b2411b7-7f75-435e-b867-240cc2d98be9" data-name="<Pfad>" cx="64" cy="40.09" r="36.09"
                        stroke-linecap="round" stroke-linejoin="round"></circle>
                    <path id="my-vodafone-bce823a2-2cee-4d7d-8451-6878d4321929" data-name="<Pfad>"
                        d="M156,164.1c-6.48-43.88-33.17-64.23-59.64-64.23S42.49,120.21,36,164.09" transform="translate(-32 -23.82)"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                    </symbol>
                    <symbol viewBox="0 0 512 512" id="icon-tick">
                    <path fill="currentColor"
                        d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z">
                    </path>
                    </symbol>
                    <symbol viewBox="0 0 160 144" id="icon-shopping-trolley">
                    <title>shopping-trolley</title>
                    <g id="shopping-trolley-75dc0a9c-41de-4739-bc03-bd2385532cca" data-name="Shopping_trolley_ic">
                        <g id="shopping-trolley-8975f5ee-8e9b-4eac-aef6-9cc18dfcf0a7" data-name="<Gruppe>">
                            <circle id="shopping-trolley-21e78bff-b3f0-4ed0-bdc8-57f01dd9adc7" data-name="<Pfad>" cx="72" cy="128"
                                r="12" stroke-linecap="round" stroke-miterlimit="10"></circle>
                        </g>
                        <g id="shopping-trolley-5a4248bd-d03a-41e5-9971-90ea2c8566bb" data-name="<Gruppe>">
                            <circle id="shopping-trolley-4cad908a-c3c0-4759-ac8c-7853666129e0" data-name="<Pfad>" cx="120" cy="128"
                                r="12" stroke-linecap="round" stroke-miterlimit="10"></circle>
                        </g>
                        <polyline points="4 4 30 4 59 92 133 92 156 20 35.27 20" stroke-linecap="round" stroke-linejoin="round">
                        </polyline>
                    </g>
                    </symbol>
                </svg>`;
/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // fetch nav content
  const navMeta = getMetadata("nav");
  const navPath = navMeta ? new URL(navMeta).pathname : "/nav";
  const resp = await fetch(`${navPath}.plain.html`);
  if (resp.ok) {
    const html = await resp.text();
    // decorate nav DOM
    const nav = document.createElement("nav");
    nav.id = "nav";
    nav.innerHTML = html;
    decorateIcons(nav);

    let hatNavigationListData = []
    let hatNavigationList = nav.querySelectorAll(".hatnavigation ul>li")
    for(let i=0;i<hatNavigationList.length;i++){
		if(hatNavigationList[i]==undefined || hatNavigationList[i]==null){
			continue;
		}else{
			let dObj = {}
            let aTag = hatNavigationList[i].querySelector("a")
            if(aTag == undefined){
                dObj = {href:null,text:hatNavigationList[i].innerText}
            }else{
                dObj = {href:aTag.getAttribute("href"),text:aTag.innerText}
            }
            hatNavigationListData.push(dObj)
		}
	}

    let headerNavigationListData = []
    let ULList = nav.querySelector(".headernavigation ul")
    // let headerNavigationUlList = ULList.querySelectorAll("ul>li")

    console.log(typeof ULList)

    let headerHTML = ''

    //svg appending starts---here
    var bodyblock = document.querySelector("body");
    bodyblock.classList.add("Page-body")
    bodyblock.innerHTML = svghtml + bodyblock.innerHTML
    //svg appending ends--here
    headerHTML += svghtml
    headerHTML += signInOverlay();
    headerHTML += hatNavigation(hatNavigationListData);
    headerHTML += headerNav(nav);

    bodyblock.innerHTML = headerHTML + bodyblock.innerHTML
  }
  document.querySelector(".header-wrapper > .header.block").style.display = "none";
  
}
function signInOverlay() {
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
                    <div class="Page-signInOverlay-content">
                      <div class="SignInOverlay">
                          <div class="SignInOverlay-container">
                              <div class="SignInOverlay-wrapper">
                                  <h1 class="SignInOverlay-title">Sign In</h1>
                                  <div class="SignInOverlay-loadingContent">
                                      <h2>Loading Content</h2>
                                  </div>
                                  <ps-tabs class="LoginTabs">
                                      <div class="LoginTabs-tabs-wrapper Tabs-tabs-wrapper">
                                          <ul class="LoginTabs-tabs">
                                              <li data-active="true">
                                                  <a class="LoginTabs-tab" href="#sign-in" data-tab="" data-active="true"
                                                      data-expanded="true">
                                                      My One NZ
                                                  </a>
                                              </li>
                                              <li data-active="false">
                                                  <a class="LoginTabs-tab" href="#sign-in-internet" data-tab="" data-active="false">
                                                      Internet &amp; Landline
                                                  </a>
                                              </li>
                                              <li data-active="false">
                                                  <a class="LoginTabs-tab" href="#sign-in-customerzone" data-tab="" data-active="false">
                                                      Customer Zone
                                                  </a>
                                              </li>
                                          </ul>
                                      </div>
                                      <div class="LoginTabs-content Tabs-content">
                                          <div class="LoginTabs-panel" id="sign-in" data-tab-panel="" data-visible="true"
                                              data-expanded="true">
                                              <div class="LoginTabItem">
                                                  <div class="LoginTabItem-content">
                                                      <ps-form class="LoginForm" data-form-number="1">
                                                          <div class="LoginForm-submissionFailure">
                                                              Wrong userid or password
                                                          </div>
                                                          <form action="/myvodafone/login" class="LoginForm-form" method="post"
                                                              autocomplete="off" novalidate="novalidate">
                                                              <div class="LoginForm-errorMessage alert alert--warning">
                                                                  <div class="LoginForm-errorMessage-caption">
                                                                      <div class="LoginForm-errorMessage-iconWrapper">
                                                                          <svg class="LoginForm-errorMessage-icon">
                                                                              <use xlink:href="#icon-block"></use>
                                                                          </svg>
                                                                      </div>
                                                                      <div class="LoginForm-errorMessage-content">
                                                                          <p><strong
                                                                                  class="LoginForm-errorMessageTitleBinder ">Oops!!</strong>
                                                                          </p>
                                                                          <p class="LoginForm-errorMessageDescriptionBinder"
                                                                              data-vft="error-popup-text">Error!</p>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="LoginForm-successMessage alert alert--success">
                                                                  <div class="LoginForm-successMessage-caption">
                                                                      <div class="LoginForm-successMessage-iconWrapper">
                                                                          <svg class="LoginForm-successMessage-icon">
                                                                              <use xlink:href="#icon-tick"></use>
                                                                          </svg>
                                                                      </div>
                                                                      <div class="LoginForm-successMessage-content">
                                                                          <p><strong
                                                                                  class="LoginForm-successMessageTitleBinder ">Great</strong>
                                                                          </p>
                                                                          <p class="LoginForm-successMessageDescriptionBinder"
                                                                              data-vft="error-popup-text">Your password has been set.</p>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="LoginForm-items">
                                                                  <div class="LoginForm-items-item">
                                                                      <div class="EmailInput"><label class="EmailInput-label"><span
                                                                                  data-required="">Email</span>
                                                                              <input class="EmailInput-input form-input username"
                                                                                  type="email" name="username" autocomplete="off"
                                                                                  data-lpignore="true" placeholder="E.g. name@example.com"
                                                                                  required="" aria-required="true">
                                                                          </label>
                                                                      </div>
                                                                  </div>
                                                                  <div class="LoginForm-items-item">
                                                                      <div class="PasswordInput password-hidden"><label
                                                                              class="PasswordInput-label"><span
                                                                                  data-required="">Password</span>
                                                                              <input class="PasswordInput-input form-input password"
                                                                                  type="password" autocomplete="off" name="password"
                                                                                  data-lpignore="true" required="">
                                                                              <div class="PasswordInput-passwordVisibility">
                                                                                  <svg class="PasswordInput-eye">
                                                                                      <use xlink:href="#icon-viewed-show"></use>
                                                                                  </svg>
                                                                                  <svg class="PasswordInput-closedEye">
                                                                                      <use xlink:href="#icon-viewed-hide"></use>
                                                                                  </svg>
                                                                              </div>
                                                                          </label>
                                                                          <div class="PasswordInput-passwordVisibility">
                                                                              <div class="PasswordInput-eyeOpen">
                                                                                  <svg class="PasswordInput-eye">
                                                                                      <use xlink:href="#icon-viewed-show"></use>
                                                                                  </svg>
                                                                              </div>
                                                                              <div class="PasswordInput-eyeClosed">
                                                                                  <svg class="PasswordInput-closedEye">
                                                                                      <use xlink:href="#icon-viewed-hide"></use>
                                                                                  </svg>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="LoginForm-buttons">
                                                                  <button class="Button" button--disabled="" disabled=""
                                                                      type="submit">Sign in
                                                                  </button>
                                                              </div>
                                                              <div class="LoginForm-links">
                                                                  <div class="LoginForm-forgotPassword">
                                                                      <a class="forgotLink" href="#">Forgot password?</a>
                                                                  </div>
                                                                  <div class="LoginForm-register">
                                                                      <a class="registerLink" href="#">Register</a>
                                                                  </div>
                                                              </div>
                                                              <div class="LoginForm-recaptcha">
                                                                  This site is protected by reCAPTCHA and the Google <a
                                                                      href="https://policies.google.com/privacy">Privacy Policy</a> and <a
                                                                      href="https://policies.google.com/terms">Terms of Service</a> apply.
                                                              </div>
                                                          </form>
                                                      </ps-form>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="LoginTabs-panel" id="sign-in-internet" data-tab-panel="" data-visible="false">
                                              <div class="LoginTabItem">
                                                  <div class="LoginTabItem-content">
                                                      <ps-form class="LoginForm" data-form-number="2">
                                                          <form action="https://the.one.nz/acnts/myaccounts.pl/login"
                                                              class="LoginForm-form" method="post">
                                                              <input type="hidden" class="login-param" name="goto"
                                                                  value="https://www.telstraclear.co.nz/selfservice-customerzone/secure/myprofile.jsf">
                                                              <input type="hidden" class="login-param" name="failUrl"
                                                                  value="https://www.telstraclear.co.nz/selfservice-customerzone/login.jsf?goto=https://www.telstraclear.co.nz/selfservice-customerzone/secure/myprofile.jsf">
                                                              <input type="hidden" class="login-param" name="IDToken0" value="">
                                                              <input type="hidden" class="login-param" name="realm" value="tclcustomers">
                                                              <input type="hidden" class="login-param" name="service" value="customer">
                                                              <input type="hidden" class="login-param" name="encoded" value="false">
                                                              <input type="hidden" class="login-param" name="gx_charset" value="UTF-8">
                                                              <input type="hidden" class="landing-redirection" name="landing-redirection"
                                                                  value="true" disabled="disabled">
                                                              <div class="LoginForm-errorMessage alert alert--warning">
                                                                  <div class="LoginForm-errorMessage-caption">
                                                                      <div class="LoginForm-errorMessage-iconWrapper">
                                                                          <svg class="LoginForm-errorMessage-icon">
                                                                              <use xlink:href="#icon-block"></use>
                                                                          </svg>
                                                                      </div>
                                                                      <div class="LoginForm-errorMessage-content">
                                                                          <p><strong
                                                                                  class="LoginForm-errorMessageTitleBinder">Oops!</strong>
                                                                          </p>
                                                                          <p class="LoginForm-errorMessageDescriptionBinder"
                                                                              data-vft="error-popup-text">Seems like you've
                                                                              entered the wrong details. Please try again or <span
                                                                                  class="link link--body link--body--dark login-resetpassword-link">reset
                                                                                  your
                                                                                  password</span>.</p>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="LoginForm-items">
                                                                  <div class="LoginForm-items-item">
                                                                      <div class="TextInput"><label class="TextInput-label">
                                                                              <span data-required="">Username or Phone</span>
                                                                              <input class="TextInput-input form-input username"
                                                                                  type="text" name="login" autocomplete="off"
                                                                                  placeholder="E.g. FlyingKiwi or 09 625 4827"
                                                                                  data-lpignore="true" required=""></label>
                                                                      </div>
                                                                  </div>
                                                                  <div class="LoginForm-items-item">
                                                                      <div class="PasswordInput password-hidden"><label
                                                                              class="PasswordInput-label"><span data-required="">Password
                                                                                  or PIN</span>
                                                                              <input class="PasswordInput-input form-input password"
                                                                                  type="password" autocomplete="off" name="password"
                                                                                  data-lpignore="true" required="">
                                                                              <div class="PasswordInput-passwordVisibility">
                                                                                  <svg class="PasswordInput-eye">
                                                                                      <use xlink:href="#icon-viewed-show"></use>
                                                                                  </svg>
                                                                                  <svg class="PasswordInput-closedEye">
                                                                                      <use xlink:href="#icon-viewed-hide"></use>
                                                                                  </svg>
                                                                              </div>
                                                                          </label>
                                                                          <div class="PasswordInput-passwordVisibility">
                                                                              <div class="PasswordInput-eyeOpen">
                                                                                  <svg class="PasswordInput-eye">
                                                                                      <use xlink:href="#icon-viewed-show"></use>
                                                                                  </svg>
                                                                              </div>
                                                                              <div class="PasswordInput-eyeClosed">
                                                                                  <svg class="PasswordInput-closedEye">
                                                                                      <use xlink:href="#icon-viewed-hide"></use>
                                                                                  </svg>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="LoginForm-buttons">
                                                                  <button class="Button" button--disabled="" disabled=""
                                                                      type="submit">Sign in
                                                                  </button>
                                                              </div>
                                                              <div class="LoginForm-links">
                                                                  <div class="LoginForm-forgotPassword">
                                                                      <a class="Link"
                                                                          href="https://the.vodafone.co.nz/acnts/getpwd.pl">Forgot
                                                                          password?</a>
                                                                  </div>
                                                              </div>
                                                          </form>
                                                      </ps-form>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="LoginTabs-panel" id="sign-in-customerzone" data-tab-panel="" data-visible="false">
                                              <div class="LoginTabItem">
                                                  <div class="LoginTabItem-content">
                                                      <ps-form class="LoginForm" data-form-number="3">
                                                          <form action="https://customerzone.one.nz/amserver/UI/Login"
                                                              class="LoginForm-form" method="post" autocomplete="off">
                                                              <input type="hidden" class="login-param" name="goto"
                                                                  value="https://customerzone.vodafone.co.nz/selfservice-customerzone/secure/myprofile.jsf">
                                                              <input type="hidden" class="login-param" name="failUrl"
                                                                  value="https://customerzone.vodafone.co.nz/selfservice-customerzone/login.jsf?goto=https://customerzone.vodafone.co.nz/selfservice-customerzone/secure/myprofile.jsf">
                                                              <input type="hidden" class="login-param" name="IDToken0" value="">
                                                              <input type="hidden" class="login-param" name="realm" value="tclcustomers">
                                                              <input type="hidden" class="login-param" name="service" value="customer">
                                                              <input type="hidden" class="login-param" name="encoded" value="false">
                                                              <input type="hidden" class="login-param" name="gx_charset" value="UTF-8">
                                                              <input type="hidden" class="landing-redirection" name="landing-redirection"
                                                                  value="true" disabled="disabled">
                                                              <div class="LoginForm-errorMessage alert alert--warning">
                                                                  <div class="LoginForm-errorMessage-caption">
                                                                      <div class="LoginForm-errorMessage-iconWrapper">
                                                                          <svg class="LoginForm-errorMessage-icon">
                                                                              <use xlink:href="#icon-block"></use>
                                                                          </svg>
                                                                      </div>
                                                                      <div class="LoginForm-errorMessage-content">
                                                                          <p><strong
                                                                                  class="LoginForm-errorMessageTitleBinder">Oops!</strong>
                                                                          </p>
                                                                          <p class="LoginForm-errorMessageDescriptionBinder"
                                                                              data-vft="error-popup-text">Seems like you've
                                                                              entered the wrong details. Please try again or <span
                                                                                  class="link link--body link--body--dark login-resetpassword-link">reset
                                                                                  your
                                                                                  password</span>.</p>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="LoginForm-items">
                                                                  <div class="LoginForm-items-item">
                                                                      <div class="TextInput"><label class="TextInput-label">
                                                                              <span data-required="">Username or Customer number</span>
                                                                              <input class="TextInput-input form-input username"
                                                                                  type="text" name="IDToken1" autocomplete="off"
                                                                                  placeholder="E.g. FlyingKiwi or 17072171"
                                                                                  data-lpignore="true" required=""></label>
                                                                      </div>
                                                                  </div>
                                                                  <div class="LoginForm-items-item">
                                                                      <div class="PasswordInput password-hidden"><label
                                                                              class="PasswordInput-label"><span
                                                                                  data-required="">Password</span>
                                                                              <input class="PasswordInput-input form-input password"
                                                                                  type="password" autocomplete="off" name="IDToken2"
                                                                                  data-lpignore="true" required="">
                                                                              <div class="PasswordInput-passwordVisibility">
                                                                                  <svg class="PasswordInput-eye">
                                                                                      <use xlink:href="#icon-viewed-show"></use>
                                                                                  </svg>
                                                                                  <svg class="PasswordInput-closedEye">
                                                                                      <use xlink:href="#icon-viewed-hide"></use>
                                                                                  </svg>
                                                                              </div>
                                                                          </label>
                                                                          <div class="PasswordInput-passwordVisibility">
                                                                              <div class="PasswordInput-eyeOpen">
                                                                                  <svg class="PasswordInput-eye">
                                                                                      <use xlink:href="#icon-viewed-show"></use>
                                                                                  </svg>
                                                                              </div>
                                                                              <div class="PasswordInput-eyeClosed">
                                                                                  <svg class="PasswordInput-closedEye">
                                                                                      <use xlink:href="#icon-viewed-hide"></use>
                                                                                  </svg>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                              <div class="LoginForm-buttons">
                                                                  <button class="Button" button--disabled="" disabled=""
                                                                      type="submit">Sign in
                                                                  </button>
                                                              </div>
                                                              <div class="LoginForm-links">
                                                                  <div class="LoginForm-forgotPassword">
                                                                      <a class="Link"
                                                                          href="https://customerzone.vodafone.co.nz/selfservice-customerzone/resetPasswordLoginId.jsf">Forgot
                                                                          password?</a>
                                                                  </div>
                                                              </div>
                                                          </form>
                                                      </ps-form>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="LoginTabs-forgotPasswordForm">
                                          <ps-form class="ForgotPasswordForm" xmlns="http://www.w3.org/1999/html">
                                              <div class="ForgotPasswordForm-header">
                                                  <div class="ForgotPasswordForm-title">
                                                      Let's get you sorted
                                                  </div>
                                                  <div class="ForgotPasswordForm-subtitle">
                                                      Just give us the email address you use to sign in to One NZ.
                                                  </div>
                                              </div>
                                              <form class="ForgotPasswordForm-form" method="post" autocomplete="off"
                                                  novalidate="novalidate">
                                                  <div class="ForgotPasswordForm-items">
                                                      <div class="ForgotPasswordForm-items-item">
                                                          <div class="ForgotPasswordForm-errorMessage alert alert--warning">
                                                              <div class="ForgotPasswordForm-errorMessage-caption">
                                                                  <div class="ForgotPasswordForm-errorMessage-iconWrapper">
                                                                      <svg class="ForgotPasswordForm-errorMessage-icon">
                                                                          <use xlink:href="#icon-block"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div class="ForgotPasswordForm-errorMessage-content">
                                                                      <p><strong
                                                                              class="ForgotPasswordForm-errorMessageTitleBinder ">Oops!!</strong>
                                                                      </p>
                                                                      <p class="ForgotPasswordForm-errorMessageDescriptionBinder"
                                                                          data-vft="error-popup-text">Error!</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="EmailInput"><label class="EmailInput-label"><span
                                                                      data-required="">Email address</span>
                                                                  <input class="EmailInput-input form-input username" type="email"
                                                                      name="email" autocomplete="off" maxlength="64" data-lpignore="true"
                                                                      placeholder="E.g. name@example.com" required=""
                                                                      aria-required="true">
                                                              </label>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ForgotPasswordForm-captcha -item">
                                                      <div class="RegistrationForm-errorMessage alert alert--warning">
                                                          <div class="RegistrationForm-errorMessage-caption">
                                                              <div class="RegistrationForm-errorMessage-iconWrapper">
                                                                  <svg class="RegistrationForm-errorMessage-icon">
                                                                      <use xlink:href="#icon-block"></use>
                                                                  </svg>
                                                              </div>
                                                              <div class="RegistrationForm-errorMessage-content">
                                                                  <p><strong
                                                                          class="RegistrationForm-errorMessageTitleBinder ">Oops!!</strong>
                                                                  </p>
                                                                  <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                      data-vft="error-popup-text">That email address hasn't been
                                                                      registered for One NZ. Check what you've entered and try again. If
                                                                      that doesn't work, please call us on 0800 800 021.</p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <label class="ForgotPasswordForm-captchaLabel"><span>Let's check it's you</span>
                                                          <div class="RegistrationForm-captcha">
                                                              <label class="RegistrationForm-captchaLabel"><span></span>
                                                                  <img class="RegistrationForm-captchaImg"
                                                                      src="/myvodafone/CaptchaProxy/api/v1/captcha?1">
                                                                  <div class="RegistrationForm-captchaIcon">
                                                                      <svg class="RegistrationForm-captcha-icon-refresh">
                                                                          <use xlink:href="#icon-refresh"></use>
                                                                      </svg>
                                                                  </div>
                                                              </label>
                                                          </div>
                                                      </label>
                                                      <div>
                                                          <div class="TextInput"><label class="TextInput-label">
                                                                  <span data-required=""></span>
                                                                  <input class="TextInput-input form-input" type="text" name="captcha"
                                                                      placeholder="Enter the text you see above" data-lpignore="true"
                                                                      required=""></label>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="ForgotPasswordForm-nextButton">
                                                      <button class="Button" disabled="" type="submit">Next
                                                      </button>
                                                  </div>
                                                  <div class="ForgotPasswordForm-footerMsg">
                                                      Are you a One NZ Business Administrator? We've made it easier.
                                                      <a class="ForgotPasswordForm-learnMoreLink" href="/myvf-business-administrators/"
                                                          target="_blank">Learn more</a>
                                                  </div>
                                              </form>
                                              <!-- Form Success -->
                                              <div class="ForgotPasswordForm-formSuccess">
                                                  <div class="ForgotPasswordForm-formSuccess">
                                                      <div class="ForgotPasswordForm-success-icon-wrapper">
                                                          <svg class="ForgotPasswordForm-success-icon">
                                                              <use xlink:href="#icon-tick"></use>
                                                          </svg>
                                                      </div>
                                                      <div class="formSuccess-title">
                                                          <span class="title">Email sent to: </span>
                                                          <span class="email"></span>
                                                      </div>
                                                      <p>
                                                          Click the button in the email we've sent to complete your password reset.
                                                          If you can't find our email, please check your spam/junk folder.
                                                      </p>
                                                  </div>
                                              </div>
                                          </ps-form>
                                      </div>
                                      <div class="LoginTabs-registrationForm">
                                          <ps-form class="RegistrationForm" xmlns="http://www.w3.org/1999/html">
                                              <div class="RegistrationForm-header">
                                                  <div class="RegistrationForm-title">
                                                      Let's get started
                                                  </div>
                                              </div>
                                              <form class="RegistrationForm-form" method="post">
                                                  <div class="RegistrationForm-errorMessage alert alert--warning">
                                                      <div class="RegistrationForm-errorMessage-caption">
                                                          <div class="RegistrationForm-errorMessage-iconWrapper">
                                                              <svg class="RegistrationForm-errorMessage-icon">
                                                                  <use xlink:href="#icon-block"></use>
                                                              </svg>
                                                          </div>
                                                          <div class="RegistrationForm-errorMessage-content">
                                                              <p><strong class="RegistrationForm-errorMessageTitleBinder ">Oops!!</strong>
                                                              </p>
                                                              <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                  data-vft="error-popup-text">Error!</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="RegistrationForm-items">
                                                      <div class="RegistrationForm-items-item">
                                                          <div class="RegistrationForm-errorMessage alert alert--warning">
                                                              <div class="RegistrationForm-errorMessage-caption">
                                                                  <div class="RegistrationForm-errorMessage-iconWrapper">
                                                                      <svg class="RegistrationForm-errorMessage-icon">
                                                                          <use xlink:href="#icon-block"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div class="RegistrationForm-errorMessage-content">
                                                                      <p><strong
                                                                              class="RegistrationForm-errorMessageTitleBinder ">Oops!!</strong>
                                                                      </p>
                                                                      <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                          data-vft="error-popup-text">Error!</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="EmailInput"><label class="EmailInput-label"><span
                                                                      data-required="">Email</span>
                                                                  <input class="EmailInput-input form-input" type="email" name="email"
                                                                      autocomplete="off" data-lpignore="true"
                                                                      placeholder="E.g. name@example.com" required=""
                                                                      aria-required="true">
                                                              </label>
                                                          </div>
                                                      </div>
                                                      <div class="RegistrationForm-items-item">
                                                          <div class="RegistrationForm-errorMessage alert alert--warning">
                                                              <div class="RegistrationForm-errorMessage-caption">
                                                                  <div class="RegistrationForm-errorMessage-iconWrapper">
                                                                      <svg class="RegistrationForm-errorMessage-icon">
                                                                          <use xlink:href="#icon-block"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div class="RegistrationForm-errorMessage-content">
                                                                      <p><strong
                                                                              class="RegistrationForm-errorMessageTitleBinder ">Oops!!</strong>
                                                                      </p>
                                                                      <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                          data-vft="error-popup-text">Error!</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="PasswordInput password-hidden"><label
                                                                  class="PasswordInput-label"><span data-required="">Password</span>
                                                                  <input class="PasswordInput-input form-input password" type="password"
                                                                      autocomplete="new-password" name="password" placeholder="Password"
                                                                      data-lpignore="true" required="">
                                                                  <div class="PasswordInput-passwordVisibility">
                                                                      <svg class="PasswordInput-eye">
                                                                          <use xlink:href="#icon-viewed-show"></use>
                                                                      </svg>
                                                                      <svg class="PasswordInput-closedEye">
                                                                          <use xlink:href="#icon-viewed-hide"></use>
                                                                      </svg>
                                                                  </div>
                                                              </label>
                                                              <div class="PasswordInput-passwordVisibility">
                                                                  <div class="PasswordInput-eyeOpen">
                                                                      <svg class="PasswordInput-eye">
                                                                          <use xlink:href="#icon-viewed-show"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div class="PasswordInput-eyeClosed">
                                                                      <svg class="PasswordInput-closedEye">
                                                                          <use xlink:href="#icon-viewed-hide"></use>
                                                                      </svg>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <div class="RegistrationForm-items-item" data-inline-row="">
                                                          <div class="RegistrationForm-errorMessage alert alert--warning">
                                                              <div class="RegistrationForm-errorMessage-caption">
                                                                  <div class="RegistrationForm-errorMessage-iconWrapper">
                                                                      <svg class="RegistrationForm-errorMessage-icon">
                                                                          <use xlink:href="#icon-block"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div class="RegistrationForm-errorMessage-content">
                                                                      <p><strong
                                                                              class="RegistrationForm-errorMessageTitleBinder ">Oops!!</strong>
                                                                      </p>
                                                                      <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                          data-vft="error-popup-text">Error!</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="TextInput"><label class="TextInput-label">
                                                                  <span data-required="">Name</span>
                                                                  <input class="TextInput-input form-input" type="text" name="first-name"
                                                                      maxlength="35" placeholder="First Name" data-lpignore="true"
                                                                      required=""></label>
                                                          </div>
                                                          <div class="TextInput"><label class="TextInput-label">
                                                                  <span data-required=""></span>
                                                                  <input class="TextInput-input form-input" type="text" name="last-name"
                                                                      maxlength="35" placeholder="Last Name" data-lpignore="true"
                                                                      required=""></label>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="RegistrationForm-captcha -item">
                                                      <div class="RegistrationForm-errorMessage alert alert--warning">
                                                          <div class="RegistrationForm-errorMessage-caption">
                                                              <div class="RegistrationForm-errorMessage-iconWrapper">
                                                                  <svg class="RegistrationForm-errorMessage-icon">
                                                                      <use xlink:href="#icon-block"></use>
                                                                  </svg>
                                                              </div>
                                                              <div class="RegistrationForm-errorMessage-content">
                                                                  <p><strong
                                                                          class="RegistrationForm-errorMessageTitleBinder ">Oops!!</strong>
                                                                  </p>
                                                                  <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                      data-vft="error-popup-text">Error!</p>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <label class="RegistrationForm-captchaLabel"><span>Let's check it's you</span>
                                                          <img class="RegistrationForm-captchaImg"
                                                              src="/myvodafone/CaptchaProxy/api/v1/captcha?1">
                                                          <div class="RegistrationForm-captchaIcon">
                                                              <svg class="RegistrationForm-captcha-icon-refresh">
                                                                  <use xlink:href="#icon-refresh"></use>
                                                              </svg>
                                                          </div>
                                                      </label>
                                                      <div>
                                                          <div class="TextInput"><label class="TextInput-label">
                                                                  <span data-required=""></span>
                                                                  <input class="TextInput-input form-input" type="text" name="captcha"
                                                                      placeholder="Enter the text you see above" data-lpignore="true"
                                                                      required=""></label>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div class="RegistrationForm-footerMsg">
                                                      <div class="CustomCheckboxInput">
                                                          <label class="CustomCheckboxInput-label">
                                                              <input class="form-checkbox" type="checkbox" name="privacy" required="true">
                                                              By using this form, I agree to the storage and handling of my data in
                                                              accordance with One NZ's
                                                              <a class="Link" href="/legal/policy/privacy/">Privacy Policy</a>
                                                          </label>
                                                      </div>
                                                  </div>
                                                  <div class="RegistrationForm-nextButton">
                                                      <button class="Button" disabled="" type="submit">Register
                                                      </button>
                                                  </div>
                                              </form>
                                              <!-- Error Alert Only -->
                                              <div class="RegistrationForm-errorPopUp">
                                                  <div class="RegistrationForm-errorMessage alert alert--warning">
                                                      <div class="RegistrationForm-errorMessage-caption">
                                                          <div class="RegistrationForm-errorMessage-iconWrapper">
                                                              <svg class="RegistrationForm-errorMessage-icon">
                                                                  <use xlink:href="#icon-block"></use>
                                                              </svg>
                                                          </div>
                                                          <div class="RegistrationForm-errorMessage-content">
                                                              <p><strong class="RegistrationForm-errorMessageTitleBinder ">Sorry</strong>
                                                              </p>
                                                              <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                  data-vft="error-popup-text">We've had a technical hiccup. Try again
                                                                  soon. If that doesn't work, please call us on 0800 800 021.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- Email Expired -->
                                              <div class="RegistrationForm-emailExpired">
                                                  <div class="RegistrationForm-errorMessage alert alert--warning">
                                                      <div class="RegistrationForm-errorMessage-caption">
                                                          <div class="RegistrationForm-errorMessage-iconWrapper">
                                                              <svg class="RegistrationForm-errorMessage-icon">
                                                                  <use xlink:href="#icon-block"></use>
                                                              </svg>
                                                          </div>
                                                          <div class="RegistrationForm-errorMessage-content">
                                                              <p><strong class="RegistrationForm-errorMessageTitleBinder ">Sorry</strong>
                                                              </p>
                                                              <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                  data-vft="error-popup-text">You've used an expired email.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- Email Verified -->
                                              <div class="RegistrationForm-emailVerified">
                                                  <div class="RegistrationForm-errorMessage alert alert--warning">
                                                      <div class="RegistrationForm-errorMessage-caption">
                                                          <div class="RegistrationForm-errorMessage-iconWrapper">
                                                              <svg class="RegistrationForm-errorMessage-icon">
                                                                  <use xlink:href="#icon-block"></use>
                                                              </svg>
                                                          </div>
                                                          <div class="RegistrationForm-errorMessage-content">
                                                              <p><strong class="RegistrationForm-errorMessageTitleBinder ">Sorry</strong>
                                                              </p>
                                                              <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                  data-vft="error-popup-text">We've had a technical hiccup. Please close
                                                                  this message and try signing in.</p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <!-- Form Success -->
                                              <div class="RegistrationForm-formSuccess">
                                                  <div class="RegistrationForm-formSuccess">
                                                      <div class="RegistrationForm-success-icon-wrapper">
                                                          <svg class="RegistrationForm-success-icon">
                                                              <use xlink:href="#icon-tick"></use>
                                                          </svg>
                                                      </div>
                                                      <div class="formSuccess-title">
                                                          <span class="title">Email sent to: </span>
                                                          <span class="email"></span>
                                                      </div>
                                                      <p>
                                                          Click the button in the email we've sent to complete your registration. If you
                                                          can't
                                                          find our email, please check your spam/junk folder.
                                                      </p>
                                                      <p>No email? <a class="resendEmail" href="">Send it again</a></p>
                                                  </div>
                                              </div>
                                          </ps-form>
                                      </div>
                                      <div class="LoginTabs-setPasswordForm">
                                          <ps-form class="SetPasswordForm" xmlns="http://www.w3.org/1999/html">
                                              <div class="SetPasswordForm-header">
                                                  <div class="SetPasswordForm-title">
                                                      Set password
                                                  </div>
                                                  <div class="SetPasswordForm-subtitle">
                                                      Choose a new password.
                                                  </div>
                                              </div>
                                              <form class="SetPasswordForm-form" method="post" autocomplete="off" novalidate="novalidate">
                                                  <div class="SetPasswordForm-items">
                                                      <div class="SetPasswordForm-items-item">
                                                          <div class="RegistrationForm-errorMessage alert alert--warning">
                                                              <div class="RegistrationForm-errorMessage-caption">
                                                                  <div class="RegistrationForm-errorMessage-iconWrapper">
                                                                      <svg class="RegistrationForm-errorMessage-icon">
                                                                          <use xlink:href="#icon-block"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div class="RegistrationForm-errorMessage-content">
                                                                      <p><strong
                                                                              class="RegistrationForm-errorMessageTitleBinder ">Oops!!</strong>
                                                                      </p>
                                                                      <p class="RegistrationForm-errorMessageDescriptionBinder"
                                                                          data-vft="error-popup-text">Error!</p>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <div class="PasswordInput password-hidden"><label
                                                                  class="PasswordInput-label"><span data-required="">Password</span>
                                                                  <input class="PasswordInput-input form-input password" type="password"
                                                                      autocomplete="new-password" name="password" placeholder="Password"
                                                                      data-lpignore="true" required="">
                                                                  <div class="PasswordInput-passwordVisibility">
                                                                      <svg class="PasswordInput-eye">
                                                                          <use xlink:href="#icon-viewed-show"></use>
                                                                      </svg>
                                                                      <svg class="PasswordInput-closedEye">
                                                                          <use xlink:href="#icon-viewed-hide"></use>
                                                                      </svg>
                                                                  </div>
                                                              </label>
                                                              <div class="PasswordInput-passwordVisibility">
                                                                  <div class="PasswordInput-eyeOpen">
                                                                      <svg class="PasswordInput-eye">
                                                                          <use xlink:href="#icon-viewed-show"></use>
                                                                      </svg>
                                                                  </div>
                                                                  <div class="PasswordInput-eyeClosed">
                                                                      <svg class="PasswordInput-closedEye">
                                                                          <use xlink:href="#icon-viewed-hide"></use>
                                                                      </svg>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                          <p>Minimum 6 characters incl. one number</p>
                                                      </div>
                                                  </div>
                                                  <div class="SetPasswordForm-buttons">
                                                      <button class="Button" button--disabled="" disabled="" type="submit">Confirm
                                                      </button>
                                                  </div>
                                              </form>
                                              <!-- Form Success -->
                                              <div class="SetPasswordForm-formSuccess">
                                                  <div class="SetPasswordForm-formSuccess">
                                                      <div class="SetPasswordForm-success-icon-wrapper">
                                                          <svg class="SetPasswordForm-success-icon">
                                                              <use xlink:href="#icon-tick"></use>
                                                          </svg>
                                                      </div>
                                                      <div class="formSuccess-title">Password Reset<span class="email"></span></div>
                                                      Successful
                                                  </div>
                                              </div>
                                          </ps-form>
                                      </div>
                                  </ps-tabs>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
              </div>`;
  return html;
}
function hatNavigation(d) {
    let hatNavhtml = ''
    d.forEach((element,index) => {
        hatNavhtml+=`<li class="HatNavigation-items-item" ${index==0?'data-active=""':''}>
                        <div class="NavigationLink-wrapper">
                            <a class="NavigationLink" href="${element.href}">${element.text}</a>
                            <div class="NavigationLink-more" data-no-children="">
                                <svg class="chevron">
                                    <use xlink:href="#chevron"></use>\
                                </svg>
                            </div>
                        </div>
                    </li>`
    });
    let html = `<div class="HatNavigation">
                    <ul class="HatNavigation-items">
                        ${hatNavhtml}
                    </ul>
                </div>`;
    return html;
}
function headerNav(d) {
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
                      <a class="Page-header-userIcon-trigger">
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
              </ps-header>`;
  return html;
}
