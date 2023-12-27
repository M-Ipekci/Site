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

          {/* Ipekci Keys */}
          <group name="Ipekci Keys" position={[10, 190, 200]}>
            {/* Key ! */}
            <group name="Key !" position={[1200, -900, 0]}>
              {/* ... (Components for Key !) */}
            </group>

            {/* Key E */}
            <group name="Key E" position={[-400.5, -900, 0]}>
              {/* ... (Components for Key E) */}
            </group>

            {/* Key P */}
            <group name="Key P" position={[-800.5, -900, 0]}>
              {/* ... (Components for Key P) */}
            </group>

            {/* Key C */}
            <group name="Key C" position={[400, -900, 0]}>
              {/* ... (Components for Key C) */}
            </group>

            {/* Key I */}
            <group name="Key I" position={[-1200, -900, 0]}>
              {/* ... (Components for Key I) */}
            </group>

            {/* Key K */}
            <group name="Key K" position={[0, -900, 0]}>
              {/* ... (Components for Key K) */}
            </group>

            {/* Key I 2 */}
            <group name="Key I 2" position={[800, -900, 0]}>
              {/* ... (Components for Key I 2) */}
            </group>

            {/* Add other keys here */}
          </group>

          {/* Mustafa Keys */}
          <group name="Mustafa Keys" position={[10, 184.9, -200]}>
            {/* Key A 2 */}
            <group name="Key A 2" position={[1200, -900, 0]}>
              {/* ... (Components for Key A 2) */}
            </group>

            {/* Key S */}
            <group name="Key S" position={[-400.5, -900, 0]}>
              {/* ... (Components for Key S) */}
            </group>

            {/* Key F */}
            <group name="Key F" position={[800, -900, 0]}>
              {/* ... (Components for Key F) */}
            </group>

            {/* Key A */}
            <group name="Key A" position={[400, -900, 0]}>
              {/* ... (Components for Key A) */}
            </group>

            {/* Key T */}
            <group name="Key T" position={[0, -900, 0]}>
              {/* ... (Components for Key T) */}
            </group>

            {/* Key M */}
            <group name="Key M" position={[-1200.5, -900, 0]}>
              {/* ... (Components for Key M) */}
            </group>

            {/* Key U */}
            <group name="Key U" position={[-800.5, -900, 0]}>
              {/* ... (Components for Key U) */}
            </group>

            {/* Add other keys here */}
          </group>

          {/* Rectangle 2 */}
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            material={materials['Rectangle 2 Material']}
            castShadow
            receiveShadow
            position={[0, -950, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />

          {/* Rectangle */}
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            material={materials['Rectangle Material']}
            castShadow
            receiveShadow
            position={[0, -830, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          />

          {/* Orthographic Camera */}
          <OrthographicCamera
            name="1"
            makeDefault={false}
            far={10000}
            near={-50000}
          />

          {/* Directional Light */}
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

          {/* Ambient Light */}
          <ambientLight name="Ambient Light" color={0x404040} intensity={0.3} />

          {/* RectAreaLight */}
          <rectAreaLight
            name="Light"
            width={2000}
            height={2000}
            color={0xffffff}
            intensity={2.5}
            position={[-800, 1500, 800]} // Adjusted position for the light
            lookAt={[0, 0, 0]}
            penumbra={1}
          />

          {/* ... (Other lights and elements as needed) */}
        </scene>
      </group>
    </>
  );
}
