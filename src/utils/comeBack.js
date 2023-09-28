AFRAME.registerComponent('come-back', {
  init: function () {
    let el = this.el;
    this.comeBack = function () {
      let { y } = el.getAttribute('position');
      el.object3D.position.y -= 0.1;
    };

    this.el.addEventListener('click', this.comeBack);
  },
  remove: function () {
    this.el.removeEventListener('click', this.comeBack);
  },
});
