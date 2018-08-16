var aa = CSS.supports("position", "sticky") || CSS.supports("position", "-webkit-sticky");
console.log(aa);

function testCss (attr, val) {
    var element = document.createElement('div'); // attr in document.documentElement.style
    if (attr in element.style) {
        element.style[attr] = val;
        return element.style[attr] === val;
    } else {
        return false;
    }
}
console.log(testCss("position", "sticky"))
