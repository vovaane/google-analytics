-function(){"use strict";var t=[0,0,0,0],u=/[-+]?[0-9]*\.?[0-9]+%/g,v=/[-+]?[0-9]*\.?[0-9]+px/g,y=function(d,b,e,g,a){var c,h;if(b.gradientMode){a=[[a,a,0],[a,g-a,0],[e-a,g-a,0],[e-a,a,0]];if("radial"==b.gradientMode){(c=b.e)||(c="center");h=d="center";var f=c.match(u);c=c.match(v);f&&1<f.length?(d=f[0],h=f[1]):c&&1<c.length&&(d=c[0],h=c[1]);d=w(d,a[0][0],a[3][0]);h=w(h,a[0][1],a[1][1]);f=b.shape;c=[.5*(a[0][0]+a[2][0]),.5*(a[0][0]+a[2][0])];var k=d<c[0]?a[2][0]:a[0][0];c=h<c[1]?a[1][1]:a[0][1];k=Math.abs(d-k);c=Math.abs(h-
c);var n=a[3][0]-a[0][0];a=a[1][1]-a[0][1];.001<Math.abs(n)&&(a/=n,k=Math.sqrt(k*k+c*c/(a*a)),c=a*k);a=k;f&&"farthest-corner"!=f&&(f=f.match(v))&&1<f.length&&(a=parseFloat(f[0]),c=parseFloat(f[1]));n=Math.max(a,c);f=document.createElement("canvas");f.width=e;f.height=g;k=f.getContext("2d");n=k.createRadialGradient(d,h,0,d,h,n);x(n,b.color);k.rect(0,0,e,g);c<a?(b=1,e=c/a):(e=1,b=a/c);k.save();k.transform(b,0,0,e,b*-d+d,e*-h+h);k.fillStyle=n;k.fill();k.restore();b=k.createPattern(f,"no-repeat")}else{e=
0;b.orientation&&(e=parseFloat(b.orientation)*Math.PI/180);isFinite(e)&&!isNaN(e)||(e=0);c=-1*e;e=[];h=[];g=[.5*(a[0][0]+a[2][0]),.5*(a[0][1]+a[2][1])];f=Math.tan(c);if(.001>Math.abs(Math.tan(.5*Math.PI-.001)-f))h=0<=Math.sin(c)?1:-1,a=.5*(a[2][1]-a[0][1]),e=[g[0],g[1]-h*a],h=[g[0],g[1]+h*a];else{c=0<=Math.cos(c)?1:-1;c=[c,c*f];for(var k=Infinity,n=-Infinity,p=0;4>p;p++){var l,m=[a[p][0]-g[0],a[p][1]-g[1]],m=f*m[1]+m[0],m=m/(1+f*f);l=[m,m*f];m=(0<c[0]*l[0]+c[1]*l[1]?1:-1)*Math.sqrt(l[0]*l[0]+l[1]*
l[1]);l=[l[0]+g[0],l[1]+g[1]];m<k&&(e=l,k=m);m>n&&(h=l,n=m)}}a=d.createLinearGradient(e[0],e[1],h[0],h[1]);x(a,b.color);b=a}return b}return"rgba("+Math.floor(255*b[0])+","+Math.floor(255*b[1])+","+Math.floor(255*b[2])+","+b[3]+")"},x=function(d,b){if(d)for(var e=b.length,g=0;g<e;g++){var a=b[g].position/100,c=b[g].value;if(void 0===c.a||null===c.a)c.a=1;d.addColorStop(a,"rgba("+c.r+","+c.g+","+c.b+","+c.a+")")}},w=function(d,b,e){return d?d=0<=d.indexOf("%")?b+parseInt(d,10)/100*(e-b):0<=d.indexOf("px")?
b+parseInt(d,10):b+.5*(e-b):0};document.registerElement&&document.registerElement("gwd-oval",{prototype:Object.create(HTMLCanvasElement.prototype,{attachedCallback:{value:function(){var d=this.getContext("2d");this.renderOval_(this.shapeData_,d,this.width,this.height)},enumerable:!0},attributeChangedCallback:{value:function(){},enumerable:!0},shapeData_:{get:function(){var d={};d.d=parseFloat(this.getAttribute("stroke-width"))||0;d.c=parseFloat(this.getAttribute("inner-radius"))||0;d.strokeColor=JSON.parse(this.getAttribute("stroke-color"))||
t;d.fillColor=JSON.parse(this.getAttribute("fill-color"))||t;return d},enumerable:!0},renderOval_:{value:function(d,b,e,g){var a=d.d,c=d.c,h=d.strokeColor;d=d.fillColor;var f=.5*(e-a),k=.5*(g-a),n=.5*(c*e-a),p=.5*(c*g-a),l=.5*e,m=.5*g,q=null!=d,r=null!=h&&0<a;q&&(b.fillStyle=y(b,d,e,g,a));r&&(b.strokeStyle=y(b,h,e,g,0),b.lineWidth=a);0===c?(this.drawOval_(b,l,m,f,k,!0,!0),q&&b.fill(),r&&b.stroke()):(q&&(this.drawOval_(b,l,m,f,k,!0,!0),this.drawOval_(b,l,m,n,p,!1,!1),b.fill()),r&&(this.drawOval_(b,
l,m,f,k,!0,!0),b.stroke(),this.drawOval_(b,l,m,n,p,!1,!0),b.stroke()))}},drawOval_:{value:function(d,b,e,g,a,c,h){d.save();h&&d.beginPath();d.translate(b,e);d.scale(g,a);d.arc(0,0,1,0,2*Math.PI,c);d.restore()}}}),"extends":"canvas"});}()
