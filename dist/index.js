"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var t=u(function(d,i){
var a=require('@stdlib/ndarray-base-to-unique-normalized-indices/dist'),l=require('@stdlib/array-base-indices-complement/dist'),c=require('@stdlib/array-base-take-indexed/dist');function m(r,e){var n=a(e,r.length-1);return n===null?[]:c(r,l(r.length,n))}i.exports=m
});var o=t();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
