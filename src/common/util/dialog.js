function Dialog(opt) {
	 var html='<div id="'+this.opt.id+'" style="position:fixed;width:100%;height:100%;top:0;display: flex; align-items: center; justify-content: center;  z-index: 900; background:rgba(0,0,0,.8)"><div style="z-index:902; left:0px">' + this.opt.msg + '</div><div>';
	 $(body).append(html);
}
export default Dialog;