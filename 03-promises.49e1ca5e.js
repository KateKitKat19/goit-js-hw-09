function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=i);var r=i("eWCmQ");const l={formRef:document.querySelector(".form"),delayRef:document.querySelector('input[name="delay"]'),stepRef:document.querySelector('input[name="step"]'),amountRef:document.querySelector('input[name="amount"]')};function u(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{setTimeout((()=>{n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}function a({position:o,delay:n}){e(r).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}function f({position:o,delay:n}){e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)}l.formRef.addEventListener("submit",(function(e){e.preventDefault();const o=l.amountRef.value,n=l.delayRef.value,t=l.stepRef.value;for(let e=1;e<=o;e+=1){const o=[e],i=Number(n)+t*[e];console.log("currentDelay",i),u(o,i).then((({position:e,delay:o})=>{f({position:e,delay:o})})).catch((({position:e,delay:o})=>{a({position:e,delay:o})}))}}));
//# sourceMappingURL=03-promises.49e1ca5e.js.map
