import process from 'node:process';globalThis._importMeta_={url:import.meta.url,env:process.env};import * as node_http from 'node:http';
import * as node_https from 'node:https';
import * as node_zlib from 'node:zlib';
import * as node_stream from 'node:stream';
import { PassThrough, Transform } from 'node:stream';
import * as node_buffer from 'node:buffer';
import * as node_util from 'node:util';
import * as node_url from 'node:url';
import { pathToFileURL, fileURLToPath } from 'node:url';
import * as node_net from 'node:net';
import * as node_fs$1 from 'node:fs';
import { promises, existsSync } from 'node:fs';
import * as node_path$1 from 'node:path';
import { dirname as dirname$1, resolve as resolve$1, join as join$1 } from 'node:path';
import invariant from 'vinxi/lib/invariant';
import { join, virtualId, handlerModule } from 'vinxi/lib/path';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import g$2 from 'tiny-invariant';
import { defaultTransformer, createFileRoute, lazyRouteComponent, lazyFn, Link, isRedirect as isRedirect$1, isNotFound, createRootRoute, Outlet, ScrollRestoration, createMemoryHistory, useRouter, useRouterState, isPlainArray, isPlainObject as isPlainObject$1, RouterProvider, ScriptOnce, createRouter as createRouter$2, defer as defer$1, pick, createControlledPromise } from '@tanstack/react-router';
import * as m$5 from 'react';
import { createElement } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as T$2 from '@radix-ui/react-aspect-ratio';
import { useInView, AnimatePresence, motion } from 'motion/react';
import { Search, Clock, Calendar, X as X$2, ChevronDown, Check, SlidersHorizontal, LayoutGrid, List, ChevronLeft, ChevronRight, MoreHorizontal, MapPin, Facebook, Twitter, Instagram, Youtube, Phone, Mail, Menu } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import * as m$6 from '@radix-ui/react-dialog';
import * as y from '@radix-ui/react-accordion';
import * as M$1 from '@radix-ui/react-checkbox';
import * as z$1 from '@radix-ui/react-label';
import * as _$2 from '@radix-ui/react-separator';
import * as v$2 from '@radix-ui/react-slider';
import { z as z$2 } from 'zod';
import { AsyncLocalStorage } from 'node:async_hooks';
import M$2 from 'jsesc';
import { isbot } from 'isbot';
import z$3 from 'react-dom/server';
import { Context } from '@tanstack/react-cross-context';
import * as g$1 from '@radix-ui/react-navigation-menu';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var node$1 = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_http);

const require$$4$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_https);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_zlib);

const require$$6$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_buffer);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_util);

var nodeFetchNative_61758d11 = {};

var l$2=Object.defineProperty;var o=(e,t)=>l$2(e,"name",{value:t,configurable:!0});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o(getDefaultExportFromCjs,"getDefaultExportFromCjs"),nodeFetchNative_61758d11.commonjsGlobal=commonjsGlobal,nodeFetchNative_61758d11.getDefaultExportFromCjs=getDefaultExportFromCjs;

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_url);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_net);

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs$1);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path$1);

