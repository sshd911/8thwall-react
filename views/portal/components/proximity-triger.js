const proximityTriggerComponent = {
  portalXMax: -4,
  portalXMin: 4,
  portalYMax: 10,
  portalYMin: 3,
  portalZ: 0,
  schema: {
    radius: {type: 'number', default: 1},
  },
  init() {
    this.pos = this.el.object3D.position
    const {sceneEl} = this.el
  },
  up() {
    const cameraPos = document.querySelector('#camera').getAttribute('position')
    const portalRim = document.getElementById('portalRim')
    const portalHiderRing = document.getElementById('portalHiderRing')
    portalRim.removeAttribute('animation__5')
    portalHiderRing.removeAttribute('animation__6')
    portalRim.setAttribute('animation__5', {
      property: 'scale',
      from: '0.001 0.001 0.001',
      to: '4 4 4',
      easing: 'easeOutElastic',
    })
    portalHiderRing.setAttribute('animation__6', {
      property: 'radius-inner',
      from: '0.001',
      to: '3.5',
      easing: 'easeOutElastic',
    })
  },
  down() {
    const portalRim = document.getElementById('portalRim')
    const portalHiderRing = document.getElementById('portalHiderRing')
    portalRim.removeAttribute('animation__3')
    portalHiderRing.removeAttribute('animation__4')
    portalRim.setAttribute('animation__3', {
      property: 'scale',
      from: '4 4 4',
      to: '0.001 0.001 0.001',
      easing: 'easeOutElastic',
    })
    portalHiderRing.setAttribute('animation__4', {
      property: 'radius-inner',
      from: '3.5',
      to: '0.001',
      easing: 'easeOutElastic',
    })
  },
  tick() {
    const cameraPos = document.querySelector('#camera').getAttribute('position')
    if (
      cameraPos.z < this.portalZ &&
      cameraPos.x > this.portalXMax &&
      cameraPos.x < this.portalXMin &&
      cameraPos.y < this.portalYMax &&
      cameraPos.y > this.portalYMin
    ) {
      const portalRim = document.getElementById('portalRim')
      const portalHiderRing = document.getElementById('portalHiderRing')
      portalRim.setAttribute('animation__3', {
        property: 'scale',
        from: '4 4 4',
        to: '0.001 0.001 0.001',
        easing: 'easeOutElastic',
      })
      portalHiderRing.setAttribute('animation__4', {
        property: 'radius-inner',
        from: '3.5',
        to: '0.001',
        easing: 'easeOutElastic',
      })
      this.down()
      this.el.sceneEl.addEventListener('click', this.up)
    }
  },
}

export {proximityTriggerComponent}