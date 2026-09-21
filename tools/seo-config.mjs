// Only publish languages for which the source page has substantive content.
export const pages = {
  'index.html': { langs: ['en', 'pl', 'ja'], pl: ['Michał Maciej Mazur | Edukacja międzykulturowa, Japonia i gry', 'Michał Maciej Mazur: wykładowca APU w Beppu, badacz i autor. Warsztaty dydaktyczne, edukacja międzykulturowa oraz teksty o Japonii i grach.'], ja: ['マズル ミハウ マチェイ | 異文化学習・大学教育・執筆', '立命館アジア太平洋大学（APU）のマズル ミハウ マチェイ。異文化学習、大学教育、教育開発、ゲームと日本文化に関する研究・執筆活動。'] },
  'workshops.html': { langs: ['en', 'pl', 'ja'], pl: ['Warsztaty i dydaktyka akademicka | Michał Maciej Mazur', 'Kursy i warsztaty Michała Macieja Mazura: komunikacja międzykulturowa, nauczanie po angielsku, projektowanie zajęć, AI i gry w edukacji.'], ja: ['授業・ワークショップ・教育開発 | マズル ミハウ マチェイ', '異文化コミュニケーション、英語による授業、授業設計、AI、ゲームとメディア文化を扱う授業・ワークショップ・セミナー。'] },
  'research.html': { langs: ['en', 'pl', 'ja'], pl: ['Badania nad uczeniem międzykulturowym | Michał Maciej Mazur', 'Badania i publikacje Michała Macieja Mazura: kompetencje międzykulturowe, technologie nauki języków, szkolnictwo wyższe i udział studentów w uczeniu się.'], ja: ['異文化学習と大学教育の研究 | マズル ミハウ マチェイ', '異文化間能力、言語学習技術、大学教育、学習者の参加に関する研究と論文を紹介します。'] },
  'writing.html': { langs: ['en', 'pl', 'ja'], pl: ['Teksty o Japonii, grach i kulturze mediów | Michał Maciej Mazur', 'Publicystyka Michała Macieja Mazura: PSX Extreme, reportaże z Tokyo Game Show, wywiady z twórcami gier, książki i wybrane fragmenty tekstów.'], ja: ['日本・ゲーム・メディア文化の執筆 | マズル ミハウ マチェイ', 'PSX Extremeへの寄稿、東京ゲームショウ取材、ゲーム制作者へのインタビュー、書籍と記事を紹介します。'] },
  'case-studies.html': { langs: ['en', 'pl', 'ja'], pl: ['Projekty dydaktyczne i studia przypadków | Michał Maciej Mazur', 'Cztery projekty Michała Macieja Mazura: Pre-FD, edukacja międzykulturowa, gry w dydaktyce i edukacja interdyscyplinarna.'], ja: ['教育実践のケーススタディ | マズル ミハウ マチェイ', 'Pre-FD、異文化学習、ゲームとメディアの教育、学際的なプロジェクト教育に関する4つの実践事例。'] },
  'achievements.html': { langs: ['en', 'pl', 'ja'], pl: ['Dorobek, wystąpienia i wywiady | Michał Maciej Mazur', 'Praca akademicka, zaproszone wystąpienia, projekty społeczne, wywiady i materiały dokumentujące działalność Michała Macieja Mazura.'], ja: ['研究教育活動・招待講演・インタビュー | マズル ミハウ マチェイ', '学術活動、招待講演、地域プロジェクト、インタビューなどの活動記録と関連資料。'] },
  'essay-games-culture-intercultural-learning.html': { langs: ['en', 'pl', 'ja'], pl: ['Światy bez instrukcji obsługi | Michał Maciej Mazur', 'Esej Michała Macieja Mazura o grach, życiu w Japonii, publicystyce i edukacji międzykulturowej.'], ja: ['説明書のない世界を読む | マズル ミハウ マチェイ', 'ゲーム、日本の日常、執筆、異文化教育についてのエッセイ。'] },
  'updates.html': { langs: ['en', 'pl', 'ja'], pl: ['Aktualności: dydaktyka, badania i teksty | Michał Maciej Mazur', 'Nowe materiały dydaktyczne, badania, artykuły i wystąpienia na mazur.jp, z odnośnikami do pełnych materiałów.'], ja: ['新着情報：教育・研究・執筆 | マズル ミハウ マチェイ', 'mazur.jpに追加した教育資料、研究、記事、活動記録を時系列で紹介します。'] },
  'tokyo-game-show-reporting.html': { langs: ['en', 'pl'], en: ['Tokyo Game Show: reporting and photographs | Michal Maciej Mazur', 'Tokyo Game Show reporting by Michal Maciej Mazur: press photographs, playtests and Polish excerpts from a PSX Extreme manuscript.'], pl: ['Tokyo Game Show: reportaże i fotografie | Michał Maciej Mazur', 'Materiały reporterskie Michała Macieja Mazura z Tokyo Game Show: akredytacje, fotografie, testy gier i fragmenty tekstu dla PSX Extreme.'] },
  'apu-pre-fd.html': { langs: ['en', 'pl', 'ja'], en: ['APU Pre-FD: Foundations of Teaching & Learning | Michal Maciej Mazur', 'APU Pre-FD teaching development for graduate students: class outlines, aligned activities, peer rehearsal and evidence from the Spring 2026 series.'], pl: ['APU Pre-FD: warsztaty dydaktyczne | Michał Maciej Mazur', 'Program Foundations of Teaching & Learning na APU: projektowanie zajęć, aktywności, próby i informacja zwrotna oraz dokumentacja edycji wiosennej 2026.'], ja: ['APU Pre-FD：Foundations of Teaching & Learning | マズル ミハウ マチェイ', '大学院生のためのAPU Pre-FD。授業設計、学習活動、リハーサル、フィードバックと2026年春のシリーズの記録。'] },
};

export function pagePath(file, lang = 'en') {
  const prefix = lang === 'en' ? '/' : `/${lang}/`;
  return prefix + (file === 'index.html' ? '' : file);
}

export function localHref(href, lang, source = 'index.html') {
  if (!href || /^(?:[a-z]+:|\/\/)/i.test(href)) return href;
  if (href.startsWith('#')) return href;
  const url = new URL(href, `https://mazur.jp/${source}`);
  const file = url.pathname.replace(/^\/(?:pl\/|ja\/)?/, '') || 'index.html';
  if (!pages[file]) return url.pathname + url.search + url.hash;
  const targetLang = pages[file].langs.includes(lang) ? lang : 'en';
  return pagePath(file, targetLang) + url.search + url.hash.replace(/-(en|pl|ja)$/, `-${targetLang}`);
}
