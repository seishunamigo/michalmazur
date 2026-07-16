const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const languageButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");
const languagePanels = document.querySelectorAll("[data-lang-panel]");

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
    japanSinceLabel: "since 2009",
    japanDaysLabel: "days in Japan — and counting",
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
    galleryCaptionTwo: "Intercultural communication in practice",
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
    timelineTwoTitle: "Language meets technology",
    timelineTwoBody: "Research on NLP and language-learning systems makes context, choice, and learner experience central questions.",
    timelineThreeTitle: "Teaching becomes the focus",
    timelineThreeBody: "Invited workshops on teaching in English and intercultural communication turn research questions into live classroom work.",
    timelineFourTitle: "Evidence from the classroom",
    timelineFourBody: "A 15-week study makes intercultural learning visible through students’ reflection and practice.",
    timelineFiveTitle: "APU, Beppu",
    timelineFiveBody: "At APU, I bring teaching, research, and public communication into the same room.",
    bioEyebrow: "How I work",
    bioTitle: "I work where language, culture, and learning meet.",
    bioBodyOne:
      "I am an Assistant Professor at Ritsumeikan Asia Pacific University in Japan. My work focuses on intercultural communication, global learning, faculty development, and teaching in multilingual higher education. I design courses and professional-development programmes that help educators and students interpret difference, participate more fully, and turn reflection into practical action.",
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
      "Moje badania wyrastają z sytuacji, z którymi naprawdę pracowałem: wielojęzycznych klas, systemów nauki języka, spotkań w turystyce i interdyscyplinarnego programu kosmicznego. Badam, co pomaga ludziom interpretować różnice, współpracować i uczyć się z większą sprawczością.",
    researchMapEyebrow: "Mapa badań",
    researchMapTitle: "Jedno pytanie, cztery konteksty badawcze.",
    researchMapDeck: "Tematy się zmieniają, ale sedno pozostaje: jak projekt, język i kontekst wpływają na możliwość uczestnictwa.",
    researchMapCoreLabel: "Wspólne pytanie",
    researchMapCore: "Co pomaga ludziom uczestniczyć ponad różnicą?",
    researchMapContextLabel: "Kontekst",
    researchMapEvidenceLabel: "Dowód / metoda",
    researchMapOneTitle: "Wielojęzyczne klasy",
    researchMapOneBody: "Interpretowanie różnicy, pewność siebie i przynależność badane przez aktywności klasowe i refleksję.",
    researchMapOneEvidenceTitle: "15-tygodniowe badanie klasowe",
    researchMapOneEvidenceBody: "Critical incidents, zadania refleksyjne i recenzowany artykuł opublikowany w 2023 roku.",
    researchMapTwoTitle: "Systemy nauki języka",
    researchMapTwoBody: "Słownictwo angielskie i japońskie badane przez NLP, projektowanie systemu i ewaluację użytkowników.",
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
    heroKicker: "Assistant Professor w Japonii · Edukator międzykulturowy · Autor jako Mazzi",
    heroLede:
      "Życie i praca w Japonii od 2009 roku nauczyły mnie, że komunikacja ponad kulturami nie jest hasłem, lecz codzienną pracą. Na Ritsumeikan Asia Pacific University przekładam to doświadczenie i badania na kursy, warsztaty dla kadry i wielojęzyczne środowiska, w których ludzie mogą uczestniczyć z większą pewnością.",
    japanYearsLabel: "lat życia i pracy w Japonii",
    japanSinceLabel: "od 2009 roku",
    japanDaysLabel: "dni w Japonii — licznik działa",
    visualTeaching: "Uczenie i facylitacja ponad kulturami",
    visualPublic: "Publiczny głos ukształtowany przez gry i Japonię",
    visualJapan: "Japonia obserwowana przez zwyczajne szczegóły",
    apuBandEyebrow: "Mój obecny dom akademicki",
    apuBandTitle: "Na APU global learning nie jest abstrakcyjną ideą. To sala, do której wchodzę każdego dnia.",
    apuBandBody: "Beppu jest miejscem, w którym moja praca nad edukacją międzykulturową, faculty development i komunikacją publiczną spotyka się dziś w całość.",
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
    galleryCaptionTwo: "Komunikacja międzykulturowa w praktyce",
    galleryCaptionThree: "Przygotowanie, technologia i obecność",
    galleryCaptionFour: "Sala zbudowana z wielu perspektyw",
    heroPrimary: "Zobacz ofertę warsztatów",
    heroSecondary: "Zobacz case studies",
    identityStrip:
      "Dla centrów dydaktyki · programów międzynarodowych · szkół doktorskich · wielojęzycznych zespołów dydaktycznych",
    trajectoryEyebrow: "Doświadczenie",
    trajectoryTitle: "Od Krakowa przez Hokkaido do Beppu: wspólnym wątkiem zawsze był język.",
    trajectoryBodyOne:
      "Zacząłem od języka i literatury w Krakowie, przyjechałem do Japonii jako stypendysta MEXT, a na Hokkaido University ukończyłem doktorat z information science, specjalizując się w przetwarzaniu języka naturalnego. Ta nietypowa droga nauczyła mnie swobodnie łączyć humanistykę, technologię i edukację.",
    trajectoryBodyTwo:
      "Gry otworzyły mi jedną z pierwszych dróg do Japonii. Od blisko trzech dekad piszę jako Mazzi dla polskich czytelników, a moja praca uniwersytecka prowadziła od systemów nauki języka do klas międzykulturowych i faculty development. Obie ścieżki zaczęły się od tego samego odruchu: zrozumieć, jak działa dany świat, i wyjaśnić go bez ścierania tego, co czyni go odmiennym.",
    timelineEyebrow: "Kilka współrzędnych",
    timelineTitle: "Ta droga ma znaczenie, bo zmieniła to, w czym mogę dziś pomagać innym.",
    timelineOneTitle: "Początek Japonii",
    timelineOneBody: "Przyjeżdżam na stypendium MEXT i zaczynam uczyć się codziennej pracy życia pomiędzy językami.",
    timelineTwoTitle: "Język spotyka technologię",
    timelineTwoBody: "Badania nad NLP i systemami nauki języka stawiają w centrum kontekst, wybór i doświadczenie uczących się.",
    timelineThreeTitle: "Nauczanie staje się głównym polem",
    timelineThreeBody: "Zaproszone warsztaty o nauczaniu po angielsku i komunikacji międzykulturowej przenoszą pytania badawcze do prawdziwej pracy w klasie.",
    timelineFourTitle: "Dowody z klasy",
    timelineFourBody: "Piętnastotygodniowe badanie uwidacznia uczenie międzykulturowe poprzez refleksję i praktykę studentów.",
    timelineFiveTitle: "APU, Beppu",
    timelineFiveBody: "Na APU łączę nauczanie, badania i komunikację publiczną w jednej przestrzeni.",
    bioEyebrow: "Jak pracuję",
    bioTitle: "Pracuję na styku języka, kultury i uczenia się.",
    bioBodyOne:
      "Jestem Assistant Professor na Ritsumeikan Asia Pacific University w Japonii. Moja praca koncentruje się na komunikacji międzykulturowej, global learning, faculty development oraz nauczaniu w wielojęzycznym szkolnictwie wyższym. Projektuję kursy i programy rozwoju dydaktycznego, które pomagają edukatorom i studentom interpretować różnice, pełniej uczestniczyć w uczeniu się oraz przekładać refleksję na praktyczne działanie.",
    bioBodyTwo:
      "Moja droga akademicka łączy język i literaturę, japonistykę, informatykę oraz przetwarzanie języka naturalnego. Przed dołączeniem do APU pracowałem i prowadziłem zajęcia na Hokkaido University, rozwijając kursy i działania faculty development związane z nauczaniem po angielsku, komunikacją międzykulturową, projektowaniem programu oraz zmieniającą się rolą generatywnej AI w szkolnictwie wyższym.",
    bioBodyThree:
      "Równolegle z pracą uniwersytecką piszę jako Mazzi o Japonii, grach wideo, kulturze mediów i codziennym życiu. Ta publicystyka przekłada interpretację kultury i złożone konteksty na przystępny język, łącząc moje zainteresowania akademickie z dziennikarstwem, grami i współczesną kulturą Japonii.",
    academicEyebrow: "Co robię",
    academicTitle: "Pomagam ludziom uczyć się ponad granicami kultur, mediów i instytucji.",
    featureOneTitle: "Projektuję uczenie",
    featureOneBody:
      "Projektuję zajęcia, aktywności i warsztaty faculty development, które przechodzą od idei do użytecznej praktyki dydaktycznej.",
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
      "Piętnastotygodniowe badanie klasowe wykorzystało critical incidents i refleksję, aby uwidocznić empatię, interpretację i samoświadomość kulturową; w 2023 roku praca ukazała się jako recenzowany artykuł.",
    caseThreeTitle: "Gry i media jako poważny materiał kulturowy",
    caseThreeBody:
      "Na kursie Video Games in Society studenci pisali prawdziwe recenzje i pitchowali pomysły na gry. Wybrane prace trafiły do PSX Extreme, a kurs otrzymał ocenę 4,58/5.",
    caseFourTitle: "Odpowiedzialna AI w projektowaniu dydaktyki",
    caseFourBody:
      "Od warsztatów na Hokkaido University po zaproszony wykład w Kitami Institute of Technology w 2024 roku pokazuję AI jako narzędzie projektowania i dociekania, które nadal wymaga weryfikacji i akademickiego osądu.",
    casePageLink: "Przeczytaj case studies",
    caseStudiesEyebrow: "Wybrana praktyka",
    caseStudiesTitle: "Cztery projekty, cztery różne sale, jeden nawyk: uwidocznić uczenie.",
    caseStudiesDeck:
      "Każde case study zaczyna się od konkretnego problemu dydaktycznego, pokazuje odpowiedź projektową i kończy się dowodem na to, co uczestnicy mogli zrobić, stworzyć lub zabrać ze sobą dalej.",
    caseStudiesCtaTitle: "Wprowadź to podejście do swojego programu, zespołu dydaktycznego albo klasy.",
    teachingEyebrow: "Praktyka dydaktyczna",
    teachingTitle: "Most staje się widoczny w klasie.",
    teachingOneTitle: "Komunikacja międzykulturowa jako praktyka życia",
    teachingOneBody:
      "Moje zajęcia z komunikacji międzykulturowej wykorzystują refleksję, critical incidents, doświadczenia studentów i różnorodne głosy, aby pomóc uczącym się wyjść poza poprawność językową ku rozumieniu kultury.",
    teachingTwoTitle: "Gry wideo jako systemy kulturowe",
    teachingTwoBody:
      "Na zajęciach o grach wideo i społeczeństwie studenci analizują gry krytycznie, badają ich role społeczne i wykonują zadania zbliżone do branżowych, takie jak publicystyka growa i pitching konceptów.",
    teachingThreeTitle: "Faculty development przez projektowanie",
    teachingThreeBody:
      "Moja praca w faculty development koncentruje się na nauczaniu inkluzywnym, EMI, projektowaniu programu, feedbacku i środowiskach uczenia się, które czynią uczestnictwo bardziej znaczącym.",
    workshopEyebrow: "Oferta warsztatów",
    workshopTitle: "Sesje dla kadry, doktorantów i zespołów dydaktycznych gotowe do zamówienia.",
    workshopModelEyebrow: "Zasada projektowa",
    workshopModelTitle: "Uczestnicy powinni wyjść z czymś, czego użyją już w poniedziałek.",
    workshopModelBody:
      "Teorię utrzymuję zwięzłą, a większość czasu oddaję na pracę nad prawdziwymi zajęciami, trudną rozmową albo decyzją programową. Szablony, feedback, próba i refleksja prowadzą do użytecznego materiału oraz następnego kroku dopasowanego do instytucji.",
    workshopOutputOne: "Jednostronicowe szkice zajęć",
    workshopOutputTwo: "Spójne aktywności dydaktyczne",
    workshopOutputThree: "Jasne instrukcje facylitacji",
    workshopOutputFour: "Exit tickets do ulepszania projektu",
    workshopPageLink: "Zobacz formaty warsztatów",
    proofEyebrow: "Udokumentowane doświadczenie",
    proofTitle: "Cztery projekty pokazujące tę pracę w działaniu.",
    proofOneLabel: "2023 · Hokkaido University",
    proofOneTitle: "Faculty development wokół czterech praktycznych problemów",
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
      "Od dwóch lat współprowadzę proces uczenia obejmujący komunikację międzykulturową, leadership, umiejętności prezentacyjne, feedback i międzynarodową współpracę projektową w mieszanych grupach studentów.",
    portfolioOneTitle: "Pre-FD dla doktorantów",
    portfolioOneBody:
      "Podstawy nauczania akademickiego: efekty uczenia się, projektowanie zajęć, active learning, facylitacja, wymiana peer-to-peer i refleksja dla przyszłych edukatorów.",
    portfolioTwoTitle: "Projektowanie uczenia międzykulturowego",
    portfolioTwoBody:
      "Warsztaty i zajęcia pomagające pracować z różnicą kulturową, dialogiem, critical incidents, inkluzywnym uczestnictwem i budowaniem znaczenia.",
    portfolioThreeTitle: "AI, krytyczność i szkolnictwo wyższe",
    portfolioThreeBody:
      "Faculty development wokół generatywnej AI jako partnera w nauczaniu, projektowaniu, syntezie i refleksji, z naciskiem na krytyczne myślenie i odpowiedzialność.",
    portfolioFourTitle: "Teaching Excellence i SoTL",
    portfolioFourBody:
      "Wsparcie dla edukatorów, którzy chcą zmienić pytania dydaktyczne w pracę opartą na danych, lepszy feedback i projekty uczenia się możliwe do pokazania innym.",
    samplerEyebrow: "Sampler pracy",
    samplerTitle: "Co mogę zbudować dla uniwersytetu, klasy albo publiczności.",
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
      "Buduję uczenie wokół gier jako przestrzeni, w których ludzie ćwiczą język, tożsamość, design thinking, interpretację i publiczną analizę kultury.",
    samplerFourLabel: "Faculty development",
    samplerFourTitle: "AI z odpowiedzialnością i krytycznością",
    samplerFourBody:
      "Mogę pomagać edukatorom używać AI do brainstormingu, syntezy, prototypowania, feedbacku i projektowania kursów bez rezygnacji z osądu, etyki i celu dyscypliny.",
    bridgeEyebrow: "Jedna ciekawość, dwie publiczności",
    bridgeTitle:
      "Ta sama ciekawość łączy pracę uniwersytecką z niemal trzema dekadami pisania o grach.",
    bridgeBodyOne:
      "Jako Mazzi relacjonowałem wydarzenia z Japonii, rozmawiałem z twórcami, obserwowałem kulturę gier na miejscu i pisałem rozbudowane teksty dla polskich czytelników. Nauczyło mnie to zauważać znaczące szczegóły, szanować odbiorcę i wyjaśniać kontekst bez zamieniania Japonii w egzotyczne tło.",
    bridgeBodyTwo:
      "Klasa wymaga tej samej uważności. Niezależnie od tego, czy studenci rozmawiają o kulturze, pitchują grę czy planują międzynarodowy projekt dla sektora kosmicznego, pomagam im dostrzec założenia, znaleźć język dla trudnych idei i mówić do osób, które nie myślą tak samo jak oni.",
    writingPageLink: "Zobacz portfolio pisarskie",
    bridgeQuote: "„Przez całą karierę uczę się wchodzić do nieznanych światów, czytać ich zasady i pomagać innym odnaleźć w nich drogę.”",
    editorialEvidenceNagoshi: "Wywiad · Toshihiro Nagoshi",
    editorialEvidenceValkyrie: "Spotkanie redakcyjne · twórcy Valkyrie Profile",
    identityAcademicTerm: "Tożsamość akademicka",
    identityAcademicDesc: "Assistant Professor, badacz szkolnictwa wyższego, faculty developer.",
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
      "Wybrany sampler z moich oryginalnych tekstów PSX Extreme: relacje z wydarzeń, historia japońskich gier, analiza technologii i rynku, feature writing oraz refleksje o tym, co gry robią w codziennym życiu.",
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
      "APU, komunikacja międzykulturowa, global learning, EMI, projektowanie programu i faculty development pozostają środkiem ciężkości.",
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
    statementEyebrow: "Statement profilu",
    statementTitle:
      "Assistant Professor na Ritsumeikan Asia Pacific University, pracujący na styku komunikacji międzykulturowej, global learning, faculty development i japońskiej kultury medialnej.",
    statementBody:
      "Moja praca łączy badania nad szkolnictwem wyższym z komunikacją publiczną, korzystając z doświadczenia edukatora, badacza i autora piszącego z Japonii dla polskich mediów growych.",
    contactEyebrow: "Kontakt",
    contactTitle: "Zbudujmy warsztat, kurs albo współpracę wokół prawdziwego problemu.",
    contactBody:
      "Szczególnie interesuje mnie współpraca z centrami teaching and learning, programami międzynarodowymi, szkołami doktorskimi i zespołami rozwijającymi wielojęzyczne lub międzykulturowe uczenie.",
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
      "Prowadzę kursy akademickie, praktyczne warsztaty i seminaria dla społeczności uniwersyteckich. W ciągu dekady pracy nad jakością dydaktyki na Hokkaido University i APU powtarza się jeden motyw: zaczynać od problemu, który ludzie rozpoznają, i kończyć użytecznym kolejnym krokiem.",
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
      "To wybrane strony z oryginalnych decków, które sam projektowałem i prowadziłem. Pokazują, jak struktura wizualna, prowadzona refleksja i jasny moment decyzyjny wspierają proces uczenia się.",
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
  },
};

