module.exports = async () => {
  if (typeof IntersectionObserver === "undefined") {
    await import("intersection-observer");
  }

  if (typeof Map === "undefined") {
    await import("core-js/es6/map");
  }

  if (typeof Set === "undefined") {
    await import("core-js/es6/set");
  }

  if (typeof window.requestAnimationFrame === "undefined") {
    await import("raf/polyfill");
  }
};
