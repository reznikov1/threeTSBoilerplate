uniform float frequency;
uniform float amplitude;
/*
The shaders have access to the following uniforms:
    uniform vec2 resolution;
    uniform vec2 texelSize;
    uniform float cameraNear;
    uniform float cameraFar;
    uniform float aspect;
    uniform float time;
    uniform sampler2D inputBuffer;
    uniform sampler2D depthBuffer;
*/
void mainUv(inout vec2 uv)
{
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor)
{
    float f = smoothstep(amplitude, amplitude+0.05, fract(sin(uv.y*frequency)+ cos(uv.x*frequency) + time));
    vec3 col = mix(vec3(0.6196, 0.8118, 0.7725), vec3(1.), f);

    outputColor = vec4(col, inputColor.a);
}