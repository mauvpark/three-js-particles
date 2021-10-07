import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";

// Texture Loader
// const loader = new THREE.TextureLoader();
// const cross = loader.load("./star.png");

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.TorusGeometry(0.7, 0.2, 16, 100);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCnt = 5000;

// 5000개 각각의 입자에 x,y,z 값을 할당
const posArray = new Float32Array(particlesCnt * 3);

for (let i = 0; i < particlesCnt; i++) {
	// ? 0~5000까지 x,y,z가 번갈아가며 할당되고 -0.5로 가운데로 가져온 뒤 *5로 흩뿌림
	posArray[i] = (Math.random() - 0.5) * 5;
}

particlesGeometry.setAttribute(
	"position",
	new THREE.BufferAttribute(posArray, 3)
);

// Materials
const material = new THREE.PointsMaterial({
	size: 0.005,
});

const particlesMaterial = new THREE.PointsMaterial({
	size: 0.005,
	//map: cross,
	//transparent: true,
	color: "blue",
	blending: THREE.AdditiveBlending,
});

// Mesh
const sphere = new THREE.Points(geometry, material);
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(sphere, particlesMesh);

// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 2;
pointLight.position.y = 3;
pointLight.position.z = 4;
scene.add(pointLight);

/**
 * Sizes
 */
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

window.addEventListener("resize", () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(new THREE.Color("#21282a"), 1);

// Mouse
let mouseX = 0;
let mouseY = 0;

function animatedParticles(event) {
	mouseY = event.clientY * 0.001;
	mouseX = event.clientX * 0.001;
}

document.addEventListener("mousemove", animatedParticles);

/**
 * Animate
 */

const clock = new THREE.Clock();

const tick = () => {
	const elapsedTime = clock.getElapsedTime();

	// Update objects
	sphere.rotation.y = 0.5 * elapsedTime;
	// ! 첫 로딩화면에서 mouseX, Y 값이 undefined 상태이므로 초기값을 지정해 움직이게 함
	particlesMesh.rotation.y = -0.1 * elapsedTime;
	if (mouseX > 0) {
		particlesMesh.rotation.y = -mouseX * elapsedTime;
		particlesMesh.rotation.x = -mouseY * elapsedTime;
		particlesMesh.rotation.z = -mouseY * elapsedTime;
	}
	// Update Orbital Controls
	// controls.update()

	// Render
	renderer.render(scene, camera);

	// Call tick again on the next frame
	window.requestAnimationFrame(tick);
};

tick();
