import * as THREE from 'three';
import Shark from './shark/shark.js';

console.log(window.innerWidth, window.innerHeight)
const width = window.innerWidth;
const height = window.innerHeight;

console.log(width, height);

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
scene.add( camera );

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( width, height );
renderer.setClearColor("#96FFFF");

const shark = new Shark();
shark.addSharkToScene(scene);

const mouse = new THREE.Vector2();
document.addEventListener('mousemove', (event) => {
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}, false);

document.body.appendChild( renderer.domElement );

function animate() {
    requestAnimationFrame( animate );
    //get direction from shark to mouse
    var direction = new THREE.Vector3();
    direction.subVectors( new THREE.Vector3(mouse.x, mouse.y, 0), shark.head.position ).normalize();
    //get angle from direction
    var angle = Math.atan2(direction.y, direction.x);
    angle -= Math.PI / 2;
    //rotate shark
    shark.rotate(angle);


    shark.update();
    renderer.render( scene, camera );
}


animate();
