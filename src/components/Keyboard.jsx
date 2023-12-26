import React from "react";
import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';

const Keyboard = ({ position, rotation }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/HKlfAoUoTv3w35yQ/scene.splinecode');

  return (
    <group position={position} rotation={rotation}>
      <group name="Ipekci Keys" position={[10, 190, 200]}>
        <group name="Key !" position={[1200, -900, 0]}>
          <mesh
            name="Text"
            geometry={nodes.Text.geometry}
            material={materials['Text Material']}
            castShadow
            receiveShadow
            position={[-44.37, 140.25, -59.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube"
            geometry={nodes.Cube.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 168.25, 0]}
            scale={1}
          />
        </group>
        <group name="Key E" position={[-400.5, -900, 0]}>
          <mesh
            name="Text1"
            geometry={nodes.Text1.geometry}
            material={materials['Text1 Material']}
            castShadow
            receiveShadow
            position={[-44.37, 140.25, -59.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube1"
            geometry={nodes.Cube1.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 168.25, 0]}
            scale={1}
          />
        </group>
        <group name="Key I 2" position={[800, -900, 0]}>
          <mesh
            name="Text2"
            geometry={nodes.Text2.geometry}
            material={materials['Text2 Material']}
            castShadow
            receiveShadow
            position={[-44.37, 140.25, -59.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube2"
            geometry={nodes.Cube2.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 168.25, 0]}
            scale={1}
          />
        </group>
        <group name="Key C" position={[400, -900, 0]}>
          <mesh
            name="Text3"
            geometry={nodes.Text3.geometry}
            material={materials['Text3 Material']}
            castShadow
            receiveShadow
            position={[-44.37, 140.25, -59.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube3"
            geometry={nodes.Cube3.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 168.25, 0]}
            scale={1}
          />
        </group>
        <group name="Key K" position={[0, -900, 0]}>
          <mesh
            name="Text4"
            geometry={nodes.Text4.geometry}
            material={materials['Text4 Material']}
            castShadow
            receiveShadow
            position={[-44.37, 140.25, -59.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube4"
            geometry={nodes.Cube4.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 168.25, 0]}
            scale={1}
          />
        </group>
        <group name="Key I" position={[-1200, -900, 0]}>
          <mesh
            name="Text5"
            geometry={nodes.Text5.geometry}
            material={materials['Text5 Material']}
            castShadow
            receiveShadow
            position={[-44.37, 140.25, -59.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube5"
            geometry={nodes.Cube5.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 168.25, 0]}
            scale={1}
          />
        </group>
        <group name="Key P" position={[-800.5, -900, 0]}>
          <mesh
            name="Text6"
            geometry={nodes.Text6.geometry}
            material={materials['Text6 Material']}
            castShadow
            receiveShadow
            position={[-44.37, 140.25, -59.95]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            name="Cube6"
            geometry={nodes.Cube6.geometry}
            material={materials.Key}
            castShadow
            receiveShadow
            position={[0, 168.25, 0]}
            scale={1}
          />
        </group>
      </group>
    </group>
  );
};

export default Keyboard;
