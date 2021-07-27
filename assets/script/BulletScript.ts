// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletScript extends cc.Component {

    @property(cc.SpriteFrame)
    explodeEffect: cc.SpriteFrame = null;

    onLoad() {
        this.schedule(this.onTimer, 0.01);
    }

    start() {

    }

    // update (dt) {}

    onTimer() {
        if (this.node.x > 600) {
            this.unschedule(this.onTimer);// 停止定时器
            this.beginExplode();
            // this.node.destroy();
            return;
        }
        this.node.x += 10;
    }

    // 开始爆炸
    beginExplode() {
        console.log('bullert ....');
        let sp: cc.Sprite = this.node.getComponent(cc.Sprite);
        // 显示爆炸图片
        sp.spriteFrame = this.explodeEffect;

        this.node.scale = 0.1;

        let self = this;
        cc.tween(this.node)
            .to(0.5, { scale: 0.5, opacity: 0 })
            .call(function () {
                console.log('bullert call ....');
                self.afterExplode();
            })
            .start();
    }

    afterExplode() {
        console.log('bullert destroy ....');
        this.node.destroy();
    }
}
