import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { OrthographicCamera } from '@react-three/drei';

export default function Keyboard() {
  const keyboardGroup = useRef();

  const cameraPositions = [
    { position: [0, 2000, 0], rotation: [-Math.PI / 2, 0, 0] },
    { position: [2000, 2000, 2000], rotation: [-Math.PI / 4, 0, 0] },
    { position: [0, 2000, 0], rotation: [-Math.PI / 2, 0, 0] },
  ];

  const animationState = {
    currentStep: 0,
    keyAnimations: Array(14).fill(false),
  };

  useFrame(() => {
    const { position, rotation } = cameraPositions[animationState.currentStep];
    keyboardGroup.current.position.lerp(position, 0.05);
    keyboardGroup.current.rotation.lerp(rotation, 0.05);

    animationState.keyAnimations.forEach((keyAnimation, index) => {
      const keyMesh = getKeyMesh(index);
      if (keyMesh) {
        keyMesh.scale.y = keyAnimation ? 0.8 : 1;
      }
    });
  });

  const getKeyMesh = (index) => {
    const ipekciKeysGroup = keyboardGroup.current.getObjectByName('Ipekci Keys');
    const mustafaKeysGroup = keyboardGroup.current.getObjectByName('Mustafa Keys');

    if (ipekciKeysGroup && mustafaKeysGroup) {
      const keyMesh = ipekciKeysGroup.children[index] || mustafaKeysGroup.children[index];
      return keyMesh;
    }

    return null;
  };

  return (
    <>
      <color attach="background" args={['#e4e4e4']} />
      <group ref={keyboardGroup} dispose={null}>
        <scene name="Scene 1">
          <OrthographicCamera
            name="Camera"
            makeDefault={true}
            zoom={0.25}
            far={100000}
            near={-100000}
            position={[0, 0, 0]}
            rotation={[-1.57, 0, 0]}
          />

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

            <group name="Key I" position={[-1200, -900, 0]}>
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
          </group>

          <group name="Mustafa Keys" position={[10, 184.9, -200]}>
            <group name="Key A 2" position={[1200, -900, 0]}>
                <mesh
                    name="Text7"
                    geometry={nodes.Text7.geometry}
                    material={materials['Text7 Material']}
                    castShadow
                    receiveShadow
                    position={[-44.37, 140.25, -59.95]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cube7"
                    geometry={nodes.Cube7.geometry}
                    material={materials.Key}
                    castShadow
                    receiveShadow
                    position={[0, 168.25, 0]}
                    scale={1}
                />
            </group>


            <group name="Key S" position={[-400.5, -900, 0]}>
                <mesh
                    name="Text8"
                    geometry={nodes.Text8.geometry}
                    material={materials['Text8 Material']}
                    castShadow
                    receiveShadow
                    position={[-44.37, 140.25, -59.95]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cube8"
                    geometry={nodes.Cube8.geometry}
                    material={materials.Key}
                    castShadow
                    receiveShadow
                    position={[0, 168.25, 0]}
                    scale={1}
                />
            </group>

            <group name="Key F" position={[800, -900, 0]}>
                <mesh
                    name="Text9"
                    geometry={nodes.Text9.geometry}
                    material={materials['Text9 Material']}
                    castShadow
                    receiveShadow
                    position={[-44.37, 140.25, -59.95]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cube9"
                    geometry={nodes.Cube9.geometry}
                    material={materials.Key}
                    castShadow
                    receiveShadow
                    position={[0, 168.25, 0]}
                    scale={1}
                />
            </group>

            <group name="Key A" position={[400, -900, 0]}>
                <mesh
                    name="Text10"
                    geometry={nodes.Text10.geometry}
                    material={materials['Text10 Material']}
                    castShadow
                    receiveShadow
                    position={[-44.37, 140.25, -59.95]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cube10"
                    geometry={nodes.Cube10.geometry}
                    material={materials.Key}
                    castShadow
                    receiveShadow
                    position={[0, 168.25, 0]}
                    scale={1}
                />
            </group>

            <group name="Key T" position={[0, -900, 0]}>
                <mesh
                    name="Text11"
                    geometry={nodes.Text11.geometry}
                    material={materials['Text11 Material']}
                    castShadow
                    receiveShadow
                    position={[-44.37, 140.25, -59.95]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cube11"
                    geometry={nodes.Cube11.geometry}
                    material={materials.Key}
                    castShadow
                    receiveShadow
                    position={[0, 168.25, 0]}
                    scale={1}
                />
            </group>

            <group name="Key M" position={[-1200.5, -900, 0]}>
                <mesh
                    name="Text12"
                    geometry={nodes.Text12.geometry}
                    material={materials.Key}
                    castShadow
                    receiveShadow
                    position={[-44.37, 140.25, -59.95]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cube12"
                    geometry={nodes.Cube12.geometry}
                    material={materials['Key Steelblue']}
                    castShadow
                    receiveShadow
                    position={[1.01, 169.26, 0]}
                    scale={1}
                />
            </group>

            <group name="Key U" position={[-800.5, -900, 0]}>
                <mesh
                    name="Text13"
                    geometry={nodes.Text13.geometry}
                    material={materials['Text13 Material']}
                    castShadow
                    receiveShadow
                    position={[-44.37, 140.25, -59.95]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <mesh
                    name="Cube13"
                    geometry={nodes.Cube13.geometry}
                    material={materials.Key}
                    castShadow
                    receiveShadow
                    position={[0, 168.25, 0]}
                    scale={1}
                />
            </group>
          </group>

          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['Rectangle 2 Material']}
            castShadow
            receiveShadow
            position={[0, -950, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />

          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials['Rectangle Material']}
            castShadow
            receiveShadow
            position={[0, -830, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />

          <OrthographicCamera
            name="1"
            makeDefault={false}
            far={10000}
            near={-50000}
          />

          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-4071.54}
            shadow-camera-right={4071.54}
            shadow-camera-top={4071.54}
            shadow-camera-bottom={-4071.54}
            position={[-270.54, 436.35, 167.48]}
          />

          <ambientLight name="Ambient Light" color={0x404040} intensity={0.3} />

          <rectAreaLight
            name="Light"
            width={2000}
            height={2000}
            color={0xffffff}
            intensity={2.5}
            position={[-800, 1500, 800]}
            lookAt={[0, 0, 0]}
            penumbra={1}
          />
        </scene>
      </group>
    </>
  );
}
