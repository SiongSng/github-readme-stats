const { encodeHTML } = require("./common/utils");

const statCardLocales = ({ name, apostrophe }) => {
  return {
    "statcard.title": {
      cn: `${encodeHTML(name)} 的 GitHub 统计`,
      cs: `GitHub statistiky uživatele ${encodeHTML(name)}`,
      de: `${encodeHTML(name) + apostrophe} GitHub-Statistiken`,
      en: `${encodeHTML(name)}'${apostrophe} GitHub Stats`,
      es: `Estadísticas de GitHub de ${encodeHTML(name)}`,
      fr: `Statistiques GitHub de ${encodeHTML(name)}`,
      hu: `${encodeHTML(name)} GitHub statisztika`,
      it: `Statistiche GitHub di ${encodeHTML(name)}`,
      ja: `${encodeHTML(name)}の GitHub 統計`,
      kr: `${encodeHTML(name)}의 GitHub 통계`,
      nl: `${encodeHTML(name)}'${apostrophe} GitHub Statistieken`,
      "pt-pt": `Estatísticas do GitHub de ${encodeHTML(name)}`,
      "pt-br": `Estatísticas do GitHub de ${encodeHTML(name)}`,
      np: `${encodeHTML(name)}'${apostrophe} गिटहब तथ्याङ्क`,
      el: `Στατιστικά GitHub του ${encodeHTML(name)}`,
      ru: `Статистика GitHub пользователя ${encodeHTML(name)}`,
      "uk-ua": `Статистика GitHub користувача ${encodeHTML(name)}`,
      id: `Statistik GitHub ${encodeHTML(name)}`,
      my: `Statistik GitHub ${encodeHTML(name)}`,
      sk: `GitHub štatistiky používateľa ${encodeHTML(name)}`,
    },
    "statcard.totalstars": {
      cn: "总 Star",
      cs: "Celkem hvězd",
      de: "Sterne Insgesamt",
      en: "Total Stars",
      es: "Estrellas totales",
      fr: "Total d'étoiles",
      hu: "Csillagok",
      it: "Stelle totali",
      ja: "スターされた数",
      kr: "받은 스타 수",
      nl: "Totale Sterren",
      "pt-pt": "Total de estrelas",
      "pt-br": "Total de estrelas",
      np: "कुल ताराहरू",
      el: "Σύνολο Αστεριών",
      ru: "Всего звезд",
      "uk-ua": "Всього зірок",
      id: "Total Bintang",
      my: "Jumlah Bintang",
      sk: "Hviezdy",
    },
    "statcard.commits": {
      cn: "总提交",
      cs: "Celkem commitů",
      de: "Anzahl Commits",
      en: "Total Commits",
      es: "Compromisos totales",
      fr: "Total des engagements",
      hu: "Összes commit",
      it: "Commit totali",
      ja: "合計コミット数",
      kr: "전체 커밋 수",
      nl: "Totale Commits",
      "pt-pt": "Total de Commits",
      "pt-br": "Total de Commits",
      np: "कुल Commits",
      el: "Σύνολο Commits",
      ru: "Всего коммитов",
      "uk-ua": "Всього коммітов",
      id: "Total Komitmen",
      my: "Jumlah Komitmen",
      sk: "Všetky commity",
    },
    "statcard.prs": {
      cn: "总 PR",
      cs: "Celkem PRs",
      de: "PRs Insgesamt",
      en: "Total PRs",
      es: "RP totales",
      fr: "Total des PR",
      hu: "Összes PR",
      it: "PR totali",
      ja: "合計 PR",
      kr: "PR 횟수",
      nl: "Totale PR's",
      "pt-pt": "Total de PRs",
      "pt-br": "Total de PRs",
      np: "कुल PRs",
      el: "Σύνολο PRs",
      ru: "Всего pull request`ов",
      "uk-ua": "Всього pull request`iв",
      id: "Total Permintaan Tarik",
      my: "Jumlah PR",
      sk: "Všetky PR",
    },
    "statcard.issues": {
      cn: "总 Issue",
      cs: "Celkem problémů",
      de: "Anzahl Issues",
      en: "Total Issues",
      es: "Problemas totales",
      fr: "Nombre total de problèmes",
      hu: "Összes hibajegy",
      it: "Segnalazioni totali",
      ja: "合計 issue",
      kr: "이슈 개수",
      nl: "Totale Issues",
      "pt-pt": "Total de Issues",
      "pt-br": "Total de Issues",
      np: "कुल मुद्दाहरू",
      el: "Σύνολο Ζητημάτων",
      ru: "Всего issue",
      "uk-ua": "Всього issue",
      id: "Total Masalah Dilaporkan",
      my: "Jumlah Isu Dilaporkan",
      sk: "Všetky problémy"
    },
    "statcard.contribs": {
      cn: "总贡献",
      cs: "Přispěl k",
      de: "Beigetragen zu",
      en: "Contributed to",
      es: "Contribuido a",
      fr: "Contribué à",
      hu: "Hozzájárulások",
      it: "Ha contribuito a",
      ja: "コントリビュートしたリポジトリ",
      kr: "전체 기여도",
      nl: "Bijgedragen aan",
      "pt-pt": "Contribuiu em",
      "pt-br": "Contribuiu para",
      np: "कुल योगदानहरू",
      el: "Συνεισφέρθηκε σε",
      ru: "Внёс вклад в",
      "uk-ua": "Вніс внесок у",
      id: "Berkontribusi ke",
      my: "Menyumbang kepada",
      sk: "Účasti",
    },
  };
};

