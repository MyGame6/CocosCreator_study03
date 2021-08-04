
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battery.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0029eQLBXFLHrO9+IKgpmvR', 'battery');
// script/battery.ts

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
var BulletScript_1 = require("./BulletScript");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bulletIcon = null;
        _this.explodeEffect = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.node.on('touchstart', this.onTouch, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.onTouch = function () {
        this.fire();
    };
    NewClass.prototype.fire = function () {
        if (this.bulletIcon == null) {
            console.log('bullet icon 图片为空');
            return;
        }
        ;
        // 动态创建一个node,添加Sprite组件
        var bullet = new cc.Node();
        var sprite = bullet.addComponent(cc.Sprite);
        sprite.spriteFrame = this.bulletIcon;
        bullet.parent = this.node; //作为子节点
        // 初始位置和大小
        bullet.setPosition(cc.v3(100, 0, 0));
        bullet.width = 50;
        bullet.height = 50;
        // 加持一个脚本组件
        var script = bullet.addComponent(BulletScript_1.default);
        script.explodeEffect = this.explodeEffect;
    };
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "bulletIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], NewClass.prototype, "explodeEffect", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxGLCtDQUEwQztBQUVwQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQStDQztRQTVDRyxnQkFBVSxHQUFtQixJQUFJLENBQUM7UUFHbEMsbUJBQWEsR0FBa0IsSUFBSSxDQUFDOztRQXdDcEMsaUJBQWlCO0lBQ3JCLENBQUM7SUF2Q0csd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwwQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDaEMsT0FBTztTQUNWO1FBQUEsQ0FBQztRQUVGLHdCQUF3QjtRQUN4QixJQUFJLE1BQU0sR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQyxJQUFJLE1BQU0sR0FBYyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFHckMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUEsT0FBTztRQUVqQyxVQUFVO1FBQ1YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVuQixXQUFXO1FBQ1gsSUFBSSxNQUFNLEdBQWdCLE1BQU0sQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDO1FBQzVELE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QyxDQUFDO0lBekNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7Z0RBQ1M7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQzttREFDVztJQU5uQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBK0M1QjtJQUFELGVBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBK0NqRDtrQkEvQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgQnVsbGV0U2NyaXB0IGZyb20gXCIuL0J1bGxldFNjcmlwdFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXHJcbiAgICBidWxsZXRJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgZXhwbG9kZUVmZmVjdDpjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2goKSB7XHJcbiAgICAgICAgdGhpcy5maXJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5idWxsZXRJY29uID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2J1bGxldCBpY29uIOWbvueJh+S4uuepuicpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g5Yqo5oCB5Yib5bu65LiA5Liqbm9kZSzmt7vliqBTcHJpdGXnu4Tku7ZcclxuICAgICAgICBsZXQgYnVsbGV0OiBjYy5Ob2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsZXQgc3ByaXRlOiBjYy5TcHJpdGUgPSBidWxsZXQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5idWxsZXRJY29uO1xyXG5cclxuXHJcbiAgICAgICAgYnVsbGV0LnBhcmVudCA9IHRoaXMubm9kZTsvL+S9nOS4uuWtkOiKgueCuVxyXG5cclxuICAgICAgICAvLyDliJ3lp4vkvY3nva7lkozlpKflsI9cclxuICAgICAgICBidWxsZXQuc2V0UG9zaXRpb24oY2MudjMoMTAwLCAwLCAwKSk7XHJcbiAgICAgICAgYnVsbGV0LndpZHRoID0gNTA7XHJcbiAgICAgICAgYnVsbGV0LmhlaWdodCA9IDUwO1xyXG5cclxuICAgICAgICAvLyDliqDmjIHkuIDkuKrohJrmnKznu4Tku7ZcclxuICAgICAgICBsZXQgc2NyaXB0OkJ1bGxldFNjcmlwdCA9IGJ1bGxldC5hZGRDb21wb25lbnQoQnVsbGV0U2NyaXB0KTtcclxuICAgICAgICBzY3JpcHQuZXhwbG9kZUVmZmVjdCA9IHRoaXMuZXhwbG9kZUVmZmVjdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==