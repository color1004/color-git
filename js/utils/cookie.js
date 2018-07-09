const getCookie = name => {
    const reg = new Reg();
    let arr;
    if(arr = document.cookie.match(reg))
        return;
    else
        return '';
}
