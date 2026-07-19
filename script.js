const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const languageButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");
const languagePanels = document.querySelectorAll("[data-lang-panel]");
const personNameNodes = document.querySelectorAll("[data-person-name]");
const personHeadlineNodes = document.querySelectorAll("[data-person-name-headline]");
const personHomeLinks = document.querySelectorAll("[data-person-home]");
const personNames = {
  en: "Michal Maciej Mazur",
  pl: "Michal Maciej Mazur",
  ja: "マズル　ミハウ　マチェイ",
};

const translations = {
  en: {
    navWork: "Practice",
    navWorkshops: "Workshops",
    navTeaching: "Teaching",
    navWriting: "Writing",
    navBio: "Bio",
    navResearch: "Research",
    navAchievements: "Public Record",
    navContact: "Contact",
    achievementsEyebrow: "Achievements & Appearances",
    achievementsTitle: "Let me show you where this work has taken me.",
    achievementsDeck: "I have gathered the milestones, invitations, conversations, and community projects that best explain my path. This is not a complete CV. It is a guided record of the moments when my work met students, institutions, and wider audiences.",
    researchEyebrow: "Research",
    researchPageTitle: "What helps people participate when languages, cultures, and systems meet?",
    researchPageDeck:
      "My research grows from situations I have actually encountered: multilingual classrooms, language-learning systems, tourism encounters, and an interdisciplinary space programme. I study what helps people interpret difference, work together, and learn with greater agency.",
    researchChapterLabel: "Explore this research portfolio",
    researchChapterQuestion: "Research question",
    researchChapterProjects: "Projects & publications",
    researchChapterFieldwork: "Fieldwork & collaboration",
    researchChapterMethod: "Try the method",
    chapterSwipeHint: "Swipe →",
    researchMapEyebrow: "Research map",
    researchMapTitle: "One question, four research contexts.",
    researchMapDeck: "The topics change, but the underlying concern remains: how design, language, and context shape whether people can take part.",
    researchMapCoreLabel: "Shared question",
    researchMapCore: "What helps people participate across difference?",
    researchMapContextLabel: "Context",
    researchMapEvidenceLabel: "Evidence / method",
    researchMapOneTitle: "Multilingual classrooms",
    researchMapOneBody: "Interpreting difference, confidence, and belonging through classroom activity and reflection.",
    researchMapOneEvidenceTitle: "15-week classroom study",
    researchMapOneEvidenceBody: "Critical incidents, reflective tasks, and a peer-reviewed article published in 2023.",
    researchMapTwoTitle: "Language-learning systems",
    researchMapTwoBody: "Vocabulary in English and Japanese through NLP, system design, and user evaluation.",
    researchMapTwoEvidenceTitle: "NLP system design",
    researchMapTwoEvidenceBody: "Code-switching, graded readers, and user evaluation across publications from 2016–18.",
    researchMapThreeTitle: "Tourism encounters",
    researchMapThreeBody: "Resident contact, hospitality, and destination image through surveys and interviews.",
    researchMapThreeEvidenceTitle: "165 surveys + 12 interviews",
    researchMapThreeEvidenceBody: "Five activity-based contact points studied in Kashan, Iran.",
    researchMapFourTitle: "Interdisciplinary programmes",
    researchMapFourBody: "Communication, leadership, and project collaboration through facilitation and implementation.",
    researchMapFourEvidenceTitle: "Two annual cohorts",
    researchMapFourEvidenceBody: "Facilitation, observation, and a collaborative conference presentation in 2025–26.",
    researchMapCaption: "Together, the projects move between classroom evidence, system design, field encounters, and programme implementation.",
    heroKicker: "Assistant Professor in Japan · Intercultural educator · Writer as Mazzi",
    heroLede:
      "Living and working in Japan since 2009 has taught me that communication across cultures is not a slogan; it is daily work. At Ritsumeikan Asia Pacific University, I turn that experience and my research into courses, faculty workshops, and multilingual learning environments where people can participate with greater confidence.",
    japanYearsLabel: "years living and working in Japan",
    japanSinceLabel: "since 28 March 2009",
    japanDaysLabel: "days of everyday life in Japan",
    japanDaysNote: "a small chronicle of one long chapter",
    visualTeaching: "Teaching and facilitating across cultures",
    visualPublic: "A public voice shaped by games and Japan",
    visualJapan: "Japan, observed through ordinary details",
    apuBandEyebrow: "My academic home now",
    apuBandTitle: "At APU, global learning is not an abstract idea. It is the room I walk into every day.",
    apuBandBody: "Beppu is where my work in intercultural education, faculty development, and public communication now comes together.",
    videoEyebrow: "Watch & Listen",
    videoTitle: "Some parts of this story are better heard in my own voice.",
    videoDeck: "Courses, conversations, and public appearances that show how I explain ideas, hold a discussion, and connect academic work with wider audiences.",
    videoConversationLabel: "Conversation · 2024",
    videoCourseLabel: "Course portrait · Hokkaido University",
    videoInterviewLabel: "Interview · Polish Sushi",
    videoWatchLink: "Watch on YouTube",
    artifactEyebrow: "From the archive",
    artifactTitle: "A poster can sometimes say more than another paragraph.",
    artifactDeck: "These original materials are working traces of the rooms, audiences, and programmes behind the portfolio.",
    artifactOneMeta: "Dialogue session · APU · 2025",
    artifactOneTitle: "Starting Over: Leaving, Losing, and Finding Yourself Again",
    artifactTwoMeta: "Workshop series · APU · 2026",
    artifactTwoTitle: "Foundations of Teaching & Learning",
    artifactThreeMeta: "Invited workshops · University of Tokyo · 2019",
    artifactThreeTitle: "Three guest workshops in two days",
    artifactFourMeta: "Programme material · APU / Ritsumeikan · 2025",
    artifactFourTitle: "International Project Management Program",
    artifactOpen: "Open original poster",
    artifactOpenMaterial: "Open original material",
    galleryEyebrow: "Inside the room",
    galleryTitle: "This is what the work feels like when the room comes alive.",
    galleryDeck: "I am most myself when people begin thinking aloud, testing an idea, and finding language for something they could not quite name before.",
    galleryCaptionOne: "Making space for people to think together",
    galleryCaptionTwo: "Teaching in English: making space for questions",
    galleryCaptionThree: "Preparation, technology, and presence",
    galleryCaptionFour: "A classroom made of many perspectives",
    heroPrimary: "Explore workshop offer",
    heroSecondary: "View case studies",
    identityStrip:
      "For centres for teaching and learning · international programmes · graduate schools · multilingual teaching teams",
    trajectoryEyebrow: "Background",
    trajectoryTitle: "From Krakow to Hokkaido to Beppu, language has been the thread.",
    trajectoryBodyOne:
      "I began with language and literature in Krakow, came to Japan on a MEXT scholarship, and completed a PhD in information science at Hokkaido University, specialising in natural language processing. That unusual route taught me to move comfortably between humanities, technology, and education.",
    trajectoryBodyTwo:
      "Games opened one of my first routes into Japan. For nearly three decades I have written as Mazzi for Polish readers, while my university work has taken me from language-learning systems to intercultural classrooms and faculty development. Both began with the same impulse: understand how a world works, then explain it clearly without sanding away what makes it different.",
    timelineEyebrow: "A few coordinates",
    timelineTitle: "The route matters because it changed what I can help other people do.",
    timelineOneTitle: "Japan begins",
    timelineOneBody: "I arrive on a MEXT scholarship and start learning the everyday work of living between languages.",
    timelineOneLink: "See the public record ↗",
    timelineTwoTitle: "Doctoral work makes language a system",
    timelineTwoBody: "A PhD in information science at Hokkaido University leads into Co-MIX research: language-learning systems that make context, choice, and learner experience central questions.",
    timelineTwoLink: "Explore Co-MIX research ↗",
    timelineThreeTitle: "Teaching becomes the focus",
    timelineThreeBody: "Invited workshops on teaching in English and intercultural communication turn research questions into live classroom work.",
    timelineThreeLink: "See teaching in practice ↗",
    timelineFourTitle: "Evidence from the classroom",
    timelineFourBody: "A 15-week study makes intercultural learning visible through students’ reflection and practice.",
    timelineFourLink: "Read the study ↗",
    timelineFiveTitle: "APU, Beppu",
    timelineFiveBody: "At APU, I bring teaching, research, and public communication into the same room.",
    timelineFiveLink: "Read the APU profile ↗",
    bioEyebrow: "How I work",
    bioTitle: "I work where language, culture, and learning meet.",
    bioBodyOne:
      "I am an Assistant Professor at Ritsumeikan Asia Pacific University (APU) in Japan. My work focuses on intercultural communication, global learning, faculty development, and teaching in multilingual higher education. I design courses and professional-development programmes that help educators and students interpret difference, participate more fully, and turn reflection into practical action.",
    bioBodyTwo:
      "My academic path connects language and literature, Japanese studies, information science, and natural language processing. Before joining APU, I worked and taught at Hokkaido University, developing courses and faculty-development activities around English-medium instruction, intercultural communication, curriculum design, and the changing role of generative AI in higher education.",
    bioBodyThree:
      "Alongside university work, I write as Mazzi about Japan, video games, media culture, and everyday life. That public writing brings cultural interpretation and accessible explanation to a wider audience, connecting my academic interests with journalism, games, and contemporary Japanese culture.",
    academicEyebrow: "What I Do",
    academicTitle: "I help people learn across cultures, media, and institutions.",
    featureOneTitle: "Design Learning",
    featureOneBody:
      "I design classes, activities, and faculty development workshops that move from ideas to usable teaching practice.",
    featureTwoTitle: "Translate Culture",
    featureTwoBody:
      "My research and teaching focus on intercultural communication, meaning-making, and learning across languages and institutions.",
    featureThreeTitle: "Communicate Publicly",
    featureThreeBody:
      "Through writing as Mazzi, I connect Japan, games, media culture, and everyday interpretation for audiences outside the university.",
    caseEyebrow: "Selected Practice",
    caseTitle: "What this work looks like when it reaches a classroom.",
    caseOneTitle: "Pre-FD for future university educators",
    caseOneBody:
      "At APU, graduate students move from subject expertise to a one-page class outline and an activity they can actually facilitate, test with peers, and revise.",
    caseTwoTitle: "Intercultural learning in multilingual classrooms",
    caseTwoBody:
      "A 15-week classroom study used critical incidents and reflection to make empathy, interpretation, and cultural self-awareness visible; the work became a peer-reviewed article in 2023.",
    caseThreeTitle: "Games and media as serious cultural material",
    caseThreeBody:
      "In Video Games in Society, students wrote real reviews and pitched game concepts. Selected work reached PSX Extreme, and the course received a 4.58/5 student-survey score.",
    caseFourTitle: "Responsible AI for teaching design",
    caseFourBody:
      "From Hokkaido University workshops to a 2024 invited lecture at Kitami Institute of Technology, I frame AI as a tool for design and inquiry that still requires verification and academic judgment.",
    casePageLink: "Read case studies",
    caseStudiesEyebrow: "Selected Practice",
    caseStudiesTitle: "Four projects, four different rooms, one habit: make learning visible.",
    caseStudiesDeck:
      "Each case begins with a concrete learning problem, shows the design response, and ends with evidence of what participants could do, make, or carry forward.",
    caseStudiesCtaTitle: "Bring this approach into your programme, teaching team, or classroom.",
    teachingEyebrow: "Teaching Practice",
    teachingTitle: "The bridge becomes visible in the classroom.",
    teachingOneTitle: "Intercultural communication as lived practice",
    teachingOneBody:
      "My intercultural communication classes use reflection, critical incidents, student experience, and diverse voices to help learners move beyond language accuracy toward cultural understanding.",
    teachingTwoTitle: "Video games as cultural systems",
    teachingTwoBody:
      "In courses on video games and society, students analyze games critically, examine their social roles, and practice industry-like tasks such as game journalism and concept pitching.",
    teachingThreeTitle: "Faculty development through design",
    teachingThreeBody:
      "My faculty development work focuses on inclusive teaching, EMI, curriculum design, feedback, and learning environments that make participation more meaningful.",
    workshopEyebrow: "Workshop Offer",
    workshopTitle: "Commissionable sessions for faculty, graduate students, and teaching teams.",
    workshopModelEyebrow: "Design Principle",
    workshopModelTitle: "People should leave with something they can use on Monday.",
    workshopModelBody:
      "I keep the theory concise, then give people time to work on a real class, difficult conversation, or programme decision. Templates, peer feedback, rehearsal, and reflection turn the session into a usable artifact and a next step that fits their institution.",
    workshopOutputOne: "One-page class outlines",
    workshopOutputTwo: "Aligned learning activities",
    workshopOutputThree: "Clear facilitation instructions",
    workshopOutputFour: "Exit-ticket evidence for improvement",
    workshopPageLink: "See workshop formats",
    proofEyebrow: "Verified Experience",
    proofTitle: "Four projects that show the work in action.",
    proofOneLabel: "2023 · Hokkaido University",
    proofOneTitle: "Faculty development across four practical problems",
    proofOneBody:
      "Recent sessions covered teaching in English, intercultural communication, syllabus design, and preparing for ChatGPT in the classroom.",
    proofTwoLabel: "2024 recognition · 2023 course evaluation",
    proofTwoTitle: "Excellent Teacher selection for Video Games in Society",
    proofTwoBody:
      "The course received a 4.58/5 overall student-survey score in Hokkaido University's 2023 Excellent Teacher selection.",
    proofThreeLabel: "2022 · AGH University of Science and Technology",
    proofThreeTitle: "Invited international teaching reflection",
    proofThreeBody:
      "A webinar comparing teaching across Poland, Japan, and Italy, with intercultural context at the centre of the discussion.",
    proofFourLabel: "2025–26 · Ritsumeikan Space Management Program",
    proofFourTitle: "Facilitator for interdisciplinary space-sector education",
    proofFourBody:
      "For two years, I have helped facilitate learning across intercultural communication, leadership, presentation skills, feedback, and international project collaboration for mixed student cohorts.",
    portfolioOneTitle: "Pre-FD for Graduate Students",
    portfolioOneBody:
      "Foundations of university teaching: learning outcomes, class design, active learning, facilitation, peer exchange, and reflection for future educators.",
    portfolioTwoTitle: "Intercultural Learning Design",
    portfolioTwoBody:
      "Workshops and classes that help participants work with cultural difference, dialogue, critical incidents, inclusive participation, and meaning-making.",
    portfolioThreeTitle: "AI, Criticality & Higher Education",
    portfolioThreeBody:
      "Faculty development around generative AI as a teaching, design, synthesis, and reflection partner, with attention to critical thinking and responsibility.",
    portfolioFourTitle: "Teaching Excellence & SoTL",
    portfolioFourBody:
      "Support for educators who want to turn teaching questions into evidence-informed inquiry, stronger feedback, and shareable learning design.",
    samplerEyebrow: "Work Sampler",
    samplerTitle: "What I can build for a university, classroom, or public audience.",
    samplerOneLabel: "Workshop format",
    samplerOneTitle: "From expertise to intentional class design",
    samplerOneBody:
      "I can design short, practical programmes where participants move from a teaching idea to a class outline, then to an activity plan they can actually facilitate.",
    samplerTwoLabel: "Teaching method",
    samplerTwoTitle: "Intercultural communication as reflection",
    samplerTwoBody:
      "I use lived experience, structured dialogue, and reflective tasks to help learners notice assumptions, interpret context, and communicate across difference.",
    samplerThreeLabel: "Media pedagogy",
    samplerThreeTitle: "Games as cultural and social systems",
    samplerThreeBody:
      "I build learning around games as spaces where people practice language, identity, design thinking, interpretation, and public cultural analysis.",
    samplerFourLabel: "Faculty development",
    samplerFourTitle: "AI with responsibility and criticality",
    samplerFourBody:
      "I can help educators use AI for brainstorming, synthesis, prototyping, feedback, and course design without giving up judgment, ethics, or disciplinary purpose.",
    bridgeEyebrow: "One Curiosity, Two Audiences",
    bridgeTitle:
      "The same curiosity runs through my university work and nearly three decades of writing about games.",
    bridgeBodyOne:
      "As Mazzi, I have reported from Japan, interviewed creators, followed game culture on the ground, and written long-form features for Polish readers. That work taught me to notice telling details, respect the audience, and make context readable without turning Japan into an exotic backdrop.",
    bridgeBodyTwo:
      "The classroom asks for the same care. Whether students are discussing culture, pitching a game, or planning an international space-sector project, my job is to help them see assumptions, find language for difficult ideas, and communicate to people who do not already think like they do.",
    writingPageLink: "Browse the writing portfolio",
    bridgeQuote: "“I have spent my career learning how to enter unfamiliar worlds, read their rules, and help other people find their way in.”",
    editorialEvidenceNagoshi: "Interview · Toshihiro Nagoshi",
    editorialEvidenceValkyrie: "Interview visit · Valkyrie Profile creators",
    identityAcademicTerm: "Academic identity",
    identityAcademicDesc: "Assistant Professor, higher education researcher, faculty developer.",
    identityPublicTerm: "Public identity",
    identityPublicDesc: "Japan-based writer on games, media, popular culture, and everyday interpretation.",
    identityAxisTerm: "Shared axis",
    identityAxisDesc: "Communication, learning, culture, and meaning across borders.",
    essayEyebrow: "Position Essay",
    essayTitle: "How games teach us to read cultural worlds.",
    essayBody:
      "A concise account of why games, Japan, public writing, and intercultural education belong in the same intellectual and professional portfolio.",
    essayLink: "Read the essay",
    writingPageEyebrow: "Writing Portfolio",
    writingPageTitle: "Dispatches from Japan, game history, and the quiet things games reveal.",
    writingPageDeck:
      "A selected sampler drawn from my original PSX Extreme manuscripts: event reporting, Japanese game history, technology and market analysis, feature writing, and reflections on what games do in everyday life.",
    writingChapterLabel: "Explore this writing portfolio",
    writingChapterPsx: "PSX Extreme",
    writingChapterEditorial: "Editorial practice",
    writingChapterFieldnotes: "Field reporting & TGS",
    writingChapterArchive: "Articles & books",
    writingNote: "Two selected excerpts from each manuscript are included as writing samples. The full articles remain with PSX Extreme.",
    writingCtaEyebrow: "Public Communication",
    writingCtaTitle: "I write for readers who want context, not just information.",
    writingCtaBody:
      "This portfolio can support interviews, guest lectures, cultural commentary, editorial collaborations, and public-facing academic projects.",
    writingCtaLink: "Discuss a writing project",
    mapEyebrow: "Profile Map",
    mapTitle: "The public profile becomes clearer when each strand has a role.",
    mapOneTitle: "Academic home",
    mapOneBody:
      "APU, intercultural communication, global learning, EMI, curriculum design, and faculty development remain the center of gravity.",
    mapTwoTitle: "Public voice",
    mapTwoBody:
      "Mazzi and PSX Extreme become the public communication layer: a long-running practice of explaining Japan, games, and media culture.",
    mapThreeTitle: "Connecting theme",
    mapThreeBody:
      "The shared subject is how people interpret unfamiliar worlds, learn their codes, and communicate across contexts.",
    mapFourTitle: "Future direction",
    mapFourBody:
      "New talks, essays, and research can make this bridge explicit: games, media, and Japan as spaces of intercultural learning.",
    archiveEyebrow: "Credentials & Publications",
    archiveTitle: "Institutional records and public work for readers who want the evidence.",
    archiveAcademic: "Academic",
    archiveInstitutional: "Institutional Writing",
    archivePublic: "Public Communication",
    statementEyebrow: "Profile Statement",
    statementTitle:
      "Assistant Professor at Ritsumeikan Asia Pacific University, working across intercultural communication, global learning, faculty development, and Japanese media culture.",
    statementBody:
      "My work connects higher education research with public communication, drawing on long-term experience as an educator, researcher, and Japan-based writer for Polish gaming media.",
    contactEyebrow: "Contact",
    contactTitle: "Let’s build a workshop, course, or collaboration around a real problem.",
    contactBody:
      "I am especially interested in work with centers for teaching and learning, international programmes, graduate schools, and academic teams developing multilingual or intercultural learning.",
    contactSignature: "For teaching, research, editorial, and public conversations, you can write in English, Polish, or Japanese.",
    contactWorkshop: "Review workshop formats",
    contactEmail: "Email me about a collaboration",
    contactLinkedIn: "View LinkedIn profile",
    downloadBrief: "Download the one-page workshop brief",
    contactInstitution: "Institutional profile",
    contactResearch: "Research profile",
    contactProfessional: "Professional profile",
    contactPublic: "Public communication",
    serviceEyebrow: "Teaching Portfolio",
    serviceTitle: "Courses, workshops, and seminars built around real learning problems",
    serviceDeck:
      "I teach credit-bearing courses, lead practical workshops, and give seminars for university communities. Across a decade of work to improve teaching quality at Hokkaido University and APU, the common thread has been the same: start with a problem people recognise and end with a usable next step.",
    teachingChapterLabel: "Explore this teaching portfolio",
    teachingChapterOverview: "Overview",
    teachingChapterClasses: "Classes & materials",
    teachingChapterWorkshops: "Workshops & seminars",
    teachingChapterMaterials: "Materials & evidence",
    teachingChapterTryMethod: "Try the method",
    workshopHeroContact: "Tell me what you want to improve",
    workshopHeroBrief: "Read the one-page brief",
    workshopStartEmail: "Start a workshop conversation",
    serviceCtaEyebrow: "Collaboration",
    serviceCtaTitle: "Commission a workshop for your institution.",
    serviceCtaBody:
      "I can adapt the topic, examples, timing, and participant outputs to your programme, teaching context, and audience.",
    teachingMaterialsEyebrow: "Teaching materials in practice",
    teachingMaterialsTitle: "Four examples of how I turn ideas into usable learning.",
    teachingMaterialsDeck:
      "These are selected pages from original decks I designed and delivered. They show how visual structure, guided reflection, and a clear decision point can support the learning process.",
    teachingMaterialOneTitle: "Giving a presentation a clear story",
    teachingMaterialOneBody:
      "A four-part structure turns presentation advice into a memorable planning tool that participants can use immediately.",
    teachingMaterialTwoTitle: "Designing activities people can actually do",
    teachingMaterialTwoBody:
      "Purpose, task, time, grouping, and product give participants a practical test for whether an activity will be clear and workable.",
    teachingMaterialThreeTitle: "Making listening visible",
    teachingMaterialThreeBody:
      "An intercultural principle becomes language people can practise: attend openly, then paraphrase with cultural sensitivity.",
    teachingMaterialFourTitle: "Deciding when AI is safe to use",
    teachingMaterialFourBody:
      "A decision flow replaces blanket rules with verification, responsibility, and attention to the stakes of the task.",
    essayBack: "Back to homepage",
    essayPageEyebrow: "Position Essay",
    essayPageTitle: "Games, culture, and intercultural learning",
    essayPageDeck:
      "Why my work on Japan, games, and public culture belongs in the same professional practice as intercultural education and higher learning.",
    backTop: "Back to top",
    designStudioEyebrow: "Try the method",
    designStudioTitle: "Turn a teaching problem into a small activity people can actually do.",
    designStudioDeck: "This is a compact version of the framework I use in class-design and Pre-FD workshops. Choose a real classroom problem, then shape one workable response through purpose, task, time, grouping, and a visible product.",
    designStudioChallengeTitle: "Choose the pressure point",
    designStudioChallengeDeck: "Start with something recognisable. Good teaching design begins with a situation, not a fashionable technique.",
    designStudioResearchEyebrow: "Research anchor",
    designStudioResearchBody: "The five prompts make the link between an intended outcome, an activity, and visible evidence explicit. That logic draws on constructive alignment and active-learning research; the studio is my practical teaching-design scaffold, not an automatic lesson plan.",
    designStudioBuildTitle: "Make five deliberate choices",
    designStudioBuildDeck: "Each choice is small. Together, they make the activity legible to you and to the people taking part.",
    designStudioOutputEyebrow: "Working activity",
    designStudioOutputNote: "A short rehearsal, peer response, or exit note turns this from an idea into evidence you can use.",
    designStudioCopy: "Copy this activity outline",
  },
  pl: {
    navWork: "Praktyka",
    navWorkshops: "Warsztaty",
    navTeaching: "Dydaktyka",
    navWriting: "Teksty",
    navBio: "Bio",
    navResearch: "Badania",
    navAchievements: "Dorobek",
    navContact: "Kontakt",
    achievementsEyebrow: "Osiągnięcia i wystąpienia",
    achievementsTitle: "Pozwól, że pokażę Ci, dokąd zaprowadziła mnie ta praca.",
    achievementsDeck: "Zebrałem tu osiągnięcia, zaproszenia, rozmowy i projekty społeczne, które najlepiej wyjaśniają moją drogę. To nie jest pełne CV, lecz prowadzona przeze mnie opowieść o momentach, w których moja praca spotkała studentów, instytucje i szerszą publiczność.",
    researchEyebrow: "Badania",
    researchPageTitle: "Co pomaga ludziom uczestniczyć, kiedy spotykają się języki, kultury i systemy?",
    researchPageDeck:
      "Moje badania wyrastają z sytuacji, których doświadczyłem w praktyce: wielojęzycznych klas, systemów nauki języka, spotkań w turystyce i interdyscyplinarnego programu kosmicznego. Pytam, co pomaga ludziom odczytywać różnice, współpracować i uczyć się z większym poczuciem sprawczości.",
    researchChapterLabel: "Przeglądaj portfolio badawcze",
    researchChapterQuestion: "Pytanie badawcze",
    researchChapterProjects: "Projekty i publikacje",
    researchChapterFieldwork: "Badania terenowe i współprace",
    researchChapterMethod: "Wypróbuj metodę",
    chapterSwipeHint: "Przesuń →",
    researchMapEyebrow: "Mapa badań",
    researchMapTitle: "Jedno pytanie, cztery konteksty badawcze.",
    researchMapDeck: "Tematy się zmieniają, lecz pytanie pozostaje to samo: jak projekt, język i kontekst wpływają na możliwość uczestnictwa.",
    researchMapCoreLabel: "Wspólne pytanie",
    researchMapCore: "Co pomaga ludziom uczestniczyć ponad różnicą?",
    researchMapContextLabel: "Kontekst",
    researchMapEvidenceLabel: "Dowód / metoda",
    researchMapOneTitle: "Wielojęzyczne klasy",
    researchMapOneBody: "Różnica, pewność siebie i poczucie przynależności widziane przez pryzmat aktywności klasowych i refleksji.",
    researchMapOneEvidenceTitle: "15-tygodniowe badanie klasowe",
    researchMapOneEvidenceBody: "Sytuacje krytyczne, zadania refleksyjne i recenzowany artykuł opublikowany w 2023 roku.",
    researchMapTwoTitle: "Systemy nauki języka",
    researchMapTwoBody: "Słownictwo angielskie i japońskie badane za pomocą NLP, projektowania systemu i ewaluacji użytkowników.",
    researchMapTwoEvidenceTitle: "Projektowanie systemu NLP",
    researchMapTwoEvidenceBody: "Code-switching, graded readers i ewaluacja użytkowników w publikacjach z lat 2016–18.",
    researchMapThreeTitle: "Kontakty w turystyce",
    researchMapThreeBody: "Kontakt z mieszkańcami, gościnność i obraz miejsca badane przez ankiety i wywiady.",
    researchMapThreeEvidenceTitle: "165 ankiet + 12 wywiadów",
    researchMapThreeEvidenceBody: "Pięć punktów kontaktu opartych na aktywnościach, zbadanych w Kashanie w Iranie.",
    researchMapFourTitle: "Programy interdyscyplinarne",
    researchMapFourBody: "Komunikacja, przywództwo i współpraca projektowa badane przez facylitację i wdrożenie programu.",
    researchMapFourEvidenceTitle: "Dwie roczne edycje",
    researchMapFourEvidenceBody: "Facylitacja, obserwacja i wspólne wystąpienie konferencyjne w latach 2025–26.",
    researchMapCaption: "Razem projekty łączą dowody z klasy, projektowanie systemów, badania terenowe i wdrażanie programów.",
    heroKicker: "Adiunkt w Japonii · Edukator międzykulturowy · Autor piszący jako Mazzi",
    heroLede:
      "Życie i praca w Japonii od 2009 roku nauczyły mnie, że komunikacja między kulturami nie jest hasłem, lecz codzienną praktyką. Na Ritsumeikan Asia Pacific University przekładam to doświadczenie i badania na kursy, warsztaty dla kadry oraz wielojęzyczne środowiska, w których ludzie mogą uczestniczyć pewniej i pełniej.",
    japanYearsLabel: "lat życia i pracy w Japonii",
    japanSinceLabel: "od 28 marca 2009 roku",
    japanDaysLabel: "dni zwyczajnego życia w Japonii",
    japanDaysNote: "mała kronika długiego rozdziału",
    visualTeaching: "Uczenie i facylitacja ponad kulturami",
    visualPublic: "Publiczny głos ukształtowany przez gry i Japonię",
    visualJapan: "Japonia obserwowana przez zwyczajne szczegóły",
    apuBandEyebrow: "Mój obecny dom akademicki",
    apuBandTitle: "Na APU edukacja globalna nie jest abstrakcyjną ideą. To sala, do której wchodzę każdego dnia.",
    apuBandBody: "Beppu to miejsce, w którym łączą się dziś moja praca nad edukacją międzykulturową, rozwojem dydaktycznym kadry i komunikacją publiczną.",
    videoEyebrow: "Zobacz i posłuchaj",
    videoTitle: "Niektóre części tej historii najlepiej usłyszeć moim własnym głosem.",
    videoDeck: "Kursy, rozmowy i wystąpienia pokazujące, jak wyjaśniam idee, prowadzę dyskusję i łączę pracę akademicką z szerszą publicznością.",
    videoConversationLabel: "Rozmowa · 2024",
    videoCourseLabel: "Portret kursu · Hokkaido University",
    videoInterviewLabel: "Wywiad · Polish Sushi",
    videoWatchLink: "Obejrzyj na YouTube",
    artifactEyebrow: "Z archiwum",
    artifactTitle: "Czasem plakat mówi więcej niż kolejny akapit.",
    artifactDeck: "Te oryginalne materiały są śladem konkretnych sal, odbiorców i programów stojących za tym portfolio.",
    artifactOneMeta: "Spotkanie dialogowe · APU · 2025",
    artifactOneTitle: "Starting Over: Leaving, Losing, and Finding Yourself Again",
    artifactTwoMeta: "Cykl warsztatów · APU · 2026",
    artifactTwoTitle: "Podstawy nauczania i uczenia się",
    artifactThreeMeta: "Zaproszone warsztaty · University of Tokyo · 2019",
    artifactThreeTitle: "Trzy warsztaty gościnne w ciągu dwóch dni",
    artifactFourMeta: "Materiał programu · APU / Ritsumeikan · 2025",
    artifactFourTitle: "International Project Management Program",
    artifactOpen: "Otwórz oryginalny plakat",
    artifactOpenMaterial: "Otwórz oryginalny materiał",
    galleryEyebrow: "Od środka sali",
    galleryTitle: "Tak wygląda ta praca, kiedy sala naprawdę zaczyna żyć.",
    galleryDeck: "Najbardziej jestem sobą, kiedy ludzie zaczynają głośno myśleć, sprawdzać pomysły i znajdować język dla czegoś, czego wcześniej nie potrafili nazwać.",
    galleryCaptionOne: "Przestrzeń, w której można myśleć razem",
    galleryCaptionTwo: "Nauczanie po angielsku: miejsce na pytania",
    galleryCaptionThree: "Przygotowanie, technologia i obecność",
    galleryCaptionFour: "Sala zbudowana z wielu perspektyw",
    heroPrimary: "Zobacz ofertę warsztatów",
    heroSecondary: "Zobacz studia przypadków",
    identityStrip:
      "Dla centrów dydaktyki · programów międzynarodowych · szkół doktorskich · wielojęzycznych zespołów dydaktycznych",
    trajectoryEyebrow: "Doświadczenie",
    trajectoryTitle: "Od Krakowa przez Hokkaido do Beppu: wspólnym wątkiem zawsze był język.",
    trajectoryBodyOne:
      "Zacząłem od języka i literatury w Krakowie, przyjechałem do Japonii jako stypendysta MEXT, a na Hokkaido University obroniłem doktorat z informatyki, specjalizując się w przetwarzaniu języka naturalnego. Ta nietypowa droga nauczyła mnie swobodnie łączyć humanistykę, technologię i edukację.",
    trajectoryBodyTwo:
      "Gry otworzyły mi jedną z pierwszych dróg do Japonii. Od blisko trzech dekad piszę jako Mazzi dla polskich czytelników, a praca uniwersytecka prowadziła mnie od systemów nauki języka do klas międzykulturowych i rozwoju dydaktycznego kadry. Obie ścieżki wyrastają z tego samego odruchu: zrozumieć, jak działa dany świat, i wyjaśnić go bez ścierania tego, co czyni go odmiennym.",
    timelineEyebrow: "Kilka współrzędnych",
    timelineTitle: "Ta droga ma znaczenie, bo zmieniła to, w czym mogę dziś pomagać innym.",
    timelineOneTitle: "Początek Japonii",
    timelineOneBody: "Przyjeżdżam na stypendium MEXT i zaczynam rozumieć codzienną pracę życia pomiędzy językami.",
    timelineOneLink: "Zobacz dorobek ↗",
    timelineTwoTitle: "Doktorat zamienia język w system",
    timelineTwoBody: "Doktorat z informatyki na Hokkaido University prowadzi do badań Co-MIX: systemów nauki języka, w których najważniejsze są kontekst, wybór i doświadczenie uczących się.",
    timelineTwoLink: "Poznaj badania Co-MIX ↗",
    timelineThreeTitle: "Nauczanie wysuwa się na pierwszy plan",
    timelineThreeBody: "Zaproszone warsztaty o nauczaniu po angielsku i komunikacji międzykulturowej przenoszą pytania badawcze do prawdziwej pracy w klasie.",
    timelineThreeLink: "Zobacz dydaktykę w praktyce ↗",
    timelineFourTitle: "Dowody z klasy",
    timelineFourBody: "Piętnastotygodniowe badanie uwidacznia uczenie międzykulturowe poprzez refleksję i praktykę studentów.",
    timelineFourLink: "Przeczytaj badanie ↗",
    timelineFiveTitle: "APU, Beppu",
    timelineFiveBody: "Na APU łączę nauczanie, badania i komunikację publiczną w jednej przestrzeni.",
    timelineFiveLink: "Przeczytaj profil APU ↗",
    bioEyebrow: "Jak pracuję",
    bioTitle: "Pracuję na styku języka, kultury i uczenia się.",
    bioBodyOne:
      "Jestem adiunktem na Ritsumeikan Asia Pacific University w Japonii. Zajmuję się komunikacją międzykulturową, edukacją globalną, rozwojem dydaktycznym kadry oraz nauczaniem w wielojęzycznym szkolnictwie wyższym. Projektuję kursy i programy rozwoju dydaktycznego, które pomagają edukatorom i studentom odczytywać różnice, pełniej uczestniczyć w uczeniu się oraz przekładać refleksję na działanie.",
    bioBodyTwo:
      "Moja droga akademicka łączy język i literaturę, japonistykę, informatykę oraz przetwarzanie języka naturalnego. Przed dołączeniem do APU pracowałem i prowadziłem zajęcia na Hokkaido University, rozwijając kursy oraz działania wspierające dydaktykę kadry: nauczanie po angielsku, komunikację międzykulturową, projektowanie programów i krytyczne wykorzystanie generatywnej AI w szkolnictwie wyższym.",
    bioBodyThree:
      "Równolegle z pracą uniwersytecką piszę jako Mazzi o Japonii, grach wideo, kulturze mediów i codziennym życiu. Ta publicystyka przekłada interpretację kultury i złożone konteksty na przystępny język, łącząc moje zainteresowania akademickie z dziennikarstwem, grami i współczesną kulturą Japonii.",
    academicEyebrow: "Co robię",
    academicTitle: "Pomagam ludziom uczyć się ponad granicami kultur, mediów i instytucji.",
    featureOneTitle: "Projektuję proces uczenia się",
    featureOneBody:
      "Projektuję zajęcia, aktywności i warsztaty dla kadry, które przekuwają ideę w użyteczną praktykę dydaktyczną.",
    featureTwoTitle: "Tłumaczę kulturę",
    featureTwoBody:
      "Moje badania i nauczanie dotyczą komunikacji międzykulturowej, budowania znaczenia i uczenia się ponad językami oraz instytucjami.",
    featureThreeTitle: "Komunikuję publicznie",
    featureThreeBody:
      "Pisząc jako Mazzi, łączę Japonię, gry, kulturę mediów i codzienną interpretację dla odbiorców spoza uniwersytetu.",
    caseEyebrow: "Wybrana praktyka",
    caseTitle: "Jak ta praca wygląda, kiedy trafia do prawdziwej klasy.",
    caseOneTitle: "Pre-FD dla przyszłych edukatorów akademickich",
    caseOneBody:
      "Na APU doktoranci przechodzą od wiedzy eksperckiej do jednostronicowego szkicu zajęć i aktywności, którą mogą naprawdę poprowadzić, sprawdzić z grupą i poprawić.",
    caseTwoTitle: "Uczenie międzykulturowe w wielojęzycznych klasach",
    caseTwoBody:
      "Piętnastotygodniowe badanie klasowe wykorzystało sytuacje krytyczne i refleksję, aby uwidocznić empatię, interpretację i samoświadomość kulturową; w 2023 roku praca ukazała się jako recenzowany artykuł.",
    caseThreeTitle: "Gry i media jako poważny materiał kulturowy",
    caseThreeBody:
      "Na kursie Video Games in Society studenci pisali prawdziwe recenzje i prezentowali koncepcje gier. Wybrane prace trafiły do PSX Extreme, a kurs otrzymał średnią ocenę 4,58/5.",
    caseFourTitle: "Odpowiedzialna AI w projektowaniu dydaktyki",
    caseFourBody:
      "Od warsztatów na Hokkaido University po zaproszony wykład w Kitami Institute of Technology w 2024 roku pokazuję AI jako narzędzie projektowania i dociekania, które nadal wymaga weryfikacji i akademickiego osądu.",
    casePageLink: "Przeczytaj studia przypadków",
    caseStudiesEyebrow: "Wybrana praktyka",
    caseStudiesTitle: "Cztery projekty, cztery różne sale, jeden nawyk: uwidocznić uczenie.",
    caseStudiesDeck:
      "Każde studium przypadku zaczyna się od konkretnego problemu dydaktycznego, pokazuje odpowiedź projektową i kończy się dowodem na to, co uczestnicy mogli zrobić, stworzyć lub zabrać ze sobą dalej.",
    caseStudiesCtaTitle: "Wprowadź to podejście do swojego programu, zespołu dydaktycznego albo klasy.",
    teachingEyebrow: "Praktyka dydaktyczna",
    teachingTitle: "Ten most staje się widoczny w klasie.",
    teachingOneTitle: "Komunikacja międzykulturowa jako praktyka życia",
    teachingOneBody:
      "Na zajęciach z komunikacji międzykulturowej wykorzystuję refleksję, sytuacje krytyczne, doświadczenia studentów i różnorodne głosy, aby pomóc uczącym się wyjść poza samą poprawność językową ku rozumieniu kultury.",
    teachingTwoTitle: "Gry wideo jako systemy kulturowe",
    teachingTwoBody:
      "Na zajęciach o grach wideo i społeczeństwie studenci analizują gry krytycznie, badają ich role społeczne i wykonują zadania zbliżone do pracy branżowej: piszą o grach i prezentują własne koncepcje.",
    teachingThreeTitle: "Rozwój dydaktyczny kadry przez projektowanie",
    teachingThreeBody:
      "W pracy nad rozwojem dydaktycznym kadry koncentruję się na nauczaniu inkluzywnym, EMI, projektowaniu programów, informacji zwrotnej i środowiskach uczenia się, które nadają uczestnictwu sens.",
    workshopEyebrow: "Oferta warsztatów",
    workshopTitle: "Sesje dla kadry, doktorantów i zespołów dydaktycznych gotowe do zamówienia.",
    workshopModelEyebrow: "Zasada projektowa",
    workshopModelTitle: "Uczestnicy powinni wyjść z czymś, czego użyją już w poniedziałek.",
    workshopModelBody:
      "Teorię podaję zwięźle, a większość czasu przeznaczam na pracę nad realnymi zajęciami, trudną rozmową albo decyzją programową. Szablony, informacja zwrotna, próba i refleksja prowadzą do użytecznego materiału oraz następnego kroku dopasowanego do instytucji.",
    workshopOutputOne: "Jednostronicowe szkice zajęć",
    workshopOutputTwo: "Spójne aktywności dydaktyczne",
    workshopOutputThree: "Jasne instrukcje facylitacji",
    workshopOutputFour: "Krótkie podsumowania na wyjście, które pomagają ulepszać projekt",
    workshopPageLink: "Zobacz formaty warsztatów",
    proofEyebrow: "Udokumentowane doświadczenie",
    proofTitle: "Cztery projekty pokazujące tę pracę w działaniu.",
    proofOneLabel: "2023 · Hokkaido University",
    proofOneTitle: "Rozwój dydaktyczny kadry wokół czterech praktycznych problemów",
    proofOneBody:
      "Najnowsze sesje dotyczyły nauczania po angielsku, komunikacji międzykulturowej, projektowania sylabusa i przygotowania do ChatGPT w klasie.",
    proofTwoLabel: "Wyróżnienie 2024 · Ewaluacja kursu 2023",
    proofTwoTitle: "Wyróżnienie Excellent Teacher za Video Games in Society",
    proofTwoBody:
      "Kurs otrzymał średnią 4,58/5 w studenckiej ankiecie w ramach selekcji Excellent Teacher na Hokkaido University w 2023 roku.",
    proofThreeLabel: "2022 · AGH University of Science and Technology",
    proofThreeTitle: "Zaproszona refleksja o nauczaniu międzynarodowym",
    proofThreeBody:
      "Webinar porównujący nauczanie w Polsce, Japonii i we Włoszech, z komunikacją międzykulturową w centrum rozmowy.",
    proofFourLabel: "2025–26 · Ritsumeikan Space Management Program",
    proofFourTitle: "Facylitator interdyscyplinarnej edukacji dla sektora kosmicznego",
    proofFourBody:
      "Od dwóch lat współprowadzę proces uczenia obejmujący komunikację międzykulturową, przywództwo, umiejętności prezentacyjne, informację zwrotną i międzynarodową współpracę projektową w mieszanych grupach studentów.",
    portfolioOneTitle: "Pre-FD dla doktorantów",
    portfolioOneBody:
      "Podstawy nauczania akademickiego: efekty uczenia się, projektowanie zajęć, aktywne uczenie się, facylitacja, wymiana doświadczeń i refleksja dla przyszłych edukatorów.",
    portfolioTwoTitle: "Projektowanie uczenia międzykulturowego",
    portfolioTwoBody:
      "Warsztaty i zajęcia pomagające pracować z różnicą kulturową, dialogiem, sytuacjami krytycznymi, inkluzywnym uczestnictwem i budowaniem znaczenia.",
    portfolioThreeTitle: "AI, krytyczność i szkolnictwo wyższe",
    portfolioThreeBody:
      "Rozwój dydaktyczny kadry wokół generatywnej AI jako partnera w nauczaniu, projektowaniu, syntezie i refleksji — z naciskiem na krytyczne myślenie i odpowiedzialność.",
    portfolioFourTitle: "Doskonalenie dydaktyki i SoTL",
    portfolioFourBody:
      "Wsparcie dla edukatorów, którzy chcą przekuć pytania dydaktyczne w pracę opartą na danych, lepszą informację zwrotną i projekty uczenia się, którymi można się dzielić.",
    samplerEyebrow: "Przegląd możliwości",
    samplerTitle: "Co mogę przygotować dla uniwersytetu, klasy albo szerszej publiczności.",
    samplerOneLabel: "Format warsztatu",
    samplerOneTitle: "Od ekspertyzy do świadomego projektu zajęć",
    samplerOneBody:
      "Mogę projektować krótkie, praktyczne programy, w których uczestnicy przechodzą od pomysłu na zajęcia do szkicu lekcji, a potem do aktywności, którą naprawdę potrafią poprowadzić.",
    samplerTwoLabel: "Metoda dydaktyczna",
    samplerTwoTitle: "Komunikacja międzykulturowa jako refleksja",
    samplerTwoBody:
      "Wykorzystuję doświadczenie życia, uporządkowany dialog i zadania refleksyjne, aby pomagać uczącym się zauważać założenia, odczytywać kontekst i komunikować się ponad różnicą.",
    samplerThreeLabel: "Pedagogika mediów",
    samplerThreeTitle: "Gry jako systemy kulturowe i społeczne",
    samplerThreeBody:
      "Buduję uczenie wokół gier jako przestrzeni, w których ludzie ćwiczą język, tożsamość, myślenie projektowe, interpretację i publiczną analizę kultury.",
    samplerFourLabel: "Rozwój dydaktyczny kadry",
    samplerFourTitle: "AI z odpowiedzialnością i krytycznością",
    samplerFourBody:
      "Mogę pomagać edukatorom używać AI do burzy mózgów, syntezy, prototypowania, informacji zwrotnej i projektowania kursów — bez rezygnacji z osądu, etyki i celu danej dyscypliny.",
    bridgeEyebrow: "Jedna ciekawość, dwie publiczności",
    bridgeTitle:
      "Ta sama ciekawość łączy pracę uniwersytecką z niemal trzema dekadami pisania o grach.",
    bridgeBodyOne:
      "Jako Mazzi relacjonowałem wydarzenia z Japonii, rozmawiałem z twórcami, obserwowałem kulturę gier na miejscu i pisałem rozbudowane teksty dla polskich czytelników. Nauczyło mnie to zauważać znaczące szczegóły, szanować odbiorcę i wyjaśniać kontekst bez zamieniania Japonii w egzotyczne tło.",
    bridgeBodyTwo:
      "Klasa wymaga tej samej uważności. Niezależnie od tego, czy studenci rozmawiają o kulturze, prezentują pomysł na grę czy planują międzynarodowy projekt dla sektora kosmicznego, pomagam im dostrzec założenia, znaleźć język dla trudnych idei i rozmawiać z osobami, które myślą inaczej.",
    writingPageLink: "Zobacz portfolio pisarskie",
    bridgeQuote: "„Przez całą karierę uczę się wchodzić do nieznanych światów, czytać ich zasady i pomagać innym odnaleźć w nich drogę.”",
    editorialEvidenceNagoshi: "Wywiad · Toshihiro Nagoshi",
    editorialEvidenceValkyrie: "Wywiad · twórcy Valkyrie Profile",
    identityAcademicTerm: "Tożsamość akademicka",
    identityAcademicDesc: "Adiunkt, badacz szkolnictwa wyższego, projektant rozwoju dydaktycznego kadry.",
    identityPublicTerm: "Tożsamość publiczna",
    identityPublicDesc: "Autor piszący z Japonii o grach, mediach, popkulturze i codziennej interpretacji kultury.",
    identityAxisTerm: "Wspólna oś",
    identityAxisDesc: "Komunikacja, uczenie się, kultura i znaczenie ponad granicami.",
    essayEyebrow: "Esej programowy",
    essayTitle: "Jak gry uczą nas czytać światy kulturowe.",
    essayBody:
      "Zwięzłe wyjaśnienie, dlaczego gry, Japonia, publicystyka i edukacja międzykulturowa należą do tego samego portfolio intelektualnego i zawodowego.",
    essayLink: "Przeczytaj esej",
    writingPageEyebrow: "Portfolio pisarskie",
    writingPageTitle: "Relacje z Japonii, historia gier i ciche rzeczy, które gry potrafią odsłonić.",
    writingPageDeck:
      "Wybór z moich oryginalnych tekstów dla PSX Extreme: relacje z wydarzeń, historia japońskich gier, analiza technologii i rynku, reportażowa publicystyka oraz refleksje o tym, co gry robią w codziennym życiu.",
    writingChapterLabel: "Przeglądaj portfolio pisarskie",
    writingChapterPsx: "PSX Extreme",
    writingChapterEditorial: "Praktyka redakcyjna",
    writingChapterFieldnotes: "Reportaż i TGS",
    writingChapterArchive: "Artykuły i książki",
    writingNote: "Dwa wybrane fragmenty z każdego rękopisu służą jako próbki stylu. Pełne artykuły pozostają własnością PSX Extreme.",
    writingCtaEyebrow: "Komunikacja publiczna",
    writingCtaTitle: "Piszę dla odbiorców, którzy chcą kontekstu, nie tylko informacji.",
    writingCtaBody:
      "To portfolio może wspierać wywiady, wykłady gościnne, komentarze kulturowe, współpracę redakcyjną i projekty akademickie skierowane do szerszej publiczności.",
    writingCtaLink: "Porozmawiajmy o projekcie pisarskim",
    mapEyebrow: "Mapa profilu",
    mapTitle: "Profil publiczny staje się czytelniejszy, kiedy każdy wątek ma swoją rolę.",
    mapOneTitle: "Dom akademicki",
    mapOneBody:
      "APU, komunikacja międzykulturowa, edukacja globalna, EMI, projektowanie programów i rozwój dydaktyczny kadry pozostają środkiem ciężkości.",
    mapTwoTitle: "Głos publiczny",
    mapTwoBody:
      "Mazzi i PSX Extreme stają się warstwą komunikacji publicznej: wieloletnią praktyką wyjaśniania Japonii, gier i kultury mediów.",
    mapThreeTitle: "Motyw łączący",
    mapThreeBody:
      "Wspólnym tematem jest to, jak ludzie interpretują nieznane światy, uczą się ich kodów i komunikują ponad kontekstami.",
    mapFourTitle: "Kierunek na przyszłość",
    mapFourBody:
      "Nowe wystąpienia, eseje i badania mogą mówić o tym moście wprost: gry, media i Japonia jako przestrzenie uczenia się międzykulturowego.",
    archiveEyebrow: "Dorobek i publikacje",
    archiveTitle: "Profile instytucjonalne i praca publiczna dla osób, które chcą zobaczyć dowody.",
    archiveAcademic: "Akademia",
    archiveInstitutional: "Teksty instytucjonalne",
    archivePublic: "Komunikacja publiczna",
    statementEyebrow: "Krótko o profilu",
    statementTitle:
      "Adiunkt na Ritsumeikan Asia Pacific University, pracujący na styku komunikacji międzykulturowej, edukacji globalnej, rozwoju dydaktycznego kadry i japońskiej kultury medialnej.",
    statementBody:
      "Moja praca łączy badania nad szkolnictwem wyższym z komunikacją publiczną, korzystając z doświadczenia edukatora, badacza i autora piszącego z Japonii dla polskich mediów growych.",
    contactEyebrow: "Kontakt",
    contactTitle: "Zbudujmy warsztat, kurs albo współpracę wokół prawdziwego problemu.",
    contactBody:
      "Szczególnie interesuje mnie współpraca z centrami doskonalenia dydaktyki, programami międzynarodowymi, szkołami doktorskimi i zespołami rozwijającymi wielojęzyczne lub międzykulturowe uczenie się.",
    contactSignature: "W sprawie dydaktyki, badań, tekstów i rozmów publicznych można napisać do mnie po angielsku, polsku lub japońsku.",
    contactWorkshop: "Przejrzyj formaty warsztatów",
    contactEmail: "Napisz do mnie o współpracy",
    contactLinkedIn: "Zobacz profil LinkedIn",
    downloadBrief: "Pobierz jednostronicowy opis warsztatów",
    contactInstitution: "Profil instytucjonalny",
    contactResearch: "Profil badawczy",
    contactProfessional: "Profil zawodowy",
    contactPublic: "Komunikacja publiczna",
    serviceEyebrow: "Portfolio dydaktyczne",
    serviceTitle: "Kursy, warsztaty i seminaria zbudowane wokół prawdziwych problemów uczenia się",
    serviceDeck:
      "Prowadzę kursy akademickie, praktyczne warsztaty i seminaria dla społeczności uniwersyteckich. W ciągu dekady pracy nad jakością dydaktyki na Hokkaido University i APU powtarza się jeden motyw: zaczynać od problemu, który ludzie naprawdę rozpoznają, i kończyć konkretnym krokiem, z którego można skorzystać.",
    teachingChapterLabel: "Przeglądaj portfolio dydaktyczne",
    teachingChapterOverview: "Przegląd",
    teachingChapterClasses: "Kursy i materiały",
    teachingChapterWorkshops: "Warsztaty i seminaria",
    teachingChapterMaterials: "Materiały i dowody",
    teachingChapterTryMethod: "Wypróbuj metodę",
    workshopHeroContact: "Napisz, co chcesz ulepszyć",
    workshopHeroBrief: "Przeczytaj jednostronicowy brief",
    workshopStartEmail: "Rozpocznij rozmowę o warsztacie",
    serviceCtaEyebrow: "Współpraca",
    serviceCtaTitle: "Zamów warsztat dla swojej instytucji.",
    serviceCtaBody:
      "Mogę dopasować temat, przykłady, czas i rezultaty uczestników do programu, kontekstu dydaktycznego oraz odbiorców.",
    teachingMaterialsEyebrow: "Materiały dydaktyczne w praktyce",
    teachingMaterialsTitle: "Cztery przykłady tego, jak zamieniam idee w użyteczne uczenie się.",
    teachingMaterialsDeck:
      "To wybrane slajdy z oryginalnych prezentacji, które sam zaprojektowałem i przeprowadziłem. Pokazują, jak struktura wizualna, prowadzona refleksja i jasno postawiony moment decyzji wspierają proces uczenia się.",
    teachingMaterialOneTitle: "Nadać prezentacji wyraźną historię",
    teachingMaterialOneBody:
      "Czteroczęściowa struktura zamienia wskazówki dotyczące prezentacji w zapamiętywalne narzędzie planowania, z którego uczestnicy mogą od razu skorzystać.",
    teachingMaterialTwoTitle: "Projektowanie aktywności, które da się naprawdę poprowadzić",
    teachingMaterialTwoBody:
      "Cel, zadanie, czas, grupowanie i produkt dają uczestnikom praktyczny test tego, czy aktywność będzie jasna i wykonalna.",
    teachingMaterialThreeTitle: "Uwidocznić uważne słuchanie",
    teachingMaterialThreeBody:
      "Zasada międzykulturowa staje się językiem, który można ćwiczyć: słuchaj otwarcie, a potem parafrazuj z wrażliwością kulturową.",
    teachingMaterialFourTitle: "Decydowanie, kiedy AI można użyć bezpiecznie",
    teachingMaterialFourBody:
      "Schemat decyzji zastępuje ogólne zakazy weryfikacją, odpowiedzialnością i uwagą na stawkę danego zadania.",
    essayBack: "Wróć na stronę główną",
    essayPageEyebrow: "Esej programowy",
    essayPageTitle: "Gry, kultura i uczenie międzykulturowe",
    essayPageDeck:
      "Dlaczego moja praca o Japonii, grach i kulturze publicznej należy do tej samej praktyki zawodowej co edukacja międzykulturowa i szkolnictwo wyższe.",
    backTop: "Do góry",
    designStudioEyebrow: "Wypróbuj metodę",
    designStudioTitle: "Zamień problem dydaktyczny w małą aktywność, którą uczestnicy naprawdę mogą wykonać.",
    designStudioDeck: "To skrócona wersja modelu, z którego korzystam podczas projektowania zajęć i warsztatów Pre-FD. Wybierz realny problem z sali, a następnie zbuduj możliwą do przeprowadzenia odpowiedź przez cel, zadanie, czas, sposób pracy i widoczny rezultat.",
    designStudioChallengeTitle: "Wybierz punkt zapalny",
    designStudioChallengeDeck: "Zacznij od sytuacji, którą da się rozpoznać. Dobre projektowanie dydaktyczne zaczyna się od problemu, nie od modnej techniki.",
    designStudioResearchEyebrow: "Oparcie w badaniach",
    designStudioResearchBody: "Pięć pytań pomaga jasno połączyć zamierzony efekt uczenia się, aktywność i widoczny dowód. Ta logika czerpie z konstruktywnego dopasowania i badań nad aktywnym uczeniem się; studio jest moim praktycznym szkieletem projektowania, a nie automatycznym planem zajęć.",
    designStudioBuildTitle: "Podejmij pięć świadomych decyzji",
    designStudioBuildDeck: "Każda decyzja jest niewielka. Razem sprawiają, że aktywność jest czytelna dla Ciebie i dla osób, które w niej uczestniczą.",
    designStudioOutputEyebrow: "Robocza aktywność",
    designStudioOutputNote: "Krótka próba, informacja zwrotna od innych albo bilet wyjścia zmieniają pomysł w dowód, z którego można skorzystać.",
    designStudioCopy: "Skopiuj konspekt aktywności",
  },
};

