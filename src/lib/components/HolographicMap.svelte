<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  let canvasElement: HTMLCanvasElement;
  let animationFrameId: number;

  onMount(() => {
    if (!canvasElement) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasElement.clientWidth / canvasElement.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasElement,
      alpha: true,
      antialias: true
    });
    renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create holographic sphere with wireframe
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({
      color: 0x6366f1,
      wireframe: true,
      transparent: true,
      opacity: 0.6
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Create inner glowing sphere
    const innerGeometry = new THREE.SphereGeometry(1.8, 32, 32);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    const innerSphere = new THREE.Mesh(innerGeometry, innerMaterial);
    scene.add(innerSphere);

    // Create orbiting particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 100;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 8;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.05,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Rotate sphere
      sphere.rotation.y += 0.003;
      sphere.rotation.x += 0.001;

      // Rotate inner sphere in opposite direction
      innerSphere.rotation.y -= 0.002;
      innerSphere.rotation.x -= 0.001;

      // Animate particles
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize with throttling
    let resizeTimeout: number;
    const handleResize = () => {
      if (!canvasElement) return;
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        camera.aspect = canvasElement.clientWidth / canvasElement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(canvasElement.clientWidth, canvasElement.clientHeight);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = 0;
      }
      geometry.dispose();
      material.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  });
</script>

<canvas
  bind:this={canvasElement}
  class="w-full h-full"
  style="max-width: 100%; max-height: 100%;"
></canvas>
