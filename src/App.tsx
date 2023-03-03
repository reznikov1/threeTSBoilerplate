import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import "./styles.css";
import Scene from "./components/Scene";

const App = () => {
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
            }}>
            <Canvas
                camera={{
                    near: 0.1,
                    far: 1000,
                    zoom: 1,
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor("#252934");
                }}>
                <Suspense fallback={null}>
                    <Scene/>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default App;
