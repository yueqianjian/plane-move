cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0,
        toUp: false,
        toDown: false,
        toLeft: false,
        toRight: false
    },
    // 按压键盘
    onKeyDown (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.w:
                this.toUp = true;
                break;
            case cc.macro.KEY.s:
                this.toDown = true;
                break;
            case cc.macro.KEY.a:
                this.toLeft = true;
                break;
            case cc.macro.KEY.d:
                this.toRight = true;
                break;
        }
    },
    // 松开键盘
    onKeyUp (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.w:
                this.toUp = false;
                break;
            case cc.macro.KEY.s:
                this.toDown = false;
                break;
            case cc.macro.KEY.a:
                this.toLeft = false;
                break;
            case cc.macro.KEY.d:
                this.toRight = false;
                break;
        }
    },
    // 加载
    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)
    },
    // 销毁
    onDestroy () {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)
    },
    // 更新
    update (dt) {
        const { toUp,toDown,toLeft,toRight,speed } = this
        if(toUp) {
            this.node.y += speed
        }
        if(toDown) {
            this.node.y -= speed
        }
        if(toLeft) {
            this.node.x -= speed
        }
        if(toRight) {
            this.node.x += speed
        }
    }
});
