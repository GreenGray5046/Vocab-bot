function lol(){
var si= document.querySelector('#spellit')
var go = document.querySelector('#nextword')
var q=document.querySelector('#beedefs > p').innerText
var inp= document.querySelector('#guessWord')
var a = q.replace(/"/g,"").toLowerCase()
inp.value=(d(a))
si.click()
go.click()
}

function d(a){
switch(a){
case 'com': return "compromise"; break;
case 'bac': return "bacteria"; break;
case 'dis': return "dispersion"; break;
case 'acc': return "acceptance"; break;
case 'rel': return "relationship"; break;
case 'ref': return 'referral'; break;
case 'sci': return "scientific"; break;
case 'pal': return "palace"; break;
case 'cav': return "cavalry"; break;
case 'dec': return "declaration"; break;
}
}
setInterval(lol,1250)
setTimeout(function(){document.querySelector('#bee_complete > div.actions > button').click()},5000)
window.confirm=function(){return true;}
//This doesn't work so we need to add this below : 
var s = document.createElement('script');
s.innerHTML = "window.confirm= function(){return true;}"
document.body.appendChild(s);
//By © ChiefChippy2 2019