translations.ja = {
  ...translations.en,
  achievementsEyebrow: "活動記録と登壇",
  achievementsTitle: "この仕事が私をどこへ連れていったのか、お見せします。",
  achievementsDeck: "節目、招待、対話、地域とのプロジェクトのなかから、自分の歩みを最もよく示すものを選びました。完全なCVではなく、学生、機関、そしてより広い社会と仕事が交わった瞬間をたどる記録です。",
  researchEyebrow: "研究",
  researchPageTitle: "言語、文化、制度が出会うとき、人はどうすればよりよく参加できるのか。",
  researchPageDeck: "多言語の教室、語学学習システム、観光における出会い、学際的な宇宙プログラムでの実践から研究を組み立てています。違いを読み取り、協働し、自分の力で学べるようになる条件を問い続けています。",
  researchChapterLabel: "研究ポートフォリオを探す",
  researchChapterQuestion: "問い",
  researchChapterProjects: "プロジェクトと出版物",
  researchChapterFieldwork: "フィールドワークと協働",
  researchChapterMethod: "方法を試す",
  researchMapEyebrow: "研究の地図",
  researchMapTitle: "一つの問い、四つの研究コンテクスト。",
  researchMapDeck: "テーマは変わっても、問いは同じです。設計、言語、文脈は、人が参加できる可能性をどう形づくるのか。",
  researchMapCoreLabel: "共通する問い",
  researchMapCore: "人は違いを越えて参加するために何を必要とするのか。",
  researchMapContextLabel: "コンテクスト",
  researchMapEvidenceLabel: "根拠・方法",
  researchMapOneTitle: "多言語の教室",
  researchMapOneBody: "教室活動と振り返りを通して、違い、自信、帰属意識を捉えます。",
  researchMapOneEvidenceTitle: "15週間の授業研究",
  researchMapOneEvidenceBody: "critical incidents、振り返り課題、2023年の査読論文。",
  researchMapTwoTitle: "語学学習システム",
  researchMapTwoBody: "英語と日本語の語彙を、NLP、システム設計、ユーザー評価から研究します。",
  researchMapTwoEvidenceTitle: "NLPシステム設計",
  researchMapTwoEvidenceBody: "コードスイッチング、段階別リーダー、2016〜18年のユーザー評価研究。",
  researchMapThreeTitle: "観光における出会い",
  researchMapThreeBody: "地域住民との接触、ホスピタリティ、場所のイメージを、質問紙とインタビューから考えます。",
  researchMapThreeEvidenceTitle: "質問紙165件・インタビュー12件",
  researchMapThreeEvidenceBody: "イラン・カーシャーンで、活動に基づく五つの接触地点を調査しました。",
  researchMapFourTitle: "学際的プログラム",
  researchMapFourBody: "コミュニケーション、リーダーシップ、プロジェクト協働を、ファシリテーションとプログラム実施から捉えます。",
  researchMapFourEvidenceTitle: "2年間の実施",
  researchMapFourEvidenceBody: "2025〜26年のファシリテーション、観察、共同学会発表。",
  researchMapCaption: "これらのプロジェクトは、教室、システム設計、フィールドワーク、プログラム実施の根拠をつないでいます。",
  videoEyebrow: "見る・聞く",
  videoTitle: "この物語の一部は、自分の声で聞くのがいちばん早い。",
  videoDeck: "授業、対話、登壇の記録から、アイデアを説明し、議論を進め、大学の仕事をより広い社会につなぐ姿を紹介します。",
  videoConversationLabel: "対談・2024",
  videoCourseLabel: "授業紹介・北海道大学",
  videoInterviewLabel: "インタビュー・Polish Sushi",
  videoWatchLink: "YouTubeで見る",
  artifactEyebrow: "アーカイブから",
  artifactTitle: "ときには、もう一つの段落よりポスターのほうが多くを語ります。",
  artifactDeck: "ここにあるオリジナルの資料は、このポートフォリオの背後にある具体的な教室、参加者、プログラムの痕跡です。",
  artifactOneMeta: "対話セッション・APU・2025",
  artifactOneTitle: "Starting Over: Leaving, Losing, and Finding Yourself Again",
  artifactTwoMeta: "ワークショップ・シリーズ・APU・2026",
  artifactTwoTitle: "教育と学習の基礎",
  artifactThreeMeta: "招待ワークショップ・東京大学・2019",
  artifactThreeTitle: "2日間で行った三つの招待ワークショップ",
  artifactFourMeta: "プログラム資料・APU／立命館・2025",
  artifactFourTitle: "International Project Management Program",
  artifactOpen: "オリジナルのポスターを開く",
  artifactOpenMaterial: "オリジナル資料を開く",
  galleryEyebrow: "教室の内側から",
  galleryTitle: "教室が本当に動き出すと、この仕事はこんな風に見えます。",
  galleryDeck: "人が声に出して考え、考えを試し、それまで名づけられなかったことばを見つけ始めるとき、私はいちばん自分らしくなります。",
  galleryCaptionOne: "一緒に考えるための空間",
  galleryCaptionTwo: "英語で教えること：質問のための余白",
  galleryCaptionThree: "準備、テクノロジー、そして存在感",
  galleryCaptionFour: "多様な視点でできた教室",
  caseStudiesEyebrow: "実践の例",
  caseStudiesTitle: "四つのプロジェクト、四つの教室。一つの習慣――学びを見えるようにすること。",
  caseStudiesDeck: "どの事例も具体的な教育上の問題から始まり、設計上の応答を示し、参加者が何を行い、つくり、持ち帰れたかという根拠で結びます。",
  caseStudiesCtaTitle: "このアプローチを、プログラム、教育チーム、あるいは教室へ。",
  teachingEyebrow: "教育実践",
  teachingTitle: "この橋は、教室で見える形になります。",
  teachingOneTitle: "生きた実践としての異文化コミュニケーション",
  teachingOneBody: "異文化コミュニケーションの授業では、振り返り、critical incidents、学生自身の経験、多様な声を用いて、単なる言語の正確さを超えた文化理解へ向かいます。",
  teachingTwoTitle: "文化的システムとしてのビデオゲーム",
  teachingTwoBody: "ゲームと社会の授業では、学生がゲームを批判的に読み、その社会的役割を考え、ゲームについて書き、自分の企画を発表するという業界に近い課題に取り組みます。",
  teachingThreeTitle: "設計を通したファカルティ・ディベロップメント",
  teachingThreeBody: "教育開発の仕事では、包摂的な教育、EMI、カリキュラム設計、フィードバック、参加に意味を与える学習環境に焦点を当てています。",
  portfolioOneTitle: "大学院生のためのPre-FD",
  portfolioOneBody: "学習成果、授業設計、アクティブ・ラーニング、ファシリテーション、相互の学び、振り返りを扱う、将来の大学教員のための基礎プログラムです。",
  portfolioTwoTitle: "異文化学習のデザイン",
  portfolioTwoBody: "文化的差異、対話、critical incidents、包摂的な参加、意味づくりに取り組む授業とワークショップです。",
  portfolioThreeTitle: "AI、批判性、高等教育",
  portfolioThreeBody: "生成AIを教育、設計、要約、振り返りのパートナーとして考えるファカルティ・ディベロップメントです。批判的思考と責任を中心に置きます。",
  portfolioFourTitle: "教育改善とSoTL",
  portfolioFourBody: "教育上の問いを、根拠に基づく実践、よりよいフィードバック、共有できる学習デザインへ変えたい教育者を支えます。",
  samplerEyebrow: "できること",
  samplerTitle: "大学、教室、より広い社会のために用意できること。",
  samplerOneLabel: "ワークショップ形式",
  samplerOneTitle: "専門性を意図的な授業設計へ",
  samplerOneBody: "授業のアイデアから授業案へ、さらに実際に実施できる活動へ進む、短く実践的なプログラムを設計できます。",
  samplerTwoLabel: "教育の方法",
  samplerTwoTitle: "振り返りとしての異文化コミュニケーション",
  samplerTwoBody: "生活経験、構造化された対話、振り返り課題を用い、前提に気づき、文脈を読み、違いを越えて話すことを支えます。",
  samplerThreeLabel: "メディア教育",
  samplerThreeTitle: "文化的・社会的システムとしてのゲーム",
  samplerThreeBody: "ゲームを、言語、アイデンティティ、デザイン思考、解釈、文化についてのパブリックな分析を練習する場として用います。",
  samplerFourLabel: "ファカルティ・ディベロップメント",
  samplerFourTitle: "批判性と責任を伴うAI",
  samplerFourBody: "判断、倫理、専門分野の目的を手放さず、教育者がAIを発想、要約、試作、フィードバック、授業設計に使えるよう支援します。",
  editorialEvidenceNagoshi: "インタビュー・名越稔洋",
  editorialEvidenceValkyrie: "インタビュー・ヴァルキリープロファイルの開発者たち",
  writingPageEyebrow: "執筆ポートフォリオ",
  writingPageTitle: "日本からの記録、ゲーム史、そしてゲームが静かに映し出すもの。",
  writingPageDeck: "PSX Extremeのために書いたオリジナル記事からの選集です。イベント取材、日本のゲーム史、テクノロジーと市場の分析、ルポルタージュ、そしてゲームが日常生活に何をもたらすかについての考察を含みます。",
  writingChapterLabel: "執筆ポートフォリオを探す",
  writingChapterPsx: "PSX Extreme",
  writingChapterEditorial: "編集の実践",
  writingChapterFieldnotes: "取材記とTGS",
  writingChapterArchive: "記事と書籍",
  writingNote: "各原稿から二つの抜粋を、文体の見本として選びました。全文の権利はPSX Extremeに帰属します。",
  writingCtaEyebrow: "パブリック・コミュニケーション",
  writingCtaTitle: "私は、情報だけでなく文脈を求める読者のために書きます。",
  writingCtaBody: "このポートフォリオは、インタビュー、ゲスト講演、文化解説、編集協働、より広い読者に開かれた学術プロジェクトにつながります。",
  writingCtaLink: "執筆プロジェクトについて話す",
  mapEyebrow: "プロフィールの地図",
  mapTitle: "それぞれの仕事に役割を与えると、パブリックなプロフィールはより読みやすくなります。",
  mapOneTitle: "アカデミックな拠点",
  mapOneBody: "APU、異文化コミュニケーション、グローバル・ラーニング、EMI、カリキュラム設計、ファカルティ・ディベロップメントが中心にあります。",
  mapTwoTitle: "パブリックな声",
  mapTwoBody: "MazziとPSX Extremeは、日本、ゲーム、メディア文化を説明してきた長年の実践という、社会とのコミュニケーションの層です。",
  mapThreeTitle: "つなぐモチーフ",
  mapThreeBody: "共通するテーマは、人が未知の世界をどう読み、そのコードを学び、文脈を越えて伝えるかです。",
  mapFourTitle: "これからの方向",
  mapFourBody: "新しい登壇、エッセイ、研究は、この橋をより直接的に語れます。ゲーム、メディア、日本を異文化学習の場として考えることです。",
  statementEyebrow: "プロフィールをひとことで",
  statementTitle: "立命館アジア太平洋大学の助教。異文化コミュニケーション、グローバル・ラーニング、ファカルティ・ディベロップメント、日本のメディア文化の交点で活動しています。",
  statementBody: "高等教育の研究とパブリック・コミュニケーションを結び、教育者、研究者、日本からポーランドのゲームメディアへ書くライターとしての経験を生かしています。",
  essayPageEyebrow: "ポジション・エッセイ",
  essayPageTitle: "ゲーム、文化、異文化学習",
  essayPageDeck: "日本、ゲーム、パブリックな文化についての仕事が、異文化教育と高等教育の実践に属する理由を考えるエッセイです。",
  navWork: "実践",
  navWorkshops: "ワークショップ",
  navTeaching: "教育",
  navWriting: "執筆",
  navBio: "略歴",
  navResearch: "研究",
  navAchievements: "活動記録",
  navContact: "お問い合わせ",
  heroKicker: "日本の大学教員・異文化教育者・Mazziとして執筆",
  heroLede: "2009年から日本で暮らし働くなかで、文化を越えたコミュニケーションはスローガンではなく、日々向き合う仕事だと学びました。立命館アジア太平洋大学では、その経験と研究を授業、教職員向けワークショップ、多言語の学習環境へとつなげ、人々がより自信をもって参加できる場をつくっています。",
  japanYearsLabel: "日本で暮らし、働いてきた時間",
  japanSinceLabel: "2009年3月28日から",
  japanDaysLabel: "日本で過ごした日々",
  japanDaysNote: "長い一章をたどる小さな記録",
  visualTeaching: "文化を越えて教え、場をつくる",
  visualPublic: "ゲームと日本から生まれたパブリックな声",
  visualJapan: "日常の細部から見る日本",
  apuBandEyebrow: "現在のアカデミック・ホーム",
  apuBandTitle: "APUにとってグローバル・ラーニングは抽象的な理念ではありません。私が毎日入る教室そのものです。",
  apuBandBody: "別府では、異文化教育、ファカルティ・ディベロップメント、そしてパブリック・コミュニケーションの仕事が一つにつながっています。",
  heroPrimary: "ワークショップを見る",
  heroSecondary: "事例を見る",
  identityStrip: "教育開発センター・国際プログラム・大学院・多言語で教えるチームのために",
  trajectoryEyebrow: "背景",
  trajectoryTitle: "クラクフから北海道、そして別府へ。ずっと軸にあったのは言葉です。",
  trajectoryBodyOne: "クラクフで言語と文学を学んだ後、MEXT奨学生として来日し、北海道大学で情報科学の博士号を取得しました。専門は自然言語処理です。この少し珍しい経歴が、人文学、テクノロジー、教育を行き来する視点を育てました。",
  trajectoryBodyTwo: "ゲームは、私にとって日本へ向かう最初の入口の一つでした。約30年にわたりMazziとしてポーランドの読者に執筆する一方、大学では語学学習システムから異文化クラスルーム、ファカルティ・ディベロップメントまで取り組んできました。両方に共通するのは、ある世界がどう働いているかを理解し、その固有の魅力をならさずに、他者へ分かりやすく伝えることです。",
  timelineEyebrow: "いくつかの座標",
  timelineTitle: "この道のりが大切なのは、いま他の人のためにできることを変えてくれたからです。",
  timelineOneTitle: "日本での出発",
  timelineOneBody: "MEXT奨学生として来日し、言語のあいだで生きる日々の仕事を学び始めます。",
  timelineOneLink: "活動記録を見る ↗",
  timelineTwoTitle: "博士課程で言語をシステムとして捉える",
  timelineTwoBody: "北海道大学の情報科学博士課程を経て、文脈、選択、学習者経験を中心に据えるCo-MIXの語学学習システム研究へ進みました。",
  timelineTwoLink: "Co-MIXの研究を見る ↗",
  timelineThreeTitle: "教育が中心になる",
  timelineThreeBody: "英語で教えることと異文化コミュニケーションについての招待ワークショップが、研究の問いを生きた教室の仕事へつなげます。",
  timelineThreeLink: "教育実践を見る ↗",
  timelineFourTitle: "教室からの根拠",
  timelineFourBody: "15週間の研究が、学生の振り返りと実践を通じて異文化学習を可視化しました。",
  timelineFourLink: "研究を読む ↗",
  timelineFiveTitle: "APU・別府",
  timelineFiveBody: "APUでは、教育、研究、パブリック・コミュニケーションを同じ場に結びつけています。",
  timelineFiveLink: "APUのプロフィールを読む ↗",
  bioEyebrow: "仕事の進め方",
  bioTitle: "言語、文化、学びが交わる場所で働いています。",
  bioBodyOne: "私は、立命館アジア太平洋大学の助教です。異文化コミュニケーション、グローバル・ラーニング、ファカルティ・ディベロップメント、多言語高等教育における教育に取り組んでいます。教育者と学生が違いを解釈し、より深く参加し、振り返りを実践へ移せるよう、授業と専門能力開発プログラムを設計しています。",
  bioBodyTwo: "私のアカデミックな経歴は、言語と文学、日本研究、情報科学、自然言語処理を横断しています。APU着任前は北海道大学で教育・研究に携わり、英語による専門教育（EMI）、異文化コミュニケーション、カリキュラム設計、高等教育における生成AIの変化に関する授業とファカルティ・ディベロップメントを展開しました。",
  bioBodyThree: "大学での仕事と並行して、Mazziの筆名で日本、ビデオゲーム、メディア文化、日常について執筆しています。この執筆では文化を読み解く視点と分かりやすい説明をより広い読者へ届け、研究関心をジャーナリズム、ゲーム、現代日本文化と結びつけています。",
  academicEyebrow: "取り組んでいること",
  academicTitle: "文化、メディア、制度を越えて学ぶ人を支えます。",
  featureOneTitle: "学びをデザインする",
  featureOneBody: "アイデアをすぐ使える教育実践へ変える授業、活動、ファカルティ・ディベロップメントを設計します。",
  featureTwoTitle: "文化を読み解く",
  featureTwoBody: "研究と教育では、異文化コミュニケーション、意味の生成、言語と制度を越えた学びに取り組んでいます。",
  featureThreeTitle: "社会に伝える",
  featureThreeBody: "Mazziとしての執筆を通じ、大学の外の読者へ日本、ゲーム、メディア文化、日常の解釈を届けています。",
  caseEyebrow: "実践の例",
  caseTitle: "この仕事が教室に届くと、どのような形になるのか。",
  caseOneTitle: "大学教員を目指す大学院生のためのPre-FD",
  caseOneBody: "APUでは、大学院生が専門知識から出発し、1枚の授業設計図と、実際に実施・試行・改善できる活動へと進みます。",
  caseTwoTitle: "多言語クラスルームにおける異文化学習",
  caseTwoBody: "15週間の授業研究では、critical incidentsと振り返りを用い、共感、解釈、文化的自己認識を可視化しました。その成果は2023年に査読論文として発表されました。",
  caseThreeTitle: "文化を真剣に考える教材としてのゲームとメディア",
  caseThreeBody: "Video Games in Societyでは、学生が実際のレビューを書き、ゲーム企画をピッチしました。選ばれた作品はPSX Extremeに掲載され、授業は学生アンケートで4.58/5を得ました。",
  caseFourTitle: "教育デザインのための責任あるAI",
  caseFourBody: "北海道大学でのワークショップから2024年の北見工業大学での招待講演まで、AIを設計と探究の道具として扱いながら、検証と学術的判断を欠かさない姿勢を伝えています。",
  casePageLink: "事例を読む",
  workshopEyebrow: "ワークショップのご案内",
  workshopTitle: "教職員、大学院生、教育チームのための依頼型セッション。",
  workshopModelEyebrow: "設計の原則",
  workshopModelTitle: "月曜日にすぐ使えるものを持ち帰れるように。",
  workshopModelBody: "理論は簡潔にし、実際の授業、難しい対話、プログラム上の判断に取り組む時間を十分に取ります。テンプレート、仲間からのフィードバック、リハーサル、振り返りによって、所属機関に合った実用的な成果物と次の一歩をつくります。",
  workshopOutputOne: "1枚の授業設計図",
  workshopOutputTwo: "整合性のある学習活動",
  workshopOutputThree: "明確なファシリテーション指示",
  workshopOutputFour: "改善のための出口チケット",
  workshopPageLink: "ワークショップ形式を見る",
  proofEyebrow: "実績",
  proofTitle: "この仕事を具体的に示す4つのプロジェクト。",
  proofOneLabel: "2023年・北海道大学",
  proofOneTitle: "4つの実践的課題を扱うファカルティ・ディベロップメント",
  proofOneBody: "英語で教えること、異文化コミュニケーション、シラバス設計、教室におけるChatGPTへの備えを扱いました。",
  proofTwoLabel: "2024年表彰・2023年授業評価",
  proofTwoTitle: "Video Games in Society におけるExcellent Teacher選出",
  proofTwoBody: "北海道大学の2023年度Excellent Teacher選考において、授業は学生アンケート総合4.58/5を得ました。",
  proofThreeLabel: "2022年・AGH科学技術大学",
  proofThreeTitle: "国際的な教育についての招待講演",
  proofThreeBody: "ポーランド、日本、イタリアにおける教育を比較し、異文化的な文脈を議論の中心に置いたウェビナーです。",
  proofFourLabel: "2025–26年・立命館スペースマネジメントプログラム",
  proofFourTitle: "学際的な宇宙分野教育のファシリテーター",
  proofFourBody: "2年間にわたり、異文化コミュニケーション、リーダーシップ、プレゼンテーション、フィードバック、国際プロジェクト協働を、多様な学生コホートとともに支えてきました。",
  bridgeEyebrow: "一つの好奇心、二つの読者層",
  bridgeTitle: "大学での仕事と、約30年にわたるゲームについての執筆を動かしているのは同じ好奇心です。",
  bridgeBodyOne: "Mazziとして、日本からレポートを書き、制作者に取材し、現地のゲーム文化を追い、ポーランドの読者へ長文記事を届けてきました。その仕事から、印象的な細部に気づくこと、読者を尊重すること、日本を異国趣味の背景にせず文脈を伝えることを学びました。",
  bridgeBodyTwo: "教室でも同じ配慮が求められます。学生が文化を議論するとき、ゲームをピッチするとき、国際的な宇宙プロジェクトを計画するとき、私は前提に気づき、難しい考えのための言葉を見つけ、異なる考えをもつ人へ伝えることを支えます。",
  writingPageLink: "執筆ポートフォリオを見る",
  bridgeQuote: "「私はずっと、知らない世界に入り、そのルールを読み、他の人がそこに自分の道を見つけられるよう手助けすることを学んできました。」",
  identityAcademicTerm: "アカデミックな顔",
  identityAcademicDesc: "助教、高等教育研究者、ファカルティ・ディベロッパー。",
  identityPublicTerm: "パブリックな顔",
  identityPublicDesc: "日本を拠点に、ゲーム、メディア、ポップカルチャー、日常の解釈について書くライター。",
  identityAxisTerm: "共通する軸",
  identityAxisDesc: "国境を越えるコミュニケーション、学び、文化、意味。",
  essayEyebrow: "ポジション・エッセイ",
  essayTitle: "ゲームは、文化の世界をどう読むかを教えてくれる。",
  essayBody: "ゲーム、日本、パブリック・ライティング、異文化教育が、なぜ同じ知的・職業的ポートフォリオに属するのかを簡潔にまとめています。",
  essayLink: "エッセイを読む",
  archiveEyebrow: "経歴と出版物",
  archiveTitle: "根拠を確かめたい方のための、機関の記録とパブリックな仕事。",
  archiveAcademic: "研究・教育",
  archiveInstitutional: "機関での執筆",
  archivePublic: "パブリック・コミュニケーション",
  contactEyebrow: "お問い合わせ",
  contactTitle: "現実の課題を起点に、ワークショップ、授業、協働をつくりましょう。",
  contactBody: "教育開発センター、国際プログラム、大学院、多言語または異文化の学習を育てるアカデミック・チームとの協働に特に関心があります。",
  contactSignature: "教育、研究、執筆、パブリックな対話については、英語・ポーランド語・日本語でご連絡いただけます。",
  contactWorkshop: "ワークショップ形式を見る",
  contactEmail: "協働についてメールする",
  contactLinkedIn: "LinkedInを見る",
  downloadBrief: "ワークショップ概要（1ページ）をダウンロード",
  contactInstitution: "大学公式プロフィール",
  contactResearch: "研究プロフィール",
  contactProfessional: "職歴プロフィール",
  contactPublic: "パブリック・コミュニケーション",
  serviceEyebrow: "教育ポートフォリオ",
  serviceTitle: "現実の学びの課題からつくる授業、ワークショップ、セミナー",
  serviceDeck: "正課授業を担当し、実践的なワークショップを行い、大学コミュニティのためのセミナーも実施しています。北海道大学とAPUで教育の質向上に約10年取り組むなかで、一貫してきたのは、誰もが認識できる課題から始め、すぐに使える次の一歩で終えることです。",
  teachingChapterLabel: "教育ポートフォリオを探す",
  teachingChapterOverview: "概要",
  teachingChapterClasses: "授業と教材",
  teachingChapterWorkshops: "ワークショップ・セミナー",
  teachingChapterMaterials: "教材・エビデンス",
  teachingChapterTryMethod: "方法を試す",
  chapterSwipeHint: "スワイプ →",
  workshopHeroContact: "改善したいことを教えてください",
  workshopHeroBrief: "1ページの概要を見る",
  workshopStartEmail: "ワークショップについて相談する",
  serviceCtaEyebrow: "協働のご相談",
  serviceCtaTitle: "貴機関のためのワークショップをご依頼ください。",
  serviceCtaBody: "テーマ、事例、時間、参加者が持ち帰る成果物は、プログラム、教育の文脈、対象者に合わせて調整できます。",
  teachingMaterialsEyebrow: "教材デザインの実例",
  teachingMaterialsTitle: "アイデアを、使える学びへ変える4つの例。",
  teachingMaterialsDeck: "いずれも私自身が設計し、実施したオリジナルのスライドから選びました。視覚的な構造、導かれた振り返り、明確な判断の場面が、学びのプロセスをどう支えるかを示しています。",
  teachingMaterialOneTitle: "プレゼンテーションに明確な物語を与える",
  teachingMaterialOneBody: "4部構成によって、プレゼンテーションの助言を、参加者がすぐ使える記憶に残る計画ツールへ変えます。",
  teachingMaterialTwoTitle: "実際に行える活動を設計する",
  teachingMaterialTwoBody: "目的、課題、時間、グループ編成、成果物は、活動が明確で実行可能かを確かめる実践的な基準になります。",
  teachingMaterialThreeTitle: "丁寧な聴き方を見える形にする",
  teachingMaterialThreeBody: "異文化的な原則を、実際に練習できる言葉へ変えます。開かれた姿勢で聴き、文化的な配慮をもって言い換えます。",
  teachingMaterialFourTitle: "AIを安全に使える場面を判断する",
  teachingMaterialFourBody: "判断の流れは、一律のルールの代わりに、検証、責任、課題の重要性への注意を促します。",
  essayBack: "トップページへ戻る",
  backTop: "ページ上部へ",
  designStudioEyebrow: "方法を試す",
  designStudioTitle: "授業の課題を、実際に行える小さな活動へ変える。",
  designStudioDeck: "これは、授業設計とPre-FDワークショップで使っている枠組みのコンパクト版です。教室で起きる現実の課題を選び、目的・課題・時間・グループ編成・見える成果を通して、一つの実行可能な応答を形にします。",
  designStudioChallengeTitle: "課題を一つ選ぶ",
  designStudioChallengeDeck: "まずは身近な状況から始めます。よい授業設計は、流行の手法ではなく、具体的な状況から始まります。",
  designStudioResearchEyebrow: "研究との接点",
  designStudioResearchBody: "5つの問いは、意図した学習成果、活動、見える根拠のつながりを明確にします。この考え方は、構成的アラインメントとアクティブ・ラーニングの研究に基づいています。このスタジオは自動の授業案ではなく、私が実践で使う授業設計の足場です。",
  designStudioBuildTitle: "5つの選択を行う",
  designStudioBuildDeck: "一つひとつは小さな選択です。組み合わせることで、活動が自分にも参加者にも分かりやすくなります。",
  designStudioOutputEyebrow: "活動のたたき台",
  designStudioOutputNote: "短いリハーサル、仲間からの応答、または退出時のメモが、アイデアを使える根拠へ変えます。",
  designStudioCopy: "この活動案をコピーする",
};

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-japan-years]").forEach((node) => {
  node.textContent = new Date().getFullYear() - 2009;
});

