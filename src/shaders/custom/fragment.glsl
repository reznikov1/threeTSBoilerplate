uniform float uTime;
uniform float uDebugValue;

varying vec2 vUv;



#include ../common;
#include ../noise/noise;

void main() {
    vec3 color = vec3(smoothstep(0.5,0.6,fract((vUv.x*1. +sin(vUv.y*5. + uTime * 0.1))*uDebugValue)));
    gl_FragColor = vec4(color, 1.0);
}