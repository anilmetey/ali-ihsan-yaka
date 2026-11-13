/**
 * Psyche 3D — Ultra-HD WebGL reconstruction of Figure 4 & Figure 5 from
 * Yaka, A. İ. (2024) "Psikotik Yapı, Baba İşlevi ve Lacanyen Kavramsallaştırma",
 * AYNA Klinik Psikoloji Dergisi, 11(1), 1–37.
 *
 * Strictly faithful to the author's original topological diagram:
 * - Horizontal vectors (S2,Baba Metaforu / Mesaj): left → right
 * - Vertical descent inside Baba Metaforu: (Mesaj) ↓ Simgeselden Düşme ↓ Simgeselde Tanı(n)mama ↓ Simgeselde Tanı(n)ma ↘ S2
 * - Ayna Evresi: vertical downward vector (top → bottom S2) pierced by the 3 horizontal message rows
 * - Baba-nın-Adları (Kod): 3×3 metonymic/metaphoric matrix with exact U-underloops, overloops, and vertical coding vectors
 * - S1 vertical upward axis: bottom S1 → top S1, with 3 curved jump arcs into Psikotik, Pervert, Nevrotik
 * - Ruhsal Yapılar: Nevrotik ↑ Pervert ↑ Psikotik ↑ Ruhsal Yapılar, and horizontal outputs → Süjenin Dil Alanı ve Konuşma İşlevi
 * - Inner loops (S1 → S2 top right-to-left, S2 → S1 bottom left-to-right)
 * - Outer loops (Süjenin Dil Alanı → Gösteren top right-to-left, Gösteren → Süjenin Dil Alanı bottom left-to-right)
 */
import * as THREE from '../vendor/three/three.module.min.js';
import { OrbitControls } from '../vendor/three/addons/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from '../vendor/three/addons/CSS2DRenderer.js';
import { EffectComposer } from '../vendor/three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from '../vendor/three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from '../vendor/three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from '../vendor/three/addons/postprocessing/OutputPass.js';

const host = document.querySelector('[data-psyche-3d]');
const frame = host?.closest('.psyche-diagram-frame');

/* ---------------------------------------------------------------- i18n */
const TEXT = {
  tr: {
    signifier: 'Gösteren',
    metaphor: 'Baba Metaforu',
    metaphorSub: '(Mesaj)',
    names: 'Baba-nın-Adları',
    namesSub: '(Kod)',
    structures: 'Ruhsal',
    structuresSub: 'Yapılar',
    speech: 'Süjenin\nDil Alanı\nve\nKonuşma\nİşlevi',
    fall: 'Simgeselden Düşme',
    unrec: 'Simgeselde Tanı(n)mama',
    rec: 'Simgeselde Tanı(n)ma',
    mirror: 'Ayna Evresi',
    real: 'Gerçek',
    imag: 'İmgesel',
    symb: 'Simgesel',
    psy: 'Psikotik',
    per: 'Pervert',
    neu: 'Nevrotik',
    all: 'Tümü',
    view3d: '3B Topolojik Görünüm',
    viewFlat: 'Şekil 5 Düzlem Görünümü',
    legendMsg: 'Metaforik Anlamlandırma · Baba Metaforu (S2) →',
    legendCode: 'Metonimik Kodlama · Baba-nın-Adları (S1) ↑',
    hint: 'Sürükleyerek 3B döndürün · Yapılara tıklayarak filtreleyin · Çift tıklayarak sıfırlayın',
    aria: 'Baba işlevi bağlamında gösteren zincirinin ve ruhsal yapıların üç boyutlu etkileşimli topolojik şeması'
  },
  en: {
    signifier: 'Signifier',
    metaphor: 'Paternal Metaphor',
    metaphorSub: '(Message)',
    names: 'Names-of-the-Father',
    namesSub: '(Code)',
    structures: 'Psychic',
    structuresSub: 'Structures',
    speech: 'The Subject’s\nField of Language\nand\nSpeaking\nFunction',
    fall: 'Falling out of the Symbolic',
    unrec: 'Unrecognised in the Symbolic',
    rec: 'Recognised in the Symbolic',
    mirror: 'Mirror Stage',
    real: 'Real',
    imag: 'Imaginary',
    symb: 'Symbolic',
    psy: 'Psychotic',
    per: 'Perverse',
    neu: 'Neurotic',
    all: 'All',
    view3d: '3D Topological View',
    viewFlat: 'Figure 5 Orthographic View',
    legendMsg: 'Metaphoric Signification · Paternal Metaphor (S2) →',
    legendCode: 'Metonymic Coding · Names-of-the-Father (S1) ↑',
    hint: 'Drag to orbit in 3D · Click structures to isolate · Double-click to reset',
    aria: 'Interactive three-dimensional topological diagram of the signifying chain and psychic structures'
  }
};
const lang = () => (document.documentElement.lang === 'en' ? 'en' : 'tr');
const t = key => TEXT[lang()][key] ?? key;

function supportsWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (_) {
    return false;
  }
}

if (host && frame && supportsWebGL()) {
  try {
    init();
  } catch (err) {
    console.warn('[psyche-3d] falling back to SVG:', err);
  }
}

