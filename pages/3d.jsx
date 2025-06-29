import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Threejs = () => {
    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 1.5, 5);

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);

        const container = document.getElementById('modelo3d');
        container.innerHTML = ''; // Limpa o conteúdo anterior, se houver
        container.appendChild(renderer.domElement);

        // Luzes
        const ambientLight = new THREE.AmbientLight(0xffffff, 1);  // Luz ambiente mais intensa
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 10, 5); // Ajustando a posição da luz
        scene.add(directionalLight);
        scene.add(ambientLight);

        // Carregando o modelo
        const loader = new GLTFLoader();
        let model = null;

        loader.load('/macintosh_classic_ii/scene.gltf', (gltf) => {
            console.log('Modelo carregado:', gltf);
            if (model) {
                scene.remove(model);
            }
            model = gltf.scene;
            scene.add(model);

            model.position.set(0, 0, 0); 
            model.scale.set(0.04, 0.04, 0.04);
        }, undefined, (error) => {
            console.error('Erro ao carregar o modelo:', error);
        });

        // Função de animação
        function animate() {
            requestAnimationFrame(animate);
            if (model) {
                model.rotation.y += 0.01;
            }
            renderer.render(scene, camera);
        }

        animate();

        // Ajuste de redimensionamento
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // Função de limpeza
        return () => {
            window.removeEventListener('resize', () => {});
            scene.clear();
        };
    }, []);

    return (
        <div id="modelo3d" style={{ width: '100%', height: '400px' }}></div>
    );
}

export default Threejs;