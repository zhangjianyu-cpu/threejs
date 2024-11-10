
import './App.css'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import { AmbientLight } from 'three';

function App ()
{
  const gltf = useLoader( GLTFLoader, '/school.gltf' )
  console.log( gltf );
  console.log(<primitive></primitive>);
  return (
    <div id="canvas-container">
      <Canvas>
      <AmbientLight/>
  <directionalLight color="red"  />
  <mesh>
    <boxGeometry />
    <meshStandardMaterial />
  </mesh>

        <primitive />
        <OrbitControls />
      </Canvas>
    </div>
  )
}


export default App