const repoCardLocales = {
  "repocard.template": {
    cn: "模板",
    cs: "Šablona",
    de: "Vorlage",
    en: "Template",
    es: "Modelo",
    fr: "Modèle",
    hu: "Sablon",
    it: "Template",
    ja: "テンプレート",
    kr: "템플릿",
    nl: "Sjabloon",
    "pt-pt": "Modelo",
    "pt-br": "Modelo",
    np: "टेम्पलेट",
    el: "Πρότυπο",
    ru: "Шаблон",
    "uk-ua": "Шаблон",
    id: "Pola",
    my: "Templat",
    sk: "Šablóna",
  },
  "repocard.archived": {
    cn: "已归档",
    cs: "Archivováno",
    de: "Archiviert",
    en: "Archived",
    es: "Archivé",
    fr: "Archivé",
    hu: "Archivált",
    it: "Archiviata",
    ja: "アーカイブ済み",
    kr: "보관됨",
    nl: "Gearchiveerd",
    "pt-pt": "Arquivados",
    "pt-br": "Arquivados",
    np: "अभिलेख राखियो",
    el: "Αρχειοθετημένα",
    ru: "Архивирован",
    "uk-ua": "Архивирован",
    id: "Arsip",
    my: "Arkib",
    sk: "Archivované",
  },
};

const langCardLocales = {
  "langcard.title": {
    cn: "最常用的语言",
    cs: "Nejpoužívanější jazyky",
    de: "Meist verwendete Sprachen",
    en: "Most Used Languages",
    es: "Idiomas más usados",
    fr: "Langues les plus utilisées",
    hu: "Leggyakrabban használt nyelvek",
    it: "Linguaggi più utilizzati",
    ja: "最もよく使っている言語",
    kr: "가장 많이 사용된 언어",
    nl: "Meest gebruikte talen",
    "pt-pt": "Idiomas mais usados",
    "pt-br": "Linguagens mais usadas",
    np: "अधिक प्रयोग गरिएको भाषाहरू",
    el: "Οι περισσότερο χρησιμοποιούμενες γλώσσες",
    ru: "Наиболее часто используемые языки",
    "uk-ua": "Найбільш часто використовувані мови",
    id: "Bahasa Yang Paling Banyak Digunakan",
    my: "Bahasa Paling Digunakan",
    sk: "Najviac používané jazyky",
  },
};

const wakatimeCardLocales = {
  "wakatimecard.title": {
    cn: "Wakatime 周统计",
    cs: "Statistiky týdne Wakatime",
    de: "Wakatime Wochen Status",
    en: "Wakatime Week Stats",
    es: "Estadísticas de la semana de Wakatime",
    fr: "Statistiques de la semaine Wakatime",
    hu: "Wakatime heti statisztika",
    it: "Statistiche della settimana di Wakatime",
    ja: "Wakatime ウィーク統計",
    kr: "Wakatime 주간 통계",
    nl: "Wekelijkse Wakatime Status",
    "pt-pt": "Estatísticas semanais Wakatime",
    "pt-br": "Estatísticas da semana Wakatime",
    np: "Wakatime हप्ता तथ्याङ्क",
    el: "Εβδομαδιαία Στατιστικά από Wakatime",
    ru: "Статистика недели Wakatime",
    "uk-ua": "Статистика тижні Wakatime",
    id: "Status Mingguan Wakatime",
    my: "Statistik Minggu Wakatime",
    sk: "Týždenná Wakatime štatistika",
  },
  "wakatimecard.nocodingactivity": {
    cn: "本周没有编程活动",
    cs: "Tento týden žádná aktivita v kódování",
    de: "Keine Aktivitäten in dieser Woche",
    en: "No coding activity this week",
    es: "No hay actividad de codificación esta semana",
    fr: "Aucune activité de codage cette semaine",
    hu: "Nem volt aktivitás ezen a héten",
    it: "Nessuna attività in questa settimana",
    ja: "今週のコーディング活動はありません",
    kr: "이번 주 작업내역 없음",
    nl: "Geen coderings activiet deze week",
    "pt-pt": "Sem atividade esta semana",
    "pt-br": "Nenhuma atividade de codificação esta semana",
    np: "यस हप्ता कुनै कोडिंग गतिविधि छैन",
    el: "Δεν υπάρχει δραστηριότητα κώδικα γι' αυτή την εβδομάδα",
    ru: "На этой неделе не было акивности",
    "uk-ua": "На цьому тижні не було активності",
    id: "Tidak ada aktivitas perkodingan minggu ini",
    my: "Tiada aktiviti pengekodan minggu ini",
    sk: "Žiadna kódovacia aktivita tento týždeň",
  },
};

const availableLocales = Object.keys(repoCardLocales["repocard.archived"]);

function isLocaleAvailable(locale) {
  return availableLocales.includes(locale.toLowerCase());
}

module.exports = {
  isLocaleAvailable,
  availableLocales,
  statCardLocales,
  repoCardLocales,
  langCardLocales,
  wakatimeCardLocales,
};
