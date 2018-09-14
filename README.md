# 1bit-shader
Attempt at a very basic 1-Bit shader in Three.js.

Warning - The scene demo currently causes WebGL to crash after a short period of time.

Also Note: Due to current three.js limitations, the code to determine edge color is partially written in the (modified) three.js source file.

Resources Used;

Skeleton code for First-Person controls modified from:
https://threejs.org/examples/misc_controls_pointerlock.html

Three js Effect Composer (Post-Processing) Library;
https://github.com/mrdoob/three.js/tree/dev/examples/js/postprocessing

“Standard Male Figure” (figure.json) Model provided by Clara.io user “Ben Houston”;
https://clara.io/view/d49ee603-8e6c-4720-bd20-9e3d7b13978a

Floor Texture (floor.jpg) by FreePik user “yingyang” @
https://www.freepik.com/free-photos-vectors/wood-texture

“Color FAQ” by Charles Ponyton – Article about how accurate luminance, gamma, color, etc. conversions are calculated in computer graphics, used to find the RGB weights for my grayscaling method;
http://poynton.ca/notes/colour_and_gamma/ColorFAQ.html#RTFToC9

Matrix coefficients and information used in dithering found from;
https://en.wikipedia.org/wiki/Ordered_dithering

Original forum post (Inspiration) by Lucas Pope, briefly explaining how his 1-bit was achieved in Unity, and his efforts to make the dither respond more smoothly to movement
https://forums.tigsource.com/index.php?topic=40832.msg1363742#msg1363742
