// Function to create a planet
function createPlanet(size, color, distanceFromSun) {
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshStandardMaterial({ color: color });
    const planet = new THREE.Mesh(geometry, material);

    // Create a pivot point for orbiting
    const pivot = new THREE.Object3D();
    scene.add(pivot);
    planet.position.x = distanceFromSun;
    pivot.add(planet);

    return { planet, pivot };
  
// Create planets (Mercury, Venus, Earth, Mars)
const planets = [];
planets.push(createPlanet(0.3, 0xaaaaaa, 8)); // Mercury
planets.push(createPlanet(0.8, 0xff9900, 12)); // Venus
planets.push(createPlanet(0.9, 0x0000ff, 16)); // Earth
planets.push(createPlanet(0.5, 0xff3300, 20)); // Mars

