document.addEventListener("DOMContentLoaded", () => {
  let shareLink = document.querySelector(".preview-card__share-links");
  let shareButton = document.querySelector(".area-user__share-icon");
  if (!shareLink || !shareButton) {
    return;
  }
  shareLink.inert = true;
  shareButton.addEventListener("click", () => {
    shareLink.classList.toggle("--active");
    if (shareLink.classList.contains("--active")) {
      shareLink.inert = false;
    } else {
      shareLink.inert = true;
    }
  });
});
