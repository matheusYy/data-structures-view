import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { Line as DLine, Html } from '@react-three/drei';
import { useRef } from 'react';



type props = {
 values: Array<number>;

}

function Line (props: props) {
  const { values } = props;


  return (
      <DLine 
        points={[new Vector3(1, 3, 4), 10, 4, 1]}
        color="red"                   // Default
        lineWidth={1}                   // In pixels (default)
        segments                        // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
        dashed={false}
          // All THREE.Line2 props are valid

        
      >
      </DLine>
  )
}

function Shadows(props) {
  const { viewport } = useThree()
  return (
    <mesh receiveShadow scale={[viewport.width, viewport.height, 1]} {...props}>
      <planeGeometry />
      <shadowMaterial transparent opacity={0.5} />
    </mesh>
  )
}
function Circle() {

}

function Content() {
  const ref = useRef<Mesh>()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.01))
  
  return (
    <group>
 
        <sphereGeometry  ref={ref} args={[1, 32, 16, 0, 6, 0, 3]} />
        <meshStandardMaterial  roughness={0.75} emissive="#404057" />

    </group>
  )
}



export function TreeView() {
  return (
    <Canvas
     shadows
     className='max-w-full aspect-[1200/1190] h-max'
     camera={{ position: [1, 5, 0.654] }}
 
    >
      <color attach={"background"} args={["#0d1118"]} />
      <pointLight args={[1, 10, 4]} />
      <pointLight color={"red"} />
   
      
      
      <Html>
        <h1 className=''>
          hey
        </h1>
      </Html>
      <Line values={[10, 12]} />
    </Canvas>
  )
}