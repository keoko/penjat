// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19647 = [];
var len__17898__auto___19653 = arguments.length;
var i__17899__auto___19654 = (0);
while(true){
if((i__17899__auto___19654 < len__17898__auto___19653)){
args19647.push((arguments[i__17899__auto___19654]));

var G__19655 = (i__17899__auto___19654 + (1));
i__17899__auto___19654 = G__19655;
continue;
} else {
}
break;
}

var G__19649 = args19647.length;
switch (G__19649) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19647.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19650 = (function (f,blockable,meta19651){
this.f = f;
this.blockable = blockable;
this.meta19651 = meta19651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19652,meta19651__$1){
var self__ = this;
var _19652__$1 = this;
return (new cljs.core.async.t_cljs$core$async19650(self__.f,self__.blockable,meta19651__$1));
});

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19652){
var self__ = this;
var _19652__$1 = this;
return self__.meta19651;
});

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19650.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19651","meta19651",1174731739,null)], null);
});

cljs.core.async.t_cljs$core$async19650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19650";

cljs.core.async.t_cljs$core$async19650.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19650");
});

cljs.core.async.__GT_t_cljs$core$async19650 = (function cljs$core$async$__GT_t_cljs$core$async19650(f__$1,blockable__$1,meta19651){
return (new cljs.core.async.t_cljs$core$async19650(f__$1,blockable__$1,meta19651));
});

}

return (new cljs.core.async.t_cljs$core$async19650(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19659 = [];
var len__17898__auto___19662 = arguments.length;
var i__17899__auto___19663 = (0);
while(true){
if((i__17899__auto___19663 < len__17898__auto___19662)){
args19659.push((arguments[i__17899__auto___19663]));

var G__19664 = (i__17899__auto___19663 + (1));
i__17899__auto___19663 = G__19664;
continue;
} else {
}
break;
}

var G__19661 = args19659.length;
switch (G__19661) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19659.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19666 = [];
var len__17898__auto___19669 = arguments.length;
var i__17899__auto___19670 = (0);
while(true){
if((i__17899__auto___19670 < len__17898__auto___19669)){
args19666.push((arguments[i__17899__auto___19670]));

var G__19671 = (i__17899__auto___19670 + (1));
i__17899__auto___19670 = G__19671;
continue;
} else {
}
break;
}

var G__19668 = args19666.length;
switch (G__19668) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19666.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19673 = [];
var len__17898__auto___19676 = arguments.length;
var i__17899__auto___19677 = (0);
while(true){
if((i__17899__auto___19677 < len__17898__auto___19676)){
args19673.push((arguments[i__17899__auto___19677]));

var G__19678 = (i__17899__auto___19677 + (1));
i__17899__auto___19677 = G__19678;
continue;
} else {
}
break;
}

var G__19675 = args19673.length;
switch (G__19675) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19673.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19680 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19680);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19680,ret){
return (function (){
return fn1.call(null,val_19680);
});})(val_19680,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19681 = [];
var len__17898__auto___19684 = arguments.length;
var i__17899__auto___19685 = (0);
while(true){
if((i__17899__auto___19685 < len__17898__auto___19684)){
args19681.push((arguments[i__17899__auto___19685]));

var G__19686 = (i__17899__auto___19685 + (1));
i__17899__auto___19685 = G__19686;
continue;
} else {
}
break;
}

var G__19683 = args19681.length;
switch (G__19683) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19681.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17743__auto___19688 = n;
var x_19689 = (0);
while(true){
if((x_19689 < n__17743__auto___19688)){
(a[x_19689] = (0));

var G__19690 = (x_19689 + (1));
x_19689 = G__19690;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19691 = (i + (1));
i = G__19691;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19695 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19695 = (function (alt_flag,flag,meta19696){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19696 = meta19696;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19697,meta19696__$1){
var self__ = this;
var _19697__$1 = this;
return (new cljs.core.async.t_cljs$core$async19695(self__.alt_flag,self__.flag,meta19696__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19695.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19697){
var self__ = this;
var _19697__$1 = this;
return self__.meta19696;
});})(flag))
;

cljs.core.async.t_cljs$core$async19695.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19695.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19695.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19695.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19695.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19696","meta19696",1413168498,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19695.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19695.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19695";

cljs.core.async.t_cljs$core$async19695.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19695");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19695 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19695(alt_flag__$1,flag__$1,meta19696){
return (new cljs.core.async.t_cljs$core$async19695(alt_flag__$1,flag__$1,meta19696));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19695(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19701 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19701 = (function (alt_handler,flag,cb,meta19702){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19702 = meta19702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19703,meta19702__$1){
var self__ = this;
var _19703__$1 = this;
return (new cljs.core.async.t_cljs$core$async19701(self__.alt_handler,self__.flag,self__.cb,meta19702__$1));
});

cljs.core.async.t_cljs$core$async19701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19703){
var self__ = this;
var _19703__$1 = this;
return self__.meta19702;
});

cljs.core.async.t_cljs$core$async19701.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19701.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19701.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19701.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19701.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19702","meta19702",-1360358125,null)], null);
});

cljs.core.async.t_cljs$core$async19701.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19701.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19701";

cljs.core.async.t_cljs$core$async19701.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async19701");
});

cljs.core.async.__GT_t_cljs$core$async19701 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19701(alt_handler__$1,flag__$1,cb__$1,meta19702){
return (new cljs.core.async.t_cljs$core$async19701(alt_handler__$1,flag__$1,cb__$1,meta19702));
});

}

