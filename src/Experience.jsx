import { useFrame, extend, useThree } from "@react-three/fiber"
import { useRef } from "react"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import CustomObject from "./CustomObject"


extend({ OrbitControls })

export default function Experience() {

    const { camera, gl } = useThree()

    const cubeRef = useRef()
    const groupRef = useRef()

    useFrame((state, delta) => {
        
        // const angle = state.clock.elapsedTime
        // state.camera.position.x = Math.sin(angle) * 10
        // state.camera.position.z = Math.cos(angle) * 10
        // state.camera.lookAt(0, 0, 0)

        cubeRef.current.rotation.y += delta
        //groupRef.current.rotation.y += delta
    })

    return (
        <>
        
        <orbitControls args={[ camera, gl.domElement ]}/>

        <directionalLight position={[0, 5, 5]} intensity={ 1.5 }/>
        <ambientLight intensity={0.3}/>

        <group ref={ groupRef }>
            <mesh ref={ cubeRef } scale={[1.5, 1.5, 1.5]} position={[2, 0, 0]} rotation={[7, 0, 0]} >

                {/* <sphereGeometry args={[ 1.5, 32, 32 ]}/> */}
                <boxGeometry />
                <meshStandardMaterial color="purple" wireframe={false} />

            </mesh>

            <mesh position={[-2, 0, 0]}>

                <sphereGeometry />
                <meshStandardMaterial color="orange" />

            </mesh>
        </group>

            <mesh scale={30} position={[0, -2, 0]} rotation-x={-Math.PI * 0.5}>

                <planeGeometry />
                <meshStandardMaterial color="green" />

            </mesh>

            <CustomObject />

        </>
    )
}