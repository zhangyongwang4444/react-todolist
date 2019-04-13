(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(7),o=n.n(i),l=(n(15),n(1)),r=n(2),c=n(4),u=n(3),h=n(5),d=(n(16),n(17),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("input",{type:"text",value:this.props.content,className:"TodoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(e){"Enter"===e.key&&this.props.onSubmit(e)}},{key:"changeTitle",value:function(e){this.props.onChange(e)}}]),t}(a.Component)),m=(n(18),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"TodoItem"},s.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),s.a.createElement("span",{className:"title"},this.props.todo.title),s.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"toggle",value:function(e){this.props.onToggle(e,this.props.todo)}},{key:"delete",value:function(e){this.props.onDelete(e,this.props.todo)}}]),t}(a.Component)),p=(n(19),n(8)),g=n(20);g.init({appId:"Cq846eABT06Jse8YwqavT0Aj-gzGzoHsz",appKey:"P7GhyCurG4aX3b3Q5iaISRAg"});function b(){var e=g.User.current();return e?f(e):null}function f(e){return Object(p.a)({id:e.id},e.attributes)}function v(e){return JSON.parse(JSON.stringify(e))}var E=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:"signUp",formData:{username:"",password:""}},n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"switch",value:function(e){this.setState({selected:e.target.value})}},{key:"signUp",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){var s=new g.User;s.setUsername(e),s.setPassword(t),s.signUp().then(function(e){var t=f(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignUp.call(null,e)},function(e){switch(e.code){case 202:alert("\u7528\u6237\u540d\u5df2\u88ab\u5360\u7528");break;case 218:alert("\u65e0\u6548\u7684\u5bc6\u7801\uff0c\u4e0d\u5141\u8bb8\u7a7a\u767d\u5bc6\u7801");break;default:alert(e)}})}},{key:"signIn",value:function(e){var t=this;e.preventDefault();var n=this.state.formData;!function(e,t,n,a){g.User.logIn(e,t).then(function(e){var t=f(e);n.call(null,t)},function(e){a.call(null,e)})}(n.username,n.password,function(e){t.props.onSignIn.call(null,e)},function(e){switch(e.code){case 210:alert("\u7528\u6237\u540d\u4e0e\u5bc6\u7801\u4e0d\u5339\u914d");break;case 211:alert("\u627e\u4e0d\u5230\u7528\u6237");break;default:alert(e)}})}},{key:"changeFormData",value:function(e,t){var n=v(this.state);n.formData[e]=t.target.value,this.setState(n)}},{key:"render",value:function(){var e=s.a.createElement("form",{className:"signUp",onSubmit:this.signUp.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u6ce8\u518c"))),t=s.a.createElement("form",{className:"signIn",onSubmit:this.signIn.bind(this)}," ",s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u7528\u6237\u540d"),s.a.createElement("input",{type:"text",value:this.state.formData.username,onChange:this.changeFormData.bind(this,"username")})),s.a.createElement("div",{className:"row"},s.a.createElement("label",null,"\u5bc6\u7801"),s.a.createElement("input",{type:"password",value:this.state.formData.password,onChange:this.changeFormData.bind(this,"password")})),s.a.createElement("div",{className:"row actions"},s.a.createElement("button",{type:"submit"},"\u767b\u5f55")));return s.a.createElement("div",{className:"UserDialog-Wrapper"},s.a.createElement("div",{className:"UserDialog"},s.a.createElement("nav",{onChange:this.switch.bind(this)},s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signUp",checked:"signUp"===this.state.selected,onChange:this.switch.bind(this)}),"\u6ce8\u518c"),s.a.createElement("label",null,s.a.createElement("input",{type:"radio",value:"signIn",checked:"signIn"===this.state.selected,onChange:this.switch.bind(this)}),"\u767b\u5f55")),s.a.createElement("div",{className:"panes"},"signUp"===this.state.selected?e:null,"signIn"===this.state.selected?t:null)))}}]),t}(a.Component),w=(n(22),n(23),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={user:b()||{},newTodo:"",todoList:[]},n}return Object(h.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.state.todoList.filter(function(e){return!e.deleted}).map(function(t,n){return s.a.createElement("li",{key:n},s.a.createElement(m,{todo:t,onToggle:e.toggle.bind(e),onDelete:e.delete.bind(e)}))});return console.log("todos"),console.log(t),s.a.createElement("div",{className:"App"},s.a.createElement("h1",null,this.state.user.username||"\u6211","\u7684\u5f85\u529e",this.state.user.id?s.a.createElement("button",{onClick:this.signOut.bind(this)},"\u767b\u51fa"):null),s.a.createElement("div",{className:"inputWrapper"},s.a.createElement(d,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)})),s.a.createElement("ol",{className:"todoList"},t),this.state.user.id?null:s.a.createElement(E,{onSignUp:this.onSignUpOrSignIn.bind(this),onSignIn:this.onSignUpOrSignIn.bind(this)}))}},{key:"signOut",value:function(){g.User.logOut();var e=v(this.state);e.user={},this.setState(e)}},{key:"onSignUpOrSignIn",value:function(e){var t=v(this.state);t.user=e,this.setState(t)}},{key:"componentDidUpdate",value:function(){}},{key:"addTodo",value:function(e){this.state.todoList.push({id:k(),title:e.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"toggle",value:function(e,t){t.status="completed"===t.status?"":"completed",this.setState(this.state)}},{key:"changeTitle",value:function(e){this.setState({newTodo:e.target.value,todoList:this.state.todoList})}},{key:"delete",value:function(e,t){t.deleted=!0,this.setState(this.state)}}]),t}(a.Component)),y=0;function k(){return y+=1}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.d4a2c711.chunk.js.map