import * as THREE from 'three';

export default class Block {
    constructor(meshes = []) {
        // a block is a collecion of meshes that moves together
        // it's position is relative to it's parent block
        this.meshes = meshes;
        this.parentBlock = null;
        this.offset = 0;

        this.distance = 0;
        this.position = new THREE.Vector3(0, 0, -1);
        this.rotation = 0;

        for (let i = 0; i < this.meshes.length; i++) {
            this.meshes[i].position.z = this.position.z;
        }
    }

    addParentBlock(block, distance, direction) {
        this.parentBlock = block;
        this.distance = distance;
        this.direction = direction;
        this.position.x = this.parentBlock.position.x + distance * Math.cos(this.parentBlock.rotation + direction);
        this.position.y = this.parentBlock.position.y + distance * Math.sin(this.parentBlock.rotation + direction);
        this.position.z = this.parentBlock.position.z - 1;
        this.updateMeshes();


    }

    update() {
        // update the position and rotation of this block
        // based on the position and rotation of it's parent block
        // and it's own position and rotation
        if (this.parentBlock != null) {
            this.position.x = this.parentBlock.position.x + this.distance * Math.cos(this.parentBlock.rotation + this.direction);
            this.position.y = this.parentBlock.position.y + this.distance * Math.sin(this.parentBlock.rotation + this.direction);
            this.position.z = this.parentBlock.position.z - 1;
            if (this.parentBlock.rotation != this.rotation) {
                // rotate in the shortest side to equal the parent rotation
                if (Math.abs(this.parentBlock.rotation - this.rotation) > Math.PI) {
                    if (this.parentBlock.rotation > this.rotation) {
                        this.rotation += 2 * Math.PI;
                    } else {
                        this.rotation -= 2 * Math.PI;
                    }
                }
                this.rotation += (this.parentBlock.rotation - this.rotation )/20;
            }
        }
        this.updateMeshes();
    }

    updateRotation(rotation) {
        this.rotation = rotation;
        this.updateMeshes();
    }

    updatePosition(position) {
        this.position = position;
        this.updateMeshes();
    }

    updateMeshes() {
        // update the position and rotation of the meshes
        // based on the position and rotation of this block
        for (let i = 0; i < this.meshes.length; i++) {
            this.meshes[i].position.x = this.position.x;
            this.meshes[i].position.y = this.position.y;
            this.meshes[i].rotation.z = this.rotation;
        }
    }

    addBlockToScene(scene) {
        this.meshes.forEach(mesh => {
            scene.add(mesh);
        }
        );
    }
}
