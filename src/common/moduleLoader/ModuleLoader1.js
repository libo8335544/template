 export default class ModuleLoader {
     constructor(opt) {
         this.__OPT__ = opt;
         this.__MODULECONFIG__ = [];
         this.__LAYER__ = "";
         this.init();
     }
     init() {
         /*生成页面布局模块*/
         this.virtualToDome(this.__OPT__.config);
         /*加载模块及数据*/
         this.loadModule(this.__MODULECONFIG__);
     }
     /*生成页面布局模块*/
     virtualToDome(vnode) {
         const self = this;
         function next(vnode) {
             if (vnode.split) {
                 return document.createTextNode(vnode + "  加载中···");
             };
             /* if (vnode.split) return document.createTextNode("加载中···");*/
             let n = document.createElement(vnode.nodeName);
             let a = vnode.attributes || {};
             Object.keys(a).forEach(function(k) {
                 n.setAttribute(k, a[k]);
             });
             (vnode.children || []).forEach(function(item, index) {
                 /*生成模块配置文件*/
                 if (item.children) {
                     self.__MODULECONFIG__.push({
                         dataIndex: index,
                         template: item.template,
                         view: item.view,
                         data: item.data
                     });
                 }
                 n.appendChild(next(item));
             });
             return n;
         }
         this.__LAYER__ = next(vnode);
         this.render("layer");
     }
     loadModule(config) {
         var self = this;
         this.__MODULECONFIG__.forEach(function(item) {
            /*实现异步加载*/
           self.__OPT__.template[item.template].render({
                   dataIndex: item.dataIndex,
                   data: item.data
               });
         })
     }
     render(action) {
         switch (action) {
             case "layer":
                 document.getElementById(this.__OPT__.el).appendChild(this.__LAYER__);
                 break;
         }
     }
 }