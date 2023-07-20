(()=>{"use strict";var e={426:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(81),o=a.n(n),r=a(645),c=a.n(r),s=a(667),i=a.n(s),d=new URL(a(638),a.b),f=c()(o()),y=i()(d);f.push([e.id,`\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  text-decoration: none;\n  color: black;\n  font-family: Verdana, Geneva, Tahoma, sans-serif; \n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  place-items: center;\n  padding: 40px;\n  background: url(${y});\n  background-repeat: repeat;\n}\n\np {\n  margin-top: 20px;\n}\n\nspan {\n  color: rgb(70, 70, 70);\n}\n\n.title {\n  font-family: 'Oleo SCript Swash Caps', cursive; \n  font-size: 4rem;\n  text-align: center;\n}\n\n.place {\n  font-weight: bold;\n  font-family: ''\n}\n\n.category {\n  font-size: large;\n  font-weight: 700;\n  color: rgb(50, 50, 171);\n}\n\ninput {\n  height: 2rem;\n  width: 300px;\n  margin-top: 40px;\n  padding-left: 5px;\n}\n\n.condition {\n  display: grid;\n  width: 300px;\n  margin-top: 20px;\n  place-items: center;\n  grid-template-columns: 1fr 2fr;\n}\n\n.condition-img {\n  height: 70px;\n  width: fit-content;\n}\n\n.condition-text {\n  margin: 0;\n  font-size: 1.5rem\n}\n\n.time {\n  margin-top: 40px;\n  font-size: 2rem;\n}\n\n.temp {\n  margin-top: 40px;\n  font-size: 4rem;\n}\n\n.forecast {\n  margin-top: 40px;\n  text-align: center;\n}\n\n.day {\n  height: 100px;\n  width: 80vw;\n  border: 2px solid black;\n  border-top: none;\n  background: linear-gradient(90deg, #9b65b6, #9198e5);\n}\n\n.one {\n  margin-top: 40px;\n  border-top: 2px solid black;\n}\n\n.forecast-data {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  width: 100%;\n  place-items: center;\n}`,""]);const l=f},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",n=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),n&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),n&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,n,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(n)for(var s=0;s<this.length;s++){var i=this[s][0];null!=i&&(c[i]=!0)}for(var d=0;d<e.length;d++){var f=[].concat(e[d]);n&&c[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),a&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=a):f[2]=a),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),t.push(f))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function a(e){for(var a=-1,n=0;n<t.length;n++)if(t[n].identifier===e){a=n;break}return a}function n(e,n){for(var r={},c=[],s=0;s<e.length;s++){var i=e[s],d=n.base?i[0]+n.base:i[0],f=r[d]||0,y="".concat(d," ").concat(f);r[d]=f+1;var l=a(y),m={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==l)t[l].references++,t[l].updater(m);else{var u=o(m,n);n.byIndex=s,t.splice(s,0,{identifier:y,updater:u,references:1})}c.push(y)}return c}function o(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,o){var r=n(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<r.length;c++){var s=a(r[c]);t[s].references--}for(var i=n(e,o),d=0;d<r.length;d++){var f=a(r[d]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}r=i}}},569:e=>{var t={};e.exports=function(e,a){var n=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var o=void 0!==a.layer;o&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,o&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},638:(e,t,a)=>{e.exports=a.p+"e757f484c8db8c117f63.jpg"}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,a),r.exports}a.m=e,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var o=n.length-1;o>-1&&!e;)e=n[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),a.b=document.baseURI||self.location.href,a.nc=void 0,(()=>{const e=a.p+"45ee5cf9be8d9afc0db3.png",t=a.p+"1e535ee7077b6d553204.png",n=a.p+"fbc5cc6950d2bb550103.png",o=a.p+"89e76f097992ce2fa52d.png",r=a.p+"318ea6a32fb28d31cd04.png",c=a.p+"e0c5aabbaa222e18dc97.png",s=a.p+"8e2d639a45ebc99b3efe.png",i=a.p+"4aafd369cbf2191aa643.png",d=a.p+"97428143c7ac86d2e433.png",f=a.p+"804381dccb9505de2d63.png";a(638);var y=a(379),l=a.n(y),m=a(795),u=a.n(m),p=a(569),h=a.n(p),g=a(565),v=a.n(g),w=a(216),_=a.n(w),x=a(589),b=a.n(x),S=a(426),T={};T.styleTagTransform=b(),T.setAttributes=v(),T.insert=h().bind(null,"head"),T.domAPI=u(),T.insertStyleElement=_(),l()(S.Z,T),S.Z&&S.Z.locals&&S.Z.locals;const C=document.querySelector(".location"),$=document.querySelector(".time"),q=document.querySelector(".temp"),R=document.querySelector(".condition-text"),O=document.querySelector(".condition-img"),z=document.querySelector(".humid-data"),M=document.querySelector(".wind-data"),P=document.querySelector(".precip-data"),k=document.querySelector(".uv-data"),F=document.querySelector(".vis-data"),H=document.querySelector(".one>.weekday"),L=document.querySelector(".one>.forecast-data>.avg-temp"),A=document.querySelector(".one>.forecast-data>.chance-of-rain"),E=document.querySelector(".two>.weekday"),I=document.querySelector(".two>.forecast-data>.avg-temp"),j=document.querySelector(".two>.forecast-data>.chance-of-rain"),W=document.querySelector(".three>.weekday"),N=document.querySelector(".three>.forecast-data>.avg-temp"),Z=document.querySelector(".three>.forecast-data>.chance-of-rain"),B=document.querySelector(".four>.weekday"),U=document.querySelector(".four>.forecast-data>.avg-temp"),D=document.querySelector(".four>.forecast-data>.chance-of-rain"),V=document.querySelector(".five>.weekday"),G=document.querySelector(".five>.forecast-data>.avg-temp"),J=document.querySelector(".five>.forecast-data>.chance-of-rain"),Q=document.querySelector(".six>.weekday"),K=document.querySelector(".six>.forecast-data>.avg-temp"),X=document.querySelector(".six>.forecast-data>.chance-of-rain"),Y=document.querySelector(".seven>.weekday"),ee=document.querySelector(".seven>.forecast-data>.avg-temp"),te=document.querySelector(".seven>.forecast-data>.chance-of-rain"),ae=document.getElementById("search"),ne={Sunny:f,Clear:f,"Partly cloudy":r,Cloudy:e,Overcast:e,Mist:t,"Patchy rain possible":c,"Patchy snow possible":i,"Patchy sleet possible":i,"Patchy freezing drizzle possible":d,"Thundery outbreaks possible":o,"Blowing snow":i,Blizzard:i,Fog:t,"Freezing fog":t,"Patchy light drizzle":d,"Light drizzle":d,"Freezing drizzle":c,"Heavy freezing drizzle":n,"Patchy light rain":c,"Light rain":c,"Moderate rain at times":c,"Moderate rain":c,"Heavy rain at times":n,"Heavy rain":n,"Light freezing rain":c,"Moderate or heavy freezing rain":n,"Light sleet":i,"Moderate or heavy sleet":i,"Patchy light snow":i,"Light snow":i,"Patchy moderate snow":i,"Moderate snow":i,"Patchy heavy snow":i,"Heavy snow":i,"Ice pellets":i,"Light rain shower":c,"Moderate or heavy rain shower":n,"Torrential rain shower":c,"Light sleet showers":i,"Moderate or heavy sleet showers":i,"Light snow showers":i,"Moderate or heavy snow showers":i,"Light showers of ice pellets":i,"Moderate or heavy showers of ice pellets":s,"Patchy light rain with thunder":o,"Moderate or heavy rain with thunder":o,"Patchy light snow with thunder":o,"Moderate or heavy snow with thunder":o};async function oe(e){const t=await async function(e){const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=85cbece73a8846868d5174556230607&q=${e}&days=7`,{mode:"cors"});return await t.json()}(e),a=parseInt(t.location.localtime.split(" ")[1].split(":")[0]),n=t.location.localtime.split(" ")[1].split(":")[1];console.log(t);const o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],r=(new Date).getDay(),c=[{name:o[r],sunrise:t.forecast.forecastday[0].astro.sunrise,sunset:t.forecast.forecastday[0].astro.sunset,sunset:t.forecast.forecastday[0].astro.sunset,avgHumidity:t.forecast.forecastday[0].day.avghumidity,avgTemp:t.forecast.forecastday[0].day.avgtemp_f,chanceOfRain:t.forecast.forecastday[0].day.daily_chance_of_rain,chanceOfSnow:t.forecast.forecastday[0].day.daily_chance_of_snow,willRain:t.forecast.forecastday[0].day.daily_will_it_rain,willSnow:t.forecast.forecastday[0].day.daily_will_it_snow,maxTemp:t.forecast.forecastday[0].day.maxtemp_f,maxWind:t.forecast.forecastday[0].day.maxwind_mph,minTemp:t.forecast.forecastday[0].day.mintemp_f,minTemp:t.forecast.forecastday[0].day.mintemp_f},{name:o[r+1>6?r+1-7:r+1],sunrise:t.forecast.forecastday[1].astro.sunrise,sunset:t.forecast.forecastday[1].astro.sunset,sunset:t.forecast.forecastday[1].astro.sunset,avgHumidity:t.forecast.forecastday[1].day.avghumidity,avgTemp:t.forecast.forecastday[1].day.avgtemp_f,chanceOfRain:t.forecast.forecastday[1].day.daily_chance_of_rain,chanceOfSnow:t.forecast.forecastday[1].day.daily_chance_of_snow,willRain:t.forecast.forecastday[1].day.daily_will_it_rain,willSnow:t.forecast.forecastday[1].day.daily_will_it_snow,maxTemp:t.forecast.forecastday[1].day.maxtemp_f,maxWind:t.forecast.forecastday[1].day.maxwind_mph,minTemp:t.forecast.forecastday[1].day.mintemp_f,minTemp:t.forecast.forecastday[1].day.mintemp_f},{name:o[r+2>6?r+2-7:r+2],sunrise:t.forecast.forecastday[2].astro.sunrise,sunset:t.forecast.forecastday[2].astro.sunset,sunset:t.forecast.forecastday[2].astro.sunset,avgHumidity:t.forecast.forecastday[2].day.avghumidity,avgTemp:t.forecast.forecastday[2].day.avgtemp_f,chanceOfRain:t.forecast.forecastday[2].day.daily_chance_of_rain,chanceOfSnow:t.forecast.forecastday[2].day.daily_chance_of_snow,willRain:t.forecast.forecastday[2].day.daily_will_it_rain,willSnow:t.forecast.forecastday[2].day.daily_will_it_snow,maxTemp:t.forecast.forecastday[2].day.maxtemp_f,maxWind:t.forecast.forecastday[2].day.maxwind_mph,minTemp:t.forecast.forecastday[2].day.mintemp_f,minTemp:t.forecast.forecastday[2].day.mintemp_f},{name:o[r+3>6?r+3-7:r+3],sunrise:t.forecast.forecastday[3].astro.sunrise,sunset:t.forecast.forecastday[3].astro.sunset,sunset:t.forecast.forecastday[3].astro.sunset,avgHumidity:t.forecast.forecastday[3].day.avghumidity,avgTemp:t.forecast.forecastday[3].day.avgtemp_f,chanceOfRain:t.forecast.forecastday[3].day.daily_chance_of_rain,chanceOfSnow:t.forecast.forecastday[3].day.daily_chance_of_snow,willRain:t.forecast.forecastday[3].day.daily_will_it_rain,willSnow:t.forecast.forecastday[3].day.daily_will_it_snow,maxTemp:t.forecast.forecastday[3].day.maxtemp_f,maxWind:t.forecast.forecastday[3].day.maxwind_mph,minTemp:t.forecast.forecastday[3].day.mintemp_f,minTemp:t.forecast.forecastday[3].day.mintemp_f},{name:o[r+4>6?r+4-7:r+4],sunrise:t.forecast.forecastday[4].astro.sunrise,sunset:t.forecast.forecastday[4].astro.sunset,sunset:t.forecast.forecastday[4].astro.sunset,avgHumidity:t.forecast.forecastday[4].day.avghumidity,avgTemp:t.forecast.forecastday[4].day.avgtemp_f,chanceOfRain:t.forecast.forecastday[4].day.daily_chance_of_rain,chanceOfSnow:t.forecast.forecastday[4].day.daily_chance_of_snow,willRain:t.forecast.forecastday[4].day.daily_will_it_rain,willSnow:t.forecast.forecastday[4].day.daily_will_it_snow,maxTemp:t.forecast.forecastday[4].day.maxtemp_f,maxWind:t.forecast.forecastday[4].day.maxwind_mph,minTemp:t.forecast.forecastday[4].day.mintemp_f,minTemp:t.forecast.forecastday[4].day.mintemp_f},{name:o[r+5>6?r+5-7:r+5],sunrise:t.forecast.forecastday[5].astro.sunrise,sunset:t.forecast.forecastday[5].astro.sunset,sunset:t.forecast.forecastday[5].astro.sunset,avgHumidity:t.forecast.forecastday[5].day.avghumidity,avgTemp:t.forecast.forecastday[5].day.avgtemp_f,chanceOfRain:t.forecast.forecastday[5].day.daily_chance_of_rain,chanceOfSnow:t.forecast.forecastday[5].day.daily_chance_of_snow,willRain:t.forecast.forecastday[5].day.daily_will_it_rain,willSnow:t.forecast.forecastday[5].day.daily_will_it_snow,maxTemp:t.forecast.forecastday[5].day.maxtemp_f,maxWind:t.forecast.forecastday[5].day.maxwind_mph,minTemp:t.forecast.forecastday[5].day.mintemp_f,minTemp:t.forecast.forecastday[5].day.mintemp_f},{name:o[r+6>6?r+6-7:r+6],sunrise:t.forecast.forecastday[6].astro.sunrise,sunset:t.forecast.forecastday[6].astro.sunset,sunset:t.forecast.forecastday[6].astro.sunset,avgHumidity:t.forecast.forecastday[6].day.avghumidity,avgTemp:t.forecast.forecastday[6].day.avgtemp_f,chanceOfRain:t.forecast.forecastday[6].day.daily_chance_of_rain,chanceOfSnow:t.forecast.forecastday[6].day.daily_chance_of_snow,willRain:t.forecast.forecastday[6].day.daily_will_it_rain,willSnow:t.forecast.forecastday[6].day.daily_will_it_snow,maxTemp:t.forecast.forecastday[6].day.maxtemp_f,maxWind:t.forecast.forecastday[6].day.maxwind_mph,minTemp:t.forecast.forecastday[6].day.mintemp_f,minTemp:t.forecast.forecastday[6].day.mintemp_f}],s=`\n    ${a<=12?a:a-12}:${n} ${a<12?"am":"pm"}\n  `;C.textContent=`${t.location.name}, ${t.location.region}, ${t.location.country}`,$.textContent=s,q.textContent=`${t.current.temp_f}°F`,R.textContent=`${t.current.condition.text}`,O.src=ne[t.current.condition.text],z.textContent=`${t.current.humidity} %`,M.textContent=`${t.current.wind_mph} mph`,P.textContent=`${t.current.precip_in} in`,k.textContent=`${t.current.uv} (${t.current.uv<3?"Low":t.current.uv<6?"Moderate":t.current.uv<8?"High":t.current.uv<9?"Very High":"Extreme"})`,F.textContent=`${t.current.vis_miles} mi`,H.textContent=c[0].name,L.textContent=`Avg. Temp: ${c[0].avgTemp}°F`,A.textContent=`${c[0].chanceOfRain}% Chance of Rain`,E.textContent=c[1].name,I.textContent=`Avg. Temp: ${c[1].avgTemp}°F`,j.textContent=`${c[1].chanceOfRain}% Chance of Rain`,W.textContent=c[2].name,N.textContent=`Avg. Temp: ${c[2].avgTemp}°F`,Z.textContent=`${c[2].chanceOfRain}% Chance of Rain`,B.textContent=c[3].name,U.textContent=`Avg. Temp: ${c[3].avgTemp}°F`,D.textContent=`${c[3].chanceOfRain}% Chance of Rain`,V.textContent=c[4].name,G.textContent=`Avg. Temp: ${c[4].avgTemp}°F`,J.textContent=`${c[4].chanceOfRain}% Chance of Rain`,Q.textContent=c[5].name,K.textContent=`Avg. Temp: ${c[5].avgTemp}°F`,X.textContent=`${c[5].chanceOfRain}% Chance of Rain`,Y.textContent=c[6].name,ee.textContent=`Avg. Temp: ${c[6].avgTemp}°F`,te.textContent=`${c[6].chanceOfRain}% Chance of Rain`}ae.value="los angeles",oe("los angeles"),ae.addEventListener("input",(e=>{oe(ae.value)}))})()})();