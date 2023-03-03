
import { forwardRef } from 'react'
import { BlendFunction, Effect } from 'postprocessing'
import { Uniform, WebGLRenderer, WebGLRenderTarget } from 'three'
import fragmentShader from '../shaders/customPostProcFrag.glsl'

type EffectProps =
    {
        frequency: number,
        amplitude: number,
        blendFunction: BlendFunction
    }

export default forwardRef(function (props: EffectProps) {
    const effect = new PostprocessingEffect(props)

    return <primitive object={effect} />
})

 class PostprocessingEffect extends Effect {
    constructor({ frequency, amplitude, blendFunction = BlendFunction.DARKEN }: EffectProps) {
        super(
            'PostProcessingEffect',
            fragmentShader,
            {
                blendFunction,
                uniforms: new Map([
                    ['frequency', new Uniform(frequency)],
                    ['amplitude', new Uniform(amplitude)]
                ])
            }
        )
    }

    override update = (renderer: WebGLRenderer,
        inputBuffer: WebGLRenderTarget,
        deltaTime?: number): void => {
        let offset = this.uniforms.get('offset');
        if (offset !== undefined) {

            offset.value += deltaTime
        }
    }
}