const updateJapanDayCounter = () => {
  const arrival = Date.UTC(2009, 2, 28);
  const dateParts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date()).reduce((parts, part) => {
    if (part.type !== "literal") parts[part.type] = part.value;
    return parts;
  }, {});
  const today = Date.UTC(
    Number(dateParts.year),
    Number(dateParts.month) - 1,
    Number(dateParts.day),
  );
  const days = Math.max(0, Math.floor((today - arrival) / 86400000));

  document.querySelectorAll("[data-japan-days]").forEach((node) => {
    node.textContent = new Intl.NumberFormat("en-US").format(days);
  });
};

updateJapanDayCounter();
setInterval(updateJapanDayCounter, 60000);

const syncHeader = () => {
  const usesPaperHeader = header?.classList.contains("essay-header");
  header?.classList.toggle("is-scrolled", usesPaperHeader || window.scrollY > 24);
};

const setLanguage = (lang) => {
  const dictionary = translations[lang] || translations.en;
  const personName = personNames[lang] || personNames.en;
  document.documentElement.lang = lang;
  translatable.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });
  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });
  const hasRequestedPanels = [...languagePanels].some((panel) => panel.dataset.langPanel === lang);
  languagePanels.forEach((panel) => {
    const usesEnglishFallback = lang === "ja" && !hasRequestedPanels && panel.dataset.langPanel === "en";
    panel.hidden = panel.dataset.langPanel !== lang && !usesEnglishFallback;
  });
  personNameNodes.forEach((node) => {
    node.textContent = personName;
  });
  personHeadlineNodes.forEach((node) => {
    node.replaceChildren();
    if (lang === "ja") {
      node.append("マズル　ミハウ", document.createElement("br"), "マチェイ");
      return;
    }
    node.textContent = personName;
  });
  personHomeLinks.forEach((link) => {
    link.setAttribute("aria-label", `${personName} home`);
  });
  updateJapanDayCounter();
  document.dispatchEvent(new CustomEvent("identity:languagechange", { detail: { lang } }));
  localStorage.setItem("identity-language", lang);
};

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-workshop-carousel]").forEach((carousel) => {
  const slides = [...carousel.querySelectorAll("[data-carousel-slide]")];
  const previous = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const status = carousel.querySelector("[data-carousel-status]");
  let activeIndex = 0;

  const showSlide = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.hidden = !isActive;
      slide.classList.toggle("is-active", isActive);
    });
    if (status) status.textContent = `${activeIndex + 1} / ${slides.length}`;
  };

  previous?.addEventListener("click", () => showSlide(activeIndex - 1));
  next?.addEventListener("click", () => showSlide(activeIndex + 1));
});

