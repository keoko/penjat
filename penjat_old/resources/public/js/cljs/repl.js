// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17964_17978 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17965_17979 = null;
var count__17966_17980 = (0);
var i__17967_17981 = (0);
while(true){
if((i__17967_17981 < count__17966_17980)){
var f_17982 = cljs.core._nth.call(null,chunk__17965_17979,i__17967_17981);
cljs.core.println.call(null,"  ",f_17982);

var G__17983 = seq__17964_17978;
var G__17984 = chunk__17965_17979;
var G__17985 = count__17966_17980;
var G__17986 = (i__17967_17981 + (1));
seq__17964_17978 = G__17983;
chunk__17965_17979 = G__17984;
count__17966_17980 = G__17985;
i__17967_17981 = G__17986;
continue;
} else {
var temp__4425__auto___17987 = cljs.core.seq.call(null,seq__17964_17978);
if(temp__4425__auto___17987){
var seq__17964_17988__$1 = temp__4425__auto___17987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17964_17988__$1)){
var c__17643__auto___17989 = cljs.core.chunk_first.call(null,seq__17964_17988__$1);
var G__17990 = cljs.core.chunk_rest.call(null,seq__17964_17988__$1);
var G__17991 = c__17643__auto___17989;
var G__17992 = cljs.core.count.call(null,c__17643__auto___17989);
var G__17993 = (0);
seq__17964_17978 = G__17990;
chunk__17965_17979 = G__17991;
count__17966_17980 = G__17992;
i__17967_17981 = G__17993;
continue;
} else {
var f_17994 = cljs.core.first.call(null,seq__17964_17988__$1);
cljs.core.println.call(null,"  ",f_17994);

var G__17995 = cljs.core.next.call(null,seq__17964_17988__$1);
var G__17996 = null;
var G__17997 = (0);
var G__17998 = (0);
seq__17964_17978 = G__17995;
chunk__17965_17979 = G__17996;
count__17966_17980 = G__17997;
i__17967_17981 = G__17998;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17999 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16840__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17999);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17999)))?cljs.core.second.call(null,arglists_17999):arglists_17999));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17968 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17969 = null;
var count__17970 = (0);
var i__17971 = (0);
while(true){
if((i__17971 < count__17970)){
var vec__17972 = cljs.core._nth.call(null,chunk__17969,i__17971);
var name = cljs.core.nth.call(null,vec__17972,(0),null);
var map__17973 = cljs.core.nth.call(null,vec__17972,(1),null);
var map__17973__$1 = ((((!((map__17973 == null)))?((((map__17973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17973):map__17973);
var doc = cljs.core.get.call(null,map__17973__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17973__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18000 = seq__17968;
var G__18001 = chunk__17969;
var G__18002 = count__17970;
var G__18003 = (i__17971 + (1));
seq__17968 = G__18000;
chunk__17969 = G__18001;
count__17970 = G__18002;
i__17971 = G__18003;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17968);
if(temp__4425__auto__){
var seq__17968__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17968__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__17968__$1);
var G__18004 = cljs.core.chunk_rest.call(null,seq__17968__$1);
var G__18005 = c__17643__auto__;
var G__18006 = cljs.core.count.call(null,c__17643__auto__);
var G__18007 = (0);
seq__17968 = G__18004;
chunk__17969 = G__18005;
count__17970 = G__18006;
i__17971 = G__18007;
continue;
} else {
var vec__17975 = cljs.core.first.call(null,seq__17968__$1);
var name = cljs.core.nth.call(null,vec__17975,(0),null);
var map__17976 = cljs.core.nth.call(null,vec__17975,(1),null);
var map__17976__$1 = ((((!((map__17976 == null)))?((((map__17976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17976):map__17976);
var doc = cljs.core.get.call(null,map__17976__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__17976__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__18008 = cljs.core.next.call(null,seq__17968__$1);
var G__18009 = null;
var G__18010 = (0);
var G__18011 = (0);
seq__17968 = G__18008;
chunk__17969 = G__18009;
count__17970 = G__18010;
i__17971 = G__18011;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1453792882543