function init() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------ palette */
  const C = {
    msg: new THREE.Color('#3D5690'),      // horizontal S2 message vectors (Lacanian cobalt)
    code: new THREE.Color('#B87314'),     // vertical S1 coding vectors & loops (warm ochre gold)
    loop: new THREE.Color('#354B84'),     // outer/inner S1-S2 loops
    mirror: new THREE.Color('#3D5690'),   // Mirror Stage vertical vector
    real: new THREE.Color('#C87820'),     // Gerçek (Warm terracotta amber)
    imag: new THREE.Color('#6B52AE'),     // İmgesel (Lacanian lavender indigo)
    symb: new THREE.Color('#1F7A70'),     // Simgesel (Lacanian teal)
    glass: new THREE.Color('#3D5690')
  };

  /* ------------------------------------------------------------ renderer */
  const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(dpr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.04;
  renderer.domElement.className = 'p3d-canvas';
  host.appendChild(renderer.domElement);

  const labelRenderer = new CSS2DRenderer();
  labelRenderer.domElement.className = 'p3d-labels';
  host.appendChild(labelRenderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#FAF9F6');
  scene.fog = new THREE.FogExp2('#FAF9F6', 0.004);

  const camera = new THREE.PerspectiveCamera(28, 2, 0.1, 300);
  const controls = new OrbitControls(camera, labelRenderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.enableZoom = false;
  controls.enablePan = false;
  controls.rotateSpeed = 0.55;
  controls.minPolarAngle = Math.PI / 2 - 0.52;
  controls.maxPolarAngle = Math.PI / 2 + 0.44;
  controls.minAzimuthAngle = -0.78;
  controls.maxAzimuthAngle = 0.78;

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1024, 576), 0.05, 0.2, 0.99);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  /* ------------------------------------------------------------ lights */
  scene.add(new THREE.AmbientLight('#ffffff', 2.1));
  const keyLight = new THREE.DirectionalLight('#fffbf2', 1.5);
  keyLight.position.set(6, 10, 14);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight('#4E5BA6', 0.8);
  rimLight.position.set(-9, -4, 9);
  scene.add(rimLight);
  const goldLight = new THREE.PointLight('#C88218', 10, 40, 1.2);
  goldLight.position.set(3, 5, 8);
  scene.add(goldLight);

  /* ------------------------------------------------------------ helpers */
  const world = new THREE.Group();
  scene.add(world);

  const glowTexture = (() => {
    const s = 128;
    const cv = document.createElement('canvas');
    cv.width = cv.height = s;
    const g = cv.getContext('2d');
    const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.2, 'rgba(255,255,255,.78)');
    grd.addColorStop(0.5, 'rgba(255,255,255,.16)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, s, s);
    const tex = new THREE.CanvasTexture(cv);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();

  const V = (x, y, z = 0) => new THREE.Vector3(x, y, z);
  const line = (a, b) => new THREE.LineCurve3(a, b);
  const bezier = (a, c1, c2, b) => new THREE.CubicBezierCurve3(a, c1, c2, b);
  const arc = (a, b, h, zOffset = 0) =>
    new THREE.CubicBezierCurve3(
      a,
      V(a.x + (b.x - a.x) * 0.18, a.y + h, a.z + zOffset),
      V(b.x - (b.x - a.x) * 0.18, b.y + h, b.z + zOffset),
      b
    );

  const tubeMaterials = [];
  const dimmables = [];
  const flows = [];

  function flowTube(curve, {
    color,
    radius = 0.04,
    tags = ['all'],
    speed = 0.45,
    density = 2.0,
    arrow = true,
    arrowScale = 1.0,
    order = 0,
    particles = 2,
    glow = 0.95
  }) {
    const length = curve.getLength();
    const segs = Math.max(28, Math.round(length * 22));
    const geo = new THREE.TubeGeometry(curve, segs, radius, 14, false);
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending,
      toneMapped: false,
      uniforms: {
        uColor: { value: color.clone() },
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uDensity: { value: Math.max(1, density * length / 4.2) },
        uProgress: { value: 0 },
        uDim: { value: 1 },
        uGlow: { value: glow },
        uPhase: { value: Math.random() }
      },
      vertexShader: /* glsl */`
        varying vec2 vUv;
        varying vec3 vN;
        varying vec3 vView;
        void main() {
          vUv = uv;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          vN = normalize(normalMatrix * normal);
          vView = normalize(-mv.xyz);
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: /* glsl */`
        uniform vec3 uColor;
        uniform float uTime, uSpeed, uDensity, uProgress, uDim, uGlow, uPhase;
        varying vec2 vUv;
        varying vec3 vN;
        varying vec3 vView;
        void main() {
          float a = vUv.x;
          if (a > uProgress) discard;
          float core = pow(max(0.0, abs(dot(vN, vView))), 0.45);
          float ends = smoothstep(0.0, 0.015, a) * smoothstep(uProgress, max(0.0, uProgress - 0.015), a);
          float wave = 0.5 + 0.5 * sin((a * uDensity * 18.8495) - uTime * uSpeed * 8.5 + uPhase * 6.2831);
          float dash = smoothstep(0.22, 0.48, wave);
          vec3 baseCol = mix(uColor * 0.72, uColor * 1.12, dash);
          vec3 col = mix(baseCol * 0.88, baseCol * 1.06, core);
          float alpha = (0.38 + 0.60 * dash) * uDim * ends;
          gl_FragColor = vec4(col, alpha);
        }`
    });
    mat.userData.order = order;
    tubeMaterials.push(mat);
    const mesh = new THREE.Mesh(geo, mat);
    mesh.renderOrder = 2;
    world.add(mesh);

    let cone = null;
    if (arrow) {
      const coneR = radius * 3.15 * arrowScale;
      const coneH = radius * 7.6 * arrowScale;
      const coneMat = new THREE.MeshBasicMaterial({
        color: color.clone(),
        transparent: true,
        toneMapped: false
      });
      cone = new THREE.Mesh(new THREE.ConeGeometry(coneR, coneH, 20), coneMat);
      const end = curve.getPointAt(1);
      const tan = curve.getTangentAt(1).normalize();
      const basePos = end.clone().addScaledVector(tan, -coneH * 0.38);
      cone.position.copy(basePos);
      cone.quaternion.setFromUnitVectors(V(0, 1, 0), tan);
      cone.scale.setScalar(0.001);
      cone.renderOrder = 3;
      cone.userData.basePos = basePos;
      cone.userData.tan = tan;
      cone.userData.coneH = coneH;
      world.add(cone);
      mat.userData.cone = cone;
    }

    if (particles > 0) {
      flows.push({ curve, color, radius, arrowScale, count: particles, speed: 0.065 + speed * 0.09, length, tags, mat });
    }
    dimmables.push({
      tags,
      setDim: v => {
        mat.uniforms.uDim.value = v;
        if (cone) cone.material.opacity = v;
      }
    });
    return { mesh, mat };
  }

  function label(text, pos, cls = '', tags = ['all']) {
    const el = document.createElement('div');
    el.className = `p3d-label ${cls}`;
    const span = document.createElement('span');
    span.className = 'p3d-text';
    span.dataset.key = text;
    span.textContent = t(text);
    el.appendChild(span);
    const obj = new CSS2DObject(el);
    obj.position.copy(pos);
    world.add(obj);
    dimmables.push({
      tags,
      setDim: v => {
        el.style.opacity = String(Math.max(0.16, v));
      }
    });
    return el;
  }

  function glassMonolith(cx, cy, w, h, d, tint, tags = ['all']) {
    const g = new THREE.Group();
    const depth = d * 1.45;
    const mat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FFFFFF'),
      roughness: 0.25,
      metalness: 0.08,
      transparent: true,
      opacity: 0.9,
      depthWrite: false
    });
    const box = new THREE.Mesh(new THREE.BoxGeometry(w, h, depth), mat);
    g.add(box);

    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(box.geometry),
      new THREE.LineBasicMaterial({
        color: tint,
        transparent: true,
        opacity: 0.82,
        toneMapped: false
      })
    );
    g.add(edges);

    const backPlate = new THREE.Mesh(
      new THREE.PlaneGeometry(w * 0.94, h * 0.96),
      new THREE.MeshBasicMaterial({
        color: '#EBF0FA',
        transparent: true,
        opacity: 0.88,
        depthWrite: false,
        toneMapped: false
      })
    );
    backPlate.position.z = -depth * 0.48;
    g.add(backPlate);

    g.position.set(cx, cy, 0);
    world.add(g);
    dimmables.push({
      tags,
      setDim: v => {
        edges.material.opacity = 0.25 + 0.55 * v;
        mat.opacity = 0.35 + 0.55 * v;
      }
    });
    return g;
  }

  const nodes = [];

  function processPedestal(x, y, key, tags) {
    const g = new THREE.Group();
    const plate = new THREE.Mesh(
      new THREE.BoxGeometry(2.72, 0.54, 0.52),
      new THREE.MeshStandardMaterial({
        color: '#FFFFFF',
        roughness: 0.22,
        metalness: 0.06,
        transparent: true,
        opacity: 0.95,
        depthWrite: false
      })
    );
    const border = new THREE.LineSegments(
      new THREE.EdgesGeometry(plate.geometry),
      new THREE.LineBasicMaterial({ color: '#4E5BA6', transparent: true, opacity: 0.68, toneMapped: false })
    );
    g.add(plate, border);
    g.position.set(x, y, 0);
    g.scale.setScalar(0.001);
    world.add(g);
    label(key, V(x, y, 0.3), 'p3d-process', tags);
    const n = { g, core: plate, tags, phase: Math.random() * 6.28, x, spin: false };
    nodes.push(n);
    dimmables.push({
      tags,
      setDim: v => {
        plate.material.opacity = 0.3 + 0.66 * v;
        border.material.opacity = 0.15 + 0.42 * v;
      }
    });
    return n;
  }

  function registerNode(x, y, color, key, tags) {
    const g = new THREE.Group();
    const disc = new THREE.Mesh(
      new THREE.CylinderGeometry(0.43, 0.43, 0.34, 40),
      new THREE.MeshStandardMaterial({
        color: '#FFFFFF',
        roughness: 0.2,
        metalness: 0.08,
        transparent: true,
        opacity: 0.96
      })
    );
    disc.rotation.x = Math.PI / 2;

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(0.44, 0.032, 16, 72),
      new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.95,
        toneMapped: false
      })
    );
    ring.position.z = 0.18;


    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        color,
        transparent: true,
        opacity: 0.16,
        depthWrite: false
      })
    );
    halo.scale.setScalar(1.35);

    g.add(disc, ring, halo);
    g.position.set(x, y, 0);
    g.scale.setScalar(0.001);
    world.add(g);

    // Label sits directly on the 3D medallion so no arrows ever cross the text
    label(key, V(x, y, 0.26), 'p3d-register', tags);

    const n = { g, core: ring, ring: disc, halo, tags, phase: Math.random() * 6.28, x, spin: false };
    nodes.push(n);
    dimmables.push({
      tags,
      setDim: v => {
        disc.material.opacity = 0.3 + 0.67 * v;
        ring.material.opacity = 0.25 + 0.68 * v;
        halo.material.opacity = 0.03 + 0.09 * v;
      }
    });
    return n;
  }

  function structureNode(x, y, key, tag, color) {
    const g = new THREE.Group();
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(1.52, 0.56, 0.56),
      new THREE.MeshStandardMaterial({
        color: '#FFFFFF',
        roughness: 0.22,
        metalness: 0.08,
        transparent: true,
        opacity: 0.96
      })
    );
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(box.geometry),
      new THREE.LineBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.92,
        toneMapped: false
      })
    );
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        color,
        transparent: true,
        opacity: 0.16,
        depthWrite: false
      })
    );
    halo.scale.set(1.9, 1.1, 1);

    g.add(box, edges, halo);
    g.position.set(x, y, 0);
    g.scale.setScalar(0.001);
    world.add(g);

    const el = label(key, V(x, y, 0.32), 'p3d-structure', [tag]);
    el.dataset.filter = tag;

    const n = { g, core: box, ring: edges, halo, tags: [tag], phase: Math.random() * 6.28, x, spin: false };
    nodes.push(n);
    dimmables.push({
      tags: [tag],
      setDim: v => {
        box.material.opacity = 0.3 + 0.67 * v;
        edges.material.opacity = 0.25 + 0.65 * v;
        halo.material.opacity = 0.03 + 0.09 * v;
      }
    });
    return n;
  }

  /* ============================================================
     EXACT TOPOLOGICAL LAYOUT OF FIGURE 5 (Yaka, 2024)
     ============================================================ */
  const R = [1.55, 0, -1.55];            // 3 rows: Simgeselden Düşme, Tanı(n)mama, Tanı(n)ma
  const ROWTAG = ['psy', 'per', 'neu'];
  const X = {
    L: -9.85,    // Gösteren (left vertical slab)
    P: -6.45,    // Baba Metaforu (Mesaj) column
    M: -3.85,    // Ayna Evresi vertical downward vector
    I: -1.65,    // İmgesel column
    G: 0.25,     // Gerçek column (centered under Baba-nın-Adları)
    S: 2.15,     // Simgesel column
    A: 3.65,     // S1 vertical upward axis
    Y: 5.35,     // Ruhsal Yapılar column (Psikotik / Pervert / Nevrotik)
    Rb: 9.15     // Süjenin Dil Alanı ve Konuşma İşlevi (right vertical slab)
  };

  /* 1. Left & Right Monolith Boxes */
  glassMonolith(X.L, -0.05, 1.15, 6.2, 0.9, C.glass);
  label('signifier', V(X.L, -0.05, 0.52), 'p3d-terminal p3d-vertical');

  glassMonolith(X.Rb, -0.05, 2.55, 6.2, 0.9, C.glass);
  label('speech', V(X.Rb, -0.05, 0.52), 'p3d-terminal p3d-speech');

  /* 2. Column Headings */
  label('metaphor', V(X.P, 3.16, 0.1), 'p3d-heading');
  label('metaphorSub', V(X.P, 2.68, 0.1), 'p3d-sub');

  label('names', V(X.G, 3.16, 0.1), 'p3d-heading');
  label('namesSub', V(X.G, 2.68, 0.1), 'p3d-sub');

  label('structures', V(X.Y, 3.16, 0.1), 'p3d-heading');
  label('structuresSub', V(X.Y, 2.68, 0.1), 'p3d-heading');

  /* 3. Top Bridge Arrows (Left → Right across headings, as in Figure 5) */
  // Gösteren top → Baba Metaforu
  flowTube(arc(V(X.L + 0.58, 2.75, 0.1), V(X.P - 1.38, 2.72, 0.1), 0.62, 0.22), {
    color: C.msg, radius: 0.042, order: 0.3, particles: 2
  });
  // Baba Metaforu right (left of Ayna Evresi) → arches OVER top of Ayna Evresi shaft → into Baba-nın-Adları
  flowTube(arc(V(X.M - 0.55, 2.7, 0.1), V(X.G - 1.58, 2.7, 0.1), 0.64, 0.22), {
    color: C.msg, radius: 0.042, order: 1.4, particles: 2
  });
  // S1 top → Ruhsal Yapılar (arches directly over S1 vertical axis top arrowhead)
  flowTube(arc(V(X.A - 0.56, 2.76, 0.1), V(X.A + 0.58, 2.76, 0.1), 0.52, 0.2), {
    color: C.msg, radius: 0.04, order: 3.55, particles: 1
  });
  // Ruhsal Yapılar → Süjenin Dil Alanı
  flowTube(arc(V(X.Y + 0.88, 2.75, 0.1), V(X.Rb - 1.28, 2.72, 0.1), 0.54, 0.2), {
    color: C.msg, radius: 0.04, order: 4.4, particles: 1
  });

  /* 4. Baba Metaforu (Mesaj) Column: 3 Process Stages + Vertical Descent */
  const procKeys = ['fall', 'unrec', 'rec'];
  R.forEach((y, i) => {
    const tags = [ROWTAG[i]];
    processPedestal(X.P, y, procKeys[i], tags);

    // Horizontal arrow: Gösteren → Process stage
    flowTube(line(V(X.L + 0.62, y, 0), V(X.P - 1.42, y, 0)), {
      color: C.msg, radius: 0.042, tags, order: 0.5 + i * 0.08, particles: 2
    });

    // Horizontal arrow: Process stage → Ayna Evresi blade
    flowTube(line(V(X.P + 1.42, y, 0), V(X.M - 0.08, y, 0)), {
      color: C.msg, radius: 0.04, tags, order: 1.25 + i * 0.08, particles: 1
    });

    // Horizontal arrow: after Ayna Evresi → into Baba-nın-Adları matrix
    flowTube(line(V(X.M + 0.56, y, 0), V(X.I - 0.48, y, 0)), {
      color: C.msg, radius: 0.04, tags, order: 1.65 + i * 0.08, particles: 2
    });
  });

  // Vertical downward arrows centered in Baba Metaforu column:
  // (Mesaj) ↓ Simgeselden Düşme ↓ Simgeselde Tanı(n)mama ↓ Simgeselde Tanı(n)ma
  flowTube(line(V(X.P, 2.42, 0), V(X.P, R[0] + 0.29, 0)), {
    color: C.msg, radius: 0.036, order: 0.85, particles: 1
  });
  flowTube(line(V(X.P, R[0] - 0.3, 0), V(X.P, R[1] + 0.3, 0)), {
    color: C.msg, radius: 0.036, order: 0.98, particles: 1
  });
  flowTube(line(V(X.P, R[1] - 0.3, 0), V(X.P, R[2] + 0.3, 0)), {
    color: C.msg, radius: 0.036, order: 1.12, particles: 1
  });
  // Bottom curved descent from Simgeselde Tanı(n)ma ↘ bottom S2
  flowTube(
    bezier(
      V(X.P, R[2] - 0.3, 0),
      V(X.P + 0.05, -2.75, 0.15),
      V(X.M - 1.05, -3.15, 0.15),
      V(X.M - 0.25, -3.12, 0)
    ),
    { color: C.msg, radius: 0.042, tags: ['neu'], order: 1.95, particles: 2 }
  );

  /* 5. Ayna Evresi: Vertical Downward Pillar + Refractive Prism Blade */
  glassMonolith(X.M, -0.1, 0.22, 5.65, 0.95, C.mirror);
  flowTube(line(V(X.M, 2.52, 0.22), V(X.M, -3.08, 0.22)), {
    color: C.mirror, radius: 0.05, speed: 0.4, order: 1.5, particles: 3, glow: 1.05
  });
  label('mirror', V(X.M + 0.32, -0.15, 0.35), 'p3d-mirror p3d-vertical');

  /* 6. Baba-nın-Adları (Kod) — Complete Figure 5 Matrix */

  // Register medallions in the 3 rows:
  // Row 0 (Simgeselden Düşme -> Psikotik): İmgesel — latest revision
  registerNode(X.G, R[0], C.imag, 'imag', ['psy']);
  // Row 1 (Simgeselde Tanı(n)mama -> Pervert): İmgesel, Gerçek
  registerNode(X.I, R[1], C.imag, 'imag', ['per']);
  registerNode(X.G, R[1], C.real, 'real', ['per']);
  // Row 2 (Simgeselde Tanı(n)ma -> Nevrotik): İmgesel, Gerçek, Simgesel
  registerNode(X.I, R[2], C.imag, 'imag', ['neu']);
  registerNode(X.G, R[2], C.real, 'real', ['neu']);
  registerNode(X.S, R[2], C.symb, 'symb', ['neu']);

  // --- Row 0 (Top / Psikotik) connections inside Baba-nın-Adları ---
  // U-shaped curve from top of İmgesel vertical vector into Row 0 İmgesel (exact Figure 5 detail!)
  flowTube(
    bezier(
      V(X.I + 0.16, R[0] - 0.08, 0.14),
      V(X.I + 0.34, R[0] - 0.78, 0.25),
      V(X.G - 0.56, R[0] - 0.78, 0.25),
      V(X.G - 0.34, R[0] - 0.22, 0.14)
    ),
    { color: C.code, radius: 0.034, tags: ['psy'], order: 2.35, particles: 2 }
  );
  // Short horizontal arrow to the right of Row 0 İmgesel (Gerçek →)
  flowTube(line(V(X.G + 0.46, R[0], 0), V(X.G + 1.28, R[0], 0)), {
    color: C.msg, radius: 0.036, tags: ['psy'], order: 2.55, particles: 1
  });
  // Over-loop above the horizontal arrow returning into top-right of Row 0 İmgesel (↶)
  flowTube(
    arc(V(X.G + 1.38, R[0] + 0.14, 0.14), V(X.G + 0.30, R[0] + 0.34, 0.14), 0.48, 0.18),
    { color: C.code, radius: 0.032, tags: ['psy'], order: 2.6, particles: 1 }
  );

  // --- Row 1 (Middle / Pervert) connections inside Baba-nın-Adları ---
  // Horizontal arrow: İmgesel → Gerçek
  flowTube(line(V(X.I + 0.46, R[1], 0), V(X.G - 0.46, R[1], 0)), {
    color: C.msg, radius: 0.036, tags: ['per'], order: 2.3, particles: 1
  });
  // Downward U-shaped under-loop: İmgesel ╰⤴ Gerçek
  flowTube(
    bezier(
      V(X.I + 0.18, R[1] - 0.36, 0.14),
      V(X.I + 0.36, R[1] - 0.94, 0.26),
      V(X.G - 0.40, R[1] - 0.94, 0.26),
      V(X.G - 0.24, R[1] - 0.36, 0.14)
    ),
    { color: C.code, radius: 0.032, tags: ['per'], order: 2.42, particles: 1 }
  );
  // Short horizontal arrow to the right of Row 1 Gerçek (Gerçek →)
  flowTube(line(V(X.G + 0.46, R[1], 0), V(X.G + 1.28, R[1], 0)), {
    color: C.msg, radius: 0.036, tags: ['per'], order: 2.55, particles: 1
  });
  // Over-loop arching over Gerçek → back into top-right of Row 1 Gerçek (↶)
  flowTube(
    arc(V(X.G + 1.54, R[1] + 0.14, 0.14), V(X.G + 0.30, R[1] + 0.34, 0.14), 0.52, 0.18),
    { color: C.code, radius: 0.032, tags: ['per'], order: 2.62, particles: 1 }
  );

  // --- Row 2 (Bottom / Nevrotik) connections inside Baba-nın-Adları ---
  // Horizontal arrow: İmgesel → Gerçek
  flowTube(line(V(X.I + 0.46, R[2], 0), V(X.G - 0.46, R[2], 0)), {
    color: C.msg, radius: 0.036, tags: ['neu'], order: 2.25, particles: 1
  });
  // Downward U-shaped under-loop: İmgesel ╰⤴ Gerçek
  flowTube(
    bezier(
      V(X.I + 0.16, R[2] - 0.38, 0.14),
      V(X.I + 0.34, R[2] - 1.02, 0.26),
      V(X.G - 0.38, R[2] - 1.02, 0.26),
      V(X.G - 0.22, R[2] - 0.38, 0.14)
    ),
    { color: C.code, radius: 0.032, tags: ['neu'], order: 2.38, particles: 1 }
  );
  // Horizontal arrow: Gerçek → Simgesel
  flowTube(line(V(X.G + 0.46, R[2], 0), V(X.S - 0.46, R[2], 0)), {
    color: C.msg, radius: 0.036, tags: ['neu'], order: 2.5, particles: 1
  });
  // Upward over-loop: Simgesel ↶ Gerçek
  flowTube(
    arc(V(X.S - 0.14, R[2] + 0.36, 0.14), V(X.G + 0.30, R[2] + 0.36, 0.14), 0.52, 0.22),
    { color: C.code, radius: 0.032, tags: ['neu'], order: 2.58, particles: 1 }
  );

  // --- Vertical Upward Metonymic Coding Vectors (Bottom → Top) ---
  // Column 1 (İmgesel): Row 2 ↑ Row 1, and Row 1 ↑ Row 0 level
  flowTube(line(V(X.I, R[2] + 0.46, 0), V(X.I, R[1] - 0.46, 0)), {
    color: C.code, radius: 0.036, tags: ['neu', 'per'], order: 2.75, particles: 1
  });
  flowTube(line(V(X.I, R[1] + 0.46, 0), V(X.I, R[0] - 0.06, 0)), {
    color: C.code, radius: 0.036, tags: [], order: 2.85, particles: 1
  });
  // Column 2 (Gerçek): Row 2 ↑ Row 1 ↑ Row 0 ↑ (Kod)
  flowTube(line(V(X.G, R[2] + 0.46, 0), V(X.G, R[1] - 0.46, 0)), {
    color: C.code, radius: 0.038, tags: ['neu', 'per'], order: 2.78, particles: 1
  });
  flowTube(line(V(X.G, R[1] + 0.46, 0), V(X.G, R[0] - 0.46, 0)), {
    color: C.code, radius: 0.038, tags: [], order: 2.88, particles: 1
  });
  flowTube(line(V(X.G, R[0] + 0.45, 0), V(X.G, 2.44, 0)), {
    color: C.code, radius: 0.038, tags: [], order: 2.98, particles: 1
  });
  // Column 3 (Simgesel): rises upward from top-right of Simgesel (to the right of the Row 2 over-loop)
  flowTube(line(V(X.S + 0.18, R[2] + 0.46, 0), V(X.S + 0.18, R[1] - 0.36, 0)), {
    color: C.code, radius: 0.035, tags: ['neu'], order: 2.82, particles: 1
  });

  /* 7. S1 Vertical Upward Axis + Jump Arcs into Ruhsal Yapılar */
  flowTube(line(V(X.A, -3.05, 0.15), V(X.A, 2.58, 0.15)), {
    color: C.code, radius: 0.06, speed: 0.52, order: 3.3, particles: 4, glow: 1.05
  });

  const structColors = [
    new THREE.Color('#B84A2E'),   // Psikotik
    new THREE.Color('#6B4C9A'),   // Pervert
    new THREE.Color('#2E5E8E')    // Nevrotik
  ];
  const structKeys = ['psy', 'per', 'neu'];

  R.forEach((y, i) => {
    const tags = [ROWTAG[i]];
    // Tight curved jump arrow hopping directly OVER the S1 vertical shaft (left of S1 → right of S1)
    flowTube(
      arc(V(X.A - 0.42, y - 0.02, 0.24), V(X.A + 0.44, y - 0.02, 0.24), 0.46, 0.22),
      { color: C.code, radius: 0.036, tags, order: 3.6 + i * 0.06, particles: 2 }
    );

    structureNode(X.Y, y, structKeys[i], ROWTAG[i], structColors[i]);

    // Horizontal output arrow: Psychic Structure → Süjenin Dil Alanı ve Konuşma İşlevi
    flowTube(line(V(X.Y + 0.82, y, 0), V(X.Rb - 1.32, y, 0)), {
      color: C.msg, radius: 0.042, tags, order: 4.3 + i * 0.06, particles: 2
    });
  });

  // Vertical upward arrows connecting Nevrotik ↑ Pervert ↑ Psikotik (no arrow above Psikotik)
  flowTube(line(V(X.Y, R[2] + 0.32, 0), V(X.Y, R[1] - 0.32, 0)), {
    color: C.code, radius: 0.036, tags: ['neu', 'per'], order: 3.95, particles: 1
  });
  flowTube(line(V(X.Y, R[1] + 0.32, 0), V(X.Y, R[0] - 0.32, 0)), {
    color: C.code, radius: 0.036, tags: ['per', 'psy'], order: 4.05, particles: 1
  });

  /* 8. Inner S1 ↔ S2 Loops (Top: S1 → S2 right-to-left; Bottom: S2 → S1 left-to-right arching upward) */
  flowTube(arc(V(X.A - 0.05, 3.05, -0.25), V(X.M + 0.05, 3.02, -0.25), 1.35, -0.35), {
    color: C.loop, radius: 0.072, tags: ['psy', 'per', 'neu'], order: 4.6, speed: 0.38, particles: 3, glow: 1.18, arrowScale: 1.18
  });
  flowTube(arc(V(X.M + 0.18, -3.38, -0.25), V(X.A - 0.12, -3.38, -0.25), 0.58, -0.25), {
    color: C.loop, radius: 0.072, tags: ['psy', 'per', 'neu'], order: 4.65, speed: 0.38, particles: 3, glow: 1.18, arrowScale: 1.18
  });
  // Curved connector from bottom S1 up into the bottom of Nevrotik (exact Figure 5 bottom-right curve)
  flowTube(
    bezier(
      V(X.A + 0.16, -3.02, 0),
      V(X.A + 0.78, -3.28, 0.15),
      V(X.Y + 0.05, -2.55, 0.15),
      V(X.Y, R[2] - 0.34, 0)
    ),
    { color: C.code, radius: 0.038, tags: ['neu'], order: 4.7, particles: 1 }
  );

  label('S2', V(X.M - 0.42, 3.68, -0.2), 'p3d-sym');
  label('S1', V(X.A + 0.48, 3.68, -0.2), 'p3d-sym p3d-sym-gold');
  label('S2', V(X.M - 0.12, -3.65, -0.2), 'p3d-sym');
  label('S1', V(X.A + 0.12, -3.65, -0.2), 'p3d-sym p3d-sym-gold');

  /* 9. Giant Outer Loops (Top: Dil Alanı → Gösteren; Bottom: Gösteren → Dil Alanı) */
  flowTube(arc(V(X.Rb, 3.25, -0.65), V(X.L + 0.1, 3.25, -0.65), 2.75, -0.7), {
    color: C.loop, radius: 0.088, order: 5.0, speed: 0.28, particles: 6, glow: 1.12, arrowScale: 1.15
  });
  flowTube(arc(V(X.L + 0.1, -3.35, -0.65), V(X.Rb, -3.35, -0.65), -2.45, -0.7), {
    color: C.loop, radius: 0.088, order: 5.05, speed: 0.28, particles: 6, glow: 1.12, arrowScale: 1.15
  });

  /* ------------------------------------------------------------ moving 3D arrowheads (instead of light orbs) */
  const sharedArrowGeo = new THREE.ConeGeometry(1, 1, 16);
  const particleState = [];
  flows.forEach(f => {
    const r = (f.radius || 0.045) * 2.55 * (f.arrowScale || 1);
    const h = (f.radius || 0.045) * 6.2 * (f.arrowScale || 1);
    for (let k = 0; k < f.count; k++) {
      const aMat = new THREE.MeshBasicMaterial({
        color: f.color.clone(),
        transparent: true,
        opacity: 0.92,
        toneMapped: false
      });
      const aMesh = new THREE.Mesh(sharedArrowGeo, aMat);
      aMesh.scale.set(r, h, r);
      aMesh.renderOrder = 4;
      world.add(aMesh);
      particleState.push({
        f,
        u: (k / f.count + Math.random() * 0.06) % 1,
        mesh: aMesh,
        mat: aMat,
        r,
        h
      });
    }
  });

  /* atmosphere: 3D spatial grid floor for immediate depth perception */
  const floorGrid = new THREE.GridHelper(28, 28, '#8B9DC7', '#D6DFEE');
  floorGrid.position.set(0, -4.15, 0);
  if (Array.isArray(floorGrid.material)) {
    floorGrid.material.forEach(m => { m.transparent = true; m.opacity = 0.45; });
  } else {
    floorGrid.material.transparent = true;
    floorGrid.material.opacity = 0.45;
  }
  world.add(floorGrid);

  /* ------------------------------------------------------------ UI overlay */
  const ui = document.createElement('div');
  ui.className = 'p3d-ui';
  ui.innerHTML = `
    <div class="p3d-legend">
      <span><i class="p3d-swatch p3d-swatch-msg"></i><b data-k="legendMsg"></b></span>
      <span><i class="p3d-swatch p3d-swatch-code"></i><b data-k="legendCode"></b></span>
    </div>
    <div class="p3d-controls" role="toolbar">
      <div class="p3d-chips" role="group">
        <button type="button" class="p3d-chip is-active" data-filter="all" data-k="all"></button>
        <button type="button" class="p3d-chip" data-filter="psy" data-k="psy"></button>
        <button type="button" class="p3d-chip" data-filter="per" data-k="per"></button>
        <button type="button" class="p3d-chip" data-filter="neu" data-k="neu"></button>
      </div>
      <button type="button" class="p3d-view" data-view></button>
    </div>
    <p class="p3d-hint" data-k="hint"></p>`;
  host.appendChild(ui);
  const viewBtn = ui.querySelector('[data-view]');

  let flat = false;
  function applyText() {
    host.querySelectorAll('.p3d-text').forEach(el => {
      el.textContent = t(el.dataset.key);
    });
    ui.querySelectorAll('[data-k]').forEach(el => {
      el.textContent = t(el.dataset.k);
    });
    viewBtn.textContent = flat ? t('view3d') : t('viewFlat');
    host.setAttribute('aria-label', t('aria'));
  }
  host.setAttribute('role', 'img');
  applyText();
  new MutationObserver(applyText).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['lang']
  });

  /* ------------------------------------------------------------ filter */
  const dimTargets = dimmables.map(() => 1);
  const dimValues = dimmables.map(() => 1);
  function setFilter(f) {
    dimmables.forEach((d, i) => {
      if (f === 'all') dimTargets[i] = 1;
      else if (d.tags.includes(f)) dimTargets[i] = 1;
      else if (d.tags.includes('all')) dimTargets[i] = 0.45;
      else dimTargets[i] = 0.08;
    });
    ui.querySelectorAll('.p3d-chip').forEach(b => b.classList.toggle('is-active', b.dataset.filter === f));
  }
  ui.querySelectorAll('.p3d-chip').forEach(b =>
    b.addEventListener('click', () => setFilter(b.dataset.filter))
  );
  host.querySelectorAll('.p3d-structure').forEach(el => {
    el.addEventListener('mouseenter', () => setFilter(el.dataset.filter));
    el.addEventListener('mouseleave', () => setFilter('all'));
    el.addEventListener('click', () => setFilter(el.dataset.filter));
  });

  /* ------------------------------------------------------------ camera rig */
  const target = new THREE.Vector3(0, -0.05, 0);
  const VIEW_3D = { az: -0.44, pol: Math.PI / 2 - 0.25 };
  const VIEW_FLAT = { az: 0, pol: Math.PI / 2 };
  let fitDistance = 30;
  let tween = null;
  let lastInteract = -1e9;
  controls.target.copy(target);

  function placeCamera(az, pol, dist = fitDistance) {
    const s = new THREE.Spherical(dist, pol, az);
    camera.position.copy(target).add(new THREE.Vector3().setFromSpherical(s));
    camera.lookAt(target);
  }
  function currentSpherical() {
    return new THREE.Spherical().setFromVector3(camera.position.clone().sub(target));
  }
  function goTo(view, dur = 1.5) {
    const s = currentSpherical();
    tween = {
      from: { az: s.theta, pol: s.phi, d: s.radius },
      to: { ...view, d: fitDistance },
      t0: performance.now(),
      dur: dur * 1000
    };
  }
  viewBtn.addEventListener('click', () => {
    flat = !flat;
    goTo(flat ? VIEW_FLAT : VIEW_3D);
    applyText();
  });
  labelRenderer.domElement.addEventListener('dblclick', () => {
    flat = false;
    goTo(VIEW_3D);
    applyText();
    setFilter('all');
  });
  controls.addEventListener('start', () => {
    tween = null;
    lastInteract = performance.now();
  });
  controls.addEventListener('end', () => {
    lastInteract = performance.now();
  });

  /* ------------------------------------------------------------ sizing */
  function resize() {
    const w = host.clientWidth;
    const h = host.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    labelRenderer.setSize(w, h);
    composer.setSize(w, h);
    bloom.resolution.set(Math.round(w * dpr * 0.75), Math.round(h * dpr * 0.75));
    camera.aspect = w / h;
    const vfov = THREE.MathUtils.degToRad(camera.fov);
    const isCompact = w < 640;
    const needW = isCompact ? 22.8 : 21.6;
    const needH = isCompact ? 13.6 : 13.0;
    const distW = (needW / 2) / (Math.tan(vfov / 2) * camera.aspect);
    const distH = (needH / 2) / Math.tan(vfov / 2);
    fitDistance = Math.max(distW, distH) + (isCompact ? 1.45 : 0.85);
    camera.updateProjectionMatrix();
    const s = currentSpherical();
    if (camera.position.lengthSq() > 0) placeCamera(s.theta, s.phi, fitDistance);
    const labelScale = isCompact
      ? THREE.MathUtils.clamp(w / 1180, 0.28, 0.48)
      : THREE.MathUtils.clamp(w / 1120, 0.52, 1.15);
    host.style.setProperty('--p3d-scale', String(labelScale));
  }
  const ro = new ResizeObserver(resize);
  if (frame) ro.observe(frame);
  if (host) ro.observe(host);

  /* ------------------------------------------------------------ intro + loop */
  // (is-3d class is controlled by setupModeSwitcher)
  resize();
  placeCamera(-0.74, VIEW_3D.pol - 0.24, fitDistance * 1.24);
  controls.update();

  let introStart = null;
  let running = false;
  let inView = false;
  const clock = new THREE.Clock();
  const easeOut = x => 1 - Math.pow(1 - x, 3);
  const easeInOut = x => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

  function startIntro(forceRestart = false) {
    if (introStart !== null && !forceRestart) return;
    introStart = performance.now();
    if (reduceMotion.matches) {
      tubeMaterials.forEach(m => {
        m.uniforms.uProgress.value = 1;
        if (m.userData.cone) m.userData.cone.scale.setScalar(1);
      });
      nodes.forEach(n => n.g.scale.setScalar(1));
      placeCamera(VIEW_3D.az, VIEW_3D.pol);
      return;
    }
    placeCamera(-0.74, VIEW_3D.pol - 0.24, fitDistance * 1.24);
    const s = currentSpherical();
    tween = {
      from: { az: s.theta, pol: s.phi, d: s.radius },
      to: { ...(flat ? VIEW_FLAT : VIEW_3D), d: fitDistance },
      t0: introStart,
      dur: 1900
    };
  }

  window.Psyche3D = {
    set3DMode(active, fromUser = false) {
      if (active) {
        requestAnimationFrame(() => {
          resize();
          inView = true;
          if (fromUser || introStart === null) {
            startIntro(true);
          }
          sync();
          setTimeout(resize, 60);
          setTimeout(resize, 200);
        });
      } else {
        running = false;
      }
    }
  };

  const tmp = new THREE.Vector3();
  const tmpTan = new THREE.Vector3();
  const upAxis = new THREE.Vector3(0, 1, 0);
  function frameTick() {
    if (!running) return;
    requestAnimationFrame(frameTick);
    const dt = Math.min(clock.getDelta(), 0.05);
    const time = clock.elapsedTime;
    const now = performance.now();
    const motion = !reduceMotion.matches;

    if (introStart !== null) {
      const it = (now - introStart) / 1000;
      tubeMaterials.forEach(m => {
        const local = THREE.MathUtils.clamp((it - m.userData.order * 0.28) / 0.85, 0, 1);
        m.uniforms.uProgress.value = motion ? easeOut(local) : 1;
        if (m.userData.cone) {
          const c = m.userData.cone;
          c.scale.setScalar(local > 0.94 ? easeOut((local - 0.94) / 0.06) : 0.001);
          if (motion && local >= 1 && c.userData.basePos && c.userData.tan) {
            const shift = Math.sin(time * 3.8 + m.userData.order) * (c.userData.coneH * 0.14);
            c.position.copy(c.userData.basePos).addScaledVector(c.userData.tan, shift);
          }
        }
      });
      nodes.forEach(n => {
        const order = (n.x + 10) / 4.4;
        const local = THREE.MathUtils.clamp((it - order * 0.28 - 0.25) / 0.65, 0, 1);
        const pulse = motion ? 1 + Math.sin(time * 1.7 + n.phase) * 0.035 : 1;
        n.g.scale.setScalar(Math.max(0.001, (motion ? easeOut(local) : 1) * pulse));
      });
    }

    tubeMaterials.forEach(m => {
      m.uniforms.uTime.value = motion ? time : 0;
    });

    dimmables.forEach((d, i) => {
      dimValues[i] += (dimTargets[i] - dimValues[i]) * Math.min(1, dt * 6);
      d.setDim(dimValues[i]);
    });

    particleState.forEach(p => {
      if (motion) p.u = (p.u + dt * p.f.speed * (3.6 / Math.max(1.5, p.f.length))) % 1;
      const prog = p.f.mat.uniforms.uProgress.value;
      const dim = p.f.mat.uniforms.uDim.value;
      const uClamped = Math.min(Math.max(p.u, 0.02), 0.96);
      const vis = p.u <= prog ? dim * Math.sin(p.u * Math.PI) : 0;
      p.f.curve.getPointAt(uClamped, tmp);
      p.f.curve.getTangentAt(uClamped, tmpTan).normalize();
      p.mesh.position.copy(tmp);
      p.mesh.quaternion.setFromUnitVectors(upAxis, tmpTan);
      const s = vis > 0.02 ? (0.78 + 0.22 * Math.sin(p.u * Math.PI)) : 0.0001;
      p.mesh.scale.set(p.r * s, p.h * s, p.r * s);
      p.mat.opacity = Math.min(0.95, vis * 1.05);
    });

    if (tween) {
      const k = THREE.MathUtils.clamp((now - tween.t0) / tween.dur, 0, 1);
      const e = easeInOut(k);
      placeCamera(
        THREE.MathUtils.lerp(tween.from.az, tween.to.az, e),
        THREE.MathUtils.lerp(tween.from.pol, tween.to.pol, e),
        THREE.MathUtils.lerp(tween.from.d, tween.to.d, e)
      );
      if (k >= 1) {
        tween = null;
        lastInteract = now;
      }
    } else if (motion && !flat && now - lastInteract > 800) {
      const s = currentSpherical();
      const idle = (now - lastInteract - 800) / 1000;
      const ramp = Math.min(1, idle / 2.2);
      const az = VIEW_3D.az + Math.sin(idle * 0.35) * 0.32;
      const pol = VIEW_3D.pol + Math.sin(idle * 0.22) * 0.08;
      placeCamera(
        s.theta + (az - s.theta) * 0.032 * ramp,
        s.phi + (pol - s.phi) * 0.032 * ramp,
        fitDistance
      );
    }
    controls.update();

    if (motion) {
      world.position.y = Math.sin(time * 0.5) * 0.04;
    }
    composer.render();
    labelRenderer.render(scene, camera);
  }

  function sync() {
    const should = inView && !document.hidden;
    if (should && !running) {
      running = true;
      clock.getDelta();
      startIntro();
      requestAnimationFrame(frameTick);
    } else if (!should) {
      running = false;
    }
  }
  new IntersectionObserver(
    es => {
      inView = es.some(e => e.isIntersecting);
      sync();
    },
    { threshold: 0.08 }
  ).observe(frame || host);
  document.addEventListener('visibilitychange', sync);
  renderer.domElement.addEventListener('webglcontextlost', e => {
    e.preventDefault();
    frame.classList.remove('is-3d');
    running = false;
  });
}

/* ------------------------------------------------------------ Three-view diagram switcher (published image, 2D, 3D) */
function setupModeSwitcher() {
  const switchers = document.querySelectorAll('.psyche-mode-switcher');
  if (!switchers.length) return;

  function setMode(mode, fromUser = false) {
    const isImage = mode === 'image';
    const is3D = mode === '3d';
    switchers.forEach(sw => {
      sw.querySelectorAll('.psyche-mode-btn').forEach(btn => {
        const active = btn.dataset.mode === mode;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    });

    if (is3D) {
      frame?.classList.add('is-3d');
      frame?.classList.remove('is-image');
      if (window.Psyche3D) {
        window.Psyche3D.set3DMode(true, fromUser);
      }
    } else {
      frame?.classList.remove('is-3d');
      frame?.classList.toggle('is-image', isImage);
      if (window.Psyche3D) {
        window.Psyche3D.set3DMode(false, fromUser);
      }
    }
  }

  switchers.forEach(sw => {
    sw.addEventListener('click', e => {
      const btn = e.target.closest('.psyche-mode-btn');
      if (!btn) return;
      const mode = btn.dataset.mode;
      setMode(mode, true);
    });
  });

  const requestedMode = new URLSearchParams(window.location.search).get('view');
  setMode(requestedMode === '3d' || requestedMode === 'image' ? requestedMode : '2d');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupModeSwitcher);
} else {
  setupModeSwitcher();
}
