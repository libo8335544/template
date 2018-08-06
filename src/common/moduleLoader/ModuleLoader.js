 export default class ModaLoader {
     constructor(opt) {
         this.opt = opt;
         this.moduleConfig = [];
         this.init();
     }
     init() {
         /*根据虚拟DOM转换成模块*/
         this.virtualToDome(this.opt.vNode);
         /*加载模块及数据*/
         this.loadModule(this.moduleConfig);
     }
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
             (vnode.children || []).forEach(function(c) {
                 /*生成模块配置文件*/
                 if (c.children) {
                     self.moduleConfig.push({
                         dataIndex: c.attributes["data-index"],
                         ModuleName: c.children[0],
                         data: {
                             list: c.dataSource
                         }
                     });
                 }
                 n.appendChild(next(c));
             });
             return n;
         }
         this.layer = next(vnode);
         this.render("layer");
     }
     loadModule() {
         var self = this;
         this.moduleConfig.forEach(function(item) {
             self.opt.template[item.ModuleName].render({
                 dataIndex: item.dataIndex,
                 data: item.data,
                 el: self.opt.el
             });
         })
     }
     render(action) {
         switch (action) {
             case "layer":
                 $(this.opt.el).html(this.layer);
                 this.opt.callback && this.opt.callback();
                 break;
             case "module":
                 break;
         }
     }
 }