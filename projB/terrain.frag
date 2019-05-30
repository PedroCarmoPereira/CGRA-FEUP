#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
varying float h;

uniform sampler2D uSamplerTerrainTex;
uniform sampler2D uSamplerTerrainMap;
uniform sampler2D uSamplerTerrainAlt;

void main() {
	vec4 color = texture2D(uSamplerTerrainTex, vTextureCoord);
	vec4 filter = texture2D(uSamplerTerrainMap, vTextureCoord);
	vec4 alt = texture2D(uSamplerTerrainAlt, vec2(0, h));
	
	gl_FragColor = 0.5 * color + 0.5 * alt;
}