document.querySelectorAll("[data-record-player]").forEach((player) => {
  const slides = [...player.querySelectorAll("[data-record-slide]")];
  const channels = [...player.querySelectorAll("[data-record-index]")];
  const filters = [...player.querySelectorAll("[data-record-filter]")];
  const previous = player.querySelector("[data-record-prev]");
  const next = player.querySelector("[data-record-next]");
  const screen = player.querySelector("[data-record-screen]");
  const status = player.querySelector("[data-record-status]");
  let activeIndex = 0;
  let activeFilter = "all";
  let startX = null;

  const visibleIndexes = () => slides
    .map((slide, index) => ({ slide, index }))
    .filter(({ slide }) => activeFilter === "all" || slide.dataset.recordCategory.split(" ").includes(activeFilter))
    .map(({ index }) => index);

  const showSlide = (index) => {
    const visible = visibleIndexes();
    if (!visible.length) return;
    activeIndex = visible.includes(index) ? index : visible[0];
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeIndex;
      slide.hidden = !isActive;
      slide.classList.toggle("is-active", isActive);
    });
    channels.forEach((channel, channelIndex) => {
      const isVisible = visible.includes(channelIndex);
      const isActive = channelIndex === activeIndex;
      channel.hidden = !isVisible;
      channel.classList.toggle("is-active", isActive);
      channel.setAttribute("aria-pressed", String(isActive));
    });
    const visiblePosition = visible.indexOf(activeIndex) + 1;
    if (status) status.textContent = `${String(visiblePosition).padStart(2, "0")} / ${String(visible.length).padStart(2, "0")}`;
  };

  const moveSlide = (direction) => {
    const visible = visibleIndexes();
    const position = visible.indexOf(activeIndex);
    showSlide(visible[(position + direction + visible.length) % visible.length]);
  };

  previous?.addEventListener("click", () => moveSlide(-1));
  next?.addEventListener("click", () => moveSlide(1));
  channels.forEach((channel) => {
    channel.addEventListener("click", () => showSlide(Number(channel.dataset.recordIndex)));
  });
  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      activeFilter = filter.dataset.recordFilter;
      filters.forEach((item) => {
        const isActive = item === filter;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-pressed", String(isActive));
      });
      showSlide(visibleIndexes()[0]);
    });
  });

  screen?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      moveSlide(-1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      moveSlide(1);
    }
  });

  screen?.addEventListener("pointerdown", (event) => {
    startX = event.clientX;
  });
  screen?.addEventListener("pointerup", (event) => {
    if (startX === null) return;
    const distance = event.clientX - startX;
    if (Math.abs(distance) > 44) moveSlide(distance < 0 ? 1 : -1);
    startX = null;
  });
  screen?.addEventListener("pointercancel", () => {
    startX = null;
  });

  showSlide(0);
});

const coMixWord = (word, meaning, reading, romaji, example, translation, why) => ({
  word, meaning, reading, romaji, example, translation, why,
});

const coMixExamples = {
  "en-ja": {
    language: "en",
    scenes: {
      arrival: {
        light: [
          "Before her first seminar, Aiko checks the campus ",
          coMixWord("地図", "map", "ちず", "chizu", "地図で教室を見つけます。", "I find the classroom with a map.", "The need to arrive gives the word a clear job before its meaning is revealed."),
          " and looks for the right ",
          coMixWord("教室", "classroom", "きょうしつ", "kyōshitsu / kyoushitsu", "この教室で日本語を勉強します。", "I study Japanese in this classroom.", "A familiar university situation makes the place word easy to infer."),
          ".",
        ],
        rich: [
          "Before her first ",
          coMixWord("授業", "class", "じゅぎょう", "jugyō", "授業は九時に始まります。", "The class starts at nine.", "The time and first-day setting make this event word predictable."),
          ", Aiko enters the ",
          coMixWord("入り口", "entrance", "いりぐち", "iriguchi", "入り口はあちらです。", "The entrance is over there.", "The route through a building supplies a concrete physical context."),
          ", checks the campus ",
          coMixWord("地図", "map", "ちず", "chizu", "地図で教室を見つけます。", "I find the classroom with a map.", "The same useful object is encountered inside a richer scene."),
          ", and finds the right ",
          coMixWord("教室", "classroom", "きょうしつ", "kyōshitsu / kyoushitsu", "この教室で日本語を勉強します。", "I study Japanese in this classroom.", "The destination completes the small practical problem."),
          ".",
        ],
        answer: ["教室", "きょうしつ", "kyoushitsu", "kyōshitsu"],
        focus: "教室",
        reuse: {
          question: "The map helps Aiko find the ___. Choose the word that fits.",
          options: ["教室", "課題", "手伝う"],
          answer: "教室",
        },
      },
      task: {
        light: [
          "In the ",
          coMixWord("教室", "classroom", "きょうしつ", "kyōshitsu / kyoushitsu", "この教室で日本語を勉強します。", "I study Japanese in this classroom.", "A word from the first scene returns when the story moves from finding the room to learning in it."),
          ", the teacher explains a short ",
          coMixWord("課題", "assignment / task", "かだい", "kadai", "この課題は金曜日までです。", "This assignment is due on Friday.", "The explanation and deadline show that this is something learners need to do."),
          ".",
        ],
        rich: [
          "In the ",
          coMixWord("教室", "classroom", "きょうしつ", "kyōshitsu / kyoushitsu", "この教室で日本語を勉強します。", "I study Japanese in this classroom.", "The word returns in a fresh event rather than in an isolated list."),
          ", the teacher gives a short ",
          coMixWord("課題", "assignment / task", "かだい", "kadai", "この課題は金曜日までです。", "This assignment is due on Friday.", "A task with a deadline has a clear purpose in the scene."),
          ". Aiko works with a small ",
          coMixWord("グループ", "group", "ぐるーぷ", "gurūpu", "グループで意見を話します。", "We discuss our ideas in a group.", "The social arrangement is meaningful because the story shows what the people do together."),
          " and shares one ",
          coMixWord("意見", "opinion / idea", "いけん", "iken", "意見を聞かせてください。", "Please tell me your opinion.", "The word is introduced through a communicative act, not a definition."),
          ".",
        ],
        answer: ["課題", "かだい", "kadai"],
        focus: "課題",
        reuse: {
          question: "Aiko reads the instructions before starting the ___. Choose the word that fits.",
          options: ["課題", "地図", "教室"],
          answer: "課題",
        },
      },
      support: {
        light: [
          "After the activity, Aiko has one ",
          coMixWord("質問", "question", "しつもん", "shitsumon", "質問があります。", "I have a question.", "A genuine need to ask for clarification gives the noun an immediate communicative purpose."),
          " about the ",
          coMixWord("課題", "assignment / task", "かだい", "kadai", "この課題は金曜日までです。", "This assignment is due on Friday.", "A word from the previous scene returns as part of a new, cooperative action."),
          ".",
        ],
        rich: [
          "After the ",
          coMixWord("授業", "class", "じゅぎょう", "jugyō", "授業は九時に始まります。", "The class starts at nine.", "The word now closes the learning event introduced at the beginning."),
          ", Aiko has one ",
          coMixWord("質問", "question", "しつもん", "shitsumon", "質問があります。", "I have a question.", "A question is introduced as a genuine communicative need."),
          " about the ",
          coMixWord("課題", "assignment / task", "かだい", "kadai", "この課題は金曜日までです。", "This assignment is due on Friday.", "The task appears again when the learner has to act on it."),
          ". A classmate explains the ",
          coMixWord("答え", "answer", "こたえ", "kotae", "答えを一緒に考えます。", "We think about the answer together.", "The response completes the communicative pair: a question creates the need for an answer."),
          ".",
        ],
        answer: ["質問", "しつもん", "shitsumon"],
        focus: "質問",
        reuse: {
          question: "Aiko raises her hand because she has a ___. Choose the word that fits.",
          options: ["質問", "教室", "地図"],
          answer: "質問",
        },
      },
    },
  },
  "jp-en": {
    language: "ja",
    scenes: {
      arrival: {
        light: [
          "初めてのゼミの前に、アイコはキャンパスの ",
          coMixWord("map", "地図", "ちず", "chizu", "地図で教室を見つけます。", "I find the classroom with a map.", "The need to arrive gives the word a clear job before its meaning is revealed."),
          " を見て、正しい ",
          coMixWord("classroom", "教室", "きょうしつ", "kyōshitsu / kyoushitsu", "この教室で日本語を勉強します。", "I study Japanese in this classroom.", "A familiar university situation makes the place word easy to infer."),
          " を探します。",
        ],
        rich: [
          "最初の ",
          coMixWord("class", "授業", "じゅぎょう", "jugyō", "授業は九時に始まります。", "The class starts at nine.", "The time and first-day setting make this event word predictable."),
          " の前に、アイコは ",
          coMixWord("entrance", "入り口", "いりぐち", "iriguchi", "入り口はあちらです。", "The entrance is over there.", "The route through a building supplies a concrete physical context."),
          " から入り、キャンパスの ",
          coMixWord("map", "地図", "ちず", "chizu", "地図で教室を見つけます。", "I find the classroom with a map.", "The same useful object is encountered inside a richer scene."),
          " を見て、正しい ",
          coMixWord("classroom", "教室", "きょうしつ", "kyōshitsu / kyoushitsu", "この教室で日本語を勉強します。", "I study Japanese in this classroom.", "The destination completes the small practical problem."),
          " を見つけます。",
        ],
        answer: ["classroom"],
        focus: "classroom",
        reuse: {
          question: "The map helps Aiko find the ___. 正しい英単語を選んでください。",
          options: ["classroom", "assignment", "help"],
          answer: "classroom",
        },
      },
      task: {
        light: [
          "アイコは ",
          coMixWord("classroom", "教室", "きょうしつ", "kyōshitsu / kyoushitsu", "この教室で日本語を勉強します。", "I study Japanese in this classroom.", "A word from the first scene returns when the story moves from finding the room to learning in it."),
          " で、先生が説明する短い ",
          coMixWord("assignment", "課題", "かだい", "kadai", "この課題は金曜日までです。", "This assignment is due on Friday.", "The explanation and deadline show that this is something learners need to do."),
          " を聞きます。",
        ],
        rich: [
          "アイコは ",
          coMixWord("classroom", "教室", "きょうしつ", "kyōshitsu / kyoushitsu", "この教室で日本語を勉強します。", "I study Japanese in this classroom.", "The word returns in a fresh event rather than in an isolated list."),
          " で短い ",
          coMixWord("assignment", "課題", "かだい", "kadai", "この課題は金曜日までです。", "This assignment is due on Friday.", "A task with a deadline has a clear purpose in the scene."),
          " を受け取ります。小さな ",
          coMixWord("group", "グループ", "ぐるーぷ", "gurūpu", "グループで意見を話します。", "We discuss our ideas in a group.", "The social arrangement is meaningful because the story shows what the people do together."),
          " で一つの ",
          coMixWord("opinion", "意見", "いけん", "iken", "意見を聞かせてください。", "Please tell me your opinion.", "The word is introduced through a communicative act, not a definition."),
          " を話します。",
        ],
        answer: ["assignment", "task"],
        focus: "assignment",
        reuse: {
          question: "Aiko reads the instructions before starting the ___. 正しい英単語を選んでください。",
          options: ["assignment", "map", "classroom"],
          answer: "assignment",
        },
      },
      support: {
        light: [
          "活動の後、アイコは ",
          coMixWord("question", "質問", "しつもん", "shitsumon", "質問があります。", "I have a question.", "A genuine need to ask for clarification gives the noun an immediate communicative purpose."),
          " があります。それは ",
          coMixWord("assignment", "課題", "かだい", "kadai", "この課題は金曜日までです。", "This assignment is due on Friday.", "A word from the previous scene returns as part of a new, cooperative action."),
          " についてです。",
        ],
        rich: [
          "",
          coMixWord("class", "授業", "じゅぎょう", "jugyō", "授業は九時に始まります。", "The class starts at nine.", "The word now closes the learning event introduced at the beginning."),
          " の後、アイコは ",
          coMixWord("question", "質問", "しつもん", "shitsumon", "質問があります。", "I have a question.", "A question is introduced as a genuine communicative need."),
          " を一つ持っています。 ",
          coMixWord("assignment", "課題", "かだい", "kadai", "この課題は金曜日までです。", "This assignment is due on Friday.", "The task appears again when the learner has to act on it."),
          " についてです。クラスメートと一緒に ",
          coMixWord("answer", "答え", "こたえ", "kotae", "答えを一緒に考えます。", "We think about the answer together.", "The response completes the communicative pair: a question creates the need for an answer."),
          " を考えます。",
        ],
        answer: ["question"],
        focus: "question",
        reuse: {
          question: "Aiko raises her hand because she has a ___. 正しい英単語を選んでください。",
          options: ["question", "classroom", "map"],
          answer: "question",
        },
      },
    },
  },
};

