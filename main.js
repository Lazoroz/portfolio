import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-10);

renderer.render(scene, camera);

// Torus

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus)

// function animate() {
//   requestAnimationFrame( animate ); 

//   torus.rotation.x += 0.01;
//   torus.rotation.y += 0.005;
//   torus.rotation.z += 0.01;

//   renderer.render( scene, camera );

// }

// Torus 2

const geometry = new THREE.TorusGeometry(14, 3, 16, 80);
const material = new THREE.MeshBasicMaterial({ color: 'white', wireframe: true });
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

function animate() {
  requestAnimationFrame( animate ); 

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.015;
  torus.rotation.z += 0.02;

  renderer.render( scene, camera );
}

animate()




