(function(t){function e(e){for(var s,i,o=e[0],c=e[1],l=e[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},r={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/lalu/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0601":function(t,e,a){},"0b90":function(t,e,a){"use strict";a("74eb")},"123e":function(t,e,a){},"13a4":function(t,e,a){"use strict";a("929a")},1708:function(t,e,a){"use strict";a("adca")},"25a8":function(t,e,a){},"2bdc":function(t,e,a){"use strict";a("6f98")},"32b5":function(t,e,a){"use strict";a("4a7e")},"4a7e":function(t,e,a){},"51f3":function(t,e,a){"use strict";a("123e")},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("7a23");function r(t,e){const a=Object(s["A"])("router-view");return Object(s["t"])(),Object(s["d"])(a)}a("51f3");var n=a("6b0d"),i=a.n(n);const o={},c=i()(o,[["render",r]]);var l=c,u=a("6c02");const m=Object(s["g"])("div",{class:"bg-[url('/assets/login/hero-1.png')] bg-cover bg-center"},null,-1),d={class:"bg-gradient-to-br from-black to-neutral-800 w-full min-h-screen flex flex-column flex-center justify-center"},b={class:"mx-auto flex flex-column items-center p-8"},g=Object(s["g"])("span",{class:"text-white block mb-2 text-lg"},"Nice to see you again!",-1),h=Object(s["g"])("span",{class:"block text-white mb-2 text-center"},"Username*",-1),p=Object(s["g"])("span",{class:"block text-xs mt-2 text-neutral-400 text-center mb-4"},"* Only for the demo purposes",-1);function f(t,e,a,r,n,i){const o=Object(s["A"])("Logo"),c=Object(s["A"])("PillButton");return Object(s["t"])(),Object(s["f"])("div",null,[Object(s["g"])("main",null,[m,Object(s["g"])("section",d,[Object(s["g"])("div",b,[Object(s["i"])(o,{class:"ml-6",width:"280"}),g,Object(s["g"])("form",{onSubmit:e[1]||(e[1]=Object(s["I"])((...t)=>i.simulateLogin&&i.simulateLogin(...t),["prevent"])),class:"w-72 my-8"},[h,Object(s["H"])(Object(s["g"])("input",{class:"appearance-none block w-full border rounded p-2 leading-tight focus:outline-none bg-transparent font-thin text-white","onUpdate:modelValue":e[0]||(e[0]=t=>this.username=t),required:""},null,512),[[s["E"],this.username]]),p,Object(s["i"])(c,{text:"Jump In!",onClick:i.simulateLogin,colorMode:"primary",class:"mt-2 py-2 w-full text-sm",type:"submit"},null,8,["onClick"])],32)])])])])}const O={src:"assets/laluLogo.png"};function j(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("img",O)}const v={PRIMARY:"#D72EC6",PRIMARY_LIGHTER:"#FF78F2",WHITE:"#FFFFFF"};function S(t){switch(t){case"primary":return{dark:v.PRIMARY,light:v.PRIMARY_LIGHTER};default:return{dark:t,light:t}}}var w={data(){return{primaryColor:v.PRIMARY_LIGHTER}}};const y=i()(w,[["render",j]]);var x=y;function A(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("button",{class:Object(s["o"])(["rounded-full bg-gradient-to-r text-white font-medium transition-transform hover:scale-105 duration-300 focus:outline-none focus:ring-1 focus:ring-white",`from-[${this.resolvedColorMode.dark}] to-[${this.resolvedColorMode.light}]`])},Object(s["C"])(a.text),3)}var k={props:["text","colorMode"],data(){const t=S(this.$props.colorMode);return{resolvedColorMode:t}}};const C=i()(k,[["render",A]]);var T=C;const _={class:"text-white uppercase font-semibold"};function P(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("h1",_,Object(s["C"])(a.text),1)}var B={props:["text"]};const I=i()(B,[["render",P]]);var R=I;const L=["src","alt","width","height"],M={class:"p-2 overflow-clip"},F={class:"text-sm text-white block truncate text-ellipsis"};function z(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",{onClick:e[0]||(e[0]=(...t)=>i.setSong&&i.setSong(...t)),class:Object(s["o"])(["bg-neutral-900 ronded rounded-2xl shrink-0 h-fit hover:shadow cursor-pointer select-none",`hover:shadow-[${n.shadowColor}] ${a.horizontal?"flex flex-row w-80 max-w-80 items-center max-w-[320px]":"w-44 max-w-[176px]"}`])},[Object(s["g"])("img",{src:n.fImgSrc,alt:a.name,class:Object(s["o"])(["rounded-2xl grow-0",""+(a.horizontal?"max-w-24 max-h-24":"w-100")]),width:a.horizontal?96:176,height:a.horizontal?96:176},null,10,L),Object(s["g"])("section",M,[Object(s["g"])("span",F,Object(s["C"])(a.name),1),Object(s["g"])("span",{class:Object(s["o"])(["text-xs block truncate text-ellipsis",`text-[${n.artistColor}]`])},Object(s["C"])(a.artist),3)])],2)}const $=[{id:10,name:"Panic Room",src:"Au_Ra & CamelPhat - Panic Room",artist:1,artists:"Au_Ra, Camelphat"},{id:11,name:"Without You Audio ft. Sandro Cavazza",src:"Avicii - Without You Audio ft. Sandro Cavazza",artist:3,artists:"Avicci, Sandro Cavazza"},{id:12,name:"Baian (Jack Back Remix)",src:"Barbatuques - Baian (Jack Back Remix)",artist:5,artists:"Barbatuques, Jack Back"},{id:13,name:"The Sign",src:"CamelPhat & Anyma - The Sign",artist:1,artists:"Camelphat, Anyma"},{id:14,name:"Breathe (ft. Jem Cooke)",src:"CamelPhat & Cristoph - Breathe (ft. Jem Cooke)",artist:1,artists:"Camelphat, Cristoph, Jem Cooke"},{id:15,name:"Cola",src:"Camelphat & Elderbrook - Cola",artist:1,artists:"Camelphat, Elderbrook"},{id:16,name:"For a Feeling",src:"CamelPhat x ARTBAT - For A Feeling (ft. Rhodes)",artist:1,artists:"Camelphat, ARTBAT, Rhodes"},{id:17,name:"Just a Little More Love (feat. Chris Willis) (Jack Back 2018 Remix)",src:"David Guetta - Just a Little More Love (feat. Chris Willis) (Jack Back 2018 Remix)",artist:5,artists:"David Guetta, Chriss Willis, Jack Back"},{id:18,name:"All For Love ft. Sandro Cavazza",src:"Felix Jaehn - All For Love ft. Sandro Cavazza",artist:3,artists:"Felix Jaehn, Sandro Cavazza"},{id:19,name:"Delilah (pull me out of this)",src:"Fred again.. - Delilah (pull me out of this)",artist:0,artists:"Fred again.."},{id:20,name:"Marea (We’ve Lost Dancing)",src:"Fred again.. feat. The Blessed Madonna - Marea (We’ve Lost Dancing)",artist:0,artists:"Fred again.., The Blessed Madonna"},{id:21,name:"Turn On The Lights again.. (feat. Future)",src:"Fred again.. x Swedish House Mafia - Turn On The Lights again.. (feat. Future)",artist:0,artists:"Fred again.., Swedish House Mafia, Future"},{id:22,name:"Baby again",src:"Fred again.., Skrillex, Four Tet - Baby again",artist:0,artists:"Fred again.., Skrillex, Four Tet"},{id:23,name:"(It Happens) Sometimes",src:"Jack Back - (It Happens) Sometimes",artist:5,artists:"Jack Back"},{id:24,name:"Survivor",src:"Jack Back - Survivor",artist:5,artists:"Jack Back"},{id:25,name:"Case Of The Ex feat. Mya Francis",src:"Jack Back & NFI - Case Of The Ex feat. Mya Francis",artist:5,artists:"Jack Back, NFI, Mya Francis"},{id:26,name:"Happy Now ft. Sandro Cavazza",src:"Kygo - Happy Now ft. Sandro Cavazza",artist:3,artists:"Kygo, Sandro Cavazza"},{id:27,name:"Forever Yours (Avicii Tribute)",src:"Kygo, Avicii, Sandro Cavazza - Forever Yours (Avicii Tribute)",artist:3,artists:"Kygo, Avicci, Sandro Cavazza"},{id:28,name:"I'll Wait",src:"Kygo, Sasha Alex Sloan - I'll Wait",artist:2,artists:"Kygo, Sasha Alex Sloan"},{id:29,name:"Lean On Me",src:"Sandro Cavazza - Lean On Me",artist:3,artists:"Sandro Cavazza"},{id:30,name:"Dancing With Your Ghost",src:"Sasha Alex Sloan - Dancing With Your Ghost",artist:2,artists:"Sasha Alex Sloan"},{id:31,name:"Is It Just Me ft. Charlie Puth",src:"Sasha Alex Sloan - Is It Just Me ft. Charlie Puth",artist:2,artists:"Sasha Alex Sloan, Charlie Puth"},{id:32,name:"Older",src:"Sasha Alex Sloan - Older",artist:2,artists:"Sasha Alex Sloan"},{id:33,name:"when was it over ft. Sam Hunt",src:"Sasha Alex Sloan - when was it over ft. Sam Hunt",artist:2,artists:"Sasha Alex Sloan, Sam Hunt"},{id:34,name:"Rumble",src:"Skrillex, Fred again.. & Flowdan - Rumble",artist:0,artists:"Skrillex, Fred again.., Flowdan"},{id:35,name:"Come Together",src:"The Beatles - Come Together",artist:4,artists:"The Beatles"},{id:36,name:"Here Comes The Sun",src:"The Beatles - Here Comes The Sun",artist:4,artists:"The Beatles"},{id:37,name:"Let It Be",src:"The Beatles - Let It Be",artist:4,artists:"The Beatles"},{id:38,name:"Twist And Shout",src:"The Beatles - Twist And Shout",artist:4,artists:"The Beatles"},{id:39,name:"Yesterday",src:"The Beatles - Yesterday",artist:4,artists:"The Beatles"}],H=$.filter(t=>[11,16,20,22,23,28,31,33,34,36,37,39].includes(t.id)),E=[{name:"Electronic Dance Music",number:18,duration:1.1,imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/audio/Felix Jaehn - All For Love ft. Sandro Cavazza/img.jpg",songs:$.filter(t=>1===t.artist||0===t.artist||5===t.artist)},{name:"Best of: CamelPhat",number:6,duration:.3,imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/camelphat.jpg",songs:$.filter(t=>1===t.artist)},{name:"Acoustic",number:18,duration:1.3,imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/audio/Sasha Alex Sloan - Is It Just Me ft. Charlie Puth/img.jpg",songs:$.filter(t=>2===t.artist||3===t.artist||4===t.artist)},{name:"Best of: Fred Again..",number:6,duration:.4,imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/fred_again...jpg",songs:$.filter(t=>0===t.artist)},{name:"Best of: Jack Back",number:6,duration:.4,imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/jack_back.jpg",songs:$.filter(t=>5===t.artist)},{name:"Best of: Sandro Cavazza",number:6,duration:.4,imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/sandro_cavazza.jpg",songs:$.filter(t=>3===t.artist)},{name:"Best of: Sasha Alex Sloan",number:6,duration:.3,imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/sasha_alex_sloan.jpg",songs:$.filter(t=>2===t.artist)},{name:"Best of: The Beatles",number:6,duration:.3,imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/the_beatles.jpg",songs:$.filter(t=>4===t.artist)}],J=[{id:0,name:"Fred Again..",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/fred_again...jpg",description:"Fred describes his music as ‘Actual Life’, a trademark sound that features vocals uncovered from the unlikeliest of sources; from obscure YouTube clips to personal FaceTime conversations, random Instagram accounts and iPhone video footage of half-remembered nights out. The end results – often made on the move wherever Fred has his laptop – shift between dancefloor-inspired euphoria and yearning melancholy and you’ll hear the likes of The Blessed Madonna, Mr Eazi and Headie One among lesser known voices."},{id:1,name:"CamelPhat",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/camelphat.jpg",description:"Grammy Nominated, Ivor Novello Nominated, Triple platinum selling Artists."},{id:2,name:"Sasha Alex Sloan",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/sasha_alex_sloan.jpg",description:"life is a scam<3"},{id:3,name:"Sandro Cavazza",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/sandro_cavazza.jpg",description:"Hailing from Sweden, Sandro Cavazza is a pop singer and songwriter who has made a name for himself collaborating with some of the biggest names in the electronic music scene. His songs & collaborations with Avicii, Kygo, and Lost Frequencies have garnered over 4 billion streams, making him a force to be reckoned with."},{id:4,name:"The Beatles",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/the_beatles.jpg",description:"The Beatles recorded together for a little over seven years. Between October 1962 and May 1970, they released thirteen albums and a number of tracks issued on standalone singles. The catalogue created in that short period has sold more than that of any other group in history and its commercial success continues - the world’s best selling album during the first decade of the 21st century was a collection of The Beatles’ chart-topping singles called 1. But the group’s significance stems not just from huge sales figures. Their music has inspired generation upon generation of musicians, songwriters and producers. As Mark Ronson put it: ‘Everything we take for granted - they absolutely invented it.’ Tom Petty was a teenager during the years The Beatles’ records appeared in quick succession: ‘They were just out in front. There was The Beatles …and then there was everyone else. And everyone else could be great, but The Beatles were leading the way and that’s just irrefutably true.’"},{id:5,name:"Jack Back",imgSrc:"https://github.com/saacostam/lalu_fe/raw/master/public/images/artists/jack_back.jpg",description:'Jack Back has enabled EDM superstar David Guetta to revert to his roots in progressive house, fully explored with the full-length Jack Back Mixtape (2018).\n\n        The alias dates back to 2012, the year it was attributed to "Wild One Two" -- a collaboration with Nicky Romero and Sia -- and also became the name of a Guetta-operated subsidiary of Spinnin\' Records. Through 2017, the Jack Back label issued over a dozen singles, including several credited to Guetta by name, but the tag didn\'t reappear as a headlining artist name until September 2018, when Jack Back Mixtape became available for streaming and download. Presented as a DJ mix, the full-length was issued through Parlophone with singles such as "Pelican" and "Overtone" incorporated with previously unreleased material. ~ Andy Kellman, Rovi'}],N=[];for(let xs=0;xs<J.length;xs++){const t=J[xs];N.push({...t,songs:$.filter(e=>e.artist===t.id)})}var Y={props:["name","artist","src","horizontal","id"],data(){return{fImgSrc:`https://github.com/saacostam/lalu_fe/raw/master/public/audio/${this.$props["src"]}/img.jpg`||"https://picsum.photos/200",artistColor:v.PRIMARY_LIGHTER,shadowColor:v.PRIMARY}},methods:{setSong(){const t=[...$.filter(t=>t.id==this.$props["id"]),...$.filter(t=>t.id!=this.$props["id"])];this.$store.state.songQueue.setQueue(t)}}};const D=i()(Y,[["render",z]]);var G=D;const U={class:"flex flex-row overflow-x-auto p-1 pb-3"};function q(t,e,a,r,n,i){const o=Object(s["A"])("SongCard");return Object(s["t"])(),Object(s["f"])("section",U,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(a.songs,t=>(Object(s["t"])(),Object(s["d"])(o,{name:t.name,artist:t.artists,imgSrc:t.imgSrc,src:t.src,id:t.id,class:"mr-8"},null,8,["name","artist","imgSrc","src","id"]))),256))])}var Q={components:{SongCard:G},props:["songs"]};const W=i()(Q,[["render",q]]);var K=W;const V=["src","alt"],X={class:"p-2"},Z={class:"text-sm text-white block text-center"};function tt(t,e,a,r,n,i){const o=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["d"])(o,{class:"w-48 shrink-0 cursor-pointer hover:no-underline select-none",to:"/app/artist/"+a.name},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:n.fImgSrc,class:Object(s["o"])(["w-100 rounded-full hover:shadow hover:bg-neutral-900",`hover:shadow-[${n.shadowColor}]`]),alt:a.name,width:"112",height:"112"},null,10,V),Object(s["g"])("section",X,[Object(s["g"])("span",Z,Object(s["C"])(a.name),1)])]),_:1},8,["to"])}var et={props:["name","imgSrc","src"],data(){return{fImgSrc:this.$props["imgSrc"]||"https://picsum.photos/120",shadowColor:v.PRIMARY}}};const at=i()(et,[["render",tt]]);var st=at;const rt={class:"flex flex-row overflow-x-auto pb-3"};function nt(t,e,a,r,n,i){const o=Object(s["A"])("ArtistBlob");return Object(s["t"])(),Object(s["f"])("section",rt,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(a.artists,t=>(Object(s["t"])(),Object(s["d"])(o,{name:t.name,imgSrc:t.imgSrc,src:t.src,class:"mr-8"},null,8,["name","imgSrc","src"]))),256))])}var it={components:{ArtistBlob:st},props:["artists"]};const ot=i()(it,[["render",nt]]);var ct=ot;const lt=["src","alt"],ut={class:"grow p-3 relative"},mt={class:"text-white font-semibold text-md block"},dt={class:"text-white text-sm font-semibold"};function bt(t,e,a,r,n,i){const o=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["d"])(o,{class:Object(s["o"])(["h-28 w-100 bg-neutral-900 ronded rounded-2xl shrink-0 grow-0 hover:shadow cursor-pointer select-none flex flex-row select-none hover:no-underline select-none",`hover:shadow-[${n.primaryColor}]`]),to:"/app/playlist/"+a.name},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:n.fImgSrc,alt:a.name,class:"ronded rounded-2xl",width:"112",height:"112"},null,8,lt),Object(s["g"])("div",ut,[Object(s["g"])("span",mt,Object(s["C"])(a.name),1),Object(s["g"])("span",dt,Object(s["C"])(a.number)+" "+Object(s["C"])(a.number>1?"songs":"song"),1),Object(s["g"])("span",{class:Object(s["o"])(["absolute text-sm font-semibold bottom-2 right-3",`text-[${n.primaryColor}]`])},Object(s["C"])(a.duration)+" "+Object(s["C"])(1!=a.duration?"hours":"hour"),3)])]),_:1},8,["class","to"])}var gt={props:["name","number","duration","imgSrc","src"],data(){return{fImgSrc:this.$props["imgSrc"]||"https://picsum.photos/200",primaryColor:v.PRIMARY}}};const ht=i()(gt,[["render",bt]]);var pt=ht;function ft(t,e,a,r,n,i){const o=Object(s["A"])("PlaylistPrevCard");return Object(s["t"])(),Object(s["f"])("section",{class:Object(s["o"])(["flex flex-row flex-wrap",n.commonContainerClass])},[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(a.playlists,t=>(Object(s["t"])(),Object(s["d"])(o,{name:t.name,number:t.number,duration:t.duration,imgSrc:t.imgSrc,src:t.src},null,8,["name","number","duration","imgSrc","src"]))),256))],2)}var Ot={props:["playlists"],components:{PlaylistPrevCard:pt},data(){return{commonContainerClass:"grid grid-cols-1 lg:grid-cols-2 gap-8"}}};const jt=i()(Ot,[["render",ft]]);var vt=jt;const St={class:"flex flex-row items-center p-1 pb-3"},wt={class:"flex flex-column overflow-x-auto h-fit"},yt={class:"flex flex-row overflow-x-auto h-fit"};function xt(t,e,a,r,n,i){const o=Object(s["A"])("ArtistBlob"),c=Object(s["A"])("SongCard");return Object(s["t"])(),Object(s["f"])("section",St,[Object(s["i"])(o,{name:a.name,imgSrc:a.imgSrc,class:"ml-8 mr-20"},null,8,["name","imgSrc"]),Object(s["g"])("div",wt,[Object(s["g"])("div",yt,[(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(a.songs,t=>(Object(s["t"])(),Object(s["d"])(c,{name:t.name,artist:t.artists,src:t.src,horizontal:!0,id:t.id,class:"mr-8 mb-3"},null,8,["name","artist","src","id"]))),256))])])])}var At={components:{ArtistBlob:st,SongCard:G},props:["name","imgSrc","songs"]};const kt=i()(At,[["render",xt]]);var Ct=kt;const Tt=t=>(Object(s["w"])("data-v-46b200e1"),t=t(),Object(s["u"])(),t),_t={class:"relative h-40 mx-auto rounded-3xl bg-[center_right_20rem] mt-16"},Pt=Tt(()=>Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/images/common/sound-wave.png",class:"absolute -top-[8.5rem] right-0 w-80"},null,-1)),Bt={class:"text-white absolute top-1/2 left-16 text-5xl"},It=Object(s["h"])("Hi "),Rt={class:"font-semibold"},Lt=Object(s["h"])("!");function Mt(t,e){return Object(s["t"])(),Object(s["f"])("section",_t,[Pt,Object(s["g"])("span",Bt,[It,Object(s["g"])("span",Rt,Object(s["C"])(this.$store.state.username),1),Lt])])}a("6c8b");const Ft={},zt=i()(Ft,[["render",Mt],["__scopeId","data-v-46b200e1"]]);var $t=zt;const Ht=t=>(Object(s["w"])("data-v-566f24b9"),t=t(),Object(s["u"])(),t),Et={class:"relative h-40 mx-auto rounded-3xl bg-[center_right_20rem] mt-16"},Jt=Ht(()=>Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/images/common/sound-wave.png",class:"absolute -top-[8.5rem] right-0 w-80"},null,-1)),Nt=Ht(()=>Object(s["g"])("span",{class:"text-white absolute top-1/2 left-10 text-5xl font-semibold"},"Artists",-1)),Yt=[Jt,Nt];function Dt(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("section",Et,Yt)}var Gt={};a("1708");const Ut=i()(Gt,[["render",Dt],["__scopeId","data-v-566f24b9"]]);var qt=Ut;const Qt={class:"bg-neutral-900 ronded rounded-2xl flex flex-row items-center p-8"},Wt=["src","alt"],Kt={class:"pl-8 overflow-x-clip"},Vt={class:"text-white font-semibold uppercase truncate text-ellipsis border-solid border-b-4 py-2.5 text-lg mb-4"},Xt={class:"text-white"};function Zt(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("section",Qt,[Object(s["g"])("img",{src:n.fImgSrc,alt:a.name,class:"w-64 h-64 rounded-full",width:"256",height:"256"},null,8,Wt),Object(s["g"])("section",Kt,[Object(s["g"])("h1",Vt,Object(s["C"])(a.name),1),Object(s["g"])("p",Xt,Object(s["C"])(a.description),1)])])}var te={name:"Artist Banner",props:["name","description","imgSrc"],data(){return{fImgSrc:this.$props["imgSrc"]||"https://picsum.photos/256"}}};const ee=i()(te,[["render",Zt]]);var ae=ee;const se=t=>(Object(s["w"])("data-v-3ad141e0"),t=t(),Object(s["u"])(),t),re={class:"relative h-40 mx-auto rounded-3xl bg-[center_right_20rem] mt-16"},ne=se(()=>Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/images/common/sound-wave.png",class:"absolute -top-[8.5rem] right-0 w-80"},null,-1)),ie={class:"text-white absolute top-1/2 left-10 text-5xl font-semibold"};function oe(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("section",re,[ne,Object(s["g"])("span",ie,Object(s["C"])(a.name),1)])}var ce={props:["name"]};a("0b90");const le=i()(ce,[["render",oe],["__scopeId","data-v-3ad141e0"]]);var ue=le,me={name:"Landing",components:{Logo:x,PillButton:T},data(){const t=localStorage.getItem("username");return{username:t||"",primaryColor:v.PRIMARY}},methods:{simulateLogin(){localStorage.setItem("username",this.username),this.$router.push("/app")}}};const de=i()(me,[["render",f]]);var be=de;const ge={class:"auth"},he={class:"non-player-content"},pe={class:"view-router-content"};function fe(t,e,a,r,n,i){const o=Object(s["A"])("NavBar"),c=Object(s["A"])("SearchBar"),l=Object(s["A"])("router-view"),u=Object(s["A"])("MusicPlayer");return Object(s["t"])(),Object(s["f"])("div",ge,[Object(s["g"])("div",he,[Object(s["i"])(o,{id:"navbar"}),Object(s["g"])("div",pe,[Object(s["i"])(c,{id:"search-bar"}),Object(s["i"])(l,{class:"nested-view px-12 py-8"})])]),Object(s["i"])(u,{id:"music-player"})])}const Oe=t=>(Object(s["w"])("data-v-bb3e8eb8"),t=t(),Object(s["u"])(),t),je={class:"nav-bar"},ve={class:"nav-container"},Se=Oe(()=>Object(s["g"])("div",{class:"nav-header"},[Object(s["g"])("img",{src:"https://picsum.photos/450",alt:"Avatar"})],-1)),we={class:"nav-main"},ye={class:"mx-auto"},xe=["src"],Ae=Oe(()=>Object(s["g"])("span",null,"Home",-1)),ke=["src"],Ce=Oe(()=>Object(s["g"])("span",null,"Library",-1)),Te=["src"],_e=Oe(()=>Object(s["g"])("span",null,"Artists",-1)),Pe=Oe(()=>Object(s["g"])("div",{class:"nav-footer"},[Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/images/lalu_logo 2.png",alt:"Lalu_logo"})],-1));function Be(t,e,a,r,n,i){const o=Object(s["A"])("router-link");return Object(s["t"])(),Object(s["f"])("div",je,[Object(s["g"])("div",ve,[Se,Object(s["g"])("div",we,[Object(s["g"])("nav",null,[Object(s["g"])("ul",ye,[Object(s["g"])("li",null,[Object(s["i"])(o,{class:Object(s["o"])(["home-menu",{active:"Home"===t.$route.name}]),to:{path:"/app/home"}},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/icons/home (0).png",alt:"Home-icon",class:"d-inline"},null,8,xe),Ae]),_:1},8,["class"])]),Object(s["g"])("li",null,[Object(s["i"])(o,{class:Object(s["o"])(["library-menu",{active:"Library"===t.$route.name||"Playlist"===t.$route.name}]),to:{path:"/app/library"}},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/icons/library(0).png",alt:"Library-icon",class:"d-inline"},null,8,ke),Ce]),_:1},8,["class"])]),Object(s["g"])("li",null,[Object(s["i"])(o,{class:Object(s["o"])(["artist-menu",{active:"Artists"===t.$route.name||"Artist"===t.$route.name}]),to:{path:"/app/artists"}},{default:Object(s["G"])(()=>[Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/icons/artist(0).png",alt:"artist-icon",class:"d-inline"},null,8,Te),_e]),_:1},8,["class"])])])])]),Pe])])}var Ie={name:"NavBar",data:()=>({})};a("5dc7");const Re=i()(Ie,[["render",Be],["__scopeId","data-v-bb3e8eb8"]]);var Le=Re;const Me=t=>(Object(s["w"])("data-v-1f94383c"),t=t(),Object(s["u"])(),t),Fe={class:"music-player"},ze=["max"],$e=["src"],He={class:"time time-elapsed"},Ee={class:"time time-left"},Je={class:"row"},Ne={class:"volume-control col-md-4 col-4"},Ye=Me(()=>Object(s["g"])("i",{class:"bi bi-volume-down d-none d-md-block"},null,-1)),De=Me(()=>Object(s["g"])("i",{class:"bi bi-volume-up"},null,-1)),Ge={class:"panel col-md-4 col-5"},Ue=Me(()=>Object(s["g"])("i",{class:"bi bi-skip-start"},null,-1)),qe=[Ue],Qe=Me(()=>Object(s["g"])("i",{class:"bi bi-play"},null,-1)),We=[Qe],Ke=Me(()=>Object(s["g"])("i",{class:"bi bi-pause"},null,-1)),Ve=[Ke],Xe=Me(()=>Object(s["g"])("i",{class:"bi bi-skip-end"},null,-1)),Ze=[Xe],ta={key:0,class:"info col-md-4 col-3"},ea={class:"info-table d-none d-md-block"},aa={class:"title truncate text-ellipsis w-32"},sa={class:"artist truncate text-ellipsis w-32"},ra={class:"date"},na={class:"wrapper-like"},ia={class:"like"},oa=Me(()=>Object(s["g"])("i",{class:"bi bi-heart-fill"},null,-1)),ca={class:"n-likes"};function la(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",Fe,[Object(s["H"])(Object(s["g"])("input",{type:"range",id:"progress","onUpdate:modelValue":e[0]||(e[0]=t=>this.currentTime=t),min:"0",max:this.totalTime,style:Object(s["p"])(`background-size: ${100*this.currentTime/this.totalTime}% 100%;`)},null,12,ze),[[s["E"],this.currentTime]]),Object(s["g"])("audio",{id:"audio",src:`https://github.com/saacostam/lalu_fe/raw/master/public/audio/${this.$store.state.songQueue.getCurrentSong().src}/audio.mp3`},null,8,$e),Object(s["g"])("span",He,Object(s["C"])(i.formatTime(this.currentTime)),1),Object(s["g"])("span",Ee,"-"+Object(s["C"])(i.formatTime(this.totalTime-this.currentTime)),1),Object(s["g"])("div",Je,[Object(s["g"])("div",Ne,[Ye,Object(s["H"])(Object(s["g"])("input",{type:"range",id:"volume","onUpdate:modelValue":e[1]||(e[1]=t=>this.volume=t),min:"0",max:100,style:Object(s["p"])(`background-size: ${100*this.volume/100}% 100%;`)},null,4),[[s["E"],this.volume]]),De]),Object(s["g"])("div",Ge,[Object(s["g"])("a",{class:"control strategy",onClick:e[2]||(e[2]=(...t)=>i.toggleShuffle&&i.toggleShuffle(...t))},[Object(s["g"])("i",{class:Object(s["o"])([{active:"shuffle"===this.strategy},"bi bi-shuffle"])},null,2)]),Object(s["g"])("a",{class:"control",onClick:e[3]||(e[3]=t=>this.$store.state.songQueue.prev())},qe),0==this.isPlaying?(Object(s["t"])(),Object(s["f"])("a",{key:0,class:"control play-control",onClick:e[4]||(e[4]=(...t)=>i.play&&i.play(...t))},We)):(Object(s["t"])(),Object(s["f"])("a",{key:1,class:"control play-control",onClick:e[5]||(e[5]=(...t)=>i.pause&&i.pause(...t))},Ve)),Object(s["g"])("a",{class:"control",onClick:e[6]||(e[6]=t=>this.$store.state.songQueue.next())},Ze),Object(s["g"])("a",{class:"control strategy",onClick:e[7]||(e[7]=(...t)=>i.toggleRepeat&&i.toggleRepeat(...t))},[Object(s["g"])("i",{class:Object(s["o"])([{active:"repeat"===this.strategy},"bi bi-arrow-repeat"])},null,2)])]),this.$store.state.songQueue.getCurrentSong()?(Object(s["t"])(),Object(s["f"])("div",ta,[Object(s["g"])("div",{class:"image d-none d-md-block",style:Object(s["p"])(`background-image:url('https://github.com/saacostam/lalu_fe/raw/master/public/audio/${this.$store.state.songQueue.getCurrentSong().src}/img.jpg');`)},null,4),Object(s["g"])("div",ea,[Object(s["g"])("span",aa,Object(s["C"])(this.$store.state.songQueue.getCurrentSong().name),1),Object(s["g"])("span",sa,Object(s["C"])(this.$store.state.songQueue.getCurrentSong().artists),1),Object(s["g"])("span",ra,Object(s["C"])(this.date),1)]),Object(s["g"])("div",na,[Object(s["g"])("a",ia,[oa,Object(s["g"])("span",ca,Object(s["C"])(this.likes),1)])])])):Object(s["e"])("",!0)])])}var ua={name:"MusicPlayer",data(){return{currentTime:0,totalTime:0,volume:50,src:"",isPlaying:!1,strategy:"order",date:2022,likes:"0"}},mounted(){const t=document.getElementById("audio");t.addEventListener("ended",()=>{t.pause()}),t.addEventListener("ended",()=>{this.$store.state.songQueue.next()}),t.addEventListener("abort",()=>{t.play()}),t.addEventListener("timeupdate",()=>{this.currentTime=t.currentTime}),t.addEventListener("canplay",()=>{t.play()}),t.addEventListener("durationchange",()=>{this.totalTime=t.duration}),t.addEventListener("play",()=>{this.isPlaying=!0}),t.addEventListener("pause",()=>{this.isPlaying=!1});const e=document.getElementById("progress");e.addEventListener("input",e=>{t.currentTime=e.target.value})},watch:{volume:function(t){const e=document.getElementById("audio");e.volume=t/100}},methods:{play(){const t=document.getElementById("audio");t.play()},pause(){const t=document.getElementById("audio");t.pause()},toggleShuffle(){"shuffle"===this.strategy?this.strategy="linear":this.strategy="shuffle"},toggleRepeat(){"repeat"===this.strategy?this.strategy="linear":this.strategy="repeat"},formatTime(t){const e=parseInt(t,10);let a=Math.floor(e/3600),s=Math.floor((e-3600*a)/60),r=e-3600*a-60*s;return a<10&&(a="0"+a),s<10&&(s="0"+s),r<10&&(r="0"+r),"00"!==a?a+":"+s+":"+r:s+":"+r}}};a("32b5");const ma=i()(ua,[["render",la],["__scopeId","data-v-1f94383c"]]);var da=ma;const ba=t=>(Object(s["w"])("data-v-5c8c0380"),t=t(),Object(s["u"])(),t),ga={class:"sb"},ha={class:"search-bar-container"},pa={class:"search-bar"},fa=ba(()=>Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/icons/musical-note-menu.png",alt:"search-icon",style:{width:"25px",height:"25px"}},null,-1)),Oa=ba(()=>Object(s["g"])("input",{id:"sb-input",type:"text",placeholder:"Search..."},null,-1)),ja=ba(()=>Object(s["g"])("img",{src:"https://github.com/saacostam/lalu_fe/raw/master/public/icons/settings.png",alt:"settings-icon",style:{width:"30px",height:"30px"}},null,-1)),va=ba(()=>Object(s["g"])("i",{class:"bi bi-box-arrow-right",style:{color:"white","font-size":"1.4em"}},null,-1)),Sa=[va];function wa(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",ga,[Object(s["g"])("div",ha,[Object(s["g"])("span",pa,[fa,Oa,ja,Object(s["g"])("button",{class:"btn",style:{margin:"0",padding:"0"},onClick:e[0]||(e[0]=(...t)=>i.logOut&&i.logOut(...t))},Sa)])])])}var ya={name:"SearchBar",data:()=>({}),methods:{logOut(){localStorage.removeItem("token"),localStorage.removeItem("username"),this.$router.push({path:"/"})}}};a("13a4");const xa=i()(ya,[["render",wa],["__scopeId","data-v-5c8c0380"]]);var Aa=xa,ka={name:"Auth",components:{NavBar:Le,MusicPlayer:da,SearchBar:Aa},data(){return this.$store.state.username=localStorage.getItem("username")||"Friend",{}}};a("2bdc");const Ca=i()(ka,[["render",fe],["__scopeId","data-v-57bf5db0"]]);var Ta=Ca;const _a={class:"not-found"},Pa=Object(s["g"])("p",null,"not found",-1),Ba=[Pa];function Ia(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",_a,Ba)}var Ra={name:"NotFound",created(){localStorage.getItem("username")?this.$router.push({path:"/app"}):this.$router.push({path:"/"})}};const La=i()(Ra,[["render",Ia]]);var Ma=La;const Fa={class:"not-found"},za=Object(s["g"])("p",null,"not found",-1),$a=[za];function Ha(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",Fa,$a)}var Ea={name:"AppNotFound",created(){this.$router.push({path:"/app/home"})}};const Ja=i()(Ea,[["render",Ha]]);var Na=Ja;function Ya(t,e,a,r,n,i){const o=Object(s["A"])("HomeMessage"),c=Object(s["A"])("Header"),l=Object(s["A"])("SongDeck"),u=Object(s["A"])("ArtistDeck");return Object(s["t"])(),Object(s["f"])("main",null,[Object(s["i"])(o),Object(s["i"])(c,{text:"POPULAR SONGS",class:"my-4"}),Object(s["i"])(l,{songs:n.POPULAR_SONGS},null,8,["songs"]),Object(s["i"])(c,{text:"POPULAR ARTISTS",class:"my-4"}),Object(s["i"])(u,{artists:n.ARTISTS},null,8,["artists"])])}var Da={components:{HomeMessage:$t,Header:R,SongDeck:K,ArtistDeck:ct},name:"Home",data(){return{POPULAR_SONGS:H,ARTISTS:J}}};const Ga=i()(Da,[["render",Ya]]);var Ua=Ga;function qa(t,e,a,r,n,i){const o=Object(s["A"])("Header"),c=Object(s["A"])("SongDeck"),l=Object(s["A"])("PlaylistPrev");return Object(s["t"])(),Object(s["f"])("main",null,[Object(s["i"])(o,{text:"Recently Heard [10]",class:"mb-4"}),Object(s["i"])(c,{songs:n.POPULAR_SONGS},null,8,["songs"]),Object(s["i"])(o,{text:"Library",class:"my-4"}),Object(s["i"])(l,{playlists:n.MY_PLAYLISTS},null,8,["playlists"])])}var Qa={name:"Library",components:{Header:R,SongDeck:K,PlaylistPrev:vt},data(){return{POPULAR_SONGS:H,MY_PLAYLISTS:E}}};const Wa=i()(Qa,[["render",qa]]);var Ka=Wa;const Va=t=>(Object(s["w"])("data-v-5bc12f47"),t=t(),Object(s["u"])(),t),Xa={class:"my-likes"},Za=Va(()=>Object(s["g"])("h3",null,"My Likes",-1)),ts=[Za];function es(t,e,a,r,n,i){return Object(s["t"])(),Object(s["f"])("div",Xa,ts)}var as={name:"MyLikes"};a("a949");const ss=i()(as,[["render",es],["__scopeId","data-v-5bc12f47"]]);var rs=ss;function ns(t,e,a,r,n,i){const o=Object(s["A"])("PlaylistHeader"),c=Object(s["A"])("SongDeck");return Object(s["t"])(),Object(s["f"])("section",null,[Object(s["i"])(o,{name:n.PLAYLIST.name,class:"mb-8"},null,8,["name"]),Object(s["i"])(c,{songs:n.PLAYLIST.songs},null,8,["songs"])])}var is={name:"Playlist",components:{PlaylistHeader:ue,SongDeck:K},data(){return{PLAYLIST:{name:"",imgSrc:"",songs:[]}}},mounted(){const t=E.find(t=>t.name===this.$route.params["name"]);t?this.PLAYLIST=t:this.$router.push("/app/home")}};const os=i()(is,[["render",ns]]);var cs=os;function ls(t,e,a,r,n,i){const o=Object(s["A"])("ArtistBanner"),c=Object(s["A"])("Header"),l=Object(s["A"])("SongDeck");return Object(s["t"])(),Object(s["f"])("main",null,[Object(s["i"])(o,{name:n.CURRENT_ARTIST.name,imgSrc:n.CURRENT_ARTIST.imgSrc,description:n.CURRENT_ARTIST.description},null,8,["name","imgSrc","description"]),Object(s["i"])(c,{text:"Songs",class:"my-4"}),Object(s["i"])(l,{songs:n.CURRENT_ARTIST.songs,class:"justify-center"},null,8,["songs"])])}var us={name:"Artist",components:{Header:R,ArtistBanner:ae,SongDeck:K},data(){const t=N.find(t=>t.name===this.$route.params["name"]);return t||this.$router.push("/app/home"),{CURRENT_ARTIST:t}}};const ms=i()(us,[["render",ls]]);var ds=ms;function bs(t,e,a,r,n,i){const o=Object(s["A"])("ArtistsHeader"),c=Object(s["A"])("Header"),l=Object(s["A"])("PopularArtist");return Object(s["t"])(),Object(s["f"])("main",null,[Object(s["i"])(o),Object(s["i"])(c,{text:"Popular Artists Right Now",class:"my-6 mb-12"}),(Object(s["t"])(!0),Object(s["f"])(s["a"],null,Object(s["z"])(n.POPULAR_ARTISTS_AND_SONGS,t=>(Object(s["t"])(),Object(s["d"])(l,{name:t.name,imgSrc:t.imgSrc,songs:t.songs,class:"mb-8"},null,8,["name","imgSrc","songs"]))),256))])}var gs={name:"Artists",components:{ArtistsHeader:qt,Header:R,PopularArtist:Ct},data(){return{POPULAR_ARTISTS_AND_SONGS:N}}};const hs=i()(gs,[["render",bs]]);var ps=hs;const fs=[{path:"/",name:"Landing",component:be},{path:"/app",name:"Auth",component:Ta,children:[{path:"home",name:"Home",component:Ua},{path:"library",name:"Library",component:Ka},{path:"my-likes",name:"MyLikes",component:rs},{path:"playlist/:name",name:"Playlist",component:cs},{path:"artists",name:"Artists",component:ps},{path:"artist/:name",name:"Artist",component:ds},{path:":pathMatch(.*)*",name:"AppNotFound",component:Na}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:Ma}],Os=Object(u["a"])({history:Object(u["b"])("/lalu/"),routes:fs});var js=Os,vs=a("5502");class Ss{constructor(){this.queue=[],this.current=0}setQueue(t){this.queue=t,this.current=0}prev(){return this.current=(this.current-1+this.queue.length)%this.queue.length,this.queue[this.current]}next(){return this.current=(this.current+1+this.queue.length)%this.queue.length,this.queue[this.current]}getCurrentSong(){return this.queue[this.current]}}const ws=Object(vs["a"])({state:{songQueue:new Ss,username:"Friend",navbarOpen:!1},mutations:{},actions:{},modules:{}});ws.state.songQueue.setQueue($);var ys=ws;Object(s["c"])(l).use(ys).use(js).mount("#app")},"5dc7":function(t,e,a){"use strict";a("0601")},"6c8b":function(t,e,a){"use strict";a("f92a")},"6f98":function(t,e,a){},"74eb":function(t,e,a){},"929a":function(t,e,a){},a949:function(t,e,a){"use strict";a("25a8")},adca:function(t,e,a){},f92a:function(t,e,a){}});
//# sourceMappingURL=app.249e2f4d.js.map