import * as THREE from 'three';

console.log(window.innerWidth, window.innerHeight)
const width = window.innerWidth;
const height = window.innerHeight;

console.log(width, height);

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
scene.add( camera );

const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize( width, height );
renderer.setClearColor("#000000");


document.body.appendChild( renderer.domElement );





function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}


animate();
