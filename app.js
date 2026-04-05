/* مشكلات في طريق الحياة الإسلامية — PROBLEMS ON THE ISLAMIC PATH — app.js v2.0 */
/* Based on "Mushkilat fi Tariq al-Hayat al-Islamiyyah" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'مشكلات في طريق الحياة الإسلامية',
    splashSub: 'حلول عملية من القرآن والسنة لعقبات الطريق',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة العنكبوت ٢٩: ٢',
    tabHome: 'الرئيسية', tabCards: 'المشكلات', tabDeep: 'حلول عميقة',
    tabHabits: 'العادات', tabQuiz: 'اختبار', tabAbout: 'الكتاب',
    cardsTitle: 'مشكلات الطريق',
    cardsDesc: '٢٠ عقبة تواجه المسلمين مع حلول عملية من الشيخ الغزالي',
    deepTitle: 'حلول عميقة',
    deepDesc: 'غوص في جذور المشكلات واستخراج الحلول القرآنية',
    habitsTitle: 'عاداتي اليومية',
    habitsDesc: 'عادات يومية لتجاوز العقبات في طريق الحياة الإسلامية',
    quizTitle: 'اختبر وعيك',
    quizDesc: 'هل تعرف كيف تواجه مشكلات الحياة الإسلامية؟',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية لتفريج الهموم',
    resetBtn: 'إعادة تعيين اليوم',
    submitQuiz: 'اعرف النتيجة',
    dailyLabel: '✨ مشكلة اليوم',
    quizAgain: 'أعد الاختبار',
    yes: 'نعم', no: 'لا', sometimes: 'أحياناً',
    share: 'مشاركة',
    searchPlaceholder: 'ابحث في المشكلات...',
    streakMsg: 'يوم متتالي!',
    allDone: 'أحسنت! أكملت جميع العادات!',
    splashFeatures: [
      '٢٠ مشكلة تواجه المسلمين مع حلولها',
      'حلول عميقة من القرآن والسنة',
      'عادات يومية لتجاوز العقبات',
      'اختبار + أدعية لتفريج الهموم'
    ],
  },
  en: {
    appTitle: 'Problems on the Islamic Path',
    splashSub: 'Practical solutions from Quran and Sunnah for life\'s obstacles',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Al-Ankabut 29:2',
    tabHome: 'Home', tabCards: 'Problems', tabDeep: 'Solutions',
    tabHabits: 'Habits', tabQuiz: 'Quiz', tabAbout: 'Book',
    cardsTitle: 'Obstacles on the Path',
    cardsDesc: '20 obstacles facing Muslims with practical solutions from Sheikh al-Ghazali',
    deepTitle: 'Deep Solutions',
    deepDesc: 'Diving into the root causes and extracting Quranic solutions',
    habitsTitle: 'My Daily Habits',
    habitsDesc: 'Daily habits to overcome obstacles on the Islamic path',
    quizTitle: 'Test Your Awareness',
    quizDesc: 'Do you know how to face the problems of Islamic life?',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Relief',
    resetBtn: 'Reset Today',
    submitQuiz: 'See Results',
    dailyLabel: '✨ Today\'s Challenge',
    quizAgain: 'Retake Quiz',
    yes: 'Yes', no: 'No', sometimes: 'Sometimes',
    share: 'Share',
    searchPlaceholder: 'Search problems...',
    streakMsg: 'day streak!',
    allDone: 'Well done! All habits completed!',
    splashFeatures: [
      '20 problems Muslims face with solutions',
      'Deep solutions from Quran and Sunnah',
      'Daily habits to overcome obstacles',
      'Quiz + duas for relief'
    ],
  },
  fr: {
    appTitle: 'Problemes sur le Chemin Islamique',
    splashSub: 'Solutions pratiques du Coran et de la Sunna pour les obstacles de la vie',
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Al-Ankabut 29:2',
    tabHome: 'Accueil', tabCards: 'Problemes', tabDeep: 'Solutions',
    tabHabits: 'Habitudes', tabQuiz: 'Quiz', tabAbout: 'Livre',
    cardsTitle: 'Obstacles du Chemin',
    cardsDesc: '20 obstacles auxquels font face les musulmans avec des solutions pratiques',
    deepTitle: 'Solutions Profondes',
    deepDesc: 'Plongee dans les causes profondes et extraction des solutions coraniques',
    habitsTitle: 'Mes Habitudes Quotidiennes',
    habitsDesc: 'Habitudes quotidiennes pour surmonter les obstacles',
    quizTitle: 'Testez Votre Conscience',
    quizDesc: 'Savez-vous comment affronter les problemes de la vie islamique ?',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour le Soulagement',
    resetBtn: 'Reinitialiser',
    submitQuiz: 'Voir les Resultats',
    dailyLabel: '✨ Defi du Jour',
    quizAgain: 'Refaire le Quiz',
    yes: 'Oui', no: 'Non', sometimes: 'Parfois',
    share: 'Partager',
    searchPlaceholder: 'Rechercher...',
    streakMsg: 'jours consecutifs !',
    allDone: 'Bravo ! Toutes les habitudes accomplies !',
    splashFeatures: [
      '20 problemes avec solutions',
      'Solutions profondes du Coran et de la Sunna',
      'Habitudes quotidiennes',
      'Quiz + duas pour le soulagement'
    ],
  }
};

// ═══════════════ CARDS DATA (20 problems) ═══════════════
const CARDS = [
  {
    id: 1, emoji: '🔥',
    ar: { title: 'ضعف الإيمان', desc: 'يعالج الغزالي: ضعف الإيمان هو أصل كل المشكلات. عندما يبتعد القلب عن الله تنهار كل الدفاعات. الغزالي يرى أن تقوية الإيمان تبدأ بالعودة للقرآن والذكر.', verse: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', action: 'اقرأ صفحة من القرآن اليوم وتدبر معانيها' },
    en: { title: 'Weak Faith', desc: 'Al-Ghazali addresses: Weak faith is the root of all problems. When the heart moves away from God, all defenses collapse. Al-Ghazali sees that strengthening faith begins with returning to the Quran and remembrance.', verse: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', action: 'Read a page from the Quran today and reflect on its meanings' },
    fr: { title: 'Faiblesse de la Foi', desc: 'Al-Ghazali aborde: La faiblesse de la foi est la racine de tous les problemes. Quand le coeur s\'eloigne de Dieu, toutes les defenses s\'effondrent. Al-Ghazali voit que renforcer la foi commence par le retour au Coran.', verse: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', action: 'Lisez une page du Coran aujourd\'hui et reflechissez a ses sens' }
  },
  {
    id: 2, emoji: '🎭',
    ar: { title: 'الفجوة بين القول والعمل', desc: 'يعالج الغزالي: كثير من المسلمين يقولون ما لا يفعلون. هذه الفجوة تضعف الأمة وتفقد الدعوة مصداقيتها. الإسلام دين عمل لا كلام فارغ.', verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ', action: 'طبّق شيئاً واحداً تتحدث عنه دائماً' },
    en: { title: 'Gap Between Words and Actions', desc: 'Al-Ghazali addresses: Many Muslims say what they do not do. This gap weakens the Ummah and robs the message of credibility. Islam is a religion of action, not empty talk.', verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ', action: 'Apply one thing you always talk about' },
    fr: { title: 'Ecart entre Paroles et Actes', desc: 'Al-Ghazali aborde: Beaucoup de musulmans disent ce qu\'ils ne font pas. Cet ecart affaiblit l\'Oumma et prive le message de credibilite. L\'Islam est une religion d\'action.', verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لِمَ تَقُولُونَ مَا لَا تَفْعَلُونَ', action: 'Appliquez une chose dont vous parlez toujours' }
  },
  {
    id: 3, emoji: '📚',
    ar: { title: 'الجهل بالدين', desc: 'يعالج الغزالي: الجهل بالإسلام الصحيح يجعل المسلمين فريسة للتطرف والخرافات. العلم الشرعي الصحيح هو الحل الأول لكل مشكلة.', verse: 'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ', action: 'تعلم حكماً شرعياً جديداً اليوم' },
    en: { title: 'Ignorance of Religion', desc: 'Al-Ghazali addresses: Ignorance of true Islam makes Muslims prey to extremism and superstitions. Correct religious knowledge is the first solution to every problem.', verse: 'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ', action: 'Learn a new religious ruling today' },
    fr: { title: 'Ignorance de la Religion', desc: 'Al-Ghazali aborde: L\'ignorance du vrai Islam rend les musulmans proie de l\'extremisme et des superstitions. Le savoir religieux correct est la premiere solution a tout probleme.', verse: 'هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ', action: 'Apprenez un nouveau jugement religieux aujourd\'hui' }
  },
  {
    id: 4, emoji: '⚔️',
    ar: { title: 'التعصب والتشدد', desc: 'التشدد في الدين يشوه صورة الإسلام ويبعد الناس عنه. الغزالي يدعو للوسطية والاعتدال كما أمر الله.', verse: 'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا', action: 'كن متسامحاً في حوارك مع المخالفين' },
    en: { title: 'Fanaticism and Extremism', desc: 'Al-Ghazali addresses: Extremism in religion distorts the image of Islam and drives people away. Al-Ghazali calls for moderation as God commanded.', verse: 'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا', action: 'Be tolerant in your dialogue with those who disagree' },
    fr: { title: 'Fanatisme et Extremisme', desc: 'Al-Ghazali aborde: L\'extremisme dans la religion deforme l\'image de l\'Islam et eloigne les gens. Al-Ghazali appelle a la moderation comme Dieu l\'a ordonne.', verse: 'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا', action: 'Soyez tolerant dans votre dialogue avec ceux qui sont en desaccord' }
  },
  {
    id: 5, emoji: '💔',
    ar: { title: 'الفرقة والانقسام', desc: 'يعالج الغزالي: تفرق المسلمين إلى فرق وأحزاب متناحرة هو من أخطر المشكلات. الوحدة قوة والفرقة ضعف.', verse: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', action: 'تواصل مع مسلم من خلفية مختلفة' },
    en: { title: 'Division and Disunity', desc: 'Al-Ghazali addresses: Muslims splitting into warring factions is among the gravest problems. Unity is strength and division is weakness.', verse: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', action: 'Connect with a Muslim from a different background' },
    fr: { title: 'Division et Desunion', desc: 'Al-Ghazali aborde: La division des musulmans en factions rivales est l\'un des problemes les plus graves. L\'unite est force et la division est faiblesse.', verse: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', action: 'Connectez-vous avec un musulman d\'un contexte different' }
  },
  {
    id: 6, emoji: '🧊',
    ar: { title: 'الجمود الفكري', desc: 'يعالج الغزالي: إغلاق باب الاجتهاد وتقليد الآباء بلا تفكير أوقع الأمة في تخلف. نحتاج فقهاً معاصراً يواكب العصر.', verse: 'قَالُوا حَسْبُنَا مَا وَجَدْنَا عَلَيْهِ آبَاءَنَا', action: 'اقرأ رأياً فقهياً معاصراً في مسألة تهمك' },
    en: { title: 'Intellectual Stagnation', desc: 'Al-Ghazali addresses: Closing the door of ijtihad and blind imitation left the Ummah in stagnation. We need contemporary jurisprudence for our times.', verse: 'قَالُوا حَسْبُنَا مَا وَجَدْنَا عَلَيْهِ آبَاءَنَا', action: 'Read a contemporary juristic opinion on a relevant matter' },
    fr: { title: 'Stagnation Intellectuelle', desc: 'Al-Ghazali aborde: La fermeture de la porte de l\'ijtihad et l\'imitation aveugle ont laisse l\'Oumma dans la stagnation. Nous avons besoin d\'une jurisprudence contemporaine.', verse: 'قَالُوا حَسْبُنَا مَا وَجَدْنَا عَلَيْهِ آبَاءَنَا', action: 'Lisez un avis juridique contemporain sur un sujet pertinent' }
  },
  {
    id: 7, emoji: '🏫',
    ar: { title: 'تخلف التعليم', desc: 'يعالج الغزالي: المسلمون تخلوا عن ريادتهم العلمية. الحل في إصلاح التعليم وربطه بروح الإسلام مع الانفتاح على العلوم الحديثة.', verse: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', action: 'ساهم في تعليم شخص شيئاً مفيداً اليوم' },
    en: { title: 'Educational Decline', desc: 'Al-Ghazali addresses: Muslims abandoned their scientific leadership. The solution is reforming education, connecting it to Islam\'s spirit while being open to modern sciences.', verse: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', action: 'Help teach someone something useful today' },
    fr: { title: 'Declin Educatif', desc: 'Al-Ghazali aborde: Les musulmans ont abandonne leur leadership scientifique. La solution est de reformer l\'education en la reliant a l\'esprit de l\'Islam tout en s\'ouvrant aux sciences modernes.', verse: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ', action: 'Aidez a enseigner quelque chose d\'utile a quelqu\'un aujourd\'hui' }
  },
  {
    id: 8, emoji: '💰',
    ar: { title: 'الفقر والتخلف الاقتصادي', desc: 'يعالج الغزالي: الفقر عدو الإيمان. الإسلام يحث على العمل والإنتاج والعدالة الاقتصادية. التواكل ليس توكلاً.', verse: 'هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا', action: 'أتقن عملك اليوم وأدِّ واجبك بإخلاص' },
    en: { title: 'Poverty and Economic Decline', desc: 'Al-Ghazali addresses: Poverty is the enemy of faith. Islam encourages work, productivity, and economic justice. Passivity is not trust in God.', verse: 'هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا', action: 'Do your best at work today with sincerity' },
    fr: { title: 'Pauvrete et Declin Economique', desc: 'Al-Ghazali aborde: La pauvrete est l\'ennemi de la foi. L\'Islam encourage le travail, la productivite et la justice economique. La passivite n\'est pas la confiance en Dieu.', verse: 'هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا فَامْشُوا فِي مَنَاكِبِهَا', action: 'Faites de votre mieux au travail aujourd\'hui avec sincerite' }
  },
  {
    id: 9, emoji: '👫',
    ar: { title: 'تهميش المرأة', desc: 'إقصاء المرأة من الحياة العامة مخالف للإسلام. المرأة شريكة في بناء المجتمع وقد كانت فاعلة في عهد النبي.', verse: 'وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ', action: 'ادعم حق امرأة في التعلم أو العمل اليوم' },
    en: { title: 'Marginalization of Women', desc: 'Excluding women from public life contradicts Islam. Women are partners in building society and were active during the Prophet\'s time.', verse: 'وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ', action: 'Support a woman\'s right to education or work today' },
    fr: { title: 'Marginalisation des Femmes', desc: 'Exclure les femmes de la vie publique contredit l\'Islam. Les femmes sont des partenaires dans la construction de la societe et etaient actives a l\'epoque du Prophete.', verse: 'وَالْمُؤْمِنُونَ وَالْمُؤْمِنَاتُ بَعْضُهُمْ أَوْلِيَاءُ بَعْضٍ', action: 'Soutenez le droit d\'une femme a l\'education ou au travail aujourd\'hui' }
  },
  {
    id: 10, emoji: '🏛️',
    ar: { title: 'الاستبداد السياسي', desc: 'الحكم الاستبدادي يخالف مبدأ الشورى الإسلامي. الأمة تحتاج حكماً عادلاً يقوم على الشورى ومحاسبة الحاكم.', verse: 'وَأَمْرُهُمْ شُورَى بَيْنَهُمْ', action: 'شارك برأيك البناء في قضية تهم مجتمعك' },
    en: { title: 'Political Tyranny', desc: 'Tyrannical rule contradicts the Islamic principle of consultation. The Ummah needs just governance based on consultation and accountability.', verse: 'وَأَمْرُهُمْ شُورَى بَيْنَهُمْ', action: 'Share your constructive opinion on a community issue' },
    fr: { title: 'Tyrannie Politique', desc: 'Le pouvoir tyrannique contredit le principe islamique de la consultation. L\'Oumma a besoin d\'une gouvernance juste basee sur la consultation et la responsabilite.', verse: 'وَأَمْرُهُمْ شُورَى بَيْنَهُمْ', action: 'Partagez votre opinion constructive sur un sujet communautaire' }
  },
  {
    id: 11, emoji: '📱',
    ar: { title: 'التبعية الثقافية', desc: 'تقليد الغرب بلا تمييز يفقد المسلمين هويتهم. نأخذ من الغرب العلم والتقنية ونحافظ على قيمنا.', verse: 'وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنسَاهُمْ أَنفُسَهُمْ', action: 'تذكر قيمة إسلامية وطبقها اليوم' },
    en: { title: 'Cultural Dependency', desc: 'Blindly imitating the West causes Muslims to lose their identity. We take science and technology from the West while preserving our values.', verse: 'وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنسَاهُمْ أَنفُسَهُمْ', action: 'Remember an Islamic value and apply it today' },
    fr: { title: 'Dependance Culturelle', desc: 'Imiter aveuglement l\'Occident fait perdre aux musulmans leur identite. Nous prenons la science et la technologie de l\'Occident tout en preservant nos valeurs.', verse: 'وَلَا تَكُونُوا كَالَّذِينَ نَسُوا اللَّهَ فَأَنسَاهُمْ أَنفُسَهُمْ', action: 'Rappelez-vous une valeur islamique et appliquez-la aujourd\'hui' }
  },
  {
    id: 12, emoji: '🗣️',
    ar: { title: 'ضعف الدعوة', desc: 'الدعوة إلى الله تحتاج حكمة وأسلوب عصري. التنفير والغلظة يبعدان الناس عن الدين.', verse: 'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ', action: 'قدم نصيحة لطيفة لشخص بأسلوب حكيم' },
    en: { title: 'Weakness in Da\'wah', desc: 'Calling to God requires wisdom and a modern approach. Harshness and repulsion drive people away from religion.', verse: 'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ', action: 'Give gentle advice to someone with wisdom' },
    fr: { title: 'Faiblesse de la Da\'wah', desc: 'Appeler a Dieu necessite sagesse et approche moderne. La durete et la repulsion eloignent les gens de la religion.', verse: 'ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ', action: 'Donnez un conseil doux a quelqu\'un avec sagesse' }
  },
  {
    id: 13, emoji: '🌀',
    ar: { title: 'الخرافات والبدع', desc: 'انتشار الخرافات في المجتمعات الإسلامية يشوه الدين الحقيقي. العودة للقرآن والسنة الصحيحة هي الحل.', verse: 'وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا', action: 'تحقق من صحة معلومة دينية تسمعها اليوم' },
    en: { title: 'Superstitions and Innovations', desc: 'The spread of superstitions in Muslim societies distorts true religion. Returning to the Quran and authentic Sunnah is the solution.', verse: 'وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا', action: 'Verify a religious claim you hear today' },
    fr: { title: 'Superstitions et Innovations', desc: 'La propagation des superstitions dans les societes musulmanes deforme la vraie religion. Le retour au Coran et a la Sunna authentique est la solution.', verse: 'وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانتَهُوا', action: 'Verifiez une affirmation religieuse que vous entendez aujourd\'hui' }
  },
  {
    id: 14, emoji: '😴',
    ar: { title: 'التواكل وترك العمل', desc: 'بعض المسلمين يخلطون بين التوكل والتواكل. التوكل على الله يعني بذل الجهد ثم تفويض الأمر لله.', verse: 'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ', action: 'أنجز مهمة كنت تؤجلها بدلاً من الانتظار' },
    en: { title: 'Passivity and Inaction', desc: 'Some Muslims confuse trust in God with passivity. Trusting God means making effort then leaving the outcome to Him.', verse: 'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ', action: 'Complete a task you have been postponing instead of waiting' },
    fr: { title: 'Passivite et Inaction', desc: 'Certains musulmans confondent confiance en Dieu et passivite. La confiance en Dieu signifie faire l\'effort puis laisser le resultat a Lui.', verse: 'وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ', action: 'Terminez une tache que vous reportiez au lieu d\'attendre' }
  },
  {
    id: 15, emoji: '🧱',
    ar: { title: 'ضعف الأخلاق', desc: 'أخلاق بعض المسلمين لا تمثل الإسلام. النبي بُعث ليتمم مكارم الأخلاق والإسلام جوهره الأخلاق.', verse: 'وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ', action: 'أحسن خلقك مع شخص واحد اليوم' },
    en: { title: 'Moral Decline', desc: 'The ethics of some Muslims do not represent Islam. The Prophet was sent to perfect noble character — Islam\'s essence is morality.', verse: 'وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ', action: 'Show excellent character to one person today' },
    fr: { title: 'Declin Moral', desc: 'L\'ethique de certains musulmans ne represente pas l\'Islam. Le Prophete a ete envoye pour perfectionner le noble caractere — l\'essence de l\'Islam est la moralite.', verse: 'وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ', action: 'Montrez un excellent caractere envers une personne aujourd\'hui' }
  },
  {
    id: 16, emoji: '🌐',
    ar: { title: 'العزلة عن العالم', desc: 'الانغلاق على النفس يضعف الأمة. الإسلام دعا للانفتاح والتعارف مع الحفاظ على الهوية.', verse: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا', action: 'تعرف على ثقافة مختلفة بانفتاح واحترام' },
    en: { title: 'Isolation from the World', desc: 'Self-isolation weakens the Ummah. Islam called for openness and getting to know others while preserving identity.', verse: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا', action: 'Learn about a different culture with openness and respect' },
    fr: { title: 'Isolement du Monde', desc: 'L\'auto-isolement affaiblit l\'Oumma. L\'Islam a appele a l\'ouverture et a la connaissance mutuelle tout en preservant l\'identite.', verse: 'يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا', action: 'Decouvrez une culture differente avec ouverture et respect' }
  },
  {
    id: 17, emoji: '⚡',
    ar: { title: 'الاستعجال في النتائج', desc: 'تغيير الأمة يحتاج صبراً وعملاً طويلاً. الاستعجال يؤدي للإحباط. طريق الإصلاح طويل لكنه ممكن.', verse: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنفُسِهِمْ', action: 'ابدأ بتغيير صغير في نفسك اليوم بصبر' },
    en: { title: 'Rushing for Results', desc: 'Changing the Ummah requires patience and long-term work. Rushing leads to frustration. The path of reform is long but possible.', verse: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنفُسِهِمْ', action: 'Start a small change in yourself today with patience' },
    fr: { title: 'Precipitation dans les Resultats', desc: 'Changer l\'Oumma necessite patience et travail a long terme. La precipitation mene a la frustration. Le chemin de la reforme est long mais possible.', verse: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنفُسِهِمْ', action: 'Commencez un petit changement en vous aujourd\'hui avec patience' }
  },
  {
    id: 18, emoji: '🎪',
    ar: { title: 'الشكلية في العبادة', desc: 'كثيرون يؤدون العبادات شكلياً بلا روح. الصلاة بلا خشوع والصيام بلا تقوى لا يغيران شيئاً.', verse: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ', action: 'صلِّ صلاة واحدة اليوم بخشوع وتدبر كامل' },
    en: { title: 'Ritualism Without Spirit', desc: 'Many perform worship as mere rituals without spirit. Prayer without humility and fasting without piety change nothing.', verse: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ', action: 'Pray one prayer today with full humility and reflection' },
    fr: { title: 'Ritualisme Sans Esprit', desc: 'Beaucoup accomplissent les actes d\'adoration comme de simples rituels sans esprit. La priere sans humilite et le jeune sans piete ne changent rien.', verse: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ', action: 'Priez une priere aujourd\'hui avec pleine humilite et reflexion' }
  },
  {
    id: 19, emoji: '🔗',
    ar: { title: 'الانفصال بين الدين والحياة', desc: 'فصل الدين عن الحياة اليومية يجعل الإسلام ديناً نظرياً. الإسلام منهج حياة كامل لا عبادات في المسجد فقط.', verse: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ', action: 'استحضر النية لله في عمل دنيوي اليوم' },
    en: { title: 'Separating Religion from Life', desc: 'Separating religion from daily life makes Islam theoretical. Islam is a complete way of life, not just worship in the mosque.', verse: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ', action: 'Make your intention for God in a worldly task today' },
    fr: { title: 'Separer la Religion de la Vie', desc: 'Separer la religion de la vie quotidienne rend l\'Islam theorique. L\'Islam est un mode de vie complet, pas seulement l\'adoration dans la mosquee.', verse: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ', action: 'Faites votre intention pour Dieu dans une tache quotidienne aujourd\'hui' }
  },
  {
    id: 20, emoji: '🌟',
    ar: { title: 'فقدان الأمل', desc: 'اليأس من إصلاح حال الأمة حرام. الله وعد بالنصر لمن أخذ بالأسباب. التفاؤل عبادة والأمل طريق.', verse: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ', action: 'ابدأ يومك بأمل وتفاؤل — اذكر نعمة واحدة تشكر الله عليها' },
    en: { title: 'Losing Hope', desc: 'Despair of reforming the Ummah is forbidden. God promised victory to those who take action. Optimism is worship and hope is the path.', verse: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ', action: 'Start your day with hope — mention one blessing you thank God for' },
    fr: { title: 'Perte d\'Espoir', desc: 'Le desespoir de reformer l\'Oumma est interdit. Dieu a promis la victoire a ceux qui agissent. L\'optimisme est adoration et l\'espoir est le chemin.', verse: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ', action: 'Commencez votre journee avec espoir — mentionnez une benediction pour laquelle vous remerciez Dieu' }
  },
  {
    id: 21, emoji: '📱',
    ar: { title: 'مشكلة وسائل التواصل', desc: 'وسائل التواصل الاجتماعي سلاح ذو حدين. أصبحت أداة لنشر الإشاعات والفتن والتنمر بدل أن تكون منبراً للخير والعلم. الإسلام يأمر بالتثبت من الأخبار قبل نشرها.', verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا', action: 'تحقق من صحة خبر قبل مشاركته اليوم' },
    en: { title: 'Social Media Problems', desc: 'Social media is a double-edged sword. It has become a tool for spreading rumors, discord, and bullying instead of serving knowledge and goodness. Islam commands verifying news before spreading it.', verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا', action: 'Verify a news item before sharing it today' },
    fr: { title: 'Problemes des Reseaux Sociaux', desc: 'Les reseaux sociaux sont une arme a double tranchant. Ils sont devenus un outil de propagation de rumeurs et de discorde au lieu de servir le savoir et le bien. L\'Islam ordonne de verifier les nouvelles avant de les diffuser.', verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا', action: 'Verifiez une information avant de la partager aujourd\'hui' }
  },
  {
    id: 22, emoji: '👴',
    ar: { title: 'الفجوة بين الأجيال', desc: 'الفجوة بين الأجيال تتسع. الآباء لا يفهمون الأبناء والأبناء لا يحترمون الآباء. الإسلام يدعو للحوار والتفاهم بين الأجيال والبر بالوالدين.', verse: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا', action: 'تحدث مع أحد والديك أو أبنائك حديثاً عميقاً اليوم' },
    en: { title: 'The Generational Gap', desc: 'The gap between generations widens. Parents do not understand children and children do not respect parents. Islam calls for dialogue and mutual understanding between generations and honoring parents.', verse: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا', action: 'Have a deep conversation with a parent or child today' },
    fr: { title: 'Le Fosse Generationnel', desc: 'Le fosse entre les generations se creuse. Les parents ne comprennent pas les enfants et les enfants ne respectent pas les parents. L\'Islam appelle au dialogue et a la comprehension mutuelle entre les generations.', verse: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا', action: 'Ayez une conversation profonde avec un parent ou un enfant aujourd\'hui' }
  },
  {
    id: 23, emoji: '🗣️',
    ar: { title: 'ضياع اللغة العربية', desc: 'إهمال اللغة العربية يقطع المسلمين عن فهم القرآن والسنة مباشرة. اللغة وعاء الثقافة وفقدانها فقدان للهوية. تعليم العربية فريضة حضارية.', verse: 'إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ', action: 'تعلم كلمة عربية جديدة اليوم أو علّمها لغيرك' },
    en: { title: 'Loss of the Arabic Language', desc: 'Neglecting Arabic disconnects Muslims from directly understanding the Quran and Sunnah. Language is the vessel of culture and losing it means losing identity. Teaching Arabic is a civilizational duty.', verse: 'إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ', action: 'Learn a new Arabic word today or teach one to someone' },
    fr: { title: 'Perte de la Langue Arabe', desc: 'Negliger l\'arabe deconnecte les musulmans de la comprehension directe du Coran et de la Sunna. La langue est le receptacle de la culture et la perdre c\'est perdre l\'identite. Enseigner l\'arabe est un devoir civilisationnel.', verse: 'إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ', action: 'Apprenez un nouveau mot arabe aujourd\'hui ou enseignez-en un a quelqu\'un' }
  },
  {
    id: 24, emoji: '🛒',
    ar: { title: 'المادية والاستهلاك', desc: 'المادية والاستهلاك المفرط يفرغان الحياة من معناها. الإسلام يدعو للقناعة والزهد فيما لا ينفع. السعادة في الإيمان لا في تكديس الأموال والممتلكات.', verse: 'زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ مِنَ النِّسَاءِ وَالْبَنِينَ وَالْقَنَاطِيرِ الْمُقَنطَرَةِ', action: 'تخلص من شيء لا تحتاجه وتبرع به لمحتاج' },
    en: { title: 'Materialism and Consumerism', desc: 'Materialism and excessive consumption empty life of meaning. Islam calls for contentment and detachment from what brings no benefit. Happiness lies in faith, not in hoarding wealth and possessions.', verse: 'زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ مِنَ النِّسَاءِ وَالْبَنِينَ وَالْقَنَاطِيرِ الْمُقَنطَرَةِ', action: 'Get rid of something you do not need and donate it to someone in need' },
    fr: { title: 'Materialisme et Consumerisme', desc: 'Le materialisme et la consommation excessive vident la vie de son sens. L\'Islam appelle a la contentement et au detachement de ce qui ne profite pas. Le bonheur reside dans la foi, pas dans l\'accumulation de richesses.', verse: 'زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ مِنَ النِّسَاءِ وَالْبَنِينَ وَالْقَنَاطِيرِ الْمُقَنطَرَةِ', action: 'Debarrassez-vous de quelque chose dont vous n\'avez pas besoin et donnez-le a quelqu\'un dans le besoin' }
  },
  {
    id: 25, emoji: '🪞',
    ar: { title: 'أزمة الهوية', desc: 'كثير من المسلمين يعانون من أزمة هوية بين الانتماء لحضارتهم والانجذاب للثقافة الغربية. الإسلام يقدم هوية واضحة تجمع بين الأصالة والمعاصرة.', verse: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ', action: 'اكتب ثلاث قيم إسلامية تفتخر بها وتعيشها يومياً' },
    en: { title: 'The Identity Crisis', desc: 'Many Muslims suffer from an identity crisis between belonging to their civilization and being attracted to Western culture. Islam offers a clear identity that combines authenticity with modernity.', verse: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ', action: 'Write down three Islamic values you are proud of and live by daily' },
    fr: { title: 'La Crise d\'Identite', desc: 'Beaucoup de musulmans souffrent d\'une crise d\'identite entre l\'appartenance a leur civilisation et l\'attraction de la culture occidentale. L\'Islam offre une identite claire qui combine authenticite et modernite.', verse: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ', action: 'Ecrivez trois valeurs islamiques dont vous etes fier et que vous vivez quotidiennement' }
  }
];

// ═══════════════ DEEP REFLECTIONS (6 items) ═══════════════
const REFLECTIONS = [
  {
    emoji: '🔍',
    ar: { title: 'تشخيص المرض قبل العلاج', problem: 'يشخّص الغزالي: المسلمون يعالجون الأعراض ويتجاهلون الأسباب', solution: 'الغزالي يدعو لتشخيص جذور المشكلات قبل البحث عن حلول سطحية', verse: 'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا', verseRef: 'العنكبوت ٢٩: ٢٠' },
    en: { title: 'Diagnose Before Treating', problem: 'Al-Ghazali diagnoses: Muslims treat symptoms and ignore causes', solution: 'Al-Ghazali calls for diagnosing root causes before seeking superficial solutions', verse: 'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا', verseRef: 'Al-Ankabut 29:20' },
    fr: { title: 'Diagnostiquer Avant de Traiter', problem: 'Al-Ghazali diagnostique: Les musulmans traitent les symptomes et ignorent les causes', solution: 'Al-Ghazali appelle a diagnostiquer les causes profondes avant de chercher des solutions superficielles', verse: 'قُلْ سِيرُوا فِي الْأَرْضِ فَانظُرُوا', verseRef: 'Al-Ankabut 29:20' }
  },
  {
    emoji: '🌊',
    ar: { title: 'التغيير يبدأ من الداخل', problem: 'يشخّص الغزالي: نطالب بتغيير العالم ولا نغير أنفسنا', solution: 'يقترح الغزالي: إصلاح الفرد هو الخطوة الأولى لإصلاح الأمة. كن التغيير الذي تريده.', verse: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنفُسِهِمْ', verseRef: 'الرعد ١٣: ١١' },
    en: { title: 'Change Starts Within', problem: 'Al-Ghazali diagnoses: We demand the world change but do not change ourselves', solution: 'Al-Ghazali proposes: Reforming the individual is the first step to reforming the Ummah. Be the change you want to see.', verse: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنفُسِهِمْ', verseRef: 'Ar-Ra\'d 13:11' },
    fr: { title: 'Le Changement Commence de l\'Interieur', problem: 'Al-Ghazali diagnostique: Nous exigeons que le monde change mais ne changeons pas nous-memes', solution: 'Al-Ghazali propose: Reformer l\'individu est la premiere etape pour reformer l\'Oumma. Soyez le changement que vous voulez voir.', verse: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّى يُغَيِّرُوا مَا بِأَنفُسِهِمْ', verseRef: 'Ar-Ra\'d 13:11' }
  },
  {
    emoji: '⚖️',
    ar: { title: 'الوسطية هي الحل', problem: 'يشخّص الغزالي: التطرف يميناً أو يساراً يدمر الأمة', solution: 'يقترح الغزالي: الوسطية الإسلامية ليست ضعفاً بل هي قوة الاعتدال والحكمة', verse: 'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا', verseRef: 'البقرة ٢: ١٤٣' },
    en: { title: 'Moderation Is the Solution', problem: 'Al-Ghazali diagnoses: Extremism in either direction destroys the Ummah', solution: 'Al-Ghazali proposes: Islamic moderation is not weakness but the strength of balance and wisdom', verse: 'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا', verseRef: 'Al-Baqarah 2:143' },
    fr: { title: 'La Moderation Est la Solution', problem: 'Al-Ghazali diagnostique: L\'extremisme dans les deux sens detruit l\'Oumma', solution: 'Al-Ghazali propose: La moderation islamique n\'est pas une faiblesse mais la force de l\'equilibre et de la sagesse', verse: 'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا', verseRef: 'Al-Baqarah 2:143' }
  },
  {
    emoji: '🔑',
    ar: { title: 'العلم مفتاح الحلول', problem: 'يشخّص الغزالي: الجهل يولد التعصب والخرافات والتخلف', solution: 'يقترح الغزالي: العلم الشرعي والعلم الدنيوي معاً هما سلاح الأمة', verse: 'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ', verseRef: 'الزمر ٣٩: ٩' },
    en: { title: 'Knowledge Is the Key', problem: 'Al-Ghazali diagnoses: Ignorance breeds fanaticism, superstition, and backwardness', solution: 'Al-Ghazali proposes: Religious knowledge and worldly knowledge together are the Ummah\'s weapon', verse: 'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ', verseRef: 'Az-Zumar 39:9' },
    fr: { title: 'Le Savoir Est la Cle', problem: 'Al-Ghazali diagnostique: L\'ignorance engendre le fanatisme, la superstition et le retard', solution: 'Al-Ghazali propose: Le savoir religieux et le savoir mondain ensemble sont l\'arme de l\'Oumma', verse: 'قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ', verseRef: 'Az-Zumar 39:9' }
  },
  {
    emoji: '🤝',
    ar: { title: 'الوحدة قبل كل شيء', problem: 'يشخّص الغزالي: الخلافات الداخلية تستنزف طاقة الأمة', solution: 'يقترح الغزالي: توحيد الصفوف حول المشتركات أهم من الانشغال بالخلافات الفرعية', verse: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', verseRef: 'آل عمران ٣: ١٠٣' },
    en: { title: 'Unity Before Everything', problem: 'Al-Ghazali diagnoses: Internal disputes drain the Ummah\'s energy', solution: 'Al-Ghazali proposes: Uniting around common ground is more important than dwelling on secondary differences', verse: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', verseRef: 'Al-Imran 3:103' },
    fr: { title: 'L\'Unite Avant Tout', problem: 'Al-Ghazali diagnostique: Les disputes internes epuisent l\'energie de l\'Oumma', solution: 'Al-Ghazali propose: S\'unir autour des points communs est plus important que s\'attarder sur les differences secondaires', verse: 'وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا', verseRef: 'Al-Imran 3:103' }
  },
  {
    emoji: '🌱',
    ar: { title: 'الأمل والعمل', problem: 'يشخّص الغزالي: اليأس يشل حركة الإصلاح', solution: 'يقترح الغزالي: التفاؤل بوعد الله مع العمل الدؤوب هو طريق النهضة', verse: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ', verseRef: 'آل عمران ٣: ١٣٩' },
    en: { title: 'Hope and Action', problem: 'Al-Ghazali diagnoses: Despair paralyzes the reform movement', solution: 'Al-Ghazali proposes: Optimism in God\'s promise combined with persistent work is the path to revival', verse: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ', verseRef: 'Al-Imran 3:139' },
    fr: { title: 'Espoir et Action', problem: 'Al-Ghazali diagnostique: Le desespoir paralyse le mouvement de reforme', solution: 'Al-Ghazali propose: L\'optimisme en la promesse de Dieu combine au travail persistant est le chemin de la renaissance', verse: 'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ', verseRef: 'Al-Imran 3:139' }
  },
  {
    emoji: '📱',
    ar: { title: 'وسائل التواصل: سلاح ذو حدين',
      problem: 'يشخّص الغزالي: وسائل التواصل الاجتماعي أصبحت منصة للشائعات والفتن والتنمر بدل نشر العلم والخير',
      solution: 'الغزالي يدعو للتثبت من كل خبر قبل نشره واستخدام هذه الأدوات في نشر العلم النافع والدعوة بالحكمة',
      verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',
      verseRef: 'الحجرات ٤٩: ٦' },
    en: { title: 'Social Media: A Double-Edged Sword',
      problem: 'Al-Ghazali diagnoses: Social media has become a platform for rumors, discord, and bullying instead of spreading knowledge and goodness',
      solution: 'Al-Ghazali calls for verifying every news before sharing it and using these tools to spread beneficial knowledge and wise preaching',
      verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',
      verseRef: 'Al-Hujurat 49:6' },
    fr: { title: 'Reseaux Sociaux : Arme a Double Tranchant',
      problem: 'Al-Ghazali diagnostique: Les reseaux sociaux sont devenus une plateforme de rumeurs, de discorde et de harcelement au lieu de diffuser le savoir',
      solution: 'Al-Ghazali appelle a verifier chaque nouvelle avant de la partager et a utiliser ces outils pour repandre le savoir utile',
      verse: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِنْ جَاءَكُمْ فَاسِقٌ بِنَبَإٍ فَتَبَيَّنُوا',
      verseRef: 'Al-Hujurat 49:6' }
  },
  {
    emoji: '🪞',
    ar: { title: 'أزمة الهوية والانتماء',
      problem: 'يشخّص الغزالي: المسلمون في العصر الحديث يعانون من تمزق بين حضارتهم والانجذاب للنموذج الغربي',
      solution: 'يقترح الغزالي: الإسلام يقدم هوية واضحة تجمع بين الأصالة والمعاصرة. الحل في فهم الذات قبل محاكاة الآخر',
      verse: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',
      verseRef: 'آل عمران ٣: ١١٠' },
    en: { title: 'Identity and Belonging Crisis',
      problem: 'Al-Ghazali diagnoses: Muslims in the modern era suffer from a split between their civilization and attraction to the Western model',
      solution: 'Al-Ghazali proposes: Islam offers a clear identity combining authenticity with modernity. The solution is understanding oneself before imitating others',
      verse: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',
      verseRef: 'Al Imran 3:110' },
    fr: { title: 'Crise d\'Identite et d\'Appartenance',
      problem: 'Al-Ghazali diagnostique: Les musulmans a l\'ere moderne souffrent d\'un tiraillement entre leur civilisation et l\'attraction du modele occidental',
      solution: 'Al-Ghazali propose: L\'Islam offre une identite claire combinant authenticite et modernite. La solution est de se comprendre soi-meme avant d\'imiter les autres',
      verse: 'كُنتُمْ خَيْرَ أُمَّةٍ أُخْرِجَتْ لِلنَّاسِ',
      verseRef: 'Al Imran 3:110' }
  },
  {
    emoji: '🛒',
    ar: { title: 'المادية تقتل الروح',
      problem: 'الاستهلاك المفرط وحب المال يفرغان الحياة من المعنى ويبعدان عن الله',
      solution: 'القناعة كنز لا يفنى. الغزالي يدعو للزهد فيما لا ينفع والعمل فيما يقرب من الله',
      verse: 'زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ',
      verseRef: 'آل عمران ٣: ١٤' },
    en: { title: 'Materialism Kills the Spirit',
      problem: 'Excessive consumption and love of money empty life of meaning and distance one from God',
      solution: 'Contentment is an inexhaustible treasure. Al-Ghazali calls for detachment from what brings no benefit and working on what brings one closer to God',
      verse: 'زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ',
      verseRef: 'Al Imran 3:14' },
    fr: { title: 'Le Materialisme Tue l\'Esprit',
      problem: 'La consommation excessive et l\'amour de l\'argent vident la vie de sens et eloignent de Dieu',
      solution: 'Le contentement est un tresor inepuisable. Al-Ghazali appelle au detachement de ce qui ne profite pas et au travail sur ce qui rapproche de Dieu',
      verse: 'زُيِّنَ لِلنَّاسِ حُبُّ الشَّهَوَاتِ',
      verseRef: 'Al Imran 3:14' }
  }
];

// ═══════════════ HABITS DATA (8 items) ═══════════════
const HABITS = [
  { emoji: '📖', ar: { label: 'اقرأ صفحة من القرآن بتدبر', source: 'علاج ضعف الإيمان' }, en: { label: 'Read a page of Quran with reflection', source: 'Treating weak faith' }, fr: { label: 'Lisez une page du Coran avec reflexion', source: 'Traiter la faiblesse de la foi' } },
  { emoji: '🙏', ar: { label: 'صلِّ صلاة بخشوع كامل', source: 'علاج الشكلية' }, en: { label: 'Pray one prayer with full humility', source: 'Treating ritualism' }, fr: { label: 'Priez une priere avec pleine humilite', source: 'Traiter le ritualisme' } },
  { emoji: '💡', ar: { label: 'طبّق شيئاً تعلمته', source: 'سد الفجوة بين القول والعمل' }, en: { label: 'Apply something you learned', source: 'Bridging words and actions' }, fr: { label: 'Appliquez quelque chose que vous avez appris', source: 'Combler paroles et actes' } },
  { emoji: '🤝', ar: { label: 'قدّم يد المساعدة لمحتاج', source: 'علاج الأنانية' }, en: { label: 'Lend a helping hand to someone', source: 'Treating selfishness' }, fr: { label: 'Tendez la main a quelqu\'un dans le besoin', source: 'Traiter l\'egoisme' } },
  { emoji: '📚', ar: { label: 'تعلم حكماً شرعياً جديداً', source: 'علاج الجهل' }, en: { label: 'Learn a new religious ruling', source: 'Treating ignorance' }, fr: { label: 'Apprenez un nouveau jugement religieux', source: 'Traiter l\'ignorance' } },
  { emoji: '🌿', ar: { label: 'كن وسطياً في حوار اليوم', source: 'علاج التطرف' }, en: { label: 'Be moderate in a conversation today', source: 'Treating extremism' }, fr: { label: 'Soyez modere dans une conversation aujourd\'hui', source: 'Traiter l\'extremisme' } },
  { emoji: '⏰', ar: { label: 'أنجز مهمة كنت تؤجلها', source: 'علاج التواكل' }, en: { label: 'Complete a postponed task', source: 'Treating passivity' }, fr: { label: 'Terminez une tache reportee', source: 'Traiter la passivite' } },
  { emoji: '😊', ar: { label: 'أحسن خلقك مع الناس', source: 'علاج ضعف الأخلاق' }, en: { label: 'Show good character to people', source: 'Treating moral decline' }, fr: { label: 'Montrez un bon caractere envers les gens', source: 'Traiter le declin moral' } }
];

// ═══════════════ QUIZ DATA (10 questions) ═══════════════
const QUIZ = [
  { ar: 'هل ضعف الإيمان يؤثر على سلوك المسلم اليومي؟', en: 'Does weak faith affect a Muslim\'s daily behavior?', fr: 'La faiblesse de la foi affecte-t-elle le comportement quotidien d\'un musulman ?' },
  { ar: 'هل التشدد في الدين يخدم الإسلام؟', en: 'Does extremism in religion serve Islam?', fr: 'L\'extremisme dans la religion sert-il l\'Islam ?' },
  { ar: 'هل يجب على المسلمين التعاون فيما بينهم رغم اختلاف مذاهبهم؟', en: 'Should Muslims cooperate despite their different schools of thought?', fr: 'Les musulmans doivent-ils cooperer malgre leurs differentes ecoles de pensee ?' },
  { ar: 'هل التوكل على الله يعني ترك العمل والانتظار؟', en: 'Does trusting God mean leaving work and waiting?', fr: 'La confiance en Dieu signifie-t-elle abandonner le travail et attendre ?' },
  { ar: 'هل يمكن فصل الإسلام عن الحياة اليومية؟', en: 'Can Islam be separated from daily life?', fr: 'Peut-on separer l\'Islam de la vie quotidienne ?' },
  { ar: 'هل المرأة شريكة في بناء المجتمع الإسلامي؟', en: 'Is woman a partner in building Islamic society?', fr: 'La femme est-elle partenaire dans la construction de la societe islamique ?' },
  { ar: 'هل العلم الشرعي والعلم الدنيوي متكاملان؟', en: 'Are religious and worldly knowledge complementary?', fr: 'Le savoir religieux et mondain sont-ils complementaires ?' },
  { ar: 'هل الخرافات جزء من الإسلام الصحيح؟', en: 'Are superstitions part of true Islam?', fr: 'Les superstitions font-elles partie du vrai Islam ?' },
  { ar: 'هل الشورى أساس الحكم الرشيد في الإسلام؟', en: 'Is consultation the basis of good governance in Islam?', fr: 'La consultation est-elle la base de la bonne gouvernance en Islam ?' },
  { ar: 'هل اليأس من رحمة الله جائز في الإسلام؟', en: 'Is despair of God\'s mercy permissible in Islam?', fr: 'Le desespoir de la misericorde de Dieu est-il permis en Islam ?' },
  { ar: 'هل وسائل التواصل الاجتماعي تقرّب المسلمين أم تفرقهم؟', en: 'Do social media platforms bring Muslims closer or divide them?', fr: 'Les reseaux sociaux rapprochent-ils les musulmans ou les divisent-ils ?' },
  { ar: 'هل فقدان اللغة العربية يضعف فهم المسلمين لدينهم؟', en: 'Does losing the Arabic language weaken Muslims\' understanding of their religion?', fr: 'La perte de la langue arabe affaiblit-elle la comprehension des musulmans de leur religion ?' },
  { ar: 'هل المادية والاستهلاك المفرط من أسباب ضعف الأمة؟', en: 'Are materialism and excessive consumption among the causes of the Ummah\'s weakness?', fr: 'Le materialisme et la consommation excessive sont-ils parmi les causes de la faiblesse de l\'Oumma ?' }
];

// ═══════════════ DUAS DATA (6 items) ═══════════════
const DUAS = [
  { ar: { label: 'دعاء تفريج الهم', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ', tr: 'اللهم إني أعوذ بك من الهم والحزن والعجز والكسل' }, en: { label: 'Dua for Relief', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ', tr: 'O God, I seek refuge in You from worry, grief, inability, and laziness' }, fr: { label: 'Dua pour le Soulagement', text: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ', tr: 'O Dieu, je cherche refuge aupres de Toi contre le souci, la tristesse, l\'incapacite et la paresse' } },
  { ar: { label: 'دعاء الهداية', text: 'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي', tr: 'اللهم اهدني وسددني' }, en: { label: 'Dua for Guidance', text: 'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي', tr: 'O God, guide me and keep me on the right path' }, fr: { label: 'Dua pour la Guidance', text: 'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي', tr: 'O Dieu, guide-moi et maintiens-moi sur le droit chemin' } },
  { ar: { label: 'دعاء الصبر', text: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا', tr: 'ربنا أفرغ علينا صبراً وثبت أقدامنا' }, en: { label: 'Dua for Patience', text: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا', tr: 'Our Lord, pour upon us patience and plant firmly our feet' }, fr: { label: 'Dua pour la Patience', text: 'رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَثَبِّتْ أَقْدَامَنَا', tr: 'Seigneur, accorde-nous patience et affermis nos pas' } },
  { ar: { label: 'دعاء التوكل', text: 'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ', tr: 'حسبي الله لا إله إلا هو عليه توكلت' }, en: { label: 'Dua of Trust', text: 'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ', tr: 'God is sufficient for me. There is no god but Him. In Him I trust' }, fr: { label: 'Dua de Confiance', text: 'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ', tr: 'Dieu me suffit. Il n\'y a de dieu que Lui. En Lui je place ma confiance' } },
  { ar: { label: 'دعاء الثبات', text: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا', tr: 'ربنا لا تزغ قلوبنا بعد إذ هديتنا' }, en: { label: 'Dua for Steadfastness', text: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا', tr: 'Our Lord, do not let our hearts deviate after You guided us' }, fr: { label: 'Dua pour la Fermete', text: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا', tr: 'Seigneur, ne fais pas devier nos coeurs apres nous avoir guides' } },
  { ar: { label: 'دعاء النصر', text: 'رَبَّنَا انصُرْنَا عَلَى الْقَوْمِ الظَّالِمِينَ', tr: 'ربنا انصرنا على القوم الظالمين' }, en: { label: 'Dua for Victory', text: 'رَبَّنَا انصُرْنَا عَلَى الْقَوْمِ الظَّالِمِينَ', tr: 'Our Lord, give us victory over the wrongdoing people' }, fr: { label: 'Dua pour la Victoire', text: 'رَبَّنَا انصُرْنَا عَلَى الْقَوْمِ الظَّالِمِينَ', tr: 'Seigneur, donne-nous la victoire sur les injustes' } },
  { ar: { label: 'دعاء الفرج', text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', tr: 'اللهم إني أسألك العافية في الدنيا والآخرة' }, en: { label: 'Dua for Wellbeing', text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', tr: 'O God, I ask You for wellbeing in this world and the Hereafter' }, fr: { label: 'Dua pour le Bien-etre', text: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ', tr: 'O Dieu, je Te demande le bien-etre dans ce monde et dans l\'Au-dela' } },
  { ar: { label: 'دعاء الإصلاح', text: 'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', tr: 'ربنا اغفر لنا ذنوبنا وإسرافنا في أمرنا وثبت أقدامنا' }, en: { label: 'Dua for Reform', text: 'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', tr: 'Our Lord, forgive us our sins and our excess in our affairs, plant firmly our feet, and give us victory' }, fr: { label: 'Dua pour la Reforme', text: 'رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا وَثَبِّتْ أَقْدَامَنَا وَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ', tr: 'Notre Seigneur, pardonne-nous nos peches et notre exces dans nos affaires, affermis nos pas et donne-nous la victoire' } }
];

// ═══════════════ STATE ═══════════════
let lang = localStorage.getItem('mush-lang') || 'ar';
let theme = localStorage.getItem('mush-theme') || 'nature';
const themes = ['nature', 'night', 'garden'];
const themeIcons = ['🌿', '🌙', '🍃'];
const themeNames = { teal: '🌿 Teal', night: '🌙 Night', garden: '🍃 Garden' };
let currentCardIdx = -1;

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  setTheme(theme);
  setLang(lang);
  initTabs();
  initSplash();
  initScrollTop();
  renderHome();
  renderCards();
  renderReflections();
  renderHabits();
  renderQuiz();
  renderAbout();
  renderHelp();
  renderDuas();
  initScrollReveal();
  initKeyboardNav();
});

// ═══════════════ SPLASH ═══════════════
function initSplash() {
  let count = 5;
  const el = document.getElementById('splashCount');
  if (!el) return;
  const featuresEl = document.getElementById('splashFeatures');
  if (!featuresEl) return;
  if (featuresEl) {
    featuresEl.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
  const interval = setInterval(() => {
    count--;
    if (el) el.textContent = count;
    if (count <= 0) { dismissSplash(); clearInterval(interval); }
  }, 1000);
}
function dismissSplash() {
  const s = document.getElementById('splash');
  if (!s) return;
  if (s) { s.classList.add('hidden'); setTimeout(() => s.style.display = 'none', 500); }
  playSound('click');
}

// ═══════════════ LANGUAGE ═══════════════
function setLang(l) {
  lang = l;
  localStorage.setItem('mush-lang', l);
  const isRTL = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  document.body.dir = isRTL ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  const t = T[l];
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('appTitle', t.appTitle); set('splashSub', t.splashSub); set('splashHint', t.splashHint);
  set('tabHome', t.tabHome); set('tabCards', t.tabCards); set('tabDeep', t.tabDeep);
  set('tabHabits', t.tabHabits); set('tabQuiz', t.tabQuiz); set('tabAbout', t.tabAbout);
  set('cardsTitle', t.cardsTitle); set('cardsDesc', t.cardsDesc);
  set('deepTitle', t.deepTitle); set('deepDesc', t.deepDesc);
  set('habitsTitle', t.habitsTitle); set('habitsDesc', t.habitsDesc);
  set('quizTitle', t.quizTitle); set('quizDesc', t.quizDesc);
  set('helpTitle', t.helpTitle); set('duaPanelTitle', t.duaPanelTitle);
  set('habitsReset', t.resetBtn);
  renderHome(); renderCards(); renderReflections(); renderHabits(); renderQuiz(); renderAbout(); renderHelp(); renderDuas();
  const featuresEl = document.getElementById('splashFeatures');
  if (!featuresEl) return;
  if (featuresEl) {
    featuresEl.innerHTML = T[l].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3 + i * 0.3}s">${f}</div>`
    ).join('');
  }
}

// ═══════════════ THEME ═══════════════
function setTheme(t) {
  theme = t;
  document.documentElement.dataset.theme = t;
  localStorage.setItem('mush-theme', t);
  const idx = themes.indexOf(t);
  const el = document.getElementById('themeIcon');
  if (!el) return;
  if (el) el.textContent = themeIcons[idx];
}
function cycleTheme() {
  const idx = (themes.indexOf(theme) + 1) % themes.length;
  setTheme(themes[idx]);
  showToast(themeNames[themes[idx]]);
  playSound('theme');
}

// ═══════════════ TABS ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.getElementById('panel-' + tab.dataset.tab);
      if (panel) panel.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playSound('click');
    });
  });
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % CARDS.length;
  const c = CARDS[dayIdx];
  const cd = c[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${cd.title}</div>
    <div class="daily-body">${cd.desc}</div>
    <div class="daily-action" onclick="document.querySelector('[data-tab=cards]').click()">${t.tabCards} &#8594;</div>
  `;
  const sections = [
    { icon: '🔥', tab: 'cards', title: t.tabCards, desc: lang === 'ar' ? '٢٠ مشكلة وحل' : lang === 'fr' ? '20 problemes et solutions' : '20 problems and solutions' },
    { icon: '💎', tab: 'deep', title: t.tabDeep, desc: lang === 'ar' ? 'حلول قرآنية عميقة' : lang === 'fr' ? 'Solutions coraniques profondes' : 'Deep Quranic solutions' },
    { icon: '📋', tab: 'habits', title: t.tabHabits, desc: lang === 'ar' ? 'عادات يومية' : lang === 'fr' ? 'Habitudes quotidiennes' : 'Daily habits' },
    { icon: '🤔', tab: 'quiz', title: t.tabQuiz, desc: lang === 'ar' ? 'اختبر وعيك' : lang === 'fr' ? 'Testez votre conscience' : 'Test your awareness' },
    { icon: '📖', tab: 'about', title: t.tabAbout, desc: lang === 'ar' ? 'عن الكتاب والمؤلف' : lang === 'fr' ? 'Le livre et l\'auteur' : 'Book & author' },
  ];
  (document.getElementById('homeGrid')||{}).innerHTML= sections.map(s => `
    <div class="home-card" onclick="document.querySelector('[data-tab=${s.tab}]').click()">
      <span class="hc-icon">${s.icon}</span>
      <div class="hc-title">${s.title}</div>
      <div class="hc-desc">${s.desc}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: CARDS ═══════════════
function renderCards() {
  const t = T[lang];
  const searchBar = `<div class="search-bar"><input type="text" id="cardsSearch" class="search-input" placeholder="${t.searchPlaceholder}" oninput="filterCards(this.value)"><span class="search-icon">🔍</span></div>`;
  const cards = CARDS.map((c, i) => {
    const d = c[lang];
    return `
    <div class="principle-card scroll-reveal" id="card-${c.id}" data-search="${d.title.toLowerCase()}">
      <div class="principle-head" onclick="toggleCard('card-${c.id}')">
        <span class="principle-num">${c.id}</span>
        <span class="principle-emoji">${c.emoji}</span>
        <span class="principle-title">${d.title}</span>
        <span class="principle-chev">&#9660;</span>
      </div>
      <div class="principle-body">
        <div class="principle-inner">
          <p class="principle-desc">${d.desc}</p>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="event.stopPropagation();shareCard(${i})">
            <span class="share-icon">&#128279;</span> ${t.share}
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
  (document.getElementById('cardsContainer')||{}).innerHTML= searchBar + cards;
}

function filterCards(query) {
  const q = query.toLowerCase().trim();
  document.querySelectorAll('.principle-card').forEach(card => {
    const searchText = card.dataset.search || '';
    const title = card.querySelector('.principle-title');
    const titleText = title ? title.textContent.toLowerCase() : '';
    card.style.display = (!q || searchText.includes(q) || titleText.includes(q)) ? '' : 'none';
  });
}

async function shareCard(idx) {
  const c = CARDS[idx], d = c[lang];
  const text = `${c.emoji} ${d.title}\n\n${d.desc}\n\n💡 ${d.action}\n\n— مشكلات في طريق الحياة الإسلامية`;
  if (navigator.share) {
    try { await navigator.share({ title: d.title, text }); } catch (e) { /* cancelled */ }
  } else {
    try {
      await navigator.clipboard.writeText(text);
      showToast(lang === 'ar' ? 'تم النسخ!' : lang === 'fr' ? 'Copie !' : 'Copied!');
    } catch (e) { showToast('Could not copy'); }
  }
}

