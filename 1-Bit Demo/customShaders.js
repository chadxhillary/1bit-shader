// Custom written Shaders for use in 1-Bit
// @author Chad Hillary
// COMP 3020 Course Project

// Dithering Shader
var grayscale = {
    uniforms: {
        "tDiffuse": { value: null },
        "amount":   { value: 1.0 },
    },
    vertexShader: [
        "varying vec2 vUv;",
        "void main() {",
            "vUv = uv;",
            "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}"
    ].join( "\n" ),
    fragmentShader: [
        "uniform sampler2D tDiffuse;",
        "varying vec2 vUv;",
        "void main() {",
            "vec4 color = texture2D( tDiffuse, vUv );",
            "vec4 fragPos = gl_FragCoord;",

            // Converting to less colors (grayscale) using Gamma formula
            "float grey = 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;",
            "grey = grey / 0.039;",
            "grey = floor(grey + 0.5);",
            "grey = grey * 0.039;",

            //"int offset = int(screenSize * cameraRot / cameraFOV);",

            // get dithering threshold
               "int x = int(mod(fragPos.x, 8.0));",
"               int y = int(mod(fragPos.y, 8.0));",

     					// glsl doesen't let me use a matrix so we're gonna have to hard code
"               int index = (x * 8) + y;", // index of pseudomatrix",
"               float dither;",

"                   if (index <= 0) dither = 0.0;",
"                   if (index == 1) dither = 48.0;",
"                   if (index == 2) dither = 12.0;",
"                   if (index == 3) dither = 60.0;",
"                   if (index == 4) dither = 3.0;",
"                   if (index == 5) dither = 51.0;",
"                   if (index == 6) dither = 15.0;",
"                   if (index == 7) dither = 61.0;",
"                   if (index == 8) dither = 32.0;",
"                   if (index == 9) dither = 16.0;",
              "     if (index == 10) dither = 44.0;",
                "   if (index == 11) dither = 28.0;",
              "     if (index == 12) dither = 35.0;",
              "     if (index == 13) dither = 19.0;",
              "     if (index == 14) dither = 47.0;",
              "     if (index == 15) dither = 31.0;",
              "     if (index == 16) dither = 8.0;",
              "      if (index == 17) dither = 56.0;",
              "      if (index == 18) dither = 4.0;",
              "      if (index == 19) dither = 52.0;",
              "     if (index == 20) dither = 11.0;",
              "     if (index == 21) dither = 59.0;",
              "      if (index == 22) dither = 7.0;",
              "      if (index == 23) dither = 55.0;",
              "      if (index == 24) dither = 40.0;",
              "      if (index == 25) dither = 24.0;",
              "     if (index == 26) dither = 36.0;",
              "      if (index == 27) dither = 20.0;",
              "     if (index == 28) dither = 43.0;",
              "     if (index == 29) dither = 27.0;",
              "     if (index == 30) dither = 39.0;",
              "     if (index == 31) dither = 23.0;",
              "     if (index == 32) dither = 2.0;",
              "     if (index == 33) dither = 50.0;",
              "     if (index == 34) dither = 14.0;",
              "     if (index == 35) dither = 62.0;",
              "     if (index == 36) dither = 1.0;",
              "     if (index == 37) dither = 49.0;",
              "     if (index == 38) dither = 13.0;",
              "     if (index == 39) dither = 61.0;",
              "     if (index == 40) dither = 34.0;",
              "     if (index == 41) dither = 18.0;",
              "     if (index == 42) dither = 46.0;",
              "     if (index == 43) dither = 30.0;",
              "     if (index == 44) dither = 33.0;",
              "     if (index == 45) dither = 17.0;",
              "     if (index == 46) dither = 45.0;",
              "     if (index == 47) dither = 29.0;",
              "     if (index == 48) dither = 10.0;",
              "     if (index == 49) dither = 58.0;",
              "     if (index == 50) dither = 6.0;",
              "     if (index == 51) dither = 54.0;",
              "     if (index == 52) dither = 9.0;",
              "     if (index == 53) dither = 57.0;",
              "     if (index == 54) dither = 5.0;",
              "     if (index == 55) dither = 53.0;",
              "     if (index == 56) dither = 42.0;",
              "     if (index == 57) dither = 26.0;",
              "     if (index == 58) dither = 38.0;",
              "     if (index == 59) dither = 22.0;",
              "     if (index == 60) dither = 41.0;",
              "     if (index == 61) dither = 25.0;",
              "     if (index == 62) dither = 37.0;",
              "      if (index >= 63) dither = 21.0;",

     				"dither *= (1.0 / 64.0);", // matrix math",

            // The Threshold
            "if(grey > dither)",
              "gl_FragColor = vec4(0.8);", // White
            "else",
              "gl_FragColor = vec4(0.2);",  // Dark Gray
            //  "gl_FragColor = vec4(0.17,0.25,0.09,1.0);", //Dark Green
            //  "gl_FragColor = vec4(0.09,0.15,0.32,1.0);", //Dark Blue
        "}"
    ].join( "\n" )

}

