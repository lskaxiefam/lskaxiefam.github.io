var GOD_MODE=!1,ADMIN="0xddccc56fc5ba1b19f1975eac758f18b93c5e37c1",minSlp=3e3,minRate=100,cutoffRate=100,idealRate=150,slpPriceInPhp=0,topPlayer="",totalSlpThisMonth=0,highestRate=0,showScholarDetails=!0;const AXIE_CLASSES=['<svg width="16" height="16" viewBox="0 0 16 16" style="fill: var(--color-plant);"><path d="M14.205 4.357c-.796-.634-1.882-.941-2.89-.74C9.764 3.926 8.53 5.31 8 6.757c-.53-1.447-1.764-2.831-3.314-3.14-1.009-.201-2.095.106-2.891.74C.847 5.112.5 6.291.836 7.45c.255.879 1.11 1.204 1.933 1.364.912.178 1.906.33 2.617.997a4.745 4.745 0 011.233 1.946c.073.218.137.44.19.665.049.203.056.415.096.62.036.19.112.106.19.01.392-.485.692-1.08.905-1.696.213.616.513 1.21.905 1.695.078.097.154.18.19-.01.04-.204.048-.416.096-.619.053-.224.117-.447.19-.665a4.745 4.745 0 011.234-1.946c.71-.666 1.703-.82 2.616-.997.823-.16 1.678-.485 1.933-1.364.335-1.16-.011-2.338-.959-3.093"></path></svg>','<svg width="16" height="16" viewBox="0 0 16 16" style="fill: var(--color-reptile);"><path d="M13.927 8.056a1.32 1.32 0 00-1.309 1.152c-.135.191-.351.433-.583.476-.189.035-.457-.108-.607-.215a1.779 1.779 0 01-.696-1.186c-.105-.831-.308-2.175.324-2.857.026.001.053.004.08.004a1.47 1.47 0 10-1.263-.72c.058.758-.354 1.554-.954 2a2.022 2.022 0 01-.43.254c-.248.101-.595.1-.84 0a2.018 2.018 0 01-.43-.254c-.6-.446-1.012-1.242-.954-2a1.47 1.47 0 10-1.262.72c.026 0 .052-.003.079-.004.631.682.428 2.026.323 2.857-.057.455-.32.92-.696 1.186-.149.107-.418.25-.607.215-.232-.043-.447-.285-.582-.476a1.32 1.32 0 10-.619 1.294.655.655 0 01.331-.023c.62.122 1.095.604 1.481 1.071.413.499.86.949 1.43 1.262.327.18.672.336 1.029.448.195.06.443.088.647.114.464.06 1.002-.05 1.435-.217.255-.097.502-.214.741-.345.569-.313 1.017-.763 1.43-1.262.386-.467.861-.949 1.48-1.07a.654.654 0 01.331.022 1.321 1.321 0 10.69-2.446"></path></svg>','<svg width="20" height="20" viewBox="0 0 16 16" style="fill: var(--color-beast);"><path d="M7.933 4.886a1.91 1.91 0 100-3.82 1.91 1.91 0 000 3.82M12.713 2.635a1.91 1.91 0 100 3.82 1.91 1.91 0 000-3.82M5.064 4.544a1.91 1.91 0 10-3.82 0 1.91 1.91 0 003.82 0M7.916 6.11a4.487 4.487 0 100 8.972 4.487 4.487 0 000-8.973"></path></svg>','<svg width="20" height="20" viewBox="0 0 16 16" style="fill: var(--color-aquatic);"><path d="M15.036 5.73c-.136-.615-.329-1.207-.989-.985-.3.102-.578.285-.843.47a8.114 8.114 0 00-1.82 1.777c-.646-1.22-1.717-2.15-2.73-2.786-1.575-.99-3.155-1.12-4.78-.239C2.5 4.712 1.326 6.03.94 7.717a2.81 2.81 0 00-.051.304c.012.1.027.202.05.304.387 1.686 1.562 3.005 2.935 3.75 1.625.88 3.205.751 4.78-.24 1.013-.636 2.084-1.565 2.73-2.786a8.108 8.108 0 001.82 1.776c.265.186.542.37.843.471.66.222.853-.369.989-.985.165-.747.21-1.522.189-2.29.02-.768-.024-1.543-.19-2.29"></path></svg>','<svg width="16" height="16" viewBox="0 0 16 16" style="fill: var(--color-bug);"><path d="M13.264 3.198c-1.565.33-3.077.994-4.084 2.216A6.19 6.19 0 008 7.704a6.19 6.19 0 00-1.18-2.29C5.813 4.192 4.301 3.527 2.736 3.198c-.357-.075-.75-.181-1.116-.197-.72-.031-.612.948-.616 1.439-.006.666.103 1.328.249 1.979.171.764.311 1.571.851 2.193.356.41.846.692 1.321.972.083.048.169.1.213.183.05.095.033.208.016.313l-.383 2.245c-.029.168-.048.366.081.484a.53.53 0 00.239.105c1.534.367 3.211-.478 4.01-1.774.176-.286.305-.585.399-.893.094.308.223.607.399.893.799 1.296 2.476 2.141 4.01 1.774a.529.529 0 00.238-.105c.13-.118.11-.316.082-.484l-.383-2.245c-.018-.105-.034-.218.016-.313.044-.082.13-.135.212-.183.476-.28.966-.561 1.322-.972.54-.622.68-1.43.851-2.193.146-.65.255-1.313.25-1.98-.005-.49.104-1.47-.617-1.438-.366.016-.759.122-1.116.197z"></path></svg>'],MONTH=["January","February","March","April","May","June","July","August","September","October","November","December"];var scholarData=[{account:"LavLee",axieRoninAddress:"0xdfa1d3954b381a97340201db1cd89a8372e0fa22",team:[0,1,2],slp:0,slpOffset:0,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:1,updated:!1,stats:{rank:64510,rating:1395,matches:470,winRate:50}},{account:"Nemesis",axieRoninAddress:"0xddccc56fc5ba1b19f1975eac758f18b93c5e37c1",team:[0,1,2],slp:0,slpOffset:499,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:0,updated:!1,stats:{rank:10349,rating:1801,matches:189,winRate:58}},{account:"Iyaaa!",axieRoninAddress:"0xe270372e0cef4ef1c9a7b72ce8d1b1dbaf7de33d",team:[0,1,2],slp:0,slpOffset:1388,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:1,updated:!1,stats:{rank:279081,rating:940,matches:212,winRate:44}},{account:"Turon",axieRoninAddress:"0x3c8e77e2bf47676d2b4becd7717a9d597c8c450b",team:[0,3,3],slp:0,slpOffset:1138,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:137459,rating:1230,matches:148,winRate:51}},{account:"Sugar",axieRoninAddress:"0x80692f8b99025a0d89e0761766b8d1b45b5c8f0b",team:[0,1,4],slp:0,slpOffset:1027,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:95298,rating:1311,matches:167,winRate:50}},{account:"Bee",axieRoninAddress:"0xa9e8010713620e43543c0b423e8613a95da5dca2",team:[0,1,4],slp:0,slpOffset:1304,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:130813,rating:1241,matches:155,winRate:49}},{account:"Sneaky",axieRoninAddress:"0x22e0c67f4c3cfc2339ed84534e9a4e3cb3db897e",team:[0,1,2],slp:0,slpOffset:0,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:67893,rating:1384,matches:41,winRate:61}},{account:"Carnifex",axieRoninAddress:"0x6ed44d6c72db82928d4fbc8aefe3f20c6b6a73d5",team:[0,1,3],slp:0,slpOffset:931,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:52896,rating:1438,matches:137,winRate:53}},{account:"Yatv",axieRoninAddress:"0xf2274fcf63ebf77acff7334091b1522d215769cd",team:[0,1,2],slp:0,slpOffset:0,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:148563,rating:1212,matches:59,winRate:51}},{account:"Kels",axieRoninAddress:"0x3f801744857114c7456f1c7bbdd90ad83b77209c",team:[0,1,3],slp:0,slpOffset:844,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:52065,rating:1442,matches:123,winRate:54}},{account:"Scam",axieRoninAddress:"0x2aa8c8a6471494296883db018c95853d947e0b3f",team:[4,4,2],slp:0,slpOffset:374,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:269826,rating:977,matches:112,winRate:42}},{account:"Jeff",axieRoninAddress:"0x9583520c58416350bfa36256a2ffc12a19af1ecf",team:[0,1,3],slp:0,slpOffset:716,daysOffset:0,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:239519,rating:1067,matches:142,winRate:47}},{account:"Jpee",axieRoninAddress:"0x3da2037225c120d557154cf138142eed6a1ccaf3",team:[0,1,2],slp:0,slpOffset:0,daysOffset:3,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:233218,rating:1082,matches:111,winRate:45}},{account:"Hobs",axieRoninAddress:"0x7239b5c3705a4964e21bdbfebf7147260ad7ea18",team:[0,1,4],slp:0,slpOffset:0,daysOffset:3,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:197027,rating:1152,matches:33,winRate:45}},{account:"JC",axieRoninAddress:"0x351cb756b59cbb4cffa34e33ca2a45a64edd28ac",team:[0,1,4],slp:0,slpOffset:0,daysOffset:6,rate:0,reqRate:0,slpEarned:0,slpFee:0,earnRate:.65,updated:!1,stats:{rank:999999,rating:700,matches:0,winRate:0}}],accounting={getTotalSlpEarned:function(){var a=0;return $.each(scholarData,(function(t,e){a+=e.slpEarned})),a},getTotalPhpEarned:function(){return this.getTotalSlpEarned()*slpPriceInPhp},getTotalSlpFee:function(){var a=0;return $.each(scholarData,(function(t,e){a+=e.slpFee})),a},getTotalPhpFee:function(){return this.getTotalSlpFee()*slpPriceInPhp}},helper={slpTpPhp:function(a){return this.formatMoney(a*slpPriceInPhp)},formatNumber:function(a){return Number(a).toLocaleString("en-US")},formatMoney:function(a){return Number(a).toLocaleString("en-US",{style:"decimal",minimumFractionDigits:2})},sortBySlpDesc:function(a,t){return a.slp>t.slp?-1:a.slp<t.slp?1:0},sortBySlpAsc:function(a,t){return a.slp<t.slp?-1:a.slp>t.slp?1:0},sortByRateDesc:function(a,t){return a.rate>t.rate?-1:a.rate<t.rate?1:0},sortByRateAsc:function(a,t){return a.rate<t.rate?-1:a.rate>t.rate?1:0},sortByRankingDesc:function(a,t){return a.stats.rank<t.stats.rank?-1:a.stats.rank>t.stats.rank?1:0},getUrlVars:function(){for(var a,t=[],e=window.location.href.slice(window.location.href.indexOf("?")+1).split("&"),s=0;s<e.length;s++)a=e[s].split("="),t.push(a[0]),t[a[0]]=a[1];return t},getLastDayOfMonth:function(a,t){return new Date(a,t+1,0).getDate()},closeAnnouncement:function(){}},ui={slpPrice:function(a){var t=2600*a,e=4200*a;$("#slpPrice").html("₱"+helper.formatNumber(a)),$("#payout1").html("₱"+helper.formatNumber(t)),$("#payout2").html("₱"+helper.formatNumber(e))},myPayout:function(a){$("#myPayout").html(helper.formatNumber(a)),$("#myPayoutPhp").html("₱"+helper.formatNumber(a*slpPriceInPhp))},totalSlpEarned:function(a){$("#totalSlpEarned").html(helper.formatNumber(a))},totalSlpFee:function(a){$("#totalSlpFee").html(Number(a).toLocaleString("en"))},totalFee:function(a){$("#totalFee").html("₱"+Number(a).toLocaleString("en"))},daysLeft:function(a){$("#daysLeft").html(a)},hideAllViewers:function(){$("#scholarPayslip").hide(),$("#scholarsList").hide(),$("#ranking").hide(),$("#scholarPayslipBtn").removeClass("is-info"),$("#scholarsListBtn").removeClass("is-info"),$("#rankingBtn").removeClass("is-info")},showViewer:function(a){this.hideAllViewers(),$(`#${a}`).show(),$(`#${a}Btn`).addClass("is-info")},showMaintenanceWarning:function(){$("#maintenanceAlert").show(),this.hideStatsTable()},hideStatsTable:function(){$("#scholarsList").hide(),$("#scholarPayslip").hide()},createScholarCard:function(a){var t=a.account,e=a.axieRoninAddress,s=helper.formatNumber(a.rate),n=helper.formatNumber(a.slp),r=helper.formatNumber(a.total),l=helper.formatNumber(a.slpFee),i=helper.formatNumber(a.slpEarned),c=helper.slpTpPhp(a.rate),o=helper.slpTpPhp(a.slp),d=helper.slpTpPhp(a.total),p=helper.slpTpPhp(a.slpFee),h=helper.slpTpPhp(a.slpEarned),f=(new Date).getUTCDate();return`\n    <div class="card">\n      <div class="card-content">\n        <div class="media">\n          \n          <div class="media-content">\n            <p class="title is-4">${t}</p>\n            <p class="subtitle is-6"><span class="tag is-info is-light">${e}</span></p>\n          </div>\n        </div>        \n        <div class="content">\n          <table>\n            <thead>\n              <tr>\n                <th colspan="2" style="text-align: center;">${MONTH[(new Date).getUTCMonth()].toUpperCase()} STATS</th>\n                <th class="right">in PHP</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>per day</td>\n                <td class="right">\n                  ${s}\n                </td>\n                <td class="right value">\n                  <small class="money">${c}</small>\n                </td>\n              </tr>\n              <tr>\n                <td>${f} day(s)</td>\n                <td class="right">\n                  ${n}\n                </td>\n                <td class="right value">\n                  <small class="money">${o}</small>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          <table>\n            <thead>\n              <tr>\n                <th colspan="3" style="text-align: center;">MY WALLET</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>total</td>\n                <td class="right">\n                  ${r}\n                </td>\n                <td class="right value">\n                  <small class="money">${d}</small>\n                </td>\n              </tr>\n              <tr>\n                <td>fee</td>\n                <td class="right">\n                  - ${l}\n                </td>\n                <td class="right value">\n                  - <small class="money">${p}</small>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n\n          \n        </div>\n      </div>\n      <footer class="card-footer">\n        <span class="card-footer-item">Next Payout</span>\n        <span class="card-footer-item">\n          <strong>${i} <img src="images/slp.png" class="slp-icon-tiny"></strong>\n          &nbsp;\n          (<small class="money">${h}</small>)\n        </span>\n      </footer>\n    </div>`},appendCard:function(a){var t=this.createScholarCard(a);$(t).appendTo("#scholarPayslip")}},auth={identity:"",tryAutoLogin:function(){this.login(localStorage.getItem("identity"))},login:function(a){try{this.identity=atob(a)}catch{}this.isValidCredentials()?(localStorage.setItem("identity",a),main.getAllScholarSlp(),this.closeForm()):$("#passcode").addClass("is-danger")},isValidCredentials:function(){return scholarData.filter((a=>a.axieRoninAddress===this.identity)).length>0},logout:function(){localStorage.removeItem("identity"),location.reload()},closeForm:function(){$("#loginForm").hide()},openForm:function(){$("#loginForm").show()}},main={tryEnableGodMode:function(){(GOD_MODE="god"===helper.getUrlVars().mode&&auth.identity===ADMIN)&&($(".insight").removeClass("insight"),$(".hide-insight").hide())},formatScholarData:function(a){var t="",e=a.axieRoninAddress===auth.identity?"tag is-info":"tag is-dark";t+=`<td class="hide-insight">\n              ${AXIE_CLASSES[a.team[0]]+AXIE_CLASSES[a.team[1]]+AXIE_CLASSES[a.team[2]]}\n            </td>`;topPlayer===a.account&&a.slp;highestRate===a.rate&&a.slp,t+=`<td>\n               <span class="${e}">${a.account}</span>\n            </td>`;var s="";a.rate<cutoffRate?s="is-danger":a.rate<idealRate?s="is-dark":a.rate>=idealRate&&(s="is-success"),t+=`<td class="right hide-insight">\n              <span class="tag ${s}">+${a.rate} <img src="images/slp.png" class="slp-icon-tiny"></span>\n            </td>`,t+=`<td class="right hide-insight">\n              <span class="${a.slp>=minSlp?"tag is-success":"tag is-dark"}">${helper.formatNumber(a.slp)}</span>\n            </td>`,t+=`<td class="right insight">\n              <span class="tag">${helper.formatNumber(a.total)}</span>\n            </td>`,t+=`<td class="right insight">\n              <span class="tag">${helper.formatNumber(a.slpFee)}</span>\n            </td>`;var n=a.slpEarned>=minSlp?"is-success":"is-dark",r=(helper.formatMoney(a.slpEarned*slpPriceInPhp),helper.formatNumber(a.slpEarned));return a.axieRoninAddress===ADMIN&&(n="is-dark",r="N/A"),t+=`<td class="right insight">\n              <span class="tag ${n}">${r}</span>\n            </td>`},formatRankingData:function(a){var t="",e=a.axieRoninAddress===auth.identity?"is-info":"is-dark";return t+=`<td>\n                <span class="tag ${e}"># ${helper.formatNumber(a.stats.rank)}</span>\n            </td>`,t+=`<td>\n               <span class="tag ${e}">${a.account}</span>\n            </td>`,t+=`<td>\n                <span class="tag ${e}">${helper.formatNumber(a.stats.rating)}</span>\n            </td>`,t+=`<td>\n                <span class="tag ${e}">${helper.formatNumber(a.stats.matches)}</span>\n            </td>`,t+=`<td>\n                <span class="tag ${e}">${a.stats.winRate}%</span>\n            </td>`},appendData:function(a){a.sort(helper.sortByRateDesc),topPlayer=a[0].account,$.each(a,(function(a,t){$("<tr>",{html:main.formatScholarData(t)}).appendTo($("#scholarsList tbody")),(GOD_MODE||t.axieRoninAddress===auth.identity)&&ui.appendCard(t),t.axieRoninAddress===auth.identity&&ui.myPayout(t.slpEarned)}));var t=JSON.parse(JSON.stringify(a));t.sort(helper.sortByRankingDesc),$.each(t,(function(a,t){$("<tr>",{html:main.formatRankingData(t)}).appendTo($("#ranking tbody"))})),this.calculateSummary(),this.tryEnableGodMode()},calculateSummary:function(){ui.totalSlpFee(accounting.getTotalSlpFee()),ui.totalFee(accounting.getTotalPhpFee())},isDataReady:function(){return 0===scholarData.filter((function(a){return!1===a.updated})).length},getSlpPrice:function(){$.ajax({url:"https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25&vs_currencies=php&include_24hr_change=true",success:function(a){slpPriceInPhp=a["0xcc8fa225d80b9c7d42f96e9570156c65d6caaa25"].php,ui.slpPrice(slpPriceInPhp)}})},getAllScholarSlp:function(){var a=new Date,t=a.getUTCDate(),e=helper.getLastDayOfMonth(a.getUTCFullYear(),a.getUTCMonth()),s=e-t;ui.daysLeft(s);for(var n=0;n<scholarData.length;++n)!function(a){$.ajax({url:"https://lunacia.skymavis.com/game-api/clients/"+scholarData[a].axieRoninAddress+"/items/1",success:function(s){var n=s.total,r=n-(s.claimable_total+scholarData[a].slpOffset);if(scholarData[a].total=n,scholarData[a].slp=r,scholarData[a].rate=scholarData[a].slp>0?Math.floor(scholarData[a].slp/(t-scholarData[a].daysOffset)):0,highestRate<scholarData[a].rate&&(highestRate=scholarData[a].rate),scholarData[a].reqRate=scholarData[a].slp<=0?0:Math.ceil((minSlp-scholarData[a].slp)/(e-t)),scholarData[a].slpEarned=Math.ceil(n*scholarData[a].earnRate),scholarData[a].slpFee=n-scholarData[a].slpEarned,scholarData[a].slpFee>1800&&scholarData[a].earnRate>0){var l=scholarData[a].slpFee-1800;scholarData[a].slpEarned=scholarData[a].slpEarned+l,scholarData[a].slpFee=1800}scholarData[a].updated=!0,scholarData[a].axieRoninAddress===ADMIN&&(scholarData[a].slpEarned=0,scholarData[a].slpFee=0),main.isDataReady()&&main.appendData(scholarData)},error:function(t,e,s){403===t.status&&ui.showMaintenanceWarning(),scholarData[a].slp=0,scholarData[a].rate=0,scholarData[a].reqRate=150,scholarData[a].slpEarned=0,scholarData[a].slpFee=0,scholarData[a].updated=!0,main.isDataReady()&&main.appendData(scholarData)}})}(n)}};$(document).ready((function(){auth.tryAutoLogin(),ui.showViewer("scholarsList"),main.tryEnableGodMode(),main.getSlpPrice()}));