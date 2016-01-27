// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.dom !== 'undefined'){
} else {
reagent.dom.dom = (function (){var or__16840__auto__ = (function (){var and__16828__auto__ = typeof ReactDOM !== 'undefined';
if(and__16828__auto__){
return ReactDOM;
} else {
return and__16828__auto__;
}
})();
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
var and__16828__auto__ = typeof require !== 'undefined';
if(and__16828__auto__){
return require("react-dom");
} else {
return and__16828__auto__;
}
}
})();
}
if(cljs.core.truth_(reagent.dom.dom)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Could not find ReactDOM"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"dom","dom",403993605,null)))].join('')));
}
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.dom["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_24677 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.dom["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_24677){
return (function (){
var _STAR_always_update_STAR_24678 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24678;
}});})(_STAR_always_update_STAR_24677))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_24677;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args24679 = [];
var len__17898__auto___24682 = arguments.length;
var i__17899__auto___24683 = (0);
while(true){
if((i__17899__auto___24683 < len__17898__auto___24682)){
args24679.push((arguments[i__17899__auto___24683]));

var G__24684 = (i__17899__auto___24683 + (1));
i__17899__auto___24683 = G__24684;
continue;
} else {
}
break;
}

var G__24681 = args24679.length;
switch (G__24681) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24679.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.dom["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
var seq__24690_24694 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__24691_24695 = null;
var count__24692_24696 = (0);
var i__24693_24697 = (0);
while(true){
if((i__24693_24697 < count__24692_24696)){
var v_24698 = cljs.core._nth.call(null,chunk__24691_24695,i__24693_24697);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_24698);

var G__24699 = seq__24690_24694;
var G__24700 = chunk__24691_24695;
var G__24701 = count__24692_24696;
var G__24702 = (i__24693_24697 + (1));
seq__24690_24694 = G__24699;
chunk__24691_24695 = G__24700;
count__24692_24696 = G__24701;
i__24693_24697 = G__24702;
continue;
} else {
var temp__4425__auto___24703 = cljs.core.seq.call(null,seq__24690_24694);
if(temp__4425__auto___24703){
var seq__24690_24704__$1 = temp__4425__auto___24703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24690_24704__$1)){
var c__17643__auto___24705 = cljs.core.chunk_first.call(null,seq__24690_24704__$1);
var G__24706 = cljs.core.chunk_rest.call(null,seq__24690_24704__$1);
var G__24707 = c__17643__auto___24705;
var G__24708 = cljs.core.count.call(null,c__17643__auto___24705);
var G__24709 = (0);
seq__24690_24694 = G__24706;
chunk__24691_24695 = G__24707;
count__24692_24696 = G__24708;
i__24693_24697 = G__24709;
continue;
} else {
var v_24710 = cljs.core.first.call(null,seq__24690_24704__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_24710);

var G__24711 = cljs.core.next.call(null,seq__24690_24704__$1);
var G__24712 = null;
var G__24713 = (0);
var G__24714 = (0);
seq__24690_24694 = G__24711;
chunk__24691_24695 = G__24712;
count__24692_24696 = G__24713;
i__24693_24697 = G__24714;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1453792890065