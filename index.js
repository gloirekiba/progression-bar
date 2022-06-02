const progress = document.getElementById("progress");

function setProgress() {
  const { scrollHeight, clientHeight, scrollTop } = document.documentElement;
  const scrollPercentage = ((clientHeight + scrollTop) / scrollHeight) * 100;
  progress.style.width = `${scrollPercentage}%`;
}
setProgress();

window.addEventListener("scroll", setProgress);
