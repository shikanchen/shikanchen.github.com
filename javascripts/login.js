var init = function () {
    NODES.command = '.terminal';
    login = new ContentManger(NODES.command);
    login.rp("<input type='text' value='Please login' disabled>");
    setTimeout(function () {
        console.log(login);
        login.rp("<input type='text' value='' autofocus>");
    }, 1000);

};