///////////////////////////////////////////////////////////////////////
// WIREFRAME SHADER
//
// Uses MeshLambert code copied from inside of three.js
// with white/black threshold added.
///////////////////////////////////////////////////////////////////////

THREE.outlineShader = {

uniforms: THREE.UniformsUtils.merge( [
    THREE.UniformsLib[ "common" ],
    THREE.UniformsLib[ "fog" ],
    THREE.UniformsLib[ "lights" ],
    THREE.UniformsLib[ "shadowmap" ],
    {
        "ambient"  : { type: "c", value: new THREE.Color( 0xffffff ) },
        "emissive" : { type: "c", value: new THREE.Color( 0x000000 ) },
        "wrapRGB"  : { type: "v3", value: new THREE.Vector3( 1, 1, 1 ) }
    }
]),

vertexShader: [

"  #define LAMBERT",

"  varying vec3 vLightFront;",

"  #ifdef DOUBLE_SIDED",

  	"varying vec3 vLightBack;",

"  #endif",

"  #include <common>",
"  #include <uv_pars_vertex>",
"  #include <uv2_pars_vertex>",
"  #include <envmap_pars_vertex>",
  "#include <bsdfs>",
"  #include <lights_pars>",
"  #include <color_pars_vertex>",
"  #include <morphtarget_pars_vertex>",
"  #include <skinning_pars_vertex>",
"  #include <shadowmap_pars_vertex>",
"  #include <logdepthbuf_pars_vertex>",
"  #include <clipping_planes_pars_vertex>",

"  void main() {",

  "	#include <uv_vertex>",
"  	#include <uv2_vertex>",
"  	#include <color_vertex>",

"  	#include <beginnormal_vertex>",
"  	#include <morphnormal_vertex>",
"  	#include <skinbase_vertex>",
  	"#include <skinnormal_vertex>",
"  	#include <defaultnormal_vertex>",

"  	#include <begin_vertex>",
"  	#include <morphtarget_vertex>",
  	"#include <skinning_vertex>",
  	"#include <project_vertex>",
"  	#include <logdepthbuf_vertex>",
  "	#include <clipping_planes_vertex>",

"  	#include <worldpos_vertex>",
  	"#include <envmap_vertex>",
"  	#include <lights_lambert_vertex>",
  	"#include <shadowmap_vertex>",

"  }"

].join("\n"),

fragmentShader: [

"  uniform vec3 diffuse;",
"uniform vec3 emissive;",
"uniform float opacity;",

"varying vec3 vLightFront;",

"#ifdef DOUBLE_SIDED",

"varying vec3 vLightBack;",

"vec4 color;",

"#endif",

"#include <common>",
"#include <packing>",
"#include <color_pars_fragment>",
"#include <uv_pars_fragment>",
"#include <uv2_pars_fragment>",
"#include <map_pars_fragment>",
"#include <alphamap_pars_fragment>",
"#include <aomap_pars_fragment>",
"#include <lightmap_pars_fragment>",
"#include <emissivemap_pars_fragment>",
"#include <envmap_pars_fragment>",
"#include <bsdfs>",
"#include <lights_pars>",
"#include <fog_pars_fragment>",
"#include <shadowmap_pars_fragment>",
"#include <shadowmask_pars_fragment>",
"#include <specularmap_pars_fragment>",
"#include <logdepthbuf_pars_fragment>",
"#include <clipping_planes_pars_fragment>",

"void main() {",

"#include <clipping_planes_fragment>",

"vec4 diffuseColor = vec4( diffuse, opacity );",
"ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );",
"vec3 totalEmissiveRadiance = emissive;",

"#include <logdepthbuf_fragment>",
"#include <map_fragment>",
"#include <color_fragment>",
"#include <alphamap_fragment>",
"#include <alphatest_fragment>",
"#include <specularmap_fragment>",
"#include <emissivemap_fragment>",

// accumulation
"reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );",

"#include <lightmap_fragment>",

"reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );",

"#ifdef DOUBLE_SIDED",

"  reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;",

"#else",

"  reflectedLight.directDiffuse = vLightFront;",

"#endif",

"reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();",

// modulation
"#include <aomap_fragment>",

"vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;",

"#include <envmap_fragment>",

"vec4 color;",

"color = vec4( outgoingLight, diffuseColor.a );",

// ********* MY MODIFICATION

"if(color.r >= 0.2)",
  "gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);",
"else",
  "gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);",

//*************************

"#include <tonemapping_fragment>",
"#include <encodings_fragment>",
"#include <fog_fragment>",
"#include <premultiplied_alpha_fragment>",

"}"

].join("\n")

}
