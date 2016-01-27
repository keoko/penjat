// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16840__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16840__auto__){
return or__16840__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16840__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__22435_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__22435_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__22440 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__22441 = null;
var count__22442 = (0);
var i__22443 = (0);
while(true){
if((i__22443 < count__22442)){
var n = cljs.core._nth.call(null,chunk__22441,i__22443);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22444 = seq__22440;
var G__22445 = chunk__22441;
var G__22446 = count__22442;
var G__22447 = (i__22443 + (1));
seq__22440 = G__22444;
chunk__22441 = G__22445;
count__22442 = G__22446;
i__22443 = G__22447;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22440);
if(temp__4425__auto__){
var seq__22440__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22440__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__22440__$1);
var G__22448 = cljs.core.chunk_rest.call(null,seq__22440__$1);
var G__22449 = c__17643__auto__;
var G__22450 = cljs.core.count.call(null,c__17643__auto__);
var G__22451 = (0);
seq__22440 = G__22448;
chunk__22441 = G__22449;
count__22442 = G__22450;
i__22443 = G__22451;
continue;
} else {
var n = cljs.core.first.call(null,seq__22440__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__22452 = cljs.core.next.call(null,seq__22440__$1);
var G__22453 = null;
var G__22454 = (0);
var G__22455 = (0);
seq__22440 = G__22452;
chunk__22441 = G__22453;
count__22442 = G__22454;
i__22443 = G__22455;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__22494_22501 = cljs.core.seq.call(null,deps);
var chunk__22495_22502 = null;
var count__22496_22503 = (0);
var i__22497_22504 = (0);
while(true){
if((i__22497_22504 < count__22496_22503)){
var dep_22505 = cljs.core._nth.call(null,chunk__22495_22502,i__22497_22504);
topo_sort_helper_STAR_.call(null,dep_22505,(depth + (1)),state);

var G__22506 = seq__22494_22501;
var G__22507 = chunk__22495_22502;
var G__22508 = count__22496_22503;
var G__22509 = (i__22497_22504 + (1));
seq__22494_22501 = G__22506;
chunk__22495_22502 = G__22507;
count__22496_22503 = G__22508;
i__22497_22504 = G__22509;
continue;
} else {
var temp__4425__auto___22510 = cljs.core.seq.call(null,seq__22494_22501);
if(temp__4425__auto___22510){
var seq__22494_22511__$1 = temp__4425__auto___22510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22494_22511__$1)){
var c__17643__auto___22512 = cljs.core.chunk_first.call(null,seq__22494_22511__$1);
var G__22513 = cljs.core.chunk_rest.call(null,seq__22494_22511__$1);
var G__22514 = c__17643__auto___22512;
var G__22515 = cljs.core.count.call(null,c__17643__auto___22512);
var G__22516 = (0);
seq__22494_22501 = G__22513;
chunk__22495_22502 = G__22514;
count__22496_22503 = G__22515;
i__22497_22504 = G__22516;
continue;
} else {
var dep_22517 = cljs.core.first.call(null,seq__22494_22511__$1);
topo_sort_helper_STAR_.call(null,dep_22517,(depth + (1)),state);

var G__22518 = cljs.core.next.call(null,seq__22494_22511__$1);
var G__22519 = null;
var G__22520 = (0);
var G__22521 = (0);
seq__22494_22501 = G__22518;
chunk__22495_22502 = G__22519;
count__22496_22503 = G__22520;
i__22497_22504 = G__22521;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__22498){
var vec__22500 = p__22498;
var x = cljs.core.nth.call(null,vec__22500,(0),null);
var xs = cljs.core.nthnext.call(null,vec__22500,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__22500,x,xs,get_deps__$1){
return (function (p1__22456_SHARP_){
return clojure.set.difference.call(null,p1__22456_SHARP_,x);
});})(vec__22500,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__22534 = cljs.core.seq.call(null,provides);
var chunk__22535 = null;
var count__22536 = (0);
var i__22537 = (0);
while(true){
if((i__22537 < count__22536)){
var prov = cljs.core._nth.call(null,chunk__22535,i__22537);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22538_22546 = cljs.core.seq.call(null,requires);
var chunk__22539_22547 = null;
var count__22540_22548 = (0);
var i__22541_22549 = (0);
while(true){
if((i__22541_22549 < count__22540_22548)){
var req_22550 = cljs.core._nth.call(null,chunk__22539_22547,i__22541_22549);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22550,prov);

var G__22551 = seq__22538_22546;
var G__22552 = chunk__22539_22547;
var G__22553 = count__22540_22548;
var G__22554 = (i__22541_22549 + (1));
seq__22538_22546 = G__22551;
chunk__22539_22547 = G__22552;
count__22540_22548 = G__22553;
i__22541_22549 = G__22554;
continue;
} else {
var temp__4425__auto___22555 = cljs.core.seq.call(null,seq__22538_22546);
if(temp__4425__auto___22555){
var seq__22538_22556__$1 = temp__4425__auto___22555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22538_22556__$1)){
var c__17643__auto___22557 = cljs.core.chunk_first.call(null,seq__22538_22556__$1);
var G__22558 = cljs.core.chunk_rest.call(null,seq__22538_22556__$1);
var G__22559 = c__17643__auto___22557;
var G__22560 = cljs.core.count.call(null,c__17643__auto___22557);
var G__22561 = (0);
seq__22538_22546 = G__22558;
chunk__22539_22547 = G__22559;
count__22540_22548 = G__22560;
i__22541_22549 = G__22561;
continue;
} else {
var req_22562 = cljs.core.first.call(null,seq__22538_22556__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22562,prov);

var G__22563 = cljs.core.next.call(null,seq__22538_22556__$1);
var G__22564 = null;
var G__22565 = (0);
var G__22566 = (0);
seq__22538_22546 = G__22563;
chunk__22539_22547 = G__22564;
count__22540_22548 = G__22565;
i__22541_22549 = G__22566;
continue;
}
} else {
}
}
break;
}

var G__22567 = seq__22534;
var G__22568 = chunk__22535;
var G__22569 = count__22536;
var G__22570 = (i__22537 + (1));
seq__22534 = G__22567;
chunk__22535 = G__22568;
count__22536 = G__22569;
i__22537 = G__22570;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__22534);
if(temp__4425__auto__){
var seq__22534__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22534__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__22534__$1);
var G__22571 = cljs.core.chunk_rest.call(null,seq__22534__$1);
var G__22572 = c__17643__auto__;
var G__22573 = cljs.core.count.call(null,c__17643__auto__);
var G__22574 = (0);
seq__22534 = G__22571;
chunk__22535 = G__22572;
count__22536 = G__22573;
i__22537 = G__22574;
continue;
} else {
var prov = cljs.core.first.call(null,seq__22534__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__22542_22575 = cljs.core.seq.call(null,requires);
var chunk__22543_22576 = null;
var count__22544_22577 = (0);
var i__22545_22578 = (0);
while(true){
if((i__22545_22578 < count__22544_22577)){
var req_22579 = cljs.core._nth.call(null,chunk__22543_22576,i__22545_22578);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22579,prov);

var G__22580 = seq__22542_22575;
var G__22581 = chunk__22543_22576;
var G__22582 = count__22544_22577;
var G__22583 = (i__22545_22578 + (1));
seq__22542_22575 = G__22580;
chunk__22543_22576 = G__22581;
count__22544_22577 = G__22582;
i__22545_22578 = G__22583;
continue;
} else {
var temp__4425__auto___22584__$1 = cljs.core.seq.call(null,seq__22542_22575);
if(temp__4425__auto___22584__$1){
var seq__22542_22585__$1 = temp__4425__auto___22584__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22542_22585__$1)){
var c__17643__auto___22586 = cljs.core.chunk_first.call(null,seq__22542_22585__$1);
var G__22587 = cljs.core.chunk_rest.call(null,seq__22542_22585__$1);
var G__22588 = c__17643__auto___22586;
var G__22589 = cljs.core.count.call(null,c__17643__auto___22586);
var G__22590 = (0);
seq__22542_22575 = G__22587;
chunk__22543_22576 = G__22588;
count__22544_22577 = G__22589;
i__22545_22578 = G__22590;
continue;
} else {
var req_22591 = cljs.core.first.call(null,seq__22542_22585__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_22591,prov);

var G__22592 = cljs.core.next.call(null,seq__22542_22585__$1);
var G__22593 = null;
var G__22594 = (0);
var G__22595 = (0);
seq__22542_22575 = G__22592;
chunk__22543_22576 = G__22593;
count__22544_22577 = G__22594;
i__22545_22578 = G__22595;
continue;
}
} else {
}
}
break;
}