// ═══════════════ RENDER: REFLECTIONS (Deep) ═══════════════
function renderReflections() {
  const t = T[lang];
  (document.getElementById('deepContainer')||{}).innerHTML= REFLECTIONS.map(r => {
    const d = r[lang];
    return `
    <div class="anxiety-card scroll-reveal">
      <div class="anxiety-header">
        <span class="anxiety-emoji">${r.emoji}</span>
        <span class="anxiety-title">${d.title}</span>
      </div>
      <div class="anxiety-problem">
        <span class="anxiety-label">${lang === 'ar' ? '😰 المشكلة' : lang === 'fr' ? '😰 Le Probleme' : '😰 The Problem'}</span>
        ${d.problem}
      </div>
      <div class="anxiety-solution">
        <span class="anxiety-label">${lang === 'ar' ? '😌 الحل' : lang === 'fr' ? '😌 La Solution' : '😌 The Solution'}</span>
        ${d.solution}
      </div>
      <div class="verse-box">
        <div class="verse-arabic">${d.verse}</div>
        <div class="verse-ref">${d.verseRef}</div>
      </div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: HABITS ═══════════════
function renderHabits() {
  const today = new Date().toDateString();
  let habitsState = JSON.parse(localStorage.getItem('mush-habits') || '{}');
  if (habitsState.date !== today) {
    updateStreak(habitsState);
    habitsState = { date: today, done: [] };
    localStorage.setItem('mush-habits', JSON.stringify(habitsState));
  }
  const streak = getStreak();
  const streakHTML = streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${T[lang].streakMsg}</div>` : '';
  (document.getElementById('habitsContainer')||{}).innerHTML= HABITS.map((h, i) => {
    const d = h[lang];
    const isDone = habitsState.done.includes(i);
    return `
    <div class="habit-item ${isDone ? 'done' : ''}" onclick="toggleHabit(${i})">
      <span class="habit-check">${isDone ? '&#10003;' : ''}</span>
      <span class="habit-emoji">${h.emoji}</span>
      <div>
        <div class="habit-label">${d.label}</div>
        <div class="habit-source">${d.source}</div>
      </div>
    </div>`;
  }).join('');
  const streakEl = document.getElementById('streakBadge');
  if (!streakEl) return;
  if (streakEl) streakEl.innerHTML = streakHTML;
  updateHabitsProgress(habitsState);
}

function toggleHabit(i) {
  const today = new Date().toDateString();
  let hs = JSON.parse(localStorage.getItem('mush-habits') || '{}');
  if (hs.date !== today) hs = { date: today, done: [] };
  const idx = hs.done.indexOf(i);
  if (idx > -1) hs.done.splice(idx, 1); else hs.done.push(i);
  localStorage.setItem('mush-habits', JSON.stringify(hs));
  renderHabits();
  playSound(idx > -1 ? 'click' : 'success');
  if (hs.done.length === HABITS.length) {
    launchConfetti();
    showToast(T[lang].allDone);
  }
}

function resetHabits() {
  localStorage.setItem('mush-habits', JSON.stringify({ date: new Date().toDateString(), done: [] }));
  renderHabits();
  showToast(lang === 'ar' ? 'تم إعادة التعيين' : lang === 'fr' ? 'Reinitialise' : 'Reset');
}

function updateHabitsProgress(hs) {
  const done = hs.done.length;
  const total = HABITS.length;
  const pct = total > 0 ? (done / total * 100) : 0;
  const fill = document.getElementById('habitsFill');
  if (!fill) return;
  const txt = document.getElementById('habitsText');
  if (!txt) return;
  if (fill) fill.style.width = pct + '%';
  if (txt) txt.textContent = `${done}/${total}`;
}

// ═══════════════ STREAK SYSTEM ═══════════════
function updateStreak(prevState) {
  let streakData = JSON.parse(localStorage.getItem('mush-streak') || '{"count":0,"lastDate":""}');
  if (prevState && prevState.done && prevState.done.length === HABITS.length && prevState.date) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    if (prevState.date === yesterday.toDateString()) {
      streakData.count++;
    } else if (prevState.date !== new Date().toDateString()) {
      streakData.count = prevState.done.length === HABITS.length ? 1 : 0;
    }
    streakData.lastDate = prevState.date;
  } else if (prevState && prevState.date) {
    streakData.count = 0;
    streakData.lastDate = prevState.date;
  }
  localStorage.setItem('mush-streak', JSON.stringify(streakData));
}

function getStreak() {
  return JSON.parse(localStorage.getItem('mush-streak') || '{"count":0}').count;
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#00897B', '#4DB6AC', '#66BB6A', '#FFD54F', '#E57373', '#B388FF', '#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5, h: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 4, vy: Math.random() * 3 + 2,
      rot: Math.random() * 360, rotSpeed: (Math.random() - 0.5) * 10
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.rot += p.rotSpeed;
      ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h); ctx.restore();
    });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0, 0, canvas.width, canvas.height); canvas.style.display = 'none'; }
  }
  draw();
}

