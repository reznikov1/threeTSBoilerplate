uniform float uTime;
uniform float uDebugValue;

varying vec2 vUv;
varying vec3 vPosition;

#include ../noise/noise;
#include ../common;

float PI = 3.14159265358979323846264338327;

void main() {

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * viewMatrix * modelPosition;
    vUv = uv;
}