import{g as e,q as o,o as l,c as d,a,b as r,w as t,d as n,F as i,r as u,j as s,h as c}from"./index.6e1d6788.js";var p=e({__name:"RadioBasic",setup(e){const s=o("1"),c=o("1"),p=o("1");return(e,o)=>{const m=u("ht-radio"),b=u("ht-radio-group");return l(),d(i,null,[a("div",null,[r(b,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e)},{default:t((()=>[r(m,{label:"1",size:"large"},{default:t((()=>[n("Option 1")])),_:1}),r(m,{label:"2",size:"large"},{default:t((()=>[n("Option 2")])),_:1})])),_:1},8,["modelValue"])]),a("div",null,[r(b,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value=e)},{default:t((()=>[r(m,{label:"1"},{default:t((()=>[n("Option 1")])),_:1}),r(m,{label:"2"},{default:t((()=>[n("Option 2")])),_:1})])),_:1},8,["modelValue"])]),a("div",null,[r(b,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value=e)},{default:t((()=>[r(m,{label:"1",size:"small"},{default:t((()=>[n("Option 1")])),_:1}),r(m,{label:"2",size:"small"},{default:t((()=>[n("Option 2")])),_:1})])),_:1},8,["modelValue"])]),a("div",null,[r(b,{modelValue:p.value,"onUpdate:modelValue":o[3]||(o[3]=e=>p.value=e),disabled:""},{default:t((()=>[r(m,{label:"1",size:"small"},{default:t((()=>[n("Option 1")])),_:1}),r(m,{label:"2",size:"small"},{default:t((()=>[n("Option 2")])),_:1})])),_:1},8,["modelValue"])])],64)}}});function m(e){e.__sourceCode='<template>\r\n  <div >\r\n    <ht-radio-group v-model="radio1" >\r\n      <ht-radio label="1" size="large">Option 1</ht-radio>\r\n      <ht-radio label="2" size="large">Option 2</ht-radio>\r\n    </ht-radio-group>\r\n  </div>\r\n  <div >\r\n    <ht-radio-group v-model="radio2" >\r\n      <ht-radio label="1">Option 1</ht-radio>\r\n      <ht-radio label="2">Option 2</ht-radio>\r\n    </ht-radio-group>\r\n  </div>\r\n  <div>\r\n    <ht-radio-group v-model="radio3" >\r\n      <ht-radio label="1" size="small">Option 1</ht-radio>\r\n      <ht-radio label="2" size="small">Option 2</ht-radio>\r\n    </ht-radio-group>\r\n  </div>\r\n  <div >\r\n    <ht-radio-group v-model="radio3" disabled >\r\n      <ht-radio label="1" size="small">Option 1</ht-radio>\r\n      <ht-radio label="2" size="small">Option 2</ht-radio>\r\n    </ht-radio-group>\r\n  </div>\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst radio1 = ref(\'1\')\r\nconst radio2 = ref(\'1\')\r\nconst radio3 = ref(\'1\')\r\n<\/script>',e.__sourceCodeTitle=" 基础用法 "}m(p);var b={};const h=a("h3",null,"单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。",-1),v=a("p",{class:"row"},[n(" 要使用 Radio 组件，只需要设置"),a("code",null,"v-model"),n(" 绑定变量， 选中意味着变量的值为相应 Radio "),a("code",null,"label"),n(" 属性的值， "),a("code",null,"label"),n("可以是"),a("code",null,"String"),n(" 、"),a("code",null,"Number"),n(" 或 "),a("code",null,"Boolean"),n(" 。 ")],-1);b.render=function(e,o,d,a,r,n){const i=u("desc-component");return l(),s(i,null,{default:t((()=>[h,v])),_:1})};var f=e({__name:"RadioDisabled",setup(e){const a=o("selected and disabled");return(e,o)=>{const s=u("ht-radio");return l(),d(i,null,[r(s,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=e=>a.value=e),disabled:"",label:"disabled"},{default:t((()=>[n("Option A")])),_:1},8,["modelValue"]),r(s,{modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=e=>a.value=e),disabled:"",label:"selected and disabled"},{default:t((()=>[n("Option B")])),_:1},8,["modelValue"])],64)}}});function _(e){e.__sourceCode='<template>\r\n  <ht-radio v-model="radio" disabled label="disabled">Option A</ht-radio>\r\n  <ht-radio v-model="radio" disabled label="selected and disabled"\r\n    >Option B</ht-radio>\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst radio = ref(\'selected and disabled\')\r\n<\/script>',e.__sourceCodeTitle=" 禁用状态 "}_(f);var g={};const O=a("p",{class:"row"},[a("code",null,"disabled"),n(" 属性可以用来控制单选框的禁用状态。 ")],-1),V=a("p",{class:"row"},[n(" 你只需要为单选框设置 "),a("code",null,"disabled"),n(" 属性就能控制其禁用状态。 ")],-1);g.render=function(e,o,d,a,r,n){const i=u("desc-component");return l(),s(i,null,{default:t((()=>[O,V])),_:1})};var z=e({__name:"RadioGroup",setup(e){const d=o(3);return(e,o)=>{const a=u("ht-radio"),i=u("ht-radio-group");return l(),s(i,{modelValue:d.value,"onUpdate:modelValue":o[0]||(o[0]=e=>d.value=e)},{default:t((()=>[r(a,{label:3},{default:t((()=>[n("Option A")])),_:1}),r(a,{label:6},{default:t((()=>[n("Option B")])),_:1}),r(a,{label:9},{default:t((()=>[n("Option C")])),_:1})])),_:1},8,["modelValue"])}}});function R(e){e.__sourceCode='<template>\r\n  <ht-radio-group v-model="radio">\r\n    <ht-radio :label="3">Option A</ht-radio>\r\n    <ht-radio :label="6">Option B</ht-radio>\r\n    <ht-radio :label="9">Option C</ht-radio>\r\n  </ht-radio-group>\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst radio = ref(3)\r\n<\/script>',e.__sourceCodeTitle=" 单选框组 "}R(z);var A={};const B=a("h4",null,"适用于在多个互斥的选项中选择的场景",-1),y=a("p",{class:"row"},[n(" 结合"),a("code",null,"el-radio-group"),n(" 元素和子元素"),a("code",null,"el-radio"),n(" 可以实现单选组， 为 "),a("code",null,"el-radio-group"),n(" 绑定 "),a("code",null,"v-model"),n(" ，再为 每一个 "),a("code",null,"el-radio"),n(" 设置好 "),a("code",null,"label"),n(" 属性即可， 另外，还可以通过 "),a("code",null,"change"),n(" 事件来响应变化，它会传入一个参数 "),a("code",null,"value"),n(" 来表示改变之后的值。 ")],-1);A.render=function(e,o,d,a,r,n){const i=u("desc-component");return l(),s(i,null,{default:t((()=>[B,y])),_:1})};const U={style:{"margin-top":"20px"}},C={style:{"margin-top":"20px"}},D={style:{"margin-top":"20px"}};var x=e({__name:"RadioBorder",setup(e){const s=o("1"),c=o("1"),p=o("1"),m=o("1");return(e,o)=>{const b=u("ht-radio"),h=u("ht-radio-group");return l(),d(i,null,[a("div",null,[r(h,{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=e=>s.value=e)},{default:t((()=>[r(b,{label:"1",size:"large",border:""},{default:t((()=>[n("Option A")])),_:1}),r(b,{label:"2",size:"large",border:""},{default:t((()=>[n("Option B")])),_:1})])),_:1},8,["modelValue"])]),a("div",U,[r(h,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=e=>c.value=e)},{default:t((()=>[r(b,{label:"1",border:""},{default:t((()=>[n("Option A")])),_:1}),r(b,{label:"2",border:""},{default:t((()=>[n("Option B")])),_:1})])),_:1},8,["modelValue"])]),a("div",C,[r(h,{modelValue:p.value,"onUpdate:modelValue":o[2]||(o[2]=e=>p.value=e),size:"small"},{default:t((()=>[r(b,{label:"1",border:""},{default:t((()=>[n("Option A")])),_:1}),r(b,{label:"2",border:"",disabled:""},{default:t((()=>[n("Option B")])),_:1})])),_:1},8,["modelValue"])]),a("div",D,[r(h,{modelValue:m.value,"onUpdate:modelValue":o[3]||(o[3]=e=>m.value=e),size:"small",disabled:""},{default:t((()=>[r(b,{label:"1",border:""},{default:t((()=>[n("Option A")])),_:1}),r(b,{label:"2",border:""},{default:t((()=>[n("Option B")])),_:1})])),_:1},8,["modelValue"])])],64)}}});function G(e){e.__sourceCode='<template>\r\n  <div>\r\n    <ht-radio-group v-model="radio1">\r\n      <ht-radio label="1" size="large" border>Option A</ht-radio>\r\n      <ht-radio label="2" size="large" border>Option B</ht-radio>\r\n    </ht-radio-group>\r\n  </div>\r\n  <div style="margin-top: 20px">\r\n    <ht-radio-group v-model="radio2">\r\n      <ht-radio label="1" border>Option A</ht-radio>\r\n      <ht-radio label="2" border>Option B</ht-radio>\r\n    </ht-radio-group>\r\n  </div>\r\n  <div style="margin-top: 20px">\r\n    <ht-radio-group v-model="radio3" size="small">\r\n      <ht-radio label="1" border>Option A</ht-radio>\r\n      <ht-radio label="2" border disabled>Option B</ht-radio>\r\n    </ht-radio-group>\r\n  </div>\r\n  <div style="margin-top: 20px">\r\n    <ht-radio-group v-model="radio4" size="small" disabled>\r\n      <ht-radio label="1" border>Option A</ht-radio>\r\n      <ht-radio label="2" border>Option B</ht-radio>\r\n    </ht-radio-group>\r\n  </div>\r\n</template>\r\n\r\n<script lang="ts" setup>\r\nimport { ref } from \'vue\'\r\n\r\nconst radio1 = ref(\'1\')\r\nconst radio2 = ref(\'1\')\r\nconst radio3 = ref(\'1\')\r\nconst radio4 = ref(\'1\')\r\n<\/script>',e.__sourceCodeTitle=" 带有边框 "}G(x);var w={};const T=a("p",{class:"row"},[n(" 设置 "),a("code",null,"border"),n(" 属性为 true 可以渲染为带有边框的单选框。 ")],-1);w.render=function(e,o,d,a,r,n){const i=u("desc-component");return l(),s(i,null,{default:t((()=>[T])),_:1})};var j=e({__name:"RadioDemo",setup(e){const o=["属性名","说明","类型","默认值"],a=[["v-model","选中项绑定值","<code>string</code>/<code>number</code>/<code>boolean</code>",""],["label","单选框的值","<code>string</code>/<code>number</code>/<code>boolean</code>",""],["disabled","是否禁用单选框","<code>boolean</code> ","false"],["border","是否显示边框","<code>boolean</code>","false"],["size","单选框的尺寸","<code>'large'|'default'|'small'</code> ",""],["name","原始 <code>name</code> 属性","<code>string</code> ",""]],t=["事件名","说明","类型"],n=[["change","绑定值变化时触发的事件","<code>Function</code>"]],s=["插槽名","说明"],m=[["default","自定义插槽内容"]],h=["属性名","说明","类型","默认值"],v=[["v-model","绑定值","<code>string</code>/<code>number</code>/<code>boolean</code>",""],["size","单选框按钮或边框按钮的大小","<code>string</code>","default"],["disabled","是否禁用","<code>boolean</code> ","false"],["name","原始 <code>name</code> 属性","<code>string</code> ",""],["id","原始 <code>id</code> 属性","<code>string</code> ",""]];return(e,_)=>{const O=u("Demo"),V=u("Api");return l(),d(i,null,[c(" 基础用法 "),r(O,{component:p,"desc-component":b}),c(" 禁用Demo "),r(O,{component:f,"desc-component":g}),c(" 单选框组 "),r(O,{component:z,"desc-component":A}),c(" 带有边框 "),r(O,{component:x,"desc-component":w}),c(" Api属性 "),c(" Radio API "),r(V,{title:"Radio属性",theads:o,bodyData:a}),c(" RadioEvent 单选框事件 "),r(V,{title:"Radio事件",theads:t,bodyData:n}),c(" RadioSlot 插槽 "),r(V,{title:"Radio插槽",theads:s,bodyData:m}),c(" RadioGroupAPI "),r(V,{title:"RadioGroup属性",theads:h,bodyData:v}),c(" RadioGroup事件 "),r(V,{title:"RadioGroup事件",theads:t,bodyData:n}),c(" RadioGroup插槽 "),r(V,{title:"RadioGroup 插槽",theads:s,bodyData:m})],64)}}});export{j as default};