// ═══════════════ RENDER: QUIZ ═══════════════
function renderQuiz() {
  const t = T[lang];
  const correct = [2, 0, 2, 0, 0, 2, 2, 0, 2, 0];
  (document.getElementById('quizContainer')||{}).innerHTML= QUIZ.map((q, i) => `
    <div class="quiz-question scroll-reveal" id="quiz-q-${i}">
      <div class="quiz-q-text">${i + 1}. ${q[lang]}</div>
      <div class="quiz-options">
        <button class="quiz-opt" onclick="selectQuizOpt(${i},2)">${t.yes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},1)">${t.sometimes}</button>
        <button class="quiz-opt" onclick="selectQuizOpt(${i},0)">${t.no}</button>
      </div>
    </div>
  `).join('') + `<button class="quiz-submit" onclick="submitQuiz()">${t.submitQuiz}</button>`;
  document.getElementById('quizResult').classList.add('hidden');
  window._quizAnswers = {};
  window._correct = correct;
}

function selectQuizOpt(qi, val) {
  window._quizAnswers[qi] = val;
  document.querySelectorAll(`#quiz-q-${qi} .quiz-opt`).forEach((o, oi) => {
    o.classList.toggle('selected', [2, 1, 0][oi] === val);
  });
  playSound('click');
}

