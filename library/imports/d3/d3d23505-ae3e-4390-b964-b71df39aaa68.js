"use strict";
cc._RF.push(module, 'd3d23UFrj5DkLlktx3zmqpo', 'BulletScript');
// script/BulletScript.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BulletScript = /** @class */ (function (_super) {
    __extends(BulletScript, _super);
    function BulletScript() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.explodeEffect = null;
        return _this;
    }
    BulletScript.prototype.onLoad = function () {
        this.schedule(this.onTimer, 0.01);
    };
    BulletScript.prototype.start = function () {
    };
    // update (dt) {}
    BulletScript.prototype.onTimer = function () {
        if (this.node.x > 600) {
            this.unschedule(this.onTimer); // 停止定时器
            this.beginExplode();
            // this.node.destroy();
            return;
        }
        this.node.x += 10;
    };
    // 开始爆炸
    BulletScript.prototype.beginExplode = function () {
        console.log('bullert ....');
        var sp = this.node.getComponent(cc.Sprite);
        // 显示爆炸图片
        sp.spriteFrame = this.explodeEffect;
        this.node.scale = 0.1;
        var self = this;
        cc.tween(this.node)
            .to(0.5, { scale: 0.5, opacity: 0 })
            .call(function () {
            console.log('bullert call ....');
            self.afterExplode();
        })
            .start();
    };
    BulletScript.prototype.afterExplode = function () {
        console.log('bullert destroy ....');
        this.node.destroy();
    };
    __decorate([
        property(cc.SpriteFrame)
    ], BulletScript.prototype, "explodeEffect", void 0);
    BulletScript = __decorate([
        ccclass
    ], BulletScript);
    return BulletScript;
}(cc.Component));
exports.default = BulletScript;

cc._RF.pop();