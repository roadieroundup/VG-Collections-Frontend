function c(r){this.message=r}c.prototype=new Error,c.prototype.name="InvalidCharacterError";var p=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(r){var e=String(r).replace(/=+$/,"");if(e.length%4==1)throw new c("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,t,a=0,o=0,d="";t=e.charAt(o++);~t&&(n=a%4?64*n+t:t,a++%4)?d+=String.fromCharCode(255&n>>(-2*a&6)):0)t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(t);return d};function s(r){var e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw"Illegal base64url string!"}try{return function(n){return decodeURIComponent(p(n).replace(/(.)/g,function(t,a){var o=a.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(e)}catch{return p(e)}}function i(r){this.message=r}function f(r,e){if(typeof r!="string")throw new i("Invalid token specified");var n=(e=e||{}).header===!0?0:1;try{return JSON.parse(s(r.split(".")[n]))}catch(t){throw new i("Invalid token specified: "+t.message)}}i.prototype=new Error,i.prototype.name="InvalidTokenError";export{f as o};