// Wait until the contact section approaches the viewport before loading Instagram.
const instagramPreview = document.querySelector(".contact-instagram-preview");
if (instagramPreview && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    observer.disconnect();
    const embed = document.createElement("blockquote");
    embed.className = "instagram-media";
    embed.dataset.instgrmPermalink = "https://www.instagram.com/mazzipl/";
    embed.dataset.instgrmVersion = "14";
    instagramPreview.append(embed);
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.head.append(script);
  }, { rootMargin: "400px" });
  observer.observe(instagramPreview);
}