const coMixCopy = {
  en: {
    questions: {
      "en-ja": {
        arrival: "What is the Japanese target for “classroom”?",
        task: "What is the Japanese target for “assignment / task”?",
        support: "What is the Japanese target for “question”?",
      },
      "jp-en": {
        arrival: "What is the English target for “教室”?",
        task: "What is the English target for “課題”?",
        support: "What is the English target for “質問”?",
      },
    },
    summaries: {
      "en-ja": "{count} reviewed Japanese targets sit inside an otherwise English university scene.",
      "jp-en": "{count} reviewed English targets sit inside an otherwise Japanese university scene.",
    },
    answerNotes: { "en-ja": "Japanese answers may be typed in kanji, kana, or romaji.", "jp-en": "Type the English target word." },
    correct: "Correct. Now use the word once more in a fresh part of the story.",
    incorrect: "Not quite. Co-MIX now gives you a staged clue: the reading, meaning, and an example sentence. Try the answer again when you are ready.",
    empty: "Type an answer first.",
    reuseCorrect: "Exactly. You have met the word in a second context — that is the learning move Co-MIX is designed to support.",
    reuseIncorrect: "Try again. Use the situation, not a guess: what does Aiko need at this point in the story?",
    progress: "Learning path · {count} of 4",
    session: "Story · {count} of 3 scenes complete",
    completeTitle: "You completed one Co-MIX learning loop.",
    completeBody: "You inferred the target from context, recalled it{attempts}, and recognised it in a new situation. No answer was stored.",
    attemptOnce: " on the first attempt",
    attemptMany: " after {count} attempts and staged support",
    nextScene: "Continue to the next scene",
    restart: "Run the story again",
  },
  pl: {
    questions: {
      "en-ja": {
        arrival: "Jak brzmi japońskie słowo docelowe dla „classroom”?",
        task: "Jak brzmi japońskie słowo docelowe dla „assignment / task”?",
        support: "Jak brzmi japońskie słowo docelowe dla „question”?",
      },
      "jp-en": {
        arrival: "Jak brzmi angielskie słowo docelowe dla „教室”?",
        task: "Jak brzmi angielskie słowo docelowe dla „課題”?",
        support: "Jak brzmi angielskie słowo docelowe dla „質問”?",
      },
    },
    summaries: {
      "en-ja": "{count} sprawdzonych japońskich słów docelowych pojawia się w angielskiej scenie z życia uczelni.",
      "jp-en": "{count} sprawdzonych angielskich słów docelowych pojawia się w japońskiej scenie z życia uczelni.",
    },
    answerNotes: { "en-ja": "Japońskie odpowiedzi możesz wpisać kanji, kana albo rōmaji.", "jp-en": "Podaj angielskie słowo docelowe." },
    correct: "Dobrze. Teraz użyj słowa jeszcze raz w nowym fragmencie historii.",
    incorrect: "Jeszcze nie. Co-MIX uruchamia teraz etapową podpowiedź: zapis, znaczenie i zdanie przykładowe. Gdy będziesz gotowy, spróbuj ponownie.",
    empty: "Najpierw wpisz odpowiedź.",
    reuseCorrect: "Dokładnie. Spotykasz słowo w drugim kontekście — właśnie taki ruch uczenia wspiera Co-MIX.",
    reuseIncorrect: "Spróbuj jeszcze raz. Oprzyj się na sytuacji, nie na zgadywaniu: czego Aiko potrzebuje w tym momencie historii?",
    progress: "Etapy nauki · {count} z 4",
    session: "Historia · ukończono {count} z 3 scen",
    completeTitle: "Właśnie kończysz jedną pętlę uczenia Co-MIX.",
    completeBody: "Wyprowadzasz znaczenie z kontekstu, przypominasz sobie słowo{attempts} i rozpoznajesz je w nowej sytuacji. Żadna odpowiedź nie została zapisana.",
    attemptOnce: " za pierwszym razem",
    attemptMany: " po {count} próbach i etapowej podpowiedzi",
    nextScene: "Przejdź do kolejnej sceny",
    restart: "Przejdź historię jeszcze raz",
  },
};