function submitQuiz() {
  const answers = window._quizAnswers || {};
  if (Object.keys(answers).length < QUIZ.length) {
    showToast(lang === 'ar' ? 'أجب على جميع الأسئلة' : lang === 'fr' ? 'Repondez a toutes les questions' : 'Answer all questions');
    return;
  }
  const c = window._correct;
  let score = 0;
  Object.entries(answers).forEach(([qi, v]) => {
    if (v === c[parseInt(qi)]) score++;
  });
  const pct = Math.round(score / QUIZ.length * 100);
  let emoji, title, desc;
  if (pct >= 80) {
    emoji = '🌟';
    title = lang === 'ar' ? 'ممتاز!' : lang === 'fr' ? 'Excellent !' : 'Excellent!';
    desc = lang === 'ar' ? 'وعيك بمشكلات الأمة وحلولها رائع!' : lang === 'fr' ? 'Votre conscience des problemes et solutions est remarquable !' : 'Your awareness of the Ummah\'s problems and solutions is remarkable!';
  } else if (pct >= 50) {
    emoji = '📚';
    title = lang === 'ar' ? 'جيد' : lang === 'fr' ? 'Bien' : 'Good';
    desc = lang === 'ar' ? 'لديك وعي جيد لكن هناك المزيد لتعلمه.' : lang === 'fr' ? 'Bonne conscience mais il y a plus a apprendre.' : 'Good awareness but there\'s more to learn.';
  } else {
    emoji = '🔍';
    title = lang === 'ar' ? 'تحتاج للمراجعة' : lang === 'fr' ? 'Revision necessaire' : 'Review Needed';
    desc = lang === 'ar' ? 'اقرأ البطاقات لتتعرف على المشكلات وحلولها.' : lang === 'fr' ? 'Lisez les cartes pour connaitre les problemes et solutions.' : 'Read the cards to learn about the problems and their solutions.';
  }
  const result = document.getElementById('quizResult');
  if (!result) return;
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${pct}%</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${desc}</div>
    <button class="quiz-submit" onclick="renderQuiz()" style="margin-top:16px">${T[lang].quizAgain}</button>
  `;
  result.scrollIntoView({ behavior: 'smooth' });
  playSound('success');
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'لست عالماً ولا مفتياً. هذا جهد متواضع لنشر فكر الشيخ الغزالي. المحتوى مستمد من الكتاب ومصادر إسلامية موثوقة.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري. ألّف أكثر من ٩٤ كتاباً. درّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). عُرف بالتجديد ومحاربة الجمود.',
      bookTitle: 'عن الكتاب',
      bookDesc: '"مشكلات في طريق الحياة الإسلامية" يتناول الغزالي أبرز العقبات التي تواجه المسلمين في حياتهم ويقدم حلولاً عملية مستمدة من القرآن والسنة. يشخّص أمراض الأمة بصراحة ويدعو للإصلاح بالعلم والعمل والوحدة.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "مشكلات في طريق الحياة الإسلامية" — الشيخ محمد الغزالي', 'القرآن الكريم', 'السنة النبوية الشريفة'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort to share Sheikh al-Ghazali\'s thought. Content is derived from the book and trusted Islamic sources.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker. Author of 94+ books. Taught at the University of Emir Abdelkader in Constantine, Algeria. Known for renewal and fighting stagnation.',
      bookTitle: 'About the Book',
      bookDesc: '"Problems on the Path of Islamic Life" addresses the major obstacles facing Muslims and offers practical solutions from the Quran and Sunnah. It honestly diagnoses the Ummah\'s ailments and calls for reform through knowledge, action, and unity.',
      sourcesTitle: 'Sources',
      sources: ['"Problems on the Path of Islamic Life" — Sheikh Mohammed al-Ghazali', 'The Holy Quran', 'Prophetic Sunnah'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble pour partager la pensee du Sheikh al-Ghazali.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien. Auteur de plus de 94 livres. Professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Connu pour le renouveau.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '« Problemes sur le Chemin de la Vie Islamique » traite des principaux obstacles auxquels font face les musulmans et propose des solutions pratiques du Coran et de la Sunna.',
      sourcesTitle: 'Sources',
      sources: ['« Problemes sur le Chemin » — Sheikh Mohammed al-Ghazali', 'Le Saint Coran', 'La Sunna Prophetique'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>
  `;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      { title: '⚠️ تنبيه', body: 'لست عالماً. هذا جهد متواضع لنشر فكر الشيخ الغزالي بطريقة تفاعلية.' },
      { title: '📚 المصادر', body: 'كتاب "مشكلات في طريق الحياة الإسلامية" للشيخ محمد الغزالي.' },
      { title: '✨ المميزات', body: 'ثلاث لغات، ٣ أنماط، ٢٠ مشكلة مع حلول، ٦ تأملات عميقة، عادات يومية، اختبار، أدعية.' },
    ],
    en: [
      { title: '⚠️ Disclaimer', body: 'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom interactively.' },
      { title: '📚 Sources', body: '"Problems on the Path of Islamic Life" by Sheikh Mohammed al-Ghazali.' },
      { title: '✨ Features', body: 'Three languages, 3 themes, 20 problems with solutions, 6 deep reflections, daily habits, quiz, duas.' },
    ],
    fr: [
      { title: '⚠️ Avertissement', body: 'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali.' },
      { title: '📚 Sources', body: '« Problemes sur le Chemin » par Sheikh Mohammed al-Ghazali.' },
      { title: '✨ Fonctionnalites', body: 'Trois langues, 3 themes, 20 problemes avec solutions, 6 reflexions, habitudes, quiz, duas.' },
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>
  `).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `
    <div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  function observeAll() {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => observer.observe(el));
  }
  observeAll();
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => setTimeout(observeAll, 100));
  });
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const helpPanel = document.getElementById('helpPanel');
      if (!helpPanel) return;
      if (!helpPanel.classList.contains('hidden')) { toggleHelp(); return; }
      const duaPanel = document.getElementById('duaPanel');
      if (!duaPanel) return;
      if (!duaPanel.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.principle-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const cardsPanel = document.getElementById('panel-cards');
      if (!cardsPanel) return;
      if (!cardsPanel || !cardsPanel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'cardsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.principle-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentCardIdx >= 0 && currentCardIdx < cards.length) cards[currentCardIdx].classList.remove('open');
      const dir = (document.documentElement.dir === 'rtl') ? (e.key === 'ArrowRight' ? -1 : 1) : (e.key === 'ArrowRight' ? 1 : -1);
      currentCardIdx = Math.max(0, Math.min(cards.length - 1, currentCardIdx + dir));
      cards[currentCardIdx].classList.add('open');
      cards[currentCardIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() {
  document.getElementById('helpPanel').classList.toggle('hidden');
  playSound('click');
}
function toggleDuaPanel() {
  document.getElementById('duaPanel').classList.toggle('hidden');
  playSound('click');
}
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  const m = document.getElementById('toastMsg');
  if (!m) return;
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (btn) btn.classList.toggle('visible', window.scrollY > 300);
  });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type === 'click') { osc.frequency.value = 800; osc.type = 'sine'; gain.gain.value = 0.04; }
    else if (type === 'success') { osc.frequency.value = 523; osc.type = 'sine'; }
    else if (type === 'theme') { osc.frequency.value = 440; osc.type = 'triangle'; gain.gain.value = 0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch (e) { /* silent */ }
}

