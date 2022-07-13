let loader = new GLTFLoader();
loader.load('../../assets/hoverBike/scene.gltf', function(gltf){
let bike= gltf.scene.children[0];
scene.add(gltf.scene);// add it to your scene
animate();// call the animate function for infinite loop
});