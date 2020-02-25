AFRAME.registerComponent('spawn-in-circle', {
    schema: {
        radius: {type: 'number', default: 1}
    },

    init: function() {
        var el = this.el;
        var center = el.getAttribute('position');

        var angleRad = this.getRandomAngleInRadians();
        var circlePoint = this.randomPointOnCircle(this.data.radius, angleRad);
        var worldPoint = {x: circlePoint.x + center.x, y: center.y, z: circlePoint.y + center.z};
        el.setAttribute('position', worldPoint);

        var angleDeg = angleRad * 180 / Math.PI;
        var angleToCenter = -1 * angleDeg + 90;
        var rotationStr = '0 ' + angleToCenter + ' 0';
        el.setAttribute('rotation', rotationStr);
    },

    getRandomAngleInRadians: function() {
        return Math.random()*Math.PI*2;
    },

    randomPointOnCircle: function (radius, angleRad) {
        x = Math.cos(angleRad)*radius;
        y = Math.sin(angleRad)*radius;
        return {x: x, y: y};
    }
});

AFRAME.registerComponent('score-counter', {
    schema: {
        el: {
            type: 'selector'
        },
        score:{
            type: 'int',
            default: 0
        },
    },

    init: function () {
        var sceneEl = document.querySelector('a-scene');
        var scoreBoard = document.querySelector('#score');

        sceneEl.querySelector("a-triangle").addEventListener('click', () => {
            if(this.data.score === 3) {
                scoreBoard.setAttribute('text','value',"You won !!!");
            }else {
                this.data.score++;
                var newScore = 'Objects: ' + this.data.score + ' of 4';
                scoreBoard.setAttribute('text', 'value', newScore);
            }
        });
        sceneEl.querySelector("a-cylinder").addEventListener('click', () => {
            if(this.data.score === 3) {
                scoreBoard.setAttribute('text','value',"You won !!!");
            }else {
                this.data.score++;
                var newScore = 'Objects: ' + this.data.score + ' of 4';
                scoreBoard.setAttribute('text', 'value', newScore);
            }
        });
        sceneEl.querySelector("a-sphere").addEventListener('click', () => {
            if(this.data.score === 3) {
                scoreBoard.setAttribute('text','value',"You won !!!");
            }else {
                this.data.score++;
                var newScore = 'Objects: ' + this.data.score + ' of 4';
                scoreBoard.setAttribute('text', 'value', newScore);
            }
        });
        sceneEl.querySelector("a-plane").addEventListener('click', () => {
            if(this.data.score === 3) {
                scoreBoard.setAttribute('text','value',"You won !!!");
            }else {
                this.data.score++;
                var newScore = 'Objects: ' + this.data.score + ' of 4';
                scoreBoard.setAttribute('text', 'value', newScore);

            }
        });
    }
});

<!--Debugging-->
<!--    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"-->
<!--           event-set__enter="_event: mouseenter; color: #8FF7FF"-->
// <!--           event-set__leave="_event: mouseleave; color: #4CC3D9"> -->
    <!--    <script>-->
    <!--        AFRAME.registerComponent('collider-check', {-->
    <!--            dependencies: ['raycaster'],-->

    <!--            init: function () {-->
    <!--                this.el.addEventListener('raycaster-intersection', function () {-->
    <!--                    console.log('Player hit something!');-->
    <!--                });-->
    <!--            }-->
    <!--        });-->