document.querySelectorAll("[data-comix-demo]").forEach((demo) => {
  const ui = coMixCopy[demo.dataset.comixUi] || coMixCopy.en;
  const modeButtons = [...demo.querySelectorAll("[data-comix-mode]")];
  const sceneButtons = [...demo.querySelectorAll("[data-comix-scene]")];
  const densityButtons = [...demo.querySelectorAll("[data-comix-density]")];
  const passage = demo.querySelector("[data-comix-passage]");
  const methodNote = demo.querySelector("[data-comix-method-note]");
  const targetList = demo.querySelector("[data-comix-target-list]");
  const question = demo.querySelector("[data-comix-question]");
  const answerNote = demo.querySelector("[data-comix-answer-note]");
  const answer = demo.querySelector("[data-comix-answer]");
  const check = demo.querySelector("[data-comix-check]");
  const feedback = demo.querySelector("[data-comix-feedback]");
  const reveal = demo.querySelector("[data-comix-reveal]");
  const wordCard = demo.querySelector("[data-comix-word-card]");
  const wordTitle = demo.querySelector("[data-comix-word-title]");
  const wordMeaning = demo.querySelector("[data-comix-word-meaning]");
  const wordExample = demo.querySelector("[data-comix-word-example]");
  const wordWhy = demo.querySelector("[data-comix-word-why]");
  const reuse = demo.querySelector("[data-comix-reuse]");
  const reuseQuestion = demo.querySelector("[data-comix-reuse-question]");
  const reuseOptions = demo.querySelector("[data-comix-reuse-options]");
  const reuseFeedback = demo.querySelector("[data-comix-reuse-feedback]");
  const progressLabel = demo.querySelector("[data-comix-progress-label]");
  const sessionLabel = demo.querySelector("[data-comix-session-label]");
  const steps = [...demo.querySelectorAll("[data-comix-step]")];
  const completePanel = demo.querySelector("[data-comix-complete]");
  const completeTitle = demo.querySelector("[data-comix-complete-title]");
  const completeBody = demo.querySelector("[data-comix-complete-body]");
  const nextButton = demo.querySelector("[data-comix-next]");
  let mode = "en-ja";
  let scene = "arrival";
  let density = "light";
  let meaningsVisible = false;
  let attempts = 0;
  const completedScenes = new Set();
  let learning = { read: true, notice: false, recall: false, reuse: false };
  const sceneOrder = ["arrival", "task", "support"];

  const currentMode = () => coMixExamples[mode];
  const currentExample = () => currentMode().scenes[scene];
  const normaliseAnswer = (candidate) => candidate
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s\-_'’·.]+/g, "")
    .trim();

  const updateProgress = () => {
    const complete = Object.values(learning).filter(Boolean).length;
    steps.forEach((step) => {
      const completeStep = learning[step.dataset.comixStep];
      step.classList.toggle("is-complete", completeStep);
      step.classList.toggle("is-active", !completeStep && ["notice", "recall", "reuse"].find((name) => !learning[name]) === step.dataset.comixStep);
    });
    if (progressLabel) progressLabel.textContent = ui.progress.replace("{count}", String(complete));
    if (sessionLabel) sessionLabel.textContent = ui.session.replace("{count}", String(completedScenes.size));
  };

  const setFeedback = (message = "", isIncorrect = false) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.toggle("is-incorrect", isIncorrect);
  };

  const showWordCard = (target) => {
    if (!wordCard) return;
    wordCard.hidden = false;
    if (wordTitle) wordTitle.textContent = [target.word, target.reading && `· ${target.reading}`, target.romaji && `(${target.romaji})`].filter(Boolean).join(" ");
    if (wordMeaning) wordMeaning.textContent = `Meaning: ${target.meaning}`;
    if (wordExample) wordExample.textContent = target.example ? `${target.example} — ${target.translation}` : "";
    if (wordWhy) wordWhy.textContent = target.why || "";
    learning.notice = true;
    updateProgress();
  };

  const renderTargets = (targets) => {
    if (!targetList) return;
    targetList.replaceChildren();
    targetList.hidden = !meaningsVisible;
    targets.forEach((target) => {
      const item = document.createElement("span");
      item.textContent = `${target.word} · ${target.meaning}`;
      targetList.append(item);
    });
  };

  const renderReuse = () => {
    const example = currentExample();
    if (!reuse || !reuseQuestion || !reuseOptions) return;
    reuse.hidden = !learning.recall;
    reuseQuestion.textContent = example.reuse.question;
    reuseOptions.replaceChildren();
    if (reuseFeedback) reuseFeedback.textContent = "";
    example.reuse.options.forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = option;
      button.addEventListener("click", () => {
        const correct = option === example.reuse.answer;
        if (reuseFeedback) {
          reuseFeedback.textContent = correct ? ui.reuseCorrect : ui.reuseIncorrect;
          reuseFeedback.classList.toggle("is-incorrect", !correct);
        }
        if (correct) {
          learning.reuse = true;
          completedScenes.add(scene);
          document.dispatchEvent(new CustomEvent("identity:stamp", { detail: { id: "code-mixing" } }));
          reuseOptions.querySelectorAll("button").forEach((item) => { item.disabled = true; });
          if (completePanel) completePanel.hidden = false;
          if (completeTitle) completeTitle.textContent = ui.completeTitle;
          if (completeBody) {
            const attemptText = attempts === 1
              ? ui.attemptOnce
              : ui.attemptMany.replace("{count}", String(attempts));
            completeBody.textContent = ui.completeBody.replace("{attempts}", attemptText);
          }
          if (nextButton) nextButton.textContent = completedScenes.size === sceneOrder.length ? ui.restart : ui.nextScene;
          updateProgress();
        }
      });
      reuseOptions.append(button);
    });
  };

  const render = () => {
    const example = currentExample();
    const parts = example[density];
    const targets = parts.filter((part) => typeof part !== "string");
    if (!passage || !question || !answer) return;
    passage.replaceChildren();
    passage.lang = currentMode().language;
    parts.forEach((part) => {
      if (typeof part === "string") {
        passage.append(document.createTextNode(part));
        return;
      }
      const word = document.createElement("button");
      word.type = "button";
      word.className = "comix-target-word";
      word.textContent = part.word;
      word.setAttribute("aria-label", `${part.word}: ${part.meaning}`);
      word.addEventListener("click", () => {
        word.classList.add("is-revealed");
        word.textContent = `${part.word} · ${part.meaning}`;
        showWordCard(part);
      });
      passage.append(word);
    });
    question.textContent = ui.questions[mode][scene];
    if (answerNote) answerNote.textContent = ui.answerNotes[mode];
    if (methodNote) methodNote.textContent = ui.summaries[mode].replace("{count}", String(targets.length));
    answer.value = "";
    attempts = 0;
    setFeedback();
    if (wordCard) wordCard.hidden = true;
    if (completePanel) completePanel.hidden = true;
    renderTargets(targets);
    renderReuse();
    updateProgress();
  };

  const resetLearning = (resetSession = false) => {
    meaningsVisible = false;
    attempts = 0;
    learning = { read: true, notice: false, recall: false, reuse: false };
    if (resetSession) completedScenes.clear();
  };

  const updateButtons = () => {
    modeButtons.forEach((button) => {
      const active = button.dataset.comixMode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    sceneButtons.forEach((button) => {
      const active = button.dataset.comixScene === scene;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    densityButtons.forEach((button) => {
      const active = button.dataset.comixDensity === density;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  };

  const checkAnswer = () => {
    const value = normaliseAnswer(answer?.value || "");
    if (!value) return setFeedback(ui.empty, true);
    attempts += 1;
    const correct = currentExample().answer.some((accepted) => normaliseAnswer(accepted) === value);
    setFeedback(correct ? ui.correct : ui.incorrect, !correct);
    if (correct) {
      learning.recall = true;
      renderReuse();
      updateProgress();
    } else {
      const target = currentExample()[density].find((part) => typeof part !== "string" && part.word === currentExample().focus);
      if (target) showWordCard(target);
    }
  };

  modeButtons.forEach((button) => button.addEventListener("click", () => {
    mode = button.dataset.comixMode;
    resetLearning(true);
    updateButtons();
    render();
  }));
  sceneButtons.forEach((button) => button.addEventListener("click", () => {
    scene = button.dataset.comixScene;
    resetLearning();
    updateButtons();
    render();
  }));
  densityButtons.forEach((button) => button.addEventListener("click", () => {
    density = button.dataset.comixDensity;
    resetLearning(true);
    updateButtons();
    render();
  }));
  reveal?.addEventListener("click", () => {
    meaningsVisible = true;
    const target = currentExample()[density].find((part) => typeof part !== "string" && part.word === currentExample().focus);
    if (target) showWordCard(target);
    renderTargets(currentExample()[density].filter((part) => typeof part !== "string"));
  });
  check?.addEventListener("click", checkAnswer);
  answer?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkAnswer();
  });
  nextButton?.addEventListener("click", () => {
    if (completedScenes.size === sceneOrder.length) {
      completedScenes.clear();
      scene = sceneOrder[0];
    } else {
      const nextIncomplete = sceneOrder.find((item) => !completedScenes.has(item));
      scene = nextIncomplete || sceneOrder[0];
    }
    resetLearning();
    updateButtons();
    render();
    passage?.focus({ preventScroll: true });
  });
  updateButtons();
  render();
});

const teachingDesignStudioCopy = {
  en: {
    studioName: "Teaching Design Studio",
    challengeAria: "Teaching problem",
    duration: "15-minute activity",
    copySuccess: "Activity outline copied. Adapt it to your own context.",
    copyFallback: "Copying is not available in this browser. Select the outline and copy it manually.",
    levers: {
      purpose: { label: "Purpose", choices: ["Notice a pattern", "Compare two interpretations", "Make a justified choice"] },
      task: { label: "Task", choices: ["Annotate a short example", "Sort two possible responses", "Draft a two-sentence explanation"] },
      time: { label: "Time", choices: ["4 min think + 6 min share", "7 min group work + 3 min debrief", "10 min draft + 5 min revision"] },
      grouping: { label: "Grouping", choices: ["Alone → pairs", "Pairs → whole room", "Groups of three"] },
      product: { label: "Product", choices: ["One named observation", "A two-sentence claim", "One revised instruction"] },
    },
    challenges: [
      {
        id: "quiet",
        title: "The room is quiet",
        deck: "Students know the content, but few voices enter the discussion.",
        outputTitle: "From silent thinking to a shared observation",
        summary: "Give everyone a private first move, then a low-stakes bridge into dialogue.",
        defaults: [2, 0, 0, 0, 0],
      },
      {
        id: "lecture",
        title: "The explanation is too long",
        deck: "You want to interrupt a lecture without losing the thread.",
        outputTitle: "Pause the explanation; make the idea visible",
        summary: "Replace one stretch of explanation with a short act of interpretation.",
        defaults: [0, 1, 1, 2, 1],
      },
      {
        id: "emi",
        title: "Teaching through English",
        deck: "Students are handling disciplinary content and an additional language at the same time.",
        outputTitle: "Make understanding visible before moving on",
        summary: "Give participants time to phrase the concept, compare it, and revise it together.",
        defaults: [1, 2, 2, 0, 2],
      },
    ],
  },
  pl: {
    studioName: "Studio projektowania zajęć",
    challengeAria: "Problem dydaktyczny",
    duration: "Aktywność na 15 minut",
    copySuccess: "Konspekt aktywności został skopiowany. Dopasuj go do własnego kontekstu.",
    copyFallback: "Ta przeglądarka nie pozwala na kopiowanie. Zaznacz konspekt i skopiuj go ręcznie.",
    levers: {
      purpose: { label: "Cel", choices: ["Zauważyć wzorzec", "Porównać dwie interpretacje", "Podjąć uzasadnioną decyzję"] },
      task: { label: "Zadanie", choices: ["Oznaczyć krótki przykład", "Uporządkować dwie możliwe odpowiedzi", "Napisać dwuzdaniowe wyjaśnienie"] },
      time: { label: "Czas", choices: ["4 minuty samodzielnie + 6 minut w parach", "7 minut w grupie + 3 minuty omówienia", "10 minut szkicu + 5 minut poprawy"] },
      grouping: { label: "Sposób pracy", choices: ["Samodzielnie → w parach", "W parach → na forum", "W grupach trzyosobowych"] },
      product: { label: "Rezultat", choices: ["Jedna nazwana obserwacja", "Dwuzdaniowa teza", "Jedna poprawiona instrukcja"] },
    },
    challenges: [
      {
        id: "quiet",
        title: "W sali jest cicho",
        deck: "Studenci znają treść, ale niewiele osób wchodzi w rozmowę.",
        outputTitle: "Od cichego namysłu do wspólnej obserwacji",
        summary: "Daj każdej osobie prywatny pierwszy krok, a potem łagodny most do rozmowy.",
        defaults: [2, 0, 0, 0, 0],
      },
      {
        id: "lecture",
        title: "Wyjaśnienie trwa za długo",
        deck: "Chcesz przerwać wykład, nie gubiąc jednak głównego wątku.",
        outputTitle: "Zatrzymaj wyjaśnienie; pokaż, że idea została zrozumiana",
        summary: "Zastąp jeden fragment wykładu krótkim zadaniem wymagającym interpretacji.",
        defaults: [0, 1, 1, 2, 1],
      },
      {
        id: "emi",
        title: "Nauczanie przedmiotowe po angielsku",
        deck: "Studenci jednocześnie pracują z treścią dyscypliny i dodatkowym językiem.",
        outputTitle: "Uczyń rozumienie widocznym, zanim pójdziesz dalej",
        summary: "Daj uczestnikom czas na sformułowanie pojęcia, porównanie go i wspólne dopracowanie.",
        defaults: [1, 2, 2, 0, 2],
      },
    ],
  },
  ja: {
    studioName: "授業設計スタジオ",
    challengeAria: "授業の課題",
    duration: "15分の活動",
    copySuccess: "活動案をコピーしました。自分の文脈に合わせて調整してください。",
    copyFallback: "このブラウザではコピーできません。活動案を選択して手動でコピーしてください。",
    levers: {
      purpose: { label: "目的", choices: ["一つのパターンに気づく", "二つの解釈を比べる", "根拠のある判断を行う"] },
      task: { label: "課題", choices: ["短い例に注釈を付ける", "二つの応答を整理する", "二文で説明を書く"] },
      time: { label: "時間", choices: ["個人で4分 + 共有6分", "グループで7分 + 振り返り3分", "下書き10分 + 修正5分"] },
      grouping: { label: "グループ編成", choices: ["個人 → ペア", "ペア → 全体", "3人グループ"] },
      product: { label: "成果物", choices: ["名前を付けた一つの観察", "二文の主張", "改善した一つの指示文"] },
    },
    challenges: [
      {
        id: "quiet",
        title: "教室が静かすぎる",
        deck: "内容は分かっているのに、話し合いに入る人が少ない状況です。",
        outputTitle: "静かな思考から、共有できる観察へ",
        summary: "まず個人で考える入口をつくり、その後に負担の小さい対話の橋をかけます。",
        defaults: [2, 0, 0, 0, 0],
      },
      {
        id: "lecture",
        title: "説明が長くなりすぎる",
        deck: "話の流れを失わずに、講義を途中で切り替えたい状況です。",
        outputTitle: "説明を一度止め、理解を見える形にする",
        summary: "説明の一部を、短い解釈の行為に置き換えます。",
        defaults: [0, 1, 1, 2, 1],
      },
      {
        id: "emi",
        title: "英語で専門科目を教える",
        deck: "学生は専門内容と追加言語を同時に扱っています。",
        outputTitle: "先に理解を見える形にしてから進む",
        summary: "概念を言葉にし、比べ、共同で修正する時間をつくります。",
        defaults: [1, 2, 2, 0, 2],
      },
    ],
  },
};

document.querySelectorAll("[data-design-studio]").forEach((studio) => {
  const challengeList = studio.querySelector("[data-design-challenges]");
  const leverList = studio.querySelector("[data-design-levers]");
  const outputDuration = studio.querySelector("[data-design-output-duration]");
  const outputTitle = studio.querySelector("[data-design-output-title]");
  const outputSummary = studio.querySelector("[data-design-output-summary]");
  const outputParts = studio.querySelector("[data-design-output-parts]");
  const copyButton = studio.querySelector("[data-design-copy]");
  const copyStatus = studio.querySelector("[data-design-copy-status]");
  const requestedChallenge = new URLSearchParams(window.location.search).get("design");
  let selectedChallengeId = ["quiet", "lecture", "emi"].includes(requestedChallenge) ? requestedChallenge : "quiet";
  let selections = [...(teachingDesignStudioCopy.en.challenges.find((challenge) => challenge.id === selectedChallengeId)?.defaults || [2, 0, 0, 0, 0])];

  const currentLanguage = () => ["pl", "ja"].includes(document.documentElement.lang)
    ? document.documentElement.lang
    : "en";
  const currentData = () => teachingDesignStudioCopy[currentLanguage()];
  const selectedChallenge = () => currentData().challenges
    .find((challenge) => challenge.id === selectedChallengeId) || currentData().challenges[0];

  const outlineText = () => {
    const data = currentData();
    const challenge = selectedChallenge();
    const leverEntries = Object.entries(data.levers);
    return [
      data.studioName,
      "",
      challenge.outputTitle,
      challenge.summary,
      "",
      ...leverEntries.map(([, lever], index) => `${lever.label}: ${lever.choices[selections[index]]}`),
    ].join("\n");
  };

  const render = () => {
    const data = currentData();
    const challenge = selectedChallenge();
    const leverEntries = Object.entries(data.levers);
    if (!challengeList || !leverList || !outputParts) return;

    challengeList.setAttribute("aria-label", data.challengeAria);
    challengeList.replaceChildren();
    data.challenges.forEach((item) => {
      const button = document.createElement("button");
      const title = document.createElement("strong");
      const deck = document.createElement("span");
      const isSelected = item.id === challenge.id;
      button.type = "button";
      button.className = "design-studio-challenge";
      button.setAttribute("role", "radio");
      button.setAttribute("aria-checked", String(isSelected));
      button.classList.toggle("is-selected", isSelected);
      title.textContent = item.title;
      deck.textContent = item.deck;
      button.append(title, deck);
      button.addEventListener("click", () => {
        selectedChallengeId = item.id;
        selections = [...item.defaults];
        if (copyStatus) copyStatus.textContent = "";
        render();
      });
      challengeList.append(button);
    });

    leverList.replaceChildren();
    leverEntries.forEach(([, lever], leverIndex) => {
      const group = document.createElement("section");
      const heading = document.createElement("h4");
      const options = document.createElement("div");
      group.className = "design-studio-lever";
      heading.textContent = lever.label;
      options.className = "design-studio-options";
      lever.choices.forEach((choice, choiceIndex) => {
        const option = document.createElement("button");
        const isSelected = selections[leverIndex] === choiceIndex;
        option.type = "button";
        option.className = "design-studio-choice";
        option.textContent = choice;
        option.setAttribute("aria-pressed", String(isSelected));
        option.classList.toggle("is-selected", isSelected);
        option.addEventListener("click", () => {
          selections[leverIndex] = choiceIndex;
          if (copyStatus) copyStatus.textContent = "";
          render();
        });
        options.append(option);
      });
      group.append(heading, options);
      leverList.append(group);
    });

    if (outputDuration) outputDuration.textContent = data.duration;
    if (outputTitle) outputTitle.textContent = challenge.outputTitle;
    if (outputSummary) outputSummary.textContent = challenge.summary;
    outputParts.replaceChildren();
    leverEntries.forEach(([, lever], index) => {
      const pair = document.createElement("div");
      const term = document.createElement("dt");
      const definition = document.createElement("dd");
      term.textContent = lever.label;
      definition.textContent = lever.choices[selections[index]];
      pair.append(term, definition);
      outputParts.append(pair);
    });
  };

  copyButton?.addEventListener("click", async () => {
    document.dispatchEvent(new CustomEvent("identity:stamp", { detail: { id: "classroom-architect" } }));
    try {
      await navigator.clipboard.writeText(outlineText());
      if (copyStatus) copyStatus.textContent = currentData().copySuccess;
    } catch {
      if (copyStatus) copyStatus.textContent = currentData().copyFallback;
    }
  });

  document.addEventListener("identity:languagechange", render);
  render();
});

const writingGamebookCopy = {
  en: {
    scene: "Scene {step}",
    notebook: "Notebook",
    energy: "Field energy",
    energyLow: "last reserves",
    pressPass: "Press pass",
    notebookEmpty: "No observations yet — which is already an observation.",
    possibleLead: "A possible opening line",
    editorialMove: "What the route taught you",
    restart: "Start with a clean notebook",
    replay: "Try a different route",
    notes: {
      crowd: "the moving crowd",
      queue: "the queue as ritual",
      missingInvite: "the vanished invitation",
      quietBooth: "the quiet booth",
      water: "very shiny water",
      student: "a young developer",
      redWire: "the red wire",
      merch: "the merchandise queue",
      train: "the train past Chiba",
      player: "what players actually do",
    },
    start: {
      title: "Makuhari Messe. One press pass; too many stories.",
      body: "You arrive with a notebook, a badge, four hours, and the unreasonable belief that you can be everywhere. The public entrance resembles a moving wall of people. Somewhere inside, a scheduled invitation may or may not still exist. At the far edge of the hall, a small booth looks almost calm.",
      choices: [
        { label: "Read the crowd before fighting it", detail: "Treat the entrance as the first scene, not an obstacle on the way to one.", next: "crowd", note: "crowd", energy: -1 },
        { label: "Chase the invitation that may have vanished", detail: "Your name is on an old email. That is not the same as having a meeting.", next: "invite", note: "missingInvite", energy: -1 },
        { label: "Walk toward the quiet end of the hall", detail: "Ignore the loudest thing for now and look for the person with time to talk.", next: "sideHall", note: "quietBooth", energy: 0 },
      ],
    },
    crowd: {
      title: "The crowd has a logic. It is just not your logic.",
      body: "The line moves three metres, stops for eleven minutes, and then reveals that half of it is waiting for a limited tote bag. A staff member points in three directions at once. You can now either document the absurdity, attempt to enter like a professional, or accept that your real story may be happening at the door.",
      choices: [
        { label: "Ask how the line actually works", detail: "There is a difference between a queue and a social experiment with lanyards.", next: "queueLogic", note: "queue", energy: -1 },
        { label: "Use the press entrance and listen as you go", detail: "You may get inside. You may also learn why the entrance is the whole story.", next: "showFloor", note: "player", energy: -1 },
        { label: "Leave the battle for a smaller story", detail: "The show is large enough that walking away can be a reporting decision.", next: "sideHall", note: "quietBooth", energy: 0 },
      ],
    },
    queueLogic: {
      title: "The queue is not failing. It is doing exactly what a spectacle needs it to do.",
      body: "People compare wait times, trade tips, and take photos of the sign that warns them that the wait will be long. You write down a line that might become a lead. Then a new wave of visitors arrives, and the entrance becomes its own boss fight.",
      choices: [
        { label: "Enter before the next wave closes the gap", detail: "You have one clean opening. It will not remain clean.", next: "showFloor", note: "crowd", energy: -1 },
        { label: "Stay outside and write the crowd story", detail: "Sometimes the honest ending is that the event was too large to enter properly.", next: "crowdEnd", note: "queue", energy: -1 },
        { label: "Remember the missing invitation", detail: "A named contact sounds suddenly more useful than a perfectly observed queue.", next: "invite", note: "missingInvite", energy: -1 },
      ],
    },
    invite: {
      title: "The invitation exists. The person who sent it has disappeared into the global PR cloud.",
      body: "Your inbox contains an old confirmation, a venue name, and no useful reply. At the desk, nobody can quite decide whether this makes you an honoured guest or a man with an unusually optimistic phone. You could negotiate, stop refreshing, or retreat to the part of the show where no one has a schedule.",
      choices: [
        { label: "Show the email and politely improvise", detail: "A press badge, a careful smile, and the phrase ‘perhaps there has been a misunderstanding’. ", next: "showFloor", note: "missingInvite", energy: -1 },
        { label: "Stop refreshing and find an indie booth", detail: "The small stories do not usually require a calendar invitation.", next: "sideHall", note: "quietBooth", energy: 0 },
        { label: "Refresh one more time", detail: "It is never just one more time. It is a whole afternoon of refreshes.", next: "inboxEnd", note: "missingInvite", energy: -2 },
      ],
    },
    sideHall: {
      title: "At the edge of the hall, the volume drops — and the details get louder.",
      body: "A student team is explaining a handmade game to three people. Nearby, a booth sells a shirt that has somehow acquired a two-hour queue. Farther on, a giant display promises a demo so spectacular that even the queue has a queue. Your notebook is finally useful; your feet are less convinced.",
      choices: [
        { label: "Ask the student team how they made the game", detail: "Start with the maker rather than the marketing copy.", next: "studentProject", note: "student", energy: 0 },
        { label: "Investigate the merchandise queue", detail: "A physical object can explain a fandom, or consume the rest of your day.", next: "merchLine", note: "merch", energy: -1 },
        { label: "Return to the enormous demo", detail: "You have avoided it long enough. The spectacle has noticed.", next: "showFloor", note: "crowd", energy: -1 },
      ],
    },
    showFloor: {
      title: "Inside, every screen is trying to become your whole article.",
      body: "A closed demonstration offers new hardware, a major game promises a legendary fifteen-minute slot, and a student project on a folding table has a suspicious-looking box with one red wire. You do not have time for all of them. That is the point.",
      choices: [
        { label: "Enter the closed demo about ‘very shiny water’", detail: "Technical progress is real; so is the question of how to describe it without sounding like a brochure.", next: "waterDemo", note: "water", energy: -1 },
        { label: "Sit down at the red-wire student project", detail: "There may be a bomb. There is definitely a cardboard controller.", next: "studentProject", note: "redWire", energy: 0 },
        { label: "Join the legendary game queue", detail: "Twenty minutes of play may cost you several hours and your remaining personality.", next: "monsterLine", note: "queue", energy: -2 },
      ],
    },
    waterDemo: {
      title: "The water is, undeniably, very shiny.",
      body: "A host explains light, droplets, reflections, and the future. Someone repeats that the water is ‘very shiny now’. You could ask for specifications, make a small joke about fishing in it, or watch the room instead of the screen. Each option gives you a different article — and a different degree of social risk.",
      choices: [
        { label: "Ask what changed technically", detail: "Useful information, though the answer may sound like a press release in a lab coat.", next: "detail", note: "water", energy: -1 },
        { label: "Ask whether you can fish in the water now", detail: "An unnecessary question can still reveal whether a room is capable of laughing.", next: "humanMoment", note: "water", energy: 0 },
        { label: "Watch the people, not the pixels", detail: "A collective lean forward is sometimes better evidence than a spec sheet.", next: "humanMoment", note: "player", energy: 0 },
      ],
    },
    studentProject: {
      title: "The student project has a red wire. Naturally, you are invited to choose.",
      body: "The team explains that the wrong decision will trigger a theatrical consequence. The right decision will probably do the same, but with less steam. Their enthusiasm is immediate, slightly chaotic, and much more memorable than the huge booth behind them.",
      choices: [
        { label: "Cut the red wire", detail: "It is the obvious choice. That is why it is almost certainly the wrong one.", next: "redWireEnd", note: "redWire", energy: 0 },
        { label: "Ask how they built the controller", detail: "Follow the labour, the uncertainty, and the reasons someone makes a game at all.", next: "detail", note: "student", energy: 0 },
        { label: "Hand the tool back and observe players", detail: "Watch what happens when strangers become a temporary audience.", next: "humanMoment", note: "player", energy: 0 },
      ],
    },
    monsterLine: {
      title: "The demo is fifteen minutes. The waiting time is an entire minor novel.",
      body: "You have progressed far enough to see the screen and not far enough to remember why you began. Around you, strangers debate combat systems, compare snacks, and calculate whether the game is worth the loss of an afternoon. This is excellent material. It is also your last useful hour.",
      choices: [
        { label: "Stay and write from inside the queue", detail: "The wait becomes the feature: anticipation, devotion, and logistics in one air-conditioned corridor.", next: "detail", note: "queue", energy: -1 },
        { label: "Escape toward the train before your body protests", detail: "The report can survive. Your connection at Chiba may not.", next: "trainEnd", note: "train", energy: -1 },
        { label: "Leave and buy the ridiculous shirt instead", detail: "There are worse editorial decisions, although they are difficult to name right now.", next: "merchLine", note: "merch", energy: -1 },
      ],
    },
    merchLine: {
      title: "The shirt is limited. Your time is more limited.",
      body: "The line contains collectors, tired journalists, and at least one person who has clearly done this before. You begin to understand that objects are not souvenirs here: they are proof that someone was present. Your notebook catches the thought just as your energy starts to leave the building.",
      choices: [
        { label: "Write about the object and walk away", detail: "A small purchase can be a portable history of a much larger event.", next: "detail", note: "merch", energy: -1 },
        { label: "Stay until the last train becomes a rumour", detail: "You know exactly how this story ends: sleeping past your station.", next: "trainEnd", note: "train", energy: -2 },
      ],
    },
    humanMoment: {
      title: "The room laughs. That is more useful than the perfect quotation.",
      body: "For a moment, the event becomes a room full of people rather than a machine for releasing products. You write down the response — the pause, the grin, the person translating a joke for a friend. This is the material that makes context feel lived rather than announced.",
      choices: [
        { label: "Keep the small detail and turn it into a lead", detail: "Trust the scene. Explain the industry later.", next: "detail", note: "player", energy: 0 },
        { label: "Chase one more major story", detail: "The desire to be everywhere is the final boss of field reporting.", next: "trainEnd", note: "train", energy: -2 },
      ],
    },
    detail: {
      kind: "Your field note became a feature",
      title: "You stop looking for the definitive story and find the usable one.",
      body: "The notebook now contains fragments instead of a grand theory: a queue, an awkward invitation, a young maker, an absurd wire, a line about water. Back at the desk, that is enough. The work is to arrange these details until the reader can enter the place and see why it mattered.",
      lesson: "Editorial move: strong reporting is not collecting everything. It is choosing the details that allow a larger world to appear.",
      lead: "The Tokyo Game Show did not begin with a trailer. It began with",
    },
    crowdEnd: {
      kind: "Your field note became a crowd story",
      title: "You never really get inside. The story gets inside anyway.",
      body: "The doors remain somewhere beyond a human weather system of bags, signs, and patient determination. Rather than pretending the obstacle did not exist, you write from it. The scale of the event becomes visible precisely because it refuses to be convenient.",
      lesson: "Editorial move: a limitation can be a truthful angle when you describe what it reveals rather than what it prevents.",
      lead: "Before the first screen could be seen, Tokyo Game Show had already become",
    },
    inboxEnd: {
      kind: "Your field note became a comic failure",
      title: "The inbox wins. It never writes back.",
      body: "By the time you admit that the invitation is not coming, you have acquired a new professional skill: recognising when an email thread has become a small tragicomedy. You leave with no exclusive demonstration, but with a precise memory of how international events occasionally run on optimism and expired contact details.",
      lesson: "Editorial move: keep the administrative absurdity when it says something honest about the work around an event.",
      lead: "The most exclusive room at Tokyo Game Show was not behind a velvet rope. It was behind",
    },
    redWireEnd: {
      kind: "Your field note became a small explosion",
      title: "You cut the red wire. Steam, noise, applause.",
      body: "No actual danger occurs, except perhaps to your dignity. The team laughs, the cardboard device performs exactly as promised, and the giant booths around you suddenly look less alive. You have not found the biggest game at the show. You have found a reason people make games in the first place.",
      lesson: "Editorial move: let a playful failure reveal the labour, risk, and generosity behind a creative project.",
      lead: "At Tokyo Game Show, the loudest explosion I heard came from",
    },
    trainEnd: {
      kind: "Your field note became a journey home",
      title: "You wake up one stop past where you meant to be. Then several more.",
      body: "The train has carried you beyond Chiba while your notebook slips off your knee. It is not a glamorous ending, but it is the correct one: field reporting has a body, a timetable, and limits. Tomorrow, the notes will still contain a story. Tonight, they contain a map back.",
      lesson: "Editorial move: allow the logistics of a day to remain in the frame; they are part of how a place is actually experienced.",
      lead: "By the time the Tokyo Game Show day ended, the most ambitious piece of navigation involved",
    },
  },
  pl: {
    scene: "Scena {step}",
    notebook: "Notatnik",
    energy: "Energia w terenie",
    energyLow: "ostatnie rezerwy",
    pressPass: "Akredytacja prasowa",
    notebookEmpty: "Jeszcze bez obserwacji — co samo w sobie jest już obserwacją.",
    possibleLead: "Możliwy lead tekstu",
    editorialMove: "Czego uczy ta trasa",
    restart: "Zacznij z czystym notatnikiem",
    replay: "Spróbuj innej trasy",
    notes: {
      crowd: "ruchomy tłum",
      queue: "kolejka jako rytuał",
      missingInvite: "zaginione zaproszenie",
      quietBooth: "ciche stoisko",
      water: "bardzo błyszcząca woda",
      student: "młody twórca",
      redWire: "czerwony kabel",
      merch: "kolejka po gadżety",
      train: "pociąg za Chibą",
      player: "to, co naprawdę robią gracze",
    },
    start: {
      title: "Makuhari Messe. Jedna akredytacja, za dużo historii.",
      body: "Przyjeżdżasz z notatnikiem, identyfikatorem, czterema godzinami i nieracjonalnym przekonaniem, że da się być wszędzie. Wejście dla publiczności przypomina ruchomy mur ludzi. Gdzieś w środku istnieje — albo już nie istnieje — spotkanie z zaproszenia. Na skraju hali niewielkie stoisko wygląda niemal spokojnie.",
      choices: [
        { label: "Najpierw przeczytaj tłum, zamiast z nim walczyć", detail: "Potraktuj wejście jak pierwszą scenę reportażu, a nie przeszkodę w drodze do niej.", next: "crowd", note: "crowd", energy: -1 },
        { label: "Ścigaj zaproszenie, które mogło zniknąć", detail: "Twoje nazwisko jest w starym mailu. To nie to samo co umówione spotkanie.", next: "invite", note: "missingInvite", energy: -1 },
        { label: "Idź w stronę cichego końca hali", detail: "Na razie zignoruj najgłośniejsze rzeczy i znajdź kogoś, kto ma czas porozmawiać.", next: "sideHall", note: "quietBooth", energy: 0 },
      ],
    },
    crowd: {
      title: "Tłum ma swoją logikę. Po prostu nie jest to twoja logika.",
      body: "Kolejka przesuwa się o trzy metry, zatrzymuje na jedenaście minut, a potem okazuje się, że połowa czeka na limitowaną torbę. Pracownik jednocześnie wskazuje trzy kierunki. Możesz opisać absurd, spróbować wejść jak profesjonalista albo przyjąć, że prawdziwa historia dzieje się już przy drzwiach.",
      choices: [
        { label: "Zapytaj, jak właściwie działa ta kolejka", detail: "Jest różnica między kolejką a eksperymentem społecznym z identyfikatorami.", next: "queueLogic", note: "queue", energy: -1 },
        { label: "Wejdź wejściem prasowym i słuchaj po drodze", detail: "Może uda się wejść. Może dowiesz się też, dlaczego samo wejście jest całą historią.", next: "showFloor", note: "player", energy: -1 },
        { label: "Porzuć bitwę na rzecz mniejszej historii", detail: "Targi są na tyle wielkie, że odejście od nich może być decyzją reporterską.", next: "sideHall", note: "quietBooth", energy: 0 },
      ],
    },
    queueLogic: {
      title: "Kolejka nie zawodzi. Robi dokładnie to, czego potrzebuje widowisko.",
      body: "Ludzie porównują czasy oczekiwania, wymieniają się wskazówkami i fotografują znak ostrzegający, że czekanie będzie długie. Zapisujesz zdanie, z którego może powstać lead. Wtedy nadchodzi kolejna fala odwiedzających i wejście zmienia się w bossa, którego nie da się ominąć.",
      choices: [
        { label: "Wejdź, zanim kolejna fala zamknie przejście", detail: "Masz jedno czyste okno. Nie pozostanie czyste długo.", next: "showFloor", note: "crowd", energy: -1 },
        { label: "Zostań na zewnątrz i napisz historię tłumu", detail: "Czasem uczciwe zakończenie brzmi: wydarzenie było za wielkie, by naprawdę do niego wejść.", next: "crowdEnd", note: "queue", energy: -1 },
        { label: "Przypomnij sobie o zaginionym zaproszeniu", detail: "Nagle kontakt z imienia i nazwiska brzmi użyteczniej niż perfekcyjnie zaobserwowana kolejka.", next: "invite", note: "missingInvite", energy: -1 },
      ],
    },
    invite: {
      title: "Zaproszenie istnieje. Osoba, która je wysłała, zniknęła w globalnej chmurze PR-u.",
      body: "W skrzynce masz stare potwierdzenie, nazwę miejsca i brak odpowiedzi. Przy stanowisku nikt nie potrafi zdecydować, czy to czyni cię honorowym gościem, czy człowiekiem z wyjątkowo optymistycznym telefonem. Możesz negocjować, przestać odświeżać pocztę albo uciec tam, gdzie nikt nie pilnuje harmonogramu.",
      choices: [
        { label: "Pokaż mail i uprzejmie improwizuj", detail: "Identyfikator prasowy, ostrożny uśmiech i fraza: „być może doszło do nieporozumienia”.", next: "showFloor", note: "missingInvite", energy: -1 },
        { label: "Przestań odświeżać i znajdź stoisko indie", detail: "Mniejsze historie zwykle nie wymagają wpisu w kalendarzu.", next: "sideHall", note: "quietBooth", energy: 0 },
        { label: "Odśwież pocztę jeszcze raz", detail: "To nigdy nie jest tylko raz. To całe popołudnie odświeżeń.", next: "inboxEnd", note: "missingInvite", energy: -2 },
      ],
    },
    sideHall: {
      title: "Na skraju hali głośność spada — a szczegóły robią się wyraźniejsze.",
      body: "Zespół studencki tłumaczy trzem osobom działanie własnej gry. Obok stoisko sprzedaje koszulkę, która w tajemniczy sposób dorobiła się dwugodzinnej kolejki. Dalej gigantyczny ekran obiecuje demo tak spektakularne, że nawet kolejka ma kolejkę. Notatnik wreszcie się przydaje. Stopy są mniej zachwycone.",
      choices: [
        { label: "Zapytaj studentów, jak zrobili swoją grę", detail: "Zacznij od twórcy, a nie od tekstu marketingowego.", next: "studentProject", note: "student", energy: 0 },
        { label: "Zbadaj kolejkę po gadżety", detail: "Fizyczny przedmiot może objaśnić fandom — albo pożreć resztę dnia.", next: "merchLine", note: "merch", energy: -1 },
        { label: "Wróć do wielkiego dema", detail: "Wystarczająco długo go unikałeś. Widowisko cię zauważyło.", next: "showFloor", note: "crowd", energy: -1 },
      ],
    },
    showFloor: {
      title: "W środku każdy ekran próbuje zostać całym twoim artykułem.",
      body: "Zamknięte demo pokazuje nowy sprzęt, wielka gra obiecuje legendarny piętnastominutowy slot, a projekt studencki na składanym stoliku ma podejrzanie wyglądające pudełko z jednym czerwonym kablem. Nie masz czasu na wszystko. I właśnie o to chodzi.",
      choices: [
        { label: "Wejdź na zamknięte demo o „bardzo błyszczącej wodzie”", detail: "Postęp techniczny jest realny, ale pozostaje pytanie, jak opisać go bez brzmienia jak folder reklamowy.", next: "waterDemo", note: "water", energy: -1 },
        { label: "Usiądź przy studenckim projekcie z czerwonym kablem", detail: "Może to bomba. Na pewno kartonowy kontroler.", next: "studentProject", note: "redWire", energy: 0 },
        { label: "Stań w kolejce do legendarnej gry", detail: "Dwadzieścia minut gry może kosztować kilka godzin i resztkę osobowości.", next: "monsterLine", note: "queue", energy: -2 },
      ],
    },
    waterDemo: {
      title: "Woda jest, bez dwóch zdań, bardzo błyszcząca.",
      body: "Prowadzący opowiada o świetle, kroplach, odbiciach i przyszłości. Ktoś powtarza, że „teraz woda naprawdę mocno błyszczy”. Możesz zapytać o specyfikację, zażartować, że może dałoby się w niej łowić ryby, albo patrzeć na salę zamiast na ekran. Każda opcja daje inny tekst — i inny poziom ryzyka towarzyskiego.",
      choices: [
        { label: "Zapytaj, co technicznie się zmieniło", detail: "Pożyteczna informacja, choć odpowiedź może brzmieć jak informacja prasowa w fartuchu laboratoryjnym.", next: "detail", note: "water", energy: -1 },
        { label: "Zapytaj, czy można już łowić ryby w tej wodzie", detail: "Niekonieczne pytanie też może pokazać, czy sala umie się śmiać.", next: "humanMoment", note: "water", energy: 0 },
        { label: "Patrz na ludzi, nie na piksele", detail: "Wspólne pochylenie się do przodu bywa lepszym dowodem niż tabelka ze specyfikacją.", next: "humanMoment", note: "player", energy: 0 },
      ],
    },
    studentProject: {
      title: "Projekt studencki ma czerwony kabel. Oczywiście możesz go wybrać.",
      body: "Zespół tłumaczy, że zła decyzja wywoła teatralną konsekwencję. Dobra decyzja prawdopodobnie też, tylko z mniejszą ilością pary. Ich entuzjazm jest natychmiastowy, lekko chaotyczny i znacznie bardziej zapamiętywalny niż wielkie stoisko za ich plecami.",
      choices: [
        { label: "Przetnij czerwony kabel", detail: "To oczywisty wybór. Właśnie dlatego prawie na pewno zły.", next: "redWireEnd", note: "redWire", energy: 0 },
        { label: "Zapytaj, jak zbudowali kontroler", detail: "Pójdź za pracą, niepewnością i powodami, dla których ktoś w ogóle tworzy grę.", next: "detail", note: "student", energy: 0 },
        { label: "Oddaj narzędzie i obserwuj graczy", detail: "Zobacz, co dzieje się, gdy obcy ludzie na chwilę stają się publicznością.", next: "humanMoment", note: "player", energy: 0 },
      ],
    },
    monsterLine: {
      title: "Demo trwa piętnaście minut. Czekanie to cała mała powieść.",
      body: "Doszedłeś do miejsca, z którego widać ekran, ale nie tak daleko, by pamiętać, po co tu stanąłeś. Wokół obcy ludzie dyskutują o systemie walki, porównują przekąski i wyliczają, czy gra jest warta straconego popołudnia. To znakomity materiał. To także twoja ostatnia użyteczna godzina.",
      choices: [
        { label: "Zostań i napisz tekst z wnętrza kolejki", detail: "Czekanie staje się reportażem: oczekiwanie, oddanie i logistyka w jednym klimatyzowanym korytarzu.", next: "detail", note: "queue", energy: -1 },
        { label: "Uciekaj do pociągu, zanim ciało zaprotestuje", detail: "Reportaż przetrwa. Przesiadka w Chibie może nie.", next: "trainEnd", note: "train", energy: -1 },
        { label: "Wyjdź i kup absurdalną koszulkę", detail: "Są gorsze decyzje redakcyjne, choć teraz trudno je wymienić.", next: "merchLine", note: "merch", energy: -1 },
      ],
    },
    merchLine: {
      title: "Koszulka jest limitowana. Twój czas jeszcze bardziej.",
      body: "W kolejce stoją kolekcjonerzy, zmęczeni dziennikarze i przynajmniej jedna osoba, która robiła to już wcześniej. Zaczynasz rozumieć, że przedmioty nie są tu pamiątkami: są dowodem obecności. Notatnik łapie tę myśl dokładnie wtedy, gdy energia opuszcza budynek.",
      choices: [
        { label: "Napisz o przedmiocie i idź dalej", detail: "Mały zakup może być przenośną historią znacznie większego wydarzenia.", next: "detail", note: "merch", energy: -1 },
        { label: "Zostań, aż ostatni pociąg stanie się plotką", detail: "Doskonale wiesz, jak kończy się ta opowieść: snem za własną stacją.", next: "trainEnd", note: "train", energy: -2 },
      ],
    },
    humanMoment: {
      title: "Sala się śmieje. To jest użyteczniejsze niż idealny cytat.",
      body: "Przez chwilę wydarzenie przestaje być maszyną do wypuszczania produktów, a staje się pokojem pełnym ludzi. Zapisujesz odpowiedź — pauzę, uśmiech, osobę tłumaczącą żart przyjacielowi. To materiał, dzięki któremu kontekst jest przeżyty, a nie tylko ogłoszony.",
      choices: [
        { label: "Zachowaj mały szczegół i zrób z niego lead", detail: "Zaufaj scenie. Branżę wyjaśnisz później.", next: "detail", note: "player", energy: 0 },
        { label: "Ścigaj jeszcze jedną wielką historię", detail: "Chęć bycia wszędzie jest ostatnim bossem reportażu w terenie.", next: "trainEnd", note: "train", energy: -2 },
      ],
    },
    detail: {
      kind: "Twoja notatka zamieniła się w reportaż",
      title: "Przestajesz szukać definitywnej historii i znajdujesz tę, którą da się opowiedzieć.",
      body: "Notatnik zawiera teraz fragmenty zamiast wielkiej teorii: kolejkę, niezręczne zaproszenie, młodego twórcę, absurdalny kabel, zdanie o wodzie. Przy biurku to wystarczy. Praca polega na takim ułożeniu szczegółów, by czytelnik mógł wejść w to miejsce i zrozumieć, dlaczego było ważne.",
      lesson: "Ruch redakcyjny: dobre reporterstwo nie polega na zebraniu wszystkiego. Polega na wybraniu detali, dzięki którym pojawia się większy świat.",
      lead: "Tokyo Game Show nie zaczął się od zwiastuna. Zaczął się od",
    },
    crowdEnd: {
      kind: "Twoja notatka zamieniła się w historię tłumu",
      title: "Właściwie nie wchodzisz do środka. Historia i tak wchodzi do ciebie.",
      body: "Drzwi pozostają gdzieś za ludzkim systemem pogodowym z toreb, znaków i cierpliwej determinacji. Zamiast udawać, że przeszkoda nie istnieje, piszesz właśnie z niej. Skala wydarzenia staje się widoczna dlatego, że odmawia bycia wygodna.",
      lesson: "Ruch redakcyjny: ograniczenie może być uczciwym kątem, jeśli opisujesz to, co odsłania, a nie tylko to, co uniemożliwia.",
      lead: "Zanim udało się zobaczyć pierwszy ekran, Tokyo Game Show zdążył już stać się",
    },
    inboxEnd: {
      kind: "Twoja notatka zamieniła się w komedię porażki",
      title: "Skrzynka odbiorcza wygrywa. I nigdy nie odpisuje.",
      body: "Gdy przyznajesz w końcu, że zaproszenie nie nadejdzie, zdobywasz nową umiejętność zawodową: rozpoznawanie chwili, w której wątek mailowy staje się małą tragikomedią. Nie masz ekskluzywnego dema, ale zostaje precyzyjne wspomnienie o tym, że międzynarodowe wydarzenia czasami działają na optymizmie i wygasłych kontaktach.",
      lesson: "Ruch redakcyjny: zachowaj administracyjny absurd, jeśli mówi coś prawdziwego o pracy wokół wydarzenia.",
      lead: "Najbardziej ekskluzywny pokój na Tokyo Game Show nie był za aksamitną liną. Był za",
    },
    redWireEnd: {
      kind: "Twoja notatka zamieniła się w małą eksplozję",
      title: "Przecinasz czerwony kabel. Para, hałas, brawa.",
      body: "Nie dzieje się nic niebezpiecznego, może poza drobnym uszczerbkiem dla godności. Kartonowe urządzenie działa dokładnie zgodnie z obietnicą, zespół się śmieje, a wielkie stoiska wokół nagle wydają się mniej żywe. Nie znalazłeś największej gry na targach. Znalazłeś powód, dla którego ludzie w ogóle robią gry.",
      lesson: "Ruch redakcyjny: pozwól, by zabawna porażka odsłoniła pracę, ryzyko i hojność stojące za twórczym projektem.",
      lead: "Najgłośniejsza eksplozja, jaką usłyszałem na Tokyo Game Show, dobiegła z",
    },
    trainEnd: {
      kind: "Twoja notatka zamieniła się w podróż do domu",
      title: "Budzisz się jedną stację za daleko. Potem jeszcze kilka.",
      body: "Pociąg zabrał cię za Chibę, a notatnik zsuwa się z kolan. To nie jest efektowne zakończenie, ale właściwe: reportaż w terenie ma ciało, rozkład jazdy i granice. Jutro w notatkach nadal będzie historia. Dzisiaj jest w nich mapa powrotna.",
      lesson: "Ruch redakcyjny: nie wycinaj z kadru logistyki dnia; ona też jest częścią realnego doświadczenia miejsca.",
      lead: "Pod koniec dnia na Tokyo Game Show najbardziej ambitną czynnością nawigacyjną było",
    },
  },
};

document.querySelectorAll("[data-writing-gamebook]").forEach((gamebook) => {
  const language = gamebook.dataset.gameLanguage === "pl" ? "pl" : "en";
  const copy = writingGamebookCopy[language];
  const stage = gamebook.querySelector("[data-writing-game-stage]");
  let currentId = "start";
  let step = 1;
  let energy = 4;
  let notes = [];

  const createStatus = () => {
    const status = document.createElement("div");
    const scene = document.createElement("span");
    const notebook = document.createElement("span");
    const fieldEnergy = document.createElement("span");
    status.className = "writing-gamebook-status";
    scene.textContent = copy.scene.replace("{step}", String(step));
    notebook.textContent = `${copy.notebook}: ${notes.length}`;
    fieldEnergy.textContent = `${copy.energy}: ${"●".repeat(energy)}${"○".repeat(4 - energy)}`;
    status.append(scene, notebook, fieldEnergy);
    return status;
  };

  const createNotebook = () => {
    const notebook = document.createElement("div");
    const label = document.createElement("strong");
    const content = document.createElement("div");
    notebook.className = "writing-gamebook-notebook";
    label.textContent = copy.notebook;
    if (notes.length === 0) {
      content.textContent = copy.notebookEmpty;
    } else {
      notes.forEach((note) => {
        const chip = document.createElement("span");
        chip.textContent = copy.notes[note];
        content.append(chip);
      });
    }
    notebook.append(label, content);
    return notebook;
  };

  const buildLead = (scene) => {
    const preferredNotes = ["water", "student", "redWire", "queue", "crowd", "merch", "train", "missingInvite", "player", "quietBooth"];
    const firstNote = preferredNotes.find((note) => notes.includes(note));
    const detail = firstNote ? copy.notes[firstNote] : copy.pressPass.toLowerCase();
    return `${scene.lead} ${detail}.`;
  };

  const restart = () => {
    currentId = "start";
    step = 1;
    energy = 4;
    notes = [];
    render();
  };

  const render = () => {
    const scene = copy[currentId];
    if (!stage || !scene) return;
    stage.replaceChildren();

    if (scene.choices) {
      const heading = document.createElement("h3");
      const body = document.createElement("p");
      const choices = document.createElement("div");
      heading.textContent = scene.title;
      body.textContent = scene.body;
      choices.className = "writing-gamebook-choices";
      scene.choices.forEach((choice) => {
        const button = document.createElement("button");
        const label = document.createElement("strong");
        const detail = document.createElement("span");
        button.type = "button";
        button.className = "writing-gamebook-choice";
        label.textContent = choice.label;
        detail.textContent = choice.detail;
        button.append(label, detail);
        button.addEventListener("click", () => {
          currentId = choice.next;
          step += 1;
          energy = Math.max(0, Math.min(4, energy + (choice.energy || 0)));
          if (choice.note && !notes.includes(choice.note)) notes = [...notes, choice.note];
          render();
        });
        choices.append(button);
      });
      stage.append(createStatus(), heading, body, createNotebook(), choices);
      return;
    }

    const result = document.createElement("div");
    const kind = document.createElement("strong");
    const heading = document.createElement("h3");
    const body = document.createElement("p");
    const leadLabel = document.createElement("strong");
    const lead = document.createElement("p");
    const lessonLabel = document.createElement("strong");
    const lesson = document.createElement("p");
    const actions = document.createElement("div");
    const restartButton = document.createElement("button");
    const replayButton = document.createElement("button");
    result.className = "writing-gamebook-result";
    kind.textContent = scene.kind;
    heading.textContent = scene.title;
    body.textContent = scene.body;
    leadLabel.textContent = copy.possibleLead;
    lead.className = "writing-gamebook-lead";
    lead.textContent = `“${buildLead(scene)}”`;
    lessonLabel.textContent = copy.editorialMove;
    lesson.className = "writing-gamebook-lesson";
    lesson.textContent = scene.lesson;
    document.dispatchEvent(new CustomEvent("identity:stamp", { detail: { id: "tgs-survivor" } }));
    actions.className = "writing-gamebook-actions";
    restartButton.type = "button";
    restartButton.className = "writing-gamebook-restart";
    restartButton.textContent = copy.restart;
    replayButton.type = "button";
    replayButton.className = "writing-gamebook-restart writing-gamebook-replay";
    replayButton.textContent = copy.replay;
    restartButton.addEventListener("click", restart);
    replayButton.addEventListener("click", restart);
    actions.append(replayButton, restartButton);
    result.append(createStatus(), kind, heading, body, createNotebook(), leadLabel, lead, lessonLabel, lesson, actions);
    stage.append(result);
  };

  render();
});

document.querySelectorAll("[data-portfolio-chapter-nav]").forEach((chapterNavigation) => {
  const chapterLinks = [...chapterNavigation.querySelectorAll("[data-portfolio-chapter-link]")];
  let activeChapter = "";
  const getVisibleChapterTargets = () => [...document.querySelectorAll("[data-portfolio-chapter-target]")]
    .filter((target) => !target.hidden && target.getClientRects().length > 0);

  const setActiveChapter = (chapter) => {
    chapterLinks.forEach((link) => {
      const isActive = link.dataset.portfolioChapterLink === chapter;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });

    if (activeChapter === chapter) return;
    activeChapter = chapter;
    const activeLink = chapterLinks.find((link) => link.dataset.portfolioChapterLink === chapter);
    if (activeLink && window.matchMedia("(max-width: 860px)").matches) {
      activeLink.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  const updateChapter = () => {
    const targets = getVisibleChapterTargets();
    if (targets.length === 0) return;
    const headerOffset = header?.getBoundingClientRect().height || 0;
    const chapterOffset = chapterNavigation.getBoundingClientRect().height || 0;
    const marker = headerOffset + chapterOffset + 36;
    let activeTarget = targets[0];

    targets.forEach((target) => {
      if (target.getBoundingClientRect().top <= marker) activeTarget = target;
    });

    setActiveChapter(activeTarget.dataset.portfolioChapterTarget);
  };

  chapterLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const chapter = link.dataset.portfolioChapterLink;
      const target = getVisibleChapterTargets()
        .find((item) => item.dataset.portfolioChapterTarget === chapter);
      if (!target) return;

      event.preventDefault();
      const headerOffset = header?.getBoundingClientRect().height || 0;
      const chapterOffset = chapterNavigation.getBoundingClientRect().height || 0;
      const top = window.scrollY + target.getBoundingClientRect().top - headerOffset - chapterOffset - 24;
      window.scrollTo({ top, behavior: "smooth" });
      setActiveChapter(chapter);
    });
  });

  window.addEventListener("scroll", updateChapter, { passive: true });
  window.addEventListener("resize", updateChapter);
  document.addEventListener("identity:languagechange", () => {
    window.requestAnimationFrame(updateChapter);
  });
  updateChapter();
});

