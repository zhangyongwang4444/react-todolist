(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(20)},,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),i=n.n(o),a=n(7),s=n.n(a),c=(n(14),n(1)),l=n(2),r=n(4),u=n(3),d=n(5),h=(n(15),n(16),function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("input",{type:"text",value:this.props.content,className:"TodoInput",onChange:this.changeTitle.bind(this),onKeyPress:this.submit.bind(this)})}},{key:"submit",value:function(t){"Enter"===t.key&&this.props.onSubmit(t)}},{key:"changeTitle",value:function(t){this.props.onChange(t)}}]),e}(o.Component)),p=(n(17),function(t){function e(){return Object(c.a)(this,e),Object(r.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"TodoItem"},i.a.createElement("input",{type:"checkbox",checked:"completed"===this.props.todo.status,onChange:this.toggle.bind(this)}),i.a.createElement("span",{className:"title"},this.props.todo.title),i.a.createElement("button",{onClick:this.delete.bind(this)},"\u5220\u9664"))}},{key:"toggle",value:function(t){this.props.onToggle(t,this.props.todo)}},{key:"delete",value:function(t){this.props.onDelete(t,this.props.todo)}}]),e}(o.Component)),m=(n(18),n(19),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(r.a)(this,Object(u.a)(e).call(this,t))).state={newTodo:"",todoList:[]},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.state.todoList.filter(function(t){return!t.deleted}).map(function(e,n){return i.a.createElement("li",{key:n},i.a.createElement(p,{todo:e,onToggle:t.toggle.bind(t),onDelete:t.delete.bind(t)}))});return console.log("todos"),console.log(e),i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"\u6211\u7684\u5f85\u529e"),i.a.createElement("div",{className:"inputWrapper"},i.a.createElement(h,{content:this.state.newTodo,onSubmit:this.addTodo.bind(this),onChange:this.changeTitle.bind(this)})),i.a.createElement("ol",{className:"todoList"},e))}},{key:"addTodo",value:function(t){this.state.todoList.push({id:f(),title:t.target.value,status:null,deleted:!1}),this.setState({newTodo:"",todoList:this.state.todoList})}},{key:"toggle",value:function(t,e){e.status="completed"===e.status?"":"completed",this.setState(this.state)}},{key:"changeTitle",value:function(t){this.setState({newTodo:t.target.value,todoList:this.state.todoList})}},{key:"delete",value:function(t,e){e.deleted=!0,this.setState(this.state)}}]),e}(o.Component)),b=0;function f(){return b+=1}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.322fdd29.chunk.js.map