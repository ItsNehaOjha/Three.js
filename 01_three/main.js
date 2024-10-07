import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const geometry = new THREE.CylinderGeometry(2, 2, 3, 10,10, true);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00,side: THREE.DoubleSide});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;
const canvas = document.querySelector('canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;

// Animation loop
function animate() {
    window.requestAnimationFrame(animate);

    // Rotate the cube in place
    // cube.rotation.x += 0.01; 
    // cube.rotation.y += 0.01; 

    renderer.render(scene, camera);
    controls.update(); // Update controls if damping is enabled
}

renderer.setAnimationLoop(animate);
animate();
