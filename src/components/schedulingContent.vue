<template>
    <div id="content">
        <div id="basicInfoExternal" class="external">
            <canvas id="basicInfoExternalCanvas" class="canvas" width="156px" height="300px"></canvas>
            <div class="ball basicInfoExternalBall_one" v-for="i of basicInfoExternalBall_one" ></div>
            <div class="ball basicInfoExternalBall_two" v-for="i of basicInfoExternalBall_two" ></div>
            <div class="ball basicInfoExternalBall_three" v-for="i of externalBall_three" ></div>
            <div class="ball basicInfoExternalBall_four" v-for="i of externalBall_four" ></div>
            <!--<canvas id="basicInfoExternalBall" class="ballCanvas" width="156px" height="300px"></canvas>-->
        </div>
        <!-- <div id="basicInfoInside">
            <canvas></canvas>
        </div> -->

        <!-- <div id="policeDeploymentExternal" class="external"></div>
        <div id="policeDeploymentInside"></div>

        <div id="judgMentInfoExternal" class="external"></div>
        <div id="judgMentInfoInside"></div>

        <div id="resourcesExternal" class="external"></div>
        <div id="resourcesInside"></div> -->
    </div>
</template>

<script>
export default {
    name: 'schedulingContent',
    data() {
        return {
            basicInfoExternalBall_one: 1,//外部球量
            basicInfoExternalBall_two: 1,
            externalBall_three: 1,
            externalBall_four: 1,
            insideBall: 6,//外部球量
            balls: [],
            drawBIExternalBallTimerOne: null,
            drawBIExternalBallTimerTwo: null,
            drawBIExternalBallTimerThree: null,
            drawBIExternalBallTimerFour: null,
        }
    },
    mounted() {
        this.drawBIExternalCanvas();
        this.basicInfoExternalBallOne();
        this.basicInfoExternalBallTwo();
        this.basicInfoExternalBallThree();
        this.basicInfoExternalBallFour();

    },
    destroyed() {
        clearInterval(this.drawBIExternalBallTimerOne);
        clearInterval(this.drawBIExternalBallTimerTwo);
        clearInterval(this.drawBIExternalBallTimerThree);
        clearInterval(this.drawBIExternalBallTimerFour);
    },
    methods: {
        drawBIExternalCanvas() {
            var canvas = document.getElementById('basicInfoExternalCanvas');
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d');
                ctx.strokeStyle = '#2283d9';
                ctx.lineWidth = '1';
                ctx.beginPath();
                ctx.moveTo(0, 32);
                ctx.lineTo(50, 32);
                ctx.lineTo(186, 120);
                ctx.stroke();
                ctx.closePath();

                var ctx = canvas.getContext('2d');
                ctx.strokeStyle = '#2283d9';
                ctx.lineWidth = '1';
                ctx.beginPath();
                ctx.moveTo(0, 102);
                ctx.lineTo(50, 102);
                ctx.lineTo(136, 145);
                ctx.stroke();
                ctx.closePath();

                var ctx = canvas.getContext('2d');
                ctx.strokeStyle = '#2283d9';
                ctx.lineWidth = '1';
                ctx.beginPath();
                ctx.moveTo(0, 172);
                ctx.lineTo(50, 172);
                ctx.lineTo(130, 200);
                ctx.stroke();
                ctx.closePath();

                var ctx = canvas.getContext('2d');
                ctx.strokeStyle = '#2283d9';
                ctx.lineWidth = '1';
                ctx.beginPath();
                ctx.moveTo(0, 242);
                ctx.lineTo(50, 242);
                ctx.lineTo(125, 220);
                ctx.stroke();
                ctx.closePath();
            }
        },
        basicInfoExternalBallOne() {
            let that = this;
            clearInterval(that.drawBIExternalBallTimerOne);
            that.drawBIExternalBallTimerOne = setInterval(() => {
                if (that.basicInfoExternalBall_one < 3) {
                    that.basicInfoExternalBall_one++;
                } else {
                    clearInterval(that.drawBIExternalBallTimerOne);
                }
            }, 1000 * Math.random() * 10)
        },
        basicInfoExternalBallTwo() {
            let that = this;
            clearInterval(that.drawBIExternalBallTimerTwo);
            that.drawBIExternalBallTimerTwo = setInterval(() => {
                if (that.basicInfoExternalBall_two < 3) {
                    that.basicInfoExternalBall_two++;
                } else {
                    clearInterval(that.drawBIExternalBallTimerTwo);
                }
            }, 1000 * Math.random() * 10)
        },
        basicInfoExternalBallThree() {
            let that = this;
            clearInterval(that.drawBIExternalBallTimerThree);
            that.drawBIExternalBallTimerThree = setInterval(() => {
                if (that.externalBall_three < 3) {
                    that.externalBall_three++;
                } else {
                    clearInterval(that.drawBIExternalBallTimerThree);
                }
            }, 1000 * Math.random() * 10)
        },
        basicInfoExternalBallFour() {
            let that = this;
            clearInterval(that.drawBIExternalBallTimerFour);
            that.drawBIExternalBallTimerFour = setInterval(() => {
                if (that.externalBall_four < 3) {
                    that.externalBall_four++;
                } else {
                    clearInterval(that.drawBIExternalBallTimerFour);
                }
            }, 1000 * Math.random() * 10)
        }
    }
}
</script>
<style lang="scss" scoped>
$ballColor:#19f5f9;
$lineColor:#30a3f5;
@keyframes basicInfoExternalBall_one {
    0% {
        left: 380px;
        top: 92px;
    }
    60% {
        left: 275px;
        top: 27px;
    }
    100% {
        left: 220px;
        top: 27px;
    }
}

.basicInfoExternalBall_one {
    animation: basicInfoExternalBall_one 6s infinite linear;
    position: absolute;
    top: 92px;
    left: 380px;
}

@keyframes basicInfoExternalBall_two {
    0% {
        top: 138px;
        left: 358px;
    }
    60% {
        top: 98px;
        left: 274px;
    }
    100% {
        top: 98px;
        left: 224px;
    }
}

.basicInfoExternalBall_two {
    animation: basicInfoExternalBall_two 6s infinite linear;
    position: absolute;
    top: 138px;
    left: 358px;
}

@keyframes basicInfoExternalBall_three {
    0% {
        top: 196px;
        left: 358px;
    }
    60% {
        top: 168px;
        left: 275px;
    }
    100% {
        top: 168px;
        left: 225px;
    }
}

.basicInfoExternalBall_three {
    animation: basicInfoExternalBall_three 6s infinite linear;
    position: absolute;
    top: 196px;
    left: 358px;
}

@keyframes basicInfoExternalBall_four {
    0% {
        top: 216px;
        left: 350px;
    }
    60% {
        top: 238px;
        left: 274px;
    }
    100% {
        top: 238px;
        left: 224px;
    }
}

.basicInfoExternalBall_four {
    animation: basicInfoExternalBall_four 6s infinite linear;
    position: absolute;
    top: 216px;
    left: 350px;
}

.ball {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: $ballColor;
    box-shadow: 3px 2px 10px 3px #253bdf;
}

.external {
    width: 386px;
    position: relative;
    .canvas {
        margin-left: 230px;
    }
}

.ballCanvas {
    position: absolute;
    left: 230px;
    top: 0;
}

#content {
    width: 100%;
    height: 100%;
    padding: 20px;

    #basicInfoExternal {
        height: 300px;
    }
}
</style>
