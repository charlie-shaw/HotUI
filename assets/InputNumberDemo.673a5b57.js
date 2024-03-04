let e=document.createElement("style");e.innerHTML=".box>*{margin-right:20px}",document.head.appendChild(e);import{g as n,q as t,o,j as r,r as u,w as l,a as s,d as c,c as a,b as m,h as d,F as p}from"./index.6e1d6788.js";var i=n({__name:"InputNumberBasic",setup(e){const n=t(1),l=e=>{console.log(e)};return(e,t)=>{const s=u("ht-input-number");return o(),r(s,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),min:1,max:10,onChange:l},null,8,["modelValue"])}}});function v(e){e.__sourceCode='<template>\r\n  <ht-input-number v-model="num" :min="1" :max="10" @change="handleChange" />\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst num = ref(1)\r\nconst handleChange = (value: number) => {\r\n  console.log(value)\r\n}\r\n<\/script>',e.__sourceCodeTitle=" 基础用法 "}v(i);var b={};const f=s("p",{class:"row"},[c(" 要使用它，只需要在 "),s("code",null,"<ht-input-number>"),c(" 元素中使用 v-model 绑定变量即可，变量的初始值即为默认值。 ")],-1);b.render=function(e,n,t,s,c,a){const m=u("desc-component");return o(),r(m,null,{default:l((()=>[f])),_:1})};var _=n({__name:"InputNumberDisabled",setup(e){const n=t(1);return(e,t)=>{const l=u("ht-input-number");return o(),r(l,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),disabled:!0},null,8,["modelValue"])}}});function h(e){e.__sourceCode='<template>\r\n  <ht-input-number v-model="num" :disabled="true" />\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst num = ref(1)\r\n<\/script>',e.__sourceCodeTitle=" 禁用状态 "}h(_);var g={};const V=s("p",{class:"row"},[s("code",null,"disabled"),c(" 属性接受一个 "),s("code",null,"Boolean"),c(" ，设置为"),s("code",null,"true"),c(" 即可禁用整个组件。 ，如果你只需要控制数值在某一范围内，可以设置 "),s("code",null,"min"),c(" 属性和 "),s("code",null,"max"),c(" 属性， 默认最小值为 0。 ")],-1);g.render=function(e,n,t,s,c,a){const m=u("desc-component");return o(),r(m,null,{default:l((()=>[V])),_:1})};var C=n({__name:"InputNumberStep",setup(e){const n=t(5);return(e,t)=>{const l=u("ht-input-number");return o(),r(l,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),step:2},null,8,["modelValue"])}}});function x(e){e.__sourceCode='<template>\r\n  <ht-input-number v-model="num" :step="2" />\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst num = ref(5)\r\n<\/script>',e.__sourceCodeTitle=" 步进 "}x(C);var y={};const I=s("p",{class:"row"},[c("允许定义递增递减的步进控制 设置 "),s("code",null,"step"),c(" 属性可以控制步长。")],-1);y.render=function(e,n,t,s,c,a){const m=u("desc-component");return o(),r(m,null,{default:l((()=>[I])),_:1})};var N=n({__name:"InputNumberStrictly",setup(e){const n=t(2);return(e,t)=>{const l=u("ht-input-number");return o(),r(l,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),step:2,"step-strictly":""},null,8,["modelValue"])}}});function U(e){e.__sourceCode='<template>\r\n  <ht-input-number v-model="num" :step="2" step-strictly />\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst num = ref(2)\r\n<\/script>',e.__sourceCodeTitle=" 严格步进 "}U(N);var w={};const z=s("p",{class:"row"},[s("code",null,"step-strictly"),c(" 属性接受一个"),s("code",null,"Boolean"),c(" 。 如果这个属性被设置为 "),s("code",null,"true"),c(" ，则只能输入步进的倍数。 ")],-1);w.render=function(e,n,t,s,c,a){const m=u("desc-component");return o(),r(m,null,{default:l((()=>[z])),_:1})};var T=n({__name:"InputNumberPrecision",setup(e){const n=t(1);return(e,t)=>{const l=u("ht-input-number");return o(),r(l,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),precision:2,step:.1,max:10},null,8,["modelValue","step"])}}});function D(e){e.__sourceCode='<template>\r\n  <ht-input-number v-model="num" :precision="2" :step="0.1" :max="10" />\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst num = ref(1)\r\n<\/script>',e.__sourceCodeTitle=" 精度 "}D(T);var B={};const E=s("p",{class:"row"},[c("设置 "),s("code",null,"precision"),c(" 属性可以控制数值精度，接收一个 "),s("code",null,"Number"),c("。")],-1);B.render=function(e,n,t,s,c,a){const m=u("desc-component");return o(),r(m,null,{default:l((()=>[E])),_:1})};const F={class:"box"};var S=n({__name:"InputNumberSize",setup(e){const n=t(1),r=t(2),l=t(3);return(e,t)=>{const s=u("ht-input-number");return o(),a("div",F,[m(s,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=e=>n.value=e),size:"large"},null,8,["modelValue"]),m(s,{modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=e=>r.value=e)},null,8,["modelValue"]),m(s,{modelValue:l.value,"onUpdate:modelValue":t[2]||(t[2]=e=>l.value=e),size:"small"},null,8,["modelValue"])])}}});function j(e){e.__sourceCode='<template>\r\n  <div class="box">\r\n    <ht-input-number v-model="num1" size="large" />\r\n    <ht-input-number v-model="num2" />\r\n    <ht-input-number v-model="num3" size="small" />\r\n  </div>\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from "vue";\r\n\r\nconst num1 = ref(1);\r\nconst num2 = ref(2);\r\nconst num3 = ref(3);\r\n<\/script>\r\n<style lang="scss">\r\n  .box{\r\n    >*{\r\n      margin-right: 20px;\r\n    }\r\n  }\r\n</style>',e.__sourceCodeTitle=" 不同的输入框尺寸 "}j(S);var A={};const q=s("p",{class:"row"},[c("使用 "),s("code",null,"size"),c(" 属性额外配置尺寸，可选的尺寸大小为："),s("code",null,"large"),c(" 或 "),s("code",null,"small")],-1);A.render=function(e,n,t,s,c,a){const m=u("desc-component");return o(),r(m,null,{default:l((()=>[q])),_:1})};const H=s("h2",{style:{"margin-bottom":"20px"}},"Input Number 数字输入框",-1),L=s("p",null,"仅允许输入标准的数字值，可定义范围",-1);var M={__name:"InputNumberDemo",setup(e){const n=["属性名","说明","类型","可选值","默认值"],t=[["v-model","选中项绑定值","<code>number </code>","",""],["<code>min</code>","设置计数器允许的最小值","<code>number</code>","","<code>-Infinity</code>"],["<code>max</code>","设置计数器允许的最大值","<code>number</code>","","<code>Infinity</code>"],["step","计数器步长","<code>number</code>","","1"],["step-strictly","是否只能输入 step 的倍数","<code>boolean</code>","","false"],["precision","数值精度","<code>number</code>","",""],["size","计数器尺寸\t","<code>string</code>","large/default/small","default"],["disabled","是否禁用状态\t","<code>boolean</code>","","false"]],r=["事件名","说明","回调函数"],l=[["change","绑定值被改变时触发","(currentValue: number)"],["blur","在组件 Input 失去焦点时触发","(event: FocusEvent)"],["focus","在组件 Input 获得焦点时触发\t","(event: FocusEvent)"]],s=["方法名","说明","参数"],c=[["focus","使 input 组件获得焦点\t",""],["blur","使 input 组件失去焦点\t",""]];return(e,v)=>{const f=u("Demo"),h=u("Api");return o(),a(p,null,[H,L,m(f,{component:i,"desc-component":b}),m(f,{component:_,"desc-component":g}),m(f,{component:C,"desc-component":y}),m(f,{component:N,"desc-component":w}),m(f,{component:T,"desc-component":B}),m(f,{component:S,"desc-component":A}),d(" Api属性 "),m(h,{title:"属性",theads:n,bodyData:t}),d(" 事件 "),m(h,{title:"事件",theads:r,bodyData:l}),d(" 方法 "),m(h,{title:"方法",theads:s,bodyData:c})],64)}}};export{M as default};
