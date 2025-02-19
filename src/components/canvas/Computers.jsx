// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({isMobile}) => {
//   const computer = useGLTF("/desktop_pc/scene.gltf");

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


import React, { useEffect, useState } from "react";

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "20px" : "40px",
      }}
    >
      <div style={{ 
        marginBottom: isMobile ?  "100px" : "300px", 
        textAlign: "center", 
        color: "white" }}>
      </div>

      <img
        src="/hero/hero1.png"
        alt="Hero"
        style={{
          width: isMobile ? "90%" : "50%",
          height: "auto",
          scale: '1.3',
        }}
      />
    </div>
  );
};

export default ComputersCanvas;
