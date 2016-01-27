// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__23814 = cljs.core._EQ_;
var expr__23815 = (function (){var or__16840__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__23814.call(null,"true",expr__23815))){
return true;
} else {
if(cljs.core.truth_(pred__23814.call(null,"false",expr__23815))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23815)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17905__auto__ = [];
var len__17898__auto___23818 = arguments.length;
var i__17899__auto___23819 = (0);
while(true){
if((i__17899__auto___23819 < len__17898__auto___23818)){
args__17905__auto__.push((arguments[i__17899__auto___23819]));

var G__23820 = (i__17899__auto___23819 + (1));
i__17899__auto___23819 = G__23820;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq23817){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23817));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__23821){
var map__23824 = p__23821;
var map__23824__$1 = ((((!((map__23824 == null)))?((((map__23824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23824):map__23824);
var message = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16840__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16828__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16828__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16828__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19602__auto___23986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___23986,ch){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___23986,ch){
return (function (state_23955){
var state_val_23956 = (state_23955[(1)]);
if((state_val_23956 === (7))){
var inst_23951 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
var statearr_23957_23987 = state_23955__$1;
(statearr_23957_23987[(2)] = inst_23951);

(statearr_23957_23987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (1))){
var state_23955__$1 = state_23955;
var statearr_23958_23988 = state_23955__$1;
(statearr_23958_23988[(2)] = null);

(statearr_23958_23988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (4))){
var inst_23908 = (state_23955[(7)]);
var inst_23908__$1 = (state_23955[(2)]);
var state_23955__$1 = (function (){var statearr_23959 = state_23955;
(statearr_23959[(7)] = inst_23908__$1);

return statearr_23959;
})();
if(cljs.core.truth_(inst_23908__$1)){
var statearr_23960_23989 = state_23955__$1;
(statearr_23960_23989[(1)] = (5));

} else {
var statearr_23961_23990 = state_23955__$1;
(statearr_23961_23990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (15))){
var inst_23915 = (state_23955[(8)]);
var inst_23930 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23915);
var inst_23931 = cljs.core.first.call(null,inst_23930);
var inst_23932 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_23931);
var inst_23933 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_23932)].join('');
var inst_23934 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_23933);
var state_23955__$1 = state_23955;
var statearr_23962_23991 = state_23955__$1;
(statearr_23962_23991[(2)] = inst_23934);

(statearr_23962_23991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (13))){
var inst_23939 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
var statearr_23963_23992 = state_23955__$1;
(statearr_23963_23992[(2)] = inst_23939);

(statearr_23963_23992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (6))){
var state_23955__$1 = state_23955;
var statearr_23964_23993 = state_23955__$1;
(statearr_23964_23993[(2)] = null);

(statearr_23964_23993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (17))){
var inst_23937 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
var statearr_23965_23994 = state_23955__$1;
(statearr_23965_23994[(2)] = inst_23937);

(statearr_23965_23994[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (3))){
var inst_23953 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23955__$1,inst_23953);
} else {
if((state_val_23956 === (12))){
var inst_23914 = (state_23955[(9)]);
var inst_23928 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_23914,opts);
var state_23955__$1 = state_23955;
if(cljs.core.truth_(inst_23928)){
var statearr_23966_23995 = state_23955__$1;
(statearr_23966_23995[(1)] = (15));

} else {
var statearr_23967_23996 = state_23955__$1;
(statearr_23967_23996[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (2))){
var state_23955__$1 = state_23955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23955__$1,(4),ch);
} else {
if((state_val_23956 === (11))){
var inst_23915 = (state_23955[(8)]);
var inst_23920 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23921 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_23915);
var inst_23922 = cljs.core.async.timeout.call(null,(1000));
var inst_23923 = [inst_23921,inst_23922];
var inst_23924 = (new cljs.core.PersistentVector(null,2,(5),inst_23920,inst_23923,null));
var state_23955__$1 = state_23955;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23955__$1,(14),inst_23924);
} else {
if((state_val_23956 === (9))){
var inst_23915 = (state_23955[(8)]);
var inst_23941 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_23942 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_23915);
var inst_23943 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23942);
var inst_23944 = [cljs.core.str("Not loading: "),cljs.core.str(inst_23943)].join('');
var inst_23945 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_23944);
var state_23955__$1 = (function (){var statearr_23968 = state_23955;
(statearr_23968[(10)] = inst_23941);

return statearr_23968;
})();
var statearr_23969_23997 = state_23955__$1;
(statearr_23969_23997[(2)] = inst_23945);

(statearr_23969_23997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (5))){
var inst_23908 = (state_23955[(7)]);
var inst_23910 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_23911 = (new cljs.core.PersistentArrayMap(null,2,inst_23910,null));
var inst_23912 = (new cljs.core.PersistentHashSet(null,inst_23911,null));
var inst_23913 = figwheel.client.focus_msgs.call(null,inst_23912,inst_23908);
var inst_23914 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_23913);
var inst_23915 = cljs.core.first.call(null,inst_23913);
var inst_23916 = figwheel.client.autoload_QMARK_.call(null);
var state_23955__$1 = (function (){var statearr_23970 = state_23955;
(statearr_23970[(9)] = inst_23914);

(statearr_23970[(8)] = inst_23915);

return statearr_23970;
})();
if(cljs.core.truth_(inst_23916)){
var statearr_23971_23998 = state_23955__$1;
(statearr_23971_23998[(1)] = (8));

} else {
var statearr_23972_23999 = state_23955__$1;
(statearr_23972_23999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (14))){
var inst_23926 = (state_23955[(2)]);
var state_23955__$1 = state_23955;
var statearr_23973_24000 = state_23955__$1;
(statearr_23973_24000[(2)] = inst_23926);

(statearr_23973_24000[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (16))){
var state_23955__$1 = state_23955;
var statearr_23974_24001 = state_23955__$1;
(statearr_23974_24001[(2)] = null);

(statearr_23974_24001[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (10))){
var inst_23947 = (state_23955[(2)]);
var state_23955__$1 = (function (){var statearr_23975 = state_23955;
(statearr_23975[(11)] = inst_23947);

return statearr_23975;
})();
var statearr_23976_24002 = state_23955__$1;
(statearr_23976_24002[(2)] = null);

(statearr_23976_24002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23956 === (8))){
var inst_23914 = (state_23955[(9)]);
var inst_23918 = figwheel.client.reload_file_state_QMARK_.call(null,inst_23914,opts);
var state_23955__$1 = state_23955;
if(cljs.core.truth_(inst_23918)){
var statearr_23977_24003 = state_23955__$1;
(statearr_23977_24003[(1)] = (11));

} else {
var statearr_23978_24004 = state_23955__$1;
(statearr_23978_24004[(1)] = (12));

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
});})(c__19602__auto___23986,ch))
;
return ((function (switch__19490__auto__,c__19602__auto___23986,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19491__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19491__auto____0 = (function (){
var statearr_23982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23982[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19491__auto__);

(statearr_23982[(1)] = (1));

return statearr_23982;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19491__auto____1 = (function (state_23955){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_23955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e23983){if((e23983 instanceof Object)){
var ex__19494__auto__ = e23983;
var statearr_23984_24005 = state_23955;
(statearr_23984_24005[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24006 = state_23955;
state_23955 = G__24006;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19491__auto__ = function(state_23955){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19491__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19491__auto____1.call(this,state_23955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19491__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19491__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___23986,ch))
})();
var state__19604__auto__ = (function (){var statearr_23985 = f__19603__auto__.call(null);
(statearr_23985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___23986);

return statearr_23985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___23986,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24007_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24007_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_24014 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24014){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24012 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24013 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24013;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24012;
}}catch (e24011){if((e24011 instanceof Error)){
var e = e24011;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24014], null));
} else {
var e = e24011;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24014))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24015){
var map__24022 = p__24015;
var map__24022__$1 = ((((!((map__24022 == null)))?((((map__24022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24022):map__24022);
var opts = map__24022__$1;
var build_id = cljs.core.get.call(null,map__24022__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24022,map__24022__$1,opts,build_id){
return (function (p__24024){
var vec__24025 = p__24024;
var map__24026 = cljs.core.nth.call(null,vec__24025,(0),null);
var map__24026__$1 = ((((!((map__24026 == null)))?((((map__24026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24026):map__24026);
var msg = map__24026__$1;
var msg_name = cljs.core.get.call(null,map__24026__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24025,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24025,map__24026,map__24026__$1,msg,msg_name,_,map__24022,map__24022__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24025,map__24026,map__24026__$1,msg,msg_name,_,map__24022,map__24022__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24022,map__24022__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24032){
var vec__24033 = p__24032;
var map__24034 = cljs.core.nth.call(null,vec__24033,(0),null);
var map__24034__$1 = ((((!((map__24034 == null)))?((((map__24034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24034):map__24034);
var msg = map__24034__$1;
var msg_name = cljs.core.get.call(null,map__24034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24033,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24036){
var map__24046 = p__24036;
var map__24046__$1 = ((((!((map__24046 == null)))?((((map__24046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24046):map__24046);
var on_compile_warning = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24046,map__24046__$1,on_compile_warning,on_compile_fail){
return (function (p__24048){
var vec__24049 = p__24048;
var map__24050 = cljs.core.nth.call(null,vec__24049,(0),null);
var map__24050__$1 = ((((!((map__24050 == null)))?((((map__24050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24050):map__24050);
var msg = map__24050__$1;
var msg_name = cljs.core.get.call(null,map__24050__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24049,(1));
var pred__24052 = cljs.core._EQ_;
var expr__24053 = msg_name;
if(cljs.core.truth_(pred__24052.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24053))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24052.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24053))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24046,map__24046__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto__,msg_hist,msg_names,msg){
return (function (state_24269){
var state_val_24270 = (state_24269[(1)]);
if((state_val_24270 === (7))){
var inst_24193 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24193)){
var statearr_24271_24317 = state_24269__$1;
(statearr_24271_24317[(1)] = (8));

} else {
var statearr_24272_24318 = state_24269__$1;
(statearr_24272_24318[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (20))){
var inst_24263 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24273_24319 = state_24269__$1;
(statearr_24273_24319[(2)] = inst_24263);

(statearr_24273_24319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (27))){
var inst_24259 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24274_24320 = state_24269__$1;
(statearr_24274_24320[(2)] = inst_24259);

(statearr_24274_24320[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (1))){
var inst_24186 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24186)){
var statearr_24275_24321 = state_24269__$1;
(statearr_24275_24321[(1)] = (2));

} else {
var statearr_24276_24322 = state_24269__$1;
(statearr_24276_24322[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (24))){
var inst_24261 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24277_24323 = state_24269__$1;
(statearr_24277_24323[(2)] = inst_24261);

(statearr_24277_24323[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (4))){
var inst_24267 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24269__$1,inst_24267);
} else {
if((state_val_24270 === (15))){
var inst_24265 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24278_24324 = state_24269__$1;
(statearr_24278_24324[(2)] = inst_24265);

(statearr_24278_24324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (21))){
var inst_24224 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24279_24325 = state_24269__$1;
(statearr_24279_24325[(2)] = inst_24224);

(statearr_24279_24325[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (31))){
var inst_24248 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24248)){
var statearr_24280_24326 = state_24269__$1;
(statearr_24280_24326[(1)] = (34));

} else {
var statearr_24281_24327 = state_24269__$1;
(statearr_24281_24327[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (32))){
var inst_24257 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24282_24328 = state_24269__$1;
(statearr_24282_24328[(2)] = inst_24257);

(statearr_24282_24328[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (33))){
var inst_24246 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24283_24329 = state_24269__$1;
(statearr_24283_24329[(2)] = inst_24246);

(statearr_24283_24329[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (13))){
var inst_24207 = figwheel.client.heads_up.clear.call(null);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(16),inst_24207);
} else {
if((state_val_24270 === (22))){
var inst_24228 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24229 = figwheel.client.heads_up.append_message.call(null,inst_24228);
var state_24269__$1 = state_24269;
var statearr_24284_24330 = state_24269__$1;
(statearr_24284_24330[(2)] = inst_24229);

(statearr_24284_24330[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (36))){
var inst_24255 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24285_24331 = state_24269__$1;
(statearr_24285_24331[(2)] = inst_24255);

(statearr_24285_24331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (29))){
var inst_24239 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24286_24332 = state_24269__$1;
(statearr_24286_24332[(2)] = inst_24239);

(statearr_24286_24332[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (6))){
var inst_24188 = (state_24269[(7)]);
var state_24269__$1 = state_24269;
var statearr_24287_24333 = state_24269__$1;
(statearr_24287_24333[(2)] = inst_24188);

(statearr_24287_24333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (28))){
var inst_24235 = (state_24269[(2)]);
var inst_24236 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24237 = figwheel.client.heads_up.display_warning.call(null,inst_24236);
var state_24269__$1 = (function (){var statearr_24288 = state_24269;
(statearr_24288[(8)] = inst_24235);

return statearr_24288;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(29),inst_24237);
} else {
if((state_val_24270 === (25))){
var inst_24233 = figwheel.client.heads_up.clear.call(null);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(28),inst_24233);
} else {
if((state_val_24270 === (34))){
var inst_24250 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(37),inst_24250);
} else {
if((state_val_24270 === (17))){
var inst_24215 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24289_24334 = state_24269__$1;
(statearr_24289_24334[(2)] = inst_24215);

(statearr_24289_24334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (3))){
var inst_24205 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24205)){
var statearr_24290_24335 = state_24269__$1;
(statearr_24290_24335[(1)] = (13));

} else {
var statearr_24291_24336 = state_24269__$1;
(statearr_24291_24336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (12))){
var inst_24201 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24292_24337 = state_24269__$1;
(statearr_24292_24337[(2)] = inst_24201);

(statearr_24292_24337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (2))){
var inst_24188 = (state_24269[(7)]);
var inst_24188__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_24269__$1 = (function (){var statearr_24293 = state_24269;
(statearr_24293[(7)] = inst_24188__$1);

return statearr_24293;
})();
if(cljs.core.truth_(inst_24188__$1)){
var statearr_24294_24338 = state_24269__$1;
(statearr_24294_24338[(1)] = (5));

} else {
var statearr_24295_24339 = state_24269__$1;
(statearr_24295_24339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (23))){
var inst_24231 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24231)){
var statearr_24296_24340 = state_24269__$1;
(statearr_24296_24340[(1)] = (25));

} else {
var statearr_24297_24341 = state_24269__$1;
(statearr_24297_24341[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (35))){
var state_24269__$1 = state_24269;
var statearr_24298_24342 = state_24269__$1;
(statearr_24298_24342[(2)] = null);

(statearr_24298_24342[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (19))){
var inst_24226 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24226)){
var statearr_24299_24343 = state_24269__$1;
(statearr_24299_24343[(1)] = (22));

} else {
var statearr_24300_24344 = state_24269__$1;
(statearr_24300_24344[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (11))){
var inst_24197 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24301_24345 = state_24269__$1;
(statearr_24301_24345[(2)] = inst_24197);

(statearr_24301_24345[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (9))){
var inst_24199 = figwheel.client.heads_up.clear.call(null);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(12),inst_24199);
} else {
if((state_val_24270 === (5))){
var inst_24190 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_24269__$1 = state_24269;
var statearr_24302_24346 = state_24269__$1;
(statearr_24302_24346[(2)] = inst_24190);

(statearr_24302_24346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (14))){
var inst_24217 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24217)){
var statearr_24303_24347 = state_24269__$1;
(statearr_24303_24347[(1)] = (18));

} else {
var statearr_24304_24348 = state_24269__$1;
(statearr_24304_24348[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (26))){
var inst_24241 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_24269__$1 = state_24269;
if(cljs.core.truth_(inst_24241)){
var statearr_24305_24349 = state_24269__$1;
(statearr_24305_24349[(1)] = (30));

} else {
var statearr_24306_24350 = state_24269__$1;
(statearr_24306_24350[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (16))){
var inst_24209 = (state_24269[(2)]);
var inst_24210 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24211 = figwheel.client.format_messages.call(null,inst_24210);
var inst_24212 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24213 = figwheel.client.heads_up.display_error.call(null,inst_24211,inst_24212);
var state_24269__$1 = (function (){var statearr_24307 = state_24269;
(statearr_24307[(9)] = inst_24209);

return statearr_24307;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(17),inst_24213);
} else {
if((state_val_24270 === (30))){
var inst_24243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24244 = figwheel.client.heads_up.display_warning.call(null,inst_24243);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(33),inst_24244);
} else {
if((state_val_24270 === (10))){
var inst_24203 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24308_24351 = state_24269__$1;
(statearr_24308_24351[(2)] = inst_24203);

(statearr_24308_24351[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (18))){
var inst_24219 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24220 = figwheel.client.format_messages.call(null,inst_24219);
var inst_24221 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_24222 = figwheel.client.heads_up.display_error.call(null,inst_24220,inst_24221);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(21),inst_24222);
} else {
if((state_val_24270 === (37))){
var inst_24252 = (state_24269[(2)]);
var state_24269__$1 = state_24269;
var statearr_24309_24352 = state_24269__$1;
(statearr_24309_24352[(2)] = inst_24252);

(statearr_24309_24352[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24270 === (8))){
var inst_24195 = figwheel.client.heads_up.flash_loaded.call(null);
var state_24269__$1 = state_24269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24269__$1,(11),inst_24195);
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
});})(c__19602__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19490__auto__,c__19602__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto____0 = (function (){
var statearr_24313 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24313[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto__);

(statearr_24313[(1)] = (1));

return statearr_24313;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto____1 = (function (state_24269){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_24269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e24314){if((e24314 instanceof Object)){
var ex__19494__auto__ = e24314;
var statearr_24315_24353 = state_24269;
(statearr_24315_24353[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24354 = state_24269;
state_24269 = G__24354;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto__ = function(state_24269){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto____1.call(this,state_24269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto__,msg_hist,msg_names,msg))
})();
var state__19604__auto__ = (function (){var statearr_24316 = f__19603__auto__.call(null);
(statearr_24316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto__);

return statearr_24316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto__,msg_hist,msg_names,msg))
);

return c__19602__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19602__auto___24417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___24417,ch){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___24417,ch){
return (function (state_24400){
var state_val_24401 = (state_24400[(1)]);
if((state_val_24401 === (1))){
var state_24400__$1 = state_24400;
var statearr_24402_24418 = state_24400__$1;
(statearr_24402_24418[(2)] = null);

(statearr_24402_24418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (2))){
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24400__$1,(4),ch);
} else {
if((state_val_24401 === (3))){
var inst_24398 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24400__$1,inst_24398);
} else {
if((state_val_24401 === (4))){
var inst_24388 = (state_24400[(7)]);
var inst_24388__$1 = (state_24400[(2)]);
var state_24400__$1 = (function (){var statearr_24403 = state_24400;
(statearr_24403[(7)] = inst_24388__$1);

return statearr_24403;
})();
if(cljs.core.truth_(inst_24388__$1)){
var statearr_24404_24419 = state_24400__$1;
(statearr_24404_24419[(1)] = (5));

} else {
var statearr_24405_24420 = state_24400__$1;
(statearr_24405_24420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (5))){
var inst_24388 = (state_24400[(7)]);
var inst_24390 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_24388);
var state_24400__$1 = state_24400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24400__$1,(8),inst_24390);
} else {
if((state_val_24401 === (6))){
var state_24400__$1 = state_24400;
var statearr_24406_24421 = state_24400__$1;
(statearr_24406_24421[(2)] = null);

(statearr_24406_24421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (7))){
var inst_24396 = (state_24400[(2)]);
var state_24400__$1 = state_24400;
var statearr_24407_24422 = state_24400__$1;
(statearr_24407_24422[(2)] = inst_24396);

(statearr_24407_24422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24401 === (8))){
var inst_24392 = (state_24400[(2)]);
var state_24400__$1 = (function (){var statearr_24408 = state_24400;
(statearr_24408[(8)] = inst_24392);

return statearr_24408;
})();
var statearr_24409_24423 = state_24400__$1;
(statearr_24409_24423[(2)] = null);

(statearr_24409_24423[(1)] = (2));


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
});})(c__19602__auto___24417,ch))
;
return ((function (switch__19490__auto__,c__19602__auto___24417,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19491__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19491__auto____0 = (function (){
var statearr_24413 = [null,null,null,null,null,null,null,null,null];
(statearr_24413[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19491__auto__);

(statearr_24413[(1)] = (1));

return statearr_24413;
});
var figwheel$client$heads_up_plugin_$_state_machine__19491__auto____1 = (function (state_24400){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_24400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e24414){if((e24414 instanceof Object)){
var ex__19494__auto__ = e24414;
var statearr_24415_24424 = state_24400;
(statearr_24415_24424[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24425 = state_24400;
state_24400 = G__24425;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19491__auto__ = function(state_24400){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19491__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19491__auto____1.call(this,state_24400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19491__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19491__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___24417,ch))
})();
var state__19604__auto__ = (function (){var statearr_24416 = f__19603__auto__.call(null);
(statearr_24416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___24417);

return statearr_24416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___24417,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto__){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto__){
return (function (state_24446){
var state_val_24447 = (state_24446[(1)]);
if((state_val_24447 === (1))){
var inst_24441 = cljs.core.async.timeout.call(null,(3000));
var state_24446__$1 = state_24446;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24446__$1,(2),inst_24441);
} else {
if((state_val_24447 === (2))){
var inst_24443 = (state_24446[(2)]);
var inst_24444 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_24446__$1 = (function (){var statearr_24448 = state_24446;
(statearr_24448[(7)] = inst_24443);

return statearr_24448;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24446__$1,inst_24444);
} else {
return null;
}
}
});})(c__19602__auto__))
;
return ((function (switch__19490__auto__,c__19602__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19491__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19491__auto____0 = (function (){
var statearr_24452 = [null,null,null,null,null,null,null,null];
(statearr_24452[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19491__auto__);

(statearr_24452[(1)] = (1));

return statearr_24452;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19491__auto____1 = (function (state_24446){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_24446);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e24453){if((e24453 instanceof Object)){
var ex__19494__auto__ = e24453;
var statearr_24454_24456 = state_24446;
(statearr_24454_24456[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24446);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24457 = state_24446;
state_24446 = G__24457;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19491__auto__ = function(state_24446){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19491__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19491__auto____1.call(this,state_24446);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19491__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19491__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto__))
})();
var state__19604__auto__ = (function (){var statearr_24455 = f__19603__auto__.call(null);
(statearr_24455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto__);

return statearr_24455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto__))
);

return c__19602__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__24458){
var map__24465 = p__24458;
var map__24465__$1 = ((((!((map__24465 == null)))?((((map__24465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24465):map__24465);
var ed = map__24465__$1;
var formatted_exception = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__24465__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__24467_24471 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__24468_24472 = null;
var count__24469_24473 = (0);
var i__24470_24474 = (0);
while(true){
if((i__24470_24474 < count__24469_24473)){
var msg_24475 = cljs.core._nth.call(null,chunk__24468_24472,i__24470_24474);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24475);

var G__24476 = seq__24467_24471;
var G__24477 = chunk__24468_24472;
var G__24478 = count__24469_24473;
var G__24479 = (i__24470_24474 + (1));
seq__24467_24471 = G__24476;
chunk__24468_24472 = G__24477;
count__24469_24473 = G__24478;
i__24470_24474 = G__24479;
continue;
} else {
var temp__4425__auto___24480 = cljs.core.seq.call(null,seq__24467_24471);
if(temp__4425__auto___24480){
var seq__24467_24481__$1 = temp__4425__auto___24480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24467_24481__$1)){
var c__17643__auto___24482 = cljs.core.chunk_first.call(null,seq__24467_24481__$1);
var G__24483 = cljs.core.chunk_rest.call(null,seq__24467_24481__$1);
var G__24484 = c__17643__auto___24482;
var G__24485 = cljs.core.count.call(null,c__17643__auto___24482);
var G__24486 = (0);
seq__24467_24471 = G__24483;
chunk__24468_24472 = G__24484;
count__24469_24473 = G__24485;
i__24470_24474 = G__24486;
continue;
} else {
var msg_24487 = cljs.core.first.call(null,seq__24467_24481__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_24487);

var G__24488 = cljs.core.next.call(null,seq__24467_24481__$1);
var G__24489 = null;
var G__24490 = (0);
var G__24491 = (0);
seq__24467_24471 = G__24488;
chunk__24468_24472 = G__24489;
count__24469_24473 = G__24490;
i__24470_24474 = G__24491;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__24492){
var map__24495 = p__24492;
var map__24495__$1 = ((((!((map__24495 == null)))?((((map__24495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24495):map__24495);
var w = map__24495__$1;
var message = cljs.core.get.call(null,map__24495__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16828__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16828__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16828__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__24503 = cljs.core.seq.call(null,plugins);
var chunk__24504 = null;
var count__24505 = (0);
var i__24506 = (0);
while(true){
if((i__24506 < count__24505)){
var vec__24507 = cljs.core._nth.call(null,chunk__24504,i__24506);
var k = cljs.core.nth.call(null,vec__24507,(0),null);
var plugin = cljs.core.nth.call(null,vec__24507,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24509 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24503,chunk__24504,count__24505,i__24506,pl_24509,vec__24507,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_24509.call(null,msg_hist);
});})(seq__24503,chunk__24504,count__24505,i__24506,pl_24509,vec__24507,k,plugin))
);
} else {
}

var G__24510 = seq__24503;
var G__24511 = chunk__24504;
var G__24512 = count__24505;
var G__24513 = (i__24506 + (1));
seq__24503 = G__24510;
chunk__24504 = G__24511;
count__24505 = G__24512;
i__24506 = G__24513;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24503);
if(temp__4425__auto__){
var seq__24503__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24503__$1)){
var c__17643__auto__ = cljs.core.chunk_first.call(null,seq__24503__$1);
var G__24514 = cljs.core.chunk_rest.call(null,seq__24503__$1);
var G__24515 = c__17643__auto__;
var G__24516 = cljs.core.count.call(null,c__17643__auto__);
var G__24517 = (0);
seq__24503 = G__24514;
chunk__24504 = G__24515;
count__24505 = G__24516;
i__24506 = G__24517;
continue;
} else {
var vec__24508 = cljs.core.first.call(null,seq__24503__$1);
var k = cljs.core.nth.call(null,vec__24508,(0),null);
var plugin = cljs.core.nth.call(null,vec__24508,(1),null);
if(cljs.core.truth_(plugin)){
var pl_24518 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__24503,chunk__24504,count__24505,i__24506,pl_24518,vec__24508,k,plugin,seq__24503__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_24518.call(null,msg_hist);
});})(seq__24503,chunk__24504,count__24505,i__24506,pl_24518,vec__24508,k,plugin,seq__24503__$1,temp__4425__auto__))
);
} else {
}

var G__24519 = cljs.core.next.call(null,seq__24503__$1);
var G__24520 = null;
var G__24521 = (0);
var G__24522 = (0);
seq__24503 = G__24519;
chunk__24504 = G__24520;
count__24505 = G__24521;
i__24506 = G__24522;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args24523 = [];
var len__17898__auto___24526 = arguments.length;
var i__17899__auto___24527 = (0);
while(true){
if((i__17899__auto___24527 < len__17898__auto___24526)){
args24523.push((arguments[i__17899__auto___24527]));

var G__24528 = (i__17899__auto___24527 + (1));
i__17899__auto___24527 = G__24528;
continue;
} else {
}
break;
}

var G__24525 = args24523.length;
switch (G__24525) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24523.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17905__auto__ = [];
var len__17898__auto___24534 = arguments.length;
var i__17899__auto___24535 = (0);
while(true){
if((i__17899__auto___24535 < len__17898__auto___24534)){
args__17905__auto__.push((arguments[i__17899__auto___24535]));

var G__24536 = (i__17899__auto___24535 + (1));
i__17899__auto___24535 = G__24536;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((0) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17906__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__24531){
var map__24532 = p__24531;
var map__24532__$1 = ((((!((map__24532 == null)))?((((map__24532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24532):map__24532);
var opts = map__24532__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq24530){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24530));
});

//# sourceMappingURL=client.js.map?rel=1453792889589