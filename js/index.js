/**
 * Created by mimimic on 2017/1/5.
 */

(function () {
    var HEIGHT_CONFIG = [850, 1000, 1500, 2200, 2800, 3400],
        ELEMENTS_TO_POP = [
            'part2img02',
            'part2img03',
            'part3img02',
            'part4img02',
            'part5img02',
            'part6img02'
        ],
        _wrap = null,
        btn_apple = null,
        btn_android = null,
        ua = null,
        isWeixin = false;
    
    window.addEventListener('load', attachEvents, false);
    // 绑定事件
    function attachEvents() {
        ua = navigator.userAgent.toLowerCase();
        isWeixin = ua.indexOf('micromessenger') != -1;
        if (isWeixin) {
            ELEMENTS_TO_POP.forEach(function (elem) {
                popAnimate(elem);
            });
            return;
        }
        _wrap = document.getElementById('wrap');
        btn_android = document.getElementById('android_download');
        btn_apple = document.getElementById('apple_download');
        _wrap.addEventListener('scroll', decideScrollHeight, false);
        btn_android.addEventListener('click', handleAndroidDownload, false);
        btn_apple.addEventListener('click', handleAppleDownload, false);
    }
    function handleAndroidDownload(e) {
        // e.preventDefault();
        console.log('android download');
    }
    function handleAppleDownload(e) {
        // e.preventDefault();
        console.log('apple download');
    }
    // 判断滚动高度，传入要动画的元素ID
    function decideScrollHeight() {
        for (var i = 0; i < HEIGHT_CONFIG.length; i++) {
            _wrap.scrollTop >= HEIGHT_CONFIG[i] - _wrap.clientHeight / 2 &&
                    popAnimate(ELEMENTS_TO_POP[i]);
        }
    }
    // 给传入的元素添加class
    function popAnimate(elemId) {
        var _elem = document.getElementById(elemId);
        if (_elem.className.indexOf('pop') === -1) {
            _elem.className += ' pop';
        }
    }
})();
