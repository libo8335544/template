import $ from 'jquery';
import './index.scss';
import template from './index.art';
/*导入swiper模块*/
import './swiper.css';
import Swiper from './swiper.js';
export default class Banner {
    constructor(link) {}
    render(opt) {
        /*渲染模板*/
        $("#app .component-item[data-index='" + opt.dataIndex + "']").html(template(opt.data));
        /*初始化轮播图*/
        var mySwiper = new Swiper('.swiper-container-1', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            autoplayDisableOnInteraction : false,
            autoplay:5000
        })
    }
};