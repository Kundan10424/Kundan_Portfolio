// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({isMobile}) => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={1.7} groundColor='black'/>
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1}/>
//       <primitive
//         object={computer.scene}
//         scale={ isMobile ? 0.5 : 0.70}
//         position = { isMobile ? [0,-3, -2.2 ]: [0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {

//   const [ismobile, setIsmobile] = useState(false)

//   useEffect(()=> {
//     const mediaQuery = window.matchMedia("(max-width: 500px)")

//     setIsmobile(mediaQuery.matches)

//     const handleMediaQueryChange = (event) => {
//       setIsmobile(event.matches)
//     }

//     mediaQuery.addEventListener('change', handleMediaQueryChange)

//     return () => {
//       mediaQuery.removeEventListener('change', handleMediaQueryChange)
//     }
//   })

//   return (
//     <Canvas 
//       frameloop='demand'
//       shadows
//       dpr={[1, 2]}
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers isMobile={ismobile}/>
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   );
// };

// export default ComputersCanvas;

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three"; // Import Three.js
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.7} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.7}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    // ✅ Fix useEffect dependency issue
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []); // ✅ Add dependency array to prevent multiple executions

  useEffect(() => {
    // ✅ Check if WebGL is supported
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("webgl2");

    if (!gl) {
      console.warn("WebGL not supported on this device.");
      setWebGLSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <div>WebGL is not supported on this device.</div>;
  }

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={Math.min(window.devicePixelRatio, 2)} // ✅ Optimize DPR
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance", // ✅ Improve WebGL performance
        antialias: true, // ✅ Ensure smoother edges
      }}
      onCreated={({ gl }) => {
        gl.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // ✅ Prevent extreme pixel ratios
        gl.outputEncoding = THREE.sRGBEncoding; // ✅ Ensure correct color rendering
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
