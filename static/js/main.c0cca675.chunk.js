(this["webpackJsonpimg-cropper"]=this["webpackJsonpimg-cropper"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),c=(a(13),a(3)),s=a(4),l=a(7),m=a(6),u=(a(14),a(5)),p=a.n(u),g=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={imageDestination:""},e.imageElement=i.a.createRef(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new p.a(this.imageElement.current,{zoomable:!1,scalable:!1,aspectRatio:1,crop:function(){var a=t.getCroppedCanvas();e.setState({imageDestination:a.toDataURL("image/png")})}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{ref:this.imageElement,src:this.props.src,alt:"Source",crossorigin:!0})),i.a.createElement("img",{src:this.state.imageDestination,className:"img-preview",alt:"Destination"}))}}]),a}(i.a.Component);var h=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",null,i.a.createElement(g,{src:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c0cca675.chunk.js.map