attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
varying float h;
uniform sampler2D uSamplerTerrainMap;

uniform float normScale;

uniform float timeFactor;

void main() {
	h = 0.15;
	vTextureCoord = aTextureCoord;

	vec4 color = texture2D(uSamplerTerrainMap, vTextureCoord);

	vec4 offset = vec4(aVertexPosition + aVertexNormal * color.rgb, 1.0);

	gl_Position = vec4(uPMatrix * uMVMatrix * offset);
	h = 1.0 - color.r;
}

