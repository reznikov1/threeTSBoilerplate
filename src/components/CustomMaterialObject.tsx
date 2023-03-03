import { shaderMaterial, useGLTF } from "@react-three/drei";
import { extend, useFrame } from "@react-three/fiber";
import customVertexShader from '../shaders/custom/vertex.glsl'
import customFragmentShader from '../shaders/custom/fragment.glsl'
import * as THREE from "three";
import { useControls } from "leva";
import { useRef } from "react";
import { BufferGeometry, Mesh } from "three";

const CustomMaterial = shaderMaterial(
    {
        uTime: 0,
        uDebugValue: 0,
    },
    customVertexShader,
    customFragmentShader
)
extend({ CustomMaterial })


const CustomMaterialObject = () => {
    const object = useRef<THREE.Mesh>(null!);
    const mat = new CustomMaterial();
    const suzanne = useGLTF("./suzanne.glb");
    let geo = new THREE.BoxGeometry(1, 1, 1);
    suzanne.scene.traverse((child) => {
        if (child instanceof Mesh) {
            geo = child.geometry;
        }
    })

    const { debugValue } = useControls('Material shader', {
        debugValue: {
            value: 10,
            min: 0,
            max: 10,
            step: 0.01
        }
    });

    useFrame((state, delta) => {
        mat.uniforms.uTime.value += delta;
        mat.uniforms.uDebugValue.value = debugValue;
    })

    return (
        <mesh ref={object} material={mat} geometry={geo}>
        </mesh>
    );
};

export default CustomMaterialObject;