return (new cljs.core.async.t_cljs$core$async19701(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19704_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19704_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19705_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19705_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16840__auto__ = wport;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19706 = (i + (1));
i = G__19706;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16840__auto__ = ret;
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16828__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16828__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16828__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___19712 = arguments.length;
var i__17899__auto___19713 = (0);
while(true){
if((i__17899__auto___19713 < len__17898__auto___19712)){
args__17905__auto__.push((arguments[i__17899__auto___19713]));

var G__19714 = (i__17899__auto___19713 + (1));
i__17899__auto___19713 = G__19714;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((1) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17906__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19709){
var map__19710 = p__19709;
var map__19710__$1 = ((((!((map__19710 == null)))?((((map__19710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19710):map__19710);
var opts = map__19710__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19707){
var G__19708 = cljs.core.first.call(null,seq19707);
var seq19707__$1 = cljs.core.next.call(null,seq19707);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19708,seq19707__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19715 = [];
var len__17898__auto___19765 = arguments.length;
var i__17899__auto___19766 = (0);
while(true){
if((i__17899__auto___19766 < len__17898__auto___19765)){
args19715.push((arguments[i__17899__auto___19766]));

var G__19767 = (i__17899__auto___19766 + (1));
i__17899__auto___19766 = G__19767;
continue;
} else {
}
break;
}

var G__19717 = args19715.length;
switch (G__19717) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19715.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19602__auto___19769 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___19769){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___19769){
return (function (state_19741){
var state_val_19742 = (state_19741[(1)]);
if((state_val_19742 === (7))){
var inst_19737 = (state_19741[(2)]);
var state_19741__$1 = state_19741;
var statearr_19743_19770 = state_19741__$1;
(statearr_19743_19770[(2)] = inst_19737);

(statearr_19743_19770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (1))){
var state_19741__$1 = state_19741;
var statearr_19744_19771 = state_19741__$1;
(statearr_19744_19771[(2)] = null);

(statearr_19744_19771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (4))){
var inst_19720 = (state_19741[(7)]);
var inst_19720__$1 = (state_19741[(2)]);
var inst_19721 = (inst_19720__$1 == null);
var state_19741__$1 = (function (){var statearr_19745 = state_19741;
(statearr_19745[(7)] = inst_19720__$1);

return statearr_19745;
})();
if(cljs.core.truth_(inst_19721)){
var statearr_19746_19772 = state_19741__$1;
(statearr_19746_19772[(1)] = (5));

} else {
var statearr_19747_19773 = state_19741__$1;
(statearr_19747_19773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (13))){
var state_19741__$1 = state_19741;
var statearr_19748_19774 = state_19741__$1;
(statearr_19748_19774[(2)] = null);

(statearr_19748_19774[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (6))){
var inst_19720 = (state_19741[(7)]);
var state_19741__$1 = state_19741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19741__$1,(11),to,inst_19720);
} else {
if((state_val_19742 === (3))){
var inst_19739 = (state_19741[(2)]);
var state_19741__$1 = state_19741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19741__$1,inst_19739);
} else {
if((state_val_19742 === (12))){
var state_19741__$1 = state_19741;
var statearr_19749_19775 = state_19741__$1;
(statearr_19749_19775[(2)] = null);

(statearr_19749_19775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (2))){
var state_19741__$1 = state_19741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19741__$1,(4),from);
} else {
if((state_val_19742 === (11))){
var inst_19730 = (state_19741[(2)]);
var state_19741__$1 = state_19741;
if(cljs.core.truth_(inst_19730)){
var statearr_19750_19776 = state_19741__$1;
(statearr_19750_19776[(1)] = (12));

} else {
var statearr_19751_19777 = state_19741__$1;
(statearr_19751_19777[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (9))){
var state_19741__$1 = state_19741;
var statearr_19752_19778 = state_19741__$1;
(statearr_19752_19778[(2)] = null);

(statearr_19752_19778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (5))){
var state_19741__$1 = state_19741;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19753_19779 = state_19741__$1;
(statearr_19753_19779[(1)] = (8));

} else {
var statearr_19754_19780 = state_19741__$1;
(statearr_19754_19780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (14))){
var inst_19735 = (state_19741[(2)]);
var state_19741__$1 = state_19741;
var statearr_19755_19781 = state_19741__$1;
(statearr_19755_19781[(2)] = inst_19735);

(statearr_19755_19781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (10))){
var inst_19727 = (state_19741[(2)]);
var state_19741__$1 = state_19741;
var statearr_19756_19782 = state_19741__$1;
(statearr_19756_19782[(2)] = inst_19727);

(statearr_19756_19782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19742 === (8))){
var inst_19724 = cljs.core.async.close_BANG_.call(null,to);
var state_19741__$1 = state_19741;
var statearr_19757_19783 = state_19741__$1;
(statearr_19757_19783[(2)] = inst_19724);

(statearr_19757_19783[(1)] = (10));


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
});})(c__19602__auto___19769))
;
return ((function (switch__19490__auto__,c__19602__auto___19769){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_19761 = [null,null,null,null,null,null,null,null];
(statearr_19761[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_19761[(1)] = (1));

return statearr_19761;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_19741){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_19741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e19762){if((e19762 instanceof Object)){
var ex__19494__auto__ = e19762;
var statearr_19763_19784 = state_19741;
(statearr_19763_19784[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19762;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19785 = state_19741;
state_19741 = G__19785;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_19741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_19741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___19769))
})();
var state__19604__auto__ = (function (){var statearr_19764 = f__19603__auto__.call(null);
(statearr_19764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___19769);

return statearr_19764;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___19769))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19969){
var vec__19970 = p__19969;
var v = cljs.core.nth.call(null,vec__19970,(0),null);
var p = cljs.core.nth.call(null,vec__19970,(1),null);
var job = vec__19970;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19602__auto___20152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___20152,res,vec__19970,v,p,job,jobs,results){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___20152,res,vec__19970,v,p,job,jobs,results){
return (function (state_19975){
var state_val_19976 = (state_19975[(1)]);
if((state_val_19976 === (1))){
var state_19975__$1 = state_19975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19975__$1,(2),res,v);
} else {
if((state_val_19976 === (2))){
var inst_19972 = (state_19975[(2)]);
var inst_19973 = cljs.core.async.close_BANG_.call(null,res);
var state_19975__$1 = (function (){var statearr_19977 = state_19975;
(statearr_19977[(7)] = inst_19972);

return statearr_19977;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19975__$1,inst_19973);
} else {
return null;
}
}
});})(c__19602__auto___20152,res,vec__19970,v,p,job,jobs,results))
;
return ((function (switch__19490__auto__,c__19602__auto___20152,res,vec__19970,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0 = (function (){
var statearr_19981 = [null,null,null,null,null,null,null,null];
(statearr_19981[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__);

(statearr_19981[(1)] = (1));

return statearr_19981;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1 = (function (state_19975){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_19975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e19982){if((e19982 instanceof Object)){
var ex__19494__auto__ = e19982;
var statearr_19983_20153 = state_19975;
(statearr_19983_20153[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19982;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20154 = state_19975;
state_19975 = G__20154;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = function(state_19975){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1.call(this,state_19975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___20152,res,vec__19970,v,p,job,jobs,results))
})();
var state__19604__auto__ = (function (){var statearr_19984 = f__19603__auto__.call(null);
(statearr_19984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___20152);

return statearr_19984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___20152,res,vec__19970,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19985){
var vec__19986 = p__19985;
var v = cljs.core.nth.call(null,vec__19986,(0),null);
var p = cljs.core.nth.call(null,vec__19986,(1),null);
var job = vec__19986;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17743__auto___20155 = n;
var __20156 = (0);
while(true){
if((__20156 < n__17743__auto___20155)){
var G__19987_20157 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19987_20157) {
case "compute":
var c__19602__auto___20159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20156,c__19602__auto___20159,G__19987_20157,n__17743__auto___20155,jobs,results,process,async){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (__20156,c__19602__auto___20159,G__19987_20157,n__17743__auto___20155,jobs,results,process,async){
return (function (state_20000){
var state_val_20001 = (state_20000[(1)]);
if((state_val_20001 === (1))){
var state_20000__$1 = state_20000;
var statearr_20002_20160 = state_20000__$1;
(statearr_20002_20160[(2)] = null);

(statearr_20002_20160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20001 === (2))){
var state_20000__$1 = state_20000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20000__$1,(4),jobs);
} else {
if((state_val_20001 === (3))){
var inst_19998 = (state_20000[(2)]);
var state_20000__$1 = state_20000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20000__$1,inst_19998);
} else {
if((state_val_20001 === (4))){
var inst_19990 = (state_20000[(2)]);
var inst_19991 = process.call(null,inst_19990);
var state_20000__$1 = state_20000;
if(cljs.core.truth_(inst_19991)){
var statearr_20003_20161 = state_20000__$1;
(statearr_20003_20161[(1)] = (5));

} else {
var statearr_20004_20162 = state_20000__$1;
(statearr_20004_20162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20001 === (5))){
var state_20000__$1 = state_20000;
var statearr_20005_20163 = state_20000__$1;
(statearr_20005_20163[(2)] = null);

(statearr_20005_20163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20001 === (6))){
var state_20000__$1 = state_20000;
var statearr_20006_20164 = state_20000__$1;
(statearr_20006_20164[(2)] = null);

(statearr_20006_20164[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20001 === (7))){
var inst_19996 = (state_20000[(2)]);
var state_20000__$1 = state_20000;
var statearr_20007_20165 = state_20000__$1;
(statearr_20007_20165[(2)] = inst_19996);

(statearr_20007_20165[(1)] = (3));


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
});})(__20156,c__19602__auto___20159,G__19987_20157,n__17743__auto___20155,jobs,results,process,async))
;
return ((function (__20156,switch__19490__auto__,c__19602__auto___20159,G__19987_20157,n__17743__auto___20155,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0 = (function (){
var statearr_20011 = [null,null,null,null,null,null,null];
(statearr_20011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__);

(statearr_20011[(1)] = (1));

return statearr_20011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1 = (function (state_20000){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_20000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e20012){if((e20012 instanceof Object)){
var ex__19494__auto__ = e20012;
var statearr_20013_20166 = state_20000;
(statearr_20013_20166[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20167 = state_20000;
state_20000 = G__20167;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = function(state_20000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1.call(this,state_20000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__;
})()
;})(__20156,switch__19490__auto__,c__19602__auto___20159,G__19987_20157,n__17743__auto___20155,jobs,results,process,async))
})();
var state__19604__auto__ = (function (){var statearr_20014 = f__19603__auto__.call(null);
(statearr_20014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___20159);

return statearr_20014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(__20156,c__19602__auto___20159,G__19987_20157,n__17743__auto___20155,jobs,results,process,async))
);


break;
case "async":
var c__19602__auto___20168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20156,c__19602__auto___20168,G__19987_20157,n__17743__auto___20155,jobs,results,process,async){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (__20156,c__19602__auto___20168,G__19987_20157,n__17743__auto___20155,jobs,results,process,async){
return (function (state_20027){
var state_val_20028 = (state_20027[(1)]);
if((state_val_20028 === (1))){
var state_20027__$1 = state_20027;
var statearr_20029_20169 = state_20027__$1;
(statearr_20029_20169[(2)] = null);

(statearr_20029_20169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20028 === (2))){
var state_20027__$1 = state_20027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20027__$1,(4),jobs);
} else {
if((state_val_20028 === (3))){
var inst_20025 = (state_20027[(2)]);
var state_20027__$1 = state_20027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20027__$1,inst_20025);
} else {
if((state_val_20028 === (4))){
var inst_20017 = (state_20027[(2)]);
var inst_20018 = async.call(null,inst_20017);
var state_20027__$1 = state_20027;
if(cljs.core.truth_(inst_20018)){
var statearr_20030_20170 = state_20027__$1;
(statearr_20030_20170[(1)] = (5));

} else {
var statearr_20031_20171 = state_20027__$1;
(statearr_20031_20171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20028 === (5))){
var state_20027__$1 = state_20027;
var statearr_20032_20172 = state_20027__$1;
(statearr_20032_20172[(2)] = null);

(statearr_20032_20172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20028 === (6))){
var state_20027__$1 = state_20027;
var statearr_20033_20173 = state_20027__$1;
(statearr_20033_20173[(2)] = null);

(statearr_20033_20173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20028 === (7))){
var inst_20023 = (state_20027[(2)]);
var state_20027__$1 = state_20027;
var statearr_20034_20174 = state_20027__$1;
(statearr_20034_20174[(2)] = inst_20023);

(statearr_20034_20174[(1)] = (3));


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
});})(__20156,c__19602__auto___20168,G__19987_20157,n__17743__auto___20155,jobs,results,process,async))
;
return ((function (__20156,switch__19490__auto__,c__19602__auto___20168,G__19987_20157,n__17743__auto___20155,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0 = (function (){
var statearr_20038 = [null,null,null,null,null,null,null];
(statearr_20038[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__);

(statearr_20038[(1)] = (1));

return statearr_20038;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1 = (function (state_20027){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_20027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e20039){if((e20039 instanceof Object)){
var ex__19494__auto__ = e20039;
var statearr_20040_20175 = state_20027;
(statearr_20040_20175[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20176 = state_20027;
state_20027 = G__20176;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = function(state_20027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1.call(this,state_20027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__;
})()
;})(__20156,switch__19490__auto__,c__19602__auto___20168,G__19987_20157,n__17743__auto___20155,jobs,results,process,async))
})();
var state__19604__auto__ = (function (){var statearr_20041 = f__19603__auto__.call(null);
(statearr_20041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___20168);

return statearr_20041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(__20156,c__19602__auto___20168,G__19987_20157,n__17743__auto___20155,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20177 = (__20156 + (1));
__20156 = G__20177;
continue;
} else {
}
break;
}

var c__19602__auto___20178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___20178,jobs,results,process,async){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___20178,jobs,results,process,async){
return (function (state_20063){
var state_val_20064 = (state_20063[(1)]);
if((state_val_20064 === (1))){
var state_20063__$1 = state_20063;
var statearr_20065_20179 = state_20063__$1;
(statearr_20065_20179[(2)] = null);

(statearr_20065_20179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (2))){
var state_20063__$1 = state_20063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20063__$1,(4),from);
} else {
if((state_val_20064 === (3))){
var inst_20061 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20063__$1,inst_20061);
} else {
if((state_val_20064 === (4))){
var inst_20044 = (state_20063[(7)]);
var inst_20044__$1 = (state_20063[(2)]);
var inst_20045 = (inst_20044__$1 == null);
var state_20063__$1 = (function (){var statearr_20066 = state_20063;
(statearr_20066[(7)] = inst_20044__$1);

return statearr_20066;
})();
if(cljs.core.truth_(inst_20045)){
var statearr_20067_20180 = state_20063__$1;
(statearr_20067_20180[(1)] = (5));

} else {
var statearr_20068_20181 = state_20063__$1;
(statearr_20068_20181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (5))){
var inst_20047 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20063__$1 = state_20063;
var statearr_20069_20182 = state_20063__$1;
(statearr_20069_20182[(2)] = inst_20047);

(statearr_20069_20182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (6))){
var inst_20049 = (state_20063[(8)]);
var inst_20044 = (state_20063[(7)]);
var inst_20049__$1 = cljs.core.async.chan.call(null,(1));
var inst_20050 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20051 = [inst_20044,inst_20049__$1];
var inst_20052 = (new cljs.core.PersistentVector(null,2,(5),inst_20050,inst_20051,null));
var state_20063__$1 = (function (){var statearr_20070 = state_20063;
(statearr_20070[(8)] = inst_20049__$1);

return statearr_20070;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20063__$1,(8),jobs,inst_20052);
} else {
if((state_val_20064 === (7))){
var inst_20059 = (state_20063[(2)]);
var state_20063__$1 = state_20063;
var statearr_20071_20183 = state_20063__$1;
(statearr_20071_20183[(2)] = inst_20059);

(statearr_20071_20183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20064 === (8))){
var inst_20049 = (state_20063[(8)]);
var inst_20054 = (state_20063[(2)]);
var state_20063__$1 = (function (){var statearr_20072 = state_20063;
(statearr_20072[(9)] = inst_20054);

return statearr_20072;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20063__$1,(9),results,inst_20049);
} else {
if((state_val_20064 === (9))){
var inst_20056 = (state_20063[(2)]);
var state_20063__$1 = (function (){var statearr_20073 = state_20063;
(statearr_20073[(10)] = inst_20056);

return statearr_20073;
})();
var statearr_20074_20184 = state_20063__$1;
(statearr_20074_20184[(2)] = null);

(statearr_20074_20184[(1)] = (2));


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
});})(c__19602__auto___20178,jobs,results,process,async))
;
return ((function (switch__19490__auto__,c__19602__auto___20178,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0 = (function (){
var statearr_20078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__);

(statearr_20078[(1)] = (1));

return statearr_20078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1 = (function (state_20063){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_20063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e20079){if((e20079 instanceof Object)){
var ex__19494__auto__ = e20079;
var statearr_20080_20185 = state_20063;
(statearr_20080_20185[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20186 = state_20063;
state_20063 = G__20186;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = function(state_20063){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1.call(this,state_20063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___20178,jobs,results,process,async))
})();
var state__19604__auto__ = (function (){var statearr_20081 = f__19603__auto__.call(null);
(statearr_20081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___20178);

return statearr_20081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___20178,jobs,results,process,async))
);


var c__19602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto__,jobs,results,process,async){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto__,jobs,results,process,async){
return (function (state_20119){
var state_val_20120 = (state_20119[(1)]);
if((state_val_20120 === (7))){
var inst_20115 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
var statearr_20121_20187 = state_20119__$1;
(statearr_20121_20187[(2)] = inst_20115);

(statearr_20121_20187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (20))){
var state_20119__$1 = state_20119;
var statearr_20122_20188 = state_20119__$1;
(statearr_20122_20188[(2)] = null);

(statearr_20122_20188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (1))){
var state_20119__$1 = state_20119;
var statearr_20123_20189 = state_20119__$1;
(statearr_20123_20189[(2)] = null);

(statearr_20123_20189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (4))){
var inst_20084 = (state_20119[(7)]);
var inst_20084__$1 = (state_20119[(2)]);
var inst_20085 = (inst_20084__$1 == null);
var state_20119__$1 = (function (){var statearr_20124 = state_20119;
(statearr_20124[(7)] = inst_20084__$1);

return statearr_20124;
})();
if(cljs.core.truth_(inst_20085)){
var statearr_20125_20190 = state_20119__$1;
(statearr_20125_20190[(1)] = (5));

} else {
var statearr_20126_20191 = state_20119__$1;
(statearr_20126_20191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (15))){
var inst_20097 = (state_20119[(8)]);
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20119__$1,(18),to,inst_20097);
} else {
if((state_val_20120 === (21))){
var inst_20110 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
var statearr_20127_20192 = state_20119__$1;
(statearr_20127_20192[(2)] = inst_20110);

(statearr_20127_20192[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (13))){
var inst_20112 = (state_20119[(2)]);
var state_20119__$1 = (function (){var statearr_20128 = state_20119;
(statearr_20128[(9)] = inst_20112);

return statearr_20128;
})();
var statearr_20129_20193 = state_20119__$1;
(statearr_20129_20193[(2)] = null);

(statearr_20129_20193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (6))){
var inst_20084 = (state_20119[(7)]);
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20119__$1,(11),inst_20084);
} else {
if((state_val_20120 === (17))){
var inst_20105 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
if(cljs.core.truth_(inst_20105)){
var statearr_20130_20194 = state_20119__$1;
(statearr_20130_20194[(1)] = (19));

} else {
var statearr_20131_20195 = state_20119__$1;
(statearr_20131_20195[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (3))){
var inst_20117 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20119__$1,inst_20117);
} else {
if((state_val_20120 === (12))){
var inst_20094 = (state_20119[(10)]);
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20119__$1,(14),inst_20094);
} else {
if((state_val_20120 === (2))){
var state_20119__$1 = state_20119;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20119__$1,(4),results);
} else {
if((state_val_20120 === (19))){
var state_20119__$1 = state_20119;
var statearr_20132_20196 = state_20119__$1;
(statearr_20132_20196[(2)] = null);

(statearr_20132_20196[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (11))){
var inst_20094 = (state_20119[(2)]);
var state_20119__$1 = (function (){var statearr_20133 = state_20119;
(statearr_20133[(10)] = inst_20094);

return statearr_20133;
})();
var statearr_20134_20197 = state_20119__$1;
(statearr_20134_20197[(2)] = null);

(statearr_20134_20197[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (9))){
var state_20119__$1 = state_20119;
var statearr_20135_20198 = state_20119__$1;
(statearr_20135_20198[(2)] = null);

(statearr_20135_20198[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (5))){
var state_20119__$1 = state_20119;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20136_20199 = state_20119__$1;
(statearr_20136_20199[(1)] = (8));

} else {
var statearr_20137_20200 = state_20119__$1;
(statearr_20137_20200[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (14))){
var inst_20097 = (state_20119[(8)]);
var inst_20099 = (state_20119[(11)]);
var inst_20097__$1 = (state_20119[(2)]);
var inst_20098 = (inst_20097__$1 == null);
var inst_20099__$1 = cljs.core.not.call(null,inst_20098);
var state_20119__$1 = (function (){var statearr_20138 = state_20119;
(statearr_20138[(8)] = inst_20097__$1);

(statearr_20138[(11)] = inst_20099__$1);

return statearr_20138;
})();
if(inst_20099__$1){
var statearr_20139_20201 = state_20119__$1;
(statearr_20139_20201[(1)] = (15));

} else {
var statearr_20140_20202 = state_20119__$1;
(statearr_20140_20202[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (16))){
var inst_20099 = (state_20119[(11)]);
var state_20119__$1 = state_20119;
var statearr_20141_20203 = state_20119__$1;
(statearr_20141_20203[(2)] = inst_20099);

(statearr_20141_20203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (10))){
var inst_20091 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
var statearr_20142_20204 = state_20119__$1;
(statearr_20142_20204[(2)] = inst_20091);

(statearr_20142_20204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (18))){
var inst_20102 = (state_20119[(2)]);
var state_20119__$1 = state_20119;
var statearr_20143_20205 = state_20119__$1;
(statearr_20143_20205[(2)] = inst_20102);

(statearr_20143_20205[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20120 === (8))){
var inst_20088 = cljs.core.async.close_BANG_.call(null,to);
var state_20119__$1 = state_20119;
var statearr_20144_20206 = state_20119__$1;
(statearr_20144_20206[(2)] = inst_20088);

(statearr_20144_20206[(1)] = (10));


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
});})(c__19602__auto__,jobs,results,process,async))
;
return ((function (switch__19490__auto__,c__19602__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0 = (function (){
var statearr_20148 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20148[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__);

(statearr_20148[(1)] = (1));

return statearr_20148;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1 = (function (state_20119){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_20119);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e20149){if((e20149 instanceof Object)){
var ex__19494__auto__ = e20149;
var statearr_20150_20207 = state_20119;
(statearr_20150_20207[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20119);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20208 = state_20119;
state_20119 = G__20208;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__ = function(state_20119){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1.call(this,state_20119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19491__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto__,jobs,results,process,async))
})();
var state__19604__auto__ = (function (){var statearr_20151 = f__19603__auto__.call(null);
(statearr_20151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto__);

return statearr_20151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto__,jobs,results,process,async))
);

return c__19602__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20209 = [];
var len__17898__auto___20212 = arguments.length;
var i__17899__auto___20213 = (0);
while(true){
if((i__17899__auto___20213 < len__17898__auto___20212)){
args20209.push((arguments[i__17899__auto___20213]));

var G__20214 = (i__17899__auto___20213 + (1));
i__17899__auto___20213 = G__20214;
continue;
} else {
}
break;
}

var G__20211 = args20209.length;
switch (G__20211) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20209.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20216 = [];
var len__17898__auto___20219 = arguments.length;
var i__17899__auto___20220 = (0);
while(true){
if((i__17899__auto___20220 < len__17898__auto___20219)){
args20216.push((arguments[i__17899__auto___20220]));

var G__20221 = (i__17899__auto___20220 + (1));
i__17899__auto___20220 = G__20221;
continue;
} else {
}
break;
}

var G__20218 = args20216.length;
switch (G__20218) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20216.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20223 = [];
var len__17898__auto___20276 = arguments.length;
var i__17899__auto___20277 = (0);
while(true){
if((i__17899__auto___20277 < len__17898__auto___20276)){
args20223.push((arguments[i__17899__auto___20277]));

var G__20278 = (i__17899__auto___20277 + (1));
i__17899__auto___20277 = G__20278;
continue;
} else {
}
break;
}

var G__20225 = args20223.length;
switch (G__20225) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20223.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19602__auto___20280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___20280,tc,fc){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___20280,tc,fc){
return (function (state_20251){
var state_val_20252 = (state_20251[(1)]);
if((state_val_20252 === (7))){
var inst_20247 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20253_20281 = state_20251__$1;
(statearr_20253_20281[(2)] = inst_20247);

(statearr_20253_20281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (1))){
var state_20251__$1 = state_20251;
var statearr_20254_20282 = state_20251__$1;
(statearr_20254_20282[(2)] = null);

(statearr_20254_20282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (4))){
var inst_20228 = (state_20251[(7)]);
var inst_20228__$1 = (state_20251[(2)]);
var inst_20229 = (inst_20228__$1 == null);
var state_20251__$1 = (function (){var statearr_20255 = state_20251;
(statearr_20255[(7)] = inst_20228__$1);

return statearr_20255;
})();
if(cljs.core.truth_(inst_20229)){
var statearr_20256_20283 = state_20251__$1;
(statearr_20256_20283[(1)] = (5));

} else {
var statearr_20257_20284 = state_20251__$1;
(statearr_20257_20284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (13))){
var state_20251__$1 = state_20251;
var statearr_20258_20285 = state_20251__$1;
(statearr_20258_20285[(2)] = null);

(statearr_20258_20285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (6))){
var inst_20228 = (state_20251[(7)]);
var inst_20234 = p.call(null,inst_20228);
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20234)){
var statearr_20259_20286 = state_20251__$1;
(statearr_20259_20286[(1)] = (9));

} else {
var statearr_20260_20287 = state_20251__$1;
(statearr_20260_20287[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (3))){
var inst_20249 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20251__$1,inst_20249);
} else {
if((state_val_20252 === (12))){
var state_20251__$1 = state_20251;
var statearr_20261_20288 = state_20251__$1;
(statearr_20261_20288[(2)] = null);

(statearr_20261_20288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (2))){
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20251__$1,(4),ch);
} else {
if((state_val_20252 === (11))){
var inst_20228 = (state_20251[(7)]);
var inst_20238 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20251__$1,(8),inst_20238,inst_20228);
} else {
if((state_val_20252 === (9))){
var state_20251__$1 = state_20251;
var statearr_20262_20289 = state_20251__$1;
(statearr_20262_20289[(2)] = tc);

(statearr_20262_20289[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (5))){
var inst_20231 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20232 = cljs.core.async.close_BANG_.call(null,fc);
var state_20251__$1 = (function (){var statearr_20263 = state_20251;
(statearr_20263[(8)] = inst_20231);

return statearr_20263;
})();
var statearr_20264_20290 = state_20251__$1;
(statearr_20264_20290[(2)] = inst_20232);

(statearr_20264_20290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (14))){
var inst_20245 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
var statearr_20265_20291 = state_20251__$1;
(statearr_20265_20291[(2)] = inst_20245);

(statearr_20265_20291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (10))){
var state_20251__$1 = state_20251;
var statearr_20266_20292 = state_20251__$1;
(statearr_20266_20292[(2)] = fc);

(statearr_20266_20292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20252 === (8))){
var inst_20240 = (state_20251[(2)]);
var state_20251__$1 = state_20251;
if(cljs.core.truth_(inst_20240)){
var statearr_20267_20293 = state_20251__$1;
(statearr_20267_20293[(1)] = (12));

} else {
var statearr_20268_20294 = state_20251__$1;
(statearr_20268_20294[(1)] = (13));

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
});})(c__19602__auto___20280,tc,fc))
;
return ((function (switch__19490__auto__,c__19602__auto___20280,tc,fc){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_20272 = [null,null,null,null,null,null,null,null,null];
(statearr_20272[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_20272[(1)] = (1));

return statearr_20272;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_20251){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_20251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e20273){if((e20273 instanceof Object)){
var ex__19494__auto__ = e20273;
var statearr_20274_20295 = state_20251;
(statearr_20274_20295[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20296 = state_20251;
state_20251 = G__20296;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_20251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_20251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___20280,tc,fc))
})();
var state__19604__auto__ = (function (){var statearr_20275 = f__19603__auto__.call(null);
(statearr_20275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___20280);

return statearr_20275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___20280,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto__){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto__){
return (function (state_20360){
var state_val_20361 = (state_20360[(1)]);
if((state_val_20361 === (7))){
var inst_20356 = (state_20360[(2)]);
var state_20360__$1 = state_20360;
var statearr_20362_20383 = state_20360__$1;
(statearr_20362_20383[(2)] = inst_20356);

(statearr_20362_20383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20361 === (1))){
var inst_20340 = init;
var state_20360__$1 = (function (){var statearr_20363 = state_20360;
(statearr_20363[(7)] = inst_20340);

return statearr_20363;
})();
var statearr_20364_20384 = state_20360__$1;
(statearr_20364_20384[(2)] = null);

(statearr_20364_20384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20361 === (4))){
var inst_20343 = (state_20360[(8)]);
var inst_20343__$1 = (state_20360[(2)]);
var inst_20344 = (inst_20343__$1 == null);
var state_20360__$1 = (function (){var statearr_20365 = state_20360;
(statearr_20365[(8)] = inst_20343__$1);

return statearr_20365;
})();
if(cljs.core.truth_(inst_20344)){
var statearr_20366_20385 = state_20360__$1;
(statearr_20366_20385[(1)] = (5));

} else {
var statearr_20367_20386 = state_20360__$1;
(statearr_20367_20386[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20361 === (6))){
var inst_20343 = (state_20360[(8)]);
var inst_20340 = (state_20360[(7)]);
var inst_20347 = (state_20360[(9)]);
var inst_20347__$1 = f.call(null,inst_20340,inst_20343);
var inst_20348 = cljs.core.reduced_QMARK_.call(null,inst_20347__$1);
var state_20360__$1 = (function (){var statearr_20368 = state_20360;
(statearr_20368[(9)] = inst_20347__$1);

return statearr_20368;
})();
if(inst_20348){
var statearr_20369_20387 = state_20360__$1;
(statearr_20369_20387[(1)] = (8));

} else {
var statearr_20370_20388 = state_20360__$1;
(statearr_20370_20388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20361 === (3))){
var inst_20358 = (state_20360[(2)]);
var state_20360__$1 = state_20360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20360__$1,inst_20358);
} else {
if((state_val_20361 === (2))){
var state_20360__$1 = state_20360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20360__$1,(4),ch);
} else {
if((state_val_20361 === (9))){
var inst_20347 = (state_20360[(9)]);
var inst_20340 = inst_20347;
var state_20360__$1 = (function (){var statearr_20371 = state_20360;
(statearr_20371[(7)] = inst_20340);

return statearr_20371;
})();
var statearr_20372_20389 = state_20360__$1;
(statearr_20372_20389[(2)] = null);

(statearr_20372_20389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20361 === (5))){
var inst_20340 = (state_20360[(7)]);
var state_20360__$1 = state_20360;
var statearr_20373_20390 = state_20360__$1;
(statearr_20373_20390[(2)] = inst_20340);

(statearr_20373_20390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20361 === (10))){
var inst_20354 = (state_20360[(2)]);
var state_20360__$1 = state_20360;
var statearr_20374_20391 = state_20360__$1;
(statearr_20374_20391[(2)] = inst_20354);

(statearr_20374_20391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20361 === (8))){
var inst_20347 = (state_20360[(9)]);
var inst_20350 = cljs.core.deref.call(null,inst_20347);
var state_20360__$1 = state_20360;
var statearr_20375_20392 = state_20360__$1;
(statearr_20375_20392[(2)] = inst_20350);

(statearr_20375_20392[(1)] = (10));


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
});})(c__19602__auto__))
;
return ((function (switch__19490__auto__,c__19602__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19491__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19491__auto____0 = (function (){
var statearr_20379 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20379[(0)] = cljs$core$async$reduce_$_state_machine__19491__auto__);

(statearr_20379[(1)] = (1));

return statearr_20379;
});
var cljs$core$async$reduce_$_state_machine__19491__auto____1 = (function (state_20360){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_20360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e20380){if((e20380 instanceof Object)){
var ex__19494__auto__ = e20380;
var statearr_20381_20393 = state_20360;
(statearr_20381_20393[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20394 = state_20360;
state_20360 = G__20394;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19491__auto__ = function(state_20360){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19491__auto____1.call(this,state_20360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19491__auto____0;
cljs$core$async$reduce_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19491__auto____1;
return cljs$core$async$reduce_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto__))
})();
var state__19604__auto__ = (function (){var statearr_20382 = f__19603__auto__.call(null);
(statearr_20382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto__);

return statearr_20382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto__))
);

return c__19602__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20395 = [];
var len__17898__auto___20447 = arguments.length;
var i__17899__auto___20448 = (0);
while(true){
if((i__17899__auto___20448 < len__17898__auto___20447)){
args20395.push((arguments[i__17899__auto___20448]));

var G__20449 = (i__17899__auto___20448 + (1));
i__17899__auto___20448 = G__20449;
continue;
} else {
}
break;
}

var G__20397 = args20395.length;
switch (G__20397) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20395.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto__){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto__){
return (function (state_20422){
var state_val_20423 = (state_20422[(1)]);
if((state_val_20423 === (7))){
var inst_20404 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
var statearr_20424_20451 = state_20422__$1;
(statearr_20424_20451[(2)] = inst_20404);

(statearr_20424_20451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (1))){
var inst_20398 = cljs.core.seq.call(null,coll);
var inst_20399 = inst_20398;
var state_20422__$1 = (function (){var statearr_20425 = state_20422;
(statearr_20425[(7)] = inst_20399);

return statearr_20425;
})();
var statearr_20426_20452 = state_20422__$1;
(statearr_20426_20452[(2)] = null);

(statearr_20426_20452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (4))){
var inst_20399 = (state_20422[(7)]);
var inst_20402 = cljs.core.first.call(null,inst_20399);
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20422__$1,(7),ch,inst_20402);
} else {
if((state_val_20423 === (13))){
var inst_20416 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
var statearr_20427_20453 = state_20422__$1;
(statearr_20427_20453[(2)] = inst_20416);

(statearr_20427_20453[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (6))){
var inst_20407 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
if(cljs.core.truth_(inst_20407)){
var statearr_20428_20454 = state_20422__$1;
(statearr_20428_20454[(1)] = (8));

} else {
var statearr_20429_20455 = state_20422__$1;
(statearr_20429_20455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (3))){
var inst_20420 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20422__$1,inst_20420);
} else {
if((state_val_20423 === (12))){
var state_20422__$1 = state_20422;
var statearr_20430_20456 = state_20422__$1;
(statearr_20430_20456[(2)] = null);

(statearr_20430_20456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (2))){
var inst_20399 = (state_20422[(7)]);
var state_20422__$1 = state_20422;
if(cljs.core.truth_(inst_20399)){
var statearr_20431_20457 = state_20422__$1;
(statearr_20431_20457[(1)] = (4));

} else {
var statearr_20432_20458 = state_20422__$1;
(statearr_20432_20458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (11))){
var inst_20413 = cljs.core.async.close_BANG_.call(null,ch);
var state_20422__$1 = state_20422;
var statearr_20433_20459 = state_20422__$1;
(statearr_20433_20459[(2)] = inst_20413);

(statearr_20433_20459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (9))){
var state_20422__$1 = state_20422;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20434_20460 = state_20422__$1;
(statearr_20434_20460[(1)] = (11));

} else {
var statearr_20435_20461 = state_20422__$1;
(statearr_20435_20461[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (5))){
var inst_20399 = (state_20422[(7)]);
var state_20422__$1 = state_20422;
var statearr_20436_20462 = state_20422__$1;
(statearr_20436_20462[(2)] = inst_20399);

(statearr_20436_20462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (10))){
var inst_20418 = (state_20422[(2)]);
var state_20422__$1 = state_20422;
var statearr_20437_20463 = state_20422__$1;
(statearr_20437_20463[(2)] = inst_20418);

(statearr_20437_20463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20423 === (8))){
var inst_20399 = (state_20422[(7)]);
var inst_20409 = cljs.core.next.call(null,inst_20399);
var inst_20399__$1 = inst_20409;
var state_20422__$1 = (function (){var statearr_20438 = state_20422;
(statearr_20438[(7)] = inst_20399__$1);

return statearr_20438;
})();
var statearr_20439_20464 = state_20422__$1;
(statearr_20439_20464[(2)] = null);

(statearr_20439_20464[(1)] = (2));


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
});})(c__19602__auto__))
;
return ((function (switch__19490__auto__,c__19602__auto__){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_20443 = [null,null,null,null,null,null,null,null];
(statearr_20443[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_20443[(1)] = (1));

return statearr_20443;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_20422){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_20422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e20444){if((e20444 instanceof Object)){
var ex__19494__auto__ = e20444;
var statearr_20445_20465 = state_20422;
(statearr_20445_20465[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20466 = state_20422;
state_20422 = G__20466;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_20422){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_20422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto__))
})();
var state__19604__auto__ = (function (){var statearr_20446 = f__19603__auto__.call(null);
(statearr_20446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto__);

return statearr_20446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto__))
);

return c__19602__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17495__auto__ = (((_ == null))?null:_);
var m__17496__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,_);
} else {
var m__17496__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17496__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m);
} else {
var m__17496__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20688 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20688 = (function (mult,ch,cs,meta20689){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20689 = meta20689;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20690,meta20689__$1){
var self__ = this;
var _20690__$1 = this;
return (new cljs.core.async.t_cljs$core$async20688(self__.mult,self__.ch,self__.cs,meta20689__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20690){
var self__ = this;
var _20690__$1 = this;
return self__.meta20689;
});})(cs))
;

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20688.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20688.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20689","meta20689",-1463846262,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20688.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20688.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20688";

cljs.core.async.t_cljs$core$async20688.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async20688");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20688 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20688(mult__$1,ch__$1,cs__$1,meta20689){
return (new cljs.core.async.t_cljs$core$async20688(mult__$1,ch__$1,cs__$1,meta20689));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20688(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19602__auto___20909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___20909,cs,m,dchan,dctr,done){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___20909,cs,m,dchan,dctr,done){
return (function (state_20821){
var state_val_20822 = (state_20821[(1)]);
if((state_val_20822 === (7))){
var inst_20817 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20823_20910 = state_20821__$1;
(statearr_20823_20910[(2)] = inst_20817);

(statearr_20823_20910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (20))){
var inst_20722 = (state_20821[(7)]);
var inst_20732 = cljs.core.first.call(null,inst_20722);
var inst_20733 = cljs.core.nth.call(null,inst_20732,(0),null);
var inst_20734 = cljs.core.nth.call(null,inst_20732,(1),null);
var state_20821__$1 = (function (){var statearr_20824 = state_20821;
(statearr_20824[(8)] = inst_20733);

return statearr_20824;
})();
if(cljs.core.truth_(inst_20734)){
var statearr_20825_20911 = state_20821__$1;
(statearr_20825_20911[(1)] = (22));

} else {
var statearr_20826_20912 = state_20821__$1;
(statearr_20826_20912[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (27))){
var inst_20762 = (state_20821[(9)]);
var inst_20693 = (state_20821[(10)]);
var inst_20764 = (state_20821[(11)]);
var inst_20769 = (state_20821[(12)]);
var inst_20769__$1 = cljs.core._nth.call(null,inst_20762,inst_20764);
var inst_20770 = cljs.core.async.put_BANG_.call(null,inst_20769__$1,inst_20693,done);
var state_20821__$1 = (function (){var statearr_20827 = state_20821;
(statearr_20827[(12)] = inst_20769__$1);

return statearr_20827;
})();
if(cljs.core.truth_(inst_20770)){
var statearr_20828_20913 = state_20821__$1;
(statearr_20828_20913[(1)] = (30));

} else {
var statearr_20829_20914 = state_20821__$1;
(statearr_20829_20914[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (1))){
var state_20821__$1 = state_20821;
var statearr_20830_20915 = state_20821__$1;
(statearr_20830_20915[(2)] = null);

(statearr_20830_20915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (24))){
var inst_20722 = (state_20821[(7)]);
var inst_20739 = (state_20821[(2)]);
var inst_20740 = cljs.core.next.call(null,inst_20722);
var inst_20702 = inst_20740;
var inst_20703 = null;
var inst_20704 = (0);
var inst_20705 = (0);
var state_20821__$1 = (function (){var statearr_20831 = state_20821;
(statearr_20831[(13)] = inst_20739);

(statearr_20831[(14)] = inst_20702);

(statearr_20831[(15)] = inst_20704);

(statearr_20831[(16)] = inst_20705);

(statearr_20831[(17)] = inst_20703);

return statearr_20831;
})();
var statearr_20832_20916 = state_20821__$1;
(statearr_20832_20916[(2)] = null);

(statearr_20832_20916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (39))){
var state_20821__$1 = state_20821;
var statearr_20836_20917 = state_20821__$1;
(statearr_20836_20917[(2)] = null);

(statearr_20836_20917[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (4))){
var inst_20693 = (state_20821[(10)]);
var inst_20693__$1 = (state_20821[(2)]);
var inst_20694 = (inst_20693__$1 == null);
var state_20821__$1 = (function (){var statearr_20837 = state_20821;
(statearr_20837[(10)] = inst_20693__$1);

return statearr_20837;
})();
if(cljs.core.truth_(inst_20694)){
var statearr_20838_20918 = state_20821__$1;
(statearr_20838_20918[(1)] = (5));

} else {
var statearr_20839_20919 = state_20821__$1;
(statearr_20839_20919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (15))){
var inst_20702 = (state_20821[(14)]);
var inst_20704 = (state_20821[(15)]);
var inst_20705 = (state_20821[(16)]);
var inst_20703 = (state_20821[(17)]);
var inst_20718 = (state_20821[(2)]);
var inst_20719 = (inst_20705 + (1));
var tmp20833 = inst_20702;
var tmp20834 = inst_20704;
var tmp20835 = inst_20703;
var inst_20702__$1 = tmp20833;
var inst_20703__$1 = tmp20835;
var inst_20704__$1 = tmp20834;
var inst_20705__$1 = inst_20719;
var state_20821__$1 = (function (){var statearr_20840 = state_20821;
(statearr_20840[(14)] = inst_20702__$1);

(statearr_20840[(15)] = inst_20704__$1);

(statearr_20840[(16)] = inst_20705__$1);

(statearr_20840[(18)] = inst_20718);

(statearr_20840[(17)] = inst_20703__$1);

return statearr_20840;
})();
var statearr_20841_20920 = state_20821__$1;
(statearr_20841_20920[(2)] = null);

(statearr_20841_20920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (21))){
var inst_20743 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20845_20921 = state_20821__$1;
(statearr_20845_20921[(2)] = inst_20743);

(statearr_20845_20921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (31))){
var inst_20769 = (state_20821[(12)]);
var inst_20773 = done.call(null,null);
var inst_20774 = cljs.core.async.untap_STAR_.call(null,m,inst_20769);
var state_20821__$1 = (function (){var statearr_20846 = state_20821;
(statearr_20846[(19)] = inst_20773);

return statearr_20846;
})();
var statearr_20847_20922 = state_20821__$1;
(statearr_20847_20922[(2)] = inst_20774);

(statearr_20847_20922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (32))){
var inst_20762 = (state_20821[(9)]);
var inst_20764 = (state_20821[(11)]);
var inst_20763 = (state_20821[(20)]);
var inst_20761 = (state_20821[(21)]);
var inst_20776 = (state_20821[(2)]);
var inst_20777 = (inst_20764 + (1));
var tmp20842 = inst_20762;
var tmp20843 = inst_20763;
var tmp20844 = inst_20761;
var inst_20761__$1 = tmp20844;
var inst_20762__$1 = tmp20842;
var inst_20763__$1 = tmp20843;
var inst_20764__$1 = inst_20777;
var state_20821__$1 = (function (){var statearr_20848 = state_20821;
(statearr_20848[(9)] = inst_20762__$1);

(statearr_20848[(22)] = inst_20776);

(statearr_20848[(11)] = inst_20764__$1);

(statearr_20848[(20)] = inst_20763__$1);

(statearr_20848[(21)] = inst_20761__$1);

return statearr_20848;
})();
var statearr_20849_20923 = state_20821__$1;
(statearr_20849_20923[(2)] = null);

(statearr_20849_20923[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (40))){
var inst_20789 = (state_20821[(23)]);
var inst_20793 = done.call(null,null);
var inst_20794 = cljs.core.async.untap_STAR_.call(null,m,inst_20789);
var state_20821__$1 = (function (){var statearr_20850 = state_20821;
(statearr_20850[(24)] = inst_20793);

return statearr_20850;
})();
var statearr_20851_20924 = state_20821__$1;
(statearr_20851_20924[(2)] = inst_20794);

(statearr_20851_20924[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (33))){
var inst_20780 = (state_20821[(25)]);
var inst_20782 = cljs.core.chunked_seq_QMARK_.call(null,inst_20780);
var state_20821__$1 = state_20821;
if(inst_20782){
var statearr_20852_20925 = state_20821__$1;
(statearr_20852_20925[(1)] = (36));

} else {
var statearr_20853_20926 = state_20821__$1;
(statearr_20853_20926[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (13))){
var inst_20712 = (state_20821[(26)]);
var inst_20715 = cljs.core.async.close_BANG_.call(null,inst_20712);
var state_20821__$1 = state_20821;
var statearr_20854_20927 = state_20821__$1;
(statearr_20854_20927[(2)] = inst_20715);

(statearr_20854_20927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (22))){
var inst_20733 = (state_20821[(8)]);
var inst_20736 = cljs.core.async.close_BANG_.call(null,inst_20733);
var state_20821__$1 = state_20821;
var statearr_20855_20928 = state_20821__$1;
(statearr_20855_20928[(2)] = inst_20736);

(statearr_20855_20928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (36))){
var inst_20780 = (state_20821[(25)]);
var inst_20784 = cljs.core.chunk_first.call(null,inst_20780);
var inst_20785 = cljs.core.chunk_rest.call(null,inst_20780);
var inst_20786 = cljs.core.count.call(null,inst_20784);
var inst_20761 = inst_20785;
var inst_20762 = inst_20784;
var inst_20763 = inst_20786;
var inst_20764 = (0);
var state_20821__$1 = (function (){var statearr_20856 = state_20821;
(statearr_20856[(9)] = inst_20762);

(statearr_20856[(11)] = inst_20764);

(statearr_20856[(20)] = inst_20763);

(statearr_20856[(21)] = inst_20761);

return statearr_20856;
})();
var statearr_20857_20929 = state_20821__$1;
(statearr_20857_20929[(2)] = null);

(statearr_20857_20929[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (41))){
var inst_20780 = (state_20821[(25)]);
var inst_20796 = (state_20821[(2)]);
var inst_20797 = cljs.core.next.call(null,inst_20780);
var inst_20761 = inst_20797;
var inst_20762 = null;
var inst_20763 = (0);
var inst_20764 = (0);
var state_20821__$1 = (function (){var statearr_20858 = state_20821;
(statearr_20858[(9)] = inst_20762);

(statearr_20858[(27)] = inst_20796);

(statearr_20858[(11)] = inst_20764);

(statearr_20858[(20)] = inst_20763);

(statearr_20858[(21)] = inst_20761);

return statearr_20858;
})();
var statearr_20859_20930 = state_20821__$1;
(statearr_20859_20930[(2)] = null);

(statearr_20859_20930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (43))){
var state_20821__$1 = state_20821;
var statearr_20860_20931 = state_20821__$1;
(statearr_20860_20931[(2)] = null);

(statearr_20860_20931[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (29))){
var inst_20805 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20861_20932 = state_20821__$1;
(statearr_20861_20932[(2)] = inst_20805);

(statearr_20861_20932[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (44))){
var inst_20814 = (state_20821[(2)]);
var state_20821__$1 = (function (){var statearr_20862 = state_20821;
(statearr_20862[(28)] = inst_20814);

return statearr_20862;
})();
var statearr_20863_20933 = state_20821__$1;
(statearr_20863_20933[(2)] = null);

(statearr_20863_20933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (6))){
var inst_20753 = (state_20821[(29)]);
var inst_20752 = cljs.core.deref.call(null,cs);
var inst_20753__$1 = cljs.core.keys.call(null,inst_20752);
var inst_20754 = cljs.core.count.call(null,inst_20753__$1);
var inst_20755 = cljs.core.reset_BANG_.call(null,dctr,inst_20754);
var inst_20760 = cljs.core.seq.call(null,inst_20753__$1);
var inst_20761 = inst_20760;
var inst_20762 = null;
var inst_20763 = (0);
var inst_20764 = (0);
var state_20821__$1 = (function (){var statearr_20864 = state_20821;
(statearr_20864[(9)] = inst_20762);

(statearr_20864[(29)] = inst_20753__$1);

(statearr_20864[(30)] = inst_20755);

(statearr_20864[(11)] = inst_20764);

(statearr_20864[(20)] = inst_20763);

(statearr_20864[(21)] = inst_20761);

return statearr_20864;
})();
var statearr_20865_20934 = state_20821__$1;
(statearr_20865_20934[(2)] = null);

(statearr_20865_20934[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (28))){
var inst_20761 = (state_20821[(21)]);
var inst_20780 = (state_20821[(25)]);
var inst_20780__$1 = cljs.core.seq.call(null,inst_20761);
var state_20821__$1 = (function (){var statearr_20866 = state_20821;
(statearr_20866[(25)] = inst_20780__$1);

return statearr_20866;
})();
if(inst_20780__$1){
var statearr_20867_20935 = state_20821__$1;
(statearr_20867_20935[(1)] = (33));

} else {
var statearr_20868_20936 = state_20821__$1;
(statearr_20868_20936[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (25))){
var inst_20764 = (state_20821[(11)]);
var inst_20763 = (state_20821[(20)]);
var inst_20766 = (inst_20764 < inst_20763);
var inst_20767 = inst_20766;
var state_20821__$1 = state_20821;
if(cljs.core.truth_(inst_20767)){
var statearr_20869_20937 = state_20821__$1;
(statearr_20869_20937[(1)] = (27));

} else {
var statearr_20870_20938 = state_20821__$1;
(statearr_20870_20938[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (34))){
var state_20821__$1 = state_20821;
var statearr_20871_20939 = state_20821__$1;
(statearr_20871_20939[(2)] = null);

(statearr_20871_20939[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (17))){
var state_20821__$1 = state_20821;
var statearr_20872_20940 = state_20821__$1;
(statearr_20872_20940[(2)] = null);

(statearr_20872_20940[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (3))){
var inst_20819 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20821__$1,inst_20819);
} else {
if((state_val_20822 === (12))){
var inst_20748 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20873_20941 = state_20821__$1;
(statearr_20873_20941[(2)] = inst_20748);

(statearr_20873_20941[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (2))){
var state_20821__$1 = state_20821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20821__$1,(4),ch);
} else {
if((state_val_20822 === (23))){
var state_20821__$1 = state_20821;
var statearr_20874_20942 = state_20821__$1;
(statearr_20874_20942[(2)] = null);

(statearr_20874_20942[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (35))){
var inst_20803 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20875_20943 = state_20821__$1;
(statearr_20875_20943[(2)] = inst_20803);

(statearr_20875_20943[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (19))){
var inst_20722 = (state_20821[(7)]);
var inst_20726 = cljs.core.chunk_first.call(null,inst_20722);
var inst_20727 = cljs.core.chunk_rest.call(null,inst_20722);
var inst_20728 = cljs.core.count.call(null,inst_20726);
var inst_20702 = inst_20727;
var inst_20703 = inst_20726;
var inst_20704 = inst_20728;
var inst_20705 = (0);
var state_20821__$1 = (function (){var statearr_20876 = state_20821;
(statearr_20876[(14)] = inst_20702);

(statearr_20876[(15)] = inst_20704);

(statearr_20876[(16)] = inst_20705);

(statearr_20876[(17)] = inst_20703);

return statearr_20876;
})();
var statearr_20877_20944 = state_20821__$1;
(statearr_20877_20944[(2)] = null);

(statearr_20877_20944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (11))){
var inst_20702 = (state_20821[(14)]);
var inst_20722 = (state_20821[(7)]);
var inst_20722__$1 = cljs.core.seq.call(null,inst_20702);
var state_20821__$1 = (function (){var statearr_20878 = state_20821;
(statearr_20878[(7)] = inst_20722__$1);

return statearr_20878;
})();
if(inst_20722__$1){
var statearr_20879_20945 = state_20821__$1;
(statearr_20879_20945[(1)] = (16));

} else {
var statearr_20880_20946 = state_20821__$1;
(statearr_20880_20946[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (9))){
var inst_20750 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20881_20947 = state_20821__$1;
(statearr_20881_20947[(2)] = inst_20750);

(statearr_20881_20947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (5))){
var inst_20700 = cljs.core.deref.call(null,cs);
var inst_20701 = cljs.core.seq.call(null,inst_20700);
var inst_20702 = inst_20701;
var inst_20703 = null;
var inst_20704 = (0);
var inst_20705 = (0);
var state_20821__$1 = (function (){var statearr_20882 = state_20821;
(statearr_20882[(14)] = inst_20702);

(statearr_20882[(15)] = inst_20704);

(statearr_20882[(16)] = inst_20705);

(statearr_20882[(17)] = inst_20703);

return statearr_20882;
})();
var statearr_20883_20948 = state_20821__$1;
(statearr_20883_20948[(2)] = null);

(statearr_20883_20948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (14))){
var state_20821__$1 = state_20821;
var statearr_20884_20949 = state_20821__$1;
(statearr_20884_20949[(2)] = null);

(statearr_20884_20949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (45))){
var inst_20811 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20885_20950 = state_20821__$1;
(statearr_20885_20950[(2)] = inst_20811);

(statearr_20885_20950[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (26))){
var inst_20753 = (state_20821[(29)]);
var inst_20807 = (state_20821[(2)]);
var inst_20808 = cljs.core.seq.call(null,inst_20753);
var state_20821__$1 = (function (){var statearr_20886 = state_20821;
(statearr_20886[(31)] = inst_20807);

return statearr_20886;
})();
if(inst_20808){
var statearr_20887_20951 = state_20821__$1;
(statearr_20887_20951[(1)] = (42));

} else {
var statearr_20888_20952 = state_20821__$1;
(statearr_20888_20952[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (16))){
var inst_20722 = (state_20821[(7)]);
var inst_20724 = cljs.core.chunked_seq_QMARK_.call(null,inst_20722);
var state_20821__$1 = state_20821;
if(inst_20724){
var statearr_20889_20953 = state_20821__$1;
(statearr_20889_20953[(1)] = (19));

} else {
var statearr_20890_20954 = state_20821__$1;
(statearr_20890_20954[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (38))){
var inst_20800 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20891_20955 = state_20821__$1;
(statearr_20891_20955[(2)] = inst_20800);

(statearr_20891_20955[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (30))){
var state_20821__$1 = state_20821;
var statearr_20892_20956 = state_20821__$1;
(statearr_20892_20956[(2)] = null);

(statearr_20892_20956[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (10))){
var inst_20705 = (state_20821[(16)]);
var inst_20703 = (state_20821[(17)]);
var inst_20711 = cljs.core._nth.call(null,inst_20703,inst_20705);
var inst_20712 = cljs.core.nth.call(null,inst_20711,(0),null);
var inst_20713 = cljs.core.nth.call(null,inst_20711,(1),null);
var state_20821__$1 = (function (){var statearr_20893 = state_20821;
(statearr_20893[(26)] = inst_20712);

return statearr_20893;
})();
if(cljs.core.truth_(inst_20713)){
var statearr_20894_20957 = state_20821__$1;
(statearr_20894_20957[(1)] = (13));

} else {
var statearr_20895_20958 = state_20821__$1;
(statearr_20895_20958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (18))){
var inst_20746 = (state_20821[(2)]);
var state_20821__$1 = state_20821;
var statearr_20896_20959 = state_20821__$1;
(statearr_20896_20959[(2)] = inst_20746);

(statearr_20896_20959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (42))){
var state_20821__$1 = state_20821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20821__$1,(45),dchan);
} else {
if((state_val_20822 === (37))){
var inst_20693 = (state_20821[(10)]);
var inst_20789 = (state_20821[(23)]);
var inst_20780 = (state_20821[(25)]);
var inst_20789__$1 = cljs.core.first.call(null,inst_20780);
var inst_20790 = cljs.core.async.put_BANG_.call(null,inst_20789__$1,inst_20693,done);
var state_20821__$1 = (function (){var statearr_20897 = state_20821;
(statearr_20897[(23)] = inst_20789__$1);

return statearr_20897;
})();
if(cljs.core.truth_(inst_20790)){
var statearr_20898_20960 = state_20821__$1;
(statearr_20898_20960[(1)] = (39));

} else {
var statearr_20899_20961 = state_20821__$1;
(statearr_20899_20961[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20822 === (8))){
var inst_20704 = (state_20821[(15)]);
var inst_20705 = (state_20821[(16)]);
var inst_20707 = (inst_20705 < inst_20704);
var inst_20708 = inst_20707;
var state_20821__$1 = state_20821;
if(cljs.core.truth_(inst_20708)){
var statearr_20900_20962 = state_20821__$1;
(statearr_20900_20962[(1)] = (10));

} else {
var statearr_20901_20963 = state_20821__$1;
(statearr_20901_20963[(1)] = (11));

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
});})(c__19602__auto___20909,cs,m,dchan,dctr,done))
;
return ((function (switch__19490__auto__,c__19602__auto___20909,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19491__auto__ = null;
var cljs$core$async$mult_$_state_machine__19491__auto____0 = (function (){
var statearr_20905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20905[(0)] = cljs$core$async$mult_$_state_machine__19491__auto__);

(statearr_20905[(1)] = (1));

return statearr_20905;
});
var cljs$core$async$mult_$_state_machine__19491__auto____1 = (function (state_20821){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_20821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e20906){if((e20906 instanceof Object)){
var ex__19494__auto__ = e20906;
var statearr_20907_20964 = state_20821;
(statearr_20907_20964[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20965 = state_20821;
state_20821 = G__20965;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19491__auto__ = function(state_20821){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19491__auto____1.call(this,state_20821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19491__auto____0;
cljs$core$async$mult_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19491__auto____1;
return cljs$core$async$mult_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___20909,cs,m,dchan,dctr,done))
})();
var state__19604__auto__ = (function (){var statearr_20908 = f__19603__auto__.call(null);
(statearr_20908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___20909);

return statearr_20908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___20909,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20966 = [];
var len__17898__auto___20969 = arguments.length;
var i__17899__auto___20970 = (0);
while(true){
if((i__17899__auto___20970 < len__17898__auto___20969)){
args20966.push((arguments[i__17899__auto___20970]));

var G__20971 = (i__17899__auto___20970 + (1));
i__17899__auto___20970 = G__20971;
continue;
} else {
}
break;
}

var G__20968 = args20966.length;
switch (G__20968) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20966.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m);
} else {
var m__17496__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,state_map);
} else {
var m__17496__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17495__auto__ = (((m == null))?null:m);
var m__17496__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,m,mode);
} else {
var m__17496__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17905__auto__ = [];
var len__17898__auto___20983 = arguments.length;
var i__17899__auto___20984 = (0);
while(true){
if((i__17899__auto___20984 < len__17898__auto___20983)){
args__17905__auto__.push((arguments[i__17899__auto___20984]));

var G__20985 = (i__17899__auto___20984 + (1));
i__17899__auto___20984 = G__20985;
continue;
} else {
}
break;
}

var argseq__17906__auto__ = ((((3) < args__17905__auto__.length))?(new cljs.core.IndexedSeq(args__17905__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17906__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20977){
var map__20978 = p__20977;
var map__20978__$1 = ((((!((map__20978 == null)))?((((map__20978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20978):map__20978);
var opts = map__20978__$1;
var statearr_20980_20986 = state;
(statearr_20980_20986[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20978,map__20978__$1,opts){
return (function (val){
var statearr_20981_20987 = state;
(statearr_20981_20987[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20978,map__20978__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20982_20988 = state;
(statearr_20982_20988[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20973){
var G__20974 = cljs.core.first.call(null,seq20973);
var seq20973__$1 = cljs.core.next.call(null,seq20973);
var G__20975 = cljs.core.first.call(null,seq20973__$1);
var seq20973__$2 = cljs.core.next.call(null,seq20973__$1);
var G__20976 = cljs.core.first.call(null,seq20973__$2);
var seq20973__$3 = cljs.core.next.call(null,seq20973__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20974,G__20975,G__20976,seq20973__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21152 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21153){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21153 = meta21153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21154,meta21153__$1){
var self__ = this;
var _21154__$1 = this;
return (new cljs.core.async.t_cljs$core$async21152(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21153__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21154){
var self__ = this;
var _21154__$1 = this;
return self__.meta21153;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21153","meta21153",1887849585,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21152";

cljs.core.async.t_cljs$core$async21152.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21152");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21152 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21152(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21153){
return (new cljs.core.async.t_cljs$core$async21152(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21153));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21152(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19602__auto___21315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___21315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___21315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21252){
var state_val_21253 = (state_21252[(1)]);
if((state_val_21253 === (7))){
var inst_21170 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
var statearr_21254_21316 = state_21252__$1;
(statearr_21254_21316[(2)] = inst_21170);

(statearr_21254_21316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (20))){
var inst_21182 = (state_21252[(7)]);
var state_21252__$1 = state_21252;
var statearr_21255_21317 = state_21252__$1;
(statearr_21255_21317[(2)] = inst_21182);

(statearr_21255_21317[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (27))){
var state_21252__$1 = state_21252;
var statearr_21256_21318 = state_21252__$1;
(statearr_21256_21318[(2)] = null);

(statearr_21256_21318[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (1))){
var inst_21158 = (state_21252[(8)]);
var inst_21158__$1 = calc_state.call(null);
var inst_21160 = (inst_21158__$1 == null);
var inst_21161 = cljs.core.not.call(null,inst_21160);
var state_21252__$1 = (function (){var statearr_21257 = state_21252;
(statearr_21257[(8)] = inst_21158__$1);

return statearr_21257;
})();
if(inst_21161){
var statearr_21258_21319 = state_21252__$1;
(statearr_21258_21319[(1)] = (2));

} else {
var statearr_21259_21320 = state_21252__$1;
(statearr_21259_21320[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (24))){
var inst_21205 = (state_21252[(9)]);
var inst_21212 = (state_21252[(10)]);
var inst_21226 = (state_21252[(11)]);
var inst_21226__$1 = inst_21205.call(null,inst_21212);
var state_21252__$1 = (function (){var statearr_21260 = state_21252;
(statearr_21260[(11)] = inst_21226__$1);

return statearr_21260;
})();
if(cljs.core.truth_(inst_21226__$1)){
var statearr_21261_21321 = state_21252__$1;
(statearr_21261_21321[(1)] = (29));

} else {
var statearr_21262_21322 = state_21252__$1;
(statearr_21262_21322[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (4))){
var inst_21173 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
if(cljs.core.truth_(inst_21173)){
var statearr_21263_21323 = state_21252__$1;
(statearr_21263_21323[(1)] = (8));

} else {
var statearr_21264_21324 = state_21252__$1;
(statearr_21264_21324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (15))){
var inst_21199 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
if(cljs.core.truth_(inst_21199)){
var statearr_21265_21325 = state_21252__$1;
(statearr_21265_21325[(1)] = (19));

} else {
var statearr_21266_21326 = state_21252__$1;
(statearr_21266_21326[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (21))){
var inst_21204 = (state_21252[(12)]);
var inst_21204__$1 = (state_21252[(2)]);
var inst_21205 = cljs.core.get.call(null,inst_21204__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21206 = cljs.core.get.call(null,inst_21204__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21207 = cljs.core.get.call(null,inst_21204__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21252__$1 = (function (){var statearr_21267 = state_21252;
(statearr_21267[(9)] = inst_21205);

(statearr_21267[(13)] = inst_21206);

(statearr_21267[(12)] = inst_21204__$1);

return statearr_21267;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21252__$1,(22),inst_21207);
} else {
if((state_val_21253 === (31))){
var inst_21234 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
if(cljs.core.truth_(inst_21234)){
var statearr_21268_21327 = state_21252__$1;
(statearr_21268_21327[(1)] = (32));

} else {
var statearr_21269_21328 = state_21252__$1;
(statearr_21269_21328[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (32))){
var inst_21211 = (state_21252[(14)]);
var state_21252__$1 = state_21252;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21252__$1,(35),out,inst_21211);
} else {
if((state_val_21253 === (33))){
var inst_21204 = (state_21252[(12)]);
var inst_21182 = inst_21204;
var state_21252__$1 = (function (){var statearr_21270 = state_21252;
(statearr_21270[(7)] = inst_21182);

return statearr_21270;
})();
var statearr_21271_21329 = state_21252__$1;
(statearr_21271_21329[(2)] = null);

(statearr_21271_21329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (13))){
var inst_21182 = (state_21252[(7)]);
var inst_21189 = inst_21182.cljs$lang$protocol_mask$partition0$;
var inst_21190 = (inst_21189 & (64));
var inst_21191 = inst_21182.cljs$core$ISeq$;
var inst_21192 = (inst_21190) || (inst_21191);
var state_21252__$1 = state_21252;
if(cljs.core.truth_(inst_21192)){
var statearr_21272_21330 = state_21252__$1;
(statearr_21272_21330[(1)] = (16));

} else {
var statearr_21273_21331 = state_21252__$1;
(statearr_21273_21331[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (22))){
var inst_21211 = (state_21252[(14)]);
var inst_21212 = (state_21252[(10)]);
var inst_21210 = (state_21252[(2)]);
var inst_21211__$1 = cljs.core.nth.call(null,inst_21210,(0),null);
var inst_21212__$1 = cljs.core.nth.call(null,inst_21210,(1),null);
var inst_21213 = (inst_21211__$1 == null);
var inst_21214 = cljs.core._EQ_.call(null,inst_21212__$1,change);
var inst_21215 = (inst_21213) || (inst_21214);
var state_21252__$1 = (function (){var statearr_21274 = state_21252;
(statearr_21274[(14)] = inst_21211__$1);

(statearr_21274[(10)] = inst_21212__$1);

return statearr_21274;
})();
if(cljs.core.truth_(inst_21215)){
var statearr_21275_21332 = state_21252__$1;
(statearr_21275_21332[(1)] = (23));

} else {
var statearr_21276_21333 = state_21252__$1;
(statearr_21276_21333[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (36))){
var inst_21204 = (state_21252[(12)]);
var inst_21182 = inst_21204;
var state_21252__$1 = (function (){var statearr_21277 = state_21252;
(statearr_21277[(7)] = inst_21182);

return statearr_21277;
})();
var statearr_21278_21334 = state_21252__$1;
(statearr_21278_21334[(2)] = null);

(statearr_21278_21334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (29))){
var inst_21226 = (state_21252[(11)]);
var state_21252__$1 = state_21252;
var statearr_21279_21335 = state_21252__$1;
(statearr_21279_21335[(2)] = inst_21226);

(statearr_21279_21335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (6))){
var state_21252__$1 = state_21252;
var statearr_21280_21336 = state_21252__$1;
(statearr_21280_21336[(2)] = false);

(statearr_21280_21336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (28))){
var inst_21222 = (state_21252[(2)]);
var inst_21223 = calc_state.call(null);
var inst_21182 = inst_21223;
var state_21252__$1 = (function (){var statearr_21281 = state_21252;
(statearr_21281[(7)] = inst_21182);

(statearr_21281[(15)] = inst_21222);

return statearr_21281;
})();
var statearr_21282_21337 = state_21252__$1;
(statearr_21282_21337[(2)] = null);

(statearr_21282_21337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (25))){
var inst_21248 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
var statearr_21283_21338 = state_21252__$1;
(statearr_21283_21338[(2)] = inst_21248);

(statearr_21283_21338[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (34))){
var inst_21246 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
var statearr_21284_21339 = state_21252__$1;
(statearr_21284_21339[(2)] = inst_21246);

(statearr_21284_21339[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (17))){
var state_21252__$1 = state_21252;
var statearr_21285_21340 = state_21252__$1;
(statearr_21285_21340[(2)] = false);

(statearr_21285_21340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (3))){
var state_21252__$1 = state_21252;
var statearr_21286_21341 = state_21252__$1;
(statearr_21286_21341[(2)] = false);

(statearr_21286_21341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (12))){
var inst_21250 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21252__$1,inst_21250);
} else {
if((state_val_21253 === (2))){
var inst_21158 = (state_21252[(8)]);
var inst_21163 = inst_21158.cljs$lang$protocol_mask$partition0$;
var inst_21164 = (inst_21163 & (64));
var inst_21165 = inst_21158.cljs$core$ISeq$;
var inst_21166 = (inst_21164) || (inst_21165);
var state_21252__$1 = state_21252;
if(cljs.core.truth_(inst_21166)){
var statearr_21287_21342 = state_21252__$1;
(statearr_21287_21342[(1)] = (5));

} else {
var statearr_21288_21343 = state_21252__$1;
(statearr_21288_21343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (23))){
var inst_21211 = (state_21252[(14)]);
var inst_21217 = (inst_21211 == null);
var state_21252__$1 = state_21252;
if(cljs.core.truth_(inst_21217)){
var statearr_21289_21344 = state_21252__$1;
(statearr_21289_21344[(1)] = (26));

} else {
var statearr_21290_21345 = state_21252__$1;
(statearr_21290_21345[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (35))){
var inst_21237 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
if(cljs.core.truth_(inst_21237)){
var statearr_21291_21346 = state_21252__$1;
(statearr_21291_21346[(1)] = (36));

} else {
var statearr_21292_21347 = state_21252__$1;
(statearr_21292_21347[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (19))){
var inst_21182 = (state_21252[(7)]);
var inst_21201 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21182);
var state_21252__$1 = state_21252;
var statearr_21293_21348 = state_21252__$1;
(statearr_21293_21348[(2)] = inst_21201);

(statearr_21293_21348[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (11))){
var inst_21182 = (state_21252[(7)]);
var inst_21186 = (inst_21182 == null);
var inst_21187 = cljs.core.not.call(null,inst_21186);
var state_21252__$1 = state_21252;
if(inst_21187){
var statearr_21294_21349 = state_21252__$1;
(statearr_21294_21349[(1)] = (13));

} else {
var statearr_21295_21350 = state_21252__$1;
(statearr_21295_21350[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (9))){
var inst_21158 = (state_21252[(8)]);
var state_21252__$1 = state_21252;
var statearr_21296_21351 = state_21252__$1;
(statearr_21296_21351[(2)] = inst_21158);

(statearr_21296_21351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (5))){
var state_21252__$1 = state_21252;
var statearr_21297_21352 = state_21252__$1;
(statearr_21297_21352[(2)] = true);

(statearr_21297_21352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (14))){
var state_21252__$1 = state_21252;
var statearr_21298_21353 = state_21252__$1;
(statearr_21298_21353[(2)] = false);

(statearr_21298_21353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (26))){
var inst_21212 = (state_21252[(10)]);
var inst_21219 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21212);
var state_21252__$1 = state_21252;
var statearr_21299_21354 = state_21252__$1;
(statearr_21299_21354[(2)] = inst_21219);

(statearr_21299_21354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (16))){
var state_21252__$1 = state_21252;
var statearr_21300_21355 = state_21252__$1;
(statearr_21300_21355[(2)] = true);

(statearr_21300_21355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (38))){
var inst_21242 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
var statearr_21301_21356 = state_21252__$1;
(statearr_21301_21356[(2)] = inst_21242);

(statearr_21301_21356[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (30))){
var inst_21205 = (state_21252[(9)]);
var inst_21206 = (state_21252[(13)]);
var inst_21212 = (state_21252[(10)]);
var inst_21229 = cljs.core.empty_QMARK_.call(null,inst_21205);
var inst_21230 = inst_21206.call(null,inst_21212);
var inst_21231 = cljs.core.not.call(null,inst_21230);
var inst_21232 = (inst_21229) && (inst_21231);
var state_21252__$1 = state_21252;
var statearr_21302_21357 = state_21252__$1;
(statearr_21302_21357[(2)] = inst_21232);

(statearr_21302_21357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (10))){
var inst_21158 = (state_21252[(8)]);
var inst_21178 = (state_21252[(2)]);
var inst_21179 = cljs.core.get.call(null,inst_21178,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21180 = cljs.core.get.call(null,inst_21178,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21181 = cljs.core.get.call(null,inst_21178,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21182 = inst_21158;
var state_21252__$1 = (function (){var statearr_21303 = state_21252;
(statearr_21303[(7)] = inst_21182);

(statearr_21303[(16)] = inst_21180);

(statearr_21303[(17)] = inst_21179);

(statearr_21303[(18)] = inst_21181);

return statearr_21303;
})();
var statearr_21304_21358 = state_21252__$1;
(statearr_21304_21358[(2)] = null);

(statearr_21304_21358[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (18))){
var inst_21196 = (state_21252[(2)]);
var state_21252__$1 = state_21252;
var statearr_21305_21359 = state_21252__$1;
(statearr_21305_21359[(2)] = inst_21196);

(statearr_21305_21359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (37))){
var state_21252__$1 = state_21252;
var statearr_21306_21360 = state_21252__$1;
(statearr_21306_21360[(2)] = null);

(statearr_21306_21360[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21253 === (8))){
var inst_21158 = (state_21252[(8)]);
var inst_21175 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21158);
var state_21252__$1 = state_21252;
var statearr_21307_21361 = state_21252__$1;
(statearr_21307_21361[(2)] = inst_21175);

(statearr_21307_21361[(1)] = (10));


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
});})(c__19602__auto___21315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19490__auto__,c__19602__auto___21315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19491__auto__ = null;
var cljs$core$async$mix_$_state_machine__19491__auto____0 = (function (){
var statearr_21311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21311[(0)] = cljs$core$async$mix_$_state_machine__19491__auto__);

(statearr_21311[(1)] = (1));

return statearr_21311;
});
var cljs$core$async$mix_$_state_machine__19491__auto____1 = (function (state_21252){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_21252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e21312){if((e21312 instanceof Object)){
var ex__19494__auto__ = e21312;
var statearr_21313_21362 = state_21252;
(statearr_21313_21362[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21363 = state_21252;
state_21252 = G__21363;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19491__auto__ = function(state_21252){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19491__auto____1.call(this,state_21252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19491__auto____0;
cljs$core$async$mix_$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19491__auto____1;
return cljs$core$async$mix_$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___21315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19604__auto__ = (function (){var statearr_21314 = f__19603__auto__.call(null);
(statearr_21314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___21315);

return statearr_21314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___21315,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17496__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v,ch);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21364 = [];
var len__17898__auto___21367 = arguments.length;
var i__17899__auto___21368 = (0);
while(true){
if((i__17899__auto___21368 < len__17898__auto___21367)){
args21364.push((arguments[i__17899__auto___21368]));

var G__21369 = (i__17899__auto___21368 + (1));
i__17899__auto___21368 = G__21369;
continue;
} else {
}
break;
}

var G__21366 = args21364.length;
switch (G__21366) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21364.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17495__auto__ = (((p == null))?null:p);
var m__17496__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17495__auto__)]);
if(!((m__17496__auto__ == null))){
return m__17496__auto__.call(null,p,v);
} else {
var m__17496__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17496__auto____$1 == null))){
return m__17496__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21372 = [];
var len__17898__auto___21497 = arguments.length;
var i__17899__auto___21498 = (0);
while(true){
if((i__17899__auto___21498 < len__17898__auto___21497)){
args21372.push((arguments[i__17899__auto___21498]));

var G__21499 = (i__17899__auto___21498 + (1));
i__17899__auto___21498 = G__21499;
continue;
} else {
}
break;
}

var G__21374 = args21372.length;
switch (G__21374) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21372.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16840__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16840__auto__)){
return or__16840__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16840__auto__,mults){
return (function (p1__21371_SHARP_){
if(cljs.core.truth_(p1__21371_SHARP_.call(null,topic))){
return p1__21371_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21371_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16840__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21375 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21376){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21376 = meta21376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21377,meta21376__$1){
var self__ = this;
var _21377__$1 = this;
return (new cljs.core.async.t_cljs$core$async21375(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21376__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21377){
var self__ = this;
var _21377__$1 = this;
return self__.meta21376;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21375.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21375.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21376","meta21376",1255664893,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21375";

cljs.core.async.t_cljs$core$async21375.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21375");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21375 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21375(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21376){
return (new cljs.core.async.t_cljs$core$async21375(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21376));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21375(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19602__auto___21501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___21501,mults,ensure_mult,p){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___21501,mults,ensure_mult,p){
return (function (state_21449){
var state_val_21450 = (state_21449[(1)]);
if((state_val_21450 === (7))){
var inst_21445 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
var statearr_21451_21502 = state_21449__$1;
(statearr_21451_21502[(2)] = inst_21445);

(statearr_21451_21502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (20))){
var state_21449__$1 = state_21449;
var statearr_21452_21503 = state_21449__$1;
(statearr_21452_21503[(2)] = null);

(statearr_21452_21503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (1))){
var state_21449__$1 = state_21449;
var statearr_21453_21504 = state_21449__$1;
(statearr_21453_21504[(2)] = null);

(statearr_21453_21504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (24))){
var inst_21428 = (state_21449[(7)]);
var inst_21437 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21428);
var state_21449__$1 = state_21449;
var statearr_21454_21505 = state_21449__$1;
(statearr_21454_21505[(2)] = inst_21437);

(statearr_21454_21505[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (4))){
var inst_21380 = (state_21449[(8)]);
var inst_21380__$1 = (state_21449[(2)]);
var inst_21381 = (inst_21380__$1 == null);
var state_21449__$1 = (function (){var statearr_21455 = state_21449;
(statearr_21455[(8)] = inst_21380__$1);

return statearr_21455;
})();
if(cljs.core.truth_(inst_21381)){
var statearr_21456_21506 = state_21449__$1;
(statearr_21456_21506[(1)] = (5));

} else {
var statearr_21457_21507 = state_21449__$1;
(statearr_21457_21507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (15))){
var inst_21422 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
var statearr_21458_21508 = state_21449__$1;
(statearr_21458_21508[(2)] = inst_21422);

(statearr_21458_21508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (21))){
var inst_21442 = (state_21449[(2)]);
var state_21449__$1 = (function (){var statearr_21459 = state_21449;
(statearr_21459[(9)] = inst_21442);

return statearr_21459;
})();
var statearr_21460_21509 = state_21449__$1;
(statearr_21460_21509[(2)] = null);

(statearr_21460_21509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (13))){
var inst_21404 = (state_21449[(10)]);
var inst_21406 = cljs.core.chunked_seq_QMARK_.call(null,inst_21404);
var state_21449__$1 = state_21449;
if(inst_21406){
var statearr_21461_21510 = state_21449__$1;
(statearr_21461_21510[(1)] = (16));

} else {
var statearr_21462_21511 = state_21449__$1;
(statearr_21462_21511[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (22))){
var inst_21434 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
if(cljs.core.truth_(inst_21434)){
var statearr_21463_21512 = state_21449__$1;
(statearr_21463_21512[(1)] = (23));

} else {
var statearr_21464_21513 = state_21449__$1;
(statearr_21464_21513[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (6))){
var inst_21380 = (state_21449[(8)]);
var inst_21428 = (state_21449[(7)]);
var inst_21430 = (state_21449[(11)]);
var inst_21428__$1 = topic_fn.call(null,inst_21380);
var inst_21429 = cljs.core.deref.call(null,mults);
var inst_21430__$1 = cljs.core.get.call(null,inst_21429,inst_21428__$1);
var state_21449__$1 = (function (){var statearr_21465 = state_21449;
(statearr_21465[(7)] = inst_21428__$1);

(statearr_21465[(11)] = inst_21430__$1);

return statearr_21465;
})();
if(cljs.core.truth_(inst_21430__$1)){
var statearr_21466_21514 = state_21449__$1;
(statearr_21466_21514[(1)] = (19));

} else {
var statearr_21467_21515 = state_21449__$1;
(statearr_21467_21515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (25))){
var inst_21439 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
var statearr_21468_21516 = state_21449__$1;
(statearr_21468_21516[(2)] = inst_21439);

(statearr_21468_21516[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (17))){
var inst_21404 = (state_21449[(10)]);
var inst_21413 = cljs.core.first.call(null,inst_21404);
var inst_21414 = cljs.core.async.muxch_STAR_.call(null,inst_21413);
var inst_21415 = cljs.core.async.close_BANG_.call(null,inst_21414);
var inst_21416 = cljs.core.next.call(null,inst_21404);
var inst_21390 = inst_21416;
var inst_21391 = null;
var inst_21392 = (0);
var inst_21393 = (0);
var state_21449__$1 = (function (){var statearr_21469 = state_21449;
(statearr_21469[(12)] = inst_21390);

(statearr_21469[(13)] = inst_21392);

(statearr_21469[(14)] = inst_21415);

(statearr_21469[(15)] = inst_21393);

(statearr_21469[(16)] = inst_21391);

return statearr_21469;
})();
var statearr_21470_21517 = state_21449__$1;
(statearr_21470_21517[(2)] = null);

(statearr_21470_21517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (3))){
var inst_21447 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21449__$1,inst_21447);
} else {
if((state_val_21450 === (12))){
var inst_21424 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
var statearr_21471_21518 = state_21449__$1;
(statearr_21471_21518[(2)] = inst_21424);

(statearr_21471_21518[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (2))){
var state_21449__$1 = state_21449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21449__$1,(4),ch);
} else {
if((state_val_21450 === (23))){
var state_21449__$1 = state_21449;
var statearr_21472_21519 = state_21449__$1;
(statearr_21472_21519[(2)] = null);

(statearr_21472_21519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (19))){
var inst_21380 = (state_21449[(8)]);
var inst_21430 = (state_21449[(11)]);
var inst_21432 = cljs.core.async.muxch_STAR_.call(null,inst_21430);
var state_21449__$1 = state_21449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21449__$1,(22),inst_21432,inst_21380);
} else {
if((state_val_21450 === (11))){
var inst_21390 = (state_21449[(12)]);
var inst_21404 = (state_21449[(10)]);
var inst_21404__$1 = cljs.core.seq.call(null,inst_21390);
var state_21449__$1 = (function (){var statearr_21473 = state_21449;
(statearr_21473[(10)] = inst_21404__$1);

return statearr_21473;
})();
if(inst_21404__$1){
var statearr_21474_21520 = state_21449__$1;
(statearr_21474_21520[(1)] = (13));

} else {
var statearr_21475_21521 = state_21449__$1;
(statearr_21475_21521[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (9))){
var inst_21426 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
var statearr_21476_21522 = state_21449__$1;
(statearr_21476_21522[(2)] = inst_21426);

(statearr_21476_21522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (5))){
var inst_21387 = cljs.core.deref.call(null,mults);
var inst_21388 = cljs.core.vals.call(null,inst_21387);
var inst_21389 = cljs.core.seq.call(null,inst_21388);
var inst_21390 = inst_21389;
var inst_21391 = null;
var inst_21392 = (0);
var inst_21393 = (0);
var state_21449__$1 = (function (){var statearr_21477 = state_21449;
(statearr_21477[(12)] = inst_21390);

(statearr_21477[(13)] = inst_21392);

(statearr_21477[(15)] = inst_21393);

(statearr_21477[(16)] = inst_21391);

return statearr_21477;
})();
var statearr_21478_21523 = state_21449__$1;
(statearr_21478_21523[(2)] = null);

(statearr_21478_21523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (14))){
var state_21449__$1 = state_21449;
var statearr_21482_21524 = state_21449__$1;
(statearr_21482_21524[(2)] = null);

(statearr_21482_21524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (16))){
var inst_21404 = (state_21449[(10)]);
var inst_21408 = cljs.core.chunk_first.call(null,inst_21404);
var inst_21409 = cljs.core.chunk_rest.call(null,inst_21404);
var inst_21410 = cljs.core.count.call(null,inst_21408);
var inst_21390 = inst_21409;
var inst_21391 = inst_21408;
var inst_21392 = inst_21410;
var inst_21393 = (0);
var state_21449__$1 = (function (){var statearr_21483 = state_21449;
(statearr_21483[(12)] = inst_21390);

(statearr_21483[(13)] = inst_21392);

(statearr_21483[(15)] = inst_21393);

(statearr_21483[(16)] = inst_21391);

return statearr_21483;
})();
var statearr_21484_21525 = state_21449__$1;
(statearr_21484_21525[(2)] = null);

(statearr_21484_21525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (10))){
var inst_21390 = (state_21449[(12)]);
var inst_21392 = (state_21449[(13)]);
var inst_21393 = (state_21449[(15)]);
var inst_21391 = (state_21449[(16)]);
var inst_21398 = cljs.core._nth.call(null,inst_21391,inst_21393);
var inst_21399 = cljs.core.async.muxch_STAR_.call(null,inst_21398);
var inst_21400 = cljs.core.async.close_BANG_.call(null,inst_21399);
var inst_21401 = (inst_21393 + (1));
var tmp21479 = inst_21390;
var tmp21480 = inst_21392;
var tmp21481 = inst_21391;
var inst_21390__$1 = tmp21479;
var inst_21391__$1 = tmp21481;
var inst_21392__$1 = tmp21480;
var inst_21393__$1 = inst_21401;
var state_21449__$1 = (function (){var statearr_21485 = state_21449;
(statearr_21485[(12)] = inst_21390__$1);

(statearr_21485[(17)] = inst_21400);

(statearr_21485[(13)] = inst_21392__$1);

(statearr_21485[(15)] = inst_21393__$1);

(statearr_21485[(16)] = inst_21391__$1);

return statearr_21485;
})();
var statearr_21486_21526 = state_21449__$1;
(statearr_21486_21526[(2)] = null);

(statearr_21486_21526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (18))){
var inst_21419 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
var statearr_21487_21527 = state_21449__$1;
(statearr_21487_21527[(2)] = inst_21419);

(statearr_21487_21527[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (8))){
var inst_21392 = (state_21449[(13)]);
var inst_21393 = (state_21449[(15)]);
var inst_21395 = (inst_21393 < inst_21392);
var inst_21396 = inst_21395;
var state_21449__$1 = state_21449;
if(cljs.core.truth_(inst_21396)){
var statearr_21488_21528 = state_21449__$1;
(statearr_21488_21528[(1)] = (10));

} else {
var statearr_21489_21529 = state_21449__$1;
(statearr_21489_21529[(1)] = (11));

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
});})(c__19602__auto___21501,mults,ensure_mult,p))
;
return ((function (switch__19490__auto__,c__19602__auto___21501,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_21493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21493[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_21493[(1)] = (1));

return statearr_21493;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_21449){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_21449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e21494){if((e21494 instanceof Object)){
var ex__19494__auto__ = e21494;
var statearr_21495_21530 = state_21449;
(statearr_21495_21530[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21531 = state_21449;
state_21449 = G__21531;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_21449){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_21449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___21501,mults,ensure_mult,p))
})();
var state__19604__auto__ = (function (){var statearr_21496 = f__19603__auto__.call(null);
(statearr_21496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___21501);

return statearr_21496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___21501,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21532 = [];
var len__17898__auto___21535 = arguments.length;
var i__17899__auto___21536 = (0);
while(true){
if((i__17899__auto___21536 < len__17898__auto___21535)){
args21532.push((arguments[i__17899__auto___21536]));

var G__21537 = (i__17899__auto___21536 + (1));
i__17899__auto___21536 = G__21537;
continue;
} else {
}
break;
}

var G__21534 = args21532.length;
switch (G__21534) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21532.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21539 = [];
var len__17898__auto___21542 = arguments.length;
var i__17899__auto___21543 = (0);
while(true){
if((i__17899__auto___21543 < len__17898__auto___21542)){
args21539.push((arguments[i__17899__auto___21543]));

var G__21544 = (i__17899__auto___21543 + (1));
i__17899__auto___21543 = G__21544;
continue;
} else {
}
break;
}

var G__21541 = args21539.length;
switch (G__21541) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21539.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21546 = [];
var len__17898__auto___21617 = arguments.length;
var i__17899__auto___21618 = (0);
while(true){
if((i__17899__auto___21618 < len__17898__auto___21617)){
args21546.push((arguments[i__17899__auto___21618]));

var G__21619 = (i__17899__auto___21618 + (1));
i__17899__auto___21618 = G__21619;
continue;
} else {
}
break;
}

var G__21548 = args21546.length;
switch (G__21548) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21546.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19602__auto___21621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___21621,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___21621,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21587){
var state_val_21588 = (state_21587[(1)]);
if((state_val_21588 === (7))){
var state_21587__$1 = state_21587;
var statearr_21589_21622 = state_21587__$1;
(statearr_21589_21622[(2)] = null);

(statearr_21589_21622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (1))){
var state_21587__$1 = state_21587;
var statearr_21590_21623 = state_21587__$1;
(statearr_21590_21623[(2)] = null);

(statearr_21590_21623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (4))){
var inst_21551 = (state_21587[(7)]);
var inst_21553 = (inst_21551 < cnt);
var state_21587__$1 = state_21587;
if(cljs.core.truth_(inst_21553)){
var statearr_21591_21624 = state_21587__$1;
(statearr_21591_21624[(1)] = (6));

} else {
var statearr_21592_21625 = state_21587__$1;
(statearr_21592_21625[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (15))){
var inst_21583 = (state_21587[(2)]);
var state_21587__$1 = state_21587;
var statearr_21593_21626 = state_21587__$1;
(statearr_21593_21626[(2)] = inst_21583);

(statearr_21593_21626[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (13))){
var inst_21576 = cljs.core.async.close_BANG_.call(null,out);
var state_21587__$1 = state_21587;
var statearr_21594_21627 = state_21587__$1;
(statearr_21594_21627[(2)] = inst_21576);

(statearr_21594_21627[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (6))){
var state_21587__$1 = state_21587;
var statearr_21595_21628 = state_21587__$1;
(statearr_21595_21628[(2)] = null);

(statearr_21595_21628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (3))){
var inst_21585 = (state_21587[(2)]);
var state_21587__$1 = state_21587;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21587__$1,inst_21585);
} else {
if((state_val_21588 === (12))){
var inst_21573 = (state_21587[(8)]);
var inst_21573__$1 = (state_21587[(2)]);
var inst_21574 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21573__$1);
var state_21587__$1 = (function (){var statearr_21596 = state_21587;
(statearr_21596[(8)] = inst_21573__$1);

return statearr_21596;
})();
if(cljs.core.truth_(inst_21574)){
var statearr_21597_21629 = state_21587__$1;
(statearr_21597_21629[(1)] = (13));

} else {
var statearr_21598_21630 = state_21587__$1;
(statearr_21598_21630[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (2))){
var inst_21550 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21551 = (0);
var state_21587__$1 = (function (){var statearr_21599 = state_21587;
(statearr_21599[(9)] = inst_21550);

(statearr_21599[(7)] = inst_21551);

return statearr_21599;
})();
var statearr_21600_21631 = state_21587__$1;
(statearr_21600_21631[(2)] = null);

(statearr_21600_21631[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (11))){
var inst_21551 = (state_21587[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21587,(10),Object,null,(9));
var inst_21560 = chs__$1.call(null,inst_21551);
var inst_21561 = done.call(null,inst_21551);
var inst_21562 = cljs.core.async.take_BANG_.call(null,inst_21560,inst_21561);
var state_21587__$1 = state_21587;
var statearr_21601_21632 = state_21587__$1;
(statearr_21601_21632[(2)] = inst_21562);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21587__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (9))){
var inst_21551 = (state_21587[(7)]);
var inst_21564 = (state_21587[(2)]);
var inst_21565 = (inst_21551 + (1));
var inst_21551__$1 = inst_21565;
var state_21587__$1 = (function (){var statearr_21602 = state_21587;
(statearr_21602[(10)] = inst_21564);

(statearr_21602[(7)] = inst_21551__$1);

return statearr_21602;
})();
var statearr_21603_21633 = state_21587__$1;
(statearr_21603_21633[(2)] = null);

(statearr_21603_21633[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (5))){
var inst_21571 = (state_21587[(2)]);
var state_21587__$1 = (function (){var statearr_21604 = state_21587;
(statearr_21604[(11)] = inst_21571);

return statearr_21604;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21587__$1,(12),dchan);
} else {
if((state_val_21588 === (14))){
var inst_21573 = (state_21587[(8)]);
var inst_21578 = cljs.core.apply.call(null,f,inst_21573);
var state_21587__$1 = state_21587;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21587__$1,(16),out,inst_21578);
} else {
if((state_val_21588 === (16))){
var inst_21580 = (state_21587[(2)]);
var state_21587__$1 = (function (){var statearr_21605 = state_21587;
(statearr_21605[(12)] = inst_21580);

return statearr_21605;
})();
var statearr_21606_21634 = state_21587__$1;
(statearr_21606_21634[(2)] = null);

(statearr_21606_21634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (10))){
var inst_21555 = (state_21587[(2)]);
var inst_21556 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21587__$1 = (function (){var statearr_21607 = state_21587;
(statearr_21607[(13)] = inst_21555);

return statearr_21607;
})();
var statearr_21608_21635 = state_21587__$1;
(statearr_21608_21635[(2)] = inst_21556);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21587__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21588 === (8))){
var inst_21569 = (state_21587[(2)]);
var state_21587__$1 = state_21587;
var statearr_21609_21636 = state_21587__$1;
(statearr_21609_21636[(2)] = inst_21569);

(statearr_21609_21636[(1)] = (5));


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
});})(c__19602__auto___21621,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19490__auto__,c__19602__auto___21621,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_21613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21613[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_21613[(1)] = (1));

return statearr_21613;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_21587){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_21587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e21614){if((e21614 instanceof Object)){
var ex__19494__auto__ = e21614;
var statearr_21615_21637 = state_21587;
(statearr_21615_21637[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21638 = state_21587;
state_21587 = G__21638;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_21587){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_21587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___21621,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19604__auto__ = (function (){var statearr_21616 = f__19603__auto__.call(null);
(statearr_21616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___21621);

return statearr_21616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___21621,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21640 = [];
var len__17898__auto___21696 = arguments.length;
var i__17899__auto___21697 = (0);
while(true){
if((i__17899__auto___21697 < len__17898__auto___21696)){
args21640.push((arguments[i__17899__auto___21697]));

var G__21698 = (i__17899__auto___21697 + (1));
i__17899__auto___21697 = G__21698;
continue;
} else {
}
break;
}

var G__21642 = args21640.length;
switch (G__21642) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21640.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19602__auto___21700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___21700,out){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___21700,out){
return (function (state_21672){
var state_val_21673 = (state_21672[(1)]);
if((state_val_21673 === (7))){
var inst_21652 = (state_21672[(7)]);
var inst_21651 = (state_21672[(8)]);
var inst_21651__$1 = (state_21672[(2)]);
var inst_21652__$1 = cljs.core.nth.call(null,inst_21651__$1,(0),null);
var inst_21653 = cljs.core.nth.call(null,inst_21651__$1,(1),null);
var inst_21654 = (inst_21652__$1 == null);
var state_21672__$1 = (function (){var statearr_21674 = state_21672;
(statearr_21674[(7)] = inst_21652__$1);

(statearr_21674[(8)] = inst_21651__$1);

(statearr_21674[(9)] = inst_21653);

return statearr_21674;
})();
if(cljs.core.truth_(inst_21654)){
var statearr_21675_21701 = state_21672__$1;
(statearr_21675_21701[(1)] = (8));

} else {
var statearr_21676_21702 = state_21672__$1;
(statearr_21676_21702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21673 === (1))){
var inst_21643 = cljs.core.vec.call(null,chs);
var inst_21644 = inst_21643;
var state_21672__$1 = (function (){var statearr_21677 = state_21672;
(statearr_21677[(10)] = inst_21644);

return statearr_21677;
})();
var statearr_21678_21703 = state_21672__$1;
(statearr_21678_21703[(2)] = null);

(statearr_21678_21703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21673 === (4))){
var inst_21644 = (state_21672[(10)]);
var state_21672__$1 = state_21672;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21672__$1,(7),inst_21644);
} else {
if((state_val_21673 === (6))){
var inst_21668 = (state_21672[(2)]);
var state_21672__$1 = state_21672;
var statearr_21679_21704 = state_21672__$1;
(statearr_21679_21704[(2)] = inst_21668);

(statearr_21679_21704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21673 === (3))){
var inst_21670 = (state_21672[(2)]);
var state_21672__$1 = state_21672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21672__$1,inst_21670);
} else {
if((state_val_21673 === (2))){
var inst_21644 = (state_21672[(10)]);
var inst_21646 = cljs.core.count.call(null,inst_21644);
var inst_21647 = (inst_21646 > (0));
var state_21672__$1 = state_21672;
if(cljs.core.truth_(inst_21647)){
var statearr_21681_21705 = state_21672__$1;
(statearr_21681_21705[(1)] = (4));

} else {
var statearr_21682_21706 = state_21672__$1;
(statearr_21682_21706[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21673 === (11))){
var inst_21644 = (state_21672[(10)]);
var inst_21661 = (state_21672[(2)]);
var tmp21680 = inst_21644;
var inst_21644__$1 = tmp21680;
var state_21672__$1 = (function (){var statearr_21683 = state_21672;
(statearr_21683[(10)] = inst_21644__$1);

(statearr_21683[(11)] = inst_21661);

return statearr_21683;
})();
var statearr_21684_21707 = state_21672__$1;
(statearr_21684_21707[(2)] = null);

(statearr_21684_21707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21673 === (9))){
var inst_21652 = (state_21672[(7)]);
var state_21672__$1 = state_21672;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21672__$1,(11),out,inst_21652);
} else {
if((state_val_21673 === (5))){
var inst_21666 = cljs.core.async.close_BANG_.call(null,out);
var state_21672__$1 = state_21672;
var statearr_21685_21708 = state_21672__$1;
(statearr_21685_21708[(2)] = inst_21666);

(statearr_21685_21708[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21673 === (10))){
var inst_21664 = (state_21672[(2)]);
var state_21672__$1 = state_21672;
var statearr_21686_21709 = state_21672__$1;
(statearr_21686_21709[(2)] = inst_21664);

(statearr_21686_21709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21673 === (8))){
var inst_21644 = (state_21672[(10)]);
var inst_21652 = (state_21672[(7)]);
var inst_21651 = (state_21672[(8)]);
var inst_21653 = (state_21672[(9)]);
var inst_21656 = (function (){var cs = inst_21644;
var vec__21649 = inst_21651;
var v = inst_21652;
var c = inst_21653;
return ((function (cs,vec__21649,v,c,inst_21644,inst_21652,inst_21651,inst_21653,state_val_21673,c__19602__auto___21700,out){
return (function (p1__21639_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21639_SHARP_);
});
;})(cs,vec__21649,v,c,inst_21644,inst_21652,inst_21651,inst_21653,state_val_21673,c__19602__auto___21700,out))
})();
var inst_21657 = cljs.core.filterv.call(null,inst_21656,inst_21644);
var inst_21644__$1 = inst_21657;
var state_21672__$1 = (function (){var statearr_21687 = state_21672;
(statearr_21687[(10)] = inst_21644__$1);

return statearr_21687;
})();
var statearr_21688_21710 = state_21672__$1;
(statearr_21688_21710[(2)] = null);

(statearr_21688_21710[(1)] = (2));


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
});})(c__19602__auto___21700,out))
;
return ((function (switch__19490__auto__,c__19602__auto___21700,out){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_21692 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21692[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_21692[(1)] = (1));

return statearr_21692;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_21672){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_21672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e21693){if((e21693 instanceof Object)){
var ex__19494__auto__ = e21693;
var statearr_21694_21711 = state_21672;
(statearr_21694_21711[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21712 = state_21672;
state_21672 = G__21712;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_21672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_21672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___21700,out))
})();
var state__19604__auto__ = (function (){var statearr_21695 = f__19603__auto__.call(null);
(statearr_21695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___21700);

return statearr_21695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___21700,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21713 = [];
var len__17898__auto___21762 = arguments.length;
var i__17899__auto___21763 = (0);
while(true){
if((i__17899__auto___21763 < len__17898__auto___21762)){
args21713.push((arguments[i__17899__auto___21763]));

var G__21764 = (i__17899__auto___21763 + (1));
i__17899__auto___21763 = G__21764;
continue;
} else {
}
break;
}

var G__21715 = args21713.length;
switch (G__21715) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21713.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19602__auto___21766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___21766,out){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___21766,out){
return (function (state_21739){
var state_val_21740 = (state_21739[(1)]);
if((state_val_21740 === (7))){
var inst_21721 = (state_21739[(7)]);
var inst_21721__$1 = (state_21739[(2)]);
var inst_21722 = (inst_21721__$1 == null);
var inst_21723 = cljs.core.not.call(null,inst_21722);
var state_21739__$1 = (function (){var statearr_21741 = state_21739;
(statearr_21741[(7)] = inst_21721__$1);

return statearr_21741;
})();
if(inst_21723){
var statearr_21742_21767 = state_21739__$1;
(statearr_21742_21767[(1)] = (8));

} else {
var statearr_21743_21768 = state_21739__$1;
(statearr_21743_21768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21740 === (1))){
var inst_21716 = (0);
var state_21739__$1 = (function (){var statearr_21744 = state_21739;
(statearr_21744[(8)] = inst_21716);

return statearr_21744;
})();
var statearr_21745_21769 = state_21739__$1;
(statearr_21745_21769[(2)] = null);

(statearr_21745_21769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21740 === (4))){
var state_21739__$1 = state_21739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21739__$1,(7),ch);
} else {
if((state_val_21740 === (6))){
var inst_21734 = (state_21739[(2)]);
var state_21739__$1 = state_21739;
var statearr_21746_21770 = state_21739__$1;
(statearr_21746_21770[(2)] = inst_21734);

(statearr_21746_21770[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21740 === (3))){
var inst_21736 = (state_21739[(2)]);
var inst_21737 = cljs.core.async.close_BANG_.call(null,out);
var state_21739__$1 = (function (){var statearr_21747 = state_21739;
(statearr_21747[(9)] = inst_21736);

return statearr_21747;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21739__$1,inst_21737);
} else {
if((state_val_21740 === (2))){
var inst_21716 = (state_21739[(8)]);
var inst_21718 = (inst_21716 < n);
var state_21739__$1 = state_21739;
if(cljs.core.truth_(inst_21718)){
var statearr_21748_21771 = state_21739__$1;
(statearr_21748_21771[(1)] = (4));

} else {
var statearr_21749_21772 = state_21739__$1;
(statearr_21749_21772[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21740 === (11))){
var inst_21716 = (state_21739[(8)]);
var inst_21726 = (state_21739[(2)]);
var inst_21727 = (inst_21716 + (1));
var inst_21716__$1 = inst_21727;
var state_21739__$1 = (function (){var statearr_21750 = state_21739;
(statearr_21750[(10)] = inst_21726);

(statearr_21750[(8)] = inst_21716__$1);

return statearr_21750;
})();
var statearr_21751_21773 = state_21739__$1;
(statearr_21751_21773[(2)] = null);

(statearr_21751_21773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21740 === (9))){
var state_21739__$1 = state_21739;
var statearr_21752_21774 = state_21739__$1;
(statearr_21752_21774[(2)] = null);

(statearr_21752_21774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21740 === (5))){
var state_21739__$1 = state_21739;
var statearr_21753_21775 = state_21739__$1;
(statearr_21753_21775[(2)] = null);

(statearr_21753_21775[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21740 === (10))){
var inst_21731 = (state_21739[(2)]);
var state_21739__$1 = state_21739;
var statearr_21754_21776 = state_21739__$1;
(statearr_21754_21776[(2)] = inst_21731);

(statearr_21754_21776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21740 === (8))){
var inst_21721 = (state_21739[(7)]);
var state_21739__$1 = state_21739;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21739__$1,(11),out,inst_21721);
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
});})(c__19602__auto___21766,out))
;
return ((function (switch__19490__auto__,c__19602__auto___21766,out){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_21758 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21758[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_21758[(1)] = (1));

return statearr_21758;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_21739){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_21739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e21759){if((e21759 instanceof Object)){
var ex__19494__auto__ = e21759;
var statearr_21760_21777 = state_21739;
(statearr_21760_21777[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21778 = state_21739;
state_21739 = G__21778;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_21739){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_21739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___21766,out))
})();
var state__19604__auto__ = (function (){var statearr_21761 = f__19603__auto__.call(null);
(statearr_21761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___21766);

return statearr_21761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___21766,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21786 = (function (map_LT_,f,ch,meta21787){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21787 = meta21787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21788,meta21787__$1){
var self__ = this;
var _21788__$1 = this;
return (new cljs.core.async.t_cljs$core$async21786(self__.map_LT_,self__.f,self__.ch,meta21787__$1));
});

cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21788){
var self__ = this;
var _21788__$1 = this;
return self__.meta21787;
});

cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21789 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21789 = (function (map_LT_,f,ch,meta21787,_,fn1,meta21790){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21787 = meta21787;
this._ = _;
this.fn1 = fn1;
this.meta21790 = meta21790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21791,meta21790__$1){
var self__ = this;
var _21791__$1 = this;
return (new cljs.core.async.t_cljs$core$async21789(self__.map_LT_,self__.f,self__.ch,self__.meta21787,self__._,self__.fn1,meta21790__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21791){
var self__ = this;
var _21791__$1 = this;
return self__.meta21790;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21789.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21789.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21789.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21789.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21779_SHARP_){
return f1.call(null,(((p1__21779_SHARP_ == null))?null:self__.f.call(null,p1__21779_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21789.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21787","meta21787",1682760263,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21786","cljs.core.async/t_cljs$core$async21786",2007000921,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21790","meta21790",2051843837,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21789.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21789.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21789";

cljs.core.async.t_cljs$core$async21789.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21789");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21789 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21789(map_LT___$1,f__$1,ch__$1,meta21787__$1,___$2,fn1__$1,meta21790){
return (new cljs.core.async.t_cljs$core$async21789(map_LT___$1,f__$1,ch__$1,meta21787__$1,___$2,fn1__$1,meta21790));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21789(self__.map_LT_,self__.f,self__.ch,self__.meta21787,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16828__auto__ = ret;
if(cljs.core.truth_(and__16828__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16828__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21786.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21787","meta21787",1682760263,null)], null);
});

cljs.core.async.t_cljs$core$async21786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21786";

cljs.core.async.t_cljs$core$async21786.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21786");
});

cljs.core.async.__GT_t_cljs$core$async21786 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21786(map_LT___$1,f__$1,ch__$1,meta21787){
return (new cljs.core.async.t_cljs$core$async21786(map_LT___$1,f__$1,ch__$1,meta21787));
});

}

return (new cljs.core.async.t_cljs$core$async21786(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21795 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21795 = (function (map_GT_,f,ch,meta21796){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21796 = meta21796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21797,meta21796__$1){
var self__ = this;
var _21797__$1 = this;
return (new cljs.core.async.t_cljs$core$async21795(self__.map_GT_,self__.f,self__.ch,meta21796__$1));
});

cljs.core.async.t_cljs$core$async21795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21797){
var self__ = this;
var _21797__$1 = this;
return self__.meta21796;
});

cljs.core.async.t_cljs$core$async21795.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21795.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21795.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21795.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21795.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21795.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21795.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21796","meta21796",1454875980,null)], null);
});

cljs.core.async.t_cljs$core$async21795.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21795.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21795";

cljs.core.async.t_cljs$core$async21795.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21795");
});

cljs.core.async.__GT_t_cljs$core$async21795 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21795(map_GT___$1,f__$1,ch__$1,meta21796){
return (new cljs.core.async.t_cljs$core$async21795(map_GT___$1,f__$1,ch__$1,meta21796));
});

}

return (new cljs.core.async.t_cljs$core$async21795(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21801 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21801 = (function (filter_GT_,p,ch,meta21802){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21802 = meta21802;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21803,meta21802__$1){
var self__ = this;
var _21803__$1 = this;
return (new cljs.core.async.t_cljs$core$async21801(self__.filter_GT_,self__.p,self__.ch,meta21802__$1));
});

cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21803){
var self__ = this;
var _21803__$1 = this;
return self__.meta21802;
});

cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21801.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21801.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21802","meta21802",268220563,null)], null);
});

cljs.core.async.t_cljs$core$async21801.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21801.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21801";

cljs.core.async.t_cljs$core$async21801.cljs$lang$ctorPrWriter = (function (this__17438__auto__,writer__17439__auto__,opt__17440__auto__){
return cljs.core._write.call(null,writer__17439__auto__,"cljs.core.async/t_cljs$core$async21801");
});

cljs.core.async.__GT_t_cljs$core$async21801 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21801(filter_GT___$1,p__$1,ch__$1,meta21802){
return (new cljs.core.async.t_cljs$core$async21801(filter_GT___$1,p__$1,ch__$1,meta21802));
});

}

return (new cljs.core.async.t_cljs$core$async21801(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21804 = [];
var len__17898__auto___21848 = arguments.length;
var i__17899__auto___21849 = (0);
while(true){
if((i__17899__auto___21849 < len__17898__auto___21848)){
args21804.push((arguments[i__17899__auto___21849]));

var G__21850 = (i__17899__auto___21849 + (1));
i__17899__auto___21849 = G__21850;
continue;
} else {
}
break;
}

var G__21806 = args21804.length;
switch (G__21806) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21804.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19602__auto___21852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___21852,out){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___21852,out){
return (function (state_21827){
var state_val_21828 = (state_21827[(1)]);
if((state_val_21828 === (7))){
var inst_21823 = (state_21827[(2)]);
var state_21827__$1 = state_21827;
var statearr_21829_21853 = state_21827__$1;
(statearr_21829_21853[(2)] = inst_21823);

(statearr_21829_21853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21828 === (1))){
var state_21827__$1 = state_21827;
var statearr_21830_21854 = state_21827__$1;
(statearr_21830_21854[(2)] = null);

(statearr_21830_21854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21828 === (4))){
var inst_21809 = (state_21827[(7)]);
var inst_21809__$1 = (state_21827[(2)]);
var inst_21810 = (inst_21809__$1 == null);
var state_21827__$1 = (function (){var statearr_21831 = state_21827;
(statearr_21831[(7)] = inst_21809__$1);

return statearr_21831;
})();
if(cljs.core.truth_(inst_21810)){
var statearr_21832_21855 = state_21827__$1;
(statearr_21832_21855[(1)] = (5));

} else {
var statearr_21833_21856 = state_21827__$1;
(statearr_21833_21856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21828 === (6))){
var inst_21809 = (state_21827[(7)]);
var inst_21814 = p.call(null,inst_21809);
var state_21827__$1 = state_21827;
if(cljs.core.truth_(inst_21814)){
var statearr_21834_21857 = state_21827__$1;
(statearr_21834_21857[(1)] = (8));

} else {
var statearr_21835_21858 = state_21827__$1;
(statearr_21835_21858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21828 === (3))){
var inst_21825 = (state_21827[(2)]);
var state_21827__$1 = state_21827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21827__$1,inst_21825);
} else {
if((state_val_21828 === (2))){
var state_21827__$1 = state_21827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21827__$1,(4),ch);
} else {
if((state_val_21828 === (11))){
var inst_21817 = (state_21827[(2)]);
var state_21827__$1 = state_21827;
var statearr_21836_21859 = state_21827__$1;
(statearr_21836_21859[(2)] = inst_21817);

(statearr_21836_21859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21828 === (9))){
var state_21827__$1 = state_21827;
var statearr_21837_21860 = state_21827__$1;
(statearr_21837_21860[(2)] = null);

(statearr_21837_21860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21828 === (5))){
var inst_21812 = cljs.core.async.close_BANG_.call(null,out);
var state_21827__$1 = state_21827;
var statearr_21838_21861 = state_21827__$1;
(statearr_21838_21861[(2)] = inst_21812);

(statearr_21838_21861[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21828 === (10))){
var inst_21820 = (state_21827[(2)]);
var state_21827__$1 = (function (){var statearr_21839 = state_21827;
(statearr_21839[(8)] = inst_21820);

return statearr_21839;
})();
var statearr_21840_21862 = state_21827__$1;
(statearr_21840_21862[(2)] = null);

(statearr_21840_21862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21828 === (8))){
var inst_21809 = (state_21827[(7)]);
var state_21827__$1 = state_21827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21827__$1,(11),out,inst_21809);
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
});})(c__19602__auto___21852,out))
;
return ((function (switch__19490__auto__,c__19602__auto___21852,out){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_21844 = [null,null,null,null,null,null,null,null,null];
(statearr_21844[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_21844[(1)] = (1));

return statearr_21844;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_21827){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_21827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e21845){if((e21845 instanceof Object)){
var ex__19494__auto__ = e21845;
var statearr_21846_21863 = state_21827;
(statearr_21846_21863[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21864 = state_21827;
state_21827 = G__21864;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_21827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_21827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___21852,out))
})();
var state__19604__auto__ = (function (){var statearr_21847 = f__19603__auto__.call(null);
(statearr_21847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___21852);

return statearr_21847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___21852,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21865 = [];
var len__17898__auto___21868 = arguments.length;
var i__17899__auto___21869 = (0);
while(true){
if((i__17899__auto___21869 < len__17898__auto___21868)){
args21865.push((arguments[i__17899__auto___21869]));

var G__21870 = (i__17899__auto___21869 + (1));
i__17899__auto___21869 = G__21870;
continue;
} else {
}
break;
}

var G__21867 = args21865.length;
switch (G__21867) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21865.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19602__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto__){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto__){
return (function (state_22037){
var state_val_22038 = (state_22037[(1)]);
if((state_val_22038 === (7))){
var inst_22033 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
var statearr_22039_22080 = state_22037__$1;
(statearr_22039_22080[(2)] = inst_22033);

(statearr_22039_22080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (20))){
var inst_22003 = (state_22037[(7)]);
var inst_22014 = (state_22037[(2)]);
var inst_22015 = cljs.core.next.call(null,inst_22003);
var inst_21989 = inst_22015;
var inst_21990 = null;
var inst_21991 = (0);
var inst_21992 = (0);
var state_22037__$1 = (function (){var statearr_22040 = state_22037;
(statearr_22040[(8)] = inst_21989);

(statearr_22040[(9)] = inst_21990);

(statearr_22040[(10)] = inst_21992);

(statearr_22040[(11)] = inst_21991);

(statearr_22040[(12)] = inst_22014);

return statearr_22040;
})();
var statearr_22041_22081 = state_22037__$1;
(statearr_22041_22081[(2)] = null);

(statearr_22041_22081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (1))){
var state_22037__$1 = state_22037;
var statearr_22042_22082 = state_22037__$1;
(statearr_22042_22082[(2)] = null);

(statearr_22042_22082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (4))){
var inst_21978 = (state_22037[(13)]);
var inst_21978__$1 = (state_22037[(2)]);
var inst_21979 = (inst_21978__$1 == null);
var state_22037__$1 = (function (){var statearr_22043 = state_22037;
(statearr_22043[(13)] = inst_21978__$1);

return statearr_22043;
})();
if(cljs.core.truth_(inst_21979)){
var statearr_22044_22083 = state_22037__$1;
(statearr_22044_22083[(1)] = (5));

} else {
var statearr_22045_22084 = state_22037__$1;
(statearr_22045_22084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (15))){
var state_22037__$1 = state_22037;
var statearr_22049_22085 = state_22037__$1;
(statearr_22049_22085[(2)] = null);

(statearr_22049_22085[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (21))){
var state_22037__$1 = state_22037;
var statearr_22050_22086 = state_22037__$1;
(statearr_22050_22086[(2)] = null);

(statearr_22050_22086[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (13))){
var inst_21989 = (state_22037[(8)]);
var inst_21990 = (state_22037[(9)]);
var inst_21992 = (state_22037[(10)]);
var inst_21991 = (state_22037[(11)]);
var inst_21999 = (state_22037[(2)]);
var inst_22000 = (inst_21992 + (1));
var tmp22046 = inst_21989;
var tmp22047 = inst_21990;
var tmp22048 = inst_21991;
var inst_21989__$1 = tmp22046;
var inst_21990__$1 = tmp22047;
var inst_21991__$1 = tmp22048;
var inst_21992__$1 = inst_22000;
var state_22037__$1 = (function (){var statearr_22051 = state_22037;
(statearr_22051[(8)] = inst_21989__$1);

(statearr_22051[(9)] = inst_21990__$1);

(statearr_22051[(10)] = inst_21992__$1);

(statearr_22051[(11)] = inst_21991__$1);

(statearr_22051[(14)] = inst_21999);

return statearr_22051;
})();
var statearr_22052_22087 = state_22037__$1;
(statearr_22052_22087[(2)] = null);

(statearr_22052_22087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (22))){
var state_22037__$1 = state_22037;
var statearr_22053_22088 = state_22037__$1;
(statearr_22053_22088[(2)] = null);

(statearr_22053_22088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (6))){
var inst_21978 = (state_22037[(13)]);
var inst_21987 = f.call(null,inst_21978);
var inst_21988 = cljs.core.seq.call(null,inst_21987);
var inst_21989 = inst_21988;
var inst_21990 = null;
var inst_21991 = (0);
var inst_21992 = (0);
var state_22037__$1 = (function (){var statearr_22054 = state_22037;
(statearr_22054[(8)] = inst_21989);

(statearr_22054[(9)] = inst_21990);

(statearr_22054[(10)] = inst_21992);

(statearr_22054[(11)] = inst_21991);

return statearr_22054;
})();
var statearr_22055_22089 = state_22037__$1;
(statearr_22055_22089[(2)] = null);

(statearr_22055_22089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (17))){
var inst_22003 = (state_22037[(7)]);
var inst_22007 = cljs.core.chunk_first.call(null,inst_22003);
var inst_22008 = cljs.core.chunk_rest.call(null,inst_22003);
var inst_22009 = cljs.core.count.call(null,inst_22007);
var inst_21989 = inst_22008;
var inst_21990 = inst_22007;
var inst_21991 = inst_22009;
var inst_21992 = (0);
var state_22037__$1 = (function (){var statearr_22056 = state_22037;
(statearr_22056[(8)] = inst_21989);

(statearr_22056[(9)] = inst_21990);

(statearr_22056[(10)] = inst_21992);

(statearr_22056[(11)] = inst_21991);

return statearr_22056;
})();
var statearr_22057_22090 = state_22037__$1;
(statearr_22057_22090[(2)] = null);

(statearr_22057_22090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (3))){
var inst_22035 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22037__$1,inst_22035);
} else {
if((state_val_22038 === (12))){
var inst_22023 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
var statearr_22058_22091 = state_22037__$1;
(statearr_22058_22091[(2)] = inst_22023);

(statearr_22058_22091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (2))){
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22037__$1,(4),in$);
} else {
if((state_val_22038 === (23))){
var inst_22031 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
var statearr_22059_22092 = state_22037__$1;
(statearr_22059_22092[(2)] = inst_22031);

(statearr_22059_22092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (19))){
var inst_22018 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
var statearr_22060_22093 = state_22037__$1;
(statearr_22060_22093[(2)] = inst_22018);

(statearr_22060_22093[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (11))){
var inst_21989 = (state_22037[(8)]);
var inst_22003 = (state_22037[(7)]);
var inst_22003__$1 = cljs.core.seq.call(null,inst_21989);
var state_22037__$1 = (function (){var statearr_22061 = state_22037;
(statearr_22061[(7)] = inst_22003__$1);

return statearr_22061;
})();
if(inst_22003__$1){
var statearr_22062_22094 = state_22037__$1;
(statearr_22062_22094[(1)] = (14));

} else {
var statearr_22063_22095 = state_22037__$1;
(statearr_22063_22095[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (9))){
var inst_22025 = (state_22037[(2)]);
var inst_22026 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22037__$1 = (function (){var statearr_22064 = state_22037;
(statearr_22064[(15)] = inst_22025);

return statearr_22064;
})();
if(cljs.core.truth_(inst_22026)){
var statearr_22065_22096 = state_22037__$1;
(statearr_22065_22096[(1)] = (21));

} else {
var statearr_22066_22097 = state_22037__$1;
(statearr_22066_22097[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (5))){
var inst_21981 = cljs.core.async.close_BANG_.call(null,out);
var state_22037__$1 = state_22037;
var statearr_22067_22098 = state_22037__$1;
(statearr_22067_22098[(2)] = inst_21981);

(statearr_22067_22098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (14))){
var inst_22003 = (state_22037[(7)]);
var inst_22005 = cljs.core.chunked_seq_QMARK_.call(null,inst_22003);
var state_22037__$1 = state_22037;
if(inst_22005){
var statearr_22068_22099 = state_22037__$1;
(statearr_22068_22099[(1)] = (17));

} else {
var statearr_22069_22100 = state_22037__$1;
(statearr_22069_22100[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (16))){
var inst_22021 = (state_22037[(2)]);
var state_22037__$1 = state_22037;
var statearr_22070_22101 = state_22037__$1;
(statearr_22070_22101[(2)] = inst_22021);

(statearr_22070_22101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22038 === (10))){
var inst_21990 = (state_22037[(9)]);
var inst_21992 = (state_22037[(10)]);
var inst_21997 = cljs.core._nth.call(null,inst_21990,inst_21992);
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22037__$1,(13),out,inst_21997);
} else {
if((state_val_22038 === (18))){
var inst_22003 = (state_22037[(7)]);
var inst_22012 = cljs.core.first.call(null,inst_22003);
var state_22037__$1 = state_22037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22037__$1,(20),out,inst_22012);
} else {
if((state_val_22038 === (8))){
var inst_21992 = (state_22037[(10)]);
var inst_21991 = (state_22037[(11)]);
var inst_21994 = (inst_21992 < inst_21991);
var inst_21995 = inst_21994;
var state_22037__$1 = state_22037;
if(cljs.core.truth_(inst_21995)){
var statearr_22071_22102 = state_22037__$1;
(statearr_22071_22102[(1)] = (10));

} else {
var statearr_22072_22103 = state_22037__$1;
(statearr_22072_22103[(1)] = (11));

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
});})(c__19602__auto__))
;
return ((function (switch__19490__auto__,c__19602__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19491__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19491__auto____0 = (function (){
var statearr_22076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22076[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19491__auto__);

(statearr_22076[(1)] = (1));

return statearr_22076;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19491__auto____1 = (function (state_22037){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_22037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e22077){if((e22077 instanceof Object)){
var ex__19494__auto__ = e22077;
var statearr_22078_22104 = state_22037;
(statearr_22078_22104[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22105 = state_22037;
state_22037 = G__22105;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19491__auto__ = function(state_22037){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19491__auto____1.call(this,state_22037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19491__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19491__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto__))
})();
var state__19604__auto__ = (function (){var statearr_22079 = f__19603__auto__.call(null);
(statearr_22079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto__);

return statearr_22079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto__))
);

return c__19602__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22106 = [];
var len__17898__auto___22109 = arguments.length;
var i__17899__auto___22110 = (0);
while(true){
if((i__17899__auto___22110 < len__17898__auto___22109)){
args22106.push((arguments[i__17899__auto___22110]));

var G__22111 = (i__17899__auto___22110 + (1));
i__17899__auto___22110 = G__22111;
continue;
} else {
}
break;
}

var G__22108 = args22106.length;
switch (G__22108) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22106.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args22113 = [];
var len__17898__auto___22116 = arguments.length;
var i__17899__auto___22117 = (0);
while(true){
if((i__17899__auto___22117 < len__17898__auto___22116)){
args22113.push((arguments[i__17899__auto___22117]));

var G__22118 = (i__17899__auto___22117 + (1));
i__17899__auto___22117 = G__22118;
continue;
} else {
}
break;
}

var G__22115 = args22113.length;
switch (G__22115) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22113.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args22120 = [];
var len__17898__auto___22171 = arguments.length;
var i__17899__auto___22172 = (0);
while(true){
if((i__17899__auto___22172 < len__17898__auto___22171)){
args22120.push((arguments[i__17899__auto___22172]));

var G__22173 = (i__17899__auto___22172 + (1));
i__17899__auto___22172 = G__22173;
continue;
} else {
}
break;
}

var G__22122 = args22120.length;
switch (G__22122) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22120.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19602__auto___22175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___22175,out){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___22175,out){
return (function (state_22146){
var state_val_22147 = (state_22146[(1)]);
if((state_val_22147 === (7))){
var inst_22141 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22148_22176 = state_22146__$1;
(statearr_22148_22176[(2)] = inst_22141);

(statearr_22148_22176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (1))){
var inst_22123 = null;
var state_22146__$1 = (function (){var statearr_22149 = state_22146;
(statearr_22149[(7)] = inst_22123);

return statearr_22149;
})();
var statearr_22150_22177 = state_22146__$1;
(statearr_22150_22177[(2)] = null);

(statearr_22150_22177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (4))){
var inst_22126 = (state_22146[(8)]);
var inst_22126__$1 = (state_22146[(2)]);
var inst_22127 = (inst_22126__$1 == null);
var inst_22128 = cljs.core.not.call(null,inst_22127);
var state_22146__$1 = (function (){var statearr_22151 = state_22146;
(statearr_22151[(8)] = inst_22126__$1);

return statearr_22151;
})();
if(inst_22128){
var statearr_22152_22178 = state_22146__$1;
(statearr_22152_22178[(1)] = (5));

} else {
var statearr_22153_22179 = state_22146__$1;
(statearr_22153_22179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (6))){
var state_22146__$1 = state_22146;
var statearr_22154_22180 = state_22146__$1;
(statearr_22154_22180[(2)] = null);

(statearr_22154_22180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (3))){
var inst_22143 = (state_22146[(2)]);
var inst_22144 = cljs.core.async.close_BANG_.call(null,out);
var state_22146__$1 = (function (){var statearr_22155 = state_22146;
(statearr_22155[(9)] = inst_22143);

return statearr_22155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22146__$1,inst_22144);
} else {
if((state_val_22147 === (2))){
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22146__$1,(4),ch);
} else {
if((state_val_22147 === (11))){
var inst_22126 = (state_22146[(8)]);
var inst_22135 = (state_22146[(2)]);
var inst_22123 = inst_22126;
var state_22146__$1 = (function (){var statearr_22156 = state_22146;
(statearr_22156[(10)] = inst_22135);

(statearr_22156[(7)] = inst_22123);

return statearr_22156;
})();
var statearr_22157_22181 = state_22146__$1;
(statearr_22157_22181[(2)] = null);

(statearr_22157_22181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (9))){
var inst_22126 = (state_22146[(8)]);
var state_22146__$1 = state_22146;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22146__$1,(11),out,inst_22126);
} else {
if((state_val_22147 === (5))){
var inst_22126 = (state_22146[(8)]);
var inst_22123 = (state_22146[(7)]);
var inst_22130 = cljs.core._EQ_.call(null,inst_22126,inst_22123);
var state_22146__$1 = state_22146;
if(inst_22130){
var statearr_22159_22182 = state_22146__$1;
(statearr_22159_22182[(1)] = (8));

} else {
var statearr_22160_22183 = state_22146__$1;
(statearr_22160_22183[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (10))){
var inst_22138 = (state_22146[(2)]);
var state_22146__$1 = state_22146;
var statearr_22161_22184 = state_22146__$1;
(statearr_22161_22184[(2)] = inst_22138);

(statearr_22161_22184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22147 === (8))){
var inst_22123 = (state_22146[(7)]);
var tmp22158 = inst_22123;
var inst_22123__$1 = tmp22158;
var state_22146__$1 = (function (){var statearr_22162 = state_22146;
(statearr_22162[(7)] = inst_22123__$1);

return statearr_22162;
})();
var statearr_22163_22185 = state_22146__$1;
(statearr_22163_22185[(2)] = null);

(statearr_22163_22185[(1)] = (2));


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
});})(c__19602__auto___22175,out))
;
return ((function (switch__19490__auto__,c__19602__auto___22175,out){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_22167 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22167[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_22167[(1)] = (1));

return statearr_22167;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_22146){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_22146);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e22168){if((e22168 instanceof Object)){
var ex__19494__auto__ = e22168;
var statearr_22169_22186 = state_22146;
(statearr_22169_22186[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22146);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22187 = state_22146;
state_22146 = G__22187;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_22146){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_22146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___22175,out))
})();
var state__19604__auto__ = (function (){var statearr_22170 = f__19603__auto__.call(null);
(statearr_22170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___22175);

return statearr_22170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___22175,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22188 = [];
var len__17898__auto___22258 = arguments.length;
var i__17899__auto___22259 = (0);
while(true){
if((i__17899__auto___22259 < len__17898__auto___22258)){
args22188.push((arguments[i__17899__auto___22259]));

var G__22260 = (i__17899__auto___22259 + (1));
i__17899__auto___22259 = G__22260;
continue;
} else {
}
break;
}

var G__22190 = args22188.length;
switch (G__22190) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22188.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19602__auto___22262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___22262,out){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___22262,out){
return (function (state_22228){
var state_val_22229 = (state_22228[(1)]);
if((state_val_22229 === (7))){
var inst_22224 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22230_22263 = state_22228__$1;
(statearr_22230_22263[(2)] = inst_22224);

(statearr_22230_22263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (1))){
var inst_22191 = (new Array(n));
var inst_22192 = inst_22191;
var inst_22193 = (0);
var state_22228__$1 = (function (){var statearr_22231 = state_22228;
(statearr_22231[(7)] = inst_22193);

(statearr_22231[(8)] = inst_22192);

return statearr_22231;
})();
var statearr_22232_22264 = state_22228__$1;
(statearr_22232_22264[(2)] = null);

(statearr_22232_22264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (4))){
var inst_22196 = (state_22228[(9)]);
var inst_22196__$1 = (state_22228[(2)]);
var inst_22197 = (inst_22196__$1 == null);
var inst_22198 = cljs.core.not.call(null,inst_22197);
var state_22228__$1 = (function (){var statearr_22233 = state_22228;
(statearr_22233[(9)] = inst_22196__$1);

return statearr_22233;
})();
if(inst_22198){
var statearr_22234_22265 = state_22228__$1;
(statearr_22234_22265[(1)] = (5));

} else {
var statearr_22235_22266 = state_22228__$1;
(statearr_22235_22266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (15))){
var inst_22218 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22236_22267 = state_22228__$1;
(statearr_22236_22267[(2)] = inst_22218);

(statearr_22236_22267[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (13))){
var state_22228__$1 = state_22228;
var statearr_22237_22268 = state_22228__$1;
(statearr_22237_22268[(2)] = null);

(statearr_22237_22268[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (6))){
var inst_22193 = (state_22228[(7)]);
var inst_22214 = (inst_22193 > (0));
var state_22228__$1 = state_22228;
if(cljs.core.truth_(inst_22214)){
var statearr_22238_22269 = state_22228__$1;
(statearr_22238_22269[(1)] = (12));

} else {
var statearr_22239_22270 = state_22228__$1;
(statearr_22239_22270[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (3))){
var inst_22226 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22228__$1,inst_22226);
} else {
if((state_val_22229 === (12))){
var inst_22192 = (state_22228[(8)]);
var inst_22216 = cljs.core.vec.call(null,inst_22192);
var state_22228__$1 = state_22228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22228__$1,(15),out,inst_22216);
} else {
if((state_val_22229 === (2))){
var state_22228__$1 = state_22228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22228__$1,(4),ch);
} else {
if((state_val_22229 === (11))){
var inst_22208 = (state_22228[(2)]);
var inst_22209 = (new Array(n));
var inst_22192 = inst_22209;
var inst_22193 = (0);
var state_22228__$1 = (function (){var statearr_22240 = state_22228;
(statearr_22240[(10)] = inst_22208);

(statearr_22240[(7)] = inst_22193);

(statearr_22240[(8)] = inst_22192);

return statearr_22240;
})();
var statearr_22241_22271 = state_22228__$1;
(statearr_22241_22271[(2)] = null);

(statearr_22241_22271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (9))){
var inst_22192 = (state_22228[(8)]);
var inst_22206 = cljs.core.vec.call(null,inst_22192);
var state_22228__$1 = state_22228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22228__$1,(11),out,inst_22206);
} else {
if((state_val_22229 === (5))){
var inst_22196 = (state_22228[(9)]);
var inst_22193 = (state_22228[(7)]);
var inst_22192 = (state_22228[(8)]);
var inst_22201 = (state_22228[(11)]);
var inst_22200 = (inst_22192[inst_22193] = inst_22196);
var inst_22201__$1 = (inst_22193 + (1));
var inst_22202 = (inst_22201__$1 < n);
var state_22228__$1 = (function (){var statearr_22242 = state_22228;
(statearr_22242[(12)] = inst_22200);

(statearr_22242[(11)] = inst_22201__$1);

return statearr_22242;
})();
if(cljs.core.truth_(inst_22202)){
var statearr_22243_22272 = state_22228__$1;
(statearr_22243_22272[(1)] = (8));

} else {
var statearr_22244_22273 = state_22228__$1;
(statearr_22244_22273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (14))){
var inst_22221 = (state_22228[(2)]);
var inst_22222 = cljs.core.async.close_BANG_.call(null,out);
var state_22228__$1 = (function (){var statearr_22246 = state_22228;
(statearr_22246[(13)] = inst_22221);

return statearr_22246;
})();
var statearr_22247_22274 = state_22228__$1;
(statearr_22247_22274[(2)] = inst_22222);

(statearr_22247_22274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (10))){
var inst_22212 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22248_22275 = state_22228__$1;
(statearr_22248_22275[(2)] = inst_22212);

(statearr_22248_22275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (8))){
var inst_22192 = (state_22228[(8)]);
var inst_22201 = (state_22228[(11)]);
var tmp22245 = inst_22192;
var inst_22192__$1 = tmp22245;
var inst_22193 = inst_22201;
var state_22228__$1 = (function (){var statearr_22249 = state_22228;
(statearr_22249[(7)] = inst_22193);

(statearr_22249[(8)] = inst_22192__$1);

return statearr_22249;
})();
var statearr_22250_22276 = state_22228__$1;
(statearr_22250_22276[(2)] = null);

(statearr_22250_22276[(1)] = (2));


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
});})(c__19602__auto___22262,out))
;
return ((function (switch__19490__auto__,c__19602__auto___22262,out){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_22254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22254[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_22254[(1)] = (1));

return statearr_22254;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_22228){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_22228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e22255){if((e22255 instanceof Object)){
var ex__19494__auto__ = e22255;
var statearr_22256_22277 = state_22228;
(statearr_22256_22277[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22278 = state_22228;
state_22228 = G__22278;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_22228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_22228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___22262,out))
})();
var state__19604__auto__ = (function (){var statearr_22257 = f__19603__auto__.call(null);
(statearr_22257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___22262);

return statearr_22257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___22262,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22279 = [];
var len__17898__auto___22353 = arguments.length;
var i__17899__auto___22354 = (0);
while(true){
if((i__17899__auto___22354 < len__17898__auto___22353)){
args22279.push((arguments[i__17899__auto___22354]));

var G__22355 = (i__17899__auto___22354 + (1));
i__17899__auto___22354 = G__22355;
continue;
} else {
}
break;
}

var G__22281 = args22279.length;
switch (G__22281) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22279.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19602__auto___22357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19602__auto___22357,out){
return (function (){
var f__19603__auto__ = (function (){var switch__19490__auto__ = ((function (c__19602__auto___22357,out){
return (function (state_22323){
var state_val_22324 = (state_22323[(1)]);
if((state_val_22324 === (7))){
var inst_22319 = (state_22323[(2)]);
var state_22323__$1 = state_22323;
var statearr_22325_22358 = state_22323__$1;
(statearr_22325_22358[(2)] = inst_22319);

(statearr_22325_22358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (1))){
var inst_22282 = [];
var inst_22283 = inst_22282;
var inst_22284 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22323__$1 = (function (){var statearr_22326 = state_22323;
(statearr_22326[(7)] = inst_22283);

(statearr_22326[(8)] = inst_22284);

return statearr_22326;
})();
var statearr_22327_22359 = state_22323__$1;
(statearr_22327_22359[(2)] = null);

(statearr_22327_22359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (4))){
var inst_22287 = (state_22323[(9)]);
var inst_22287__$1 = (state_22323[(2)]);
var inst_22288 = (inst_22287__$1 == null);
var inst_22289 = cljs.core.not.call(null,inst_22288);
var state_22323__$1 = (function (){var statearr_22328 = state_22323;
(statearr_22328[(9)] = inst_22287__$1);

return statearr_22328;
})();
if(inst_22289){
var statearr_22329_22360 = state_22323__$1;
(statearr_22329_22360[(1)] = (5));

} else {
var statearr_22330_22361 = state_22323__$1;
(statearr_22330_22361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (15))){
var inst_22313 = (state_22323[(2)]);
var state_22323__$1 = state_22323;
var statearr_22331_22362 = state_22323__$1;
(statearr_22331_22362[(2)] = inst_22313);

(statearr_22331_22362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (13))){
var state_22323__$1 = state_22323;
var statearr_22332_22363 = state_22323__$1;
(statearr_22332_22363[(2)] = null);

(statearr_22332_22363[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (6))){
var inst_22283 = (state_22323[(7)]);
var inst_22308 = inst_22283.length;
var inst_22309 = (inst_22308 > (0));
var state_22323__$1 = state_22323;
if(cljs.core.truth_(inst_22309)){
var statearr_22333_22364 = state_22323__$1;
(statearr_22333_22364[(1)] = (12));

} else {
var statearr_22334_22365 = state_22323__$1;
(statearr_22334_22365[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (3))){
var inst_22321 = (state_22323[(2)]);
var state_22323__$1 = state_22323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22323__$1,inst_22321);
} else {
if((state_val_22324 === (12))){
var inst_22283 = (state_22323[(7)]);
var inst_22311 = cljs.core.vec.call(null,inst_22283);
var state_22323__$1 = state_22323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22323__$1,(15),out,inst_22311);
} else {
if((state_val_22324 === (2))){
var state_22323__$1 = state_22323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22323__$1,(4),ch);
} else {
if((state_val_22324 === (11))){
var inst_22287 = (state_22323[(9)]);
var inst_22291 = (state_22323[(10)]);
var inst_22301 = (state_22323[(2)]);
var inst_22302 = [];
var inst_22303 = inst_22302.push(inst_22287);
var inst_22283 = inst_22302;
var inst_22284 = inst_22291;
var state_22323__$1 = (function (){var statearr_22335 = state_22323;
(statearr_22335[(11)] = inst_22303);

(statearr_22335[(7)] = inst_22283);

(statearr_22335[(12)] = inst_22301);

(statearr_22335[(8)] = inst_22284);

return statearr_22335;
})();
var statearr_22336_22366 = state_22323__$1;
(statearr_22336_22366[(2)] = null);

(statearr_22336_22366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (9))){
var inst_22283 = (state_22323[(7)]);
var inst_22299 = cljs.core.vec.call(null,inst_22283);
var state_22323__$1 = state_22323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22323__$1,(11),out,inst_22299);
} else {
if((state_val_22324 === (5))){
var inst_22287 = (state_22323[(9)]);
var inst_22284 = (state_22323[(8)]);
var inst_22291 = (state_22323[(10)]);
var inst_22291__$1 = f.call(null,inst_22287);
var inst_22292 = cljs.core._EQ_.call(null,inst_22291__$1,inst_22284);
var inst_22293 = cljs.core.keyword_identical_QMARK_.call(null,inst_22284,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22294 = (inst_22292) || (inst_22293);
var state_22323__$1 = (function (){var statearr_22337 = state_22323;
(statearr_22337[(10)] = inst_22291__$1);

return statearr_22337;
})();
if(cljs.core.truth_(inst_22294)){
var statearr_22338_22367 = state_22323__$1;
(statearr_22338_22367[(1)] = (8));

} else {
var statearr_22339_22368 = state_22323__$1;
(statearr_22339_22368[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (14))){
var inst_22316 = (state_22323[(2)]);
var inst_22317 = cljs.core.async.close_BANG_.call(null,out);
var state_22323__$1 = (function (){var statearr_22341 = state_22323;
(statearr_22341[(13)] = inst_22316);

return statearr_22341;
})();
var statearr_22342_22369 = state_22323__$1;
(statearr_22342_22369[(2)] = inst_22317);

(statearr_22342_22369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (10))){
var inst_22306 = (state_22323[(2)]);
var state_22323__$1 = state_22323;
var statearr_22343_22370 = state_22323__$1;
(statearr_22343_22370[(2)] = inst_22306);

(statearr_22343_22370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22324 === (8))){
var inst_22283 = (state_22323[(7)]);
var inst_22287 = (state_22323[(9)]);
var inst_22291 = (state_22323[(10)]);
var inst_22296 = inst_22283.push(inst_22287);
var tmp22340 = inst_22283;
var inst_22283__$1 = tmp22340;
var inst_22284 = inst_22291;
var state_22323__$1 = (function (){var statearr_22344 = state_22323;
(statearr_22344[(7)] = inst_22283__$1);

(statearr_22344[(14)] = inst_22296);

(statearr_22344[(8)] = inst_22284);

return statearr_22344;
})();
var statearr_22345_22371 = state_22323__$1;
(statearr_22345_22371[(2)] = null);

(statearr_22345_22371[(1)] = (2));


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
});})(c__19602__auto___22357,out))
;
return ((function (switch__19490__auto__,c__19602__auto___22357,out){
return (function() {
var cljs$core$async$state_machine__19491__auto__ = null;
var cljs$core$async$state_machine__19491__auto____0 = (function (){
var statearr_22349 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22349[(0)] = cljs$core$async$state_machine__19491__auto__);

(statearr_22349[(1)] = (1));

return statearr_22349;
});
var cljs$core$async$state_machine__19491__auto____1 = (function (state_22323){
while(true){
var ret_value__19492__auto__ = (function (){try{while(true){
var result__19493__auto__ = switch__19490__auto__.call(null,state_22323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19493__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19493__auto__;
}
break;
}
}catch (e22350){if((e22350 instanceof Object)){
var ex__19494__auto__ = e22350;
var statearr_22351_22372 = state_22323;
(statearr_22351_22372[(5)] = ex__19494__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22350;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19492__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22373 = state_22323;
state_22323 = G__22373;
continue;
} else {
return ret_value__19492__auto__;
}
break;
}
});
cljs$core$async$state_machine__19491__auto__ = function(state_22323){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19491__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19491__auto____1.call(this,state_22323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19491__auto____0;
cljs$core$async$state_machine__19491__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19491__auto____1;
return cljs$core$async$state_machine__19491__auto__;
})()
;})(switch__19490__auto__,c__19602__auto___22357,out))
})();
var state__19604__auto__ = (function (){var statearr_22352 = f__19603__auto__.call(null);
(statearr_22352[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19602__auto___22357);

return statearr_22352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19604__auto__);
});})(c__19602__auto___22357,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1453792887420