(function(){
    if(window.myBookmarklet != undefined)   {
        myBookmarklet();
    }
    else {
        document.body.appendChild(document.createElement('script')).src='https://a3d7a14e.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*999999999999999999999);
    }
})();