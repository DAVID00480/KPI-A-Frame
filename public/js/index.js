//https://ottifox.com/examples/space/index.html
document.addEventListener('DOMContentLoaded', function() {
    const scene = document.querySelector('a-scene');
    const splash = document.querySelector('#splash');
    const loading = document.querySelector('#splash .loading');
    const startButton = document.querySelector('#splash .start-button');

    const emitEvent = (eventName, listeners) => {
        listeners.forEach((listener) => {
            const el = document.querySelector(listener);
            el.emit(eventName);
        })
    };


    scene.addEventListener('loaded', function (e) {
        setTimeout(() => {
            loading.style.display = 'none';
            splash.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
            startButton.style.opacity = 1;
        }, 50);
    });

    startButton.addEventListener('click', function (e) {
        activateSoundsForTouch();
        splash.style.display = 'none';
        emitEvent('scene-started', ['#planet', '#shuttle-light', '#shuttle-light', '#shuttle', '#shuttle']);
    });
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
        sceneEl.querySelector("a-sky").addEventListener('click', () => {
            if(this.data.score === 3) {
                scoreBoard.setAttribute('text','value',"You won !!!");
            }else {
                this.data.score++;
                var newScore = 'Objects: ' + this.data.score + ' of 4';
                scoreBoard.setAttribute('text', 'value', newScore);
            }
        });
        sceneEl.querySelector("a-triangle").addEventListener('click', () => {
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
