/* Elecron – Sprachumschaltung (EN Standard, FR, AR, DE) */
(function () {
  var P = function (s) { return '<span class="ph">' + s + '</span>'; };

  var T = {
    en: {
      'home.doctitle': 'Elecron – Water level monitors made in Algeria',
      'imprint.doctitle': 'Legal notice – Elecron',
      'privacy.doctitle': 'Privacy policy – Elecron',
      'nav.mission': 'Mission', 'nav.philosophy': 'Philosophy', 'nav.products': 'Products', 'nav.contact': 'Contact', 'nav.home': 'Home',
      'hero.title': 'Every drop in sight.',
      'hero.sub': 'Reliable water level monitors – developed and manufactured in Algeria.',
      'hero.cta': 'Get in touch',
      'mission.eyebrow': 'Mission',
      'mission.title': 'Elecron makes water visible.',
      'mission.text': 'We develop and manufacture reliable water level monitors in Algeria that help households, farmers, businesses and utilities secure their water, prevent losses and protect their pumps – at a price everyone can afford.',
      'goal.eyebrow': 'Our goal',
      'goal.text': 'To become the leading brand for water monitoring in Algeria and the Maghreb.',
      'phil.eyebrow': 'Philosophy', 'phil.title': 'Simple, durable, local',
      'v1.t': 'Reliability', 'v1.d': 'Every device tested, built for heat, dust and limescale.',
      'v2.t': 'Simplicity', 'v2.d': 'Installed in 15 minutes, instructions in Arabic, French and Tamazight.',
      'v3.t': 'Affordability', 'v3.d': 'An entry-level model for every household, spare parts available locally.',
      'v4.t': 'Made in Algeria', 'v4.d': 'Development, assembly and service in the country.',
      'v5.t': 'Sustainability', 'v5.d': 'Less overflow, fewer pump failures, repairable devices.',
      'v6.t': 'Partnership', 'v6.d': 'Dealers and installers are our partners, not just a sales channel.',
      'prod.eyebrow': 'Products', 'prod.title': 'One sensor core, four product lines',
      'p1.tag': 'Households', 'p1.d': 'Level display, alarm and automatic pump shut-off.',
      'p2.tag': 'Agriculture', 'p2.d': 'Solar-powered, for wells and basins, with SMS alerts.',
      'p3.tag': 'Industry and commerce', 'p3.d': 'Multi-tank monitoring with building management integration.',
      'p4.tag': 'Utilities and municipalities', 'p4.d': 'Wireless sensors with a web dashboard for reservoirs.',
      'prod.soon': 'Coming soon',
      'prod.note': 'Plus: spare parts, installation kits, service and maintenance.',
      'contact.eyebrow': 'Contact', 'contact.title': 'Talk to us.',
      'contact.text': 'Are you a dealer, installer, farmer or utility? We look forward to hearing from you.',
      'contact.email': 'E-mail', 'contact.phone': 'Phone', 'contact.address': 'Address',
      'contact.addr': 'Elecron S.A.R.L.<br>Birkhadem, Algiers<br>Algeria',
      'footer.tag': 'Water level monitors made in Algeria',
      'footer.imprint': 'Legal notice', 'footer.privacy': 'Privacy policy',
      'imprint.title': 'Legal notice',
      'imprint.body':
        '<h2>Company details</h2><p>Elecron S.A.R.L.<br>Birkhadem, Algiers<br>Algeria</p>' +
        '<h2>Represented by</h2><p>R. Akknouche (Managing Director)</p>' +
        '<h2>Website</h2><p>elecron.net</p>' +
        '<h2>Responsible for content</h2><p>R. Akknouche, Birkhadem, Algiers</p>' +
        '<h2>Liability for links</h2><p>This website may contain links to external websites. The respective operators are solely responsible for their content.</p>',
      'privacy.title': 'Privacy policy',
      'privacy.body':
        '<h2>1. Controller</h2><p>Elecron S.A.R.L., Birkhadem, Algiers, Algeria</p>' +
        '<h2>2. Hosting</h2><p>This website is hosted by IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Germany. When you visit the website, technically necessary data (e.g. IP address, date and time, page requested, browser type) are stored in server log files. This serves the secure and stable operation of the website (legitimate interest, Art. 6(1)(f) GDPR). A data processing agreement is in place with IONOS.</p>' +
        '<h2>3. No cookies, no tracking</h2><p>This website does not set cookies, does not use analytics or tracking tools and does not load content (such as fonts) from third parties. Your language choice is stored only locally in your browser.</p>' +
        '<h2>4. Contacting us</h2><p>If you contact us by e-mail or phone, we process your details solely to handle your enquiry and do not pass them on without your consent.</p>' +
        '<h2>5. Your rights</h2><p>You have the right to access, rectification, erasure and restriction of processing of your data, as well as the right to object and to data portability. You may also lodge a complaint with a data protection supervisory authority. Please send any requests in writing to the address above.</p>' +
        '<p style="margin-top:32px;font-size:.9rem">Last updated: November 2026</p>'
    },

    fr: {
      'home.doctitle': 'Elecron – Indicateurs de niveau d’eau fabriqués en Algérie',
      'imprint.doctitle': 'Mentions légales – Elecron',
      'privacy.doctitle': 'Politique de confidentialité – Elecron',
      'nav.mission': 'Mission', 'nav.philosophy': 'Philosophie', 'nav.products': 'Produits', 'nav.contact': 'Contact', 'nav.home': 'Accueil',
      'hero.title': 'Chaque goutte sous contrôle.',
      'hero.sub': 'Des indicateurs de niveau d’eau fiables – conçus et fabriqués en Algérie.',
      'hero.cta': 'Nous contacter',
      'mission.eyebrow': 'Mission',
      'mission.title': 'Elecron rend l’eau visible.',
      'mission.text': 'Nous concevons et fabriquons en Algérie des indicateurs de niveau d’eau fiables qui aident les ménages, les agriculteurs, les entreprises et les distributeurs d’eau à sécuriser leur eau, à éviter les pertes et à protéger leurs pompes – à un prix accessible à tous.',
      'goal.eyebrow': 'Notre objectif',
      'goal.text': 'Devenir la marque de référence de la surveillance de l’eau en Algérie et au Maghreb.',
      'phil.eyebrow': 'Philosophie', 'phil.title': 'Simple, durable, local',
      'v1.t': 'Fiabilité', 'v1.d': 'Chaque appareil est testé et conçu pour la chaleur, la poussière et le calcaire.',
      'v2.t': 'Simplicité', 'v2.d': 'Installation en 15 minutes, notice en arabe, en français et en tamazight.',
      'v3.t': 'Prix accessible', 'v3.d': 'Un modèle d’entrée de gamme pour chaque foyer, des pièces détachées disponibles sur place.',
      'v4.t': 'Fabriqué en Algérie', 'v4.d': 'Développement, assemblage et service après-vente dans le pays.',
      'v5.t': 'Durabilité', 'v5.d': 'Moins de débordements, moins de pompes endommagées, des appareils réparables.',
      'v6.t': 'Partenariat', 'v6.d': 'Revendeurs et installateurs sont nos partenaires, pas seulement un canal de vente.',
      'prod.eyebrow': 'Produits', 'prod.title': 'Un capteur, quatre gammes de produits',
      'p1.tag': 'Ménages', 'p1.d': 'Affichage du niveau, alarme et arrêt automatique de la pompe.',
      'p2.tag': 'Agriculture', 'p2.d': 'Alimentation solaire, pour puits et bassins, avec alerte SMS.',
      'p3.tag': 'Industrie et commerce', 'p3.d': 'Surveillance de plusieurs réservoirs, raccordée à la gestion technique du bâtiment.',
      'p4.tag': 'Distributeurs d’eau et communes', 'p4.d': 'Capteurs sans fil avec tableau de bord web pour les réservoirs.',
      'prod.soon': 'Bientôt',
      'prod.note': 'En complément : pièces détachées, kits de montage, service et maintenance.',
      'contact.eyebrow': 'Contact', 'contact.title': 'Parlons-en.',
      'contact.text': 'Vous êtes revendeur, installateur, agriculteur ou distributeur d’eau ? Nous serons ravis de recevoir votre message.',
      'contact.email': 'E-mail', 'contact.phone': 'Téléphone', 'contact.address': 'Adresse',
      'contact.addr': 'Elecron S.A.R.L.<br>Birkhadem, Alger<br>Algérie',
      'footer.tag': 'Indicateurs de niveau d’eau fabriqués en Algérie',
      'footer.imprint': 'Mentions légales', 'footer.privacy': 'Confidentialité',
      'imprint.title': 'Mentions légales',
      'imprint.body':
        '<h2>Informations sur l’entreprise</h2><p>Elecron S.A.R.L.<br>Birkhadem, Alger<br>Algérie</p>' +
        '<h2>Représentée par</h2><p>R. Akknouche (Gérant)</p>' +
        '<h2>Site web</h2><p>elecron.net</p>' +
        '<h2>Responsable du contenu</h2><p>R. Akknouche, Birkhadem, Alger</p>' +
        '<h2>Responsabilité pour les liens</h2><p>Ce site peut contenir des liens vers des sites externes. Leurs exploitants sont seuls responsables de leur contenu.</p>',
      'privacy.title': 'Politique de confidentialité',
      'privacy.body':
        '<h2>1. Responsable du traitement</h2><p>Elecron S.A.R.L., Birkhadem, Alger, Algérie</p>' +
        '<h2>2. Hébergement</h2><p>Ce site est hébergé par IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Allemagne. Lors de la consultation du site, des données techniquement nécessaires (p. ex. adresse IP, date et heure, page consultée, type de navigateur) sont enregistrées dans des fichiers journaux du serveur. Cela sert au fonctionnement sûr et stable du site (intérêt légitime, art. 6, par. 1, point f du RGPD). Un contrat de sous-traitance a été conclu avec IONOS.</p>' +
        '<h2>3. Pas de cookies, pas de suivi</h2><p>Ce site n’utilise pas de cookies, ni d’outils d’analyse ou de suivi, et ne charge aucun contenu (p. ex. polices) depuis des tiers. Votre choix de langue est enregistré uniquement dans votre navigateur.</p>' +
        '<h2>4. Prise de contact</h2><p>Si vous nous contactez par e-mail ou par téléphone, nous traitons vos données uniquement pour répondre à votre demande et ne les transmettons pas sans votre accord.</p>' +
        '<h2>5. Vos droits</h2><p>Vous disposez d’un droit d’accès, de rectification, d’effacement et de limitation du traitement de vos données, ainsi que d’un droit d’opposition et de portabilité. Vous pouvez également introduire une réclamation auprès d’une autorité de contrôle. Veuillez adresser vos demandes par écrit à l’adresse ci-dessus.</p>' +
        '<p style="margin-top:32px;font-size:.9rem">Mise à jour : novembre 2026</p>'
    },

    ar: {
      'home.doctitle': 'Elecron – أجهزة قياس منسوب المياه صُنعت في الجزائر',
      'imprint.doctitle': 'البيانات القانونية – Elecron',
      'privacy.doctitle': 'سياسة الخصوصية – Elecron',
      'nav.mission': 'مهمتنا', 'nav.philosophy': 'فلسفتنا', 'nav.products': 'المنتجات', 'nav.contact': 'اتصل بنا', 'nav.home': 'الرئيسية',
      'hero.title': 'كل قطرة تحت المراقبة.',
      'hero.sub': 'أجهزة موثوقة لقياس منسوب المياه – مصمَّمة ومصنوعة في الجزائر.',
      'hero.cta': 'تواصل معنا',
      'mission.eyebrow': 'مهمتنا',
      'mission.title': 'Elecron تجعل الماء مرئيًا.',
      'mission.text': 'نطوّر ونصنع في الجزائر أجهزة موثوقة لقياس منسوب المياه، تساعد الأسر والمزارعين والمؤسسات وموزّعي المياه على تأمين مياههم وتجنّب الهدر وحماية المضخات – بسعر في متناول الجميع.',
      'goal.eyebrow': 'هدفنا',
      'goal.text': 'أن نصبح العلامة الرائدة في مراقبة المياه في الجزائر والمغرب العربي.',
      'phil.eyebrow': 'فلسفتنا', 'phil.title': 'بسيط، متين، محلي',
      'v1.t': 'الموثوقية', 'v1.d': 'كل جهاز مُختبَر ومصمَّم لتحمّل الحرارة والغبار والكلس.',
      'v2.t': 'البساطة', 'v2.d': 'تركيب في 15 دقيقة، ودليل استخدام بالعربية والفرنسية والأمازيغية.',
      'v3.t': 'سعر في المتناول', 'v3.d': 'طراز أساسي لكل أسرة، وقطع غيار متوفّرة محليًا.',
      'v4.t': 'صُنع في الجزائر', 'v4.d': 'التطوير والتجميع والخدمة داخل البلاد.',
      'v5.t': 'الاستدامة', 'v5.d': 'فيضان أقل، أعطال أقل في المضخات، وأجهزة قابلة للإصلاح.',
      'v6.t': 'الشراكة', 'v6.d': 'التجّار والمركّبون شركاؤنا، وليسوا مجرّد قناة بيع.',
      'prod.eyebrow': 'المنتجات', 'prod.title': 'مستشعر واحد، أربع فئات من المنتجات',
      'p1.tag': 'المنازل', 'p1.d': 'عرض المنسوب، وإنذار، وإيقاف تلقائي للمضخة.',
      'p2.tag': 'الزراعة', 'p2.d': 'يعمل بالطاقة الشمسية، للآبار والأحواض، مع تنبيه عبر الرسائل القصيرة.',
      'p3.tag': 'الصناعة والتجارة', 'p3.d': 'مراقبة عدّة خزّانات مع الربط بأنظمة إدارة المباني.',
      'p4.tag': 'موزّعو المياه والبلديات', 'p4.d': 'مستشعرات لاسلكية مع لوحة متابعة على الويب لخزّانات المياه.',
      'prod.soon': 'قريبًا',
      'prod.note': 'إضافةً إلى ذلك: قطع الغيار، وأطقم التركيب، والخدمة والصيانة.',
      'contact.eyebrow': 'اتصل بنا', 'contact.title': 'تحدّث معنا.',
      'contact.text': 'هل أنت تاجر أو مركّب أو مزارع أو جهة لتوزيع المياه؟ يسعدنا تلقّي رسالتك.',
      'contact.email': 'البريد الإلكتروني', 'contact.phone': 'الهاتف', 'contact.address': 'العنوان',
      'contact.addr': 'Elecron ش.ذ.م.م<br>بئر خادم، الجزائر العاصمة<br>الجزائر',
      'footer.tag': 'أجهزة قياس منسوب المياه صُنعت في الجزائر',
      'footer.imprint': 'البيانات القانونية', 'footer.privacy': 'سياسة الخصوصية',
      'imprint.title': 'البيانات القانونية',
      'imprint.body':
        '<h2>بيانات الشركة</h2><p>Elecron ش.ذ.م.م <bdi>(S.A.R.L.)</bdi><br>بئر خادم، الجزائر العاصمة<br>الجزائر</p>' +
        '<h2>يمثّلها</h2><p>R. Akknouche (المسيّر)</p>' +
        '<h2>الموقع الإلكتروني</h2><p>elecron.net</p>' +
        '<h2>المسؤول عن المحتوى</h2><p>R. Akknouche، بئر خادم، الجزائر العاصمة</p>' +
        '<h2>المسؤولية عن الروابط</h2><p>قد يحتوي هذا الموقع على روابط لمواقع خارجية، ويتحمّل أصحابها وحدهم المسؤولية عن محتواها.</p>',
      'privacy.title': 'سياسة الخصوصية',
      'privacy.body':
        '<h2>1. الجهة المسؤولة</h2><p>Elecron ش.ذ.م.م <bdi>(S.A.R.L.)</bdi>، بئر خادم، الجزائر العاصمة، الجزائر</p>' +
        '<h2>2. الاستضافة</h2><p>يُستضاف هذا الموقع لدى IONOS SE، Elgendorfer Str. 57، 56410 Montabaur، ألمانيا. عند زيارة الموقع تُحفظ بيانات ضرورية تقنيًا (مثل عنوان IP، والتاريخ والوقت، والصفحة المطلوبة، ونوع المتصفح) في سجلات الخادم، وذلك لضمان تشغيل الموقع بأمان واستقرار (المصلحة المشروعة، المادة 6 الفقرة 1 (و) من اللائحة العامة لحماية البيانات). وقد أُبرم مع IONOS عقد لمعالجة البيانات.</p>' +
        '<h2>3. لا ملفات تعريف ارتباط ولا تتبّع</h2><p>لا يستخدم هذا الموقع ملفات تعريف الارتباط، ولا أدوات تحليل أو تتبّع، ولا يحمّل أي محتوى (مثل الخطوط) من جهات خارجية. يُحفظ اختيارك للغة محليًا في متصفحك فقط.</p>' +
        '<h2>4. التواصل معنا</h2><p>عند تواصلك معنا عبر البريد الإلكتروني أو الهاتف، نعالج بياناتك فقط للرد على طلبك، ولا نشاركها دون موافقتك.</p>' +
        '<h2>5. حقوقك</h2><p>يحق لك الاطلاع على بياناتك وتصحيحها وحذفها وتقييد معالجتها، والاعتراض على معالجتها، ونقلها. كما يحق لك تقديم شكوى إلى سلطة رقابية لحماية البيانات. يُرجى إرسال طلباتك كتابيًا إلى العنوان أعلاه.</p>' +
        '<p style="margin-top:32px;font-size:.9rem">آخر تحديث: نوفمبر 2026</p>'
    },

    de: {
      'home.doctitle': 'Elecron – Wasserstandsmelder made in Algeria',
      'imprint.doctitle': 'Impressum – Elecron',
      'privacy.doctitle': 'Datenschutzerklärung – Elecron',
      'nav.mission': 'Mission', 'nav.philosophy': 'Philosophie', 'nav.products': 'Produkte', 'nav.contact': 'Kontakt', 'nav.home': 'Startseite',
      'hero.title': 'Jeder Tropfen im Blick.',
      'hero.sub': 'Zuverlässige Wasserstandsmelder – entwickelt und gefertigt in Algerien.',
      'hero.cta': 'Kontakt aufnehmen',
      'mission.eyebrow': 'Mission',
      'mission.title': 'Elecron macht Wasser sichtbar.',
      'mission.text': 'Wir entwickeln und fertigen in Algerien zuverlässige Wasserstandsmelder, die Haushalten, Landwirten, Betrieben und Versorgern helfen, Wasser zu sichern, Verluste zu vermeiden und Pumpen zu schützen – zu einem Preis, den sich jeder leisten kann.',
      'goal.eyebrow': 'Unser Ziel',
      'goal.text': 'Die führende Marke für Wasserüberwachung in Algerien und im Maghreb werden.',
      'phil.eyebrow': 'Philosophie', 'phil.title': 'Einfach, langlebig, lokal',
      'v1.t': 'Zuverlässigkeit', 'v1.d': 'Jedes Gerät geprüft, gebaut für Hitze, Staub und Kalk.',
      'v2.t': 'Einfachheit', 'v2.d': 'Montage in 15 Minuten, Anleitung auf Arabisch, Französisch und Tamazight.',
      'v3.t': 'Bezahlbarkeit', 'v3.d': 'Ein Einstiegsmodell für jeden Haushalt, Ersatzteile vor Ort.',
      'v4.t': 'Made in Algeria', 'v4.d': 'Entwicklung, Montage und Service im Land.',
      'v5.t': 'Nachhaltigkeit', 'v5.d': 'Weniger Überlauf, weniger Pumpenschäden, reparierbare Geräte.',
      'v6.t': 'Partnerschaft', 'v6.d': 'Händler und Installateure sind für uns Partner, nicht nur Absatzkanal.',
      'prod.eyebrow': 'Produkte', 'prod.title': 'Ein Sensorkern, vier Produktlinien',
      'p1.tag': 'Haushalte', 'p1.d': 'Pegelanzeige, Alarm und automatische Pumpenabschaltung.',
      'p2.tag': 'Landwirtschaft', 'p2.d': 'Solarbetrieben, für Brunnen und Becken, mit SMS-Alarm.',
      'p3.tag': 'Industrie und Gewerbe', 'p3.d': 'Mehrtank-Überwachung mit Anbindung an die Gebäudetechnik.',
      'p4.tag': 'Versorger und Kommunen', 'p4.d': 'Funk-Sensoren mit Web-Dashboard für Reservoirs.',
      'prod.soon': 'Demnächst',
      'prod.note': 'Dazu: Ersatzteile, Montage-Kits sowie Service und Wartung.',
      'contact.eyebrow': 'Kontakt', 'contact.title': 'Sprechen Sie mit uns.',
      'contact.text': 'Sie sind Händler, Installateur, Landwirt oder Versorger? Wir freuen uns auf Ihre Nachricht.',
      'contact.email': 'E-Mail', 'contact.phone': 'Telefon', 'contact.address': 'Adresse',
      'contact.addr': 'Elecron S.A.R.L.<br>Birkhadem, Algier<br>Algerien',
      'footer.tag': 'Wasserstandsmelder made in Algeria',
      'footer.imprint': 'Impressum', 'footer.privacy': 'Datenschutz',
      'imprint.title': 'Impressum',
      'imprint.body':
        '<h2>Angaben zum Unternehmen</h2><p>Elecron S.A.R.L.<br>Birkhadem, Algier<br>Algerien</p>' +
        '<h2>Vertreten durch</h2><p>R. Akknouche (Geschäftsführer)</p>' +
        '<h2>Website</h2><p>elecron.net</p>' +
        '<h2>Verantwortlich für den Inhalt</h2><p>R. Akknouche, Birkhadem, Algier</p>' +
        '<h2>Haftung für Links</h2><p>Diese Website kann Links zu externen Websites enthalten. Für deren Inhalte sind ausschliesslich die jeweiligen Betreiber verantwortlich.</p>',
      'privacy.title': 'Datenschutzerklärung',
      'privacy.body':
        '<h2>1. Verantwortliche Stelle</h2><p>Elecron S.A.R.L., Birkhadem, Algier, Algerien</p>' +
        '<h2>2. Hosting</h2><p>Diese Website wird bei der IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland, gehostet. Beim Aufruf der Website werden technisch notwendige Daten (z. B. IP-Adresse, Datum und Uhrzeit, aufgerufene Seite, Browsertyp) in Server-Logfiles gespeichert. Dies dient dem sicheren und stabilen Betrieb der Website (berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO). Mit IONOS besteht ein Vertrag zur Auftragsverarbeitung.</p>' +
        '<h2>3. Keine Cookies, kein Tracking</h2><p>Diese Website setzt keine Cookies, verwendet keine Analyse- oder Tracking-Werkzeuge und lädt keine Inhalte (z. B. Schriftarten) von Drittanbietern nach. Ihre Sprachwahl wird nur lokal in Ihrem Browser gespeichert.</p>' +
        '<h2>4. Kontaktaufnahme</h2><p>Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage und geben sie nicht ohne Ihre Einwilligung weiter.</p>' +
        '<h2>5. Ihre Rechte</h2><p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie auf Widerspruch und Datenübertragbarkeit. Sie können sich zudem bei einer Datenschutz-Aufsichtsbehörde beschweren. Für Anfragen wenden Sie sich bitte schriftlich an die oben genannte Adresse.</p>' +
        '<p style="margin-top:32px;font-size:.9rem">Stand: November 2026</p>'
    }
  };

  var KEY = 'elecron-lang';
  function save(l) { try { localStorage.setItem(KEY, l); } catch (e) {} }
  function load() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function apply(lang) {
    if (!T[lang]) lang = 'en';
    var d = T[lang], page = document.body.getAttribute('data-page') || 'home';
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (d[page + '.doctitle']) document.title = d[page + '.doctitle'];
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var v = d[els[i].getAttribute('data-i18n')];
      if (v != null) els[i].innerHTML = v;
    }
    var sel = document.getElementById('lang');
    if (sel) sel.value = lang;
  }

  document.addEventListener('DOMContentLoaded', function () {
    var q = (location.search.match(/[?&]lang=(en|fr|ar|de)/) || [])[1];
    var lang = q || load() || 'en';
    apply(lang);
    var sel = document.getElementById('lang');
    if (sel) sel.addEventListener('change', function () { save(sel.value); apply(sel.value); });
  });
})();