var ms=Object.defineProperty;var u$1=(c,l)=>ms(c,"name",{value:l,configurable:!0});var Po=(c,l,d)=>{if(!l.has(c))throw TypeError("Cannot "+d)};var D=(c,l,d)=>(Po(c,l,"read from private field"),d?d.call(c):l.get(c)),ye$1=(c,l,d)=>{if(l.has(c))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(c):l.set(c,d);},ne=(c,l,d,y)=>(Po(c,l,"write to private field"),l.set(c,d),d);var Pe,bt$1,ot,Zt$1,Ue,mt,yt$1,gt$1,oe$1,_t$1,Me,xe$1,St$1;Object.defineProperty(node$1,"__esModule",{value:!0});const http=require$$3,https=require$$4$1,zlib=require$$5,Stream=require$$6$1,require$$6=require$$7,require$$0=require$$8,_commonjsHelpers=nodeFetchNative_61758d11,require$$1=require$$10,require$$4=require$$11,node_fs=require$$0$1,node_path=require$$1$1;function _interopDefaultCompat(c){return c&&typeof c=="object"&&"default"in c?c.default:c}u$1(_interopDefaultCompat,"_interopDefaultCompat");const http__default=_interopDefaultCompat(http),https__default=_interopDefaultCompat(https),zlib__default=_interopDefaultCompat(zlib),Stream__default=_interopDefaultCompat(Stream);function dataUriToBuffer(c){if(!/^data:/i.test(c))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');c=c.replace(/\r?\n/g,"");const l=c.indexOf(",");if(l===-1||l<=4)throw new TypeError("malformed data: URI");const d=c.substring(5,l).split(";");let y="",b=!1;const R=d[0]||"text/plain";let w=R;for(let F=1;F<d.length;F++)d[F]==="base64"?b=!0:d[F]&&(w+=`;${d[F]}`,d[F].indexOf("charset=")===0&&(y=d[F].substring(8)));!d[0]&&!y.length&&(w+=";charset=US-ASCII",y="US-ASCII");const v=b?"base64":"ascii",I=unescape(c.substring(l+1)),B=Buffer.from(I,v);return B.type=R,B.typeFull=w,B.charset=y,B}u$1(dataUriToBuffer,"dataUriToBuffer");var ponyfill_es2018={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var hasRequiredPonyfill_es2018;function requirePonyfill_es2018(){return hasRequiredPonyfill_es2018||(hasRequiredPonyfill_es2018=1,function(c,l){(function(d,y){y(l);})(_commonjsHelpers.commonjsGlobal,function(d){function y(){}u$1(y,"noop");function b(n){return typeof n=="object"&&n!==null||typeof n=="function"}u$1(b,"typeIsObject");const R=y;function w(n,o){try{Object.defineProperty(n,"name",{value:o,configurable:!0});}catch{}}u$1(w,"setFunctionName");const v=Promise,I=Promise.prototype.then,B=Promise.reject.bind(v);function F(n){return new v(n)}u$1(F,"newPromise");function k(n){return F(o=>o(n))}u$1(k,"promiseResolvedWith");function T(n){return B(n)}u$1(T,"promiseRejectedWith");function $(n,o,a){return I.call(n,o,a)}u$1($,"PerformPromiseThen");function E(n,o,a){$($(n,o,a),void 0,R);}u$1(E,"uponPromise");function K(n,o){E(n,o);}u$1(K,"uponFulfillment");function U(n,o){E(n,void 0,o);}u$1(U,"uponRejection");function N(n,o,a){return $(n,o,a)}u$1(N,"transformPromiseWith");function J(n){$(n,void 0,R);}u$1(J,"setPromiseIsHandledToTrue");let ge=u$1(n=>{if(typeof queueMicrotask=="function")ge=queueMicrotask;else {const o=k(void 0);ge=u$1(a=>$(o,a),"_queueMicrotask");}return ge(n)},"_queueMicrotask");function M(n,o,a){if(typeof n!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(n,o,a)}u$1(M,"reflectCall");function H(n,o,a){try{return k(M(n,o,a))}catch(p){return T(p)}}u$1(H,"promiseCall");const G=16384,Dr=class Dr{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(o){const a=this._back;let p=a;a._elements.length===G-1&&(p={_elements:[],_next:void 0}),a._elements.push(o),p!==a&&(this._back=p,a._next=p),++this._size;}shift(){const o=this._front;let a=o;const p=this._cursor;let g=p+1;const _=o._elements,S=_[p];return g===G&&(a=o._next,g=0),--this._size,this._cursor=g,o!==a&&(this._front=a),_[p]=void 0,S}forEach(o){let a=this._cursor,p=this._front,g=p._elements;for(;(a!==g.length||p._next!==void 0)&&!(a===g.length&&(p=p._next,g=p._elements,a=0,g.length===0));)o(g[a]),++a;}peek(){const o=this._front,a=this._cursor;return o._elements[a]}};u$1(Dr,"SimpleQueue");let Q=Dr;const wt=Symbol("[[AbortSteps]]"),un=Symbol("[[ErrorSteps]]"),er=Symbol("[[CancelSteps]]"),tr=Symbol("[[PullSteps]]"),rr=Symbol("[[ReleaseSteps]]");function ln(n,o){n._ownerReadableStream=o,o._reader=n,o._state==="readable"?or(n):o._state==="closed"?vo(n):fn(n,o._storedError);}u$1(ln,"ReadableStreamReaderGenericInitialize");function nr(n,o){const a=n._ownerReadableStream;return le(a,o)}u$1(nr,"ReadableStreamReaderGenericCancel");function _e(n){const o=n._ownerReadableStream;o._state==="readable"?ir(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):Eo(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),o._readableStreamController[rr](),o._reader=void 0,n._ownerReadableStream=void 0;}u$1(_e,"ReadableStreamReaderGenericRelease");function Rt(n){return new TypeError("Cannot "+n+" a stream using a released reader")}u$1(Rt,"readerLockException");function or(n){n._closedPromise=F((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a;});}u$1(or,"defaultReaderClosedPromiseInitialize");function fn(n,o){or(n),ir(n,o);}u$1(fn,"defaultReaderClosedPromiseInitializeAsRejected");function vo(n){or(n),cn(n);}u$1(vo,"defaultReaderClosedPromiseInitializeAsResolved");function ir(n,o){n._closedPromise_reject!==void 0&&(J(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u$1(ir,"defaultReaderClosedPromiseReject");function Eo(n,o){fn(n,o);}u$1(Eo,"defaultReaderClosedPromiseResetToRejected");function cn(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u$1(cn,"defaultReaderClosedPromiseResolve");const dn=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},Ao=Math.trunc||function(n){return n<0?Math.ceil(n):Math.floor(n)};function Bo(n){return typeof n=="object"||typeof n=="function"}u$1(Bo,"isDictionary");function ce(n,o){if(n!==void 0&&!Bo(n))throw new TypeError(`${o} is not an object.`)}u$1(ce,"assertDictionary");function ee(n,o){if(typeof n!="function")throw new TypeError(`${o} is not a function.`)}u$1(ee,"assertFunction");function qo(n){return typeof n=="object"&&n!==null||typeof n=="function"}u$1(qo,"isObject");function hn(n,o){if(!qo(n))throw new TypeError(`${o} is not an object.`)}u$1(hn,"assertObject");function Se(n,o,a){if(n===void 0)throw new TypeError(`Parameter ${o} is required in '${a}'.`)}u$1(Se,"assertRequiredArgument");function sr(n,o,a){if(n===void 0)throw new TypeError(`${o} is required in '${a}'.`)}u$1(sr,"assertRequiredField");function ar(n){return Number(n)}u$1(ar,"convertUnrestrictedDouble");function pn(n){return n===0?0:n}u$1(pn,"censorNegativeZero");function ko(n){return pn(Ao(n))}u$1(ko,"integerPart");function ur(n,o){const p=Number.MAX_SAFE_INTEGER;let g=Number(n);if(g=pn(g),!dn(g))throw new TypeError(`${o} is not a finite number`);if(g=ko(g),g<0||g>p)throw new TypeError(`${o} is outside the accepted range of 0 to ${p}, inclusive`);return !dn(g)||g===0?0:g}u$1(ur,"convertUnsignedLongLongWithEnforceRange");function lr(n,o){if(!qe(n))throw new TypeError(`${o} is not a ReadableStream.`)}u$1(lr,"assertReadableStream");function Ne(n){return new de(n)}u$1(Ne,"AcquireReadableStreamDefaultReader");function bn(n,o){n._reader._readRequests.push(o);}u$1(bn,"ReadableStreamAddReadRequest");function fr(n,o,a){const g=n._reader._readRequests.shift();a?g._closeSteps():g._chunkSteps(o);}u$1(fr,"ReadableStreamFulfillReadRequest");function Tt(n){return n._reader._readRequests.length}u$1(Tt,"ReadableStreamGetNumReadRequests");function mn(n){const o=n._reader;return !(o===void 0||!ve(o))}u$1(mn,"ReadableStreamHasDefaultReader");const Mr=class Mr{constructor(o){if(Se(o,1,"ReadableStreamDefaultReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");ln(this,o),this._readRequests=new Q;}get closed(){return ve(this)?this._closedPromise:T(Ct("closed"))}cancel(o=void 0){return ve(this)?this._ownerReadableStream===void 0?T(Rt("cancel")):nr(this,o):T(Ct("cancel"))}read(){if(!ve(this))return T(Ct("read"));if(this._ownerReadableStream===void 0)return T(Rt("read from"));let o,a;const p=F((_,S)=>{o=_,a=S;});return it(this,{_chunkSteps:_=>o({value:_,done:!1}),_closeSteps:()=>o({value:void 0,done:!0}),_errorSteps:_=>a(_)}),p}releaseLock(){if(!ve(this))throw Ct("releaseLock");this._ownerReadableStream!==void 0&&Wo(this);}};u$1(Mr,"ReadableStreamDefaultReader");let de=Mr;Object.defineProperties(de.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),w(de.prototype.cancel,"cancel"),w(de.prototype.read,"read"),w(de.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(de.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readRequests")?!1:n instanceof de}u$1(ve,"IsReadableStreamDefaultReader");function it(n,o){const a=n._ownerReadableStream;a._disturbed=!0,a._state==="closed"?o._closeSteps():a._state==="errored"?o._errorSteps(a._storedError):a._readableStreamController[tr](o);}u$1(it,"ReadableStreamDefaultReaderRead");function Wo(n){_e(n);const o=new TypeError("Reader was released");yn(n,o);}u$1(Wo,"ReadableStreamDefaultReaderRelease");function yn(n,o){const a=n._readRequests;n._readRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u$1(yn,"ReadableStreamDefaultReaderErrorReadRequests");function Ct(n){return new TypeError(`ReadableStreamDefaultReader.prototype.${n} can only be used on a ReadableStreamDefaultReader`)}u$1(Ct,"defaultReaderBrandCheckException");const Oo=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),xr=class xr{constructor(o,a){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=o,this._preventCancel=a;}next(){const o=u$1(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?N(this._ongoingPromise,o,o):o(),this._ongoingPromise}return(o){const a=u$1(()=>this._returnSteps(o),"returnSteps");return this._ongoingPromise?N(this._ongoingPromise,a,a):a()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const o=this._reader;let a,p;const g=F((S,C)=>{a=S,p=C;});return it(o,{_chunkSteps:S=>{this._ongoingPromise=void 0,ge(()=>a({value:S,done:!1}));},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(o),a({value:void 0,done:!0});},_errorSteps:S=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(o),p(S);}}),g}_returnSteps(o){if(this._isFinished)return Promise.resolve({value:o,done:!0});this._isFinished=!0;const a=this._reader;if(!this._preventCancel){const p=nr(a,o);return _e(a),N(p,()=>({value:o,done:!0}))}return _e(a),k({value:o,done:!0})}};u$1(xr,"ReadableStreamAsyncIteratorImpl");let Pt=xr;const gn={next(){return _n(this)?this._asyncIteratorImpl.next():T(Sn("next"))},return(n){return _n(this)?this._asyncIteratorImpl.return(n):T(Sn("return"))}};Object.setPrototypeOf(gn,Oo);function zo(n,o){const a=Ne(n),p=new Pt(a,o),g=Object.create(gn);return g._asyncIteratorImpl=p,g}u$1(zo,"AcquireReadableStreamAsyncIterator");function _n(n){if(!b(n)||!Object.prototype.hasOwnProperty.call(n,"_asyncIteratorImpl"))return !1;try{return n._asyncIteratorImpl instanceof Pt}catch{return !1}}u$1(_n,"IsReadableStreamAsyncIterator");function Sn(n){return new TypeError(`ReadableStreamAsyncIterator.${n} can only be used on a ReadableSteamAsyncIterator`)}u$1(Sn,"streamAsyncIteratorBrandCheckException");const wn=Number.isNaN||function(n){return n!==n};var cr,dr,hr;function st(n){return n.slice()}u$1(st,"CreateArrayFromList");function Rn(n,o,a,p,g){new Uint8Array(n).set(new Uint8Array(a,p,g),o);}u$1(Rn,"CopyDataBlockBytes");let we=u$1(n=>(typeof n.transfer=="function"?we=u$1(o=>o.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?we=u$1(o=>structuredClone(o,{transfer:[o]}),"TransferArrayBuffer"):we=u$1(o=>o,"TransferArrayBuffer"),we(n)),"TransferArrayBuffer"),Ee=u$1(n=>(typeof n.detached=="boolean"?Ee=u$1(o=>o.detached,"IsDetachedBuffer"):Ee=u$1(o=>o.byteLength===0,"IsDetachedBuffer"),Ee(n)),"IsDetachedBuffer");function Tn(n,o,a){if(n.slice)return n.slice(o,a);const p=a-o,g=new ArrayBuffer(p);return Rn(g,0,n,o,p),g}u$1(Tn,"ArrayBufferSlice");function vt(n,o){const a=n[o];if(a!=null){if(typeof a!="function")throw new TypeError(`${String(o)} is not a function`);return a}}u$1(vt,"GetMethod");function Fo(n){const o={[Symbol.iterator]:()=>n.iterator},a=async function*(){return yield*o}(),p=a.next;return {iterator:a,nextMethod:p,done:!1}}u$1(Fo,"CreateAsyncFromSyncIterator");const pr=(hr=(cr=Symbol.asyncIterator)!==null&&cr!==void 0?cr:(dr=Symbol.for)===null||dr===void 0?void 0:dr.call(Symbol,"Symbol.asyncIterator"))!==null&&hr!==void 0?hr:"@@asyncIterator";function Cn(n,o="sync",a){if(a===void 0)if(o==="async"){if(a=vt(n,pr),a===void 0){const _=vt(n,Symbol.iterator),S=Cn(n,"sync",_);return Fo(S)}}else a=vt(n,Symbol.iterator);if(a===void 0)throw new TypeError("The object is not iterable");const p=M(a,n,[]);if(!b(p))throw new TypeError("The iterator method must return an object");const g=p.next;return {iterator:p,nextMethod:g,done:!1}}u$1(Cn,"GetIterator");function Io(n){const o=M(n.nextMethod,n.iterator,[]);if(!b(o))throw new TypeError("The iterator.next() method must return an object");return o}u$1(Io,"IteratorNext");function jo(n){return !!n.done}u$1(jo,"IteratorComplete");function Lo(n){return n.value}u$1(Lo,"IteratorValue");function $o(n){return !(typeof n!="number"||wn(n)||n<0)}u$1($o,"IsNonNegativeNumber");function Pn(n){const o=Tn(n.buffer,n.byteOffset,n.byteOffset+n.byteLength);return new Uint8Array(o)}u$1(Pn,"CloneAsUint8Array");function br(n){const o=n._queue.shift();return n._queueTotalSize-=o.size,n._queueTotalSize<0&&(n._queueTotalSize=0),o.value}u$1(br,"DequeueValue");function mr(n,o,a){if(!$o(a)||a===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");n._queue.push({value:o,size:a}),n._queueTotalSize+=a;}u$1(mr,"EnqueueValueWithSize");function Do(n){return n._queue.peek().value}u$1(Do,"PeekQueueValue");function Ae(n){n._queue=new Q,n._queueTotalSize=0;}u$1(Ae,"ResetQueue");function vn(n){return n===DataView}u$1(vn,"isDataViewConstructor");function Mo(n){return vn(n.constructor)}u$1(Mo,"isDataView");function xo(n){return vn(n)?1:n.BYTES_PER_ELEMENT}u$1(xo,"arrayBufferViewElementSize");const Ur=class Ur{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!yr(this))throw Rr("view");return this._view}respond(o){if(!yr(this))throw Rr("respond");if(Se(o,1,"respond"),o=ur(o,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");qt(this._associatedReadableByteStreamController,o);}respondWithNewView(o){if(!yr(this))throw Rr("respondWithNewView");if(Se(o,1,"respondWithNewView"),!ArrayBuffer.isView(o))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(o.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");kt(this._associatedReadableByteStreamController,o);}};u$1(Ur,"ReadableStreamBYOBRequest");let Re=Ur;Object.defineProperties(Re.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),w(Re.prototype.respond,"respond"),w(Re.prototype.respondWithNewView,"respondWithNewView"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Re.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const Nr=class Nr{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!Oe(this))throw ut("byobRequest");return wr(this)}get desiredSize(){if(!Oe(this))throw ut("desiredSize");return In(this)}close(){if(!Oe(this))throw ut("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const o=this._controlledReadableByteStream._state;if(o!=="readable")throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);at(this);}enqueue(o){if(!Oe(this))throw ut("enqueue");if(Se(o,1,"enqueue"),!ArrayBuffer.isView(o))throw new TypeError("chunk must be an array buffer view");if(o.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(o.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const a=this._controlledReadableByteStream._state;if(a!=="readable")throw new TypeError(`The stream (in ${a} state) is not in the readable state and cannot be enqueued to`);Bt(this,o);}error(o=void 0){if(!Oe(this))throw ut("error");te(this,o);}[er](o){En(this),Ae(this);const a=this._cancelAlgorithm(o);return At(this),a}[tr](o){const a=this._controlledReadableByteStream;if(this._queueTotalSize>0){Fn(this,o);return}const p=this._autoAllocateChunkSize;if(p!==void 0){let g;try{g=new ArrayBuffer(p);}catch(S){o._errorSteps(S);return}const _={buffer:g,bufferByteLength:p,byteOffset:0,byteLength:p,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(_);}bn(a,o),ze(this);}[rr](){if(this._pendingPullIntos.length>0){const o=this._pendingPullIntos.peek();o.readerType="none",this._pendingPullIntos=new Q,this._pendingPullIntos.push(o);}}};u$1(Nr,"ReadableByteStreamController");let ie=Nr;Object.defineProperties(ie.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),w(ie.prototype.close,"close"),w(ie.prototype.enqueue,"enqueue"),w(ie.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ie.prototype,Symbol.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function Oe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableByteStream")?!1:n instanceof ie}u$1(Oe,"IsReadableByteStreamController");function yr(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_associatedReadableByteStreamController")?!1:n instanceof Re}u$1(yr,"IsReadableStreamBYOBRequest");function ze(n){if(!Qo(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();E(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,ze(n)),null),p=>(te(n,p),null));}u$1(ze,"ReadableByteStreamControllerCallPullIfNeeded");function En(n){_r(n),n._pendingPullIntos=new Q;}u$1(En,"ReadableByteStreamControllerClearPendingPullIntos");function gr(n,o){let a=!1;n._state==="closed"&&(a=!0);const p=An(o);o.readerType==="default"?fr(n,p,a):Xo(n,p,a);}u$1(gr,"ReadableByteStreamControllerCommitPullIntoDescriptor");function An(n){const o=n.bytesFilled,a=n.elementSize;return new n.viewConstructor(n.buffer,n.byteOffset,o/a)}u$1(An,"ReadableByteStreamControllerConvertPullIntoDescriptor");function Et(n,o,a,p){n._queue.push({buffer:o,byteOffset:a,byteLength:p}),n._queueTotalSize+=p;}u$1(Et,"ReadableByteStreamControllerEnqueueChunkToQueue");function Bn(n,o,a,p){let g;try{g=Tn(o,a,a+p);}catch(_){throw te(n,_),_}Et(n,g,0,p);}u$1(Bn,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function qn(n,o){o.bytesFilled>0&&Bn(n,o.buffer,o.byteOffset,o.bytesFilled),He(n);}u$1(qn,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function kn(n,o){const a=Math.min(n._queueTotalSize,o.byteLength-o.bytesFilled),p=o.bytesFilled+a;let g=a,_=!1;const S=p%o.elementSize,C=p-S;C>=o.minimumFill&&(g=C-o.bytesFilled,_=!0);const q=n._queue;for(;g>0;){const P=q.peek(),W=Math.min(g,P.byteLength),O=o.byteOffset+o.bytesFilled;Rn(o.buffer,O,P.buffer,P.byteOffset,W),P.byteLength===W?q.shift():(P.byteOffset+=W,P.byteLength-=W),n._queueTotalSize-=W,Wn(n,W,o),g-=W;}return _}u$1(kn,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function Wn(n,o,a){a.bytesFilled+=o;}u$1(Wn,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function On(n){n._queueTotalSize===0&&n._closeRequested?(At(n),pt(n._controlledReadableByteStream)):ze(n);}u$1(On,"ReadableByteStreamControllerHandleQueueDrain");function _r(n){n._byobRequest!==null&&(n._byobRequest._associatedReadableByteStreamController=void 0,n._byobRequest._view=null,n._byobRequest=null);}u$1(_r,"ReadableByteStreamControllerInvalidateBYOBRequest");function Sr(n){for(;n._pendingPullIntos.length>0;){if(n._queueTotalSize===0)return;const o=n._pendingPullIntos.peek();kn(n,o)&&(He(n),gr(n._controlledReadableByteStream,o));}}u$1(Sr,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function Uo(n){const o=n._controlledReadableByteStream._reader;for(;o._readRequests.length>0;){if(n._queueTotalSize===0)return;const a=o._readRequests.shift();Fn(n,a);}}u$1(Uo,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function No(n,o,a,p){const g=n._controlledReadableByteStream,_=o.constructor,S=xo(_),{byteOffset:C,byteLength:q}=o,P=a*S;let W;try{W=we(o.buffer);}catch(j){p._errorSteps(j);return}const O={buffer:W,bufferByteLength:W.byteLength,byteOffset:C,byteLength:q,bytesFilled:0,minimumFill:P,elementSize:S,viewConstructor:_,readerType:"byob"};if(n._pendingPullIntos.length>0){n._pendingPullIntos.push(O),$n(g,p);return}if(g._state==="closed"){const j=new _(O.buffer,O.byteOffset,0);p._closeSteps(j);return}if(n._queueTotalSize>0){if(kn(n,O)){const j=An(O);On(n),p._chunkSteps(j);return}if(n._closeRequested){const j=new TypeError("Insufficient bytes to fill elements in the given buffer");te(n,j),p._errorSteps(j);return}}n._pendingPullIntos.push(O),$n(g,p),ze(n);}u$1(No,"ReadableByteStreamControllerPullInto");function Ho(n,o){o.readerType==="none"&&He(n);const a=n._controlledReadableByteStream;if(Tr(a))for(;Dn(a)>0;){const p=He(n);gr(a,p);}}u$1(Ho,"ReadableByteStreamControllerRespondInClosedState");function Vo(n,o,a){if(Wn(n,o,a),a.readerType==="none"){qn(n,a),Sr(n);return}if(a.bytesFilled<a.minimumFill)return;He(n);const p=a.bytesFilled%a.elementSize;if(p>0){const g=a.byteOffset+a.bytesFilled;Bn(n,a.buffer,g-p,p);}a.bytesFilled-=p,gr(n._controlledReadableByteStream,a),Sr(n);}u$1(Vo,"ReadableByteStreamControllerRespondInReadableState");function zn(n,o){const a=n._pendingPullIntos.peek();_r(n),n._controlledReadableByteStream._state==="closed"?Ho(n,a):Vo(n,o,a),ze(n);}u$1(zn,"ReadableByteStreamControllerRespondInternal");function He(n){return n._pendingPullIntos.shift()}u$1(He,"ReadableByteStreamControllerShiftPendingPullInto");function Qo(n){const o=n._controlledReadableByteStream;return o._state!=="readable"||n._closeRequested||!n._started?!1:!!(mn(o)&&Tt(o)>0||Tr(o)&&Dn(o)>0||In(n)>0)}u$1(Qo,"ReadableByteStreamControllerShouldCallPull");function At(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0;}u$1(At,"ReadableByteStreamControllerClearAlgorithms");function at(n){const o=n._controlledReadableByteStream;if(!(n._closeRequested||o._state!=="readable")){if(n._queueTotalSize>0){n._closeRequested=!0;return}if(n._pendingPullIntos.length>0){const a=n._pendingPullIntos.peek();if(a.bytesFilled%a.elementSize!==0){const p=new TypeError("Insufficient bytes to fill elements in the given buffer");throw te(n,p),p}}At(n),pt(o);}}u$1(at,"ReadableByteStreamControllerClose");function Bt(n,o){const a=n._controlledReadableByteStream;if(n._closeRequested||a._state!=="readable")return;const{buffer:p,byteOffset:g,byteLength:_}=o;if(Ee(p))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const S=we(p);if(n._pendingPullIntos.length>0){const C=n._pendingPullIntos.peek();if(Ee(C.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");_r(n),C.buffer=we(C.buffer),C.readerType==="none"&&qn(n,C);}if(mn(a))if(Uo(n),Tt(a)===0)Et(n,S,g,_);else {n._pendingPullIntos.length>0&&He(n);const C=new Uint8Array(S,g,_);fr(a,C,!1);}else Tr(a)?(Et(n,S,g,_),Sr(n)):Et(n,S,g,_);ze(n);}u$1(Bt,"ReadableByteStreamControllerEnqueue");function te(n,o){const a=n._controlledReadableByteStream;a._state==="readable"&&(En(n),Ae(n),At(n),fo(a,o));}u$1(te,"ReadableByteStreamControllerError");function Fn(n,o){const a=n._queue.shift();n._queueTotalSize-=a.byteLength,On(n);const p=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);o._chunkSteps(p);}u$1(Fn,"ReadableByteStreamControllerFillReadRequestFromQueue");function wr(n){if(n._byobRequest===null&&n._pendingPullIntos.length>0){const o=n._pendingPullIntos.peek(),a=new Uint8Array(o.buffer,o.byteOffset+o.bytesFilled,o.byteLength-o.bytesFilled),p=Object.create(Re.prototype);Yo(p,n,a),n._byobRequest=p;}return n._byobRequest}u$1(wr,"ReadableByteStreamControllerGetBYOBRequest");function In(n){const o=n._controlledReadableByteStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u$1(In,"ReadableByteStreamControllerGetDesiredSize");function qt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(o===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(a.bytesFilled+o>a.byteLength)throw new RangeError("bytesWritten out of range")}a.buffer=we(a.buffer),zn(n,o);}u$1(qt,"ReadableByteStreamControllerRespond");function kt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(o.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(a.byteOffset+a.bytesFilled!==o.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.bufferByteLength!==o.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(a.bytesFilled+o.byteLength>a.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const g=o.byteLength;a.buffer=we(o.buffer),zn(n,g);}u$1(kt,"ReadableByteStreamControllerRespondWithNewView");function jn(n,o,a,p,g,_,S){o._controlledReadableByteStream=n,o._pullAgain=!1,o._pulling=!1,o._byobRequest=null,o._queue=o._queueTotalSize=void 0,Ae(o),o._closeRequested=!1,o._started=!1,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,o._autoAllocateChunkSize=S,o._pendingPullIntos=new Q,n._readableStreamController=o;const C=a();E(k(C),()=>(o._started=!0,ze(o),null),q=>(te(o,q),null));}u$1(jn,"SetUpReadableByteStreamController");function Go(n,o,a){const p=Object.create(ie.prototype);let g,_,S;o.start!==void 0?g=u$1(()=>o.start(p),"startAlgorithm"):g=u$1(()=>{},"startAlgorithm"),o.pull!==void 0?_=u$1(()=>o.pull(p),"pullAlgorithm"):_=u$1(()=>k(void 0),"pullAlgorithm"),o.cancel!==void 0?S=u$1(q=>o.cancel(q),"cancelAlgorithm"):S=u$1(()=>k(void 0),"cancelAlgorithm");const C=o.autoAllocateChunkSize;if(C===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");jn(n,p,g,_,S,a,C);}u$1(Go,"SetUpReadableByteStreamControllerFromUnderlyingSource");function Yo(n,o,a){n._associatedReadableByteStreamController=o,n._view=a;}u$1(Yo,"SetUpReadableStreamBYOBRequest");function Rr(n){return new TypeError(`ReadableStreamBYOBRequest.prototype.${n} can only be used on a ReadableStreamBYOBRequest`)}u$1(Rr,"byobRequestBrandCheckException");function ut(n){return new TypeError(`ReadableByteStreamController.prototype.${n} can only be used on a ReadableByteStreamController`)}u$1(ut,"byteStreamControllerBrandCheckException");function Zo(n,o){ce(n,o);const a=n?.mode;return {mode:a===void 0?void 0:Ko(a,`${o} has member 'mode' that`)}}u$1(Zo,"convertReaderOptions");function Ko(n,o){if(n=`${n}`,n!=="byob")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamReaderMode`);return n}u$1(Ko,"convertReadableStreamReaderMode");function Jo(n,o){var a;ce(n,o);const p=(a=n?.min)!==null&&a!==void 0?a:1;return {min:ur(p,`${o} has member 'min' that`)}}u$1(Jo,"convertByobReadOptions");function Ln(n){return new he(n)}u$1(Ln,"AcquireReadableStreamBYOBReader");function $n(n,o){n._reader._readIntoRequests.push(o);}u$1($n,"ReadableStreamAddReadIntoRequest");function Xo(n,o,a){const g=n._reader._readIntoRequests.shift();a?g._closeSteps(o):g._chunkSteps(o);}u$1(Xo,"ReadableStreamFulfillReadIntoRequest");function Dn(n){return n._reader._readIntoRequests.length}u$1(Dn,"ReadableStreamGetNumReadIntoRequests");function Tr(n){const o=n._reader;return !(o===void 0||!Fe(o))}u$1(Tr,"ReadableStreamHasBYOBReader");const Hr=class Hr{constructor(o){if(Se(o,1,"ReadableStreamBYOBReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!Oe(o._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");ln(this,o),this._readIntoRequests=new Q;}get closed(){return Fe(this)?this._closedPromise:T(Wt("closed"))}cancel(o=void 0){return Fe(this)?this._ownerReadableStream===void 0?T(Rt("cancel")):nr(this,o):T(Wt("cancel"))}read(o,a={}){if(!Fe(this))return T(Wt("read"));if(!ArrayBuffer.isView(o))return T(new TypeError("view must be an array buffer view"));if(o.byteLength===0)return T(new TypeError("view must have non-zero byteLength"));if(o.buffer.byteLength===0)return T(new TypeError("view's buffer must have non-zero byteLength"));if(Ee(o.buffer))return T(new TypeError("view's buffer has been detached"));let p;try{p=Jo(a,"options");}catch(P){return T(P)}const g=p.min;if(g===0)return T(new TypeError("options.min must be greater than 0"));if(Mo(o)){if(g>o.byteLength)return T(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(g>o.length)return T(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return T(Rt("read from"));let _,S;const C=F((P,W)=>{_=P,S=W;});return Mn(this,o,g,{_chunkSteps:P=>_({value:P,done:!1}),_closeSteps:P=>_({value:P,done:!0}),_errorSteps:P=>S(P)}),C}releaseLock(){if(!Fe(this))throw Wt("releaseLock");this._ownerReadableStream!==void 0&&ei(this);}};u$1(Hr,"ReadableStreamBYOBReader");let he=Hr;Object.defineProperties(he.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),w(he.prototype.cancel,"cancel"),w(he.prototype.read,"read"),w(he.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(he.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function Fe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readIntoRequests")?!1:n instanceof he}u$1(Fe,"IsReadableStreamBYOBReader");function Mn(n,o,a,p){const g=n._ownerReadableStream;g._disturbed=!0,g._state==="errored"?p._errorSteps(g._storedError):No(g._readableStreamController,o,a,p);}u$1(Mn,"ReadableStreamBYOBReaderRead");function ei(n){_e(n);const o=new TypeError("Reader was released");xn(n,o);}u$1(ei,"ReadableStreamBYOBReaderRelease");function xn(n,o){const a=n._readIntoRequests;n._readIntoRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u$1(xn,"ReadableStreamBYOBReaderErrorReadIntoRequests");function Wt(n){return new TypeError(`ReadableStreamBYOBReader.prototype.${n} can only be used on a ReadableStreamBYOBReader`)}u$1(Wt,"byobReaderBrandCheckException");function lt(n,o){const{highWaterMark:a}=n;if(a===void 0)return o;if(wn(a)||a<0)throw new RangeError("Invalid highWaterMark");return a}u$1(lt,"ExtractHighWaterMark");function Ot(n){const{size:o}=n;return o||(()=>1)}u$1(Ot,"ExtractSizeAlgorithm");function zt(n,o){ce(n,o);const a=n?.highWaterMark,p=n?.size;return {highWaterMark:a===void 0?void 0:ar(a),size:p===void 0?void 0:ti(p,`${o} has member 'size' that`)}}u$1(zt,"convertQueuingStrategy");function ti(n,o){return ee(n,o),a=>ar(n(a))}u$1(ti,"convertQueuingStrategySize");function ri(n,o){ce(n,o);const a=n?.abort,p=n?.close,g=n?.start,_=n?.type,S=n?.write;return {abort:a===void 0?void 0:ni(a,n,`${o} has member 'abort' that`),close:p===void 0?void 0:oi(p,n,`${o} has member 'close' that`),start:g===void 0?void 0:ii(g,n,`${o} has member 'start' that`),write:S===void 0?void 0:si(S,n,`${o} has member 'write' that`),type:_}}u$1(ri,"convertUnderlyingSink");function ni(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$1(ni,"convertUnderlyingSinkAbortCallback");function oi(n,o,a){return ee(n,a),()=>H(n,o,[])}u$1(oi,"convertUnderlyingSinkCloseCallback");function ii(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$1(ii,"convertUnderlyingSinkStartCallback");function si(n,o,a){return ee(n,a),(p,g)=>H(n,o,[p,g])}u$1(si,"convertUnderlyingSinkWriteCallback");function Un(n,o){if(!Ve(n))throw new TypeError(`${o} is not a WritableStream.`)}u$1(Un,"assertWritableStream");function ai(n){if(typeof n!="object"||n===null)return !1;try{return typeof n.aborted=="boolean"}catch{return !1}}u$1(ai,"isAbortSignal");const ui=typeof AbortController=="function";function li(){if(ui)return new AbortController}u$1(li,"createAbortController");const Vr=class Vr{constructor(o={},a={}){o===void 0?o=null:hn(o,"First parameter");const p=zt(a,"Second parameter"),g=ri(o,"First parameter");if(Hn(this),g.type!==void 0)throw new RangeError("Invalid type is specified");const S=Ot(p),C=lt(p,1);Ti(this,g,C,S);}get locked(){if(!Ve(this))throw $t("locked");return Qe(this)}abort(o=void 0){return Ve(this)?Qe(this)?T(new TypeError("Cannot abort a stream that already has a writer")):Ft(this,o):T($t("abort"))}close(){return Ve(this)?Qe(this)?T(new TypeError("Cannot close a stream that already has a writer")):be(this)?T(new TypeError("Cannot close an already-closing stream")):Vn(this):T($t("close"))}getWriter(){if(!Ve(this))throw $t("getWriter");return Nn(this)}};u$1(Vr,"WritableStream");let pe=Vr;Object.defineProperties(pe.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),w(pe.prototype.abort,"abort"),w(pe.prototype.close,"close"),w(pe.prototype.getWriter,"getWriter"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(pe.prototype,Symbol.toStringTag,{value:"WritableStream",configurable:!0});function Nn(n){return new se(n)}u$1(Nn,"AcquireWritableStreamDefaultWriter");function fi(n,o,a,p,g=1,_=()=>1){const S=Object.create(pe.prototype);Hn(S);const C=Object.create(Be.prototype);return Jn(S,C,n,o,a,p,g,_),S}u$1(fi,"CreateWritableStream");function Hn(n){n._state="writable",n._storedError=void 0,n._writer=void 0,n._writableStreamController=void 0,n._writeRequests=new Q,n._inFlightWriteRequest=void 0,n._closeRequest=void 0,n._inFlightCloseRequest=void 0,n._pendingAbortRequest=void 0,n._backpressure=!1;}u$1(Hn,"InitializeWritableStream");function Ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_writableStreamController")?!1:n instanceof pe}u$1(Ve,"IsWritableStream");function Qe(n){return n._writer!==void 0}u$1(Qe,"IsWritableStreamLocked");function Ft(n,o){var a;if(n._state==="closed"||n._state==="errored")return k(void 0);n._writableStreamController._abortReason=o,(a=n._writableStreamController._abortController)===null||a===void 0||a.abort(o);const p=n._state;if(p==="closed"||p==="errored")return k(void 0);if(n._pendingAbortRequest!==void 0)return n._pendingAbortRequest._promise;let g=!1;p==="erroring"&&(g=!0,o=void 0);const _=F((S,C)=>{n._pendingAbortRequest={_promise:void 0,_resolve:S,_reject:C,_reason:o,_wasAlreadyErroring:g};});return n._pendingAbortRequest._promise=_,g||Pr(n,o),_}u$1(Ft,"WritableStreamAbort");function Vn(n){const o=n._state;if(o==="closed"||o==="errored")return T(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));const a=F((g,_)=>{const S={_resolve:g,_reject:_};n._closeRequest=S;}),p=n._writer;return p!==void 0&&n._backpressure&&o==="writable"&&Or(p),Ci(n._writableStreamController),a}u$1(Vn,"WritableStreamClose");function ci(n){return F((a,p)=>{const g={_resolve:a,_reject:p};n._writeRequests.push(g);})}u$1(ci,"WritableStreamAddWriteRequest");function Cr(n,o){if(n._state==="writable"){Pr(n,o);return}vr(n);}u$1(Cr,"WritableStreamDealWithRejection");function Pr(n,o){const a=n._writableStreamController;n._state="erroring",n._storedError=o;const p=n._writer;p!==void 0&&Gn(p,o),!mi(n)&&a._started&&vr(n);}u$1(Pr,"WritableStreamStartErroring");function vr(n){n._state="errored",n._writableStreamController[un]();const o=n._storedError;if(n._writeRequests.forEach(g=>{g._reject(o);}),n._writeRequests=new Q,n._pendingAbortRequest===void 0){It(n);return}const a=n._pendingAbortRequest;if(n._pendingAbortRequest=void 0,a._wasAlreadyErroring){a._reject(o),It(n);return}const p=n._writableStreamController[wt](a._reason);E(p,()=>(a._resolve(),It(n),null),g=>(a._reject(g),It(n),null));}u$1(vr,"WritableStreamFinishErroring");function di(n){n._inFlightWriteRequest._resolve(void 0),n._inFlightWriteRequest=void 0;}u$1(di,"WritableStreamFinishInFlightWrite");function hi(n,o){n._inFlightWriteRequest._reject(o),n._inFlightWriteRequest=void 0,Cr(n,o);}u$1(hi,"WritableStreamFinishInFlightWriteWithError");function pi(n){n._inFlightCloseRequest._resolve(void 0),n._inFlightCloseRequest=void 0,n._state==="erroring"&&(n._storedError=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._resolve(),n._pendingAbortRequest=void 0)),n._state="closed";const a=n._writer;a!==void 0&&ro(a);}u$1(pi,"WritableStreamFinishInFlightClose");function bi(n,o){n._inFlightCloseRequest._reject(o),n._inFlightCloseRequest=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._reject(o),n._pendingAbortRequest=void 0),Cr(n,o);}u$1(bi,"WritableStreamFinishInFlightCloseWithError");function be(n){return !(n._closeRequest===void 0&&n._inFlightCloseRequest===void 0)}u$1(be,"WritableStreamCloseQueuedOrInFlight");function mi(n){return !(n._inFlightWriteRequest===void 0&&n._inFlightCloseRequest===void 0)}u$1(mi,"WritableStreamHasOperationMarkedInFlight");function yi(n){n._inFlightCloseRequest=n._closeRequest,n._closeRequest=void 0;}u$1(yi,"WritableStreamMarkCloseRequestInFlight");function gi(n){n._inFlightWriteRequest=n._writeRequests.shift();}u$1(gi,"WritableStreamMarkFirstWriteRequestInFlight");function It(n){n._closeRequest!==void 0&&(n._closeRequest._reject(n._storedError),n._closeRequest=void 0);const o=n._writer;o!==void 0&&kr(o,n._storedError);}u$1(It,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function Er(n,o){const a=n._writer;a!==void 0&&o!==n._backpressure&&(o?ki(a):Or(a)),n._backpressure=o;}u$1(Er,"WritableStreamUpdateBackpressure");const Qr=class Qr{constructor(o){if(Se(o,1,"WritableStreamDefaultWriter"),Un(o,"First parameter"),Qe(o))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=o,o._writer=this;const a=o._state;if(a==="writable")!be(o)&&o._backpressure?Mt(this):no(this),Dt(this);else if(a==="erroring")Wr(this,o._storedError),Dt(this);else if(a==="closed")no(this),Bi(this);else {const p=o._storedError;Wr(this,p),to(this,p);}}get closed(){return Ie(this)?this._closedPromise:T(je("closed"))}get desiredSize(){if(!Ie(this))throw je("desiredSize");if(this._ownerWritableStream===void 0)throw ct("desiredSize");return Ri(this)}get ready(){return Ie(this)?this._readyPromise:T(je("ready"))}abort(o=void 0){return Ie(this)?this._ownerWritableStream===void 0?T(ct("abort")):_i(this,o):T(je("abort"))}close(){if(!Ie(this))return T(je("close"));const o=this._ownerWritableStream;return o===void 0?T(ct("close")):be(o)?T(new TypeError("Cannot close an already-closing stream")):Qn(this)}releaseLock(){if(!Ie(this))throw je("releaseLock");this._ownerWritableStream!==void 0&&Yn(this);}write(o=void 0){return Ie(this)?this._ownerWritableStream===void 0?T(ct("write to")):Zn(this,o):T(je("write"))}};u$1(Qr,"WritableStreamDefaultWriter");let se=Qr;Object.defineProperties(se.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),w(se.prototype.abort,"abort"),w(se.prototype.close,"close"),w(se.prototype.releaseLock,"releaseLock"),w(se.prototype.write,"write"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(se.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function Ie(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_ownerWritableStream")?!1:n instanceof se}u$1(Ie,"IsWritableStreamDefaultWriter");function _i(n,o){const a=n._ownerWritableStream;return Ft(a,o)}u$1(_i,"WritableStreamDefaultWriterAbort");function Qn(n){const o=n._ownerWritableStream;return Vn(o)}u$1(Qn,"WritableStreamDefaultWriterClose");function Si(n){const o=n._ownerWritableStream,a=o._state;return be(o)||a==="closed"?k(void 0):a==="errored"?T(o._storedError):Qn(n)}u$1(Si,"WritableStreamDefaultWriterCloseWithErrorPropagation");function wi(n,o){n._closedPromiseState==="pending"?kr(n,o):qi(n,o);}u$1(wi,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function Gn(n,o){n._readyPromiseState==="pending"?oo(n,o):Wi(n,o);}u$1(Gn,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function Ri(n){const o=n._ownerWritableStream,a=o._state;return a==="errored"||a==="erroring"?null:a==="closed"?0:Xn(o._writableStreamController)}u$1(Ri,"WritableStreamDefaultWriterGetDesiredSize");function Yn(n){const o=n._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");Gn(n,a),wi(n,a),o._writer=void 0,n._ownerWritableStream=void 0;}u$1(Yn,"WritableStreamDefaultWriterRelease");function Zn(n,o){const a=n._ownerWritableStream,p=a._writableStreamController,g=Pi(p,o);if(a!==n._ownerWritableStream)return T(ct("write to"));const _=a._state;if(_==="errored")return T(a._storedError);if(be(a)||_==="closed")return T(new TypeError("The stream is closing or closed and cannot be written to"));if(_==="erroring")return T(a._storedError);const S=ci(a);return vi(p,o,g),S}u$1(Zn,"WritableStreamDefaultWriterWrite");const Kn={},Gr=class Gr{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!Ar(this))throw qr("abortReason");return this._abortReason}get signal(){if(!Ar(this))throw qr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(o=void 0){if(!Ar(this))throw qr("error");this._controlledWritableStream._state==="writable"&&eo(this,o);}[wt](o){const a=this._abortAlgorithm(o);return jt(this),a}[un](){Ae(this);}};u$1(Gr,"WritableStreamDefaultController");let Be=Gr;Object.defineProperties(Be.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Be.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function Ar(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledWritableStream")?!1:n instanceof Be}u$1(Ar,"IsWritableStreamDefaultController");function Jn(n,o,a,p,g,_,S,C){o._controlledWritableStream=n,n._writableStreamController=o,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._abortReason=void 0,o._abortController=li(),o._started=!1,o._strategySizeAlgorithm=C,o._strategyHWM=S,o._writeAlgorithm=p,o._closeAlgorithm=g,o._abortAlgorithm=_;const q=Br(o);Er(n,q);const P=a(),W=k(P);E(W,()=>(o._started=!0,Lt(o),null),O=>(o._started=!0,Cr(n,O),null));}u$1(Jn,"SetUpWritableStreamDefaultController");function Ti(n,o,a,p){const g=Object.create(Be.prototype);let _,S,C,q;o.start!==void 0?_=u$1(()=>o.start(g),"startAlgorithm"):_=u$1(()=>{},"startAlgorithm"),o.write!==void 0?S=u$1(P=>o.write(P,g),"writeAlgorithm"):S=u$1(()=>k(void 0),"writeAlgorithm"),o.close!==void 0?C=u$1(()=>o.close(),"closeAlgorithm"):C=u$1(()=>k(void 0),"closeAlgorithm"),o.abort!==void 0?q=u$1(P=>o.abort(P),"abortAlgorithm"):q=u$1(()=>k(void 0),"abortAlgorithm"),Jn(n,g,_,S,C,q,a,p);}u$1(Ti,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function jt(n){n._writeAlgorithm=void 0,n._closeAlgorithm=void 0,n._abortAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u$1(jt,"WritableStreamDefaultControllerClearAlgorithms");function Ci(n){mr(n,Kn,0),Lt(n);}u$1(Ci,"WritableStreamDefaultControllerClose");function Pi(n,o){try{return n._strategySizeAlgorithm(o)}catch(a){return ft(n,a),1}}u$1(Pi,"WritableStreamDefaultControllerGetChunkSize");function Xn(n){return n._strategyHWM-n._queueTotalSize}u$1(Xn,"WritableStreamDefaultControllerGetDesiredSize");function vi(n,o,a){try{mr(n,o,a);}catch(g){ft(n,g);return}const p=n._controlledWritableStream;if(!be(p)&&p._state==="writable"){const g=Br(n);Er(p,g);}Lt(n);}u$1(vi,"WritableStreamDefaultControllerWrite");function Lt(n){const o=n._controlledWritableStream;if(!n._started||o._inFlightWriteRequest!==void 0)return;if(o._state==="erroring"){vr(o);return}if(n._queue.length===0)return;const p=Do(n);p===Kn?Ei(n):Ai(n,p);}u$1(Lt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function ft(n,o){n._controlledWritableStream._state==="writable"&&eo(n,o);}u$1(ft,"WritableStreamDefaultControllerErrorIfNeeded");function Ei(n){const o=n._controlledWritableStream;yi(o),br(n);const a=n._closeAlgorithm();jt(n),E(a,()=>(pi(o),null),p=>(bi(o,p),null));}u$1(Ei,"WritableStreamDefaultControllerProcessClose");function Ai(n,o){const a=n._controlledWritableStream;gi(a);const p=n._writeAlgorithm(o);E(p,()=>{di(a);const g=a._state;if(br(n),!be(a)&&g==="writable"){const _=Br(n);Er(a,_);}return Lt(n),null},g=>(a._state==="writable"&&jt(n),hi(a,g),null));}u$1(Ai,"WritableStreamDefaultControllerProcessWrite");function Br(n){return Xn(n)<=0}u$1(Br,"WritableStreamDefaultControllerGetBackpressure");function eo(n,o){const a=n._controlledWritableStream;jt(n),Pr(a,o);}u$1(eo,"WritableStreamDefaultControllerError");function $t(n){return new TypeError(`WritableStream.prototype.${n} can only be used on a WritableStream`)}u$1($t,"streamBrandCheckException$2");function qr(n){return new TypeError(`WritableStreamDefaultController.prototype.${n} can only be used on a WritableStreamDefaultController`)}u$1(qr,"defaultControllerBrandCheckException$2");function je(n){return new TypeError(`WritableStreamDefaultWriter.prototype.${n} can only be used on a WritableStreamDefaultWriter`)}u$1(je,"defaultWriterBrandCheckException");function ct(n){return new TypeError("Cannot "+n+" a stream using a released writer")}u$1(ct,"defaultWriterLockException");function Dt(n){n._closedPromise=F((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a,n._closedPromiseState="pending";});}u$1(Dt,"defaultWriterClosedPromiseInitialize");function to(n,o){Dt(n),kr(n,o);}u$1(to,"defaultWriterClosedPromiseInitializeAsRejected");function Bi(n){Dt(n),ro(n);}u$1(Bi,"defaultWriterClosedPromiseInitializeAsResolved");function kr(n,o){n._closedPromise_reject!==void 0&&(J(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="rejected");}u$1(kr,"defaultWriterClosedPromiseReject");function qi(n,o){to(n,o);}u$1(qi,"defaultWriterClosedPromiseResetToRejected");function ro(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="resolved");}u$1(ro,"defaultWriterClosedPromiseResolve");function Mt(n){n._readyPromise=F((o,a)=>{n._readyPromise_resolve=o,n._readyPromise_reject=a;}),n._readyPromiseState="pending";}u$1(Mt,"defaultWriterReadyPromiseInitialize");function Wr(n,o){Mt(n),oo(n,o);}u$1(Wr,"defaultWriterReadyPromiseInitializeAsRejected");function no(n){Mt(n),Or(n);}u$1(no,"defaultWriterReadyPromiseInitializeAsResolved");function oo(n,o){n._readyPromise_reject!==void 0&&(J(n._readyPromise),n._readyPromise_reject(o),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="rejected");}u$1(oo,"defaultWriterReadyPromiseReject");function ki(n){Mt(n);}u$1(ki,"defaultWriterReadyPromiseReset");function Wi(n,o){Wr(n,o);}u$1(Wi,"defaultWriterReadyPromiseResetToRejected");function Or(n){n._readyPromise_resolve!==void 0&&(n._readyPromise_resolve(void 0),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="fulfilled");}u$1(Or,"defaultWriterReadyPromiseResolve");function Oi(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof _commonjsHelpers.commonjsGlobal<"u")return _commonjsHelpers.commonjsGlobal}u$1(Oi,"getGlobals");const zr=Oi();function zi(n){if(!(typeof n=="function"||typeof n=="object")||n.name!=="DOMException")return !1;try{return new n,!0}catch{return !1}}u$1(zi,"isDOMExceptionConstructor");function Fi(){const n=zr?.DOMException;return zi(n)?n:void 0}u$1(Fi,"getFromGlobal");function Ii(){const n=u$1(function(a,p){this.message=a||"",this.name=p||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return w(n,"DOMException"),n.prototype=Object.create(Error.prototype),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,configurable:!0}),n}u$1(Ii,"createPolyfill");const ji=Fi()||Ii();function io(n,o,a,p,g,_){const S=Ne(n),C=Nn(o);n._disturbed=!0;let q=!1,P=k(void 0);return F((W,O)=>{let j;if(_!==void 0){if(j=u$1(()=>{const A=_.reason!==void 0?_.reason:new ji("Aborted","AbortError"),z=[];p||z.push(()=>o._state==="writable"?Ft(o,A):k(void 0)),g||z.push(()=>n._state==="readable"?le(n,A):k(void 0)),Z(()=>Promise.all(z.map(L=>L())),!0,A);},"abortAlgorithm"),_.aborted){j();return}_.addEventListener("abort",j);}function fe(){return F((A,z)=>{function L(X){X?A():$(et(),L,z);}u$1(L,"next"),L(!1);})}u$1(fe,"pipeLoop");function et(){return q?k(!0):$(C._readyPromise,()=>F((A,z)=>{it(S,{_chunkSteps:L=>{P=$(Zn(C,L),void 0,y),A(!1);},_closeSteps:()=>A(!0),_errorSteps:z});}))}if(u$1(et,"pipeStep"),Te(n,S._closedPromise,A=>(p?re(!0,A):Z(()=>Ft(o,A),!0,A),null)),Te(o,C._closedPromise,A=>(g?re(!0,A):Z(()=>le(n,A),!0,A),null)),Y(n,S._closedPromise,()=>(a?re():Z(()=>Si(C)),null)),be(o)||o._state==="closed"){const A=new TypeError("the destination writable stream closed before all data could be piped to it");g?re(!0,A):Z(()=>le(n,A),!0,A);}J(fe());function We(){const A=P;return $(P,()=>A!==P?We():void 0)}u$1(We,"waitForWritesToFinish");function Te(A,z,L){A._state==="errored"?L(A._storedError):U(z,L);}u$1(Te,"isOrBecomesErrored");function Y(A,z,L){A._state==="closed"?L():K(z,L);}u$1(Y,"isOrBecomesClosed");function Z(A,z,L){if(q)return;q=!0,o._state==="writable"&&!be(o)?K(We(),X):X();function X(){return E(A(),()=>Ce(z,L),tt=>Ce(!0,tt)),null}u$1(X,"doTheRest");}u$1(Z,"shutdownWithAction");function re(A,z){q||(q=!0,o._state==="writable"&&!be(o)?K(We(),()=>Ce(A,z)):Ce(A,z));}u$1(re,"shutdown");function Ce(A,z){return Yn(C),_e(S),_!==void 0&&_.removeEventListener("abort",j),A?O(z):W(void 0),null}u$1(Ce,"finalize");})}u$1(io,"ReadableStreamPipeTo");const Yr=class Yr{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!xt(this))throw Nt("desiredSize");return Fr(this)}close(){if(!xt(this))throw Nt("close");if(!Ye(this))throw new TypeError("The stream is not in a state that permits close");Le(this);}enqueue(o=void 0){if(!xt(this))throw Nt("enqueue");if(!Ye(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ge(this,o)}error(o=void 0){if(!xt(this))throw Nt("error");ue(this,o);}[er](o){Ae(this);const a=this._cancelAlgorithm(o);return Ut(this),a}[tr](o){const a=this._controlledReadableStream;if(this._queue.length>0){const p=br(this);this._closeRequested&&this._queue.length===0?(Ut(this),pt(a)):dt(this),o._chunkSteps(p);}else bn(a,o),dt(this);}[rr](){}};u$1(Yr,"ReadableStreamDefaultController");let ae=Yr;Object.defineProperties(ae.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),w(ae.prototype.close,"close"),w(ae.prototype.enqueue,"enqueue"),w(ae.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function xt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableStream")?!1:n instanceof ae}u$1(xt,"IsReadableStreamDefaultController");function dt(n){if(!so(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();E(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,dt(n)),null),p=>(ue(n,p),null));}u$1(dt,"ReadableStreamDefaultControllerCallPullIfNeeded");function so(n){const o=n._controlledReadableStream;return !Ye(n)||!n._started?!1:!!(ke(o)&&Tt(o)>0||Fr(n)>0)}u$1(so,"ReadableStreamDefaultControllerShouldCallPull");function Ut(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u$1(Ut,"ReadableStreamDefaultControllerClearAlgorithms");function Le(n){if(!Ye(n))return;const o=n._controlledReadableStream;n._closeRequested=!0,n._queue.length===0&&(Ut(n),pt(o));}u$1(Le,"ReadableStreamDefaultControllerClose");function Ge(n,o){if(!Ye(n))return;const a=n._controlledReadableStream;if(ke(a)&&Tt(a)>0)fr(a,o,!1);else {let p;try{p=n._strategySizeAlgorithm(o);}catch(g){throw ue(n,g),g}try{mr(n,o,p);}catch(g){throw ue(n,g),g}}dt(n);}u$1(Ge,"ReadableStreamDefaultControllerEnqueue");function ue(n,o){const a=n._controlledReadableStream;a._state==="readable"&&(Ae(n),Ut(n),fo(a,o));}u$1(ue,"ReadableStreamDefaultControllerError");function Fr(n){const o=n._controlledReadableStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u$1(Fr,"ReadableStreamDefaultControllerGetDesiredSize");function Li(n){return !so(n)}u$1(Li,"ReadableStreamDefaultControllerHasBackpressure");function Ye(n){const o=n._controlledReadableStream._state;return !n._closeRequested&&o==="readable"}u$1(Ye,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function ao(n,o,a,p,g,_,S){o._controlledReadableStream=n,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._started=!1,o._closeRequested=!1,o._pullAgain=!1,o._pulling=!1,o._strategySizeAlgorithm=S,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,n._readableStreamController=o;const C=a();E(k(C),()=>(o._started=!0,dt(o),null),q=>(ue(o,q),null));}u$1(ao,"SetUpReadableStreamDefaultController");function $i(n,o,a,p){const g=Object.create(ae.prototype);let _,S,C;o.start!==void 0?_=u$1(()=>o.start(g),"startAlgorithm"):_=u$1(()=>{},"startAlgorithm"),o.pull!==void 0?S=u$1(()=>o.pull(g),"pullAlgorithm"):S=u$1(()=>k(void 0),"pullAlgorithm"),o.cancel!==void 0?C=u$1(q=>o.cancel(q),"cancelAlgorithm"):C=u$1(()=>k(void 0),"cancelAlgorithm"),ao(n,g,_,S,C,a,p);}u$1($i,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function Nt(n){return new TypeError(`ReadableStreamDefaultController.prototype.${n} can only be used on a ReadableStreamDefaultController`)}u$1(Nt,"defaultControllerBrandCheckException$1");function Di(n,o){return Oe(n._readableStreamController)?xi(n):Mi(n)}u$1(Di,"ReadableStreamTee");function Mi(n,o){const a=Ne(n);let p=!1,g=!1,_=!1,S=!1,C,q,P,W,O;const j=F(Y=>{O=Y;});function fe(){return p?(g=!0,k(void 0)):(p=!0,it(a,{_chunkSteps:Z=>{ge(()=>{g=!1;const re=Z,Ce=Z;_||Ge(P._readableStreamController,re),S||Ge(W._readableStreamController,Ce),p=!1,g&&fe();});},_closeSteps:()=>{p=!1,_||Le(P._readableStreamController),S||Le(W._readableStreamController),(!_||!S)&&O(void 0);},_errorSteps:()=>{p=!1;}}),k(void 0))}u$1(fe,"pullAlgorithm");function et(Y){if(_=!0,C=Y,S){const Z=st([C,q]),re=le(n,Z);O(re);}return j}u$1(et,"cancel1Algorithm");function We(Y){if(S=!0,q=Y,_){const Z=st([C,q]),re=le(n,Z);O(re);}return j}u$1(We,"cancel2Algorithm");function Te(){}return u$1(Te,"startAlgorithm"),P=ht(Te,fe,et),W=ht(Te,fe,We),U(a._closedPromise,Y=>(ue(P._readableStreamController,Y),ue(W._readableStreamController,Y),(!_||!S)&&O(void 0),null)),[P,W]}u$1(Mi,"ReadableStreamDefaultTee");function xi(n){let o=Ne(n),a=!1,p=!1,g=!1,_=!1,S=!1,C,q,P,W,O;const j=F(A=>{O=A;});function fe(A){U(A._closedPromise,z=>(A!==o||(te(P._readableStreamController,z),te(W._readableStreamController,z),(!_||!S)&&O(void 0)),null));}u$1(fe,"forwardReaderError");function et(){Fe(o)&&(_e(o),o=Ne(n),fe(o)),it(o,{_chunkSteps:z=>{ge(()=>{p=!1,g=!1;const L=z;let X=z;if(!_&&!S)try{X=Pn(z);}catch(tt){te(P._readableStreamController,tt),te(W._readableStreamController,tt),O(le(n,tt));return}_||Bt(P._readableStreamController,L),S||Bt(W._readableStreamController,X),a=!1,p?Te():g&&Y();});},_closeSteps:()=>{a=!1,_||at(P._readableStreamController),S||at(W._readableStreamController),P._readableStreamController._pendingPullIntos.length>0&&qt(P._readableStreamController,0),W._readableStreamController._pendingPullIntos.length>0&&qt(W._readableStreamController,0),(!_||!S)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u$1(et,"pullWithDefaultReader");function We(A,z){ve(o)&&(_e(o),o=Ln(n),fe(o));const L=z?W:P,X=z?P:W;Mn(o,A,1,{_chunkSteps:rt=>{ge(()=>{p=!1,g=!1;const nt=z?S:_;if(z?_:S)nt||kt(L._readableStreamController,rt);else {let Co;try{Co=Pn(rt);}catch(tn){te(L._readableStreamController,tn),te(X._readableStreamController,tn),O(le(n,tn));return}nt||kt(L._readableStreamController,rt),Bt(X._readableStreamController,Co);}a=!1,p?Te():g&&Y();});},_closeSteps:rt=>{a=!1;const nt=z?S:_,Yt=z?_:S;nt||at(L._readableStreamController),Yt||at(X._readableStreamController),rt!==void 0&&(nt||kt(L._readableStreamController,rt),!Yt&&X._readableStreamController._pendingPullIntos.length>0&&qt(X._readableStreamController,0)),(!nt||!Yt)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u$1(We,"pullWithBYOBReader");function Te(){if(a)return p=!0,k(void 0);a=!0;const A=wr(P._readableStreamController);return A===null?et():We(A._view,!1),k(void 0)}u$1(Te,"pull1Algorithm");function Y(){if(a)return g=!0,k(void 0);a=!0;const A=wr(W._readableStreamController);return A===null?et():We(A._view,!0),k(void 0)}u$1(Y,"pull2Algorithm");function Z(A){if(_=!0,C=A,S){const z=st([C,q]),L=le(n,z);O(L);}return j}u$1(Z,"cancel1Algorithm");function re(A){if(S=!0,q=A,_){const z=st([C,q]),L=le(n,z);O(L);}return j}u$1(re,"cancel2Algorithm");function Ce(){}return u$1(Ce,"startAlgorithm"),P=lo(Ce,Te,Z),W=lo(Ce,Y,re),fe(o),[P,W]}u$1(xi,"ReadableByteStreamTee");function Ui(n){return b(n)&&typeof n.getReader<"u"}u$1(Ui,"isReadableStreamLike");function Ni(n){return Ui(n)?Vi(n.getReader()):Hi(n)}u$1(Ni,"ReadableStreamFrom");function Hi(n){let o;const a=Cn(n,"async"),p=y;function g(){let S;try{S=Io(a);}catch(q){return T(q)}const C=k(S);return N(C,q=>{if(!b(q))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(jo(q))Le(o._readableStreamController);else {const W=Lo(q);Ge(o._readableStreamController,W);}})}u$1(g,"pullAlgorithm");function _(S){const C=a.iterator;let q;try{q=vt(C,"return");}catch(O){return T(O)}if(q===void 0)return k(void 0);let P;try{P=M(q,C,[S]);}catch(O){return T(O)}const W=k(P);return N(W,O=>{if(!b(O))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return u$1(_,"cancelAlgorithm"),o=ht(p,g,_,0),o}u$1(Hi,"ReadableStreamFromIterable");function Vi(n){let o;const a=y;function p(){let _;try{_=n.read();}catch(S){return T(S)}return N(_,S=>{if(!b(S))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(S.done)Le(o._readableStreamController);else {const C=S.value;Ge(o._readableStreamController,C);}})}u$1(p,"pullAlgorithm");function g(_){try{return k(n.cancel(_))}catch(S){return T(S)}}return u$1(g,"cancelAlgorithm"),o=ht(a,p,g,0),o}u$1(Vi,"ReadableStreamFromDefaultReader");function Qi(n,o){ce(n,o);const a=n,p=a?.autoAllocateChunkSize,g=a?.cancel,_=a?.pull,S=a?.start,C=a?.type;return {autoAllocateChunkSize:p===void 0?void 0:ur(p,`${o} has member 'autoAllocateChunkSize' that`),cancel:g===void 0?void 0:Gi(g,a,`${o} has member 'cancel' that`),pull:_===void 0?void 0:Yi(_,a,`${o} has member 'pull' that`),start:S===void 0?void 0:Zi(S,a,`${o} has member 'start' that`),type:C===void 0?void 0:Ki(C,`${o} has member 'type' that`)}}u$1(Qi,"convertUnderlyingDefaultOrByteSource");function Gi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$1(Gi,"convertUnderlyingSourceCancelCallback");function Yi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$1(Yi,"convertUnderlyingSourcePullCallback");function Zi(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$1(Zi,"convertUnderlyingSourceStartCallback");function Ki(n,o){if(n=`${n}`,n!=="bytes")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamType`);return n}u$1(Ki,"convertReadableStreamType");function Ji(n,o){return ce(n,o),{preventCancel:!!n?.preventCancel}}u$1(Ji,"convertIteratorOptions");function uo(n,o){ce(n,o);const a=n?.preventAbort,p=n?.preventCancel,g=n?.preventClose,_=n?.signal;return _!==void 0&&Xi(_,`${o} has member 'signal' that`),{preventAbort:!!a,preventCancel:!!p,preventClose:!!g,signal:_}}u$1(uo,"convertPipeOptions");function Xi(n,o){if(!ai(n))throw new TypeError(`${o} is not an AbortSignal.`)}u$1(Xi,"assertAbortSignal");function es(n,o){ce(n,o);const a=n?.readable;sr(a,"readable","ReadableWritablePair"),lr(a,`${o} has member 'readable' that`);const p=n?.writable;return sr(p,"writable","ReadableWritablePair"),Un(p,`${o} has member 'writable' that`),{readable:a,writable:p}}u$1(es,"convertReadableWritablePair");const Zr=class Zr{constructor(o={},a={}){o===void 0?o=null:hn(o,"First parameter");const p=zt(a,"Second parameter"),g=Qi(o,"First parameter");if(Ir(this),g.type==="bytes"){if(p.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const _=lt(p,0);Go(this,g,_);}else {const _=Ot(p),S=lt(p,1);$i(this,g,S,_);}}get locked(){if(!qe(this))throw $e("locked");return ke(this)}cancel(o=void 0){return qe(this)?ke(this)?T(new TypeError("Cannot cancel a stream that already has a reader")):le(this,o):T($e("cancel"))}getReader(o=void 0){if(!qe(this))throw $e("getReader");return Zo(o,"First parameter").mode===void 0?Ne(this):Ln(this)}pipeThrough(o,a={}){if(!qe(this))throw $e("pipeThrough");Se(o,1,"pipeThrough");const p=es(o,"First parameter"),g=uo(a,"Second parameter");if(ke(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Qe(p.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const _=io(this,p.writable,g.preventClose,g.preventAbort,g.preventCancel,g.signal);return J(_),p.readable}pipeTo(o,a={}){if(!qe(this))return T($e("pipeTo"));if(o===void 0)return T("Parameter 1 is required in 'pipeTo'.");if(!Ve(o))return T(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let p;try{p=uo(a,"Second parameter");}catch(g){return T(g)}return ke(this)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Qe(o)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):io(this,o,p.preventClose,p.preventAbort,p.preventCancel,p.signal)}tee(){if(!qe(this))throw $e("tee");const o=Di(this);return st(o)}values(o=void 0){if(!qe(this))throw $e("values");const a=Ji(o,"First parameter");return zo(this,a.preventCancel)}[pr](o){return this.values(o)}static from(o){return Ni(o)}};u$1(Zr,"ReadableStream");let V=Zr;Object.defineProperties(V,{from:{enumerable:!0}}),Object.defineProperties(V.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),w(V.from,"from"),w(V.prototype.cancel,"cancel"),w(V.prototype.getReader,"getReader"),w(V.prototype.pipeThrough,"pipeThrough"),w(V.prototype.pipeTo,"pipeTo"),w(V.prototype.tee,"tee"),w(V.prototype.values,"values"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(V.prototype,Symbol.toStringTag,{value:"ReadableStream",configurable:!0}),Object.defineProperty(V.prototype,pr,{value:V.prototype.values,writable:!0,configurable:!0});function ht(n,o,a,p=1,g=()=>1){const _=Object.create(V.prototype);Ir(_);const S=Object.create(ae.prototype);return ao(_,S,n,o,a,p,g),_}u$1(ht,"CreateReadableStream");function lo(n,o,a){const p=Object.create(V.prototype);Ir(p);const g=Object.create(ie.prototype);return jn(p,g,n,o,a,0,void 0),p}u$1(lo,"CreateReadableByteStream");function Ir(n){n._state="readable",n._reader=void 0,n._storedError=void 0,n._disturbed=!1;}u$1(Ir,"InitializeReadableStream");function qe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readableStreamController")?!1:n instanceof V}u$1(qe,"IsReadableStream");function ke(n){return n._reader!==void 0}u$1(ke,"IsReadableStreamLocked");function le(n,o){if(n._disturbed=!0,n._state==="closed")return k(void 0);if(n._state==="errored")return T(n._storedError);pt(n);const a=n._reader;if(a!==void 0&&Fe(a)){const g=a._readIntoRequests;a._readIntoRequests=new Q,g.forEach(_=>{_._closeSteps(void 0);});}const p=n._readableStreamController[er](o);return N(p,y)}u$1(le,"ReadableStreamCancel");function pt(n){n._state="closed";const o=n._reader;if(o!==void 0&&(cn(o),ve(o))){const a=o._readRequests;o._readRequests=new Q,a.forEach(p=>{p._closeSteps();});}}u$1(pt,"ReadableStreamClose");function fo(n,o){n._state="errored",n._storedError=o;const a=n._reader;a!==void 0&&(ir(a,o),ve(a)?yn(a,o):xn(a,o));}u$1(fo,"ReadableStreamError");function $e(n){return new TypeError(`ReadableStream.prototype.${n} can only be used on a ReadableStream`)}u$1($e,"streamBrandCheckException$1");function co(n,o){ce(n,o);const a=n?.highWaterMark;return sr(a,"highWaterMark","QueuingStrategyInit"),{highWaterMark:ar(a)}}u$1(co,"convertQueuingStrategyInit");const ho=u$1(n=>n.byteLength,"byteLengthSizeFunction");w(ho,"size");const Kr=class Kr{constructor(o){Se(o,1,"ByteLengthQueuingStrategy"),o=co(o,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!bo(this))throw po("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!bo(this))throw po("size");return ho}};u$1(Kr,"ByteLengthQueuingStrategy");let Ze=Kr;Object.defineProperties(Ze.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ze.prototype,Symbol.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function po(n){return new TypeError(`ByteLengthQueuingStrategy.prototype.${n} can only be used on a ByteLengthQueuingStrategy`)}u$1(po,"byteLengthBrandCheckException");function bo(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_byteLengthQueuingStrategyHighWaterMark")?!1:n instanceof Ze}u$1(bo,"IsByteLengthQueuingStrategy");const mo=u$1(()=>1,"countSizeFunction");w(mo,"size");const Jr=class Jr{constructor(o){Se(o,1,"CountQueuingStrategy"),o=co(o,"First parameter"),this._countQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!go(this))throw yo("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!go(this))throw yo("size");return mo}};u$1(Jr,"CountQueuingStrategy");let Ke=Jr;Object.defineProperties(Ke.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ke.prototype,Symbol.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function yo(n){return new TypeError(`CountQueuingStrategy.prototype.${n} can only be used on a CountQueuingStrategy`)}u$1(yo,"countBrandCheckException");function go(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_countQueuingStrategyHighWaterMark")?!1:n instanceof Ke}u$1(go,"IsCountQueuingStrategy");function ts(n,o){ce(n,o);const a=n?.cancel,p=n?.flush,g=n?.readableType,_=n?.start,S=n?.transform,C=n?.writableType;return {cancel:a===void 0?void 0:is(a,n,`${o} has member 'cancel' that`),flush:p===void 0?void 0:rs(p,n,`${o} has member 'flush' that`),readableType:g,start:_===void 0?void 0:ns(_,n,`${o} has member 'start' that`),transform:S===void 0?void 0:os(S,n,`${o} has member 'transform' that`),writableType:C}}u$1(ts,"convertTransformer");function rs(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$1(rs,"convertTransformerFlushCallback");function ns(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$1(ns,"convertTransformerStartCallback");function os(n,o,a){return ee(n,a),(p,g)=>H(n,o,[p,g])}u$1(os,"convertTransformerTransformCallback");function is(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$1(is,"convertTransformerCancelCallback");const Xr=class Xr{constructor(o={},a={},p={}){o===void 0&&(o=null);const g=zt(a,"Second parameter"),_=zt(p,"Third parameter"),S=ts(o,"First parameter");if(S.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(S.writableType!==void 0)throw new RangeError("Invalid writableType specified");const C=lt(_,0),q=Ot(_),P=lt(g,1),W=Ot(g);let O;const j=F(fe=>{O=fe;});ss(this,j,P,W,C,q),us(this,S),S.start!==void 0?O(S.start(this._transformStreamController)):O(void 0);}get readable(){if(!_o(this))throw To("readable");return this._readable}get writable(){if(!_o(this))throw To("writable");return this._writable}};u$1(Xr,"TransformStream");let Je=Xr;Object.defineProperties(Je.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Je.prototype,Symbol.toStringTag,{value:"TransformStream",configurable:!0});function ss(n,o,a,p,g,_){function S(){return o}u$1(S,"startAlgorithm");function C(j){return cs(n,j)}u$1(C,"writeAlgorithm");function q(j){return ds(n,j)}u$1(q,"abortAlgorithm");function P(){return hs(n)}u$1(P,"closeAlgorithm"),n._writable=fi(S,C,P,q,a,p);function W(){return ps(n)}u$1(W,"pullAlgorithm");function O(j){return bs(n,j)}u$1(O,"cancelAlgorithm"),n._readable=ht(S,W,O,g,_),n._backpressure=void 0,n._backpressureChangePromise=void 0,n._backpressureChangePromise_resolve=void 0,Ht(n,!0),n._transformStreamController=void 0;}u$1(ss,"InitializeTransformStream");function _o(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_transformStreamController")?!1:n instanceof Je}u$1(_o,"IsTransformStream");function So(n,o){ue(n._readable._readableStreamController,o),jr(n,o);}u$1(So,"TransformStreamError");function jr(n,o){Qt(n._transformStreamController),ft(n._writable._writableStreamController,o),Lr(n);}u$1(jr,"TransformStreamErrorWritableAndUnblockWrite");function Lr(n){n._backpressure&&Ht(n,!1);}u$1(Lr,"TransformStreamUnblockWrite");function Ht(n,o){n._backpressureChangePromise!==void 0&&n._backpressureChangePromise_resolve(),n._backpressureChangePromise=F(a=>{n._backpressureChangePromise_resolve=a;}),n._backpressure=o;}u$1(Ht,"TransformStreamSetBackpressure");const en=class en{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Vt(this))throw Gt("desiredSize");const o=this._controlledTransformStream._readable._readableStreamController;return Fr(o)}enqueue(o=void 0){if(!Vt(this))throw Gt("enqueue");wo(this,o);}error(o=void 0){if(!Vt(this))throw Gt("error");ls(this,o);}terminate(){if(!Vt(this))throw Gt("terminate");fs(this);}};u$1(en,"TransformStreamDefaultController");let me=en;Object.defineProperties(me.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),w(me.prototype.enqueue,"enqueue"),w(me.prototype.error,"error"),w(me.prototype.terminate,"terminate"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(me.prototype,Symbol.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function Vt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledTransformStream")?!1:n instanceof me}u$1(Vt,"IsTransformStreamDefaultController");function as(n,o,a,p,g){o._controlledTransformStream=n,n._transformStreamController=o,o._transformAlgorithm=a,o._flushAlgorithm=p,o._cancelAlgorithm=g,o._finishPromise=void 0,o._finishPromise_resolve=void 0,o._finishPromise_reject=void 0;}u$1(as,"SetUpTransformStreamDefaultController");function us(n,o){const a=Object.create(me.prototype);let p,g,_;o.transform!==void 0?p=u$1(S=>o.transform(S,a),"transformAlgorithm"):p=u$1(S=>{try{return wo(a,S),k(void 0)}catch(C){return T(C)}},"transformAlgorithm"),o.flush!==void 0?g=u$1(()=>o.flush(a),"flushAlgorithm"):g=u$1(()=>k(void 0),"flushAlgorithm"),o.cancel!==void 0?_=u$1(S=>o.cancel(S),"cancelAlgorithm"):_=u$1(()=>k(void 0),"cancelAlgorithm"),as(n,a,p,g,_);}u$1(us,"SetUpTransformStreamDefaultControllerFromTransformer");function Qt(n){n._transformAlgorithm=void 0,n._flushAlgorithm=void 0,n._cancelAlgorithm=void 0;}u$1(Qt,"TransformStreamDefaultControllerClearAlgorithms");function wo(n,o){const a=n._controlledTransformStream,p=a._readable._readableStreamController;if(!Ye(p))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ge(p,o);}catch(_){throw jr(a,_),a._readable._storedError}Li(p)!==a._backpressure&&Ht(a,!0);}u$1(wo,"TransformStreamDefaultControllerEnqueue");function ls(n,o){So(n._controlledTransformStream,o);}u$1(ls,"TransformStreamDefaultControllerError");function Ro(n,o){const a=n._transformAlgorithm(o);return N(a,void 0,p=>{throw So(n._controlledTransformStream,p),p})}u$1(Ro,"TransformStreamDefaultControllerPerformTransform");function fs(n){const o=n._controlledTransformStream,a=o._readable._readableStreamController;Le(a);const p=new TypeError("TransformStream terminated");jr(o,p);}u$1(fs,"TransformStreamDefaultControllerTerminate");function cs(n,o){const a=n._transformStreamController;if(n._backpressure){const p=n._backpressureChangePromise;return N(p,()=>{const g=n._writable;if(g._state==="erroring")throw g._storedError;return Ro(a,o)})}return Ro(a,o)}u$1(cs,"TransformStreamDefaultSinkWriteAlgorithm");function ds(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._readable;a._finishPromise=F((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return Qt(a),E(g,()=>(p._state==="errored"?Xe(a,p._storedError):(ue(p._readableStreamController,o),$r(a)),null),_=>(ue(p._readableStreamController,_),Xe(a,_),null)),a._finishPromise}u$1(ds,"TransformStreamDefaultSinkAbortAlgorithm");function hs(n){const o=n._transformStreamController;if(o._finishPromise!==void 0)return o._finishPromise;const a=n._readable;o._finishPromise=F((g,_)=>{o._finishPromise_resolve=g,o._finishPromise_reject=_;});const p=o._flushAlgorithm();return Qt(o),E(p,()=>(a._state==="errored"?Xe(o,a._storedError):(Le(a._readableStreamController),$r(o)),null),g=>(ue(a._readableStreamController,g),Xe(o,g),null)),o._finishPromise}u$1(hs,"TransformStreamDefaultSinkCloseAlgorithm");function ps(n){return Ht(n,!1),n._backpressureChangePromise}u$1(ps,"TransformStreamDefaultSourcePullAlgorithm");function bs(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._writable;a._finishPromise=F((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return Qt(a),E(g,()=>(p._state==="errored"?Xe(a,p._storedError):(ft(p._writableStreamController,o),Lr(n),$r(a)),null),_=>(ft(p._writableStreamController,_),Lr(n),Xe(a,_),null)),a._finishPromise}u$1(bs,"TransformStreamDefaultSourceCancelAlgorithm");function Gt(n){return new TypeError(`TransformStreamDefaultController.prototype.${n} can only be used on a TransformStreamDefaultController`)}u$1(Gt,"defaultControllerBrandCheckException");function $r(n){n._finishPromise_resolve!==void 0&&(n._finishPromise_resolve(),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u$1($r,"defaultControllerFinishPromiseResolve");function Xe(n,o){n._finishPromise_reject!==void 0&&(J(n._finishPromise),n._finishPromise_reject(o),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u$1(Xe,"defaultControllerFinishPromiseReject");function To(n){return new TypeError(`TransformStream.prototype.${n} can only be used on a TransformStream`)}u$1(To,"streamBrandCheckException"),d.ByteLengthQueuingStrategy=Ze,d.CountQueuingStrategy=Ke,d.ReadableByteStreamController=ie,d.ReadableStream=V,d.ReadableStreamBYOBReader=he,d.ReadableStreamBYOBRequest=Re,d.ReadableStreamDefaultController=ae,d.ReadableStreamDefaultReader=de,d.TransformStream=Je,d.TransformStreamDefaultController=me,d.WritableStream=pe,d.WritableStreamDefaultController=Be,d.WritableStreamDefaultWriter=se;});}(ponyfill_es2018,ponyfill_es2018.exports)),ponyfill_es2018.exports}u$1(requirePonyfill_es2018,"requirePonyfill_es2018");const POOL_SIZE$1=65536;if(!globalThis.ReadableStream)try{const c=require("node:process"),{emitWarning:l}=c;try{c.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),c.emitWarning=l;}catch(d){throw c.emitWarning=l,d}}catch{Object.assign(globalThis,requirePonyfill_es2018());}try{const{Blob:c}=require("buffer");c&&!c.prototype.stream&&(c.prototype.stream=u$1(function(d){let y=0;const b=this;return new ReadableStream({type:"bytes",async pull(R){const v=await b.slice(y,Math.min(b.size,y+POOL_SIZE$1)).arrayBuffer();y+=v.byteLength,R.enqueue(new Uint8Array(v)),y===b.size&&R.close();}})},"name"));}catch{}/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const POOL_SIZE=65536;async function*toIterator(c,l=!0){for(const d of c)if("stream"in d)yield*d.stream();else if(ArrayBuffer.isView(d))if(l){let y=d.byteOffset;const b=d.byteOffset+d.byteLength;for(;y!==b;){const R=Math.min(b-y,POOL_SIZE),w=d.buffer.slice(y,y+R);y+=w.byteLength,yield new Uint8Array(w);}}else yield d;else {let y=0,b=d;for(;y!==b.size;){const w=await b.slice(y,Math.min(b.size,y+POOL_SIZE)).arrayBuffer();y+=w.byteLength,yield new Uint8Array(w);}}}u$1(toIterator,"toIterator");const _Blob=(Ue=class{constructor(l=[],d={}){ye$1(this,Pe,[]);ye$1(this,bt$1,"");ye$1(this,ot,0);ye$1(this,Zt$1,"transparent");if(typeof l!="object"||l===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof l[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof d!="object"&&typeof d!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");d===null&&(d={});const y=new TextEncoder;for(const R of l){let w;ArrayBuffer.isView(R)?w=new Uint8Array(R.buffer.slice(R.byteOffset,R.byteOffset+R.byteLength)):R instanceof ArrayBuffer?w=new Uint8Array(R.slice(0)):R instanceof Ue?w=R:w=y.encode(`${R}`),ne(this,ot,D(this,ot)+(ArrayBuffer.isView(w)?w.byteLength:w.size)),D(this,Pe).push(w);}ne(this,Zt$1,`${d.endings===void 0?"transparent":d.endings}`);const b=d.type===void 0?"":String(d.type);ne(this,bt$1,/^[\x20-\x7E]*$/.test(b)?b:"");}get size(){return D(this,ot)}get type(){return D(this,bt$1)}async text(){const l=new TextDecoder;let d="";for await(const y of toIterator(D(this,Pe),!1))d+=l.decode(y,{stream:!0});return d+=l.decode(),d}async arrayBuffer(){const l=new Uint8Array(this.size);let d=0;for await(const y of toIterator(D(this,Pe),!1))l.set(y,d),d+=y.length;return l.buffer}stream(){const l=toIterator(D(this,Pe),!0);return new globalThis.ReadableStream({type:"bytes",async pull(d){const y=await l.next();y.done?d.close():d.enqueue(y.value);},async cancel(){await l.return();}})}slice(l=0,d=this.size,y=""){const{size:b}=this;let R=l<0?Math.max(b+l,0):Math.min(l,b),w=d<0?Math.max(b+d,0):Math.min(d,b);const v=Math.max(w-R,0),I=D(this,Pe),B=[];let F=0;for(const T of I){if(F>=v)break;const $=ArrayBuffer.isView(T)?T.byteLength:T.size;if(R&&$<=R)R-=$,w-=$;else {let E;ArrayBuffer.isView(T)?(E=T.subarray(R,Math.min($,w)),F+=E.byteLength):(E=T.slice(R,Math.min($,w)),F+=E.size),w-=$,B.push(E),R=0;}}const k=new Ue([],{type:String(y).toLowerCase()});return ne(k,ot,v),ne(k,Pe,B),k}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](l){return l&&typeof l=="object"&&typeof l.constructor=="function"&&(typeof l.stream=="function"||typeof l.arrayBuffer=="function")&&/^(Blob|File)$/.test(l[Symbol.toStringTag])}},Pe=new WeakMap,bt$1=new WeakMap,ot=new WeakMap,Zt$1=new WeakMap,u$1(Ue,"Blob"),Ue);Object.defineProperties(_Blob.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const Blob=_Blob,r$1=Blob,_File=(gt$1=class extends r$1{constructor(d,y,b={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(d,b);ye$1(this,mt,0);ye$1(this,yt$1,"");b===null&&(b={});const R=b.lastModified===void 0?Date.now():Number(b.lastModified);Number.isNaN(R)||ne(this,mt,R),ne(this,yt$1,String(y));}get name(){return D(this,yt$1)}get lastModified(){return D(this,mt)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](d){return !!d&&d instanceof r$1&&/^(File)$/.test(d[Symbol.toStringTag])}},mt=new WeakMap,yt$1=new WeakMap,u$1(gt$1,"File"),gt$1),File=_File,File$1=File;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:t$1,iterator:i$2,hasInstance:h$1}=Symbol,r=Math.random,m$4="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),f$2=u$1((c,l,d)=>(c+="",/^(Blob|File)$/.test(l&&l[t$1])?[(d=d!==void 0?d+"":l[t$1]=="File"?l.name:"blob",c),l.name!==d||l[t$1]=="blob"?new File$1([l],d,l):l]:[c,l+""]),"f"),e$1=u$1((c,l)=>(l?c:c.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),x$1=u$1((c,l,d)=>{if(l.length<d)throw new TypeError(`Failed to execute '${c}' on 'FormData': ${d} arguments required, but only ${l.length} present.`)},"x");const FormData$1=(_t$1=class{constructor(...l){ye$1(this,oe$1,[]);if(l.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[t$1](){return "FormData"}[i$2](){return this.entries()}static[h$1](l){return l&&typeof l=="object"&&l[t$1]==="FormData"&&!m$4.some(d=>typeof l[d]!="function")}append(...l){x$1("append",arguments,2),D(this,oe$1).push(f$2(...l));}delete(l){x$1("delete",arguments,1),l+="",ne(this,oe$1,D(this,oe$1).filter(([d])=>d!==l));}get(l){x$1("get",arguments,1),l+="";for(var d=D(this,oe$1),y=d.length,b=0;b<y;b++)if(d[b][0]===l)return d[b][1];return null}getAll(l,d){return x$1("getAll",arguments,1),d=[],l+="",D(this,oe$1).forEach(y=>y[0]===l&&d.push(y[1])),d}has(l){return x$1("has",arguments,1),l+="",D(this,oe$1).some(d=>d[0]===l)}forEach(l,d){x$1("forEach",arguments,1);for(var[y,b]of this)l.call(d,b,y,this);}set(...l){x$1("set",arguments,2);var d=[],y=!0;l=f$2(...l),D(this,oe$1).forEach(b=>{b[0]===l[0]?y&&(y=!d.push(l)):d.push(b);}),y&&d.push(l),ne(this,oe$1,d);}*entries(){yield*D(this,oe$1);}*keys(){for(var[l]of this)yield l;}*values(){for(var[,l]of this)yield l;}},oe$1=new WeakMap,u$1(_t$1,"FormData"),_t$1);function formDataToBlob(c,l=r$1){var d=`${r()}${r()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),y=[],b=`--${d}\r
Content-Disposition: form-data; name="`;return c.forEach((R,w)=>typeof R=="string"?y.push(b+e$1(w)+`"\r
\r
${R.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):y.push(b+e$1(w)+`"; filename="${e$1(R.name,1)}"\r
Content-Type: ${R.type||"application/octet-stream"}\r
\r
`,R,`\r
`)),y.push(`--${d}--`),new l(y,{type:"multipart/form-data; boundary="+d})}u$1(formDataToBlob,"formDataToBlob");const rn=class rn extends Error{constructor(l,d){super(l),Error.captureStackTrace(this,this.constructor),this.type=d;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};u$1(rn,"FetchBaseError");let FetchBaseError=rn;const nn=class nn extends FetchBaseError{constructor(l,d,y){super(l,d),y&&(this.code=this.errno=y.code,this.erroredSysCall=y.syscall);}};u$1(nn,"FetchError");let FetchError$1=nn;const NAME=Symbol.toStringTag,isURLSearchParameters=u$1(c=>typeof c=="object"&&typeof c.append=="function"&&typeof c.delete=="function"&&typeof c.get=="function"&&typeof c.getAll=="function"&&typeof c.has=="function"&&typeof c.set=="function"&&typeof c.sort=="function"&&c[NAME]==="URLSearchParams","isURLSearchParameters"),isBlob=u$1(c=>c&&typeof c=="object"&&typeof c.arrayBuffer=="function"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.constructor=="function"&&/^(Blob|File)$/.test(c[NAME]),"isBlob"),isAbortSignal=u$1(c=>typeof c=="object"&&(c[NAME]==="AbortSignal"||c[NAME]==="EventTarget"),"isAbortSignal"),isDomainOrSubdomain=u$1((c,l)=>{const d=new URL(l).hostname,y=new URL(c).hostname;return d===y||d.endsWith(`.${y}`)},"isDomainOrSubdomain"),isSameProtocol=u$1((c,l)=>{const d=new URL(l).protocol,y=new URL(c).protocol;return d===y},"isSameProtocol"),pipeline=require$$0.promisify(Stream__default.pipeline),INTERNALS$2=Symbol("Body internals"),on=class on{constructor(l,{size:d=0}={}){let y=null;l===null?l=null:isURLSearchParameters(l)?l=require$$6.Buffer.from(l.toString()):isBlob(l)||require$$6.Buffer.isBuffer(l)||(require$$0.types.isAnyArrayBuffer(l)?l=require$$6.Buffer.from(l):ArrayBuffer.isView(l)?l=require$$6.Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof Stream__default||(l instanceof FormData$1?(l=formDataToBlob(l),y=l.type.split("=")[1]):l=require$$6.Buffer.from(String(l))));let b=l;require$$6.Buffer.isBuffer(l)?b=Stream__default.Readable.from(l):isBlob(l)&&(b=Stream__default.Readable.from(l.stream())),this[INTERNALS$2]={body:l,stream:b,boundary:y,disturbed:!1,error:null},this.size=d,l instanceof Stream__default&&l.on("error",R=>{const w=R instanceof FetchBaseError?R:new FetchError$1(`Invalid response body while trying to fetch ${this.url}: ${R.message}`,"system",R);this[INTERNALS$2].error=w;});}get body(){return this[INTERNALS$2].stream}get bodyUsed(){return this[INTERNALS$2].disturbed}async arrayBuffer(){const{buffer:l,byteOffset:d,byteLength:y}=await consumeBody(this);return l.slice(d,d+y)}async formData(){const l=this.headers.get("content-type");if(l.startsWith("application/x-www-form-urlencoded")){const y=new FormData$1,b=new URLSearchParams(await this.text());for(const[R,w]of b)y.append(R,w);return y}const{toFormData:d}=await import('./chunks/_/multipart-parser.mjs').then(function (n) { return n.m; });return d(this.body,l)}async blob(){const l=this.headers&&this.headers.get("content-type")||this[INTERNALS$2].body&&this[INTERNALS$2].body.type||"",d=await this.arrayBuffer();return new r$1([d],{type:l})}async json(){const l=await this.text();return JSON.parse(l)}async text(){const l=await consumeBody(this);return new TextDecoder().decode(l)}buffer(){return consumeBody(this)}};u$1(on,"Body");let Body=on;Body.prototype.buffer=require$$0.deprecate(Body.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Body.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:require$$0.deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function consumeBody(c){if(c[INTERNALS$2].disturbed)throw new TypeError(`body used already for: ${c.url}`);if(c[INTERNALS$2].disturbed=!0,c[INTERNALS$2].error)throw c[INTERNALS$2].error;const{body:l}=c;if(l===null||!(l instanceof Stream__default))return require$$6.Buffer.alloc(0);const d=[];let y=0;try{for await(const b of l){if(c.size>0&&y+b.length>c.size){const R=new FetchError$1(`content size at ${c.url} over limit: ${c.size}`,"max-size");throw l.destroy(R),R}y+=b.length,d.push(b);}}catch(b){throw b instanceof FetchBaseError?b:new FetchError$1(`Invalid response body while trying to fetch ${c.url}: ${b.message}`,"system",b)}if(l.readableEnded===!0||l._readableState.ended===!0)try{return d.every(b=>typeof b=="string")?require$$6.Buffer.from(d.join("")):require$$6.Buffer.concat(d,y)}catch(b){throw new FetchError$1(`Could not create Buffer from response body for ${c.url}: ${b.message}`,"system",b)}else throw new FetchError$1(`Premature close of server response while trying to fetch ${c.url}`)}u$1(consumeBody,"consumeBody");const clone=u$1((c,l)=>{let d,y,{body:b}=c[INTERNALS$2];if(c.bodyUsed)throw new Error("cannot clone body after it is used");return b instanceof Stream__default&&typeof b.getBoundary!="function"&&(d=new Stream.PassThrough({highWaterMark:l}),y=new Stream.PassThrough({highWaterMark:l}),b.pipe(d),b.pipe(y),c[INTERNALS$2].stream=d,b=y),b},"clone"),getNonSpecFormDataBoundary=require$$0.deprecate(c=>c.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),extractContentType=u$1((c,l)=>c===null?null:typeof c=="string"?"text/plain;charset=UTF-8":isURLSearchParameters(c)?"application/x-www-form-urlencoded;charset=UTF-8":isBlob(c)?c.type||null:require$$6.Buffer.isBuffer(c)||require$$0.types.isAnyArrayBuffer(c)||ArrayBuffer.isView(c)?null:c instanceof FormData$1?`multipart/form-data; boundary=${l[INTERNALS$2].boundary}`:c&&typeof c.getBoundary=="function"?`multipart/form-data;boundary=${getNonSpecFormDataBoundary(c)}`:c instanceof Stream__default?null:"text/plain;charset=UTF-8","extractContentType"),getTotalBytes=u$1(c=>{const{body:l}=c[INTERNALS$2];return l===null?0:isBlob(l)?l.size:require$$6.Buffer.isBuffer(l)?l.length:l&&typeof l.getLengthSync=="function"&&l.hasKnownLength&&l.hasKnownLength()?l.getLengthSync():null},"getTotalBytes"),writeToStream=u$1(async(c,{body:l})=>{l===null?c.end():await pipeline(l,c);},"writeToStream"),validateHeaderName=typeof http__default.validateHeaderName=="function"?http__default.validateHeaderName:c=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(c)){const l=new TypeError(`Header name must be a valid HTTP token [${c}]`);throw Object.defineProperty(l,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),l}},validateHeaderValue=typeof http__default.validateHeaderValue=="function"?http__default.validateHeaderValue:(c,l)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(l)){const d=new TypeError(`Invalid character in header content ["${c}"]`);throw Object.defineProperty(d,"code",{value:"ERR_INVALID_CHAR"}),d}},Kt$1=class Kt extends URLSearchParams{constructor(l){let d=[];if(l instanceof Kt){const y=l.raw();for(const[b,R]of Object.entries(y))d.push(...R.map(w=>[b,w]));}else if(l!=null)if(typeof l=="object"&&!require$$0.types.isBoxedPrimitive(l)){const y=l[Symbol.iterator];if(y==null)d.push(...Object.entries(l));else {if(typeof y!="function")throw new TypeError("Header pairs must be iterable");d=[...l].map(b=>{if(typeof b!="object"||require$$0.types.isBoxedPrimitive(b))throw new TypeError("Each header pair must be an iterable object");return [...b]}).map(b=>{if(b.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...b]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return d=d.length>0?d.map(([y,b])=>(validateHeaderName(y),validateHeaderValue(y,String(b)),[String(y).toLowerCase(),String(b)])):void 0,super(d),new Proxy(this,{get(y,b,R){switch(b){case"append":case"set":return (w,v)=>(validateHeaderName(w),validateHeaderValue(w,String(v)),URLSearchParams.prototype[b].call(y,String(w).toLowerCase(),String(v)));case"delete":case"has":case"getAll":return w=>(validateHeaderName(w),URLSearchParams.prototype[b].call(y,String(w).toLowerCase()));case"keys":return ()=>(y.sort(),new Set(URLSearchParams.prototype.keys.call(y)).keys());default:return Reflect.get(y,b,R)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(l){const d=this.getAll(l);if(d.length===0)return null;let y=d.join(", ");return /^content-encoding$/i.test(l)&&(y=y.toLowerCase()),y}forEach(l,d=void 0){for(const y of this.keys())Reflect.apply(l,d,[this.get(y),y,this]);}*values(){for(const l of this.keys())yield this.get(l);}*entries(){for(const l of this.keys())yield [l,this.get(l)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((l,d)=>(l[d]=this.getAll(d),l),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((l,d)=>{const y=this.getAll(d);return d==="host"?l[d]=y[0]:l[d]=y.length>1?y:y[0],l},{})}};u$1(Kt$1,"Headers");let Headers$2=Kt$1;Object.defineProperties(Headers$2.prototype,["get","entries","forEach","values"].reduce((c,l)=>(c[l]={enumerable:!0},c),{}));function fromRawHeaders(c=[]){return new Headers$2(c.reduce((l,d,y,b)=>(y%2===0&&l.push(b.slice(y,y+2)),l),[]).filter(([l,d])=>{try{return validateHeaderName(l),validateHeaderValue(l,String(d)),!0}catch{return !1}}))}u$1(fromRawHeaders,"fromRawHeaders");const redirectStatus=new Set([301,302,303,307,308]),isRedirect=u$1(c=>redirectStatus.has(c),"isRedirect"),INTERNALS$1=Symbol("Response internals"),De=class De extends Body{constructor(l=null,d={}){super(l,d);const y=d.status!=null?d.status:200,b=new Headers$2(d.headers);if(l!==null&&!b.has("Content-Type")){const R=extractContentType(l,this);R&&b.append("Content-Type",R);}this[INTERNALS$1]={type:"default",url:d.url,status:y,statusText:d.statusText||"",headers:b,counter:d.counter,highWaterMark:d.highWaterMark};}get type(){return this[INTERNALS$1].type}get url(){return this[INTERNALS$1].url||""}get status(){return this[INTERNALS$1].status}get ok(){return this[INTERNALS$1].status>=200&&this[INTERNALS$1].status<300}get redirected(){return this[INTERNALS$1].counter>0}get statusText(){return this[INTERNALS$1].statusText}get headers(){return this[INTERNALS$1].headers}get highWaterMark(){return this[INTERNALS$1].highWaterMark}clone(){return new De(clone(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(l,d=302){if(!isRedirect(d))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new De(null,{headers:{location:new URL(l).toString()},status:d})}static error(){const l=new De(null,{status:0,statusText:""});return l[INTERNALS$1].type="error",l}static json(l=void 0,d={}){const y=JSON.stringify(l);if(y===void 0)throw new TypeError("data is not JSON serializable");const b=new Headers$2(d&&d.headers);return b.has("content-type")||b.set("content-type","application/json"),new De(y,{...d,headers:b})}get[Symbol.toStringTag](){return "Response"}};u$1(De,"Response");let Response$1=De;Object.defineProperties(Response$1.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const getSearch=u$1(c=>{if(c.search)return c.search;const l=c.href.length-1,d=c.hash||(c.href[l]==="#"?"#":"");return c.href[l-d.length]==="?"?"?":""},"getSearch");function stripURLForUseAsAReferrer(c,l=!1){return c==null||(c=new URL(c),/^(about|blob|data):$/.test(c.protocol))?"no-referrer":(c.username="",c.password="",c.hash="",l&&(c.pathname="",c.search=""),c)}u$1(stripURLForUseAsAReferrer,"stripURLForUseAsAReferrer");const ReferrerPolicy=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),DEFAULT_REFERRER_POLICY="strict-origin-when-cross-origin";function validateReferrerPolicy(c){if(!ReferrerPolicy.has(c))throw new TypeError(`Invalid referrerPolicy: ${c}`);return c}u$1(validateReferrerPolicy,"validateReferrerPolicy");function isOriginPotentiallyTrustworthy(c){if(/^(http|ws)s:$/.test(c.protocol))return !0;const l=c.host.replace(/(^\[)|(]$)/g,""),d=require$$4.isIP(l);return d===4&&/^127\./.test(l)||d===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(l)?!0:c.host==="localhost"||c.host.endsWith(".localhost")?!1:c.protocol==="file:"}u$1(isOriginPotentiallyTrustworthy,"isOriginPotentiallyTrustworthy");function isUrlPotentiallyTrustworthy(c){return /^about:(blank|srcdoc)$/.test(c)||c.protocol==="data:"||/^(blob|filesystem):$/.test(c.protocol)?!0:isOriginPotentiallyTrustworthy(c)}u$1(isUrlPotentiallyTrustworthy,"isUrlPotentiallyTrustworthy");function determineRequestsReferrer(c,{referrerURLCallback:l,referrerOriginCallback:d}={}){if(c.referrer==="no-referrer"||c.referrerPolicy==="")return null;const y=c.referrerPolicy;if(c.referrer==="about:client")return "no-referrer";const b=c.referrer;let R=stripURLForUseAsAReferrer(b),w=stripURLForUseAsAReferrer(b,!0);R.toString().length>4096&&(R=w),l&&(R=l(R)),d&&(w=d(w));const v=new URL(c.url);switch(y){case"no-referrer":return "no-referrer";case"origin":return w;case"unsafe-url":return R;case"strict-origin":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":w.toString();case"strict-origin-when-cross-origin":return R.origin===v.origin?R:isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":w;case"same-origin":return R.origin===v.origin?R:"no-referrer";case"origin-when-cross-origin":return R.origin===v.origin?R:w;case"no-referrer-when-downgrade":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":R;default:throw new TypeError(`Invalid referrerPolicy: ${y}`)}}u$1(determineRequestsReferrer,"determineRequestsReferrer");function parseReferrerPolicyFromHeader(c){const l=(c.get("referrer-policy")||"").split(/[,\s]+/);let d="";for(const y of l)y&&ReferrerPolicy.has(y)&&(d=y);return d}u$1(parseReferrerPolicyFromHeader,"parseReferrerPolicyFromHeader");const INTERNALS=Symbol("Request internals"),isRequest=u$1(c=>typeof c=="object"&&typeof c[INTERNALS]=="object","isRequest"),doBadDataWarn=require$$0.deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Jt$1=class Jt extends Body{constructor(l,d={}){let y;if(isRequest(l)?y=new URL(l.url):(y=new URL(l),l={}),y.username!==""||y.password!=="")throw new TypeError(`${y} is an url with embedded credentials.`);let b=d.method||l.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(b)&&(b=b.toUpperCase()),!isRequest(d)&&"data"in d&&doBadDataWarn(),(d.body!=null||isRequest(l)&&l.body!==null)&&(b==="GET"||b==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const R=d.body?d.body:isRequest(l)&&l.body!==null?clone(l):null;super(R,{size:d.size||l.size||0});const w=new Headers$2(d.headers||l.headers||{});if(R!==null&&!w.has("Content-Type")){const B=extractContentType(R,this);B&&w.set("Content-Type",B);}let v=isRequest(l)?l.signal:null;if("signal"in d&&(v=d.signal),v!=null&&!isAbortSignal(v))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let I=d.referrer==null?l.referrer:d.referrer;if(I==="")I="no-referrer";else if(I){const B=new URL(I);I=/^about:(\/\/)?client$/.test(B)?"client":B;}else I=void 0;this[INTERNALS]={method:b,redirect:d.redirect||l.redirect||"follow",headers:w,parsedURL:y,signal:v,referrer:I},this.follow=d.follow===void 0?l.follow===void 0?20:l.follow:d.follow,this.compress=d.compress===void 0?l.compress===void 0?!0:l.compress:d.compress,this.counter=d.counter||l.counter||0,this.agent=d.agent||l.agent,this.highWaterMark=d.highWaterMark||l.highWaterMark||16384,this.insecureHTTPParser=d.insecureHTTPParser||l.insecureHTTPParser||!1,this.referrerPolicy=d.referrerPolicy||l.referrerPolicy||"";}get method(){return this[INTERNALS].method}get url(){return require$$1.format(this[INTERNALS].parsedURL)}get headers(){return this[INTERNALS].headers}get redirect(){return this[INTERNALS].redirect}get signal(){return this[INTERNALS].signal}get referrer(){if(this[INTERNALS].referrer==="no-referrer")return "";if(this[INTERNALS].referrer==="client")return "about:client";if(this[INTERNALS].referrer)return this[INTERNALS].referrer.toString()}get referrerPolicy(){return this[INTERNALS].referrerPolicy}set referrerPolicy(l){this[INTERNALS].referrerPolicy=validateReferrerPolicy(l);}clone(){return new Jt(this)}get[Symbol.toStringTag](){return "Request"}};u$1(Jt$1,"Request");let Request$1=Jt$1;Object.defineProperties(Request$1.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const getNodeRequestOptions=u$1(c=>{const{parsedURL:l}=c[INTERNALS],d=new Headers$2(c[INTERNALS].headers);d.has("Accept")||d.set("Accept","*/*");let y=null;if(c.body===null&&/^(post|put)$/i.test(c.method)&&(y="0"),c.body!==null){const v=getTotalBytes(c);typeof v=="number"&&!Number.isNaN(v)&&(y=String(v));}y&&d.set("Content-Length",y),c.referrerPolicy===""&&(c.referrerPolicy=DEFAULT_REFERRER_POLICY),c.referrer&&c.referrer!=="no-referrer"?c[INTERNALS].referrer=determineRequestsReferrer(c):c[INTERNALS].referrer="no-referrer",c[INTERNALS].referrer instanceof URL&&d.set("Referer",c.referrer),d.has("User-Agent")||d.set("User-Agent","node-fetch"),c.compress&&!d.has("Accept-Encoding")&&d.set("Accept-Encoding","gzip, deflate, br");let{agent:b}=c;typeof b=="function"&&(b=b(l));const R=getSearch(l),w={path:l.pathname+R,method:c.method,headers:d[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:c.insecureHTTPParser,agent:b};return {parsedURL:l,options:w}},"getNodeRequestOptions"),sn=class sn extends FetchBaseError{constructor(l,d="aborted"){super(l,d);}};u$1(sn,"AbortError");let AbortError=sn;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */if(!globalThis.DOMException)try{const{MessageChannel:c}=require("worker_threads"),l=new c().port1,d=new ArrayBuffer;l.postMessage(d,[d,d]);}catch(c){c.constructor.name==="DOMException"&&(globalThis.DOMException=c.constructor);}var nodeDomexception=globalThis.DOMException;const DOMException=_commonjsHelpers.getDefaultExportFromCjs(nodeDomexception),{stat}=node_fs.promises,blobFromSync=u$1((c,l)=>fromBlob(node_fs.statSync(c),c,l),"blobFromSync"),blobFrom=u$1((c,l)=>stat(c).then(d=>fromBlob(d,c,l)),"blobFrom"),fileFrom=u$1((c,l)=>stat(c).then(d=>fromFile(d,c,l)),"fileFrom"),fileFromSync=u$1((c,l)=>fromFile(node_fs.statSync(c),c,l),"fileFromSync"),fromBlob=u$1((c,l,d="")=>new r$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],{type:d}),"fromBlob"),fromFile=u$1((c,l,d="")=>new File$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],node_path.basename(l),{type:d,lastModified:c.mtimeMs}),"fromFile"),Xt$1=class Xt{constructor(l){ye$1(this,Me,void 0);ye$1(this,xe$1,void 0);ne(this,Me,l.path),ne(this,xe$1,l.start),this.size=l.size,this.lastModified=l.lastModified;}slice(l,d){return new Xt({path:D(this,Me),lastModified:this.lastModified,size:d-l,start:D(this,xe$1)+l})}async*stream(){const{mtimeMs:l}=await stat(D(this,Me));if(l>this.lastModified)throw new DOMException("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*node_fs.createReadStream(D(this,Me),{start:D(this,xe$1),end:D(this,xe$1)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};Me=new WeakMap,xe$1=new WeakMap,u$1(Xt$1,"BlobDataItem");let BlobDataItem=Xt$1;const supportedSchemas=new Set(["data:","http:","https:"]);async function fetch$1(c,l){return new Promise((d,y)=>{const b=new Request$1(c,l),{parsedURL:R,options:w}=getNodeRequestOptions(b);if(!supportedSchemas.has(R.protocol))throw new TypeError(`node-fetch cannot load ${c}. URL scheme "${R.protocol.replace(/:$/,"")}" is not supported.`);if(R.protocol==="data:"){const E=dataUriToBuffer(b.url),K=new Response$1(E,{headers:{"Content-Type":E.typeFull}});d(K);return}const v=(R.protocol==="https:"?https__default:http__default).request,{signal:I}=b;let B=null;const F=u$1(()=>{const E=new AbortError("The operation was aborted.");y(E),b.body&&b.body instanceof Stream__default.Readable&&b.body.destroy(E),!(!B||!B.body)&&B.body.emit("error",E);},"abort");if(I&&I.aborted){F();return}const k=u$1(()=>{F(),$();},"abortAndFinalize"),T=v(R.toString(),w);I&&I.addEventListener("abort",k);const $=u$1(()=>{T.abort(),I&&I.removeEventListener("abort",k);},"finalize");T.on("error",E=>{y(new FetchError$1(`request to ${b.url} failed, reason: ${E.message}`,"system",E)),$();}),fixResponseChunkedTransferBadEnding(T,E=>{B&&B.body&&B.body.destroy(E);}),process.version<"v14"&&T.on("socket",E=>{let K;E.prependListener("end",()=>{K=E._eventsCount;}),E.prependListener("close",U=>{if(B&&K<E._eventsCount&&!U){const N=new Error("Premature close");N.code="ERR_STREAM_PREMATURE_CLOSE",B.body.emit("error",N);}});}),T.on("response",E=>{T.setTimeout(0);const K=fromRawHeaders(E.rawHeaders);if(isRedirect(E.statusCode)){const M=K.get("Location");let H=null;try{H=M===null?null:new URL(M,b.url);}catch{if(b.redirect!=="manual"){y(new FetchError$1(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),$();return}}switch(b.redirect){case"error":y(new FetchError$1(`uri requested responds with a redirect, redirect mode is set to error: ${b.url}`,"no-redirect")),$();return;case"manual":break;case"follow":{if(H===null)break;if(b.counter>=b.follow){y(new FetchError$1(`maximum redirect reached at: ${b.url}`,"max-redirect")),$();return}const G={headers:new Headers$2(b.headers),follow:b.follow,counter:b.counter+1,agent:b.agent,compress:b.compress,method:b.method,body:clone(b),signal:b.signal,size:b.size,referrer:b.referrer,referrerPolicy:b.referrerPolicy};if(!isDomainOrSubdomain(b.url,H)||!isSameProtocol(b.url,H))for(const wt of ["authorization","www-authenticate","cookie","cookie2"])G.headers.delete(wt);if(E.statusCode!==303&&b.body&&l.body instanceof Stream__default.Readable){y(new FetchError$1("Cannot follow redirect with body being a readable stream","unsupported-redirect")),$();return}(E.statusCode===303||(E.statusCode===301||E.statusCode===302)&&b.method==="POST")&&(G.method="GET",G.body=void 0,G.headers.delete("content-length"));const Q=parseReferrerPolicyFromHeader(K);Q&&(G.referrerPolicy=Q),d(fetch$1(new Request$1(H,G))),$();return}default:return y(new TypeError(`Redirect option '${b.redirect}' is not a valid value of RequestRedirect`))}}I&&E.once("end",()=>{I.removeEventListener("abort",k);});let U=Stream.pipeline(E,new Stream.PassThrough,M=>{M&&y(M);});process.version<"v12.10"&&E.on("aborted",k);const N={url:b.url,status:E.statusCode,statusText:E.statusMessage,headers:K,size:b.size,counter:b.counter,highWaterMark:b.highWaterMark},J=K.get("Content-Encoding");if(!b.compress||b.method==="HEAD"||J===null||E.statusCode===204||E.statusCode===304){B=new Response$1(U,N),d(B);return}const ge={flush:zlib__default.Z_SYNC_FLUSH,finishFlush:zlib__default.Z_SYNC_FLUSH};if(J==="gzip"||J==="x-gzip"){U=Stream.pipeline(U,zlib__default.createGunzip(ge),M=>{M&&y(M);}),B=new Response$1(U,N),d(B);return}if(J==="deflate"||J==="x-deflate"){const M=Stream.pipeline(E,new Stream.PassThrough,H=>{H&&y(H);});M.once("data",H=>{(H[0]&15)===8?U=Stream.pipeline(U,zlib__default.createInflate(),G=>{G&&y(G);}):U=Stream.pipeline(U,zlib__default.createInflateRaw(),G=>{G&&y(G);}),B=new Response$1(U,N),d(B);}),M.once("end",()=>{B||(B=new Response$1(U,N),d(B));});return}if(J==="br"){U=Stream.pipeline(U,zlib__default.createBrotliDecompress(),M=>{M&&y(M);}),B=new Response$1(U,N),d(B);return}B=new Response$1(U,N),d(B);}),writeToStream(T,b).catch(y);})}u$1(fetch$1,"fetch$1");function fixResponseChunkedTransferBadEnding(c,l){const d=require$$6.Buffer.from(`0\r
\r
`);let y=!1,b=!1,R;c.on("response",w=>{const{headers:v}=w;y=v["transfer-encoding"]==="chunked"&&!v["content-length"];}),c.on("socket",w=>{const v=u$1(()=>{if(y&&!b){const B=new Error("Premature close");B.code="ERR_STREAM_PREMATURE_CLOSE",l(B);}},"onSocketClose"),I=u$1(B=>{b=require$$6.Buffer.compare(B.slice(-5),d)===0,!b&&R&&(b=require$$6.Buffer.compare(R.slice(-3),d.slice(0,3))===0&&require$$6.Buffer.compare(B.slice(-2),d.slice(3))===0),R=B;},"onData");w.prependListener("close",v),w.on("data",I),c.on("close",()=>{w.removeListener("close",v),w.removeListener("data",I);});});}u$1(fixResponseChunkedTransferBadEnding,"fixResponseChunkedTransferBadEnding");const privateData=new WeakMap,wrappers=new WeakMap;function pd(c){const l=privateData.get(c);return console.assert(l!=null,"'this' is expected an Event object, but got",c),l}u$1(pd,"pd");function setCancelFlag(c){if(c.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",c.passiveListener);return}c.event.cancelable&&(c.canceled=!0,typeof c.event.preventDefault=="function"&&c.event.preventDefault());}u$1(setCancelFlag,"setCancelFlag");function Event(c,l){privateData.set(this,{eventTarget:c,event:l,eventPhase:2,currentTarget:c,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:l.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const d=Object.keys(l);for(let y=0;y<d.length;++y){const b=d[y];b in this||Object.defineProperty(this,b,defineRedirectDescriptor(b));}}u$1(Event,"Event"),Event.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const c=pd(this).currentTarget;return c==null?[]:[c]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const c=pd(this);c.stopped=!0,typeof c.event.stopPropagation=="function"&&c.event.stopPropagation();},stopImmediatePropagation(){const c=pd(this);c.stopped=!0,c.immediateStopped=!0,typeof c.event.stopImmediatePropagation=="function"&&c.event.stopImmediatePropagation();},get bubbles(){return !!pd(this).event.bubbles},get cancelable(){return !!pd(this).event.cancelable},preventDefault(){setCancelFlag(pd(this));},get defaultPrevented(){return pd(this).canceled},get composed(){return !!pd(this).event.composed},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(c){if(!c)return;const l=pd(this);l.stopped=!0,typeof l.event.cancelBubble=="boolean"&&(l.event.cancelBubble=!0);},get returnValue(){return !pd(this).canceled},set returnValue(c){c||setCancelFlag(pd(this));},initEvent(){}},Object.defineProperty(Event.prototype,"constructor",{value:Event,configurable:!0,writable:!0});function defineRedirectDescriptor(c){return {get(){return pd(this).event[c]},set(l){pd(this).event[c]=l;},configurable:!0,enumerable:!0}}u$1(defineRedirectDescriptor,"defineRedirectDescriptor");function defineCallDescriptor(c){return {value(){const l=pd(this).event;return l[c].apply(l,arguments)},configurable:!0,enumerable:!0}}u$1(defineCallDescriptor,"defineCallDescriptor");function defineWrapper(c,l){const d=Object.keys(l);if(d.length===0)return c;function y(b,R){c.call(this,b,R);}u$1(y,"CustomEvent"),y.prototype=Object.create(c.prototype,{constructor:{value:y,configurable:!0,writable:!0}});for(let b=0;b<d.length;++b){const R=d[b];if(!(R in c.prototype)){const v=typeof Object.getOwnPropertyDescriptor(l,R).value=="function";Object.defineProperty(y.prototype,R,v?defineCallDescriptor(R):defineRedirectDescriptor(R));}}return y}u$1(defineWrapper,"defineWrapper");function getWrapper(c){if(c==null||c===Object.prototype)return Event;let l=wrappers.get(c);return l==null&&(l=defineWrapper(getWrapper(Object.getPrototypeOf(c)),c),wrappers.set(c,l)),l}u$1(getWrapper,"getWrapper");function wrapEvent(c,l){const d=getWrapper(Object.getPrototypeOf(l));return new d(c,l)}u$1(wrapEvent,"wrapEvent");function isStopped(c){return pd(c).immediateStopped}u$1(isStopped,"isStopped");function setEventPhase(c,l){pd(c).eventPhase=l;}u$1(setEventPhase,"setEventPhase");function setCurrentTarget(c,l){pd(c).currentTarget=l;}u$1(setCurrentTarget,"setCurrentTarget");function setPassiveListener(c,l){pd(c).passiveListener=l;}u$1(setPassiveListener,"setPassiveListener");const listenersMap=new WeakMap,CAPTURE=1,BUBBLE=2,ATTRIBUTE=3;function isObject(c){return c!==null&&typeof c=="object"}u$1(isObject,"isObject");function getListeners(c){const l=listenersMap.get(c);if(l==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return l}u$1(getListeners,"getListeners");function defineEventAttributeDescriptor(c){return {get(){let d=getListeners(this).get(c);for(;d!=null;){if(d.listenerType===ATTRIBUTE)return d.listener;d=d.next;}return null},set(l){typeof l!="function"&&!isObject(l)&&(l=null);const d=getListeners(this);let y=null,b=d.get(c);for(;b!=null;)b.listenerType===ATTRIBUTE?y!==null?y.next=b.next:b.next!==null?d.set(c,b.next):d.delete(c):y=b,b=b.next;if(l!==null){const R={listener:l,listenerType:ATTRIBUTE,passive:!1,once:!1,next:null};y===null?d.set(c,R):y.next=R;}},configurable:!0,enumerable:!0}}u$1(defineEventAttributeDescriptor,"defineEventAttributeDescriptor");function defineEventAttribute(c,l){Object.defineProperty(c,`on${l}`,defineEventAttributeDescriptor(l));}u$1(defineEventAttribute,"defineEventAttribute");function defineCustomEventTarget(c){function l(){EventTarget.call(this);}u$1(l,"CustomEventTarget"),l.prototype=Object.create(EventTarget.prototype,{constructor:{value:l,configurable:!0,writable:!0}});for(let d=0;d<c.length;++d)defineEventAttribute(l.prototype,c[d]);return l}u$1(defineCustomEventTarget,"defineCustomEventTarget");function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return defineCustomEventTarget(arguments[0]);if(arguments.length>0){const c=new Array(arguments.length);for(let l=0;l<arguments.length;++l)c[l]=arguments[l];return defineCustomEventTarget(c)}throw new TypeError("Cannot call a class as a function")}u$1(EventTarget,"EventTarget"),EventTarget.prototype={addEventListener(c,l,d){if(l==null)return;if(typeof l!="function"&&!isObject(l))throw new TypeError("'listener' should be a function or an object.");const y=getListeners(this),b=isObject(d),w=(b?!!d.capture:!!d)?CAPTURE:BUBBLE,v={listener:l,listenerType:w,passive:b&&!!d.passive,once:b&&!!d.once,next:null};let I=y.get(c);if(I===void 0){y.set(c,v);return}let B=null;for(;I!=null;){if(I.listener===l&&I.listenerType===w)return;B=I,I=I.next;}B.next=v;},removeEventListener(c,l,d){if(l==null)return;const y=getListeners(this),R=(isObject(d)?!!d.capture:!!d)?CAPTURE:BUBBLE;let w=null,v=y.get(c);for(;v!=null;){if(v.listener===l&&v.listenerType===R){w!==null?w.next=v.next:v.next!==null?y.set(c,v.next):y.delete(c);return}w=v,v=v.next;}},dispatchEvent(c){if(c==null||typeof c.type!="string")throw new TypeError('"event.type" should be a string.');const l=getListeners(this),d=c.type;let y=l.get(d);if(y==null)return !0;const b=wrapEvent(this,c);let R=null;for(;y!=null;){if(y.once?R!==null?R.next=y.next:y.next!==null?l.set(d,y.next):l.delete(d):R=y,setPassiveListener(b,y.passive?y.listener:null),typeof y.listener=="function")try{y.listener.call(this,b);}catch(w){typeof console<"u"&&typeof console.error=="function"&&console.error(w);}else y.listenerType!==ATTRIBUTE&&typeof y.listener.handleEvent=="function"&&y.listener.handleEvent(b);if(isStopped(b))break;y=y.next;}return setPassiveListener(b,null),setEventPhase(b,0),setCurrentTarget(b,null),!b.defaultPrevented}},Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:!0,writable:!0});const an=class an extends EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const l=abortedFlags.get(this);if(typeof l!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return l}};u$1(an,"AbortSignal");let AbortSignal=an;defineEventAttribute(AbortSignal.prototype,"abort");function createAbortSignal(){const c=Object.create(AbortSignal.prototype);return EventTarget.call(c),abortedFlags.set(c,!1),c}u$1(createAbortSignal,"createAbortSignal");function abortSignal(c){abortedFlags.get(c)===!1&&(abortedFlags.set(c,!0),c.dispatchEvent({type:"abort"}));}u$1(abortSignal,"abortSignal");const abortedFlags=new WeakMap;Object.defineProperties(AbortSignal.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortSignal.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let AbortController$1$1=(St$1=class{constructor(){signals.set(this,createAbortSignal());}get signal(){return getSignal(this)}abort(){abortSignal(getSignal(this));}},u$1(St$1,"AbortController"),St$1);const signals=new WeakMap;function getSignal(c){const l=signals.get(c);if(l==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${c===null?"null":typeof c}`);return l}u$1(getSignal,"getSignal"),Object.defineProperties(AbortController$1$1.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortController$1$1.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var t$2=Object.defineProperty,e$2=u$1((c,l)=>t$2(c,"name",{value:l,configurable:!0}),"e");const fetch$2=fetch$1;s();function s(){!globalThis.process?.versions?.node&&!globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}u$1(s,"s"),e$2(s,"checkNodeEnvironment"),node$1.AbortController=AbortController$1$1,node$1.AbortError=AbortError,node$1.Blob=r$1,node$1.FetchError=FetchError$1,node$1.File=File$1,node$1.FormData=FormData$1,node$1.Headers=Headers$2,node$1.Request=Request$1,node$1.Response=Response$1,node$1.blobFrom=blobFrom,node$1.blobFromSync=blobFromSync,node$1.default=fetch$2,node$1.fetch=fetch$2,node$1.fileFrom=fileFrom,node$1.fileFromSync=fileFromSync,node$1.isRedirect=isRedirect;

var n$1=Object.defineProperty;var i$1=(r,o)=>n$1(r,"name",{value:o,configurable:!0});const node=node$1;var t=Object.defineProperty,a=i$1((r,o)=>t(r,"name",{value:o,configurable:!0}),"a");function e(r,o){if(!(r in globalThis))try{globalThis[r]=o;}catch{}}i$1(e,"e"),a(e,"polyfill"),e("fetch",node.fetch),e("Blob",node.Blob),e("File",node.File),e("FormData",node.FormData),e("Headers",node.Headers),e("Request",node.Request),e("Response",node.Response),e("AbortController",node.AbortController);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class WordArray {
  constructor(words, sigBytes) {
    __publicField$1(this, "words");
    __publicField$1(this, "sigBytes");
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    __publicField$1(this, "_data", new WordArray());
    __publicField$1(this, "_nDataBytes", 0);
    __publicField$1(this, "_minBufferSize", 0);
    __publicField$1(this, "blockSize", 512 / 32);
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

var __defProp$3 = Object.defineProperty;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$3 = (obj, key, value) => {
  __defNormalProp$3(obj, key + "" , value);
  return value;
};
const H$5 = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K$3 = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W$4 = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    __publicField$3(this, "_hash", new WordArray([...H$5]));
  }
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H$5]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W$4[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W$4[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W$4[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W$4[i] = gamma0 + W$4[i - 7] + gamma1 + W$4[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K$3[i] + W$4[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      if (_resolved instanceof URLSearchParams) {
        return Buffer.from(_resolved.toString());
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders$1(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders$1(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField(this, "__is_event__", true);
    // Context
    __publicField(this, "node");
    // Node
    __publicField(this, "web");
    // Web
    __publicField(this, "context", {});
    // Shared
    // Request
    __publicField(this, "_method");
    __publicField(this, "_path");
    __publicField(this, "_headers");
    __publicField(this, "_requestBody");
    // Response
    __publicField(this, "_handled", false);
    // Hooks
    __publicField(this, "_onBeforeResponseCalled");
    __publicField(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const url = info.request?.url || info.url || "/";
      const { pathname } = typeof url === "string" ? parseURL(url) : url;
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function resolveFetchOptions(request, input, defaults, Headers) {
  const headers = mergeHeaders(
    input?.headers ?? request?.headers,
    defaults?.headers,
    Headers
  );
  let query;
  if (defaults?.query || defaults?.params || input?.params || input?.query) {
    query = {
      ...defaults?.params,
      ...defaults?.query,
      ...input?.params,
      ...input?.query
    };
  }
  return {
    ...defaults,
    ...input,
    query,
    params: query,
    headers
  };
}
function mergeHeaders(input, defaults, Headers) {
  if (!defaults) {
    return new Headers(input);
  }
  const headers = new Headers(defaults);
  if (input) {
    for (const [key, value] of Symbol.iterator in input || Array.isArray(input) ? input : new Headers(input)) {
      headers.set(key, value);
    }
  }
  return headers;
}
async function callHooks(context, hooks) {
  if (hooks) {
    if (Array.isArray(hooks)) {
      for (const hook of hooks) {
        await hook(context);
      }
    } else {
      await hooks(context);
    }
  }
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early (Experimental)
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  // Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = typeof context.options.retryDelay === "function" ? context.options.retryDelay(context) : context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: resolveFetchOptions(
        _request,
        _options,
        globalOptions.defaults,
        Headers
      ),
      response: void 0,
      error: void 0
    };
    if (context.options.method) {
      context.options.method = context.options.method.toUpperCase();
    }
    if (context.options.onRequest) {
      await callHooks(context, context.options.onRequest);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query) {
        context.request = withQuery(context.request, context.options.query);
        delete context.options.query;
      }
      if ("query" in context.options) {
        delete context.options.query;
      }
      if ("params" in context.options) {
        delete context.options.params;
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(() => {
        const error = new Error(
          "[TimeoutError]: The operation was aborted due to timeout"
        );
        error.name = "TimeoutError";
        error.code = 23;
        controller.abort(error);
      }, context.options.timeout);
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await callHooks(
          context,
          context.options.onRequestError
        );
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = (context.response.body || // https://github.com/unjs/ofetch/issues/324
    // https://github.com/unjs/ofetch/issues/294
    // https://github.com/JakeChampion/fetch/issues/1454
    context.response._bodyInit) && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body || context.response._bodyInit;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await callHooks(
        context,
        context.options.onResponse
      );
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await callHooks(
          context,
          context.options.onResponseError
        );
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}, customGlobalOptions = {}) => createFetch$1({
    ...globalOptions,
    ...customGlobalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...customGlobalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

const _globalThis$1 = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch = _globalThis$1.fetch ? (...args) => _globalThis$1.fetch(...args) : () => Promise.reject(new Error("[ofetch] global.fetch is not supported!"));
const Headers$1 = _globalThis$1.Headers;
const AbortController$1 = _globalThis$1.AbortController;
createFetch$1({ fetch, Headers: Headers$1, AbortController: AbortController$1 });

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error, isDev) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.unhandled || error.fatal) ? [] : (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.unhandled ? "internal server error" : error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(
      error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    if (statusCode === 404) {
      setResponseHeader(event, "Cache-Control", "no-cache");
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    }
    setResponseHeader(event, "Content-Type", "text/html");
    return send(event, renderHTMLError(errorObject));
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const appConfig$1 = {"name":"vinxi","routers":[{"name":"public","type":"static","dir":"./public","base":"/","root":"/Users/33devas/Downloads/work-stations/adventex-tanstack","order":0,"outDir":"/Users/33devas/Downloads/work-stations/adventex-tanstack/.vinxi/build/public"},{"name":"client","type":"client","target":"browser","handler":"app/client.tsx","base":"/_build","build":{"sourcemap":true},"root":"/Users/33devas/Downloads/work-stations/adventex-tanstack","outDir":"/Users/33devas/Downloads/work-stations/adventex-tanstack/.vinxi/build/client","order":1},{"name":"ssr","type":"http","target":"server","handler":"app/ssr.tsx","link":{"client":"client"},"root":"/Users/33devas/Downloads/work-stations/adventex-tanstack","base":"/","outDir":"/Users/33devas/Downloads/work-stations/adventex-tanstack/.vinxi/build/ssr","order":2},{"name":"server","type":"http","target":"server","base":"/_server","handler":"node_modules/@tanstack/start/dist/esm/server-handler/index.js","root":"/Users/33devas/Downloads/work-stations/adventex-tanstack","outDir":"/Users/33devas/Downloads/work-stations/adventex-tanstack/.vinxi/build/server","order":3}],"server":{"preset":"bun","experimental":{"asyncContext":true}},"root":"/Users/33devas/Downloads/work-stations/adventex-tanstack"};
				const buildManifest = {"client":{"/Users/33devas/Downloads/work-stations/adventex-tanstack/app/styles/globals.css":{"file":"assets/globals-BUMEa2m7.css","src":"/Users/33devas/Downloads/work-stations/adventex-tanstack/app/styles/globals.css"},"_badge-BX8fJbc0.js":{"file":"assets/badge-BX8fJbc0.js","name":"badge","imports":["_client-B42ABy-e.js"]},"_blur-fade-7fLI09do.js":{"file":"assets/blur-fade-7fLI09do.js","name":"blur-fade","imports":["_client-B42ABy-e.js"]},"_calendar-BxthR7uV.js":{"file":"assets/calendar-BxthR7uV.js","name":"calendar","imports":["_client-B42ABy-e.js"]},"_card-DSl79Sq_.js":{"file":"assets/card-DSl79Sq_.js","name":"card","imports":["_client-B42ABy-e.js"]},"_chevron-right-jr-OsRoB.js":{"file":"assets/chevron-right-jr-OsRoB.js","name":"chevron-right","imports":["_client-B42ABy-e.js"]},"_client-B42ABy-e.js":{"file":"assets/client-B42ABy-e.js","name":"client","dynamicImports":["app/routes/contact.tsx?tsr-split","app/routes/about.tsx?tsr-split","app/routes/about.tsx?tsr-split","app/routes/index.tsx?tsr-split","app/routes/tours/index.tsx?tsr-split","app/routes/tours/index.tsx?tsr-split","app/routes/blogs/index.tsx?tsr-split","app/routes/blogs/index.tsx?tsr-split","app/routes/tours/$tourId.tsx?tsr-split","app/routes/blogs/$blogId.tsx?tsr-split"],"assets":["assets/kanit-thai-100-normal-MVGvUIAQ.woff2","assets/kanit-thai-100-normal-CJ5enLc7.woff","assets/kanit-thai-200-normal-DW7yNy6Q.woff2","assets/kanit-thai-200-normal-nA0zF8Cg.woff","assets/kanit-thai-300-normal-BZx2gboJ.woff2","assets/kanit-thai-300-normal-9B7BJcjo.woff","assets/kanit-thai-400-normal-C27eAtU1.woff2","assets/kanit-thai-400-normal-Hyy0rknX.woff","assets/kanit-thai-500-normal-BDuJ4o_K.woff2","assets/kanit-thai-500-normal-DpGKNmIS.woff","assets/kanit-thai-600-normal-B951hBRC.woff2","assets/kanit-thai-600-normal-BXxKBrx-.woff","assets/kanit-thai-700-normal-lMuxtNHC.woff2","assets/kanit-thai-700-normal-CZrRvC_H.woff","assets/kanit-thai-800-normal-B0cvSpRm.woff2","assets/kanit-thai-800-normal-BAaQprJW.woff","assets/kanit-thai-900-normal-BF0Ii47I.woff2","assets/kanit-thai-900-normal-DBagMaJD.woff","assets/globals-BUMEa2m7.css"]},"_index-ByNaFnmF.js":{"file":"assets/index-ByNaFnmF.js","name":"index","imports":["_client-B42ABy-e.js","_chevron-right-jr-OsRoB.js"]},"_index-Mi6CWLfl.js":{"file":"assets/index-Mi6CWLfl.js","name":"index","imports":["_client-B42ABy-e.js"]},"_page-hero-CSAqPvjb.js":{"file":"assets/page-hero-CSAqPvjb.js","name":"page-hero","imports":["_client-B42ABy-e.js"]},"_select-Rv5xCkR_.js":{"file":"assets/select-Rv5xCkR_.js","name":"select","imports":["_client-B42ABy-e.js","_index-ByNaFnmF.js"]},"_use-toast-58QX4mOB.js":{"file":"assets/use-toast-58QX4mOB.js","name":"use-toast","imports":["_client-B42ABy-e.js"]},"app/routes/about.tsx?tsr-split":{"file":"assets/about-DRMUEk2-.js","name":"about","src":"app/routes/about.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-B42ABy-e.js","_index-Mi6CWLfl.js","_card-DSl79Sq_.js","_blur-fade-7fLI09do.js","_page-hero-CSAqPvjb.js"]},"app/routes/blogs/$blogId.tsx?tsr-split":{"file":"assets/_blogId-M2BXOh_z.js","name":"_blogId","src":"app/routes/blogs/$blogId.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-B42ABy-e.js","_badge-BX8fJbc0.js","_select-Rv5xCkR_.js","_use-toast-58QX4mOB.js","_index-ByNaFnmF.js","_chevron-right-jr-OsRoB.js"]},"app/routes/blogs/index.tsx?tsr-split":{"file":"assets/index-Dzk7Phj7.js","name":"index","src":"app/routes/blogs/index.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-B42ABy-e.js","_index-Mi6CWLfl.js","_badge-BX8fJbc0.js","_card-DSl79Sq_.js","_calendar-BxthR7uV.js"]},"app/routes/contact.tsx?tsr-split":{"file":"assets/contact-BNDyAio6.js","name":"contact","src":"app/routes/contact.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-B42ABy-e.js","_use-toast-58QX4mOB.js","_blur-fade-7fLI09do.js"]},"app/routes/index.tsx?tsr-split":{"file":"assets/index-B-OYFYQ-.js","name":"index","src":"app/routes/index.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-B42ABy-e.js","_card-DSl79Sq_.js","_blur-fade-7fLI09do.js","_badge-BX8fJbc0.js","_index-ByNaFnmF.js","_calendar-BxthR7uV.js","_chevron-right-jr-OsRoB.js"]},"app/routes/tours/$tourId.tsx?tsr-split":{"file":"assets/_tourId-DnkQMoF7.js","name":"_tourId","src":"app/routes/tours/$tourId.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-B42ABy-e.js","_badge-BX8fJbc0.js","_select-Rv5xCkR_.js","_use-toast-58QX4mOB.js","_index-ByNaFnmF.js","_chevron-right-jr-OsRoB.js"]},"app/routes/tours/index.tsx?tsr-split":{"file":"assets/index-jVEys91j.js","name":"index","src":"app/routes/tours/index.tsx?tsr-split","isDynamicEntry":true,"imports":["_client-B42ABy-e.js","_index-Mi6CWLfl.js","_chevron-right-jr-OsRoB.js","_page-hero-CSAqPvjb.js","_card-DSl79Sq_.js"]},"node_modules/@fontsource/kanit/files/kanit-thai-100-normal.woff":{"file":"assets/kanit-thai-100-normal-CJ5enLc7.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-100-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-100-normal.woff2":{"file":"assets/kanit-thai-100-normal-MVGvUIAQ.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-100-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-200-normal.woff":{"file":"assets/kanit-thai-200-normal-nA0zF8Cg.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-200-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-200-normal.woff2":{"file":"assets/kanit-thai-200-normal-DW7yNy6Q.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-200-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-300-normal.woff":{"file":"assets/kanit-thai-300-normal-9B7BJcjo.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-300-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-300-normal.woff2":{"file":"assets/kanit-thai-300-normal-BZx2gboJ.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-300-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-400-normal.woff":{"file":"assets/kanit-thai-400-normal-Hyy0rknX.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-400-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-400-normal.woff2":{"file":"assets/kanit-thai-400-normal-C27eAtU1.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-400-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-500-normal.woff":{"file":"assets/kanit-thai-500-normal-DpGKNmIS.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-500-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-500-normal.woff2":{"file":"assets/kanit-thai-500-normal-BDuJ4o_K.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-500-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-600-normal.woff":{"file":"assets/kanit-thai-600-normal-BXxKBrx-.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-600-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-600-normal.woff2":{"file":"assets/kanit-thai-600-normal-B951hBRC.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-600-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-700-normal.woff":{"file":"assets/kanit-thai-700-normal-CZrRvC_H.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-700-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-700-normal.woff2":{"file":"assets/kanit-thai-700-normal-lMuxtNHC.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-700-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-800-normal.woff":{"file":"assets/kanit-thai-800-normal-BAaQprJW.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-800-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-800-normal.woff2":{"file":"assets/kanit-thai-800-normal-B0cvSpRm.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-800-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-900-normal.woff":{"file":"assets/kanit-thai-900-normal-DBagMaJD.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-900-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-900-normal.woff2":{"file":"assets/kanit-thai-900-normal-BF0Ii47I.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-900-normal.woff2"},"virtual:$vinxi/handler/client":{"file":"assets/client-D_r--B-J.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_client-B42ABy-e.js"]}},"ssr":{"/Users/33devas/Downloads/work-stations/adventex-tanstack/app/styles/globals.css":{"file":"assets/globals-BUMEa2m7.css","src":"/Users/33devas/Downloads/work-stations/adventex-tanstack/app/styles/globals.css"},"_badge-DPD-9gux.js":{"file":"assets/badge-DPD-9gux.js","name":"badge","imports":["_ssr-Dg2tEgjp.js"]},"_blur-fade-CEpGLh_7.js":{"file":"assets/blur-fade-CEpGLh_7.js","name":"blur-fade"},"_calendar-BG4W8niy.js":{"file":"assets/calendar-BG4W8niy.js","name":"calendar","imports":["_ssr-Dg2tEgjp.js"]},"_card-DkDznRDU.js":{"file":"assets/card-DkDznRDU.js","name":"card","imports":["_ssr-Dg2tEgjp.js"]},"_index-2e5SzYaF.js":{"file":"assets/index-2e5SzYaF.js","name":"index","imports":["_ssr-Dg2tEgjp.js"]},"_page-hero-CzNFErjx.js":{"file":"assets/page-hero-CzNFErjx.js","name":"page-hero","imports":["_ssr-Dg2tEgjp.js"]},"_select-Bj-GuSd9.js":{"file":"assets/select-Bj-GuSd9.js","name":"select","imports":["_ssr-Dg2tEgjp.js"]},"_ssr-Dg2tEgjp.js":{"file":"assets/ssr-Dg2tEgjp.js","name":"ssr","dynamicImports":["app/routes/contact.tsx?tsr-split","app/routes/about.tsx?tsr-split","app/routes/about.tsx?tsr-split","app/routes/index.tsx?tsr-split","app/routes/tours/index.tsx?tsr-split","app/routes/tours/index.tsx?tsr-split","app/routes/blogs/index.tsx?tsr-split","app/routes/blogs/index.tsx?tsr-split","app/routes/tours/$tourId.tsx?tsr-split","app/routes/blogs/$blogId.tsx?tsr-split"],"assets":["assets/kanit-thai-100-normal-MVGvUIAQ.woff2","assets/kanit-thai-100-normal-CJ5enLc7.woff","assets/kanit-thai-200-normal-DW7yNy6Q.woff2","assets/kanit-thai-200-normal-nA0zF8Cg.woff","assets/kanit-thai-300-normal-BZx2gboJ.woff2","assets/kanit-thai-300-normal-9B7BJcjo.woff","assets/kanit-thai-400-normal-C27eAtU1.woff2","assets/kanit-thai-400-normal-Hyy0rknX.woff","assets/kanit-thai-500-normal-BDuJ4o_K.woff2","assets/kanit-thai-500-normal-DpGKNmIS.woff","assets/kanit-thai-600-normal-B951hBRC.woff2","assets/kanit-thai-600-normal-BXxKBrx-.woff","assets/kanit-thai-700-normal-lMuxtNHC.woff2","assets/kanit-thai-700-normal-CZrRvC_H.woff","assets/kanit-thai-800-normal-B0cvSpRm.woff2","assets/kanit-thai-800-normal-BAaQprJW.woff","assets/kanit-thai-900-normal-BF0Ii47I.woff2","assets/kanit-thai-900-normal-DBagMaJD.woff","assets/globals-BUMEa2m7.css"]},"_use-toast-CYhUVph2.js":{"file":"assets/use-toast-CYhUVph2.js","name":"use-toast"},"app/routes/about.tsx?tsr-split":{"file":"assets/about-BqKYHHhD.js","name":"about","src":"app/routes/about.tsx?tsr-split","isDynamicEntry":true,"imports":["_index-2e5SzYaF.js","_card-DkDznRDU.js","_blur-fade-CEpGLh_7.js","_page-hero-CzNFErjx.js","_ssr-Dg2tEgjp.js"]},"app/routes/blogs/$blogId.tsx?tsr-split":{"file":"assets/_blogId-BxHXRZr1.js","name":"_blogId","src":"app/routes/blogs/$blogId.tsx?tsr-split","isDynamicEntry":true,"imports":["_badge-DPD-9gux.js","_ssr-Dg2tEgjp.js","_select-Bj-GuSd9.js","_use-toast-CYhUVph2.js","_calendar-BG4W8niy.js"]},"app/routes/blogs/index.tsx?tsr-split":{"file":"assets/index-8ppc5UHZ.js","name":"index","src":"app/routes/blogs/index.tsx?tsr-split","isDynamicEntry":true,"imports":["_index-2e5SzYaF.js","_ssr-Dg2tEgjp.js","_badge-DPD-9gux.js","_card-DkDznRDU.js"]},"app/routes/contact.tsx?tsr-split":{"file":"assets/contact-jtLj_M2M.js","name":"contact","src":"app/routes/contact.tsx?tsr-split","isDynamicEntry":true,"imports":["_use-toast-CYhUVph2.js","_ssr-Dg2tEgjp.js","_blur-fade-CEpGLh_7.js"]},"app/routes/index.tsx?tsr-split":{"file":"assets/index-BcaqQp-Y.js","name":"index","src":"app/routes/index.tsx?tsr-split","isDynamicEntry":true,"imports":["_card-DkDznRDU.js","_ssr-Dg2tEgjp.js","_badge-DPD-9gux.js","_blur-fade-CEpGLh_7.js","_calendar-BG4W8niy.js"]},"app/routes/tours/$tourId.tsx?tsr-split":{"file":"assets/_tourId-BGxO_fRW.js","name":"_tourId","src":"app/routes/tours/$tourId.tsx?tsr-split","isDynamicEntry":true,"imports":["_ssr-Dg2tEgjp.js","_badge-DPD-9gux.js","_select-Bj-GuSd9.js","_use-toast-CYhUVph2.js","_calendar-BG4W8niy.js"]},"app/routes/tours/index.tsx?tsr-split":{"file":"assets/index-IMqa8d57.js","name":"index","src":"app/routes/tours/index.tsx?tsr-split","isDynamicEntry":true,"imports":["_index-2e5SzYaF.js","_ssr-Dg2tEgjp.js","_page-hero-CzNFErjx.js","_card-DkDznRDU.js"]},"node_modules/@fontsource/kanit/files/kanit-thai-100-normal.woff":{"file":"assets/kanit-thai-100-normal-CJ5enLc7.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-100-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-100-normal.woff2":{"file":"assets/kanit-thai-100-normal-MVGvUIAQ.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-100-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-200-normal.woff":{"file":"assets/kanit-thai-200-normal-nA0zF8Cg.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-200-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-200-normal.woff2":{"file":"assets/kanit-thai-200-normal-DW7yNy6Q.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-200-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-300-normal.woff":{"file":"assets/kanit-thai-300-normal-9B7BJcjo.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-300-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-300-normal.woff2":{"file":"assets/kanit-thai-300-normal-BZx2gboJ.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-300-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-400-normal.woff":{"file":"assets/kanit-thai-400-normal-Hyy0rknX.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-400-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-400-normal.woff2":{"file":"assets/kanit-thai-400-normal-C27eAtU1.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-400-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-500-normal.woff":{"file":"assets/kanit-thai-500-normal-DpGKNmIS.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-500-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-500-normal.woff2":{"file":"assets/kanit-thai-500-normal-BDuJ4o_K.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-500-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-600-normal.woff":{"file":"assets/kanit-thai-600-normal-BXxKBrx-.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-600-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-600-normal.woff2":{"file":"assets/kanit-thai-600-normal-B951hBRC.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-600-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-700-normal.woff":{"file":"assets/kanit-thai-700-normal-CZrRvC_H.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-700-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-700-normal.woff2":{"file":"assets/kanit-thai-700-normal-lMuxtNHC.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-700-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-800-normal.woff":{"file":"assets/kanit-thai-800-normal-BAaQprJW.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-800-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-800-normal.woff2":{"file":"assets/kanit-thai-800-normal-B0cvSpRm.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-800-normal.woff2"},"node_modules/@fontsource/kanit/files/kanit-thai-900-normal.woff":{"file":"assets/kanit-thai-900-normal-DBagMaJD.woff","src":"node_modules/@fontsource/kanit/files/kanit-thai-900-normal.woff"},"node_modules/@fontsource/kanit/files/kanit-thai-900-normal.woff2":{"file":"assets/kanit-thai-900-normal-BF0Ii47I.woff2","src":"node_modules/@fontsource/kanit/files/kanit-thai-900-normal.woff2"},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_ssr-Dg2tEgjp.js"]}},"server":{"_card.mjs":{"file":"card.mjs","name":"card"},"_input.mjs":{"file":"input.mjs","name":"input","imports":["_card.mjs"]},"_page-hero.mjs":{"file":"page-hero.mjs","name":"page-hero","imports":["_card.mjs"]},"app/routes/about.tsx?tsr-split":{"file":"c_9xkq4f.mjs","name":"c_9xkq4f","src":"app/routes/about.tsx?tsr-split","isEntry":true,"imports":["_card.mjs","_page-hero.mjs"]},"app/routes/blogs/index.tsx?tsr-split":{"file":"c_3fv3ai.mjs","name":"c_3fv3ai","src":"app/routes/blogs/index.tsx?tsr-split","isEntry":true,"imports":["_card.mjs","_input.mjs"]},"app/routes/tours/index.tsx?tsr-split":{"file":"c_1bbm5aw.mjs","name":"c_1bbm5aw","src":"app/routes/tours/index.tsx?tsr-split","isEntry":true,"imports":["_card.mjs","_input.mjs","_page-hero.mjs"]},"virtual:$vinxi/handler/server":{"file":"entry.mjs","name":"entry","src":"virtual:$vinxi/handler/server","isEntry":true}}};

				const routeManifest = {};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig$1);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @param {string[]} stack Stack of chunk ids to prevent circular dependencies
 * @returns Array of asset URLs
 */
function findAssetsInViteManifest(manifest, id, assetMap = new Map(), stack = []) {
	if (stack.includes(id)) {
		return [];
	}

	const cached = assetMap.get(id);
	if (cached) {
		return cached;
	}
	const chunk = manifest[id];
	if (!chunk) {
		return [];
	}

	const assets = [
		...(chunk.assets?.filter(Boolean) || []),
		...(chunk.css?.filter(Boolean) || [])
	];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			assets.push(...findAssetsInViteManifest(manifest, chunk.imports[i], assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);

	return all;
}

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", fetchPriority: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

function z(e,t,r){return Object.assign(e,{url:"https://localhost:3000"})}function C$1(e){return e instanceof Headers?new Headers(e):Array.isArray(e)?new Headers(e):typeof e=="object"?new Headers(e):new Headers}function N$2(...e){return e.reduce((t,r)=>{const n=C$1(r);for(const[a,s]of n.entries())t.set(a,s);return t},new Headers)}const b=[];function v$1(e,t){const r=t||e||{};return typeof r.method>"u"&&(r.method="GET"),{options:r,middleware:n=>v$1(void 0,Object.assign(r,{middleware:n})),validator:n=>v$1(void 0,Object.assign(r,{validator:n})),handler:(...n)=>{const[a,s]=n;Object.assign(r,{...a,extractedFn:a,serverFn:s}),g$2(a.url,"createServerFn must be called with a function that is marked with the 'use server' pragma. Are you using the @tanstack/start-vite-plugin ?");const o=[...r.middleware||[],_$1(r)];return Object.assign(async d=>h(o,"client",{...a,method:r.method,data:d?.data,headers:d?.headers,context:Object.assign({},a)}).then(i=>i.result),{...a,__executeServer:d=>{const i=d instanceof FormData?F$3(d):d;return h(o,"server",{...a,...i}).then(u=>({result:u.result,context:u.sendContext}))}})}}}function F$3(e){const t=e.get("__TSR_CONTEXT");if(e.delete("__TSR_CONTEXT"),typeof t!="string")return {context:{},data:e};try{return {context:defaultTransformer.parse(t),data:e}}catch{return {data:e}}}function O$3(e){const t=new Set,r=[],n=a=>{a.forEach(s=>{s.options.middleware&&n(s.options.middleware),t.has(s)||(t.add(s),r.push(s));});};return n(e),r}const w$1=(e,t,r)=>e({data:t.data,context:t.context,sendContext:t.sendContext,method:t.method,next:n=>{const a={...t.context,...n?.context},s={...t.sendContext,...n?.sendContext??{}},o=N$2(t.headers,n?.headers);return r({method:t.method,data:t.data,context:a,sendContext:s,headers:o,result:n?.result??t.result})}});function T$1(e,t){if(e==null)return {};if("~standard"in e){const r=e["~standard"].validate(t);if(r instanceof Promise)throw new Error("Async validation not supported");if(r.issues)throw new Error(JSON.stringify(r.issues,void 0,2));return r.value}if("parse"in e)return e.parse(t);if(typeof e=="function")return e(t);throw new Error("Invalid validator type!")}async function h(e,t,r){const n=O$3([...b,...e]),a=async s=>{const o=n.shift();if(!o)return s;o.options.validator&&(t!=="client"||o.options.validateClient)&&(s.data=await T$1(o.options.validator,s.data));const d=t==="client"?o.options.client:o.options.server;return d?w$1(d,s,async i=>{if(t==="client"&&o.options.clientAfter){const u=await a(i);return w$1(o.options.clientAfter,u,p=>p)}return a(i)}):a(s)};return a({...r,headers:r.headers||{},sendContext:r.sendContext||{},context:r.context||{}})}function _$1(e){return {_types:void 0,options:{validator:e.validator,validateClient:e.validateClient,client:async({next:t,sendContext:r,...n})=>{var a;const s=await((a=e.extractedFn)==null?void 0:a.call(e,{...n,context:r}));return t(s)},server:async({next:t,...r})=>{var n;const a=await((n=e.serverFn)==null?void 0:n.call(e,r));return t({result:a})}}}}function f$1(...e){return twMerge(clsx(e))}const H$4=m$5.forwardRef(({className:e,...t},r)=>jsx("div",{ref:r,className:f$1("rounded-xl border bg-card text-card-foreground shadow",e),...t}));H$4.displayName="Card";const M=m$5.forwardRef(({className:e,...t},r)=>jsx("div",{ref:r,className:f$1("flex flex-col space-y-1.5 p-6",e),...t}));M.displayName="CardHeader";const j$2=m$5.forwardRef(({className:e,...t},r)=>jsx("div",{ref:r,className:f$1("font-semibold leading-none tracking-tight",e),...t}));j$2.displayName="CardTitle";const S$2=m$5.forwardRef(({className:e,...t},r)=>jsx("div",{ref:r,className:f$1("text-sm text-muted-foreground",e),...t}));S$2.displayName="CardDescription";const E$2=m$5.forwardRef(({className:e,...t},r)=>jsx("div",{ref:r,className:f$1("p-6 pt-0",e),...t}));E$2.displayName="CardContent";const A$3=m$5.forwardRef(({className:e,...t},r)=>jsx("div",{ref:r,className:f$1("flex items-center p-6 pt-0",e),...t}));A$3.displayName="CardFooter";

const n=({children:e,className:a,ref:r,...o})=>jsx("section",{ref:r,className:f$1("relative mb-8",a),...o,children:e});n.displayName="PageHero";const m$3=({children:e,className:a,...r})=>jsx("div",{className:"overflow-hidden",children:jsx("div",{className:f$1("flex flex-col",a),...r,children:e})});m$3.displayName="PageHeroContent";const c$2=({children:e,className:a,...r})=>jsx("div",{className:f$1("min-w-0 shrink-0 grow-0 basis-full",a),...r,children:e});c$2.displayName="PageHeroItem";const g=({src:e,alt:a,className:r,...o})=>jsx("div",{className:"min-w-0 shrink-0 grow-0 basis-full",children:jsx("img",{src:e,alt:a,className:f$1("size-full rounded-lg object-contain",r),...o})});g.displayName="PageHeroImage";const d$3=({children:e,className:a,...r})=>jsx("div",{className:f$1("p-4",a),...r,children:e});d$3.displayName="PageHeroText";const p$1=({children:e,className:a,...r})=>jsx("h1",{className:f$1("mb-4 text-4xl font-bold",a),...r,children:e});p$1.displayName="PageHeroTitle";const N$1=({children:e,className:a,...r})=>jsx("p",{className:f$1("max-w-[50ch] pb-4 text-lg font-light leading-relaxed text-gray-600",a),...r,children:e});N$1.displayName="PageHeroDescription";const P$4=()=>jsxs(m$5.Fragment,{children:[jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.1),transparent_50%)]"}),jsx("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,34,0.05),transparent_50%)]"})]});P$4.displayName="PageHeroFooter";

const G$3=[{name:"สมศรี จันทร์เด่น",role:"ผู้ก่อตั้งและซีอีโอ",image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330",bio:"ด้วยประสบการณ์กว่า 15 ปีในอุตสาหกรรมการท่องเที่ยว สมศรีได้ก่อตั้ง Wanderlust ด้วยวิสัยทัศน์ในการสร้างประสบการณ์การท่องเที่ยวที่มีความหมาย"},{name:"มานพ เฉิน",role:"หัวหน้าฝ่ายปฏิบัติการ",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",bio:"มานพดูแลให้ทุกทริปดำเนินไปอย่างราบรื่น ตั้งแต่การวางแผนจนถึงการดำเนินการ ด้วยประสบการณ์อันยาวนานในด้านการจัดการการท่องเที่ยว"},{name:"เอมมี่ วิลสัน",role:"หัวหน้าฝ่ายจัดทัวร์",image:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80",bio:"ความหลงใหลในการค้นพบสถานที่ซ่อนเร้นและประสบการณ์ที่แท้จริงของเอมมี่ช่วยสร้างการเดินทางที่น่าจดจำสำหรับลูกค้าของเรา"}],U$3=T$2.Root,i=({children:r,className:n,variant:a,duration:o=.4,delay:h=0,yOffset:s=6,inView:u=!1,inViewMargin:g="-50px",blur:b="6px"})=>{const l=m$5.useRef(null),f=useInView(l,{once:!0,margin:g}),x=!u||f,v={hidden:{y:s,opacity:0,filter:`blur(${b})`},visible:{y:-s,opacity:1,filter:"blur(0px)"}},N=a||v;return jsx(AnimatePresence,{children:jsx(motion.div,{ref:l,initial:"hidden",animate:x?"visible":"hidden",exit:"hidden",variants:N,transition:{delay:.04+h,duration:o,ease:"easeOut"},className:n,children:r})})},W$3=()=>Promise.resolve().then(()=>p),k$1=()=>Promise.resolve().then(()=>p),c$1=createFileRoute("/about")({head:()=>({meta:[{title:"เกี่ยวกับเรา : บริษัท แอดแวนซ์เท็ก จำกัด : ศูนย์รวมทัวร์ที่ดีที่สุด"}]}),component:lazyRouteComponent(k$1,"component",()=>c$1.ssr),loader:lazyFn(W$3,"loader")});function q$1(){return G$3}const m$2=v$1({method:"GET"}).handler(z(d$2),()=>q$1()),J$3=function(){const n$1=c$1.useLoaderData();return jsxs("article",{className:"container mx-auto grid gap-8 p-4 lg:gap-16",children:[jsxs(n,{children:[jsx(m$3,{children:jsxs(c$2,{children:[jsx(g,{src:"/images/shared/about-me-hero.png",alt:"About Us"}),jsx(d$3,{children:jsxs(i,{children:[jsx(p$1,{children:"เกี่ยวกับเรา"}),jsx(N$1,{children:"แอดเวนเท็กซ์ คือศูนย์รวมทัวร์และแพ็คเกจทัวร์หลากหลายเส้นทาง เรามีความมุ่งมั่นที่จะให้บริการลูกค้าด้วยความจริงใจ ไม่ว่าจะเป็นโปรแกรมเดินทาง และราคาทัวร์ที่ดีที่สุด และมีคุณภาพตามความต้องการของลูกค้า เราเป็นบริษัทที่จดทะเบียนถูกต้องตามกฎหมาย และได้รับใบอนุญาตประกอบธุรกิจนำเที่ยวประเภทนิติบุคคล จดทะเบียนภายใต้บริษัทธัญ โฮลดิ้ง จำกัด ซึ่งเป็นบริษัทที่ประกอบธุรกิจโรงแรมหลายแห่งในประเทศไทย และมีทุนจดทะเบียนอยู่ที่ 203,000,000 บาท"})]})})]})}),jsx(P$4,{})]}),jsx("section",{className:"rounded-lg bg-gray-50 py-16",children:jsx("div",{className:"container mx-auto px-4",children:jsx("div",{className:"mx-auto max-w-3xl text-center",children:jsxs(i,{children:[jsx("h2",{className:"mb-6 text-3xl font-bold",children:"พันธกิจของเรา"}),jsx("p",{className:"text-lg leading-relaxed text-muted-foreground",children:"เราจะดูแลท่านด้วยความเอาใจใส่ในทุกรายละเอียด ตั้งแต่ขั้นตอนการจัดสรรโปรแกรมการเดินทางที่ให้เหมาะสมกับความต้องการ และงบประมาณไปจนถึงการบริการหลังการขายที่มุ่งเน้นให้ทุกคนที่เดินทางกับเราได้ประสบการณ์เดินทางที่ประทับใจที่สุด ดังนั้นเราจึงมีความพร้อมเป็นอย่างยิ่งที่จะรับใช้ทุกท่านด้วยใจที่รักในงานบริการอย่างเต็มเปี่ยม"})]})})})}),jsx("section",{className:"bg-white py-16",children:jsxs("div",{className:"container mx-auto px-4",children:[jsx("h2",{className:"mb-12 text-center text-3xl font-bold",children:"พบกับทีมของเรา"}),jsx("div",{className:"grid gap-8 md:grid-cols-3",children:n$1.map((a,o)=>jsx(i,{delay:.1*o,children:jsxs(H$4,{className:"size-full overflow-hidden",children:[jsx(U$3,{ratio:4/3,children:jsx("img",{src:a.image,alt:a.name,className:"size-full object-cover"})}),jsxs(E$2,{className:"p-6",children:[jsx(j$2,{className:"mb-1 text-xl",children:a.name}),jsx(S$2,{className:"mb-4 text-primary",children:a.role}),jsx("p",{className:"text-muted-foreground",children:a.bio})]})]})},o))})]})})]})},K$2=async()=>await m$2();function d$2(r){return m$2.__executeServer(r)}const p=Object.freeze(Object.defineProperty({__proto__:null,$$function0:d$2,component:J$3,loader:K$2},Symbol.toStringTag,{value:"Module"}));

const mod_0_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: d$2,
	component: J$3,
	loader: K$2
});

const c=cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),f=m$5.forwardRef(({className:e,variant:t,size:r,asChild:o=!1,...a},d)=>jsx(o?Slot:"button",{className:f$1(c({variant:t,size:r,className:e})),ref:d,...a}));f.displayName="Button";const m$1=m$5.forwardRef(({className:e,type:t,...r},o)=>jsx("input",{type:t,className:f$1("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:o,...r}));m$1.displayName="Input";

const $$2=[{id:"1",title:"สำรวจสวรรค์บาหลี: การเดินทางผ่านเกาะแห่งเทพเจ้า",excerpt:"ค้นพบความมหัศจรรย์ของบาหลีผ่านการผจญภัย 10 วันที่คัดสรรมาอย่างพิถีพิถัน พาคุณไปตั้งแต่ชายหาดที่บริสุทธิ์ไปจนถึงวัดโบราณ",coverImage:"https://images.unsplash.com/photo-1537996194471-e657df975ab4",category:"จุดหมายปลายทาง",readTime:"อ่าน 5 นาที",publishDate:"2024-03-15",author:{name:"ซาร่า จอห์นสัน",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330"}},{id:"2",title:"วัฒนธรรมญี่ปุ่น: การผสมผสานระหว่างดั้งเดิมและสมัยใหม่",excerpt:"สัมผัสการผสมผสานที่ลงตัวระหว่างประเพณีโบราณและความมหัศจรรย์สมัยใหม่ในดินแดนอาทิตย์อุทัย",coverImage:"https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",category:"วัฒนธรรม",readTime:"อ่าน 4 นาที",publishDate:"2024-03-14",author:{name:"ไมเคิล เชน",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"}},{id:"3",title:"เกาะกรีก: สวรรค์แห่งทะเลเมดิเตอร์เรเนียน",excerpt:"การผจญภัยข้ามเกาะผ่านน้ำทะเลใสของทะเลอีเจียน สำรวจซากปรักหักพังโบราณและชายหาดที่สวยงาม",coverImage:"https://images.unsplash.com/photo-1533105079780-92b9be482077",category:"การผจญภัย",readTime:"อ่าน 6 นาที",publishDate:"2024-03-13",author:{name:"เอ็มม่า วิลสัน",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80"}}],R$2=cva("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function _({className:t,variant:o,...r}){return jsx("div",{className:f$1(R$2({variant:o}),t),...r})}const F$2=({blog:t})=>jsx(H$4,{className:"overflow-hidden transition-shadow hover:shadow-lg",children:jsxs("div",{className:"grid gap-6 md:grid-cols-2",children:[jsx("div",{className:"relative aspect-[16/9] md:aspect-auto",children:jsx("img",{src:t.coverImage,alt:t.title,className:"absolute inset-0 size-full object-cover"})}),jsxs("div",{className:"flex flex-col p-6",children:[jsxs(M,{className:"p-0",children:[jsxs("div",{className:"mb-3 flex items-center gap-2",children:[jsx(_,{variant:"secondary",children:t.category}),jsxs("div",{className:"flex items-center text-sm text-muted-foreground",children:[jsx(Clock,{className:"mr-1 size-4"}),t.readTime]})]}),jsx("h2",{className:"mb-2 text-2xl font-bold",children:t.title})]}),jsxs(E$2,{className:"p-0",children:[jsx("p",{className:"mb-4 text-muted-foreground",children:t.excerpt}),jsxs("div",{className:"flex items-center gap-3",children:[jsx("img",{src:t.author.avatar,alt:t.author.name,className:"size-10 rounded-full object-cover"}),jsxs("div",{children:[jsx("p",{className:"font-medium",children:t.author.name}),jsxs("div",{className:"flex items-center text-sm text-muted-foreground",children:[jsx(Calendar,{className:"mr-1 size-4"}),new Intl.DateTimeFormat("th-TH",{month:"long",day:"numeric",year:"numeric"}).format(new Date(t.publishDate))]})]})]})]}),jsx(A$3,{className:"mt-6 p-0",children:jsx(f,{asChild:!0,children:jsx(Link,{to:`/blogs/${t.id}`,children:"อ่านเพิ่มเติม"})})})]})]})}),k=[{id:"all",name:"บทความทั้งหมด"},{id:"destinations",name:"จุดหมายปลายทาง"},{id:"learning",name:"การเรียนรู้"},{id:"culture",name:"วัฒนธรรม"},{id:"tips",name:"เคล็ดลับการท่องเที่ยว"},{id:"food",name:"อาหารและการกิน"}],P$3=({selectedCategory:t,onSelectCategory:o})=>jsxs("div",{className:"rounded-lg border bg-white p-6",children:[jsx("h2",{className:"mb-4 font-semibold",children:"หมวดหมู่"}),jsx("ul",{className:"space-y-2",children:k.map(r=>jsx("li",{children:jsx(f,{variant:t===r.id?"default":"ghost",className:"w-full justify-start",onClick:()=>o(r.id),children:r.name})},r.id))})]}),H$3=()=>Promise.resolve().then(()=>u),O$2=()=>Promise.resolve().then(()=>u),l$1=createFileRoute("/blogs/")({component:lazyRouteComponent(O$2,"component",()=>l$1.ssr),loader:lazyFn(H$3,"loader")});async function Q$1(){return $$2}const d$1=v$1({method:"GET"}).handler(z(m),()=>Q$1()),V$2=function(){const[o,r]=m$5.useState(""),[n,h]=m$5.useState("all"),p=l$1.useLoaderData().filter(s=>{const g=s.title.toLowerCase().includes(o.toLowerCase())||s.excerpt.toLowerCase().includes(o.toLowerCase()),f=n==="all"||s.category.toLowerCase()===n.toLowerCase();return g&&f});return jsxs("article",{className:"min-h-screen bg-gray-50",children:[jsx("section",{className:"border-b bg-white",children:jsxs("div",{className:"container mx-auto px-4 py-16 text-center",children:[jsx("h1",{className:"mb-4 text-4xl font-bold",children:"เรื่องราวและข้อมูลเชิงลึกการท่องเที่ยว"}),jsx("p",{className:"mx-auto mb-8 max-w-[53ch] text-lg text-muted-foreground",children:"ค้นพบเคล็ดลับการท่องเที่ยว ข้อมูลเชิงลึกทางวัฒนธรรม และคู่มือแนะนำโดยละเอียด เพื่อช่วยคุณวางแผนการผจญภัยครั้งต่อไป"}),jsxs("div",{className:"relative mx-auto max-w-lg",children:[jsx(Search,{className:"absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"}),jsx(m$1,{placeholder:"\\u0E04\\u0E49\\u0E19\\u0E2B\\u0E32\\u0E1A\\u0E17\\u0E04\\u0E27\\u0E32\\u0E21...",className:"pl-9",value:o,onChange:s=>r(s.target.value)})]})]})}),jsx("section",{className:"container mx-auto px-4 py-12",children:jsxs("div",{className:"grid grid-cols-1 gap-8 lg:grid-cols-4",children:[jsx("aside",{className:"lg:col-span-1",children:jsx("div",{className:"sticky top-24",children:jsx(P$3,{selectedCategory:n,onSelectCategory:h})})}),jsxs("div",{className:"lg:col-span-3",children:[jsx("div",{className:"grid gap-8",children:p.map(s=>jsx(F$2,{blog:s},s.id))}),jsx("div",{className:"mt-12 text-center",children:jsx(f,{variant:"outline",size:"lg",children:"โหลดบทความเพิ่มเติม"})})]})]})})]})},A$2=async()=>await d$1();function m(t){return d$1.__executeServer(t)}const u=Object.freeze(Object.defineProperty({__proto__:null,$$function0:m,component:V$2,loader:A$2},Symbol.toStringTag,{value:"Module"}));

const mod_1_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: m,
	component: V$2,
	loader: A$2
});

const ze=[{id:"1",type:"study",tourCode:"ADWINTER2024",title:"เรียนจีน เที่ยวหิมะเมืองหนาว",description:"เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",image:"/images/tours/ADWINTER2024.webp",duration:"27 days",prices:{default:55900},location:"เมืองฮาร์บิน"},{id:"2",type:"study",tourCode:"ADSPRING2W2025",title:"เรียนจีน เที่ยวจีน",description:"เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",image:"/images/tours/ADSPRING2W2025.png",duration:"14 days",prices:{default:46900},location:"เมืองฮาร์บิน"},{id:"3",type:"study",tourCode:"ADSTUDYMAR2W2025",title:"เรียนจีน",description:"โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",image:"/images/tours/ADSTUDYMAR2W2025.png",duration:"14 days",prices:{default:39900},location:"เมืองฮาร์บิน"},{id:"4",type:"study",tourCode:"ADSPRING3W2025",title:"เรียนจีน เที่ยวจีน",description:"เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",image:"/images/tours/ADSTUDYMAR3W2025.png",duration:"21 days",prices:{default:43900},location:"เมืองฮาร์บิน"},{id:"5",type:"study",tourCode:"ADSTUDYMAR3W2025",title:"เรียนจีน",description:"โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",image:"/images/tours/ADSTUDYMAR3W2025.png",duration:"21 days",prices:{default:43900},location:"เมืองฮาร์บิน"},{id:"6",type:"study",tourCode:"ADSTUDYMAR1M2025",title:"เรียนจีน",description:"โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",image:"/images/tours/ADSTUDYMAR1M2025.png",duration:"30 days",prices:{default:49900},location:"เมืองฮาร์บิน"},{id:"7",type:"study",tourCode:"ADSTUDYMAR2M2025",title:"เรียนจีน",description:"โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",image:"/images/tours/ADSTUDYMAR2M2025.png",duration:"60 days",prices:{default:59900},location:"เมืองฮาร์บิน"},{id:"8",type:"study",tourCode:"ADSTUDYMAR3M2025",title:"เรียนจีน",description:"โครงการเรียนต่อภาษาจีนกับ มหาวิทยาลัยเทคโนโลยีฮาร์บิน หนึ่งในมหาวิทยาลัยชั้นนำของประเทศจีน มีชื่อเสียงในด้านการวิจัยและการศึกษาในสาขาวิทยาศาสตร์และเทคโนโลยี ก่อตั้งขึ้นในปี 1920 และเป็นหนึ่งในมหาวิทยาลัยกลุ่ม C9 League ด้วยการเรียนการสอนเป็นแบบการพูด ฟัง อ่าน และการเขียน  พร้อมเปิดประสบการณ์เรียนมหาวิทยาลัยดัง Top 10 ของประเทศจีน Harbin Institute of Technology มหาวิทยาลัยชื่อดังของจีน",image:"/images/tours/ADSTUDYMAR3M2025.png",duration:"90 days",prices:{default:79900},location:"เมืองฮาร์บิน"},{id:"9",type:"study",tourCode:"ADSUMMER2025",title:"เรียนจีน เที่ยวจีน",description:"เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",image:"/images/tours/ADSUMMER2025.png",duration:"27 days",prices:{default:53900},location:"เมืองฮาร์บิน"},{id:"10",type:"study",tourCode:"ADWINTER2025",title:"เรียนจีน เที่ยวจีน",description:"เรียนภาษาจีนกับมหาวิทยาลัย HIT พร้อมการเรียนการสอนแบบ พูด ฟัง อ่าน และเขียน พร้อมเปิดประสบการณ์เที่ยวสถานที่ดังเมืองฮาร์บิน ชมเมืองหิมะเมืองหนาว ฉลองปีใหม่กับเมืองหิมะ - แม่น้ำซงฮวาเจียง - ถนนคนเดินจงหยาง - เมืองเก่าฮาร์บิน - สวนสาธารณะดนตรี - นั่งกระเช้าข้ามแม่น้ำซงหัว - พิพิธภัณฑ์เฮยหลงเจียง",image:"/images/tours/ADWINTER2025.webp",duration:"27 days",prices:{default:55900},location:"เมืองฮาร์บิน"},{id:"11",type:"study",tourCode:"ADSTUDYMAR2W2025",title:"เรียนจีน",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDYMAR2W2025.png",duration:"14 days",prices:{shared:39900,single:41900},location:"เมืองฮาร์บิน"},{id:"12",type:"study",tourCode:"ADSTUDYMAR3W2025",title:"เรียนจีน",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDYMAR3W2025.png",duration:"21 days",prices:{shared:41900,single:45900},location:"เมืองฮาร์บิน"},{id:"13",type:"study",tourCode:"ADSTUDYMAR1M2025",title:"เรียนจีน",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDYMAR1M2025.png",duration:"30 days",prices:{shared:47900,single:50900},location:"เมืองฮาร์บิน"},{id:"14",type:"study",tourCode:"ADSTUDYMAR2M2025",title:"เรียนจีน",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDYMAR2M2025.png",duration:"60 days",prices:{shared:62900,single:65900},location:"เมืองฮาร์บิน"},{id:"15",type:"study",tourCode:"ADSTUDYMAR3M2025",title:"เรียนจีน",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDYMAR3M2025.png",duration:"90 days",prices:{shared:79900,single:89900},location:"เมืองฮาร์บิน"},{id:"16",type:"study",tourCode:"ADSTUDY1YNORMAL",title:"เรียนจีน",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDY1YNORMAL.png",duration:"1 year",prices:{default:149900},location:"เมืองฮาร์บิน"},{id:"17",type:"study",tourCode:"ADSTUDY1YHIT",title:"เรียนจีนระยะยาว",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDY1YHIT.png",duration:"1 year",prices:{default:179900},location:"เมืองฮาร์บิน"},{id:"18",type:"study",tourCode:"ADSTUDY1TNORMAL",title:"เรียนภาษาจีน",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDY1TNORMAL.png",duration:"1 term",prices:{shared:89900,single:109900},location:"เมืองฮาร์บิน"},{id:"19",type:"study",tourCode:"ADSTUDY1THIT",title:"เรียนภาษาจีน",description:"Harbin Normal University มหาวิทยาลัยใจกลางเมืองฮาร์บิน เป็นมหาวิทยาลัยที่มีชื่อเสียงในฮาร์บิน ประเทศจีน มหาวิทยาลัยนี้มีบทบาทสำคัญในการผลิตครูและบุคลากรทางการศึกษาที่มีคุณภาพสูง",image:"/images/tours/ADSTUDY1THIT.png",duration:"1 term",prices:{default:99900},location:"เมืองฮาร์บิน"}],W$2=({className:a,...t})=>jsx("nav",{role:"navigation","aria-label":"pagination",className:f$1("mx-auto flex w-full justify-center",a),...t});W$2.displayName="Pagination";const E$1=m$5.forwardRef(({className:a,...t},i)=>jsx("ul",{ref:i,className:f$1("flex flex-row items-center gap-1",a),...t}));E$1.displayName="PaginationContent";const x=m$5.forwardRef(({className:a,...t},i)=>jsx("li",{ref:i,className:f$1("",a),...t}));x.displayName="PaginationItem";const A$1=({className:a,isActive:t,size:i="icon",...n})=>jsx("a",{"aria-current":t?"page":void 0,className:f$1(c({variant:t?"outline":"ghost",size:i}),a),...n});A$1.displayName="PaginationLink";const P$2=({className:a,...t})=>jsxs(A$1,{"aria-label":"Go to previous page",size:"default",className:f$1("gap-1 pl-2.5",a),...t,children:[jsx(ChevronLeft,{className:"h-4 w-4"}),jsx("span",{children:"ก่อนหน้า"})]});P$2.displayName="PaginationPrevious";const I$2=({className:a,...t})=>jsxs(A$1,{"aria-label":"Go to next page",size:"default",className:f$1("gap-1 pr-2.5",a),...t,children:[jsx("span",{children:"ถัดไป"}),jsx(ChevronRight,{className:"h-4 w-4"})]});I$2.displayName="PaginationNext";const j$1=({className:a,...t})=>jsxs("span",{"aria-hidden":!0,className:f$1("flex h-9 w-9 items-center justify-center",a),...t,children:[jsx(MoreHorizontal,{className:"h-4 w-4"}),jsx("span",{className:"sr-only",children:"More pages"})]});j$1.displayName="PaginationEllipsis";const _e$1=m$6.Root,We=m$6.Trigger,Ee=m$6.Portal,F$1=m$5.forwardRef(({className:a,...t},i)=>jsx(m$6.Overlay,{className:f$1("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...t,ref:i}));F$1.displayName=m$6.Overlay.displayName;const je=cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),O$1=m$5.forwardRef(({side:a="right",className:t,children:i,...n},c)=>jsxs(Ee,{children:[jsx(F$1,{}),jsxs(m$6.Content,{ref:c,className:f$1(je({side:a}),t),...n,children:[jsxs(m$6.Close,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",children:[jsx(X$2,{className:"h-4 w-4"}),jsx("span",{className:"sr-only",children:"Close"})]}),i]})]}));O$1.displayName=m$6.Content.displayName;const G$2=({className:a,...t})=>jsx("div",{className:f$1("flex flex-col space-y-2 text-center sm:text-left",a),...t});G$2.displayName="SheetHeader";const V$1=m$5.forwardRef(({className:a,...t},i)=>jsx(m$6.Title,{ref:i,className:f$1("text-lg font-semibold text-foreground",a),...t}));V$1.displayName=m$6.Title.displayName;const $$1=m$5.forwardRef(({className:a,...t},i)=>jsx(m$6.Description,{ref:i,className:f$1("text-sm text-muted-foreground",a),...t}));$$1.displayName=m$6.Description.displayName;const Fe=y.Root,T=m$5.forwardRef(({className:a,...t},i)=>jsx(y.Item,{ref:i,className:f$1("border-b",a),...t}));T.displayName="AccordionItem";const C=m$5.forwardRef(({className:a,children:t,...i},n)=>jsx(y.Header,{className:"flex",children:jsxs(y.Trigger,{ref:n,className:f$1("flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...i,children:[t,jsx(ChevronDown,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));C.displayName=y.Trigger.displayName;const R$1=m$5.forwardRef(({className:a,children:t,...i},n)=>jsx(y.Content,{ref:n,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...i,children:jsx("div",{className:f$1("pb-4 pt-0",a),children:t})}));R$1.displayName=y.Content.displayName;const B$1=m$5.forwardRef(({className:a,...t},i)=>jsx(M$1.Root,{ref:i,className:f$1("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",a),...t,children:jsx(M$1.Indicator,{className:f$1("flex items-center justify-center text-current"),children:jsx(Check,{className:"h-4 w-4"})})}));B$1.displayName=M$1.Root.displayName;const Oe=cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),U$2=m$5.forwardRef(({className:a,...t},i)=>jsx(z$1.Root,{ref:i,className:f$1(Oe(),a),...t}));U$2.displayName=z$1.Root.displayName;const Q=m$5.forwardRef(({className:a,orientation:t="horizontal",decorative:i=!0,...n},c)=>jsx(_$2.Root,{ref:c,decorative:i,orientation:t,className:f$1("shrink-0 bg-border",t==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",a),...n}));Q.displayName=_$2.Root.displayName;const q=m$5.forwardRef(({className:a,...t},i)=>jsxs(v$2.Root,{ref:i,className:f$1("relative flex w-full touch-none select-none items-center",a),...t,children:[jsx(v$2.Track,{className:"relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20",children:jsx(v$2.Range,{className:"absolute h-full bg-primary"})}),jsx(v$2.Thumb,{className:"block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"})]}));q.displayName=v$2.Root.displayName;const S$1=m$5.forwardRef(({className:a,id:t,title:i,checked:n,onChange:c,...o},u)=>jsxs("li",{ref:u,className:f$1("flex items-center gap-2",a),...o,children:[jsx(B$1,{id:t,className:"border-muted-foreground shadow-none data-[state=checked]:border-primary data-[state=checked]:bg-primary",checked:n,onCheckedChange:h=>c(h)}),jsx(U$2,{htmlFor:t,className:"text-sm font-normal leading-none",children:i})]}));S$1.displayName="ListItem";const Ge=[{id:"all",title:"แพ็คเกจทั้งหมด",checked:!0},{id:"study",title:"แพ็คเกจเรียนต่อ",checked:!1},{id:"travel",title:"แพ็คเกจท่องเที่ยว",checked:!1}],Ve=[{id:"all",title:"เมืองทั้งหมด",checked:!0},{id:"harbin",title:"เมืองฮาร์บิน",checked:!1},{id:"shanghai",title:"เมืองเซี่ยงไฮ้",checked:!1},{id:"chengdu",title:"เมืองเฉิงตู",checked:!1},{id:"beijing",title:"เมืองปักกิ่ง",checked:!1},{id:"guangzhou",title:"เมืองกว่างโจว",checked:!1},{id:"chongqing",title:"เมืองฉงชิ่ง",checked:!1}],$e$1=[{id:"all",title:"เดือนทั้งหมด",checked:!0},{id:"1",title:"มกราคม",checked:!1},{id:"2",title:"กุมภาพันธ์",checked:!1},{id:"3",title:"มีนาคม",checked:!1},{id:"4",title:"เมษายน",checked:!1},{id:"5",title:"พฤษภาคม",checked:!1},{id:"6",title:"มิถุนายน",checked:!1},{id:"7",title:"กรกฎาคม",checked:!1},{id:"8",title:"สิงหาคม",checked:!1},{id:"9",title:"กันยายน",checked:!1},{id:"10",title:"ตุลาคม",checked:!1},{id:"11",title:"พฤศจิกายน",checked:!1},{id:"12",title:"ธันวาคม",checked:!1}],Be=[{id:"all",title:"กิจกรรมทั้งหมด",checked:!0},{id:"short",title:"เรียนต่อระยะสั้น",checked:!1},{id:"long",title:"เรียนต่อระยะยาว",checked:!1}],K$1=()=>{const[i,n]=m$5.useState({priceRange:[0,2e5]}),c=o=>{const u={...i,priceRange:o};n(u);};return jsxs("div",{className:"space-y-6",children:[jsxs("div",{className:"flex flex-col gap-2",children:[jsx(U$2,{className:"text-sm font-semibold leading-none",children:"ช่วงราคา"}),jsxs("div",{className:"flex items-center gap-2",children:[jsx(m$1,{type:"number",value:i.priceRange[0],onChange:o=>c([+o.target.value,i.priceRange[1]]),className:"w-24 rounded-md border px-3 py-2"}),jsx("span",{className:"font-normal text-muted-foreground",children:"-"}),jsx(m$1,{type:"number",value:i.priceRange[1],onChange:o=>c([i.priceRange[0],+o.target.value]),className:"w-24 rounded-md border px-3 py-2"})]}),jsx("div",{className:"pt-2",children:jsx(q,{min:0,max:2e5,step:1e3,value:i.priceRange,onValueChange:c,className:"w-full cursor-grab"})})]}),jsx(Q,{className:"text-muted-foreground"}),jsxs(Fe,{type:"multiple",className:"w-full",defaultValue:["item-1"],children:[jsxs(T,{value:"item-1",className:"border-none",children:[jsx(C,{className:"text-sm font-normal leading-none text-muted-foreground hover:no-underline",children:"แพ็คเกจ"}),jsx(R$1,{children:jsx("ul",{className:"space-y-2",children:Ge.map(o=>jsx(S$1,{...o,checked:o.checked,onChange:()=>{}},o.id))})})]}),jsxs(T,{value:"item-2",className:"border-none",children:[jsx(C,{className:"text-sm font-normal leading-none text-muted-foreground hover:no-underline",children:"เมือง"}),jsx(R$1,{children:jsx("ul",{className:"h-24 space-y-2 overflow-y-auto",children:Ve.map(o=>jsx(S$1,{...o,checked:o.checked,onChange:()=>{}},o.id))})})]}),jsxs(T,{value:"item-3",className:"border-none",children:[jsx(C,{className:"text-sm font-normal leading-none text-muted-foreground hover:no-underline",children:"เดือน"}),jsx(R$1,{children:jsx("ul",{className:"h-24 space-y-2 overflow-y-auto",children:$e$1.map(o=>jsx(S$1,{...o,checked:o.checked,onChange:()=>{}},o.id))})})]}),jsxs(T,{value:"item-4",className:"border-none",children:[jsx(C,{className:"text-sm font-normal leading-none text-muted-foreground hover:no-underline",children:"ประเภทกิจกรรม"}),jsx(R$1,{children:jsx("ul",{className:"space-y-2",children:Be.map(o=>jsx(S$1,{...o,checked:o.checked,onChange:()=>{}},o.id))})})]})]})]})},X$1=m$5.forwardRef(({className:a,children:t,...i},n)=>jsx("div",{ref:n,className:f$1("mb-8 flex flex-col items-center justify-between gap-4 rounded-lg border bg-background p-4 md:flex-row",a),...i,children:t}));X$1.displayName="TourSearch";const J$2=m$5.forwardRef(({className:a,totalCount:t,...i},n)=>jsxs("div",{ref:n,className:f$1("flex flex-col gap-2",a),...i,children:[jsx("h2",{className:"text-2xl font-semibold",children:"ค้นหาแพ็คเกจ"}),jsxs("p",{className:"text-sm text-muted-foreground",children:["พบทั้งหมด"," ",jsx("span",{className:"font-medium text-orange-500",children:t})," รายการ"]})]}));J$2.displayName="TourSearchHeader";const Z$1=m$5.forwardRef(({className:a,searchQuery:t,onSearchChange:i,viewMode:n,onViewModeChange:c,...o},u)=>jsxs("div",{ref:u,className:f$1("flex w-full items-center gap-4 md:w-auto",a),...o,children:[jsxs("div",{className:"relative flex-1 md:w-64",children:[jsx(Search,{className:"absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"}),jsx(m$1,{placeholder:"Search tours...",className:"pl-9",value:t,onChange:h=>i(h.target.value)})]}),jsx("div",{className:"md:hidden",children:jsxs(_e$1,{children:[jsx(We,{asChild:!0,children:jsx(f,{variant:"outline",size:"icon",children:jsx(SlidersHorizontal,{className:"size-4"})})}),jsxs(O$1,{children:[jsxs(G$2,{children:[jsx(V$1,{children:"กรองแพ็คเกจท่องเที่ยว"}),jsx($$1,{children:"กรองแพ็คเกจท่องเที่ยวตามความต้องการของคุณ"})]}),jsx("div",{className:"py-4",children:jsx(K$1,{})})]})]})}),jsxs("div",{className:"flex rounded-md border",children:[jsx(f,{variant:"ghost",size:"icon",className:"rounded-none transition-colors hover:bg-primary/10",onClick:()=>c("grid"),children:jsx(LayoutGrid,{className:f$1("size-4",n==="grid"&&"text-primary")})}),jsx(f,{variant:"ghost",size:"icon",className:"rounded-none transition-colors hover:bg-primary/10",onClick:()=>c("list"),children:jsx(List,{className:f$1("size-4",n==="list"&&"text-primary")})})]})]}));Z$1.displayName="TourSearchControls";const Qe=({tour:a,viewMode:t})=>jsxs(H$4,{className:f$1("group overflow-hidden shadow-none transition-shadow hover:shadow-md",t==="list"&&"flex flex-col md:flex-row"),children:[jsx("div",{className:f$1("relative",t==="list"?"md:w-1/3":"w-full"),children:jsx("img",{src:a.image,alt:a.title,className:"h-64 w-full bg-contain bg-center bg-no-repeat transition-transform duration-300 group-hover:scale-105"})}),jsxs("div",{className:f$1("flex flex-1 flex-col",t==="list"&&"md:max-w-2xl"),children:[jsxs(M,{children:[jsxs("div",{className:"mb-2 flex items-center gap-2 text-sm text-muted-foreground",children:[jsx(MapPin,{className:"size-4"}),jsx("span",{children:a.location})]}),jsx(j$2,{className:"text-sm font-medium",children:a.title}),jsx(S$2,{className:"line-clamp-2 leading-normal",children:a.description})]}),jsx(A$3,{className:f$1("mt-auto space-x-2",t==="list"&&"md:justify-end"),children:jsx(f,{asChild:!0,children:jsx(Link,{to:`/tours/${a.id}`,children:"ดูรายละเอียด"})})})]})]}),qe=()=>Promise.resolve().then(()=>ae),Ke=()=>Promise.resolve().then(()=>ae),Xe=z$2.object({type:z$2.enum(["study","travel"]).default("study"),duration:z$2.enum(["short-term","long-term"]).optional(),location:z$2.string().optional(),price:z$2.number().optional()}),H$2=createFileRoute("/tours/")({head:()=>({meta:[{title:"แพ็คเกจทัวร์ : บริษัท แอดแวนซ์เท็ก จำกัด : ศูนย์รวมทัวร์ที่ดีที่สุด"}]}),component:lazyRouteComponent(Ke,"component",()=>H$2.ssr),validateSearch:a=>Xe.parse(a),loader:lazyFn(qe,"loader")});async function Je(){return ze}const ee=v$1({method:"GET"}).handler(z(te$1),()=>Je()),Ze=function(){const[t,i]=m$5.useState("grid"),[n$1,c]=m$5.useState(""),[o,u]=m$5.useState(1),{type:h}=H$2.useSearch(),ie=H$2.useLoaderData(),p=t==="grid"?9:5,w={study:{title:"แพ็คเกจเรียนต่อ",description:"ค้นพบแพ็คเกจการศึกษาที่น่าสนใจ เราคัดสรรสถานที่ศึกษาที่น่าสนใจมาให้คุณได้เลือกสรร",image:"/images/tours/study-tour-hero.png"},travel:{title:"แพ็คเกจท่องเที่ยว",description:"ค้นพบประสบการณ์การท่องเที่ยวที่น่าจดจำกับแพ็คเกจทัวร์ที่หลากหลายของเรา เราคัดสรรสถานที่ท่องเที่ยวยอดนิยมและกิจกรรมที่น่าสนใจมาให้คุณได้เลือกสรร",image:"/images/tours/travel-tour-hero.png"}},g$1=ie.filter(d=>d.title.toLowerCase().includes(n$1.toLowerCase())||d.description.toLowerCase().includes(n$1.toLowerCase()));m$5.useEffect(()=>{u(1);},[t,n$1,h]);const N=Math.ceil(g$1.length/p),Y=(o-1)*p,re=g$1.slice(Y,Y+p);return jsxs("article",{className:"container mx-auto p-4",children:[jsxs(n,{children:[jsx(m$3,{children:jsxs(c$2,{children:[jsx(g,{src:w[h].image,alt:w[h].title}),jsxs(d$3,{children:[jsx(p$1,{children:w[h].title}),jsx(N$1,{children:w[h].description})]})]})}),jsx(P$4,{})]}),jsxs(X$1,{children:[jsx(J$2,{totalCount:g$1.length}),jsx(Z$1,{searchQuery:n$1,onSearchChange:c,viewMode:t,onViewModeChange:i})]}),jsxs("div",{className:"flex flex-col gap-8 md:flex-row",children:[jsx("aside",{className:"hidden w-64 shrink-0 md:block",children:jsxs("div",{className:"sticky top-24 rounded-lg border bg-white p-6",children:[jsx("h2",{className:"mb-6 text-sm font-semibold",children:"เลือกการแสดงผลแพ็คเกจ"}),jsx(K$1,{})]})}),jsxs("div",{className:"flex-1",children:[jsx("div",{className:f$1("grid gap-2",t==="grid"?"grid-cols-2 lg:grid-cols-3":"grid-cols-1"),children:re.map(d=>jsx(Qe,{tour:d,viewMode:t},d.id))}),N>1&&jsxs("div",{className:"mt-8 grid grid-cols-2 items-center gap-4",children:[jsxs("div",{className:"hidden text-sm text-muted-foreground md:block",children:["แสดงผลลัพธ์ ",(o-1)*p+1," -"," ",Math.min(o*p,g$1.length)," ","จากทั้งหมด ",g$1.length," รายการ"]}),jsxs("div",{className:"text-sm text-muted-foreground md:hidden",children:[(o-1)*p+1," -"," ",Math.min(o*p,g$1.length)," จาก"," ",g$1.length]}),jsx(W$2,{className:"justify-end",children:jsxs(E$1,{children:[jsx(x,{children:o===1?jsx(P$2,{href:"#",className:"pointer-events-none opacity-50"}):jsx(P$2,{href:"#",onClick:d=>{d.preventDefault(),u(f=>Math.max(f-1,1));}})}),Array.from({length:N},(d,f)=>f+1).map(d=>d===1||d===N||Math.abs(o-d)<=1?jsx(x,{children:jsx(A$1,{href:"#",onClick:oe=>{oe.preventDefault(),u(d);},isActive:o===d,children:d})},d):d===2||d===N-1?jsx(x,{children:jsx(j$1,{})},d):null),jsx(x,{children:o===N?jsx(I$2,{href:"#",className:"pointer-events-none opacity-50"}):jsx(I$2,{href:"#",onClick:d=>{d.preventDefault(),u(f=>Math.min(f+1,N));}})})]})})]})]})]})]})},et=async()=>await ee();function te$1(a){return ee.__executeServer(a)}const ae=Object.freeze(Object.defineProperty({__proto__:null,$$function0:te$1,component:Ze,loader:et},Symbol.toStringTag,{value:"Module"}));

const mod_2_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: te$1,
	component: Ze,
	loader: et
});

const chunks = {};
				chunks['c_9xkq4f.mjs'] = mod_0_3;
				chunks['c_3fv3ai.mjs'] = mod_1_3;
				chunks['c_1bbm5aw.mjs'] = mod_2_3;
			
			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

const assets$1 = {
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"132-ImFzerNaMeFM5PsDV/+RBYJUttA\"",
    "mtime": "2024-12-09T19:49:31.385Z",
    "size": 306,
    "path": "../public/_build/server-functions-manifest.json"
  },
  "/assets/globals-BUMEa2m7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d236-RuZba0kiUm2Vtv4HzuFMlRp3wRc\"",
    "mtime": "2024-12-09T19:49:31.390Z",
    "size": 53814,
    "path": "../public/assets/globals-BUMEa2m7.css"
  },
  "/assets/kanit-thai-100-normal-CJ5enLc7.woff": {
    "type": "font/woff",
    "etag": "\"2154-tUDH60xoQW4O8efzInQORqZgWRI\"",
    "mtime": "2024-12-09T19:49:31.392Z",
    "size": 8532,
    "path": "../public/assets/kanit-thai-100-normal-CJ5enLc7.woff"
  },
  "/assets/kanit-thai-100-normal-MVGvUIAQ.woff2": {
    "type": "font/woff2",
    "etag": "\"2f3c-CZfGcfZ4Vs9MDNMutoyFqsp2HZI\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 12092,
    "path": "../public/assets/kanit-thai-100-normal-MVGvUIAQ.woff2"
  },
  "/assets/kanit-thai-200-normal-DW7yNy6Q.woff2": {
    "type": "font/woff2",
    "etag": "\"3170-sTNHb/qwtk6HuLdKOMiFJ5E17JM\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 12656,
    "path": "../public/assets/kanit-thai-200-normal-DW7yNy6Q.woff2"
  },
  "/assets/kanit-thai-200-normal-nA0zF8Cg.woff": {
    "type": "font/woff",
    "etag": "\"21e8-vc6/xfpWKjydC9DhzZR2Q18d43A\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 8680,
    "path": "../public/assets/kanit-thai-200-normal-nA0zF8Cg.woff"
  },
  "/assets/kanit-thai-300-normal-9B7BJcjo.woff": {
    "type": "font/woff",
    "etag": "\"2170-BDBMrjkPMWAaj+JjovdnrA9T3eI\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 8560,
    "path": "../public/assets/kanit-thai-300-normal-9B7BJcjo.woff"
  },
  "/assets/kanit-thai-300-normal-BZx2gboJ.woff2": {
    "type": "font/woff2",
    "etag": "\"32dc-x2Jlm8Eyn+xvGt/NyxscPh/eSMA\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 13020,
    "path": "../public/assets/kanit-thai-300-normal-BZx2gboJ.woff2"
  },
  "/assets/kanit-thai-400-normal-C27eAtU1.woff2": {
    "type": "font/woff2",
    "etag": "\"33cc-5gFvS1PqQrp+olrSF/RMTt0w75M\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 13260,
    "path": "../public/assets/kanit-thai-400-normal-C27eAtU1.woff2"
  },
  "/assets/kanit-thai-400-normal-Hyy0rknX.woff": {
    "type": "font/woff",
    "etag": "\"226c-4+18Jk31HfdK9IkGaPciKugie3E\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 8812,
    "path": "../public/assets/kanit-thai-400-normal-Hyy0rknX.woff"
  },
  "/assets/kanit-thai-500-normal-BDuJ4o_K.woff2": {
    "type": "font/woff2",
    "etag": "\"333c-Fn01AbLP9b1CHzY5UijiPWxusDQ\"",
    "mtime": "2024-12-09T19:49:31.392Z",
    "size": 13116,
    "path": "../public/assets/kanit-thai-500-normal-BDuJ4o_K.woff2"
  },
  "/assets/kanit-thai-500-normal-DpGKNmIS.woff": {
    "type": "font/woff",
    "etag": "\"21c0-ZScvFAX5vniqmQfq6SRxWgoqw7E\"",
    "mtime": "2024-12-09T19:49:31.392Z",
    "size": 8640,
    "path": "../public/assets/kanit-thai-500-normal-DpGKNmIS.woff"
  },
  "/assets/kanit-thai-600-normal-B951hBRC.woff2": {
    "type": "font/woff2",
    "etag": "\"3500-e43fcVVwdvghKz57ixJ+ci6jNOw\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 13568,
    "path": "../public/assets/kanit-thai-600-normal-B951hBRC.woff2"
  },
  "/assets/kanit-thai-600-normal-BXxKBrx-.woff": {
    "type": "font/woff",
    "etag": "\"2298-BfTw/2his3W0WvGLqrXV0XzPMdw\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 8856,
    "path": "../public/assets/kanit-thai-600-normal-BXxKBrx-.woff"
  },
  "/assets/kanit-thai-700-normal-CZrRvC_H.woff": {
    "type": "font/woff",
    "etag": "\"21cc-sYmtZOZEaV2MH4GqGOfyuT8zmYE\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 8652,
    "path": "../public/assets/kanit-thai-700-normal-CZrRvC_H.woff"
  },
  "/assets/kanit-thai-700-normal-lMuxtNHC.woff2": {
    "type": "font/woff2",
    "etag": "\"3408-J0ls0HxhoQW36cKoC7fREpAH6hs\"",
    "mtime": "2024-12-09T19:49:31.391Z",
    "size": 13320,
    "path": "../public/assets/kanit-thai-700-normal-lMuxtNHC.woff2"
  },
  "/assets/kanit-thai-800-normal-B0cvSpRm.woff2": {
    "type": "font/woff2",
    "etag": "\"35b8-QFa8fDEiBK7/G1Ewq0rPboQ4BDk\"",
    "mtime": "2024-12-09T19:49:31.392Z",
    "size": 13752,
    "path": "../public/assets/kanit-thai-800-normal-B0cvSpRm.woff2"
  },
  "/assets/kanit-thai-800-normal-BAaQprJW.woff": {
    "type": "font/woff",
    "etag": "\"227c-wLQNj9iVhd89HDKEABI5eBIFBaU\"",
    "mtime": "2024-12-09T19:49:31.392Z",
    "size": 8828,
    "path": "../public/assets/kanit-thai-800-normal-BAaQprJW.woff"
  },
  "/assets/kanit-thai-900-normal-BF0Ii47I.woff2": {
    "type": "font/woff2",
    "etag": "\"35ac-sOKe/i4Z7re/hMzctRyrEGpIxns\"",
    "mtime": "2024-12-09T19:49:31.392Z",
    "size": 13740,
    "path": "../public/assets/kanit-thai-900-normal-BF0Ii47I.woff2"
  },
  "/assets/kanit-thai-900-normal-DBagMaJD.woff": {
    "type": "font/woff",
    "etag": "\"21b4-Dr09Vc/isx0V0oQk6RHOEpUdnK8\"",
    "mtime": "2024-12-09T19:49:31.392Z",
    "size": 8628,
    "path": "../public/assets/kanit-thai-900-normal-DBagMaJD.woff"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"2701-GBY1PoyNHMfsTz0Zrd46HVVJ2Pc\"",
    "mtime": "2024-12-09T19:49:31.388Z",
    "size": 9985,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/assets/_blogId-M2BXOh_z.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"23b6-+hz0knJsLge5/QeRob8iPzKPcVU\"",
    "mtime": "2024-12-09T19:49:31.388Z",
    "size": 9142,
    "path": "../public/_build/assets/_blogId-M2BXOh_z.js"
  },
  "/_build/assets/_tourId-DnkQMoF7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"42d0-2GuGFLH5omOa/XAtc2PjCMeFCeY\"",
    "mtime": "2024-12-09T19:49:31.385Z",
    "size": 17104,
    "path": "../public/_build/assets/_tourId-DnkQMoF7.js"
  },
  "/_build/assets/about-DRMUEk2-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1182-aaCV/5IVDmNCfmbl9s0mdVIdhgw\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 4482,
    "path": "../public/_build/assets/about-DRMUEk2-.js"
  },
  "/_build/assets/badge-BX8fJbc0.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"403-iAOs7GiyUf6gsXB0pS88GXooW9w\"",
    "mtime": "2024-12-09T19:49:31.385Z",
    "size": 1027,
    "path": "../public/_build/assets/badge-BX8fJbc0.js"
  },
  "/_build/assets/blur-fade-7fLI09do.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1bd7a-6OsMudHZh+3sO7scX3KLno7uwDw\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 114042,
    "path": "../public/_build/assets/blur-fade-7fLI09do.js"
  },
  "/_build/assets/calendar-BxthR7uV.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1ab-aQySycLeW2mtrCXMt8niDOeLkxo\"",
    "mtime": "2024-12-09T19:49:31.385Z",
    "size": 427,
    "path": "../public/_build/assets/calendar-BxthR7uV.js"
  },
  "/_build/assets/card-DSl79Sq_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"3e1-ytGM09u+peQ0InYzDdypyiX10LI\"",
    "mtime": "2024-12-09T19:49:31.385Z",
    "size": 993,
    "path": "../public/_build/assets/card-DSl79Sq_.js"
  },
  "/_build/assets/chevron-right-jr-OsRoB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"224-w/WX1I7jFQejOgabaJmUFdibaHA\"",
    "mtime": "2024-12-09T19:49:31.385Z",
    "size": 548,
    "path": "../public/_build/assets/chevron-right-jr-OsRoB.js"
  },
  "/_build/assets/client-B42ABy-e.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"69ca1-jbAs5cCu8Lxmt+w/fWWdvuUN0EA\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 433313,
    "path": "../public/_build/assets/client-B42ABy-e.js"
  },
  "/_build/assets/client-D_r--B-J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"40-u3vjsdZo5iMvn6igOJqO/PUOZnk\"",
    "mtime": "2024-12-09T19:49:31.385Z",
    "size": 64,
    "path": "../public/_build/assets/client-D_r--B-J.js"
  },
  "/_build/assets/contact-BNDyAio6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"c78a-O9mCeQRZSEfHEbjD1wCm83bhIao\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 51082,
    "path": "../public/_build/assets/contact-BNDyAio6.js"
  },
  "/_build/assets/globals-BUMEa2m7.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"d236-RuZba0kiUm2Vtv4HzuFMlRp3wRc\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 53814,
    "path": "../public/_build/assets/globals-BUMEa2m7.css"
  },
  "/_build/assets/index-B-OYFYQ-.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"ed40-INWbHIOA5e6Q4+UN5KmUSdqzxiU\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 60736,
    "path": "../public/_build/assets/index-B-OYFYQ-.js"
  },
  "/_build/assets/index-ByNaFnmF.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"143cd-sW14UC/1Wvue4qRZyBDSt7YN1Ls\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 82893,
    "path": "../public/_build/assets/index-ByNaFnmF.js"
  },
  "/_build/assets/index-Dzk7Phj7.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1253-gaFHWk+0iSmtrdGQ7nWXLgPKGMk\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 4691,
    "path": "../public/_build/assets/index-Dzk7Phj7.js"
  },
  "/_build/assets/index-Mi6CWLfl.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"11b6-scjTL0zt/wiRQ4kr04xsEW2+WYw\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 4534,
    "path": "../public/_build/assets/index-Mi6CWLfl.js"
  },
  "/_build/assets/index-jVEys91j.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"19d8-d26QljLROaBzM/qsePYjaI7jqDI\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 6616,
    "path": "../public/_build/assets/index-jVEys91j.js"
  },
  "/_build/assets/kanit-thai-100-normal-CJ5enLc7.woff": {
    "type": "font/woff",
    "etag": "\"2154-tUDH60xoQW4O8efzInQORqZgWRI\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 8532,
    "path": "../public/_build/assets/kanit-thai-100-normal-CJ5enLc7.woff"
  },
  "/_build/assets/kanit-thai-100-normal-MVGvUIAQ.woff2": {
    "type": "font/woff2",
    "etag": "\"2f3c-CZfGcfZ4Vs9MDNMutoyFqsp2HZI\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 12092,
    "path": "../public/_build/assets/kanit-thai-100-normal-MVGvUIAQ.woff2"
  },
  "/_build/assets/kanit-thai-200-normal-DW7yNy6Q.woff2": {
    "type": "font/woff2",
    "etag": "\"3170-sTNHb/qwtk6HuLdKOMiFJ5E17JM\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 12656,
    "path": "../public/_build/assets/kanit-thai-200-normal-DW7yNy6Q.woff2"
  },
  "/_build/assets/kanit-thai-200-normal-nA0zF8Cg.woff": {
    "type": "font/woff",
    "etag": "\"21e8-vc6/xfpWKjydC9DhzZR2Q18d43A\"",
    "mtime": "2024-12-09T19:49:31.386Z",
    "size": 8680,
    "path": "../public/_build/assets/kanit-thai-200-normal-nA0zF8Cg.woff"
  },
  "/_build/assets/kanit-thai-300-normal-9B7BJcjo.woff": {
    "type": "font/woff",
    "etag": "\"2170-BDBMrjkPMWAaj+JjovdnrA9T3eI\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 8560,
    "path": "../public/_build/assets/kanit-thai-300-normal-9B7BJcjo.woff"
  },
  "/_build/assets/kanit-thai-300-normal-BZx2gboJ.woff2": {
    "type": "font/woff2",
    "etag": "\"32dc-x2Jlm8Eyn+xvGt/NyxscPh/eSMA\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 13020,
    "path": "../public/_build/assets/kanit-thai-300-normal-BZx2gboJ.woff2"
  },
  "/_build/assets/kanit-thai-400-normal-C27eAtU1.woff2": {
    "type": "font/woff2",
    "etag": "\"33cc-5gFvS1PqQrp+olrSF/RMTt0w75M\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 13260,
    "path": "../public/_build/assets/kanit-thai-400-normal-C27eAtU1.woff2"
  },
  "/_build/assets/kanit-thai-400-normal-Hyy0rknX.woff": {
    "type": "font/woff",
    "etag": "\"226c-4+18Jk31HfdK9IkGaPciKugie3E\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 8812,
    "path": "../public/_build/assets/kanit-thai-400-normal-Hyy0rknX.woff"
  },
  "/_build/assets/kanit-thai-500-normal-BDuJ4o_K.woff2": {
    "type": "font/woff2",
    "etag": "\"333c-Fn01AbLP9b1CHzY5UijiPWxusDQ\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 13116,
    "path": "../public/_build/assets/kanit-thai-500-normal-BDuJ4o_K.woff2"
  },
  "/_build/assets/kanit-thai-500-normal-DpGKNmIS.woff": {
    "type": "font/woff",
    "etag": "\"21c0-ZScvFAX5vniqmQfq6SRxWgoqw7E\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 8640,
    "path": "../public/_build/assets/kanit-thai-500-normal-DpGKNmIS.woff"
  },
  "/_build/assets/kanit-thai-600-normal-B951hBRC.woff2": {
    "type": "font/woff2",
    "etag": "\"3500-e43fcVVwdvghKz57ixJ+ci6jNOw\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 13568,
    "path": "../public/_build/assets/kanit-thai-600-normal-B951hBRC.woff2"
  },
  "/_build/assets/kanit-thai-600-normal-BXxKBrx-.woff": {
    "type": "font/woff",
    "etag": "\"2298-BfTw/2his3W0WvGLqrXV0XzPMdw\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 8856,
    "path": "../public/_build/assets/kanit-thai-600-normal-BXxKBrx-.woff"
  },
  "/_build/assets/kanit-thai-700-normal-CZrRvC_H.woff": {
    "type": "font/woff",
    "etag": "\"21cc-sYmtZOZEaV2MH4GqGOfyuT8zmYE\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 8652,
    "path": "../public/_build/assets/kanit-thai-700-normal-CZrRvC_H.woff"
  },
  "/_build/assets/kanit-thai-700-normal-lMuxtNHC.woff2": {
    "type": "font/woff2",
    "etag": "\"3408-J0ls0HxhoQW36cKoC7fREpAH6hs\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 13320,
    "path": "../public/_build/assets/kanit-thai-700-normal-lMuxtNHC.woff2"
  },
  "/_build/assets/kanit-thai-800-normal-B0cvSpRm.woff2": {
    "type": "font/woff2",
    "etag": "\"35b8-QFa8fDEiBK7/G1Ewq0rPboQ4BDk\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 13752,
    "path": "../public/_build/assets/kanit-thai-800-normal-B0cvSpRm.woff2"
  },
  "/_build/assets/kanit-thai-800-normal-BAaQprJW.woff": {
    "type": "font/woff",
    "etag": "\"227c-wLQNj9iVhd89HDKEABI5eBIFBaU\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 8828,
    "path": "../public/_build/assets/kanit-thai-800-normal-BAaQprJW.woff"
  },
  "/_build/assets/kanit-thai-900-normal-BF0Ii47I.woff2": {
    "type": "font/woff2",
    "etag": "\"35ac-sOKe/i4Z7re/hMzctRyrEGpIxns\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 13740,
    "path": "../public/_build/assets/kanit-thai-900-normal-BF0Ii47I.woff2"
  },
  "/_build/assets/kanit-thai-900-normal-DBagMaJD.woff": {
    "type": "font/woff",
    "etag": "\"21b4-Dr09Vc/isx0V0oQk6RHOEpUdnK8\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 8628,
    "path": "../public/_build/assets/kanit-thai-900-normal-DBagMaJD.woff"
  },
  "/_build/assets/page-hero-CSAqPvjb.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"648-PT8h7VVQVb/h2Ewc7V5b1PUsm/k\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 1608,
    "path": "../public/_build/assets/page-hero-CSAqPvjb.js"
  },
  "/_build/assets/select-Rv5xCkR_.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"5bb5-2Kuj34E+bzMtvjq8lcC8PA9VZNE\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 23477,
    "path": "../public/_build/assets/select-Rv5xCkR_.js"
  },
  "/_build/assets/use-toast-58QX4mOB.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4bc-Z2HrSVQk1aRAbjHKZ/Ghs1Ar7u8\"",
    "mtime": "2024-12-09T19:49:31.387Z",
    "size": 1212,
    "path": "../public/_build/assets/use-toast-58QX4mOB.js"
  },
  "/images/city/beijing.jpg": {
    "type": "image/jpeg",
    "etag": "\"5424b-FJ5de+znA4avlTQ3R+GUevyWBmI\"",
    "mtime": "2024-12-09T19:49:31.358Z",
    "size": 344651,
    "path": "../public/images/city/beijing.jpg"
  },
  "/images/city/chengdu.jpg": {
    "type": "image/jpeg",
    "etag": "\"50e15-3p7VobOf9Mr7LG6D++wPFqFf2fE\"",
    "mtime": "2024-12-09T19:49:31.357Z",
    "size": 331285,
    "path": "../public/images/city/chengdu.jpg"
  },
  "/images/city/chongqing.jpg": {
    "type": "image/jpeg",
    "etag": "\"6fb72-g4KRjezx9hXnk5lzTqbqFBin2tY\"",
    "mtime": "2024-12-09T19:49:31.358Z",
    "size": 457586,
    "path": "../public/images/city/chongqing.jpg"
  },
  "/images/city/guangzhou.jpg": {
    "type": "image/jpeg",
    "etag": "\"45066-nag4Ap1I9JwCLyJE9CdMrUSAoAw\"",
    "mtime": "2024-12-09T19:49:31.360Z",
    "size": 282726,
    "path": "../public/images/city/guangzhou.jpg"
  },
  "/images/city/harbin.jpg": {
    "type": "image/jpeg",
    "etag": "\"3fd06-6aNOX7iIOsYs1rxN8mIoTYxBHBc\"",
    "mtime": "2024-12-09T19:49:31.359Z",
    "size": 261382,
    "path": "../public/images/city/harbin.jpg"
  },
  "/images/city/shanghai.jpg": {
    "type": "image/jpeg",
    "etag": "\"48dd4-rofKkx54iTVhbbmO9RORpN1cDk8\"",
    "mtime": "2024-12-09T19:49:31.364Z",
    "size": 298452,
    "path": "../public/images/city/shanghai.jpg"
  },
  "/images/shared/about-me-hero.png": {
    "type": "image/png",
    "etag": "\"cd60e-EkcxxxRwhryDbfuF9FbUOzFLVvA\"",
    "mtime": "2024-12-09T19:49:31.362Z",
    "size": 841230,
    "path": "../public/images/shared/about-me-hero.png"
  },
  "/images/shared/facebook.svg": {
    "type": "image/svg+xml",
    "etag": "\"21e-pwlu38yGc/cxvVJmSznzzVKR5og\"",
    "mtime": "2024-12-09T19:49:31.357Z",
    "size": 542,
    "path": "../public/images/shared/facebook.svg"
  },
  "/images/shared/instagram.svg": {
    "type": "image/svg+xml",
    "etag": "\"835-WMmA4IXVSEpjOX1lv8UNn9Jmt8s\"",
    "mtime": "2024-12-09T19:49:31.359Z",
    "size": 2101,
    "path": "../public/images/shared/instagram.svg"
  },
  "/images/shared/line.svg": {
    "type": "image/svg+xml",
    "etag": "\"498-q0c7IhCRpC2D1ph9ikAmCDkZ83Y\"",
    "mtime": "2024-12-09T19:49:31.360Z",
    "size": 1176,
    "path": "../public/images/shared/line.svg"
  },
  "/images/shared/tiktok.svg": {
    "type": "image/svg+xml",
    "etag": "\"2c3-oa9Ivl2Xv3cuHdsUoQNvfjKs66A\"",
    "mtime": "2024-12-09T19:49:31.361Z",
    "size": 707,
    "path": "../public/images/shared/tiktok.svg"
  },
  "/images/tours/ADSPRING2W2025.png": {
    "type": "image/png",
    "etag": "\"1a8707-HNElUTj43ktbD2V1DjofZQ00Jew\"",
    "mtime": "2024-12-09T19:49:31.382Z",
    "size": 1738503,
    "path": "../public/images/tours/ADSPRING2W2025.png"
  },
  "/images/tours/ADSTUDY1THIT.png": {
    "type": "image/png",
    "etag": "\"18bb78-f78cnapBRhoO6C8mUcv1XT0FgkM\"",
    "mtime": "2024-12-09T19:49:31.361Z",
    "size": 1620856,
    "path": "../public/images/tours/ADSTUDY1THIT.png"
  },
  "/images/tours/ADSTUDY1TNORMAL.png": {
    "type": "image/png",
    "etag": "\"12de5b-wle59pEqVdWBJQvn5gXyGhtk5Y8\"",
    "mtime": "2024-12-09T19:49:31.367Z",
    "size": 1236571,
    "path": "../public/images/tours/ADSTUDY1TNORMAL.png"
  },
  "/images/tours/ADSTUDY1YHIT.png": {
    "type": "image/png",
    "etag": "\"18d934-armyIvbepwMovrWL8Aacz2Vq1mo\"",
    "mtime": "2024-12-09T19:49:31.368Z",
    "size": 1628468,
    "path": "../public/images/tours/ADSTUDY1YHIT.png"
  },
  "/images/tours/ADSTUDY1YNORMAL.png": {
    "type": "image/png",
    "etag": "\"12d68c-QJYAoa9u9fRyk59vvNH/HNiXqoA\"",
    "mtime": "2024-12-09T19:49:31.368Z",
    "size": 1234572,
    "path": "../public/images/tours/ADSTUDY1YNORMAL.png"
  },
  "/images/tours/ADSTUDYMAR1M2025.png": {
    "type": "image/png",
    "etag": "\"12dde4-3VB15b0Wo292Vfi/aeaf1W5VGu8\"",
    "mtime": "2024-12-09T19:49:31.374Z",
    "size": 1236452,
    "path": "../public/images/tours/ADSTUDYMAR1M2025.png"
  },
  "/images/tours/ADSTUDYMAR2M2025.png": {
    "type": "image/png",
    "etag": "\"18acdd-9gGc8wDjjPsXCQPvF3Of6IPa7zE\"",
    "mtime": "2024-12-09T19:49:31.377Z",
    "size": 1617117,
    "path": "../public/images/tours/ADSTUDYMAR2M2025.png"
  },
  "/images/tours/ADSTUDYMAR2W2025.png": {
    "type": "image/png",
    "etag": "\"f7258-lfhAmn270G0olifbbTWP/tLrB1s\"",
    "mtime": "2024-12-09T19:49:31.368Z",
    "size": 1012312,
    "path": "../public/images/tours/ADSTUDYMAR2W2025.png"
  },
  "/images/tours/ADSTUDYMAR3M2025.png": {
    "type": "image/png",
    "etag": "\"1940f8-QJOqTIjm13Kjwo2ez2LkpYyy6kI\"",
    "mtime": "2024-12-09T19:49:31.372Z",
    "size": 1655032,
    "path": "../public/images/tours/ADSTUDYMAR3M2025.png"
  },
  "/images/tours/ADSTUDYMAR3W2025.png": {
    "type": "image/png",
    "etag": "\"f3c5b-KX3iHPAKFJlUU4tP4NgCakm4xV4\"",
    "mtime": "2024-12-09T19:49:31.374Z",
    "size": 998491,
    "path": "../public/images/tours/ADSTUDYMAR3W2025.png"
  },
  "/images/tours/ADSUMMER2025.png": {
    "type": "image/png",
    "etag": "\"1baad5-ratcqR4dk/8GRLJ4Y3aumsE0464\"",
    "mtime": "2024-12-09T19:49:31.375Z",
    "size": 1813205,
    "path": "../public/images/tours/ADSUMMER2025.png"
  },
  "/images/tours/ADWINTER2024.webp": {
    "type": "image/webp",
    "etag": "\"1d9c2-j/PRPnvWMtGOVEmiVQK28MwvHag\"",
    "mtime": "2024-12-09T19:49:31.376Z",
    "size": 121282,
    "path": "../public/images/tours/ADWINTER2024.webp"
  },
  "/images/tours/ADWINTER2025.webp": {
    "type": "image/webp",
    "etag": "\"1d9c2-j/PRPnvWMtGOVEmiVQK28MwvHag\"",
    "mtime": "2024-12-09T19:49:31.379Z",
    "size": 121282,
    "path": "../public/images/tours/ADWINTER2025.webp"
  },
  "/images/tours/study-tour-hero.png": {
    "type": "image/png",
    "etag": "\"ce51a-Js3szJjxrk82BmYDP7iyIHEY91A\"",
    "mtime": "2024-12-09T19:49:31.381Z",
    "size": 845082,
    "path": "../public/images/tours/study-tour-hero.png"
  },
  "/images/tours/travel-tour-hero.png": {
    "type": "image/png",
    "etag": "\"c472e-pMecfiDyMWftAkI8on9u4jDNSvg\"",
    "mtime": "2024-12-09T19:49:31.381Z",
    "size": 804654,
    "path": "../public/images/tours/travel-tour-hero.png"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets$1[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets$1[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets$1[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _BgtZt3 = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    appendResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

function F(e){let n;const t=R(e),s={duplex:"half",method:e.method,headers:e.headers};return e.node.req.body instanceof ArrayBuffer?new Request(t,{...s,body:e.node.req.body}):new Request(t,{...s,get body(){return n||(n=W$1(e),n)}})}function L$1(e){return e.web??={request:F(e),url:R(e)},e.web.request}function H$1(){return S()}const w=Symbol("$HTTPEvent");function O(e){return typeof e=="object"&&(e instanceof H3Event||e?.[w]instanceof H3Event||e?.__is_event__===!0)}function l(e){return function(...n){let t=n[0];if(O(t))n[0]=t instanceof H3Event||t.__is_event__?t:t[w];else {if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(t=H$1(),!t)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");n.unshift(t);}return e(...n)}}const R=l(getRequestURL),P$1=l(getResponseStatus),W$1=l(getRequestWebStream);function I$1(){return getContext("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:AsyncLocalStorage})}function S(){return I$1().use().event}function U$1(e){return globalThis.MANIFEST[e]}const G$1=eventHandler(j);async function j(e){return J$1(L$1(e))}async function J$1(e,n){var t,s;const p=e.method,T=new URL(e.url,"http://localhost:3000"),a=Object.fromEntries(T.searchParams.entries()),i=a._serverFnId,d=a._serverFnName;if(!i||!d)throw new Error("Invalid request");g$2(typeof i=="string","Invalid server action");const b=(s=await((t=U$1("server").chunks[i])==null?void 0:t.import()))==null?void 0:s[d],u=await(async()=>{try{const r=await(async()=>{var y;if((y=e.headers.get("Content-Type"))!=null&&y.includes("multipart/form-data"))return g$2(p.toLowerCase()!=="get","GET requests with FormData payloads are not supported"),await e.formData();if(p.toLowerCase()==="get")return a.payload?defaultTransformer.parse(a.payload):void 0;const x=await e.text();return defaultTransformer.parse(x)})(),o=await b(r);return o instanceof Response?o:isRedirect$1(o)||isNotFound(o)?v(o):new Response(o!==void 0?defaultTransformer.stringify(o):void 0,{status:P$1(S()),headers:{"Content-Type":"application/json"}})}catch(r){return r instanceof Response?r:isRedirect$1(r)||isNotFound(r)?v(r):(console.error("Server Fn Error!"),console.error(r),console.info(),new Response(JSON.stringify(r),{status:500,headers:{"Content-Type":"application/json"}}))}})();if(u.headers.get("Content-Type")==="application/json"){const o=await u.clone().text();o&&JSON.stringify(JSON.parse(o));}return u}function v(e){const{headers:n,...t}=e;return new Response(JSON.stringify(t),{status:200,headers:{"Content-Type":"application/json",...e.headers||{}}})}

const ft = () => ({ routes: { __root__: { filePath: "__root.tsx", children: ["/", "/about", "/contact", "/blogs/$blogId", "/tours/$tourId", "/blogs/", "/tours/"], preloads: ["/_build/assets/client-D_r--B-J.js", "/_build/assets/client-B42ABy-e.js"] }, "/": { filePath: "index.tsx" }, "/about": { filePath: "about.tsx" }, "/contact": { filePath: "contact.tsx" }, "/blogs/$blogId": { filePath: "blogs/$blogId.tsx" }, "/tours/$tourId": { filePath: "tours/$tourId.tsx" }, "/blogs/": { filePath: "blogs/index.tsx" }, "/tours/": { filePath: "tours/index.tsx" } } });
function gt(t) {
  return globalThis.MANIFEST[t];
}
function xt() {
  var _a;
  const t = ft(), r = t.routes.__root__ = t.routes.__root__ || {};
  r.assets = r.assets || [];
  const o = gt("client");
  return r.assets.push({ tag: "script", attrs: { src: (_a = o.inputs[o.handler]) == null ? void 0 : _a.output.path, type: "module", async: true, suppressHydrationWarning: true } }), t;
}
function yt() {
  const t = xt();
  return { ...t, routes: Object.fromEntries(Object.entries(t.routes).map(([r, o]) => {
    const { preloads: n, assets: s } = o;
    return [r, { preloads: n, assets: s }];
  })) };
}
function bt(t, r, o) {
  if (!o.router.isServer) return r;
  o.match.extracted = o.match.extracted || [];
  const n = o.match.extracted;
  return W(r, (a, i) => {
    const c = a instanceof ReadableStream ? "stream" : a instanceof Promise ? "promise" : void 0;
    if (c) {
      const u = { dataType: t, type: c, path: i, id: n.length, value: a, matchIndex: o.match.index };
      if (n.push(u), c === "stream") {
        const [h, p] = a.tee();
        return u.streamState = _t({ stream: p }), h;
      } else defer$1(a);
    }
    return a;
  });
}
function vt(t) {
  const r = useRouter(), o = r.state.matches[t.matchIndex];
  if (!r.isServer) return null;
  const n = o.extracted, [s, a] = ["__beforeLoadContext", "loaderData"].map((i) => n ? n.reduce((c, u) => u.dataType !== i ? V(c, ["temp", ...u.path], void 0) : c, { temp: o[i] }).temp : o[i]);
  if (s !== void 0 || a !== void 0 || (n == null ? void 0 : n.length)) {
    const i = `__TSR__.initMatch(${M$2({ index: t.matchIndex, __beforeLoadContext: r.options.transformer.stringify(s), loaderData: r.options.transformer.stringify(a), extracted: n ? Object.fromEntries(n.map((c) => [c.id, pick(c, ["type", "path"])])) : {} }, { isScriptContext: true, wrap: true, json: true })})`;
    return jsxs(Fragment, { children: [jsx(ScriptOnce, { children: i }), n ? n.map((c) => c.type === "stream" ? jsx(Rt, { entry: c }, c.id) : jsx(Nt, { entry: c }, c.id)) : null] });
  }
  return null;
}
function W(t, r, o = []) {
  if (isPlainArray(t)) return t.map((s, a) => W(s, r, [...o, `${a}`]));
  if (isPlainObject$1(t)) {
    const s = {};
    for (const a in t) s[a] = W(t[a], r, [...o, a]);
    return s;
  }
  const n = r(t, o);
  return n !== t ? n : t;
}
function Nt({ entry: t }) {
  return jsx("div", { className: "tsr-once", children: jsx(m$5.Suspense, { fallback: null, children: jsx(wt, { entry: t }) }) });
}
function wt({ entry: t }) {
  const r = useRouter();
  if (t.value.status === "pending") throw t.value;
  const o = `__TSR__.resolvePromise(${M$2(t, { isScriptContext: true, wrap: true, json: true })})`;
  return r.injectScript(o), jsx(Fragment, {});
}
function Rt({ entry: t }) {
  g$2(t.streamState, "StreamState should be defined");
  const r = useRouter();
  return jsx(de, { streamState: t.streamState, children: (o) => {
    const n = o ? `__TSR__.matches[${t.matchIndex}].extracted[${t.id}].value.controller.enqueue(new TextEncoder().encode(${M$2(o.toString(), { isScriptContext: true, wrap: true, json: true })}))` : `__TSR__.matches[${t.matchIndex}].extracted[${t.id}].value.controller.close()`;
    return r.injectScript(n), jsx(Fragment, {});
  } });
}
function _t({ stream: t }) {
  const r = { promises: [] }, o = t.getReader(), n = (s) => (r.promises[s] = createControlledPromise(), o.read().then(({ done: a, value: i }) => {
    if (a) {
      r.promises[s].resolve(null), o.releaseLock();
      return;
    }
    return r.promises[s].resolve(i), n(s + 1);
  }));
  return n(0).catch((s) => {
    console.error("stream read error", s);
  }), r;
}
function de({ streamState: t, children: r, __index: o = 0 }) {
  const n = t.promises[o];
  if (!n) return null;
  if (n.status === "pending") throw n;
  const s = n.value;
  return jsxs(Fragment, { children: [r(s), jsx("div", { className: "tsr-once", children: jsx(m$5.Suspense, { fallback: null, children: jsx(de, { streamState: t, __index: o + 1, children: r }) }) })] });
}
function V(t, r, o) {
  if (r.length === 0) return o;
  const [n, ...s] = r;
  return Array.isArray(t) ? t.map((a, i) => i === Number(n) ? V(a, s, o) : a) : isPlainObject$1(t) ? { ...t, [n]: V(t[n], s, o) } : t;
}
function te(t) {
  t.router.AfterEachMatch = vt, t.router.serializer = (n) => M$2(n, { isScriptContext: true, wrap: true, json: true });
  const r = Context.get("TanStackRouterHydrationContext", {}), o = m$5.useMemo(() => {
    var n, s;
    return { router: t.router.dehydrate(), payload: (s = (n = t.router.options).dehydrate) == null ? void 0 : s.call(n) };
  }, [t.router]);
  return jsx(r.Provider, { value: o, children: jsx(RouterProvider, { router: t.router }) });
}
function St(t) {
  let r;
  const o = me(t), n = { duplex: "half", method: t.method, headers: t.headers };
  return t.node.req.body instanceof ArrayBuffer ? new Request(o, { ...n, body: t.node.req.body }) : new Request(o, { ...n, get body() {
    return r || (r = $t(t), r);
  } });
}
function kt(t) {
  var _a;
  return (_a = t.web) != null ? _a : t.web = { request: St(t), url: me(t) }, t.web.request;
}
function Tt() {
  return Pt();
}
const ue = Symbol("$HTTPEvent");
function Ct(t) {
  return typeof t == "object" && (t instanceof H3Event || (t == null ? void 0 : t[ue]) instanceof H3Event || (t == null ? void 0 : t.__is_event__) === true);
}
function L(t) {
  return function(...r) {
    var _a;
    let o = r[0];
    if (Ct(o)) r[0] = o instanceof H3Event || o.__is_event__ ? o : o[ue];
    else {
      if (!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext)) throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (o = Tt(), !o) throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      r.unshift(o);
    }
    return t(...r);
  };
}
const ao = L(getRequestHeaders), me = L(getRequestURL), so = L(getResponseStatus), It = L(getResponseHeaders), $t = L(getRequestWebStream);
function Ht() {
  var _a;
  return getContext("nitro-app", { asyncContext: !!((_a = globalThis.app.config.server.experimental) == null ? void 0 : _a.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function Pt() {
  return Ht().use().event;
}
function Et(t) {
  return t instanceof Headers ? new Headers(t) : Array.isArray(t) ? new Headers(t) : typeof t == "object" ? new Headers(t) : new Headers();
}
function re(...t) {
  return t.reduce((r, o) => {
    const n = Et(o);
    for (const [s, a] of n.entries()) r.set(s, a);
    return r;
  }, new Headers());
}
function Mt({ createRouter: t, getRouterManifest: r }) {
  return (o) => eventHandler(async (n) => {
    const s = kt(n), a = new URL(s.url), i = a.href.replace(a.origin, ""), c = createMemoryHistory({ initialEntries: [i] }), u = t();
    u.serializeLoaderData = bt, r && (u.manifest = r()), u.update({ history: c }), await u.load();
    const h = Lt({ event: n, router: u });
    return await o({ request: s, router: u, responseHeaders: h });
  });
}
function Lt(t) {
  t.event.__tsrHeadersSent = true;
  let r = re(It(t.event), { "Content-Type": "text/html; charset=UTF-8" }, ...t.router.state.matches.map((n) => n.headers));
  const { redirect: o } = t.router.state;
  return o && (r = re(r, o.headers, { Location: o.href })), r;
}
function zt(t) {
  const r = he(() => t.injectedHtml.map((o) => o()).join(""));
  return new Transform({ transform(o, n, s) {
    r.transform(o, this.push.bind(this)).then(() => s()).catch((a) => s(a));
  }, flush(o) {
    r.flush(this.push.bind(this)).then(() => o()).catch((n) => o(n));
  } });
}
function At(t) {
  const r = he(() => t.injectedHtml.map((n) => n()).join("")), o = new TextEncoder();
  return new TransformStream({ transform(n, s) {
    return r.transform(n, (a) => (s.enqueue(o.encode(a)), true));
  }, flush(n) {
    return r.flush((s) => (n.enqueue(s), true));
  } });
}
const qt = /(<body)/, jt = /(<\/body>)/, Bt = /(<\/html>)/, Dt = /(<\/[a-zA-Z][\w:.-]*?>)/g, Ft = new TextDecoder();
function he(t) {
  let r = false, o = "", n = "";
  return { async transform(s, a) {
    const i = o + Ft.decode(s), c = i.match(qt), u = i.match(jt), h = i.match(Bt);
    try {
      if (c && (r = true), !r) {
        a(i), o = "";
        return;
      }
      const p = t();
      if (u && h && u.index < h.index) {
        const y = u.index + u[0].length, w = h.index + h[0].length, j = i.slice(0, y) + p + i.slice(y, w) + i.slice(w);
        a(j), o = "";
      } else {
        let y, w = 0;
        for (; (y = Dt.exec(i)) !== null; ) w = y.index + y[0].length;
        if (w > 0) {
          const j = i.slice(0, w) + p + n;
          a(j), o = i.slice(w);
        } else o = i, n += p;
      }
    } catch (p) {
      throw console.error("Error transforming HTML:", p), p;
    }
  }, async flush(s) {
    o && s(o);
  } };
}
const Ot = async ({ request: t, router: r, responseHeaders: o }) => {
  if (typeof z$3.renderToReadableStream == "function") {
    const n = await z$3.renderToReadableStream(jsx(te, { router: r }), { signal: t.signal });
    isbot(t.headers.get("User-Agent")) && await n.allReady;
    const a = [At(r)].reduce((i, c) => i.pipeThrough(c), n);
    return new Response(a, { status: r.state.statusCode, headers: o });
  }
  if (typeof z$3.renderToPipeableStream == "function") {
    const n = new PassThrough(), s = z$3.renderToPipeableStream(jsx(te, { router: r }), { ...isbot(t.headers.get("User-Agent")) ? { onAllReady() {
      s.pipe(n);
    } } : { onShellReady() {
      s.pipe(n);
    } }, onError: (c, u) => {
      console.log("Error in renderToPipeableStream:", c, u);
    } }), i = [zt(r)].reduce((c, u) => c.pipe(u), n);
    return new Response(i, { status: r.state.statusCode, headers: o });
  }
  throw new Error("No renderToReadableStream or renderToPipeableStream found in react-dom/server. Ensure you are using a version of react-dom that supports streaming.");
};
function pe({ tag: t, attrs: r, children: o }) {
  switch (t) {
    case "title":
      return jsx("title", { ...r, suppressHydrationWarning: true, children: o });
    case "meta":
      return jsx("meta", { ...r, suppressHydrationWarning: true });
    case "link":
      return jsx("link", { ...r, suppressHydrationWarning: true });
    case "style":
      return jsx("style", { ...r, dangerouslySetInnerHTML: { __html: o } });
    case "script":
      return r && r.src ? jsx("script", { ...r, suppressHydrationWarning: true }) : typeof o == "string" ? jsx("script", { ...r, dangerouslySetInnerHTML: { __html: o }, suppressHydrationWarning: true }) : null;
    default:
      return null;
  }
}
const Wt = () => {
  const t = useRouter(), r = useRouterState({ select: (a) => a.matches.map((i) => i.meta).filter(Boolean) }), o = m$5.useMemo(() => {
    const a = [], i = {};
    let c;
    return [...r].reverse().forEach((u) => {
      [...u].reverse().forEach((h) => {
        var _a;
        if (h) if (h.title) c || (c = { tag: "title", children: h.title });
        else {
          const p = (_a = h.name) != null ? _a : h.property;
          if (p) {
            if (i[p]) return;
            i[p] = true;
          }
          a.push({ tag: "meta", attrs: { ...h } });
        }
      });
    }), c && a.push(c), a.reverse(), a;
  }, [r]), n = useRouterState({ select: (a) => a.matches.map((i) => i.links).filter(Boolean).flat(1).map((i) => ({ tag: "link", attrs: { ...i } })), structuralSharing: true }), s = useRouterState({ select: (a) => {
    const i = [];
    return a.matches.map((c) => t.looseRoutesById[c.routeId]).forEach((c) => {
      var u, h, p;
      return (p = (h = (u = t.manifest) == null ? void 0 : u.routes[c.id]) == null ? void 0 : h.preloads) == null ? void 0 : p.filter(Boolean).forEach((y) => {
        i.push({ tag: "link", attrs: { rel: "modulepreload", href: y } });
      });
    }), i;
  }, structuralSharing: true });
  return Yt([...o, ...s, ...n], (a) => JSON.stringify(a));
}, Vt = () => {
  const t = useRouter(), r = Wt(), o = m$5.useContext(Context.get("TanStackRouterHydrationContext", {}));
  return jsxs(Fragment, { children: [r.map((n, s) => createElement(pe, { ...n, key: `tsr-meta-${JSON.stringify(n)}` })), jsxs(Fragment, { children: [jsx(ScriptOnce, { log: false, children: '__TSR__={matches:[],streamedValues:{},queue:[],runQueue:()=>{let e=!1;__TSR__.queue=__TSR__.queue.filter((_=>!_()||(e=!0,!1))),e&&__TSR__.runQueue()},initMatch:e=>{__TSR__.queue.push((()=>(__TSR__.matches[e.index]||(__TSR__.matches[e.index]=e,Object.entries(e.extracted).forEach((([e,_])=>{if("stream"===_.type){let e;_.value=new ReadableStream({start(_){e=_}}),_.value.controller=e}else if("promise"===_.type){let e,t;_.value=new Promise(((_,u)=>{e=_,t=u})),_.resolve=e,_.reject=t}}))),!0))),__TSR__.runQueue()},resolvePromise:e=>{__TSR__.queue.push((()=>{const _=__TSR__.matches[e.matchIndex];if(_){const t=_.extracted[e.id];if(t)return t.resolve(e.value.data),!0}return!1})),__TSR__.runQueue()},cleanScripts:()=>{document.querySelectorAll(".tsr-once").forEach((e=>{e.remove()}))}};' }), jsx(ScriptOnce, { children: `__TSR__.dehydrated = ${M$2(t.options.transformer.stringify(o), { isScriptContext: true, wrap: true, json: true })}` })] })] });
}, Ut = () => jsx(Fragment, { children: Vt() });
function Yt(t, r) {
  const o = /* @__PURE__ */ new Set();
  return t.filter((n) => {
    const s = r(n);
    return o.has(s) ? false : (o.add(s), true);
  });
}
const Qt = () => {
  const t = useRouter(), r = useRouterState({ select: (s) => {
    const a = [];
    return s.matches.map((i) => t.looseRoutesById[i.routeId]).forEach((i) => {
      var c, u, h;
      return (h = (u = (c = t.manifest) == null ? void 0 : c.routes[i.id]) == null ? void 0 : u.assets) == null ? void 0 : h.filter((p) => p.tag === "script").forEach((p) => {
        a.push({ tag: "script", attrs: p.attrs, children: p.children });
      });
    }), a;
  }, structuralSharing: true }), { scripts: o } = useRouterState({ select: (s) => ({ scripts: s.matches.map((a) => a.scripts).filter(Boolean).flat(1).map(({ children: a, ...i }) => ({ tag: "script", attrs: { ...i, suppressHydrationWarning: true }, children: a })) }) }), n = [...o, ...r];
  return jsx(Fragment, { children: n.map((s, a) => createElement(pe, { ...s, key: `tsr-scripts-${s.tag}-${a}` })) });
}, B = { company: [{ label: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32", href: "/about" }, { label: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32", href: "/contact" }], tours: [{ label: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", href: "/tours" }, { label: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D", href: "/tours?type=study" }, { label: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27", href: "/tours?type=travel" }], blogs: [{ label: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", href: "/blogs" }, { label: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21", href: "/blogs?featured=true" }] }, Gt = [{ icon: Facebook, href: "https://facebook.com" }, { icon: Twitter, href: "https://twitter.com" }, { icon: Instagram, href: "https://instagram.com" }, { icon: Youtube, href: "https://youtube.com" }], Jt = [{ icon: Phone, text: "+66 81 123 4567" }, { icon: Mail, text: "contact@advantex.com" }, { icon: MapPin, text: "121/2 \u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 3 \u0E15.\u0E40\u0E27\u0E35\u0E22\u0E07 \u0E2D.\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E41\u0E2A\u0E19 \u0E08.\u0E40\u0E0A\u0E35\u0E22\u0E07\u0E23\u0E32\u0E22 57120" }], Xt = () => {
  const t = (/* @__PURE__ */ new Date()).getFullYear();
  return jsxs("footer", { className: "border-t bg-white", children: [jsx("div", { className: "container mx-auto px-4 py-12", children: jsxs("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5", children: [jsxs("aside", { className: "lg:col-span-2", children: [jsx(Link, { to: "/", className: "mb-4 block text-xl font-bold uppercase text-primary", children: "advantex international group co., ltd." }), jsx("p", { className: "mb-6 max-w-[30ch] text-muted-foreground", children: "\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E1E\u0E32\u0E19\u0E34\u0E0A\u0E22\u0E4C\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 0575567001670" }), jsx("div", { className: "space-y-3", children: Jt.map((r, o) => jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [jsx(r.icon, { className: "size-4" }), jsx("span", { children: r.text })] }, o)) })] }), jsxs("div", { children: [jsx("h3", { className: "mb-4 font-semibold", children: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17" }), jsx("ul", { className: "space-y-3", children: B.company.map((r) => jsx("li", { children: jsx(Link, { to: r.href, className: "text-muted-foreground transition-colors hover:text-primary", children: r.label }) }, r.href)) })] }), jsxs("div", { children: [jsx("h3", { className: "mb-4 font-semibold", children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08" }), jsx("ul", { className: "space-y-3", children: B.tours.map((r) => jsx("li", { children: jsx(Link, { to: r.href, className: "text-muted-foreground transition-colors hover:text-primary", children: r.label }) }, r.href)) })] }), jsxs("div", { children: [jsx("h3", { className: "mb-4 font-semibold", children: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21" }), jsx("ul", { className: "space-y-3", children: B.blogs.map((r) => jsx("li", { children: jsx(Link, { to: r.href, className: "text-muted-foreground transition-colors hover:text-primary", children: r.label }) }, r.href)) })] })] }) }), jsx("div", { className: "border-t", children: jsx("div", { className: "container mx-auto px-4 py-6", children: jsxs("div", { className: "flex flex-col items-center justify-between gap-4 sm:flex-row", children: [jsxs("p", { className: "text-center text-sm text-muted-foreground sm:text-left", children: ["\xA9 ", t, " Advantex. All rights reserved."] }), jsx("div", { className: "flex items-center gap-4", children: Gt.map((r, o) => jsx("a", { href: r.href, target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground transition-colors hover:text-primary", children: jsx(r.icon, { className: "size-5" }) }, o)) })] }) }) })] });
};
function d(...t) {
  return twMerge(clsx(t));
}
const fe = m$5.forwardRef(({ className: t, children: r, ...o }, n) => jsxs(g$1.Root, { ref: n, className: d("relative z-10 flex max-w-max flex-1 items-center justify-center", t), ...o, children: [r, jsx(xe, {})] }));
fe.displayName = g$1.Root.displayName;
const ge = m$5.forwardRef(({ className: t, ...r }, o) => jsx(g$1.List, { ref: o, className: d("group flex flex-1 list-none items-center justify-center space-x-1", t), ...r }));
ge.displayName = g$1.List.displayName;
const oe = g$1.Item, Kt = cva("group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"), U = m$5.forwardRef(({ className: t, children: r, ...o }, n) => jsxs(g$1.Trigger, { ref: n, className: d(Kt(), "group", t), ...o, children: [r, " ", jsx(ChevronDown, { className: "relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180", "aria-hidden": "true" })] }));
U.displayName = g$1.Trigger.displayName;
const Y = m$5.forwardRef(({ className: t, ...r }, o) => jsx(g$1.Content, { ref: o, className: d("left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto", t), ...r }));
Y.displayName = g$1.Content.displayName;
const xe = m$5.forwardRef(({ className: t, ...r }, o) => jsx("div", { className: d("absolute left-0 top-full flex justify-center"), children: jsx(g$1.Viewport, { className: d("origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]", t), ref: o, ...r }) }));
xe.displayName = g$1.Viewport.displayName;
const Zt = m$5.forwardRef(({ className: t, ...r }, o) => jsx(g$1.Indicator, { ref: o, className: d("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in", t), ...r, children: jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" }) }));
Zt.displayName = g$1.Indicator.displayName;
const er = [{ id: "harbin", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2E\u0E32\u0E23\u0E4C\u0E1A\u0E34\u0E19", to: "/tours", type: "travel", location: "harbin", description: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E40\u0E17\u0E28\u0E01\u0E32\u0E25\u0E19\u0E49\u0E33\u0E41\u0E02\u0E47\u0E07\u0E17\u0E35\u0E48\u0E43\u0E2B\u0E0D\u0E48\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E43\u0E19\u0E42\u0E25\u0E01 \u0E0A\u0E21\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E23\u0E31\u0E2A\u0E40\u0E0B\u0E35\u0E22\u0E42\u0E1A\u0E23\u0E32\u0E13 \u0E41\u0E25\u0E30\u0E25\u0E34\u0E49\u0E21\u0E23\u0E2A\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E40\u0E2B\u0E19\u0E37\u0E2D\u0E41\u0E17\u0E49\u0E46 \u0E02\u0E2D\u0E07\u0E08\u0E35\u0E19" }, { id: "xian", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E40\u0E0B\u0E35\u0E48\u0E22\u0E07\u0E44\u0E2E\u0E49", to: "/tours", type: "travel", location: "xian", description: "\u0E40\u0E22\u0E37\u0E2D\u0E19\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22\u0E23\u0E34\u0E21\u0E41\u0E21\u0E48\u0E19\u0E49\u0E33\u0E2B\u0E27\u0E07\u0E1C\u0E39\u0E48 \u0E15\u0E37\u0E48\u0E19\u0E15\u0E32\u0E01\u0E31\u0E1A\u0E15\u0E36\u0E01\u0E23\u0E30\u0E1F\u0E49\u0E32 The Bund \u0E41\u0E25\u0E30\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E1C\u0E2A\u0E21\u0E1C\u0E2A\u0E32\u0E19\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01-\u0E15\u0E30\u0E27\u0E31\u0E19\u0E15\u0E01" }, { id: "chengdu", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E40\u0E09\u0E34\u0E07\u0E15\u0E39", to: "/tours", type: "travel", location: "chengdu", description: "\u0E1E\u0E1A\u0E01\u0E31\u0E1A\u0E2B\u0E21\u0E35\u0E41\u0E1E\u0E19\u0E14\u0E49\u0E32\u0E22\u0E31\u0E01\u0E29\u0E4C\u0E43\u0E19\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E2D\u0E19\u0E38\u0E23\u0E31\u0E01\u0E29\u0E4C \u0E25\u0E34\u0E49\u0E21\u0E23\u0E2A\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E40\u0E2A\u0E09\u0E27\u0E19\u0E41\u0E17\u0E49 \u0E41\u0E25\u0E30\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E27\u0E34\u0E16\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E17\u0E35\u0E48\u0E1C\u0E48\u0E2D\u0E19\u0E04\u0E25\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E0A\u0E32\u0E27\u0E40\u0E09\u0E34\u0E07\u0E15\u0E39" }, { id: "beijing", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E1B\u0E31\u0E01\u0E01\u0E34\u0E48\u0E07", to: "/tours", type: "travel", location: "beijing", description: "\u0E2A\u0E33\u0E23\u0E27\u0E08\u0E1E\u0E23\u0E30\u0E23\u0E32\u0E0A\u0E27\u0E31\u0E07\u0E15\u0E49\u0E2D\u0E07\u0E2B\u0E49\u0E32\u0E21 \u0E40\u0E14\u0E34\u0E19\u0E1A\u0E19\u0E01\u0E33\u0E41\u0E1E\u0E07\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E08\u0E35\u0E19 \u0E41\u0E25\u0E30\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E2D\u0E31\u0E19\u0E22\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E0D\u0E48\u0E02\u0E2D\u0E07\u0E08\u0E35\u0E19\u0E43\u0E19\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2B\u0E25\u0E27\u0E07" }, { id: "guangzhou", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E01\u0E27\u0E48\u0E32\u0E07\u0E42\u0E08\u0E27", to: "/tours", type: "travel", location: "guangzhou", description: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E48\u0E32\u0E01\u0E32\u0E23\u0E04\u0E49\u0E32\u0E2A\u0E33\u0E04\u0E31\u0E0D\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2D\u0E32\u0E2B\u0E32\u0E23\u0E01\u0E27\u0E32\u0E07\u0E15\u0E38\u0E49\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E14\u0E31\u0E07 \u0E1C\u0E2A\u0E21\u0E1C\u0E2A\u0E32\u0E19\u0E04\u0E27\u0E32\u0E21\u0E17\u0E31\u0E19\u0E2A\u0E21\u0E31\u0E22\u0E01\u0E31\u0E1A\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E14\u0E31\u0E49\u0E07\u0E40\u0E14\u0E34\u0E21\u0E44\u0E14\u0E49\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E25\u0E07\u0E15\u0E31\u0E27" }, { id: "chongqing", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E09\u0E07\u0E0A\u0E34\u0E48\u0E07", to: "/tours", type: "travel", location: "chongqing", description: "\u0E2A\u0E31\u0E21\u0E1C\u0E31\u0E2A\u0E21\u0E2B\u0E32\u0E19\u0E04\u0E23\u0E1A\u0E19\u0E20\u0E39\u0E40\u0E02\u0E32\u0E23\u0E34\u0E21\u0E41\u0E21\u0E48\u0E19\u0E49\u0E33\u0E41\u0E22\u0E07\u0E0B\u0E35 \u0E25\u0E34\u0E49\u0E21\u0E23\u0E2A\u0E2B\u0E21\u0E49\u0E2D\u0E44\u0E1F\u0E09\u0E07\u0E0A\u0E34\u0E48\u0E07 \u0E41\u0E25\u0E30\u0E0A\u0E21\u0E27\u0E34\u0E27\u0E15\u0E36\u0E01\u0E23\u0E30\u0E1F\u0E49\u0E32\u0E22\u0E32\u0E21\u0E04\u0E48\u0E33\u0E04\u0E37\u0E19\u0E17\u0E35\u0E48\u0E2A\u0E27\u0E22\u0E07\u0E32\u0E21" }], tr = () => {
  const t = useRouterState(), { type: r } = t.location.search;
  return jsx(fe, { children: jsxs(ge, { children: [jsxs(oe, { children: [jsx(U, { className: d("bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary", r === "study" ? "text-primary" : "hover:text-primary"), children: jsx(Link, { to: "/tours", search: { type: "study" }, children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D" }) }), jsx(Y, { children: jsxs("ul", { className: "grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]", children: [jsx("li", { className: "row-span-3", children: jsxs(Link, { className: "flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md", to: "/tours", search: { type: "study" }, children: [jsx("div", { className: "mb-2 mt-4 text-lg font-medium", children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" }), jsx("p", { className: "text-sm leading-tight text-muted-foreground", children: "\u0E04\u0E49\u0E19\u0E1E\u0E1A\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E01\u0E32\u0E23\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E43\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E08\u0E35\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E35\u0E48\u0E04\u0E23\u0E2D\u0E1A\u0E04\u0E25\u0E38\u0E21\u0E17\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48\u0E1E\u0E31\u0E01 \u0E01\u0E32\u0E23\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07 \u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E15\u0E48\u0E32\u0E07\u0E46" })] }) }), jsx("li", { children: jsxs(Link, { to: "/tours", search: { type: "study", duration: "short-term" }, className: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", children: [jsx("div", { className: "text-sm font-medium leading-none", children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E22\u0E30\u0E2A\u0E31\u0E49\u0E19" }), jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E20\u0E32\u0E29\u0E32\u0E41\u0E25\u0E30\u0E27\u0E31\u0E12\u0E19\u0E18\u0E23\u0E23\u0E21\u0E08\u0E35\u0E19\u0E1C\u0E48\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E23\u0E30\u0E22\u0E30\u0E2A\u0E31\u0E49\u0E19 1-6 \u0E40\u0E14\u0E37\u0E2D\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E17\u0E35\u0E48\u0E1E\u0E31\u0E01\u0E41\u0E25\u0E30\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E04\u0E23\u0E1A\u0E04\u0E23\u0E31\u0E19" })] }) }), jsx("li", { children: jsxs(Link, { to: "/tours", search: { type: "study", duration: "long-term" }, className: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", children: [jsx("div", { className: "text-sm font-medium leading-none", children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E23\u0E30\u0E22\u0E30\u0E22\u0E32\u0E27" }), jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: "\u0E2B\u0E25\u0E31\u0E01\u0E2A\u0E39\u0E15\u0E23\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32\u0E23\u0E30\u0E22\u0E30\u0E22\u0E32\u0E27 1-4 \u0E1B\u0E35 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E42\u0E2D\u0E01\u0E32\u0E2A\u0E1D\u0E36\u0E01\u0E07\u0E32\u0E19\u0E41\u0E25\u0E30\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E27\u0E34\u0E16\u0E35\u0E0A\u0E35\u0E27\u0E34\u0E15\u0E43\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28\u0E08\u0E35\u0E19" })] }) })] }) })] }), jsxs(oe, { children: [jsx(U, { className: d("bg-transparent text-base font-normal transition-colors hover:bg-transparent hover:text-primary data-[state=open]:bg-transparent data-[state=open]:text-primary", r === "travel" ? "text-primary" : "hover:text-primary"), children: jsx(Link, { to: "/tours", search: { type: "travel" }, children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27" }) }), jsx(Y, { children: jsx("ul", { className: "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]", children: er.map((o) => jsx("li", { children: jsxs(Link, { to: "/tours", search: { type: "travel", location: o.location }, className: "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", children: [jsx("div", { className: "text-sm font-medium leading-none", children: o.title }), jsx("p", { className: "line-clamp-2 text-sm leading-snug text-muted-foreground", children: o.description })] }) }, o.title)) }) })] })] }) });
}, rr = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), E = m$5.forwardRef(({ className: t, variant: r, size: o, asChild: n = false, ...s }, a) => jsx(n ? Slot : "button", { className: d(rr({ variant: r, size: o, className: t })), ref: a, ...s }));
E.displayName = "Button";
const ye = m$6.Root, be = m$6.Trigger, or = m$6.Portal, ve = m$5.forwardRef(({ className: t, ...r }, o) => jsx(m$6.Overlay, { className: d("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", t), ...r, ref: o }));
ve.displayName = m$6.Overlay.displayName;
const nr = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", { variants: { side: { top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top", bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom", left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm", right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm" } }, defaultVariants: { side: "right" } }), G = m$5.forwardRef(({ side: t = "right", className: r, children: o, ...n }, s) => jsxs(or, { children: [jsx(ve, {}), jsxs(m$6.Content, { ref: s, className: d(nr({ side: t }), r), ...n, children: [jsxs(m$6.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [jsx(X$2, { className: "h-4 w-4" }), jsx("span", { className: "sr-only", children: "Close" })] }), o] })] }));
G.displayName = m$6.Content.displayName;
const J = ({ className: t, ...r }) => jsx("div", { className: d("flex flex-col space-y-2 text-center sm:text-left", t), ...r });
J.displayName = "SheetHeader";
const X = m$5.forwardRef(({ className: t, ...r }, o) => jsx(m$6.Title, { ref: o, className: d("text-lg font-semibold text-foreground", t), ...r }));
X.displayName = m$6.Title.displayName;
const K = m$5.forwardRef(({ className: t, ...r }, o) => jsx(m$6.Description, { ref: o, className: d("text-sm text-muted-foreground", t), ...r }));
K.displayName = m$6.Description.displayName;
function ar() {
  const r = useRouterState().location.pathname;
  return jsxs(ye, { children: [jsx(be, { asChild: true, className: "lg:hidden", children: jsx(E, { variant: "ghost", size: "icon", children: jsx(Menu, { className: "size-6" }) }) }), jsxs(G, { children: [jsxs(J, { children: [jsx(X, { children: "\u0E40\u0E21\u0E19\u0E39" }), jsx(K, { children: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E2B\u0E21\u0E27\u0E14\u0E2B\u0E21\u0E39\u0E48\u0E17\u0E35\u0E48\u0E04\u0E38\u0E13\u0E2A\u0E19\u0E43\u0E08" })] }), jsx("nav", { children: jsxs("ul", { className: "mt-8 flex flex-col gap-4", children: [jsx("li", { children: jsx(Link, { to: "/", className: d("text-lg font-medium transition-colors", r === "/" ? "text-primary" : "hover:text-primary"), children: "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01" }) }), jsx("li", { children: jsx(Link, { to: "/tours", search: { type: "study" }, className: d("text-lg font-medium transition-colors", r === "/tours" ? "text-primary" : "hover:text-primary"), children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08" }) }), jsx("li", { children: jsx(Link, { to: "/blogs", className: d("text-lg font-medium transition-colors", r === "/blogs" ? "text-primary" : "hover:text-primary"), children: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21" }) }), jsx("li", { children: jsx(Link, { to: "/about", className: d("text-lg font-medium transition-colors", r === "/about" ? "text-primary" : "hover:text-primary"), children: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32" }) }), jsx("li", { children: jsx(Link, { to: "/contact", className: d("text-lg font-medium transition-colors", r === "/contact" ? "text-primary" : "hover:text-primary"), children: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32" }) })] }) })] })] });
}
const sr = () => {
  const r = useRouterState().location.pathname;
  return jsx("header", { className: "sticky inset-x-0 top-0 z-50 h-[72px] border-b bg-white/80 backdrop-blur-md", children: jsxs("div", { className: "container mx-auto flex h-full items-center justify-between px-4", children: [jsx(Link, { to: "/", className: "pl-1 text-2xl font-bold text-primary", children: "ADVENTEX" }), jsx("nav", { className: "hidden lg:block", children: jsxs("div", { className: "flex items-center gap-2", children: [jsx(Link, { to: "/", className: d("px-4 py-2 text-base font-normal transition-colors", r === "/" ? "text-primary" : "hover:text-primary"), children: "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01" }), jsx(tr, {}), jsx(Link, { to: "/blogs", className: d("px-4 py-2 transition-colors", r === "/blogs" ? "text-primary" : "hover:text-primary"), children: "\u0E1A\u0E17\u0E04\u0E27\u0E32\u0E21" }), jsx(Link, { to: "/about", className: d("px-4 py-2 transition-colors", r === "/about" ? "text-primary" : "hover:text-primary"), children: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32" }), jsx(Link, { to: "/contact", className: d("px-4 py-2 transition-colors", r === "/contact" ? "text-primary" : "hover:text-primary"), children: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32" })] }) }), jsx(ar, {})] }) });
}, ir = "/_build/assets/globals-BUMEa2m7.css", N = createRootRoute({ head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E41\u0E2D\u0E14\u0E40\u0E27\u0E19\u0E40\u0E17\u0E47\u0E01\u0E0B\u0E4C : \u0E17\u0E31\u0E27\u0E23\u0E4C\u0E15\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 \u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C", description: "\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E15\u0E48\u0E32\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 \u0E43\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E17\u0E28 \u0E40\u0E23\u0E32\u0E04\u0E31\u0E14\u0E2A\u0E23\u0E23\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C \u0E17\u0E35\u0E48\u0E19\u0E48\u0E32\u0E2A\u0E19\u0E43\u0E08 \u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14 \u0E2B\u0E25\u0E32\u0E01\u0E2B\u0E25\u0E32\u0E22\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07 \u2713 \u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E14\u0E49\u0E27\u0E22\u0E04\u0E27\u0E32\u0E21\u0E40\u0E15\u0E47\u0E21\u0E43\u0E08 \u0E08\u0E2D\u0E07\u0E17\u0E31\u0E27\u0E23\u0E4C \u0E08\u0E31\u0E14\u0E01\u0E23\u0E38\u0E4A\u0E1B\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27 \u0E15\u0E31\u0E4B\u0E27\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E34\u0E19 \u0E1A\u0E31\u0E15\u0E23\u0E40\u0E02\u0E49\u0E32\u0E0A\u0E21 \u0E42\u0E17\u0E23: 02-254-9338." }], links: [{ rel: "stylesheet", href: ir }] }), component: lr });
function lr() {
  return jsx(cr, { children: jsx(Outlet, {}) });
}
function cr({ children: t }) {
  return jsxs("html", { children: [jsx("head", { children: jsx(Ut, {}) }), jsxs("body", { className: "min-h-screen bg-background antialiased", children: [jsxs("div", { className: "relative flex min-h-screen flex-col bg-background", children: [jsx(sr, {}), jsx("main", { className: "flex-1", children: t }), jsx(Xt, {})] }), jsx(ScrollRestoration, {}), jsx(Qt, {})] })] });
}
const dr = () => import('./chunks/build/contact-jtLj_M2M.mjs'), Ne = createFileRoute("/contact")({ head: () => ({ meta: [{ title: "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32 : \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E41\u0E2D\u0E14\u0E41\u0E27\u0E19\u0E0B\u0E4C\u0E40\u0E17\u0E47\u0E01 \u0E08\u0E33\u0E01\u0E31\u0E14 : \u0E28\u0E39\u0E19\u0E22\u0E4C\u0E23\u0E27\u0E21\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14" }] }), component: lazyRouteComponent(dr, "component", () => Ne.ssr) }), ur = () => import('./chunks/build/about-BqKYHHhD.mjs'), mr = () => import('./chunks/build/about-BqKYHHhD.mjs'), we = createFileRoute("/about")({ head: () => ({ meta: [{ title: "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A\u0E40\u0E23\u0E32 : \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E41\u0E2D\u0E14\u0E41\u0E27\u0E19\u0E0B\u0E4C\u0E40\u0E17\u0E47\u0E01 \u0E08\u0E33\u0E01\u0E31\u0E14 : \u0E28\u0E39\u0E19\u0E22\u0E4C\u0E23\u0E27\u0E21\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14" }] }), component: lazyRouteComponent(mr, "component", () => we.ssr), loader: lazyFn(ur, "loader") }), hr = () => import('./chunks/build/index-BcaqQp-Y.mjs'), Re = createFileRoute("/")({ component: lazyRouteComponent(hr, "component", () => Re.ssr) }), A = m$5.forwardRef(({ className: t, type: r, ...o }, n) => jsx("input", { type: r, className: d("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", t), ref: n, ...o }));
A.displayName = "Input";
const pr = y.Root, I = m$5.forwardRef(({ className: t, ...r }, o) => jsx(y.Item, { ref: o, className: d("border-b", t), ...r }));
I.displayName = "AccordionItem";
const $ = m$5.forwardRef(({ className: t, children: r, ...o }, n) => jsx(y.Header, { className: "flex", children: jsxs(y.Trigger, { ref: n, className: d("flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", t), ...o, children: [r, jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })] }) }));
$.displayName = y.Trigger.displayName;
const H = m$5.forwardRef(({ className: t, children: r, ...o }, n) => jsx(y.Content, { ref: n, className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", ...o, children: jsx("div", { className: d("pb-4 pt-0", t), children: r }) }));
H.displayName = y.Content.displayName;
const _e = m$5.forwardRef(({ className: t, ...r }, o) => jsx(M$1.Root, { ref: o, className: d("peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", t), ...r, children: jsx(M$1.Indicator, { className: d("flex items-center justify-center text-current"), children: jsx(Check, { className: "h-4 w-4" }) }) }));
_e.displayName = M$1.Root.displayName;
const fr = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"), Z = m$5.forwardRef(({ className: t, ...r }, o) => jsx(z$1.Root, { ref: o, className: d(fr(), t), ...r }));
Z.displayName = z$1.Root.displayName;
const Se = m$5.forwardRef(({ className: t, orientation: r = "horizontal", decorative: o = true, ...n }, s) => jsx(_$2.Root, { ref: s, decorative: o, orientation: r, className: d("shrink-0 bg-border", r === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", t), ...n }));
Se.displayName = _$2.Root.displayName;
const ke = m$5.forwardRef(({ className: t, ...r }, o) => jsxs(v$2.Root, { ref: o, className: d("relative flex w-full touch-none select-none items-center", t), ...r, children: [jsx(v$2.Track, { className: "relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20", children: jsx(v$2.Range, { className: "absolute h-full bg-primary" }) }), jsx(v$2.Thumb, { className: "block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" })] }));
ke.displayName = v$2.Root.displayName;
const P = m$5.forwardRef(({ className: t, id: r, title: o, checked: n, onChange: s, ...a }, i) => jsxs("li", { ref: i, className: d("flex items-center gap-2", t), ...a, children: [jsx(_e, { id: r, className: "border-muted-foreground shadow-none data-[state=checked]:border-primary data-[state=checked]:bg-primary", checked: n, onCheckedChange: (c) => s(c) }), jsx(Z, { htmlFor: r, className: "text-sm font-normal leading-none", children: o })] }));
P.displayName = "ListItem";
const gr = [{ id: "all", title: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", checked: true }, { id: "study", title: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D", checked: false }, { id: "travel", title: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27", checked: false }], xr = [{ id: "all", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", checked: true }, { id: "harbin", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E2E\u0E32\u0E23\u0E4C\u0E1A\u0E34\u0E19", checked: false }, { id: "shanghai", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E40\u0E0B\u0E35\u0E48\u0E22\u0E07\u0E44\u0E2E\u0E49", checked: false }, { id: "chengdu", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E40\u0E09\u0E34\u0E07\u0E15\u0E39", checked: false }, { id: "beijing", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E1B\u0E31\u0E01\u0E01\u0E34\u0E48\u0E07", checked: false }, { id: "guangzhou", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E01\u0E27\u0E48\u0E32\u0E07\u0E42\u0E08\u0E27", checked: false }, { id: "chongqing", title: "\u0E40\u0E21\u0E37\u0E2D\u0E07\u0E09\u0E07\u0E0A\u0E34\u0E48\u0E07", checked: false }], yr = [{ id: "all", title: "\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", checked: true }, { id: "1", title: "\u0E21\u0E01\u0E23\u0E32\u0E04\u0E21", checked: false }, { id: "2", title: "\u0E01\u0E38\u0E21\u0E20\u0E32\u0E1E\u0E31\u0E19\u0E18\u0E4C", checked: false }, { id: "3", title: "\u0E21\u0E35\u0E19\u0E32\u0E04\u0E21", checked: false }, { id: "4", title: "\u0E40\u0E21\u0E29\u0E32\u0E22\u0E19", checked: false }, { id: "5", title: "\u0E1E\u0E24\u0E29\u0E20\u0E32\u0E04\u0E21", checked: false }, { id: "6", title: "\u0E21\u0E34\u0E16\u0E38\u0E19\u0E32\u0E22\u0E19", checked: false }, { id: "7", title: "\u0E01\u0E23\u0E01\u0E0E\u0E32\u0E04\u0E21", checked: false }, { id: "8", title: "\u0E2A\u0E34\u0E07\u0E2B\u0E32\u0E04\u0E21", checked: false }, { id: "9", title: "\u0E01\u0E31\u0E19\u0E22\u0E32\u0E22\u0E19", checked: false }, { id: "10", title: "\u0E15\u0E38\u0E25\u0E32\u0E04\u0E21", checked: false }, { id: "11", title: "\u0E1E\u0E24\u0E28\u0E08\u0E34\u0E01\u0E32\u0E22\u0E19", checked: false }, { id: "12", title: "\u0E18\u0E31\u0E19\u0E27\u0E32\u0E04\u0E21", checked: false }], br = [{ id: "all", title: "\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", checked: true }, { id: "short", title: "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E22\u0E30\u0E2A\u0E31\u0E49\u0E19", checked: false }, { id: "long", title: "\u0E40\u0E23\u0E35\u0E22\u0E19\u0E15\u0E48\u0E2D\u0E23\u0E30\u0E22\u0E30\u0E22\u0E32\u0E27", checked: false }], vr = () => {
  const [o, n] = m$5.useState({ priceRange: [0, 2e5] }), s = (a) => {
    const i = { ...o, priceRange: a };
    n(i);
  };
  return jsxs("div", { className: "space-y-6", children: [jsxs("div", { className: "flex flex-col gap-2", children: [jsx(Z, { className: "text-sm font-semibold leading-none", children: "\u0E0A\u0E48\u0E27\u0E07\u0E23\u0E32\u0E04\u0E32" }), jsxs("div", { className: "flex items-center gap-2", children: [jsx(A, { type: "number", value: o.priceRange[0], onChange: (a) => s([+a.target.value, o.priceRange[1]]), className: "w-24 rounded-md border px-3 py-2" }), jsx("span", { className: "font-normal text-muted-foreground", children: "-" }), jsx(A, { type: "number", value: o.priceRange[1], onChange: (a) => s([o.priceRange[0], +a.target.value]), className: "w-24 rounded-md border px-3 py-2" })] }), jsx("div", { className: "pt-2", children: jsx(ke, { min: 0, max: 2e5, step: 1e3, value: o.priceRange, onValueChange: s, className: "w-full cursor-grab" }) })] }), jsx(Se, { className: "text-muted-foreground" }), jsxs(pr, { type: "multiple", className: "w-full", defaultValue: ["item-1"], children: [jsxs(I, { value: "item-1", className: "border-none", children: [jsx($, { className: "text-sm font-normal leading-none text-muted-foreground hover:no-underline", children: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08" }), jsx(H, { children: jsx("ul", { className: "space-y-2", children: gr.map((a) => jsx(P, { ...a, checked: a.checked, onChange: () => {
  } }, a.id)) }) })] }), jsxs(I, { value: "item-2", className: "border-none", children: [jsx($, { className: "text-sm font-normal leading-none text-muted-foreground hover:no-underline", children: "\u0E40\u0E21\u0E37\u0E2D\u0E07" }), jsx(H, { children: jsx("ul", { className: "h-24 space-y-2 overflow-y-auto", children: xr.map((a) => jsx(P, { ...a, checked: a.checked, onChange: () => {
  } }, a.id)) }) })] }), jsxs(I, { value: "item-3", className: "border-none", children: [jsx($, { className: "text-sm font-normal leading-none text-muted-foreground hover:no-underline", children: "\u0E40\u0E14\u0E37\u0E2D\u0E19" }), jsx(H, { children: jsx("ul", { className: "h-24 space-y-2 overflow-y-auto", children: yr.map((a) => jsx(P, { ...a, checked: a.checked, onChange: () => {
  } }, a.id)) }) })] }), jsxs(I, { value: "item-4", className: "border-none", children: [jsx($, { className: "text-sm font-normal leading-none text-muted-foreground hover:no-underline", children: "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E01\u0E34\u0E08\u0E01\u0E23\u0E23\u0E21" }), jsx(H, { children: jsx("ul", { className: "space-y-2", children: br.map((a) => jsx(P, { ...a, checked: a.checked, onChange: () => {
  } }, a.id)) }) })] })] })] });
}, Nr = m$5.forwardRef(({ className: t, children: r, ...o }, n) => jsx("div", { ref: n, className: d("mb-8 flex flex-col items-center justify-between gap-4 rounded-lg border bg-background p-4 md:flex-row", t), ...o, children: r }));
Nr.displayName = "TourSearch";
const wr = m$5.forwardRef(({ className: t, totalCount: r, ...o }, n) => jsxs("div", { ref: n, className: d("flex flex-col gap-2", t), ...o, children: [jsx("h2", { className: "text-2xl font-semibold", children: "\u0E04\u0E49\u0E19\u0E2B\u0E32\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08" }), jsxs("p", { className: "text-sm text-muted-foreground", children: ["\u0E1E\u0E1A\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14", " ", jsx("span", { className: "font-medium text-orange-500", children: r }), " \u0E23\u0E32\u0E22\u0E01\u0E32\u0E23"] })] }));
wr.displayName = "TourSearchHeader";
const Rr = m$5.forwardRef(({ className: t, searchQuery: r, onSearchChange: o, viewMode: n, onViewModeChange: s, ...a }, i) => jsxs("div", { ref: i, className: d("flex w-full items-center gap-4 md:w-auto", t), ...a, children: [jsxs("div", { className: "relative flex-1 md:w-64", children: [jsx(Search, { className: "absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-400" }), jsx(A, { placeholder: "Search tours...", className: "pl-9", value: r, onChange: (c) => o(c.target.value) })] }), jsx("div", { className: "md:hidden", children: jsxs(ye, { children: [jsx(be, { asChild: true, children: jsx(E, { variant: "outline", size: "icon", children: jsx(SlidersHorizontal, { className: "size-4" }) }) }), jsxs(G, { children: [jsxs(J, { children: [jsx(X, { children: "\u0E01\u0E23\u0E2D\u0E07\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27" }), jsx(K, { children: "\u0E01\u0E23\u0E2D\u0E07\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E48\u0E2D\u0E07\u0E40\u0E17\u0E35\u0E48\u0E22\u0E27\u0E15\u0E32\u0E21\u0E04\u0E27\u0E32\u0E21\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13" })] }), jsx("div", { className: "py-4", children: jsx(vr, {}) })] })] }) }), jsxs("div", { className: "flex rounded-md border", children: [jsx(E, { variant: "ghost", size: "icon", className: "rounded-none transition-colors hover:bg-primary/10", onClick: () => s("grid"), children: jsx(LayoutGrid, { className: d("size-4", n === "grid" && "text-primary") }) }), jsx(E, { variant: "ghost", size: "icon", className: "rounded-none transition-colors hover:bg-primary/10", onClick: () => s("list"), children: jsx(List, { className: d("size-4", n === "list" && "text-primary") }) })] })] }));
Rr.displayName = "TourSearchControls";
const _r = () => import('./chunks/build/index-IMqa8d57.mjs'), Sr = () => import('./chunks/build/index-IMqa8d57.mjs'), kr = z$2.object({ type: z$2.enum(["study", "travel"]).default("study"), duration: z$2.enum(["short-term", "long-term"]).optional(), location: z$2.string().optional(), price: z$2.number().optional() }), Te = createFileRoute("/tours/")({ head: () => ({ meta: [{ title: "\u0E41\u0E1E\u0E47\u0E04\u0E40\u0E01\u0E08\u0E17\u0E31\u0E27\u0E23\u0E4C : \u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E41\u0E2D\u0E14\u0E41\u0E27\u0E19\u0E0B\u0E4C\u0E40\u0E17\u0E47\u0E01 \u0E08\u0E33\u0E01\u0E31\u0E14 : \u0E28\u0E39\u0E19\u0E22\u0E4C\u0E23\u0E27\u0E21\u0E17\u0E31\u0E27\u0E23\u0E4C\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14" }] }), component: lazyRouteComponent(Sr, "component", () => Te.ssr), validateSearch: (t) => kr.parse(t), loader: lazyFn(_r, "loader") }), Tr = () => import('./chunks/build/index-8ppc5UHZ.mjs'), Cr = () => import('./chunks/build/index-8ppc5UHZ.mjs'), Ce = createFileRoute("/blogs/")({ component: lazyRouteComponent(Cr, "component", () => Ce.ssr), loader: lazyFn(Tr, "loader") }), Ir = () => import('./chunks/build/_tourId-BGxO_fRW.mjs'), Ie = createFileRoute("/tours/$tourId")({ component: lazyRouteComponent(Ir, "component", () => Ie.ssr) }), $r = () => import('./chunks/build/_blogId-BxHXRZr1.mjs'), $e = createFileRoute("/blogs/$blogId")({ component: lazyRouteComponent($r, "component", () => $e.ssr) }), Hr = Ne.update({ id: "/contact", path: "/contact", getParentRoute: () => N }), Pr = we.update({ id: "/about", path: "/about", getParentRoute: () => N }), Er = Re.update({ id: "/", path: "/", getParentRoute: () => N }), Mr = Te.update({ id: "/tours/", path: "/tours/", getParentRoute: () => N }), Lr = Ce.update({ id: "/blogs/", path: "/blogs/", getParentRoute: () => N }), zr = Ie.update({ id: "/tours/$tourId", path: "/tours/$tourId", getParentRoute: () => N }), Ar = $e.update({ id: "/blogs/$blogId", path: "/blogs/$blogId", getParentRoute: () => N }), qr = { IndexRoute: Er, AboutRoute: Pr, ContactRoute: Hr, BlogsBlogIdRoute: Ar, ToursTourIdRoute: zr, BlogsIndexRoute: Lr, ToursIndexRoute: Mr }, jr = N._addFileChildren(qr)._addFileTypes();
function Br() {
  return createRouter$2({ routeTree: jr });
}
const io = Mt({ createRouter: Br, getRouterManifest: yt })(Ot);

const handlers = [
  { route: '', handler: _BgtZt3, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: G$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: io, lazy: false, middleware: true, method: undefined }
];

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === "undefined") {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter(
        (key) => key.startsWith(base) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join$1(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/33devas/Downloads/work-stations/adventex-tanstack/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

function defaultCacheOptions() {
  return {
    name: "_",
    base: "/cache",
    swr: true,
    maxAge: 1
  };
}
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions(), ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey).catch((error) => {
      console.error(`[nitro] [cache] Cache read error.`, error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          let setOpts;
          if (opts.maxAge && !opts.swr) {
            setOpts = { ttl: opts.maxAge };
          }
          const promise = useStorage().setItem(cacheKey, entry, setOpts).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event?.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
function cachedFunction(fn, opts = {}) {
  return defineCachedFunction(fn, opts);
}
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions()) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      let _pathname;
      try {
        _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      } catch {
        _pathname = "-";
      }
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        const value = incomingEvent.node.req.headers[header];
        if (value !== void 0) {
          variableHeaders[header] = value;
        }
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2(void 0);
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return true;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            if (Array.isArray(headers2) || typeof headers2 === "string") {
              throw new TypeError("Raw headers  is not supported.");
            }
            for (const header in headers2) {
              const value = headers2[header];
              if (value !== void 0) {
                this.setHeader(
                  header,
                  value
                );
              }
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(
      event
    );
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        if (value !== void 0) {
          event.node.res.setHeader(name, value);
        }
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {}
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((error_) => {
      console.error("Error while capturing another error", error_);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp$1.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp$1.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  return app;
}
function runNitroPlugins(nitroApp2) {
  for (const plugin of plugins) {
    try {
      plugin(nitroApp2);
    } catch (error) {
      nitroApp2.captureError(error, { tags: ["plugin"] });
      throw error;
    }
  }
}
const nitroApp$1 = createNitroApp();
function useNitroApp() {
  return nitroApp$1;
}
runNitroPlugins(nitroApp$1);

const nitroApp = useNitroApp();
const server = Bun.serve({
  port: process.env.NITRO_PORT || process.env.PORT || 3e3,
  websocket: void 0,
  async fetch(req, server2) {
    const url = new URL(req.url);
    let body;
    if (req.body) {
      body = await req.arrayBuffer();
    }
    return nitroApp.localFetch(url.pathname + url.search, {
      host: url.hostname,
      protocol: url.protocol,
      headers: req.headers,
      method: req.method,
      redirect: req.redirect,
      body
    });
  }
});
console.log(`Listening on http://localhost:${server.port}...`);

export { $e as $, A, Ce as C, E, Nr as N, Pt as P, Rr as R, Te as T, Z, wr as a, ao as b, re as c, d, eventHandler as e, getDefaultExportFromNamespaceIfNotNamed as f, gt as g, kt as k, node$1 as n, rr as r, so as s, vr as v, we as w };
//# sourceMappingURL=index.mjs.map
