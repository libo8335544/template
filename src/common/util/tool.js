(function(window, $) {
    //弹窗默认参数
    var DefaultModalOptions = {
        id: 'bsmodal',
        close: true,
        bg: "#000",
        msg: '',
        isAnimate: false,
        callback: null,
        startIndex: 0,
        opacity: 80,
    };
    var Tools = function() {}
    /**
     * loading用于加载loading
     * @说明 接收两个参数 show显示loading hide/hidden隐藏loading
     */
    Tools.prototype.Loading = function(opt) {
        this.option = DefaultModalOptions;
        if (opt == "hidden" || opt == "hide") {
            this.LoadingRemove()
        } else if (opt == "show") {
            this.LoadingShow()
        } else {
            console.log("请输入正确参数：show:显示 ,hidden：隐藏");
        }
    }
    Tools.prototype.LoadingShow = function() {
        var w = '<div style="position:fixed;width:100%;height:100%;top:0;display: flex; align-items: center; justify-content: center;  z-index: 910; background:rgba(0,0,0,0.85)"  class="tool_loading">'
        //创建内容区域
        var c = '<div class="tool_loading_icon" style="width:50px;height:50px;  z-index:912; no-repeat;"><img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iciIgd2lkdGg9JzEyMHB4JyBoZWlnaHQ9JzEyMHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj4KICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjRTlFOUU5JwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nIzk4OTY5NycKICAgICAgICAgIHRyYW5zZm9ybT0ncm90YXRlKDMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4KICAgICAgICAgICAgICAgICByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyM5Qjk5OUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+CiAgICAgICAgICAgICAgICAgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz4KICAgIDwvcmVjdD4KICAgIDxyZWN0IHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjQTNBMUEyJwogICAgICAgICAgdHJhbnNmb3JtPSdyb3RhdGUoOTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNBQkE5QUEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxMjAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCMkIyQjInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNCQUI4QjknCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDMkMwQzEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyMTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNDQkNCQ0InCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEMkQyRDInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNEQURBREEnCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNFMkUyRTInCiAgICAgICAgICB0cmFuc2Zvcm09J3JvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPgogICAgPC9yZWN0Pgo8L3N2Zz4=" width="50" height="50" /></div>';
        //创建背景
        //
        $("body").append(w + c + "</div>");
        this.option.isAnimate = true;
        this.loadingAnimate()
    }
    Tools.prototype.loadingAnimate = function() {
        var that = this;

        function animate() {
            that.option.startIndex += 1;
            $(".tool_loading_icon").css({
                transform: "rotate(" + (that.option.startIndex) + "deg)"
            });
            if (that.option.startIndex == 360) {
                that.option.startIndex = 0;
            }
            if (that.option.isAnimate) {
                requestAnimationFrame(animate);
            }
        }
        requestAnimationFrame(animate);
    }
    Tools.prototype.LoadingRemove = function() {
        this.option.isAnimate = false;
        $(".tool_loading").remove();
    }
    /**
     * Modal用于加载Modal
     */
    Tools.prototype.Modal = function(options) {
        var that = this;
        if (options == "hide" || options == "hidden") {
            $("#" + that.option.id).remove();
            $("body,html").css("overflow", "auto")
            return;
        }
        that.option = $.extend(DefaultModalOptions, options);
        //创建容器
        var w = '<div class="tool_modal"  id="' + this.option.id + '" style="position:fixed;width:100%;height:100%;top:0;display: flex; align-items: center; justify-content: center;  z-index: 900; background:rgba(0,0,0,' + that.option.opacity / 100 + ')"  id="tool_loading">'
        //创建内容区域
        var c = '<div class="tool_modal_main" style="z-index:902; left:0px">' + that.option.msg + '</div>';
        $("body").append(w + c + "</div>");
        $("body,html").css({
            "overflow": "hidden"
        });
        that.ModalEvents(that.option.events);
        $("[data-target='close']").off().on("click", function() {
            $(this).parents(".tool_modal").remove();
            $("body,html").css("overflow", "auto")
        });
        that.option.callback && that.option.callback();
    }
    Tools.prototype.Modal.hide = function(id) {
        $("body,html").css("overflow", "auto")
        $("#" + id).remove();
    }
    //modal 事件处理
    Tools.prototype.ModalEvents = function(evnOpt) {
        for (var item in evnOpt) {
            var e = item.split(".");
            var evenName = e[0];
            var evenEl = e[1];
            var evenF = evnOpt[item];
            $("." + evenEl).off().on(evenName, evenF);
        }
    }
    /**
     * msg
     * 显示与页面顶端 默认3秒自动隐藏
     */
    Tools.prototype.Msg = function(msg) {
        var that = this;
        var $w = $("<div class='tool_msg' style='position:fixed;width:100%;height:100%;top:0;display: flex; align-items: center; justify-content: center;  z-index: 900; '><div style='min-width:60%; background:rgba(0,0,0,.7);border-radius: .4rem;padding:.6rem; font-size:.4rem;color:#fff;text-align:center;align-items: center; justify-content: center; '>" + msg + "</div></div>");
        $("body").append($w);
        setTimeout(function() {
            $w.remove();
        }, 3000);
    }
    //工具类
    var util = {}
    util.setStyle = function(obj, json) {
        for (var i in json) {
            obj.style[i] = json[i];
        }
    }
    window.Tool = new Tools;
})(window, $);