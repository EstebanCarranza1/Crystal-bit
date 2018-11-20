THREE.grayScaleShader = {

    uniforms: {

        "tDiffuse": { value: null },
        "amount": { value: 1.0 }

    },

    vertexShader: [

        "varying vec2 vUv;",

        "void main() {",

        "vUv = uv;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

        "}"

    ].join("\n"),

    fragmentShader: [

        "uniform float amount;",

        "uniform sampler2D tDiffuse;",

        "varying vec2 vUv;",

        "void main() {",

        "vec4 color = texture2D( tDiffuse, vUv );",
        "vec3 c = color.rgb;",

        "color.r = (color.r + color.g + color.b)/3;",
        "color.g = (color.r + color.g + color.b)/3;",
        "color.b = (color.r + color.g + color.b)/3;",

        "gl_FragColor = vec4( min( vec3( 1.0 ), color.rgb ), color.a );",

        "}"

    ].join("\n")

};