// ═══════════════ TICKER ═══════════════
function startTicker() {
  const el = document.getElementById('tickerText');
  if (!el) return;
  const tips = {
    ar: ['🔥 ٢٠ مشكلة تواجه المسلمين مع حلولها', '💎 حلول عميقة من القرآن والسنة', '📋 تتبع عاداتك اليومية', '🤲 أدعية لتفريج الهموم', '💡 Powered by workshop-diy.org'],
    en: ['🔥 20 problems Muslims face with solutions', '💎 Deep solutions from Quran and Sunnah', '📋 Track your daily habits', '🤲 Duas for relief', '💡 Powered by workshop-diy.org'],
    fr: ['🔥 20 problemes avec solutions', '💎 Solutions profondes du Coran', '📋 Suivez vos habitudes', '🤲 Duas pour le soulagement', '💡 Powered by workshop-diy.org']
  };
  const l = document.documentElement.lang || 'ar';
  const msgs = tips[l] || tips.ar;
  const txt = msgs.join('  ✦  ');
  el.innerHTML = '<span class="tc">' + txt + '  ✦  </span><span class="tc" aria-hidden="true">' + txt + '  ✦  </span>';
  el.style.animation = 'tickerMarquee ' + Math.max(25, txt.length * 0.12) + 's linear infinite';
}
if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', startTicker); } else { startTicker(); }
