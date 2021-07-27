// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import BulletScript from "./BulletScript";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.SpriteFrame)
    bulletIcon: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    explodeEffect:cc.SpriteFrame = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.node.on('touchstart', this.onTouch, this);
    }

    start() {

    }

    onTouch() {
        this.fire();
    }

    fire() {
        if (this.bulletIcon == null) {
            console.log('bullet icon 图片为空');
            return;
        };

        // 动态创建一个node,添加Sprite组件
        let bullet: cc.Node = new cc.Node();
        let sprite: cc.Sprite = bullet.addComponent(cc.Sprite);
        sprite.spriteFrame = this.bulletIcon;


        bullet.parent = this.node;//作为子节点

        // 初始位置和大小
        bullet.setPosition(cc.v3(100, 0, 0));
        bullet.width = 50;
        bullet.height = 50;

        // 加持一个脚本组件
        let script:BulletScript = bullet.addComponent(BulletScript);
        script.explodeEffect = this.explodeEffect;
    }

    // update (dt) {}
}