translations.ja = {
  ...translations.en,
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
  japanYearsLabel: "日本で暮らし、働いてきた年数",
  japanSinceLabel: "2009年から",
  japanDaysLabel: "日本で過ごした日数 — 更新中",
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
  timelineTwoTitle: "言語とテクノロジーの接点",
  timelineTwoBody: "NLPと言語学習システムの研究を通じて、文脈、選択、学習者経験を中心的な問いにしました。",
  timelineThreeTitle: "教育が中心になる",
  timelineThreeBody: "英語で教えることと異文化コミュニケーションについての招待ワークショップが、研究の問いを生きた教室の仕事へつなげます。",
  timelineFourTitle: "教室からの根拠",
  timelineFourBody: "15週間の研究が、学生の振り返りと実践を通じて異文化学習を可視化しました。",
  timelineFiveTitle: "APU・別府",
  timelineFiveBody: "APUでは、教育、研究、パブリック・コミュニケーションを同じ場に結びつけています。",
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
  updateJapanDayCounter();
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

const coMixExamples = {
  "en-ja": {
    language: "en",
    light: [
      "After class, a ",
      { word: "学生", meaning: "student" },
      " walked to the ",
      { word: "図書館", meaning: "library" },
      " with a friend. They opened a notebook and planned a small project.",
    ],
    rich: [
      "After class, a ",
      { word: "学生", meaning: "student" },
      " walked to the ",
      { word: "図書館", meaning: "library" },
      " with a ",
      { word: "友達", meaning: "friend" },
      ". They opened a ",
      { word: "ノート", meaning: "notebook" },
      " and planned a small project.",
    ],
    answer: ["図書館", "としょかん"],
  },
  "jp-en": {
    language: "ja",
    light: [
      "授業のあと、学生は ",
      { word: "friend", meaning: "友達" },
      " と ",
      { word: "library", meaning: "図書館" },
      " へ行きました。二人はノートを開いて、小さな計画を立てました。",
    ],
    rich: [
      "授業のあと、学生は ",
      { word: "friend", meaning: "友達" },
      " と ",
      { word: "library", meaning: "図書館" },
      " へ行きました。二人は ",
      { word: "notebook", meaning: "ノート" },
      " を開いて、小さな ",
      { word: "project", meaning: "プロジェクト" },
      " の計画を立てました。",
    ],
    answer: ["library"],
  },
};

const coMixCopy = {
  en: {
    questions: {
      "en-ja": "What is the Japanese target for “library”?",
      "jp-en": "What is the English target for “図書館”?",
    },
    correct: "Correct. The target is visible in context, not as an isolated word list.",
    incorrect: "Not quite. Read the passage again, then reveal the target meaning if you need it.",
    empty: "Type an answer first.",
  },
  pl: {
    questions: {
      "en-ja": "Jak brzmi japońskie słowo docelowe dla „library”?",
      "jp-en": "Jak brzmi angielskie słowo docelowe dla „図書館”?",
    },
    correct: "Dobrze. Słowo docelowe występuje w kontekście, a nie na oderwanej liście.",
    incorrect: "Jeszcze nie. Przeczytaj tekst ponownie, a jeśli trzeba — pokaż znaczenie słowa docelowego.",
    empty: "Najpierw wpisz odpowiedź.",
  },
};

document.querySelectorAll("[data-comix-demo]").forEach((demo) => {
  const ui = coMixCopy[demo.dataset.comixUi] || coMixCopy.en;
  const modeButtons = [...demo.querySelectorAll("[data-comix-mode]")];
  const densityButtons = [...demo.querySelectorAll("[data-comix-density]")];
  const passage = demo.querySelector("[data-comix-passage]");
  const targetList = demo.querySelector("[data-comix-target-list]");
  const question = demo.querySelector("[data-comix-question]");
  const answer = demo.querySelector("[data-comix-answer]");
  const check = demo.querySelector("[data-comix-check]");
  const feedback = demo.querySelector("[data-comix-feedback]");
  const reveal = demo.querySelector("[data-comix-reveal]");
  let mode = "en-ja";
  let density = "light";
  let meaningsVisible = false;

  const currentExample = () => coMixExamples[mode];

  const setFeedback = (message = "", isIncorrect = false) => {
    if (!feedback) return;
    feedback.textContent = message;
    feedback.classList.toggle("is-incorrect", isIncorrect);
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

  const render = () => {
    const example = currentExample();
    const parts = example[density];
    const targets = parts.filter((part) => typeof part !== "string");
    if (!passage || !question || !answer) return;

    passage.replaceChildren();
    passage.lang = example.language;
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
      });
      passage.append(word);
    });

    question.textContent = ui.questions[mode];
    answer.value = "";
    setFeedback();
    renderTargets(targets);
  };

  const updateButtons = () => {
    modeButtons.forEach((button) => {
      const active = button.dataset.comixMode === mode;
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
    const value = answer?.value.normalize("NFKC").trim().toLowerCase();
    if (!value) {
      setFeedback(ui.empty, true);
      return;
    }
    const isCorrect = currentExample().answer.some((accepted) => accepted.normalize("NFKC").toLowerCase() === value);
    setFeedback(isCorrect ? ui.correct : ui.incorrect, !isCorrect);
  };

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      mode = button.dataset.comixMode;
      meaningsVisible = false;
      updateButtons();
      render();
    });
  });

  densityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      density = button.dataset.comixDensity;
      meaningsVisible = false;
      updateButtons();
      render();
    });
  });

  reveal?.addEventListener("click", () => {
    meaningsVisible = true;
    render();
  });
  check?.addEventListener("click", checkAnswer);
  answer?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkAnswer();
  });

  updateButtons();
  render();
});

syncHeader();
setLanguage(localStorage.getItem("identity-language") || "en");
window.addEventListener("scroll", syncHeader, { passive: true });
