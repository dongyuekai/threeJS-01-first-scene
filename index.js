import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()

{
  // 几何体 立方体
  const geometry = new THREE.BoxGeometry(100, 100, 100)
  // 材质 漫反射材质
  const material = new THREE.MeshLambertMaterial(({
    color: new THREE.Color('orange')
  }))

  // 物体
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(0, 0, 0)
  scene.add(mesh)
}
{
  // 灯光 用点光源 颜色为白色 强度为10000
  const pointLight = new THREE.PointLight(0xFFFFFF, 10000)
  pointLight.position.set(80, 80, 80)
  scene.add(pointLight)
}
{
  // 展示坐标系的工具AxesHelper 坐标轴长度为200
  const axesHelper = new THREE.AxesHelper(200)
  scene.add(axesHelper)
}
{
  const width = window.innerWidth
  const height = window.innerHeight

  // 相机 透视相机 60度视角 视椎体宽高比 最近看到1 最远看到1000
  const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000)
  camera.position.set(200, 200, 200)
  camera.lookAt(0, 0, 0)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)

  function render() {
    renderer.render(scene, camera)
    // 一帧帧循环调用render函数 渲染频率和显示器刷新率一致
    requestAnimationFrame(render)
  }
  render()

  document.body.append(renderer.domElement)


  const controls = new OrbitControls(camera, renderer.domElement)

}