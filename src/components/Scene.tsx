import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import CustomMaterialObject from "./CustomMaterialObject";
import Enviroment from "./Enviroment";

const Scene = () => {
    return (
        <>
            <gridHelper />
            <axesHelper />
            <Perf position="top-left" />
            <OrbitControls />
            <Enviroment/>
            <CustomMaterialObject/>
        </>
    );
};


export default Scene;
