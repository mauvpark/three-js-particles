# THREE-JS-Particles

## 1. USED METHODS

### Debug
**`dat.GUI()`**: THREE JS로 구현된 화면에서 사용자 설정을 사용할 수 있게 함.
**`foo.addFolder()`**: 설정의 상위 Tree 이름을 지정할 수 있는 method.
**`foo.add().min().max().step()`**: 설정창에 넣고자 하는 기능을 구현하고 min, max, step 값을 지정해 세부 조정을 할 수 있음.
**`foo.addColor().onChange(() => {...})`**: Client 쪽에서 Color를 자유롭게 변경할 수 있도록 함.

### Scene
**`THREE.Scene()`**: 화면을 구성하는 객체를 return.

### Object

**`THREE.TorusGeometry()`**: 환 형태의 도형을 만듦.
> **BufferGeometry**: 효율적인 방식으로 도형을 구형하며 GPU에게 부담이 덜 가는 형태로 구성되어 있다. 따라서 대형 프로젝트나 중요한 프로젝트를 다룰 때에 고려해 볼 수 있는 선택지다. 그러나 ***NOT-USER-FRIENDLY***하므로 직관적이지 못할 수 있다.<br/>**Geometry**: **Geometry**는 ***USER-FRIENDLY***하기 때문에 접근이 쉬우나 효율적이지 않아 작은 프로젝트에 적합하다.
**`bufferFoo.setAttribute()`**: **BufferGeometry**의 세부 설정을 위한 instance method. `THREE.BufferAttribute()`를 *argument*로 줄 수 있으며 세부 설정이 가능함.

### Material
**`THREE.PointsMaterial()`**: 점 형태의 텍스처를 입히는 static method.

**`THREE.Color()`**: THREE JS에서 구현되는 Mesh와 Background 등 색을 바꿔야 할 경우 사용되는 static method.

### Mesh
**`THREE.Points()`**: 도형과 점 형태의 텍스처를 결합하는 method.

### Lights
**`THREE.PointLight()`**: 특정 지점에 빛을 비추는 기능을 하며 빛을 비출 Vector 좌표를 return.

### Reactiveness
**`window.addEventListener("resize, () => {...}")`**: 화면의 크기가 바뀔 때마다 **Camera**와 **Renderer**을 update하여 responsiveness를 유지하게 함.

### Camera
**`THREE.PerspectiveCamera()`**: 3D 환경에서 일반적으로 사용되는 **Camera**로 구현되는 3D 구현체를 바라보는 구도를 설정함.

### Renderer
**`THREE.WebGLRenderer`**: **Scene**에 저장된 Three js의 모든 구현체를 **WebGL** 기술을 통해 구현함.
**`foo.setClearColor()`**: Background color을 설정할 수 있음.

### Mouse Event
**`document.addEventListener("mousemove", () => {...})`**: Mouse가 움직일 때마다 표시되는 좌표를 return.

### Time
**`THREE.Clock()`**: 흐르는 시간 값을 return하며 `foo.getElapsedTime()`을 통해 handling이 가능함.

### Frame
**`window.requestAnimationFrame()`**: 새로운 Frame을 불러와 다음 화면이 연속적으로 보여줄 수 있도록 함.
 
## 2. Setup
``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

## 3. Reference
[Design course](https://youtu.be/dLYMzNmILQA)
