import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience'
import * as THREE from "three"
import { NoToneMapping } from 'three'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    
    <Canvas
        // orthographic

        //flat //to remove ACES Color

        camera={ { 
            fov:100,
            far:200,
            near:0.1,
            position: [3, 2, 6]
         } }

         gl={ {
            antialias: true, //default is true
            toneMapping: THREE.ACESFilmicToneMapping,
            outputColorSpace: THREE.SRGBColorSpace
         } }

    >
        <Experience />
    </Canvas>
    
)