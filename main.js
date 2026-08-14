(function () {
  "use strict";

  var video = document.querySelector(".bg-video");
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* Some browsers refuse the initial autoplay and only allow playback after a
     user gesture or once the tab is visible. Retry rather than sit on the
     poster frame. */
  function play() {
    if (!video || reduced.matches) return;
    var attempt = video.play();
    if (attempt && typeof attempt.catch === "function") {
      attempt.catch(function () {});
    }
  }

  if (video) {
    play();
    video.addEventListener("canplay", play);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) play();
    });
    ["pointerdown", "keydown", "touchstart"].forEach(function (evt) {
      document.addEventListener(evt, play, { once: true, passive: true });
    });
  }

  if (reduced.matches && video) {
    video.pause();
  }

  /* Mobile browsers report 100vh as the height without the collapsing URL bar,
     which pushes the footer line off screen. dvh covers modern browsers; this
     keeps older ones from clipping. */
  function setViewportHeight() {
    var page = document.querySelector(".page");
    if (!page) return;
    if (CSS && CSS.supports && CSS.supports("height", "100dvh")) return;
    page.style.height = window.innerHeight + "px";
    document.body.style.height = window.innerHeight + "px";
  }

  setViewportHeight();
  window.addEventListener("resize", setViewportHeight);
  window.addEventListener("orientationchange", setViewportHeight);
})();
