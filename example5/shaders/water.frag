#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSamplerWaterTex;
uniform sampler2D uSampler2;

uniform float timeFactor;

void main() {
	vec4 color = texture2D(uSamplerWaterTex, vTextureCoord+vec2(sin(timeFactor)*0.04, sin(timeFactor)*0.04));
	vec4 filter = texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord+vec2(sin(timeFactor), sin(timeFactor)));
	
	gl_FragColor = color;
}