import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";

// Generate a sphere of points (avoids the deprecated maath dep)
function randomInSphere(count: number, radius: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    // Uniformly distributed inside a sphere
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(Math.random());
    arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}

const Stars = ({ count = 4000, radius = 1.4, color = "#67e8f9", size = 0.005 }: {
  count?: number; radius?: number; color?: string; size?: number;
}) => {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => randomInSphere(count, radius), [count, radius]);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 25;
    ref.current.rotation.y -= delta / 35;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const Nebula = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = t * 0.02;
    ref.current.position.x = Math.sin(t * 0.1) * 0.3;
  });
  return (
    <mesh ref={ref} position={[0, 0, -2]}>
      <planeGeometry args={[6, 6]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec2 vUv;
          void main() {
            vec2 c = vUv - 0.5;
            float d = length(c);
            float cyan = smoothstep(0.5, 0.0, d) * 0.35;
            float magenta = smoothstep(0.45, 0.1, distance(vUv, vec2(0.7, 0.3))) * 0.4;
            float violet = smoothstep(0.4, 0.05, distance(vUv, vec2(0.3, 0.7))) * 0.35;
            vec3 col = vec3(0.0, cyan * 0.8, cyan)
                     + vec3(magenta, 0.1 * magenta, magenta * 0.9)
                     + vec3(violet * 0.6, 0.0, violet);
            gl_FragColor = vec4(col, (cyan + magenta + violet) * 0.6);
          }
        `}
      />
    </mesh>
  );
};

export const Starfield = () => (
  <div className="absolute inset-0 -z-0 pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 1], fov: 75 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Nebula />
        <Stars count={3000} radius={1.2} color="#67e8f9" size={0.005} />
        <Stars count={1500} radius={1.5} color="#e879f9" size={0.004} />
        <Stars count={800} radius={1.8} color="#a78bfa" size={0.006} />
      </Suspense>
    </Canvas>
  </div>
);