syncHeader();
setLanguage(localStorage.getItem("identity-language") || "en");
window.addEventListener("scroll", syncHeader, { passive: true });

/* --------------------------------------------------------------------------
   Explorer Passport · a local, optional stamp rally across the portfolio
   -------------------------------------------------------------------------- */

(() => {
  const storageKey = "mmm-explorer-passport-v1";
  const stampOrder = [
    "classroom-architect",
    "code-mixing",
    "tgs-survivor",
    "critical-player",
    "evidence-hunter",
    "field-correspondent",
    "across-cultures",
  ];
  const stampDefinitions = {
    "classroom-architect": { glyph: "教", icon: "classroom", shape: "round", tone: "gold", href: "workshops.html#teaching-design-studio" },
    "code-mixing": { glyph: "言", icon: "mix", shape: "oval", tone: "teal", href: "research.html#research-method" },
    "tgs-survivor": { glyph: "取", icon: "tgs", shape: "shield", tone: "red", href: "writing.html#writing-fieldnotes" },
    "critical-player": { glyph: "遊", icon: "controller", shape: "square", tone: "violet", href: "workshops.html#teaching-classes" },
    "evidence-hunter": { glyph: "証", icon: "evidence", shape: "oval", tone: "blue", href: "research.html#research-projects" },
    "field-correspondent": { glyph: "記", icon: "press", shape: "round", tone: "orange", href: "writing.html#writing-psx" },
    "across-cultures": { glyph: "間", icon: "bridge", shape: "arch", tone: "green", href: "index.html#top" },
  };
  const stampArtwork = {
    classroom: `<svg viewBox="0 0 100 100" role="presentation"><text class="stamp-title" x="50" y="14">授業設計</text><path d="M19 29h50v33H19zM24 34h40M29 42l7 6 10-13M50 43h11m-11 7h8M27 68h34M34 62v6m20-6v6"/><circle cx="76" cy="49" r="7"/><path d="M68 72c1-9 4-15 8-15s8 6 9 15M72 49c0-2 2-4 4-4m11-21 2 4 4 2-4 2-2 4-2-4-4-2 4-2zM14 76c7 4 16 6 25 6"/></svg>`,
    mix: `<svg viewBox="0 0 100 100" role="presentation"><text class="stamp-title" x="50" y="14">言語学習</text><path d="M20 61c10-5 20-5 30 1 10-6 20-6 30-1v22c-10-5-20-5-30 1-10-6-20-6-30-1zM50 62v22"/><path d="M17 26c0-5 4-9 9-9h18c5 0 9 4 9 9v7c0 5-4 9-9 9H33l-8 6 2-6h-1c-5 0-9-4-9-9zM51 32c0-5 4-9 9-9h14c5 0 9 4 9 9v6c0 5-4 9-9 9h-6l-7 6 1-6h-2c-5 0-9-4-9-9z"/><text x="29" y="34">A</text><text x="61" y="39">あ</text><path d="M34 54c4-4 9-6 15-6m-4-4 5 4-5 4"/></svg>`,
    tgs: `<svg viewBox="0 0 100 100" role="presentation"><text class="stamp-title" x="50" y="14">東京取材</text><path d="M17 60V35l33-15 33 15v25M11 60h78M25 60V40h50v20M40 40v20m20-20v20M35 29h30"/><path d="M14 71c8-7 15-7 23 0 8-7 15-7 23 0 8-7 15-7 24 0M20 78c8-6 15-6 23 0 8-6 15-6 23 0"/><rect x="65" y="68" width="25" height="17" rx="2"/><text x="68" y="79">PRESS</text><path d="M74 63h7v5"/></svg>`,
    controller: `<svg viewBox="0 0 100 100" role="presentation"><text class="stamp-title" x="50" y="14">ゲーム文化</text><path d="M26 35h48c8 0 13 7 14 16l2 17c1 8-8 12-14 7L64 65H36L24 75c-6 5-15 1-14-7l2-17c1-9 6-16 14-16zM27 47v14m-7-7h14"/><circle cx="68" cy="49" r="3"/><circle cx="77" cy="57" r="3"/><path d="M37 30c4-6 8-9 13-9s9 3 13 9M43 80h14M50 73v14m-7-7h14"/></svg>`,
    evidence: `<svg viewBox="0 0 100 100" role="presentation"><text class="stamp-title" x="50" y="14">研究記録</text><path d="M20 22h41l10 10v37H20zM61 22v11h10M28 40h27M28 48h21M28 56h15"/><circle cx="64" cy="63" r="15"/><path d="M75 74l12 12M55 64l6 5 10-13M13 79h28M17 79v-9h5v9m5 0V65h5v14m5 0V59h5"/></svg>`,
    press: `<svg viewBox="0 0 100 100" role="presentation"><text class="stamp-title" x="50" y="14">現場記者</text><path d="M17 29h39v50H17zM24 39h25M24 47h18M24 55h25M24 63h15"/><circle cx="71" cy="34" r="8"/><path d="M61 76c1-14 4-25 10-25s10 11 11 25M67 34c0-3 2-5 5-5M61 57l-8 6 6 8M75 55l9-8M81 47l7 18M77 68h12"/><rect x="62" y="75" width="25" height="10" rx="2"/><text x="65" y="82">PRESS</text></svg>`,
    bridge: `<svg viewBox="0 0 100 100" role="presentation"><text class="stamp-title" x="50" y="14">文化の間</text><path d="M10 72h80M18 72c4-25 17-38 32-38s28 13 32 38M18 72V49m64 23V49M27 49h46M22 56c8 8 18 12 28 12s20-4 28-12"/><path d="M12 80c9-5 17-5 25 0 9-5 17-5 25 0 8-5 16-5 25 0M22 29l5-8 5 8m-10 0h10M73 25c5-4 10-4 15 0m-12 5c3-2 6-2 9 0"/></svg>`,
  };
  const passportCopy = {
    en: {
      launcher: "Passport",
      minimize: "Hide passport shortcut",
      restore: "Restore Explorer Passport",
      title: "Explorer Passport",
      deck: "Seven small encounters connect teaching, research, writing, and life between cultures. Complete an action to collect its hand-stamped trace.",
      rewardHint: "Collect all seven stamps to open one final, personal page.",
      progress: "{count} of {total} stamps",
      close: "Close passport",
      reset: "Reset this passport",
      resetConfirm: "Reset all locally saved stamps?",
      locked: "Not collected yet",
      unlocked: "Collected",
      openRoute: "Follow this route",
      stampHere: "STAMP HERE",
      firstToast: "A new stamp found",
      completeToast: "Passport complete — the final page is open",
      stamps: {
        "classroom-architect": ["Classroom Architect", "Build and copy a usable activity in the Teaching Design Studio."],
        "code-mixing": ["Code-Mixing Explorer", "Complete one full Co-MIX loop: read, notice, recall, and reuse."],
        "tgs-survivor": ["TGS Survivor", "Reach an ending in the Tokyo Game Show field-reporting story."],
        "critical-player": ["Critical Player", "Open a class sample or poster from Understanding Video Games."],
        "evidence-hunter": ["Evidence Hunter", "Open a publication record or DOI behind the research."],
        "field-correspondent": ["Field Correspondent", "Open one reporting trail beyond this portfolio — a PSX Extreme source, an interview, or another field note."],
        "across-cultures": ["Across Cultures", "Visit the Teaching, Research, and Writing portfolios."],
      },
      finalEyebrow: "The hidden eighth stamp",
      finalHanko: "BETWEEN WORLDS",
      finalTitle: "You found the thread connecting it all.",
      finalBody: "Teaching, research, journalism, games, languages, and life between cultures are not separate chapters here. They are different ways of entering an unfamiliar world — and helping other people find their way through it.",
      routeLabel: "Your route began as",
      routes: {
        teaching: "Classroom Cartographer",
        research: "Curious Field Researcher",
        writing: "Culture Correspondent",
      },
      routeFinish: "You finished it as a Reader Between Worlds.",
      noteLabel: "A note from Michal",
      note: "Thank you for staying long enough to see the connections. A portfolio usually asks visitors to look at finished things. My work has more often grown in the space between them: between languages, disciplines, classrooms, and public stories. Your attention is part of what makes those connections visible.",
      storyLabel: "One more story",
      storyTitle: "28 March 2009 · A journey without a return date",
      story: [
        "At Kraków airport on 28 March 2009, the photograph caught the part a CV cannot: my parents beside me, a one-way ticket in my bag, and a goodbye that was both beautiful and painful.",
        "The decision may have looked sudden from the outside. It was not. The MEXT scholarship came after three years, two attempts, exams, an interview, and a research plan. When it finally arrived, I left a job I liked and closed a familiar life almost overnight.",
        "Twenty hours later I landed at New Chitose. Otaru and Sapporo followed: Japanese lessons, cognitive science, doctoral work, new friendships, and continued reporting for readers in Poland. I thought starting over was one decisive act.",
        "The first departure was crowded. Later returns taught me that the people and places waiting at ‘home’ also change: my father died, farewells became quieter, and Hokkaido itself filled with friends who would eventually leave. Starting over stopped meaning a clean break. It became a way of carrying earlier homes forward without pretending they remained unchanged.",
        "It was not. Hokkaido taught me that every arrival contains future goodbyes; moving south to Beppu asked me to begin again. We do not find ourselves only once, but repeatedly — in another language, another classroom, and another version of home.",
      ],
      storyClose: "What looked like courage from the outside was, from within, fear wrapped in hope.",
      storyPhotoAlt: "Michal saying goodbye to his parents outside Kraków airport before moving to Japan in 2009",
      storyPhotoCaption: "Kraków, 28 March 2009. A final conversation with my parents before the flight to Japan.",
      storyGroupPhotoAlt: "Michal standing with family and friends outside Kraków airport before departing for Japan in 2009",
      storyGroupPhotoCaption: "The wider farewell: the people who came to see me off before the one-way journey.",
    },
    pl: {
      launcher: "Paszport",
      minimize: "Ukryj skrót paszportu",
      restore: "Przywróć Paszport odkrywcy",
      title: "Paszport odkrywcy",
      deck: "Siedem małych spotkań łączy dydaktykę, badania, pisanie i życie między kulturami. Wykonaj działanie, aby zdobyć jego ręcznie odciśnięty ślad.",
      rewardHint: "Zbierz wszystkie siedem pieczątek, aby otworzyć ostatnią, osobistą stronę.",
      progress: "Pieczątki: {count} z {total}",
      close: "Zamknij paszport",
      reset: "Wyczyść ten paszport",
      resetConfirm: "Usunąć wszystkie pieczątki zapisane lokalnie?",
      locked: "Jeszcze niezdobyta",
      unlocked: "Zdobyta",
      openRoute: "Podążaj tym tropem",
      stampHere: "ODCIŚNIJ TUTAJ",
      firstToast: "Znalazłeś nową pieczątkę",
      completeToast: "Paszport ukończony — ostatnia strona jest otwarta",
      stamps: {
        "classroom-architect": ["Architekt zajęć", "Zbuduj i skopiuj użyteczną aktywność w Studiu projektowania zajęć."],
        "code-mixing": ["Odkrywca Co-MIX", "Ukończ jedną pełną pętlę Co-MIX: czytanie, zauważenie, przypomnienie i ponowne użycie."],
        "tgs-survivor": ["Ocalały z TGS", "Dotrzyj do zakończenia reporterskiej opowieści z Tokyo Game Show."],
        "critical-player": ["Krytyczny gracz", "Otwórz próbkę zajęć albo plakat kursu Understanding Video Games."],
        "evidence-hunter": ["Łowca dowodów", "Otwórz rekord publikacji lub DOI stojący za badaniem."],
        "field-correspondent": ["Korespondent terenowy", "Otwórz poza portfolio jeden ślad pracy reporterskiej — materiał PSX Extreme, wywiad albo inną relację z terenu."],
        "across-cultures": ["Pomiędzy kulturami", "Odwiedź portfolio dydaktyczne, badawcze i pisarskie."],
      },
      finalEyebrow: "Ukryta ósma pieczęć",
      finalHanko: "BETWEEN WORLDS",
      finalTitle: "Odnalazłeś nić, która łączy wszystkie te historie.",
      finalBody: "Dydaktyka, badania, dziennikarstwo, gry, języki i życie między kulturami nie są tu osobnymi rozdziałami. To różne sposoby wchodzenia w nieznany świat — i pomagania innym, by potrafili się w nim odnaleźć.",
      routeLabel: "Twoja droga zaczęła się jako",
      routes: {
        teaching: "Kartograf sali zajęciowej",
        research: "Ciekawy świata badacz terenowy",
        writing: "Korespondent kultury",
      },
      routeFinish: "Kończysz ją jako Czytelnik Pomiędzy Światami.",
      noteLabel: "Wiadomość od Michała",
      note: "Dziękuję, że zostałeś na tyle długo, by zobaczyć te połączenia. Portfolio zwykle prosi, by oglądać gotowe rzeczy. Moja praca częściej wyrastała w przestrzeni pomiędzy nimi: pomiędzy językami, dyscyplinami, salami zajęciowymi i publicznymi opowieściami. Twoja uwaga pomaga te związki dostrzec.",
      storyLabel: "Jeszcze jedna historia",
      storyTitle: "28 marca 2009 · Podróż bez daty powrotu",
      story: [
        "Na lotnisku w Krakowie, 28 marca 2009 roku, aparat uchwycił część historii, której nie pokazuje CV: obok mnie rodzice, w bagażu bilet w jedną stronę, a między nami pożegnanie zarazem piękne i bolesne.",
        "Z zewnątrz decyzja mogła wyglądać na nagłą. Nie była. Stypendium MEXT przyszło po trzech latach starań, dwóch podejściach, egzaminach, rozmowie i planie badawczym. Kiedy wreszcie się udało, odszedłem z pracy, którą lubiłem, i niemal z dnia na dzień zamknąłem znane życie.",
        "Dwadzieścia godzin później wylądowałem na New Chitose. Potem przyszły Otaru i Sapporo: japoński, kognitywistyka, doktorat, nowe przyjaźnie oraz dalsze pisanie dla czytelników w Polsce. Wydawało mi się, że zaczynanie od nowa jest jednym odważnym ruchem.",
        "Pierwszy wyjazd miał wielu świadków. Kolejne powroty uczyły mnie, że ludzie i miejsca czekające „w domu” także się zmieniają: zmarł mój ojciec, pożegnania stawały się cichsze, a Hokkaido zapełniło się przyjaciółmi, którzy z czasem również wyjeżdżali. Zaczynanie od nowa przestało oznaczać czyste cięcie. Stało się sposobem zabierania dawnych domów ze sobą bez udawania, że pozostały niezmienione.",
        "Nie było. Hokkaido nauczyło mnie, że każde przybycie mieści w sobie przyszłe pożegnania; przeprowadzka do Beppu kazała rozpocząć jeszcze raz. Człowiek nie odnajduje siebie raz na zawsze. Robi to wielokrotnie — w kolejnym języku, kolejnej sali i następnej wersji domu.",
      ],
      storyClose: "To, co z zewnątrz wyglądało jak odwaga, od środka było lękiem owiniętym w nadzieję.",
      storyPhotoAlt: "Michał żegna się z rodzicami przed lotniskiem w Krakowie i przeprowadzką do Japonii w 2009 roku",
      storyPhotoCaption: "Kraków, 28 marca 2009. Ostatnia rozmowa z rodzicami przed wylotem do Japonii.",
      storyGroupPhotoAlt: "Michał z rodziną i przyjaciółmi przed lotniskiem w Krakowie, przed wyjazdem do Japonii w 2009 roku",
      storyGroupPhotoCaption: "Szerszy kadr pożegnania: osoby, które przyszły odprowadzić mnie przed podróżą w jedną stronę.",
    },
    ja: {
      launcher: "パスポート",
      minimize: "パスポートの表示を小さくする",
      restore: "探検パスポートを戻す",
      title: "探検パスポート",
      deck: "教育、研究、執筆、そして文化のあいだを生きる経験を、7つの小さな出会いがつなぎます。実際に操作して、手作り風のスタンプを集めてください。",
      rewardHint: "7つすべてのスタンプを集めると、最後の個人的なページが開きます。",
      progress: "スタンプ {count} / {total}",
      close: "パスポートを閉じる",
      reset: "パスポートをリセット",
      resetConfirm: "このブラウザに保存されたスタンプをすべて消しますか？",
      locked: "未取得",
      unlocked: "取得済み",
      openRoute: "このルートをたどる",
      stampHere: "ここにスタンプ",
      firstToast: "新しいスタンプを見つけました",
      completeToast: "パスポート完成 — 最後のページが開きました",
      stamps: {
        "classroom-architect": ["授業の設計者", "授業設計スタジオで活動案を作り、コピーする。"],
        "code-mixing": ["Co-MIX 探検者", "読む・気づく・思い出す・再使用する、1つの学習ループを完了する。"],
        "tgs-survivor": ["TGS サバイバー", "東京ゲームショウの取材ストーリーで結末にたどり着く。"],
        "critical-player": ["批評するプレイヤー", "Understanding Video Games の授業映像またはポスターを開く。"],
        "evidence-hunter": ["エビデンス・ハンター", "研究を支える論文記録または DOI を開く。"],
        "field-correspondent": ["現場記者", "ポートフォリオの外にある取材の痕跡を一つ開く。PSX Extreme、インタビュー、または現場記事が手がかりです。"],
        "across-cultures": ["文化のあいだ", "教育・研究・執筆の3つのポートフォリオを訪れる。"],
      },
      finalEyebrow: "隠されていた8つ目の印",
      finalHanko: "BETWEEN WORLDS",
      finalTitle: "すべてをつなぐ糸を見つけました。",
      finalBody: "教育、研究、ジャーナリズム、ゲーム、言語、文化のあいだで生きることは、別々の章ではありません。未知の世界に入り、それを理解し、他の人にも道を示すための異なる方法です。",
      routeLabel: "あなたの旅の始まりは",
      routes: {
        teaching: "教室の地図を描く人",
        research: "好奇心を持つフィールド研究者",
        writing: "文化の特派員",
      },
      routeFinish: "最後には「世界のあいだを読む人」になりました。",
      noteLabel: "ミハウからのメッセージ",
      note: "ここまで時間をかけ、つながりを見つけてくださってありがとうございます。ポートフォリオは普通、完成した成果を見る場所です。しかし私の仕事は、言語、分野、教室、そして公共の物語の「あいだ」から育ってきました。あなたの注意が、そのつながりを見えるものにしてくれます。",
      storyLabel: "もう一つの物語",
      storyTitle: "2009年3月28日 · 帰国日を決めない旅",
      story: [
        "2009年3月28日、クラクフ空港で撮られたこの写真には、履歴書には残らない時間が写っています。そばにいる両親、鞄の中の片道切符、そして美しさと痛みが同居する別れです。",
        "外から見れば、突然の決断だったかもしれません。しかし、文部科学省奨学金にたどり着くまでには、3年間、2度の挑戦、試験、面接、研究計画がありました。採用が決まった時、好きだった仕事を辞め、慣れ親しんだ生活をほとんど一夜で閉じました。",
        "約20時間後、新千歳空港に到着しました。その後の小樽と札幌では、日本語、認知科学、博士研究、新しい友人、そしてポーランドの読者に向けた執筆が重なっていきました。当時は、再出発とは一度だけの大きな決断だと思っていました。",
        "最初の出発は、多くの人に見送られました。その後の帰省を通して、『故郷』で待つ人や場所も変わるのだと知りました。父を亡くし、別れは静かになり、北海道で出会った友人たちもやがて旅立っていきました。再出発は、過去を切り離すことではなくなりました。変わってしまった以前の故郷も、自分の中に持って進むことになったのです。",
        "けれど、そうではありませんでした。北海道で、出会いにはいつか別れが含まれることを学び、別府への移動でもう一度始め直しました。自分を見つけるのは一度きりではありません。別の言語、別の教室、別の『家』のかたちの中で、何度も見つけ直すのです。",
      ],
      storyClose: "外からは勇気に見えた旅も、内側では、希望に包まれた不安でした。",
      storyPhotoAlt: "2009年、日本への移住を前にクラクフ空港で両親に別れを告げるミハウ",
      storyPhotoCaption: "2009年3月28日、クラクフ。日本へ出発する前、両親と交わした最後の会話。",
      storyGroupPhotoAlt: "2009年、日本へ出発する前にクラクフ空港で家族や友人と並ぶミハウ",
      storyGroupPhotoCaption: "片道の旅へ出る私を見送りに来てくれた人たちとの、もう一つの別れの風景。",
    },
  };

  let state = { unlocked: {}, visited: [], completionSeen: false, launcherMinimized: false };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
    if (saved && typeof saved === "object") state = { ...state, ...saved };
  } catch {
    // The passport remains usable for the current visit if storage is unavailable.
  }

  const save = () => {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch { /* local-only enhancement */ }
  };
  const currentLanguage = () => ["pl", "ja"].includes(document.documentElement.lang)
    ? document.documentElement.lang
    : "en";
  const currentCopy = () => passportCopy[currentLanguage()];
  const unlockedCount = () => stampOrder.filter((id) => state.unlocked[id]).length;
  const isComplete = () => unlockedCount() === stampOrder.length;
  const routeStarted = () => {
    const candidates = [
      ["teaching", state.unlocked["classroom-architect"] || state.unlocked["critical-player"]],
      ["research", state.unlocked["code-mixing"] || state.unlocked["evidence-hunter"]],
      ["writing", state.unlocked["tgs-survivor"] || state.unlocked["field-correspondent"]],
    ].filter(([, time]) => time).sort((a, b) => a[1] - b[1]);
    return candidates[0]?.[0] || "teaching";
  };

  const root = document.createElement("div");
  root.className = "stamp-rally";
  root.innerHTML = `
    <div class="stamp-rally-launcher-shell">
      <button class="stamp-rally-launcher" type="button" aria-expanded="false">
        <span class="stamp-rally-launcher-mark" aria-hidden="true">〒</span>
        <span data-passport-launcher></span>
        <b data-passport-count>0/7</b>
      </button>
      <button class="stamp-rally-minimize" type="button" data-passport-minimize aria-label="Hide passport shortcut">×</button>
    </div>
    <div class="stamp-rally-scrim" hidden></div>
    <aside class="stamp-rally-drawer" aria-hidden="true" aria-label="Explorer Passport">
      <div class="stamp-rally-drawer-head">
        <div><p class="eyebrow" data-passport-progress></p><h2 data-passport-title></h2></div>
        <button class="stamp-rally-close" type="button" data-passport-close aria-label="Close">×</button>
      </div>
      <p class="stamp-rally-deck" data-passport-deck></p>
      <p class="stamp-rally-reward-hint" data-passport-reward-hint></p>
      <div class="stamp-rally-route" aria-hidden="true"><span></span><i></i><span></span><i></i><span></span><i></i><span></span></div>
      <div class="stamp-rally-grid" data-passport-grid></div>
      <section class="stamp-rally-reward" data-passport-reward hidden></section>
      <button class="stamp-rally-reset" type="button" data-passport-reset></button>
    </aside>
    <div class="stamp-rally-toast" role="status" aria-live="polite" hidden></div>`;
  document.body.append(root);

  const languageSwitch = document.querySelector(".language-switch");
  const headerTools = document.createElement("div");
  headerTools.className = "header-tools";
  const headerLauncher = document.createElement("button");
  headerLauncher.className = "stamp-rally-header-launcher";
  headerLauncher.type = "button";
  headerLauncher.hidden = true;
  headerLauncher.innerHTML = `<span aria-hidden="true">〒</span><b data-passport-header-count>0/7</b>`;
  if (languageSwitch) {
    languageSwitch.before(headerTools);
    headerTools.append(headerLauncher, languageSwitch);
  }

  const launcher = root.querySelector(".stamp-rally-launcher");
  const minimizeButton = root.querySelector("[data-passport-minimize]");
  const scrim = root.querySelector(".stamp-rally-scrim");
  const drawer = root.querySelector(".stamp-rally-drawer");
  const grid = root.querySelector("[data-passport-grid]");
  const reward = root.querySelector("[data-passport-reward]");
  const toast = root.querySelector(".stamp-rally-toast");
  let toastTimer;

  const showToast = (message, completed = false) => {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.classList.toggle("is-complete", completed);
    toast.hidden = false;
    window.requestAnimationFrame(() => toast.classList.add("is-visible"));
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      window.setTimeout(() => { toast.hidden = true; }, 220);
    }, 3400);
  };

  const setOpen = (open) => {
    launcher.setAttribute("aria-expanded", String(open));
    drawer.setAttribute("aria-hidden", String(!open));
    drawer.classList.toggle("is-open", open);
    scrim.hidden = !open;
    root.classList.toggle("is-open", open);
    if (open) drawer.querySelector("[data-passport-close]")?.focus({ preventScroll: true });
  };

  const setMinimized = (minimized) => {
    state.launcherMinimized = minimized;
    root.classList.toggle("is-minimized", minimized);
    headerLauncher.hidden = !minimized;
    save();
  };

  const renderReward = (copy) => {
    if (!isComplete()) {
      reward.hidden = true;
      reward.replaceChildren();
      return;
    }
    reward.hidden = false;
    const paragraphs = copy.story.map((paragraph) => `<p>${paragraph}</p>`).join("");
    reward.innerHTML = `
      <div class="stamp-rally-final-seal" aria-label="${copy.finalHanko}"><span>間</span><b>${copy.finalHanko}</b></div>
      <p class="eyebrow">${copy.finalEyebrow}</p>
      <h3>${copy.finalTitle}</h3>
      <p class="stamp-rally-final-body">${copy.finalBody}</p>
      <p class="stamp-rally-route-title"><span>${copy.routeLabel}</span><strong>${copy.routes[routeStarted()]}</strong><b>${copy.routeFinish}</b></p>
      <div class="stamp-rally-note"><span>01</span><div><p class="eyebrow">${copy.noteLabel}</p><p>${copy.note}</p></div></div>
      <article class="stamp-rally-story">
        <div class="stamp-rally-story-gallery">
          <figure class="stamp-rally-story-photo has-ticket">
            <img src="assets/story/airport-farewell-2009.jpg" alt="${copy.storyPhotoAlt}" loading="lazy">
            <figcaption>${copy.storyPhotoCaption}</figcaption>
            <div class="stamp-rally-story-ticket" aria-hidden="true"><b>28</b><span>MAR<br>2009</span><i>KRK → JP</i></div>
          </figure>
          <figure class="stamp-rally-story-photo">
            <img src="assets/story/airport-farewell-group-2009.jpg" alt="${copy.storyGroupPhotoAlt}" loading="lazy">
            <figcaption>${copy.storyGroupPhotoCaption}</figcaption>
          </figure>
        </div>
        <div class="stamp-rally-story-copy"><p class="eyebrow">${copy.storyLabel}</p><h4>${copy.storyTitle}</h4>${paragraphs}<strong>${copy.storyClose}</strong></div>
      </article>`;
  };

  const render = () => {
    const copy = currentCopy();
    const count = unlockedCount();
    root.querySelector("[data-passport-launcher]").textContent = copy.launcher;
    root.querySelector("[data-passport-count]").textContent = `${count}/${stampOrder.length}`;
    headerLauncher.querySelector("[data-passport-header-count]").textContent = `${count}/${stampOrder.length}`;
    minimizeButton.setAttribute("aria-label", copy.minimize);
    headerLauncher.setAttribute("aria-label", copy.restore);
    root.querySelector("[data-passport-progress]").textContent = copy.progress
      .replace("{count}", String(count)).replace("{total}", String(stampOrder.length));
    root.querySelector("[data-passport-title]").textContent = copy.title;
    root.querySelector("[data-passport-deck]").textContent = copy.deck;
    root.querySelector("[data-passport-reward-hint]").textContent = copy.rewardHint;
    root.querySelector("[data-passport-close]").setAttribute("aria-label", copy.close);
    root.querySelector("[data-passport-reset]").textContent = copy.reset;
    grid.replaceChildren();
    stampOrder.forEach((id, index) => {
      const definition = stampDefinitions[id];
      const [title, description] = copy.stamps[id];
      const unlocked = Boolean(state.unlocked[id]);
      const item = document.createElement("article");
      item.className = `stamp-rally-item stamp-rally-tone-${definition.tone}`;
      item.classList.toggle("is-unlocked", unlocked);
      item.innerHTML = `
        <div class="stamp-rally-stamp-field stamp-rally-shape-${definition.shape}" aria-hidden="true">
          <small class="stamp-rally-slot-number">0${index + 1}</small>
          <span class="stamp-rally-slot-label">${copy.stampHere}</span>
          <i class="stamp-rally-slot-target"></i>
          <div class="stamp-rally-stamp"><small>0${index + 1}</small>${stampArtwork[definition.icon]}<strong>${definition.glyph}</strong><span>MICHAŁ MAZUR</span></div>
        </div>
        <div class="stamp-rally-item-copy"><span>${unlocked ? copy.unlocked : copy.locked}</span><h3>${title}</h3><p>${description}</p><a href="${definition.href}">${copy.openRoute} <i aria-hidden="true">→</i></a></div>`;
      grid.append(item);
    });
    renderReward(copy);
    root.classList.toggle("is-complete", isComplete());
    root.classList.toggle("is-minimized", Boolean(state.launcherMinimized));
    headerLauncher.hidden = !state.launcherMinimized;
  };

  const unlock = (id, options = {}) => {
    if (!stampDefinitions[id] || state.unlocked[id]) return false;
    state.unlocked[id] = Date.now();
    const completeNow = isComplete();
    save();
    render();
    if (!options.silent) showToast(completeNow ? currentCopy().completeToast : currentCopy().firstToast, completeNow);
    if (completeNow && !state.completionSeen) {
      state.completionSeen = true;
      save();
      window.setTimeout(() => setOpen(true), 700);
    }
    return true;
  };

  document.addEventListener("identity:stamp", (event) => unlock(event.detail?.id));
  document.addEventListener("identity:languagechange", render);
  launcher.addEventListener("click", () => setOpen(!drawer.classList.contains("is-open")));
  minimizeButton.addEventListener("click", () => {
    setOpen(false);
    setMinimized(true);
  });
  headerLauncher.addEventListener("click", () => {
    setMinimized(false);
    setOpen(true);
  });
  scrim.addEventListener("click", () => setOpen(false));
  root.querySelector("[data-passport-close]").addEventListener("click", () => setOpen(false));
  root.querySelector("[data-passport-reset]").addEventListener("click", () => {
    if (!window.confirm(currentCopy().resetConfirm)) return;
    state = { unlocked: {}, visited: [], completionSeen: false, launcherMinimized: state.launcherMinimized };
    save();
    render();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && drawer.classList.contains("is-open")) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    const clickOrigin = event.target instanceof Element ? event.target : event.target?.parentElement;
    const link = clickOrigin?.closest("a[href]");
    if (!link) return;
    const href = link.getAttribute("href") || "";
    if (/doi\.org|researchmap\.jp\/.*published_papers/i.test(href)) unlock("evidence-hunter");
    if (/yF0FeLBleUY|3EGgpnY2BJc|understanding-video-games-(course|information)-poster/i.test(href)) unlock("critical-player");
    if (/psxextreme|torii\.com\.pl|nagoshi|valkyrie|gamemusic|tokyo-game-show-2011-press/i.test(href)) unlock("field-correspondent");
  }, true);

  const pageName = window.location.pathname.split("/").pop() || "index.html";
  const portfolioPage = {
    "workshops.html": "teaching",
    "research.html": "research",
    "writing.html": "writing",
  }[pageName];
  if (portfolioPage && !state.visited.includes(portfolioPage)) {
    state.visited = [...state.visited, portfolioPage];
    save();
  }
  if (["teaching", "research", "writing"].every((page) => state.visited.includes(page))) {
    unlock("across-cultures");
  }

  window.identityStampRally = { unlock, open: () => setOpen(true) };
  render();
})();
