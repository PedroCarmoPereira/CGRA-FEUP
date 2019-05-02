attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;
uniform sampler2D uSampler2;

uniform float normScale;

uniform float timeFactor;

void main() {
	vTextureCoord = aTextureCoord;

	vec4 color = texture2D(uSampler2, vTextureCoord+vec2(sin(timeFactor), sin(timeFactor)));

	float l = color.r*0.299+ color.g*0.587 + color.b *0.114;

	vec3 offset = aVertexNormal*normScale*l*0.004;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition+offset, 1.0);
}

