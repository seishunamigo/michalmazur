(() => {
  const copy = {
    en: {
      writing: ["Open the complete article archive", "Return to selected articles", "{count} additional articles"],
      workshops: ["Show more workshop themes", "Show primary workshop themes", "{count} additional themes"],
      records: ["Open the complete record", "Return to selected records", "{count} additional entries"],
      cases: ["Show all case studies", "Return to selected case studies", "{count} additional case study"],
      evidence: ["Show all supporting evidence", "Return to selected evidence", "{count} additional items"],
      publicRecord: ["Show the complete public record", "Return to selected records", "{count} additional entries"],
    },
    pl: {
      writing: ["Otwórz pełne archiwum tekstów", "Wróć do wybranych tekstów", "Dodatkowe teksty: {count}"],
      workshops: ["Pokaż więcej tematów warsztatowych", "Pokaż główne tematy warsztatów", "Dodatkowe tematy: {count}"],
      records: ["Otwórz pełny wykaz", "Wróć do wybranych pozycji", "Dodatkowe pozycje: {count}"],
      cases: ["Pokaż wszystkie studia przypadków", "Wróć do wybranych przykładów", "Dodatkowe studium przypadku: {count}"],
      evidence: ["Pokaż wszystkie materiały potwierdzające", "Wróć do wybranych materiałów", "Dodatkowe materiały: {count}"],
      publicRecord: ["Pokaż pełny dorobek publiczny", "Wróć do wybranych pozycji", "Dodatkowe pozycje: {count}"],
    },
    ja: {
      writing: ["記事アーカイブをすべて見る", "選んだ記事に戻る", "その他の記事：{count}件"],
      workshops: ["その他のワークショップを見る", "主なワークショップに戻る", "その他のテーマ：{count}件"],
      records: ["全記録を見る", "主な記録に戻る", "その他の記録：{count}件"],
      cases: ["すべてのケーススタディを見る", "主なケースに戻る", "その他のケース：{count}件"],
      evidence: ["すべてのエビデンスを見る", "主なエビデンスに戻る", "その他の項目：{count}件"],
      publicRecord: ["すべての活動記録を見る", "主な記録に戻る", "その他の記録：{count}件"],
    },
  };

  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const configurations = {
    "index.html": [
      [".case-grid", 3, "cases"],
      [".proof-grid", 3, "evidence"],
      [".media-section .media-grid", 3, "publicRecord"],
    ],
    "writing.html": [[".writing-portfolio .writing-list", 4, "writing"]],
    "workshops.html": [[".workshop-menu-grid", 3, "workshops"]],
    "achievements.html": [[".achievement-grid", 6, "records"]],
  };

  const languageFor = (container) => {
    const panelLanguage = container.closest("[data-lang-panel]")?.dataset.langPanel;
    if (panelLanguage && copy[panelLanguage]) return panelLanguage;
    return copy[document.documentElement.lang] ? document.documentElement.lang : "en";
  };

  const initArchive = (container, limit, type, index) => {
    if (container.dataset.progressiveArchive) return;
    const items = [...container.children].filter((item) => item instanceof HTMLElement);
    if (items.length <= limit) return;

    const archiveId = container.id || `progressive-archive-${pageName.replace(/\W/g, "-")}-${index + 1}`;
    const language = languageFor(container);
    const labels = copy[language][type] || copy[language].records;
    const additionalCount = items.length - limit;
    const hashTarget = window.location.hash ? document.getElementById(decodeURIComponent(window.location.hash.slice(1))) : null;
    const opensForHash = Boolean(hashTarget && items.slice(limit).some((item) => item === hashTarget || item.contains(hashTarget)));

    container.id = archiveId;
    container.dataset.progressiveArchive = type;
    container.classList.add("progressive-archive");

    const control = document.createElement("div");
    control.className = "progressive-archive-control";
    control.innerHTML = `
      <button type="button" aria-controls="${archiveId}" aria-expanded="false">
        <span></span>
        <small>${labels[2].replace("{count}", String(additionalCount))}</small>
        <b aria-hidden="true">+</b>
      </button>`;
    container.after(control);

    const button = control.querySelector("button");
    const buttonLabel = button.querySelector("span");
    let expanded = false;

    const render = (nextExpanded) => {
      expanded = nextExpanded;
      items.slice(limit).forEach((item) => {
        item.hidden = !expanded;
      });
      container.classList.toggle("is-progressive-collapsed", !expanded);
      control.classList.toggle("is-expanded", expanded);
      button.setAttribute("aria-expanded", String(expanded));
      buttonLabel.textContent = expanded ? labels[1] : labels[0];
    };

    button.addEventListener("click", () => render(!expanded));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        render(!expanded);
      }
    });
    window.addEventListener("hashchange", () => {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      if (target && items.slice(limit).some((item) => item === target || item.contains(target))) render(true);
    });

    render(opensForHash);
  };

  const init = () => {
    const pageConfigurations = configurations[pageName] || [];
    let archiveIndex = 0;
    pageConfigurations.forEach(([selector, limit, type]) => {
      document.querySelectorAll(selector).forEach((container) => {
        initArchive(container, limit, type, archiveIndex);
        archiveIndex += 1;
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
