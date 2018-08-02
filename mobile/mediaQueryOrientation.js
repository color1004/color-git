// mediaQueryList
    componentDidMount() {
        this.scroll = new BScroll(this.refs.wrapper);
        this.screenChange();
    }
    screenChange() {
        var mql = window.matchMedia("(orientation: portrait)");
        /*
         mql是一个对象 包含以下3个属性和2个方法
         matches true/false
         media 查询条件 本例中为 "(orientation: portrait)"

         addListener
         removeListener
        */
        mql.addListener(this.handleOrientationChange);
    }
    handleOrientationChange(mql) {
        if (mql.matches) {
            this.scroll = new BScroll(this.refs.wrapper);
        } else {
            this.scroll.destroy();
        }
    }
