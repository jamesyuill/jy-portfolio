AFRAME.registerComponent('color-hover', {
  init: function () {
    let el = this.el;
    let defaultColor = el.getAttribute('material').color;
    this.onHoverColor = function () {
      el.setAttribute('color', '#FF69B4');
    };

    this.onLeaveColor = function () {
      el.setAttribute('color', defaultColor);
    };

    this.el.addEventListener('mouseenter', this.onHoverColor);
    this.el.addEventListener('mouseleave', this.onLeaveColor);
  },
  remove: function () {
    this.el.removeEventListener('mouseenter', this.onHoverColor);
    this.el.removeEventListener('mouseleave', this.onLeaveColor);
  },
});
