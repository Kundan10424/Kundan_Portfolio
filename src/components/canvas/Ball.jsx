import React, {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import{Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {

  const [decal] = useTexture([props.imgUrl] || "fallback-image.png")

  return (
    <Float speed={1.5} rotationIntensity={0.8}
    floatIntensity={1.5}>
      <ambientLight intensity={0.25}/>
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.5}> 
        <icosahedronGeometry args={[1,1]}/>
        <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading/>

        <Decal
        position={[0, 0, 1]}
        rotation={[2*Math.PI, 0, 6.25]}
        flatShading
        map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas = ({icon}) =>{
  return(
        <Canvas 
        frameloop='always'
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
          />
          <Ball imgUrl= {icon}/>
        </Suspense>
    
        <Preload all />
      </Canvas>
      
  )
}

export default BallCanvas

