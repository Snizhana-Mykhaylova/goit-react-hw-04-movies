(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[4],{86:function(e,t,a){"use strict";a.r(t);var n=a(51),r=a(52),c=a(55),s=a(54),i=a(0),o=a(10),u=a(56),h=a.n(u),l=a(1),m=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={movies:[],query:"",error:null},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handelSubmit=function(t){t.preventDefault(),e.fetchdata(),e.setState({query:""})},e}return Object(r.a)(a,[{key:"fetchdata",value:function(){var e=this;h.a.get("https://api.themoviedb.org/3/search/movie?query=".concat(this.state.query,"&api_key=b3eca1c919732b8163c247708ee195fb")).then((function(e){return e.data})).then((function(t){e.setState({movies:t.results})})).catch((function(t){return e.setState({error:t})}))}},{key:"render",value:function(){var e=this;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("form",{onSubmit:this.handelSubmit,className:"SearchForm",children:Object(l.jsx)("input",{className:"SearchFormInput",value:this.state.query,onChange:this.handleChange,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies"})}),Object(l.jsx)("ul",{children:0===this.state.movies.length?Object(l.jsx)("p",{children:"No results"}):this.state.movies.map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)(o.c,{className:"navLink",to:"".concat(e.props.match.url,"/").concat(t.id),children:t.title?t.title:t.name})},t.id)}))})]})}}]),a}(i.Component);t.default=m}}]);
//# sourceMappingURL=movies-page.46fd8c18.chunk.js.map