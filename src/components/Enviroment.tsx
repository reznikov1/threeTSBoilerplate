import { BlendFunction } from 'postprocessing'
import { Noise, EffectComposer } from '@react-three/postprocessing'
import PostprocessingEffect from "./CustomPostprocessing";
import { useControls } from 'leva';

const Enviroment = () => {

    const { frequency, amplitude } = useControls('Postprocessing',{
        frequency: {
            value: 10,
            min: 0,
            max: 10,
            step: 0.01
        },
        amplitude: {
            value: 0.2,
            min: 0,
            max: 1,
            step: 0.01
        }
    });

    return (
        <>
            <EffectComposer>
                <PostprocessingEffect
                    frequency={frequency}
                    amplitude={amplitude}
                    blendFunction={BlendFunction.MULTIPLY}
                />
            </EffectComposer>
            <ambientLight intensity={1.0} color={0x3333dd} />
            <directionalLight
                position={[0, 2, 0]}
                intensity={1.5}
                color={0xddaa11}
            />
        </>
    );
};



export default Enviroment;
