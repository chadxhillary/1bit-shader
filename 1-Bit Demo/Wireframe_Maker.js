//*********************************
// WireFrame_Make.js
// @author Chad Hillary
//
// Function I built to automatically create
// wireframe boxes around each edge of a cube
// with the specified size.
//***********************************
function makeEdges(name, wt, xl, zl, yl, mat_wire){

var offset = wt / 2;

var geo_wire = new THREE.BoxBufferGeometry( xl,wt,wt );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = 0;
wiremesh.position.z = zl/2;
wiremesh.position.y = -yl/2;
var geo_wire = new THREE.BoxBufferGeometry( xl,wt,wt );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = 0;
wiremesh.position.z = -zl/2;
wiremesh.position.y = -yl/2;
var geo_wire = new THREE.BoxBufferGeometry( xl,wt,wt );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = 0;
wiremesh.position.z = -zl/2;
wiremesh.position.y = yl/2;
var geo_wire = new THREE.BoxBufferGeometry( xl,wt,wt );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = 0;
wiremesh.position.z = zl/2;
wiremesh.position.y = yl/2;

var geo_wire = new THREE.BoxBufferGeometry( wt,wt,zl );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = xl/2;
wiremesh.position.z = 0;
wiremesh.position.y = -yl/2;
var geo_wire = new THREE.BoxBufferGeometry( wt,wt,zl );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = -xl/2;
wiremesh.position.z = 0;
wiremesh.position.y = -yl/2;
var geo_wire = new THREE.BoxBufferGeometry( wt,wt,zl );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = xl/2;
wiremesh.position.z = 0;
wiremesh.position.y = yl/2;
var geo_wire = new THREE.BoxBufferGeometry( wt,wt,zl );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = -xl/2;
wiremesh.position.z = 0;
wiremesh.position.y = yl/2;

var geo_wire = new THREE.BoxBufferGeometry( wt,yl,wt );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = xl/2;
wiremesh.position.z = zl/2;
wiremesh.position.y = 0;
var geo_wire = new THREE.BoxBufferGeometry( wt,yl,wt );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = -xl/2;
wiremesh.position.z = zl/2;
wiremesh.position.y = 0;
var geo_wire = new THREE.BoxBufferGeometry( wt,yl,wt );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = xl/2;
wiremesh.position.z = -zl/2;
wiremesh.position.y = 0;
var geo_wire = new THREE.BoxBufferGeometry( wt,yl,wt );
var wiremesh = new THREE.Mesh( geo_wire, mat_wire );
wiremesh.receiveShadow = true;
name.add( wiremesh );
wiremesh.position.x = -xl/2;
wiremesh.position.z = -zl/2;
wiremesh.position.y = 0

}
