import * as THREE from 'three';
import Block from './block.js';

// crerate class Shark that's a 2D object in the canvas
export default class Shark {
    constructor() {
        this.head = new Block([new THREE.Mesh(
            new THREE.PlaneGeometry( 50, 50 ),
            new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
        )]);
        this.blocks = [this.head];
        this.head.updateRotation(1/2 * Math.PI / 2);

        this.body = new Block([new THREE.Mesh(
            new THREE.PlaneGeometry( 35, 35 ),
            new THREE.MeshBasicMaterial( { color: 0x0000ff } )
        )]);
        this.blocks.push(this.body);     
        this.body.addParentBlock(this.head, 100, -Math.PI / 2);

        this.body2 = new Block([new THREE.Mesh(
            new THREE.PlaneGeometry( 25, 25 ),
            new THREE.MeshBasicMaterial( { color: 0xff0000 } )
        )]);
        this.blocks.push(this.body2);     
        this.body2.addParentBlock(this.body, 100, -Math.PI / 2);

        this.body3 = new Block([new THREE.Mesh(
            new THREE.PlaneGeometry( 25, 25 ),
            new THREE.MeshBasicMaterial( { color: 0xff0000 } )
        )]);
        this.blocks.push(this.body3);     
        this.body3.addParentBlock(this.body2, 100, -Math.PI / 2);

        this.body4 = new Block([new THREE.Mesh(
            new THREE.PlaneGeometry( 25, 25 ),
            new THREE.MeshBasicMaterial( { color: 0xff0000 } )
        )]);
        this.blocks.push(this.body4);     
        this.body4.addParentBlock(this.body3, 100, -Math.PI / 2);

        this.body5 = new Block([new THREE.Mesh(
            new THREE.PlaneGeometry( 25, 25 ),
            new THREE.MeshBasicMaterial( { color: 0xff0000 } )
        )]);
        this.blocks.push(this.body5);     
        this.body5.addParentBlock(this.body4, 100, -Math.PI / 2);

        this.body6 = new Block([new THREE.Mesh(
            new THREE.PlaneGeometry( 25, 25 ),
            new THREE.MeshBasicMaterial( { color: 0xff0000 } )
        )]);
        this.blocks.push(this.body6);     
        this.body6.addParentBlock(this.body5, 100, -Math.PI / 2);

        this.body7 = new Block([new THREE.Mesh(
            new THREE.PlaneGeometry( 25, 25 ),
            new THREE.MeshBasicMaterial( { color: 0xff0000 } )
        )]);
        this.blocks.push(this.body7);     
        this.body7.addParentBlock(this.body6, 100, -Math.PI / 2);


        


    }

    rotate(rotation) {
        this.head.updateRotation(rotation);
    }

    update() {
        this.blocks.forEach(block => {
            block.update();
        });
    }

    addSharkToScene(scene) {
        this.blocks.forEach(block => {
            block.addBlockToScene(scene);
        });

    }
}
