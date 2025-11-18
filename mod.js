// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n,r){return n<0?(n+=r+1)<0?-1:n:n>r?-1:n}function r(r,t){var u=function(r,t){var u,e,o,f;for(u={},e=[],f=0;f<r.length;f++){if((o=n(r[f],t))<0)return null;void 0===u[o]&&(u[o]=!0,e.push(o))}return e}(t,r.length-1);return null===u?[]:function(n,r){var t,u;for(t=[],u=0;u<r.length;u++)t.push(n[r[u]]);return t}(r,function(n,r){var t,u,e;for(t={},e=0;e<r.length;e++)t[r[e]]=!0;for(u=[],e=0;e<n;e++)void 0===t[e]&&u.push(e);return u}(r.length,u))}export{r as default};
//# sourceMappingURL=mod.js.map