var G__22596 = cljs.core.next.call(null,seq__22534__$1);
var G__22597 = null;
var G__22598 = (0);
var G__22599 = (0);
seq__22534 = G__22596;
chunk__22535 = G__22597;
count__22536 = G__22598;
i__22537 = G__22599;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__22604_22608 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__22605_22609 = null;
var count__22606_22610 = (0);
var i__22607_22611 = (0);
while(true){
if((i__22607_22611 < count__22606_22610)){
var ns_22612 = cljs.core._nth.call(null,chunk__22605_22609,i__22607_22611);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22612);

var G__22613 = seq__22604_22608;
var G__22614 = chunk__22605_22609;
var G__22615 = count__22606_22610;
var G__22616 = (i__22607_22611 + (1));
seq__22604_22608 = G__22613;
chunk__22605_22609 = G__22614;
count__22606_22610 = G__22615;
i__22607_22611 = G__22616;
continue;
} else {
var temp__4425__auto___22617 = cljs.core.seq.call(null,seq__22604_22608);
if(temp__4425__auto___22617){
var seq__22604_22618__$1 = temp__4425__auto___22617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22604_22618__$1)){
var c__17643__auto___22619 = cljs.core.chunk_first.call(null,seq__22604_22618__$1);
var G__22620 = cljs.core.chunk_rest.call(null,seq__22604_22618__$1);
var G__22621 = c__17643__auto___22619;
var G__22622 = cljs.core.count.call(null,c__17643__auto___22619);
var G__22623 = (0);
seq__22604_22608 = G__22620;
chunk__22605_22609 = G__22621;
count__22606_22610 = G__22622;
i__22607_22611 = G__22623;
continue;
} else {
var ns_22624 = cljs.core.first.call(null,seq__22604_22618__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_22624);

var G__22625 = cljs.core.next.call(null,seq__22604_22618__$1);
var G__22626 = null;
var G__22627 = (0);
var G__22628 = (0);
seq__22604_22608 = G__22625;
chunk__22605_22609 = G__22626;
count__22606_22610 = G__22627;
i__22607_22611 = G__22628;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16840__auto__ = goog.require__;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__22629__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__22629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22630__i = 0, G__22630__a = new Array(arguments.length -  0);
while (G__22630__i < G__22630__a.length) {G__22630__a[G__22630__i] = arguments[G__22630__i + 0]; ++G__22630__i;}
  args = new cljs.core.IndexedSeq(G__22630__a,0);
} 
return G__22629__delegate.call(this,args);};
G__22629.cljs$lang$maxFixedArity = 0;
G__22629.cljs$lang$applyTo = (function (arglist__22631){
var args = cljs.core.seq(arglist__22631);
return G__22629__delegate(args);
});
G__22629.cljs$core$IFn$_invoke$arity$variadic = G__22629__delegate;
return G__22629;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__22633 = cljs.core._EQ_;
var expr__22634 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__22633.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__22634))){
var path_parts = ((function (pred__22633,expr__22634){
return (function (p1__22632_SHARP_){
return clojure.string.split.call(null,p1__22632_SHARP_,/[\/\\]/);
});})(pred__22633,expr__22634))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__22633,expr__22634){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e22636){if((e22636 instanceof Error)){
var e = e22636;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e22636;

}
}})());
});
;})(path_parts,sep,root,pred__22633,expr__22634))
} else {
if(cljs.core.truth_(pred__22633.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__22634))){
return ((function (pred__22633,expr__22634){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__22633,expr__22634){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__22633,expr__22634))
);

return deferred.addErrback(((function (deferred,pred__22633,expr__22634){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__22633,expr__22634))
);
});
;})(pred__22633,expr__22634))
} else {
return ((function (pred__22633,expr__22634){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__22633,expr__22634))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__22637,callback){
var map__22640 = p__22637;
var map__22640__$1 = ((((!((map__22640 == null)))?((((map__22640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22640):map__22640);
var file_msg = map__22640__$1;
var request_url = cljs.core.get.call(null,map__22640__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__22640,map__22640__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__22640,map__22640__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto__){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto__){
return (function (state_22664){
var state_val_22665 = (state_22664[(1)]);
if((state_val_22665 === (7))){
var inst_22660 = (state_22664[(2)]);
var state_22664__$1 = state_22664;
var statearr_22666_22686 = state_22664__$1;
(statearr_22666_22686[(2)] = inst_22660);

(statearr_22666_22686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22665 === (1))){
var state_22664__$1 = state_22664;
var statearr_22667_22687 = state_22664__$1;
(statearr_22667_22687[(2)] = null);

(statearr_22667_22687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22665 === (4))){
var inst_22644 = (state_22664[(7)]);
var inst_22644__$1 = (state_22664[(2)]);
var state_22664__$1 = (function (){var statearr_22668 = state_22664;
(statearr_22668[(7)] = inst_22644__$1);

return statearr_22668;
})();
if(cljs.core.truth_(inst_22644__$1)){
var statearr_22669_22688 = state_22664__$1;
(statearr_22669_22688[(1)] = (5));

} else {
var statearr_22670_22689 = state_22664__$1;
(statearr_22670_22689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22665 === (6))){
var state_22664__$1 = state_22664;
var statearr_22671_22690 = state_22664__$1;
(statearr_22671_22690[(2)] = null);

(statearr_22671_22690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22665 === (3))){
var inst_22662 = (state_22664[(2)]);
var state_22664__$1 = state_22664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22664__$1,inst_22662);
} else {
if((state_val_22665 === (2))){
var state_22664__$1 = state_22664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22664__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_22665 === (11))){
var inst_22656 = (state_22664[(2)]);
var state_22664__$1 = (function (){var statearr_22672 = state_22664;
(statearr_22672[(8)] = inst_22656);

return statearr_22672;
})();
var statearr_22673_22691 = state_22664__$1;
(statearr_22673_22691[(2)] = null);

(statearr_22673_22691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22665 === (9))){
var inst_22650 = (state_22664[(9)]);
var inst_22648 = (state_22664[(10)]);
var inst_22652 = inst_22650.call(null,inst_22648);
var state_22664__$1 = state_22664;
var statearr_22674_22692 = state_22664__$1;
(statearr_22674_22692[(2)] = inst_22652);

(statearr_22674_22692[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22665 === (5))){
var inst_22644 = (state_22664[(7)]);
var inst_22646 = figwheel.client.file_reloading.blocking_load.call(null,inst_22644);
var state_22664__$1 = state_22664;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22664__$1,(8),inst_22646);
} else {
if((state_val_22665 === (10))){
var inst_22648 = (state_22664[(10)]);
var inst_22654 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_22648);
var state_22664__$1 = state_22664;
var statearr_22675_22693 = state_22664__$1;
(statearr_22675_22693[(2)] = inst_22654);

(statearr_22675_22693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22665 === (8))){
var inst_22650 = (state_22664[(9)]);
var inst_22644 = (state_22664[(7)]);
var inst_22648 = (state_22664[(2)]);
var inst_22649 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_22650__$1 = cljs.core.get.call(null,inst_22649,inst_22644);
var state_22664__$1 = (function (){var statearr_22676 = state_22664;
(statearr_22676[(9)] = inst_22650__$1);

(statearr_22676[(10)] = inst_22648);

return statearr_22676;
})();
if(cljs.core.truth_(inst_22650__$1)){
var statearr_22677_22694 = state_22664__$1;
(statearr_22677_22694[(1)] = (9));

} else {
var statearr_22678_22695 = state_22664__$1;
(statearr_22678_22695[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19602__auto__))
;
return ((function (switch__19490__auto__,c__19602__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19491__auto__ = null;
var figwheel$client$file_reloading$state_machine__19491__auto____0 = (function (){
var statearr_22682 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22682[(0)] = figwheel$client$file_reloading$state_machine__19491__auto__);

(statearr_22682[(1)] = (1));

return statearr_22682;
});
var figwheel$client$file_reloading$state_machine__19491__auto____1 = (function (state_22664){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_22664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e22683){if((e22683 instanceof Object)){
var ex__19494__auto__ = e22683;
var statearr_22684_22696 = state_22664;
(statearr_22684_22696[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22697 = state_22664;
state_22664 = G__22697;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19491__auto__ = function(state_22664){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19491__auto____1.call(this,state_22664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19491__auto____0;
figwheel$client$file_reloading$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19491__auto____1;
return figwheel$client$file_reloading$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto__))
})();
var state__19604__auto__ = (function (){var statearr_22685 = f__19603__auto__.call(null);
(statearr_22685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto__);

return statearr_22685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto__))
);

return c__19602__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__22698,callback){
var map__22701 = p__22698;
var map__22701__$1 = ((((!((map__22701 == null)))?((((map__22701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22701):map__22701);
var file_msg = map__22701__$1;
var namespace = cljs.core.get.call(null,map__22701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__22701,map__22701__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__22701,map__22701__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__22703){
var map__22706 = p__22703;
var map__22706__$1 = ((((!((map__22706 == null)))?((((map__22706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22706):map__22706);
var file_msg = map__22706__$1;
var namespace = cljs.core.get.call(null,map__22706__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16828__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16828__auto__){
var or__16840__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
var or__16840__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16840__auto____$1)){
return or__16840__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16828__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__22708,callback){
var map__22711 = p__22708;
var map__22711__$1 = ((((!((map__22711 == null)))?((((map__22711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22711):map__22711);
var file_msg = map__22711__$1;
var request_url = cljs.core.get.call(null,map__22711__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__22711__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19602__auto___22799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___22799,out){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___22799,out){
return (function (state_22781){
var state_val_22782 = (state_22781[(1)]);
if((state_val_22782 === (1))){
var inst_22759 = cljs.core.nth.call(null,files,(0),null);
var inst_22760 = cljs.core.nthnext.call(null,files,(1));
var inst_22761 = files;
var state_22781__$1 = (function (){var statearr_22783 = state_22781;
(statearr_22783[(7)] = inst_22760);

(statearr_22783[(8)] = inst_22761);

(statearr_22783[(9)] = inst_22759);

return statearr_22783;
})();
var statearr_22784_22800 = state_22781__$1;
(statearr_22784_22800[(2)] = null);

(statearr_22784_22800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (2))){
var inst_22761 = (state_22781[(8)]);
var inst_22764 = (state_22781[(10)]);
var inst_22764__$1 = cljs.core.nth.call(null,inst_22761,(0),null);
var inst_22765 = cljs.core.nthnext.call(null,inst_22761,(1));
var inst_22766 = (inst_22764__$1 == null);
var inst_22767 = cljs.core.not.call(null,inst_22766);
var state_22781__$1 = (function (){var statearr_22785 = state_22781;
(statearr_22785[(10)] = inst_22764__$1);

(statearr_22785[(11)] = inst_22765);

return statearr_22785;
})();
if(inst_22767){
var statearr_22786_22801 = state_22781__$1;
(statearr_22786_22801[(1)] = (4));

} else {
var statearr_22787_22802 = state_22781__$1;
(statearr_22787_22802[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (3))){
var inst_22779 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22781__$1,inst_22779);
} else {
if((state_val_22782 === (4))){
var inst_22764 = (state_22781[(10)]);
var inst_22769 = figwheel.client.file_reloading.reload_js_file.call(null,inst_22764);
var state_22781__$1 = state_22781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22781__$1,(7),inst_22769);
} else {
if((state_val_22782 === (5))){
var inst_22775 = cljs.core.async.close_BANG_.call(null,out);
var state_22781__$1 = state_22781;
var statearr_22788_22803 = state_22781__$1;
(statearr_22788_22803[(2)] = inst_22775);

(statearr_22788_22803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (6))){
var inst_22777 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
var statearr_22789_22804 = state_22781__$1;
(statearr_22789_22804[(2)] = inst_22777);

(statearr_22789_22804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (7))){
var inst_22765 = (state_22781[(11)]);
var inst_22771 = (state_22781[(2)]);
var inst_22772 = cljs.core.async.put_BANG_.call(null,out,inst_22771);
var inst_22761 = inst_22765;
var state_22781__$1 = (function (){var statearr_22790 = state_22781;
(statearr_22790[(8)] = inst_22761);

(statearr_22790[(12)] = inst_22772);

return statearr_22790;
})();
var statearr_22791_22805 = state_22781__$1;
(statearr_22791_22805[(2)] = null);

(statearr_22791_22805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19602__auto___22799,out))
;
return ((function (switch__19490__auto__,c__19602__auto___22799,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto____0 = (function (){
var statearr_22795 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22795[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto__);

(statearr_22795[(1)] = (1));

return statearr_22795;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto____1 = (function (state_22781){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_22781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e22796){if((e22796 instanceof Object)){
var ex__19494__auto__ = e22796;
var statearr_22797_22806 = state_22781;
(statearr_22797_22806[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22807 = state_22781;
state_22781 = G__22807;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto__ = function(state_22781){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto____1.call(this,state_22781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___22799,out))
})();
var state__19604__auto__ = (function (){var statearr_22798 = f__19603__auto__.call(null);
(statearr_22798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___22799);

return statearr_22798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___22799,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__22808,opts){
var map__22812 = p__22808;
var map__22812__$1 = ((((!((map__22812 == null)))?((((map__22812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22812):map__22812);
var eval_body__$1 = cljs.core.get.call(null,map__22812__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__22812__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16828__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16828__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16828__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e22814){var e = e22814;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__22815_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22815_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__22820){
var vec__22821 = p__22820;
var k = cljs.core.nth.call(null,vec__22821,(0),null);
var v = cljs.core.nth.call(null,vec__22821,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__22822){
var vec__22823 = p__22822;
var k = cljs.core.nth.call(null,vec__22823,(0),null);
var v = cljs.core.nth.call(null,vec__22823,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__22827,p__22828){
var map__23075 = p__22827;
var map__23075__$1 = ((((!((map__23075 == null)))?((((map__23075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23075):map__23075);
var opts = map__23075__$1;
var before_jsload = cljs.core.get.call(null,map__23075__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23075__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23075__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23076 = p__22828;
var map__23076__$1 = ((((!((map__23076 == null)))?((((map__23076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23076):map__23076);
var msg = map__23076__$1;
var files = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23076__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23229){
var state_val_23230 = (state_23229[(1)]);
if((state_val_23230 === (7))){
var inst_23093 = (state_23229[(7)]);
var inst_23091 = (state_23229[(8)]);
var inst_23092 = (state_23229[(9)]);
var inst_23090 = (state_23229[(10)]);
var inst_23098 = cljs.core._nth.call(null,inst_23091,inst_23093);
var inst_23099 = figwheel.client.file_reloading.eval_body.call(null,inst_23098,opts);
var inst_23100 = (inst_23093 + (1));
var tmp23231 = inst_23091;
var tmp23232 = inst_23092;
var tmp23233 = inst_23090;
var inst_23090__$1 = tmp23233;
var inst_23091__$1 = tmp23231;
var inst_23092__$1 = tmp23232;
var inst_23093__$1 = inst_23100;
var state_23229__$1 = (function (){var statearr_23234 = state_23229;
(statearr_23234[(11)] = inst_23099);

(statearr_23234[(7)] = inst_23093__$1);

(statearr_23234[(8)] = inst_23091__$1);

(statearr_23234[(9)] = inst_23092__$1);

(statearr_23234[(10)] = inst_23090__$1);

return statearr_23234;
})();
var statearr_23235_23321 = state_23229__$1;
(statearr_23235_23321[(2)] = null);

(statearr_23235_23321[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (20))){
var inst_23133 = (state_23229[(12)]);
var inst_23141 = figwheel.client.file_reloading.sort_files.call(null,inst_23133);
var state_23229__$1 = state_23229;
var statearr_23236_23322 = state_23229__$1;
(statearr_23236_23322[(2)] = inst_23141);

(statearr_23236_23322[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (27))){
var state_23229__$1 = state_23229;
var statearr_23237_23323 = state_23229__$1;
(statearr_23237_23323[(2)] = null);

(statearr_23237_23323[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (1))){
var inst_23082 = (state_23229[(13)]);
var inst_23079 = before_jsload.call(null,files);
var inst_23080 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23081 = (function (){return ((function (inst_23082,inst_23079,inst_23080,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22824_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22824_SHARP_);
});
;})(inst_23082,inst_23079,inst_23080,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23082__$1 = cljs.core.filter.call(null,inst_23081,files);
var inst_23083 = cljs.core.not_empty.call(null,inst_23082__$1);
var state_23229__$1 = (function (){var statearr_23238 = state_23229;
(statearr_23238[(14)] = inst_23080);

(statearr_23238[(13)] = inst_23082__$1);

(statearr_23238[(15)] = inst_23079);

return statearr_23238;
})();
if(cljs.core.truth_(inst_23083)){
var statearr_23239_23324 = state_23229__$1;
(statearr_23239_23324[(1)] = (2));

} else {
var statearr_23240_23325 = state_23229__$1;
(statearr_23240_23325[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (24))){
var state_23229__$1 = state_23229;
var statearr_23241_23326 = state_23229__$1;
(statearr_23241_23326[(2)] = null);

(statearr_23241_23326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (39))){
var inst_23183 = (state_23229[(16)]);
var state_23229__$1 = state_23229;
var statearr_23242_23327 = state_23229__$1;
(statearr_23242_23327[(2)] = inst_23183);

(statearr_23242_23327[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (46))){
var inst_23224 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
var statearr_23243_23328 = state_23229__$1;
(statearr_23243_23328[(2)] = inst_23224);

(statearr_23243_23328[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (4))){
var inst_23127 = (state_23229[(2)]);
var inst_23128 = cljs.core.List.EMPTY;
var inst_23129 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23128);
var inst_23130 = (function (){return ((function (inst_23127,inst_23128,inst_23129,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22825_SHARP_){
var and__16828__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__22825_SHARP_);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__22825_SHARP_));
} else {
return and__16828__auto__;
}
});
;})(inst_23127,inst_23128,inst_23129,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23131 = cljs.core.filter.call(null,inst_23130,files);
var inst_23132 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23133 = cljs.core.concat.call(null,inst_23131,inst_23132);
var state_23229__$1 = (function (){var statearr_23244 = state_23229;
(statearr_23244[(12)] = inst_23133);

(statearr_23244[(17)] = inst_23129);

(statearr_23244[(18)] = inst_23127);

return statearr_23244;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23245_23329 = state_23229__$1;
(statearr_23245_23329[(1)] = (16));

} else {
var statearr_23246_23330 = state_23229__$1;
(statearr_23246_23330[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (15))){
var inst_23117 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
var statearr_23247_23331 = state_23229__$1;
(statearr_23247_23331[(2)] = inst_23117);

(statearr_23247_23331[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (21))){
var inst_23143 = (state_23229[(19)]);
var inst_23143__$1 = (state_23229[(2)]);
var inst_23144 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23143__$1);
var state_23229__$1 = (function (){var statearr_23248 = state_23229;
(statearr_23248[(19)] = inst_23143__$1);

return statearr_23248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23229__$1,(22),inst_23144);
} else {
if((state_val_23230 === (31))){
var inst_23227 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23229__$1,inst_23227);
} else {
if((state_val_23230 === (32))){
var inst_23183 = (state_23229[(16)]);
var inst_23188 = inst_23183.cljs$lang$protocol_mask$partition0$;
var inst_23189 = (inst_23188 & (64));
var inst_23190 = inst_23183.cljs$core$ISeq$;
var inst_23191 = (inst_23189) || (inst_23190);
var state_23229__$1 = state_23229;
if(cljs.core.truth_(inst_23191)){
var statearr_23249_23332 = state_23229__$1;
(statearr_23249_23332[(1)] = (35));

} else {
var statearr_23250_23333 = state_23229__$1;
(statearr_23250_23333[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (40))){
var inst_23204 = (state_23229[(20)]);
var inst_23203 = (state_23229[(2)]);
var inst_23204__$1 = cljs.core.get.call(null,inst_23203,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23205 = cljs.core.get.call(null,inst_23203,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23206 = cljs.core.not_empty.call(null,inst_23204__$1);
var state_23229__$1 = (function (){var statearr_23251 = state_23229;
(statearr_23251[(20)] = inst_23204__$1);

(statearr_23251[(21)] = inst_23205);

return statearr_23251;
})();
if(cljs.core.truth_(inst_23206)){
var statearr_23252_23334 = state_23229__$1;
(statearr_23252_23334[(1)] = (41));

} else {
var statearr_23253_23335 = state_23229__$1;
(statearr_23253_23335[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (33))){
var state_23229__$1 = state_23229;
var statearr_23254_23336 = state_23229__$1;
(statearr_23254_23336[(2)] = false);

(statearr_23254_23336[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (13))){
var inst_23103 = (state_23229[(22)]);
var inst_23107 = cljs.core.chunk_first.call(null,inst_23103);
var inst_23108 = cljs.core.chunk_rest.call(null,inst_23103);
var inst_23109 = cljs.core.count.call(null,inst_23107);
var inst_23090 = inst_23108;
var inst_23091 = inst_23107;
var inst_23092 = inst_23109;
var inst_23093 = (0);
var state_23229__$1 = (function (){var statearr_23255 = state_23229;
(statearr_23255[(7)] = inst_23093);

(statearr_23255[(8)] = inst_23091);

(statearr_23255[(9)] = inst_23092);

(statearr_23255[(10)] = inst_23090);

return statearr_23255;
})();
var statearr_23256_23337 = state_23229__$1;
(statearr_23256_23337[(2)] = null);

(statearr_23256_23337[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (22))){
var inst_23151 = (state_23229[(23)]);
var inst_23147 = (state_23229[(24)]);
var inst_23146 = (state_23229[(25)]);
var inst_23143 = (state_23229[(19)]);
var inst_23146__$1 = (state_23229[(2)]);
var inst_23147__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23146__$1);
var inst_23148 = (function (){var all_files = inst_23143;
var res_SINGLEQUOTE_ = inst_23146__$1;
var res = inst_23147__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23151,inst_23147,inst_23146,inst_23143,inst_23146__$1,inst_23147__$1,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__22826_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__22826_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23151,inst_23147,inst_23146,inst_23143,inst_23146__$1,inst_23147__$1,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23149 = cljs.core.filter.call(null,inst_23148,inst_23146__$1);
var inst_23150 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23151__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23150);
var inst_23152 = cljs.core.not_empty.call(null,inst_23151__$1);
var state_23229__$1 = (function (){var statearr_23257 = state_23229;
(statearr_23257[(23)] = inst_23151__$1);

(statearr_23257[(24)] = inst_23147__$1);

(statearr_23257[(25)] = inst_23146__$1);

(statearr_23257[(26)] = inst_23149);

return statearr_23257;
})();
if(cljs.core.truth_(inst_23152)){
var statearr_23258_23338 = state_23229__$1;
(statearr_23258_23338[(1)] = (23));

} else {
var statearr_23259_23339 = state_23229__$1;
(statearr_23259_23339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (36))){
var state_23229__$1 = state_23229;
var statearr_23260_23340 = state_23229__$1;
(statearr_23260_23340[(2)] = false);

(statearr_23260_23340[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (41))){
var inst_23204 = (state_23229[(20)]);
var inst_23208 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23209 = cljs.core.map.call(null,inst_23208,inst_23204);
var inst_23210 = cljs.core.pr_str.call(null,inst_23209);
var inst_23211 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23210)].join('');
var inst_23212 = figwheel.client.utils.log.call(null,inst_23211);
var state_23229__$1 = state_23229;
var statearr_23261_23341 = state_23229__$1;
(statearr_23261_23341[(2)] = inst_23212);

(statearr_23261_23341[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (43))){
var inst_23205 = (state_23229[(21)]);
var inst_23215 = (state_23229[(2)]);
var inst_23216 = cljs.core.not_empty.call(null,inst_23205);
var state_23229__$1 = (function (){var statearr_23262 = state_23229;
(statearr_23262[(27)] = inst_23215);

return statearr_23262;
})();
if(cljs.core.truth_(inst_23216)){
var statearr_23263_23342 = state_23229__$1;
(statearr_23263_23342[(1)] = (44));

} else {
var statearr_23264_23343 = state_23229__$1;
(statearr_23264_23343[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (29))){
var inst_23183 = (state_23229[(16)]);
var inst_23151 = (state_23229[(23)]);
var inst_23147 = (state_23229[(24)]);
var inst_23146 = (state_23229[(25)]);
var inst_23143 = (state_23229[(19)]);
var inst_23149 = (state_23229[(26)]);
var inst_23179 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23182 = (function (){var all_files = inst_23143;
var res_SINGLEQUOTE_ = inst_23146;
var res = inst_23147;
var files_not_loaded = inst_23149;
var dependencies_that_loaded = inst_23151;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23183,inst_23151,inst_23147,inst_23146,inst_23143,inst_23149,inst_23179,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23181){
var map__23265 = p__23181;
var map__23265__$1 = ((((!((map__23265 == null)))?((((map__23265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23265):map__23265);
var namespace = cljs.core.get.call(null,map__23265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23183,inst_23151,inst_23147,inst_23146,inst_23143,inst_23149,inst_23179,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23183__$1 = cljs.core.group_by.call(null,inst_23182,inst_23149);
var inst_23185 = (inst_23183__$1 == null);
var inst_23186 = cljs.core.not.call(null,inst_23185);
var state_23229__$1 = (function (){var statearr_23267 = state_23229;
(statearr_23267[(16)] = inst_23183__$1);

(statearr_23267[(28)] = inst_23179);

return statearr_23267;
})();
if(inst_23186){
var statearr_23268_23344 = state_23229__$1;
(statearr_23268_23344[(1)] = (32));

} else {
var statearr_23269_23345 = state_23229__$1;
(statearr_23269_23345[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (44))){
var inst_23205 = (state_23229[(21)]);
var inst_23218 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23205);
var inst_23219 = cljs.core.pr_str.call(null,inst_23218);
var inst_23220 = [cljs.core.str("not required: "),cljs.core.str(inst_23219)].join('');
var inst_23221 = figwheel.client.utils.log.call(null,inst_23220);
var state_23229__$1 = state_23229;
var statearr_23270_23346 = state_23229__$1;
(statearr_23270_23346[(2)] = inst_23221);

(statearr_23270_23346[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (6))){
var inst_23124 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
var statearr_23271_23347 = state_23229__$1;
(statearr_23271_23347[(2)] = inst_23124);

(statearr_23271_23347[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (28))){
var inst_23149 = (state_23229[(26)]);
var inst_23176 = (state_23229[(2)]);
var inst_23177 = cljs.core.not_empty.call(null,inst_23149);
var state_23229__$1 = (function (){var statearr_23272 = state_23229;
(statearr_23272[(29)] = inst_23176);

return statearr_23272;
})();
if(cljs.core.truth_(inst_23177)){
var statearr_23273_23348 = state_23229__$1;
(statearr_23273_23348[(1)] = (29));

} else {
var statearr_23274_23349 = state_23229__$1;
(statearr_23274_23349[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (25))){
var inst_23147 = (state_23229[(24)]);
var inst_23163 = (state_23229[(2)]);
var inst_23164 = cljs.core.not_empty.call(null,inst_23147);
var state_23229__$1 = (function (){var statearr_23275 = state_23229;
(statearr_23275[(30)] = inst_23163);

return statearr_23275;
})();
if(cljs.core.truth_(inst_23164)){
var statearr_23276_23350 = state_23229__$1;
(statearr_23276_23350[(1)] = (26));

} else {
var statearr_23277_23351 = state_23229__$1;
(statearr_23277_23351[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (34))){
var inst_23198 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
if(cljs.core.truth_(inst_23198)){
var statearr_23278_23352 = state_23229__$1;
(statearr_23278_23352[(1)] = (38));

} else {
var statearr_23279_23353 = state_23229__$1;
(statearr_23279_23353[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (17))){
var state_23229__$1 = state_23229;
var statearr_23280_23354 = state_23229__$1;
(statearr_23280_23354[(2)] = recompile_dependents);

(statearr_23280_23354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (3))){
var state_23229__$1 = state_23229;
var statearr_23281_23355 = state_23229__$1;
(statearr_23281_23355[(2)] = null);

(statearr_23281_23355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (12))){
var inst_23120 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
var statearr_23282_23356 = state_23229__$1;
(statearr_23282_23356[(2)] = inst_23120);

(statearr_23282_23356[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (2))){
var inst_23082 = (state_23229[(13)]);
var inst_23089 = cljs.core.seq.call(null,inst_23082);
var inst_23090 = inst_23089;
var inst_23091 = null;
var inst_23092 = (0);
var inst_23093 = (0);
var state_23229__$1 = (function (){var statearr_23283 = state_23229;
(statearr_23283[(7)] = inst_23093);

(statearr_23283[(8)] = inst_23091);

(statearr_23283[(9)] = inst_23092);

(statearr_23283[(10)] = inst_23090);

return statearr_23283;
})();
var statearr_23284_23357 = state_23229__$1;
(statearr_23284_23357[(2)] = null);

(statearr_23284_23357[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (23))){
var inst_23151 = (state_23229[(23)]);
var inst_23147 = (state_23229[(24)]);
var inst_23146 = (state_23229[(25)]);
var inst_23143 = (state_23229[(19)]);
var inst_23149 = (state_23229[(26)]);
var inst_23154 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23156 = (function (){var all_files = inst_23143;
var res_SINGLEQUOTE_ = inst_23146;
var res = inst_23147;
var files_not_loaded = inst_23149;
var dependencies_that_loaded = inst_23151;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23151,inst_23147,inst_23146,inst_23143,inst_23149,inst_23154,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23155){
var map__23285 = p__23155;
var map__23285__$1 = ((((!((map__23285 == null)))?((((map__23285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23285):map__23285);
var request_url = cljs.core.get.call(null,map__23285__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23151,inst_23147,inst_23146,inst_23143,inst_23149,inst_23154,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23157 = cljs.core.reverse.call(null,inst_23151);
var inst_23158 = cljs.core.map.call(null,inst_23156,inst_23157);
var inst_23159 = cljs.core.pr_str.call(null,inst_23158);
var inst_23160 = figwheel.client.utils.log.call(null,inst_23159);
var state_23229__$1 = (function (){var statearr_23287 = state_23229;
(statearr_23287[(31)] = inst_23154);

return statearr_23287;
})();
var statearr_23288_23358 = state_23229__$1;
(statearr_23288_23358[(2)] = inst_23160);

(statearr_23288_23358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (35))){
var state_23229__$1 = state_23229;
var statearr_23289_23359 = state_23229__$1;
(statearr_23289_23359[(2)] = true);

(statearr_23289_23359[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (19))){
var inst_23133 = (state_23229[(12)]);
var inst_23139 = figwheel.client.file_reloading.expand_files.call(null,inst_23133);
var state_23229__$1 = state_23229;
var statearr_23290_23360 = state_23229__$1;
(statearr_23290_23360[(2)] = inst_23139);

(statearr_23290_23360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (11))){
var state_23229__$1 = state_23229;
var statearr_23291_23361 = state_23229__$1;
(statearr_23291_23361[(2)] = null);

(statearr_23291_23361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (9))){
var inst_23122 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
var statearr_23292_23362 = state_23229__$1;
(statearr_23292_23362[(2)] = inst_23122);

(statearr_23292_23362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (5))){
var inst_23093 = (state_23229[(7)]);
var inst_23092 = (state_23229[(9)]);
var inst_23095 = (inst_23093 < inst_23092);
var inst_23096 = inst_23095;
var state_23229__$1 = state_23229;
if(cljs.core.truth_(inst_23096)){
var statearr_23293_23363 = state_23229__$1;
(statearr_23293_23363[(1)] = (7));

} else {
var statearr_23294_23364 = state_23229__$1;
(statearr_23294_23364[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (14))){
var inst_23103 = (state_23229[(22)]);
var inst_23112 = cljs.core.first.call(null,inst_23103);
var inst_23113 = figwheel.client.file_reloading.eval_body.call(null,inst_23112,opts);
var inst_23114 = cljs.core.next.call(null,inst_23103);
var inst_23090 = inst_23114;
var inst_23091 = null;
var inst_23092 = (0);
var inst_23093 = (0);
var state_23229__$1 = (function (){var statearr_23295 = state_23229;
(statearr_23295[(32)] = inst_23113);

(statearr_23295[(7)] = inst_23093);

(statearr_23295[(8)] = inst_23091);

(statearr_23295[(9)] = inst_23092);

(statearr_23295[(10)] = inst_23090);

return statearr_23295;
})();
var statearr_23296_23365 = state_23229__$1;
(statearr_23296_23365[(2)] = null);

(statearr_23296_23365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (45))){
var state_23229__$1 = state_23229;
var statearr_23297_23366 = state_23229__$1;
(statearr_23297_23366[(2)] = null);

(statearr_23297_23366[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (26))){
var inst_23151 = (state_23229[(23)]);
var inst_23147 = (state_23229[(24)]);
var inst_23146 = (state_23229[(25)]);
var inst_23143 = (state_23229[(19)]);
var inst_23149 = (state_23229[(26)]);
var inst_23166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23168 = (function (){var all_files = inst_23143;
var res_SINGLEQUOTE_ = inst_23146;
var res = inst_23147;
var files_not_loaded = inst_23149;
var dependencies_that_loaded = inst_23151;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23151,inst_23147,inst_23146,inst_23143,inst_23149,inst_23166,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23167){
var map__23298 = p__23167;
var map__23298__$1 = ((((!((map__23298 == null)))?((((map__23298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23298):map__23298);
var namespace = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__23298__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23151,inst_23147,inst_23146,inst_23143,inst_23149,inst_23166,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23169 = cljs.core.map.call(null,inst_23168,inst_23147);
var inst_23170 = cljs.core.pr_str.call(null,inst_23169);
var inst_23171 = figwheel.client.utils.log.call(null,inst_23170);
var inst_23172 = (function (){var all_files = inst_23143;
var res_SINGLEQUOTE_ = inst_23146;
var res = inst_23147;
var files_not_loaded = inst_23149;
var dependencies_that_loaded = inst_23151;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23151,inst_23147,inst_23146,inst_23143,inst_23149,inst_23166,inst_23168,inst_23169,inst_23170,inst_23171,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23151,inst_23147,inst_23146,inst_23143,inst_23149,inst_23166,inst_23168,inst_23169,inst_23170,inst_23171,state_val_23230,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23173 = setTimeout(inst_23172,(10));
var state_23229__$1 = (function (){var statearr_23300 = state_23229;
(statearr_23300[(33)] = inst_23171);

(statearr_23300[(34)] = inst_23166);

return statearr_23300;
})();
var statearr_23301_23367 = state_23229__$1;
(statearr_23301_23367[(2)] = inst_23173);

(statearr_23301_23367[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (16))){
var state_23229__$1 = state_23229;
var statearr_23302_23368 = state_23229__$1;
(statearr_23302_23368[(2)] = reload_dependents);

(statearr_23302_23368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (38))){
var inst_23183 = (state_23229[(16)]);
var inst_23200 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23183);
var state_23229__$1 = state_23229;
var statearr_23303_23369 = state_23229__$1;
(statearr_23303_23369[(2)] = inst_23200);

(statearr_23303_23369[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (30))){
var state_23229__$1 = state_23229;
var statearr_23304_23370 = state_23229__$1;
(statearr_23304_23370[(2)] = null);

(statearr_23304_23370[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (10))){
var inst_23103 = (state_23229[(22)]);
var inst_23105 = cljs.core.chunked_seq_QMARK_.call(null,inst_23103);
var state_23229__$1 = state_23229;
if(inst_23105){
var statearr_23305_23371 = state_23229__$1;
(statearr_23305_23371[(1)] = (13));

} else {
var statearr_23306_23372 = state_23229__$1;
(statearr_23306_23372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (18))){
var inst_23137 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
if(cljs.core.truth_(inst_23137)){
var statearr_23307_23373 = state_23229__$1;
(statearr_23307_23373[(1)] = (19));

} else {
var statearr_23308_23374 = state_23229__$1;
(statearr_23308_23374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (42))){
var state_23229__$1 = state_23229;
var statearr_23309_23375 = state_23229__$1;
(statearr_23309_23375[(2)] = null);

(statearr_23309_23375[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (37))){
var inst_23195 = (state_23229[(2)]);
var state_23229__$1 = state_23229;
var statearr_23310_23376 = state_23229__$1;
(statearr_23310_23376[(2)] = inst_23195);

(statearr_23310_23376[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23230 === (8))){
var inst_23090 = (state_23229[(10)]);
var inst_23103 = (state_23229[(22)]);
var inst_23103__$1 = cljs.core.seq.call(null,inst_23090);
var state_23229__$1 = (function (){var statearr_23311 = state_23229;
(statearr_23311[(22)] = inst_23103__$1);

return statearr_23311;
})();
if(inst_23103__$1){
var statearr_23312_23377 = state_23229__$1;
(statearr_23312_23377[(1)] = (10));

} else {
var statearr_23313_23378 = state_23229__$1;
(statearr_23313_23378[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19490__auto__,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto____0 = (function (){
var statearr_23317 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23317[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto__);

(statearr_23317[(1)] = (1));

return statearr_23317;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto____1 = (function (state_23229){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_23229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e23318){if((e23318 instanceof Object)){
var ex__19494__auto__ = e23318;
var statearr_23319_23379 = state_23229;
(statearr_23319_23379[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23380 = state_23229;
state_23229 = G__23380;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto__ = function(state_23229){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto____1.call(this,state_23229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19604__auto__ = (function (){var statearr_23320 = f__19603__auto__.call(null);
(statearr_23320[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto__);

return statearr_23320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto__,map__23075,map__23075__$1,opts,before_jsload,on_jsload,reload_dependents,map__23076,map__23076__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19602__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__23383,link){
var map__23386 = p__23383;
var map__23386__$1 = ((((!((map__23386 == null)))?((((map__23386.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23386.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23386):map__23386);
var file = cljs.core.get.call(null,map__23386__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__23386,map__23386__$1,file){
return (function (p1__23381_SHARP_,p2__23382_SHARP_){
if(cljs.core._EQ_.call(null,p1__23381_SHARP_,p2__23382_SHARP_)){
return p1__23381_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__23386,map__23386__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__23392){
var map__23393 = p__23392;
var map__23393__$1 = ((((!((map__23393 == null)))?((((map__23393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23393):map__23393);
var match_length = cljs.core.get.call(null,map__23393__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__23393__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__23388_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__23388_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args23395 = [];
var len__17898__auto___23398 = arguments.length;
var i__17899__auto___23399 = (0);
while(true){
if((i__17899__auto___23399 < len__17898__auto___23398)){
args23395.push((arguments[i__17899__auto___23399]));

var G__23400 = (i__17899__auto___23399 + (1));
i__17899__auto___23399 = G__23400;
continue;
} else {
}
break;
}

var G__23397 = args23395.length;
switch (G__23397) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23395.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__23402_SHARP_,p2__23403_SHARP_){
return cljs.core.assoc.call(null,p1__23402_SHARP_,cljs.core.get.call(null,p2__23403_SHARP_,key),p2__23403_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__23404){
var map__23407 = p__23404;
var map__23407__$1 = ((((!((map__23407 == null)))?((((map__23407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23407):map__23407);
var f_data = map__23407__$1;
var file = cljs.core.get.call(null,map__23407__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__23409,files_msg){
var map__23416 = p__23409;
var map__23416__$1 = ((((!((map__23416 == null)))?((((map__23416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23416):map__23416);
var opts = map__23416__$1;
var on_cssload = cljs.core.get.call(null,map__23416__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__23418_23422 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__23419_23423 = null;
var count__23420_23424 = (0);
var i__23421_23425 = (0);
while(true){
if((i__23421_23425 < count__23420_23424)){
var f_23426 = cljs.core._nth.call(null,chunk__23419_23423,i__23421_23425);
figwheel.client.file_reloading.reload_css_file.call(null,f_23426);

var G__23427 = seq__23418_23422;
var G__23428 = chunk__23419_23423;
var G__23429 = count__23420_23424;
var G__23430 = (i__23421_23425 + (1));
seq__23418_23422 = G__23427;
chunk__23419_23423 = G__23428;
count__23420_23424 = G__23429;
i__23421_23425 = G__23430;
continue;
} else {
var temp__4425__auto___23431 = cljs.core.seq.call(null,seq__23418_23422);
if(temp__4425__auto___23431){
var seq__23418_23432__$1 = temp__4425__auto___23431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23418_23432__$1)){
var c__17643__auto___23433 = cljs.core.chunk_first.call(null,seq__23418_23432__$1);
var G__23434 = cljs.core.chunk_rest.call(null,seq__23418_23432__$1);
var G__23435 = c__17643__auto___23433;
var G__23436 = cljs.core.count.call(null,c__17643__auto___23433);
var G__23437 = (0);
seq__23418_23422 = G__23434;
chunk__23419_23423 = G__23435;
count__23420_23424 = G__23436;
i__23421_23425 = G__23437;
continue;
} else {
var f_23438 = cljs.core.first.call(null,seq__23418_23432__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_23438);

var G__23439 = cljs.core.next.call(null,seq__23418_23432__$1);
var G__23440 = null;
var G__23441 = (0);
var G__23442 = (0);
seq__23418_23422 = G__23439;
chunk__23419_23423 = G__23440;
count__23420_23424 = G__23441;
i__23421_23425 = G__23442;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__23416,map__23416__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__23416,map__23416__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1453792888331