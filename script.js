const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const languageButtons = document.querySelectorAll("[data-lang]");
const translatable = document.querySelectorAll("[data-i18n]");
const languagePanels = document.querySelectorAll("[data-lang-panel]");

const translations = {
  en: {
    navWork: "Practice",
    navWorkshops: "Workshops",
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
    bioEyebrow: "Official Biography",
    bioTitle: "Michal Maciej Mazur is an educator, researcher, and public writer working across cultures.",
    bioBodyOne:
      "Michal Maciej Mazur is an Assistant Professor at Ritsumeikan Asia Pacific University in Japan. His work focuses on intercultural communication, global learning, faculty development, and teaching in multilingual higher-education environments. He designs courses and professional-development programmes that help educators and students interpret difference, participate more fully, and turn reflection into practical action.",
    bioBodyTwo:
      "His academic path connects language and literature, Japanese studies, information science, and natural language processing. Before joining APU, he worked and taught at Hokkaido University, where he developed courses and faculty-development activities related to English-medium instruction, intercultural communication, curriculum design, and the changing role of generative AI in higher education.",
    bioBodyThree:
      "Alongside his university work, Mazur writes as Mazzi about Japan, video games, media culture, and everyday life. His public writing brings cultural interpretation and accessible explanation to a wider audience, connecting his academic interests with journalism, games, and contemporary Japanese culture.",
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
      "Four examples showing how I work when the audience changes: future university teachers, multilingual classes, students writing for real readers, and international teams tackling space-sector challenges.",
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
    serviceEyebrow: "Workshop Offer",
    serviceTitle: "Workshops built around real teaching problems, not generic advice",
    serviceDeck:
      "I draw on work at Hokkaido University, APU, and the Ritsumeikan Space Management Program. Each session starts with a problem participants recognise and ends with a class plan, facilitation choice, or next step they can use.",
    serviceCtaEyebrow: "Collaboration",
    serviceCtaTitle: "Commission a workshop for your institution.",
    serviceCtaBody:
      "I can adapt the topic, examples, timing, and participant outputs to your programme, teaching context, and audience.",
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
    bioEyebrow: "Oficjalna biografia",
    bioTitle: "Michal Maciej Mazur jest edukatorem, badaczem i autorem pracującym ponad granicami kultur.",
    bioBodyOne:
      "Michal Maciej Mazur jest Assistant Professor na Ritsumeikan Asia Pacific University w Japonii. Jego praca koncentruje się na komunikacji międzykulturowej, global learning, faculty development oraz nauczaniu w wielojęzycznym szkolnictwie wyższym. Projektuje kursy i programy rozwoju dydaktycznego, które pomagają edukatorom i studentom interpretować różnice, pełniej uczestniczyć w uczeniu się oraz przekładać refleksję na praktyczne działanie.",
    bioBodyTwo:
      "Jego droga akademicka łączy język i literaturę, japonistykę, informatykę oraz przetwarzanie języka naturalnego. Przed dołączeniem do APU pracował i prowadził zajęcia na Hokkaido University, gdzie rozwijał kursy i działania faculty development związane z nauczaniem po angielsku, komunikacją międzykulturową, projektowaniem programu oraz zmieniającą się rolą generatywnej AI w szkolnictwie wyższym.",
    bioBodyThree:
      "Równolegle z pracą uniwersytecką Mazur pisze jako Mazzi o Japonii, grach wideo, kulturze mediów i codziennym życiu. Jego publicystyka przekłada interpretację kultury i złożone konteksty na przystępny język, łącząc zainteresowania akademickie z dziennikarstwem, grami i współczesną kulturą Japonii.",
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
      "Cztery przykłady pokazujące, jak pracuję, gdy zmienia się grupa: przyszli nauczyciele akademiccy, wielojęzyczne klasy, studenci piszący dla prawdziwych czytelników i międzynarodowe zespoły mierzące się z wyzwaniami sektora kosmicznego.",
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
    serviceEyebrow: "Oferta warsztatów",
    serviceTitle: "Warsztaty zbudowane wokół prawdziwych problemów dydaktycznych",
    serviceDeck:
      "Korzystam z doświadczeń Hokkaido University, APU i Ritsumeikan Space Management Program. Każda sesja zaczyna się od problemu, który uczestnicy rozpoznają, i kończy planem zajęć, decyzją facylitacyjną albo następnym krokiem, którego mogą użyć.",
    serviceCtaEyebrow: "Współpraca",
    serviceCtaTitle: "Zamów warsztat dla swojej instytucji.",
    serviceCtaBody:
      "Mogę dopasować temat, przykłady, czas i rezultaty uczestników do programu, kontekstu dydaktycznego oraz odbiorców.",
    essayBack: "Wróć na stronę główną",
    essayPageEyebrow: "Esej programowy",
    essayPageTitle: "Gry, kultura i uczenie międzykulturowe",
    essayPageDeck:
      "Dlaczego moja praca o Japonii, grach i kulturze publicznej należy do tej samej praktyki zawodowej co edukacja międzykulturowa i szkolnictwo wyższe.",
    backTop: "Do góry",
  },
};

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-japan-years]").forEach((node) => {
  node.textContent = new Date().getFullYear() - 2009;
});

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
  languagePanels.forEach((panel) => {
    panel.hidden = panel.dataset.langPanel !== lang;
  });
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

syncHeader();
setLanguage(localStorage.getItem("identity-language") || "en");
window.addEventListener("scroll", syncHeader, { passive: true });
