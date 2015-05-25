// stackgrid.adem.js - adwm.co
// Licensed under the MIT license - http://opensource.org/licenses/MIT
// Copyright (C) 2015 Andrew Prasetya
(function(){!function(){return this.Stackgrid=function(){var t,i,n,e;return e={height:0,width:0,is_resizing:!1,resizing:void 0},(e.update=function(){e.height=window.innerHeight,e.width=window.innerWidth})(),t={$container:void 0,$items:void 0,container_height:0,container_width:0,pointer:0,items:[],number_of_columns:0},t.ordinal={stack:[],setup:function(){var i;for(i=0,t.ordinal.stack=[];i<t.number_of_columns;)t.ordinal.stack[i]=0,i++;t.container_height=0,t.pointer=0},plot:function(i){t.items[i][2]=n.config.gutter+(n.config.column_width+n.config.gutter)*t.pointer,t.items[i][3]=n.config.gutter+t.ordinal.stack[t.pointer],t.ordinal.stack[t.pointer]+=t.items[i][1]+n.config.gutter,t.ordinal.stack[t.pointer]>t.container_height&&(t.container_height=t.ordinal.stack[t.pointer]),t.pointer++,t.pointer>=t.number_of_columns&&(t.pointer=0)},loop:function(){var i;for(i=0;i<t.items.length;)t.ordinal.plot(i),i++}},t.optimized={stack:[],setup:function(){var i;for(t.optimized.stack=[],i=0;i<t.number_of_columns;)t.optimized.stack[i]=[i,0],i++;t.container_height=0,t.pointer=0},plot:function(i){t.items[i][2]=n.config.gutter+(n.config.column_width+n.config.gutter)*t.optimized.stack[0][0],t.items[i][3]=n.config.gutter+t.optimized.stack[0][1],t.optimized.stack[0][1]+=t.items[i][1]+n.config.gutter,t.optimized.stack[0][1]>t.container_height&&(t.container_height=t.optimized.stack[0][1]),t.optimized.stack.sort(function(t,i){return t[1]-i[1]}),t.pointer++,t.pointer>=t.number_of_columns&&(t.pointer=0)},loop:function(){var i;for(i=0;i<t.items.length;)t.optimized.plot(i),i++}},t.setup=function(){var i,e,o,c,r,u;for(n.reset(),t.$container=document.querySelector(n.config.container_selector),t.$items=document.querySelectorAll(n.config.container_selector+" > "+n.config.item_selector),u=t.$items,i=c=0,r=u.length;r>c;i=++c)e=u[i],e.style.width=n.config.column_width+"px",o=e.offsetHeight,t.items[i]=[e,o,0,0]},t.scale_container=function(i){var e,o;t.items.length<t.number_of_columns?t.container_width=(n.config.column_width+n.config.gutter)*t.items.length:t.container_width=(n.config.column_width+n.config.gutter)*t.number_of_columns,e=t.container_height+n.config.gutter,o=t.container_width+n.config.gutter,n.config.scale(t.$container,o,e,i)},t.paint=function(){t.scale_container(function(){var i,e,o,c,r,u,s;for(u=t.items,s=[],e=c=0,r=u.length;r>c;e=++c)o=u[e],i=function(){},s.push(n.config.move(o[0],o[2],o[3],i));return s})},t.stack=function(){n.config.is_fluid?t.number_of_columns=Math.floor((e.width-n.config.gutter)/(n.config.column_width+n.config.gutter)):t.number_of_columns=n.config.number_of_columns,n.config.is_optimized?(t.optimized.setup(),t.optimized.loop()):(t.ordinal.setup(),t.ordinal.loop()),t.paint()},i={debounce_timeout:void 0,complete:function(){t.stack()},debounce:function(t,n){clearTimeout(i.debounce_timeout),i.debounce_timeout=window.setTimeout(t,n)}},n={config:{container_selector:void 0,item_selector:void 0,column_width:320,gutter:20,is_fluid:!1,is_optimized:!0,number_of_columns:3,resize_debounce_delay:350}},n.config.move=function(t,i,n,e){t.style.left=i+"px",t.style.top=n+"px",e()},n.config.scale=function(t,i,n,e){t.style.height=n+"px",t.style.width=i+"px",e()},n.initialize=function(o,c){e.update(),n.config.container_selector=o,n.config.item_selector=c,window.addEventListener("resize",function(){e.update(),i.debounce(i.complete,n.config.resize_debounce_delay)}),t.setup(),t.stack()},n.reset=function(){t.optimized.stack=[],t.ordinal.stack=[],t.$items=[],t.items=[]},n.restack=function(){t.setup(),t.stack()},n.append=function(i,e){var o,c;c=t.items.length,i.style.width=n.config.column_width+"px",o=i.offsetHeight,t.items[c]=[i,o,0,0],n.config.is_optimized?t.optimized.plot(c):t.ordinal.plot(c),t.scale_container(function(){return n.config.move(t.items[c][0],t.items[c][2],t.items[c][3],e)})},n}}()}).call(this);
