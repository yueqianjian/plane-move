(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/plane.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '24c08hD34dKzITjaei8DIki', 'plane', __filename);
// Script/plane.js

"use strict";

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
    onKeyDown: function onKeyDown(e) {
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
    onKeyUp: function onKeyUp(e) {
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
    onLoad: function onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    // 销毁
    onDestroy: function onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    },

    // 更新
    update: function update(dt) {
        var toUp = this.toUp,
            toDown = this.toDown,
            toLeft = this.toLeft,
            toRight = this.toRight,
            speed = this.speed;

        if (toUp) {
            this.node.y += speed;
        }
        if (toDown) {
            this.node.y -= speed;
        }
        if (toLeft) {
            this.node.x -= speed;
        }
        if (toRight) {
            this.node.x += speed;
        }
    }
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=plane.js.map
        