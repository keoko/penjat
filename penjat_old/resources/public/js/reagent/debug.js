// Compiled by ClojureScript 1.7.170 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__18115__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18115 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18116__i = 0, G__18116__a = new Array(arguments.length -  0);
while (G__18116__i < G__18116__a.length) {G__18116__a[G__18116__i] = arguments[G__18116__i + 0]; ++G__18116__i;}
  args = new cljs.core.IndexedSeq(G__18116__a,0);
} 
return G__18115__delegate.call(this,args);};
G__18115.cljs$lang$maxFixedArity = 0;
G__18115.cljs$lang$applyTo = (function (arglist__18117){
var args = cljs.core.seq(arglist__18117);
return G__18115__delegate(args);
});
G__18115.cljs$core$IFn$_invoke$arity$variadic = G__18115__delegate;
return G__18115;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__18118__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__18118 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18119__i = 0, G__18119__a = new Array(arguments.length -  0);
while (G__18119__i < G__18119__a.length) {G__18119__a[G__18119__i] = arguments[G__18119__i + 0]; ++G__18119__i;}
  args = new cljs.core.IndexedSeq(G__18119__a,0);
} 
return G__18118__delegate.call(this,args);};
G__18118.cljs$lang$maxFixedArity = 0;
G__18118.cljs$lang$applyTo = (function (arglist__18120){
var args = cljs.core.seq(arglist__18120);
return G__18118__delegate(args);
});
G__18118.cljs$core$IFn$_invoke$arity$variadic = G__18118__delegate;
return G__18118;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1453792882652