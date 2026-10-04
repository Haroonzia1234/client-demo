(() => {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const quoteForm = document.getElementById("quoteForm");
  const formSuccess = document.getElementById("formSuccess");
  const year = document.getElementById("year");

  if (window.lucide) {
    window.lucide.createIcons();
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  menuToggle?.addEventListener("click", () => {
    const open = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  siteNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  quoteForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!quoteForm.reportValidity()) return;

    const form = new FormData(quoteForm);
    const name = String(form.get("name") || "there").trim();
    const delivery = String(form.get("delivery") || "delivery").trim();
    const from = String(form.get("from") || "").trim();
    const to = String(form.get("to") || "").trim();

    formSuccess.textContent = `Thanks, ${name}. Your ${delivery.toLowerCase()} enquiry from ${from} to ${to} is ready to send. In the production site this form would connect directly to HFU's CRM/email workflow.`;
    formSuccess.classList.add("show");

    formSuccess.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  const header = document.querySelector(".site-header");
  let lastY = 0;

  window.addEventListener("scroll", () => {
    const currentY = window.scrollY;
    if (!header) return;

    header.style.boxShadow = currentY > 12
      ? "0 10px 30px rgba(7,27,47,.08)"
      : "none";

    lastY = currentY;
  }, { passive: true });
})();