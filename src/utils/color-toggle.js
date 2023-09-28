AFRAME.registerComponent('color-toggle', {
  init: function () {
    let el = this.el;
    this.toggleColor = function () {
      //   el.setAttribute('position', { y: 2 });
      el.object3D.position.y += 1;
    };

    this.el.addEventListener('click', this.toggleColor);
  },
  remove: function () {
    this.el.removeEventListener('click', this.toggleColor);
  },
});
