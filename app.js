/**
 * DR. ALİ İHSAN YAKA, Ph.D. — MAIN APPLICATION SCRIPT
 * High Performance · Accessible Vanilla JS · Zero Dependencies
 * Project-specific bilingual content and localization
 */

(function () {
  'use strict';

  // -------------------------------------------------------------
  // 1. COMPREHENSIVE BILINGUAL TRANSLATION ENGINE (TR / EN)
  // Ensures every element, header, modal, and option translates seamlessly.
  // -------------------------------------------------------------
  const translations = {
  "tr": {
    "page.title": "Dr. Ali İhsan Yaka, Ph.D. | Lacanyen Psikanaliz & Klinik Psikoloji",
    "page.aboutTitle": "Hakkımda · Özgeçmiş | Dr. Ali İhsan Yaka",
    "page.practiceTitle": "Klinik Pratik & Hizmetler | Dr. Ali İhsan Yaka — Lacanyen Psikanaliz",
    "page.newsTitle": "Güncel Akademik Çalışmalar | Dr. Ali İhsan Yaka",
    "page.fieldworkTitle": "Saha Çalışmaları | Dr. Ali İhsan Yaka",
    "page.publicationsTitle": "Yayınlar, Tezler ve Bildiriler | Dr. Ali İhsan Yaka",
    "page.faqTitle": "Sıkça Sorulan Sorular (SSS) | Dr. Ali İhsan Yaka, Ph.D.",
    "page.privacyTitle": "Web Sitesi Gizlilik Bilgilendirmesi | Dr. Ali İhsan Yaka",
    "privacy.eyebrow": "ETİK ÇERÇEVE & YASAL BİLGİLENDİRME",
    "page.notFoundTitle": "Sayfa Bulunamadı (404) | Dr. Ali İhsan Yaka, Ph.D.",
    "meta.notFoundDescription": "Aradığınız sayfa bulunamadı. Dr. Ali İhsan Yaka’nın klinik pratik, akademik çalışmalar ve iletişim sayfalarına ana sayfadan ulaşabilirsiniz.",
    "fieldwork.eyebrow": "Saha deneyimi · MHPSS",
    "fieldwork.title": "Saha Deneyimleri & İnsani Yardım (MHPSS)",
    "fieldwork.intro": "Kolektif travma, kriz ve afet sahalarındaki ruh sağlığı ve psikososyal destek çalışmalarından seçilmiş örnekler.",
    "fieldwork.2023.location": "Hatay & Kahramanmaraş, Türkiye",
    "fieldwork.2023.period": "6 Şubat 2023 depremleri",
    "fieldwork.2023.title": "6 Şubat Depremleri Sonrası Koruma Çalışmaları",
    "fieldwork.2023.role": "IsraAID Türkiye · Koruma Görevlisi",
    "fieldwork.2023.description": "2023 yılında 6 Şubat depremlerinin ardından Türkiye’de yürütülen müdahalede koruma görevlisi olarak çalıştı.",
    "fieldwork.2023.tag1": "Koruma çalışmaları",
    "fieldwork.2023.tag2": "Afet müdahalesi",
    "fieldwork.2023.source": "Gönüllü psikososyal destek çalışması hakkında PİRHA haberi ↗",
    "fieldwork.2021.location": "Ninova Ovası & Erbil, Irak",
    "fieldwork.2021.period": "2020–2021 · Danışman Psikoterapist / Eğitmen",
    "fieldwork.2021.title": "Ninova Ovası’nda Psikoterapi ve Eğitim",
    "fieldwork.2021.role": "Center for Victims of Torture (CVT)",
    "fieldwork.2021.description": "2020–2021 döneminde Ninova Ovası’nda danışman psikoterapist ve eğitmen olarak görev yaptı.",
    "fieldwork.2021.tag1": "Psikoterapi",
    "fieldwork.2021.tag2": "Eğitim",
    "fieldwork.2020.location": "Juba & Yei, Güney Sudan",
    "fieldwork.2020.period": "2019–2020 · Ülke teknik misyonu",
    "fieldwork.2020.title": "Güney Sudan’da MHPSS Teknik Danışmanlığı",
    "fieldwork.2020.role": "Humanity & Inclusion",
    "fieldwork.2020.description": "2019–2020 döneminde Güney Sudan’da MHPSS Teknik Danışmanı olarak görev yaptı.",
    "fieldwork.2020.tag1": "MHPSS",
    "fieldwork.2020.tag2": "Teknik danışmanlık",
    "fieldwork.2017.location": "Ninova Ovası, Irak",
    "fieldwork.2017.period": "2017 · MHPSS program yönetimi",
    "fieldwork.2017.title": "Ninova Ovası’nda Ruh Sağlığı Program Yönetimi",
    "fieldwork.2017.role": "Action Against Hunger · MHCP Manager",
    "fieldwork.2017.description": "2017 yılında Action Against Hunger bünyesinde Ninova Ovası’nda Mental Health and Care Practices (MHCP) Manager olarak çalıştı.",
    "fieldwork.2017.tag1": "Ruh sağlığı programı",
    "fieldwork.2017.tag2": "MHPSS",
    "fieldwork.2015.location": "Şanlıurfa, Gaziantep & Diyarbakır, Türkiye",
    "fieldwork.2015.period": "2015–2016 · Klinik psikolog / Ruh sağlığı görevlisi",
    "fieldwork.2015.title": "Klinik Psikolog ve Ruh Sağlığı Görevlisi",
    "fieldwork.2015.role": "MSF Holland (2015) · Clinical Psychologist<br>MDM (2016) · Mental Health Officer",
    "fieldwork.2015.description": "2015’te Şanlıurfa’da MSF Holland, 2016’da Diyarbakır’da MDM bünyesinde ruh sağlığı görevlerinde bulundu.",
    "fieldwork.2015.tag1": "Klinik psikoloji",
    "fieldwork.2015.tag2": "Ruh sağlığı",
    "fieldwork.cta": "Kurumsal İş Birliği & Eğitim Talebi →",
    "splash.aria": "Açılış Sanat Perdesi",
    "a11y.skipToContent": "Ana içeriğe geç",
    "hero.portraitAlt": "Dr. Ali İhsan Yaka, Ph.D. — Klinik Psikolog ve doktora sonrası araştırmacı",
    "splash.eyebrow": "DR. ALİ İHSAN YAKA, PH.D. • UNIVERSITY AT BUFFALO (SUNY)",
    "splash.quote": "“Bilinçdışını dinlemek, imkânsızı imkâna dönüştürebilir.”",
    "splash.supportQuote": "“Dinlemek, henüz söze dökülmemiş olana yer açar.”",
    "splash.scholarTitle": "Yetişkinler için psikanalitik psikoterapi • Klinik süpervizyon",
    "splash.enterBtn": "Çalışmaları keşfet ↓",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.services": "Hizmetler",
    "nav.fieldwork": "Saha Çalışmaları",
    "nav.publications": "Yayınlar",
    "nav.research": "Araştırmalar",
    "psyche.homeLink": "Şemayı ve araştırma notlarını keşfedin ↗",
    "nav.faq": "SSS",
    "nav.contact": "İletişim",
    "nav.practice": "Klinik Pratik",
    "nav.news": "Güncel",
    "nav.mainMenu": "Ana Menü",
    "nav.mobileMenu": "Mobil Menü",
    "nav.openMenu": "Menüyü Aç",
    "nav.closeMenu": "Menüyü Kapat",
    "common.close": "Kapat",
    "lightbox.label": "Görsel Büyüteç",
    "header.sub": "Doktor Klinik Psikolog • Ph.D.",
    "header.welcome": "Hoş Geldiniz",
    "header.whatsNew": "Güncel",
    "header.practice": "Klinik Pratik",
    "header.education": "Saha & Akademi",
    "header.thought": "Yayınlar",
    "header.personal": "Kişisel",
    "header.contact": "İletişim",
    "header.cta": "Ön Görüşme",
    "header.ctaLong": "Ön Görüşme Randevusu Al",
    "psyche.eyebrow": "PSİKANALİTİK DÜŞÜNCE · ŞEMA",
    "psyche.title": "Sözden ruhsal yapıya",
    "psyche.intro": "Paylaşılan şemadaki kavramların birbirine bağlanışını gösteren görsel bir okuma.",
    "psyche.loop": "gösterenler zinciri",
    "psyche.anchor": "ana gösteren",
    "psyche.origin": "Gösteren",
    "psyche.originText": "Söze ve dile açılan başlangıç noktası",
    "psyche.message": "Baba metaforu",
    "psyche.messageText": "Mesaj · Ayna evresi",
    "psyche.fall": "Simgeselden düşme",
    "psyche.unrecognized": "Simgeselde tanı(n)mama",
    "psyche.recognized": "Simgeselde tanı(n)ma",
    "psyche.code": "Baba-nın-Adları",
    "psyche.codeText": "Kod · Ruhsal yapılar",
    "psyche.psychotic": "Psikotik",
    "psyche.perverse": "Perversiyon",
    "psyche.neurotic": "Nevrotik",
    "psyche.speech": "Dil alanı",
    "psyche.speechText": "Süjenin konuşma işlevi",
    "psyche.speechTextA": "Süjenin konuşma",
    "psyche.speechTextB": "işlevi",
    "psyche.real": "Gerçek",
    "psyche.imaginary": "İmgesel",
    "psyche.symbolic": "Simgesel",
    "psyche.caption": "Şema: Dr. Ali İhsan Yaka’nın “Psikotik Yapı ve Baba İşlevi” çalışmasından uyarlanmış, web için hareketli olarak yeniden düzenlenmiştir. <a href=\"yayinlar.html#ayna-2024\">2024 tarihli makaleyi inceleyin ↗</a>",
    "psyche.diagramTitle": "Gösteren zincirinden ruhsal yapılara uzanan şema",
    "psyche.diagramDesc": "Şema; Baba metaforu ve ayna evresinden başlayıp Gerçek, İmgesel ve Simgesel arasındaki bağlantıları, S1 eksenini, ruhsal yapıları ve öznenin konuşma işlevini gösterir.",
    "psyche.s2Label": "S2 · gösteren zinciri",
    "psyche.s1Label": "S1",
    "psyche.ayna": "Ayna evresi",
    "psyche.structureHeading": "Ruhsal yapılar",
    "psyche.captionText": "Şema, Dr. Ali İhsan Yaka’nın “Psikotik Yapı ve Baba İşlevi” çalışmasından uyarlanmıştır.",
    "psyche.captionLink": "2024 tarihli makaleyi inceleyin ↗",
    "psyche.researchPrompt": "Makalede yer alan diğer şemalar ve açıklamalar için",
    "psyche.motionNote": "Üst S2 hattı sağdan sola döner; alt S2 hattı soldan sağa bağlar. Mesaj yatayda soldan sağa, S1 kodlaması dikeyde aşağıdan yukarı akar.",
    "psyche.panHint": "Şemayı yatay kaydırarak tüm akışları izleyin ↔",
    "psyche.sourceDiagram": "Özgün şemayı PDF olarak aç ↗",
    "psyche.loopNote": "Üst ve alt döngüler gösteren zincirini bağlar.",
    "hero.eyebrow": "LACANYEN YÖNELİMLİ PSİKOTERAPİ • KLİNİK SÜPERVİZYON",
    "hero.title": "Lacanyen yönelimli psikoterapi ve klinik süpervizyon.",
    "hero.quote": "“Bilinçdışını dinlemek, imkânsızı imkâna dönüştürebilir.”",
    "hero.audience": "Yetişkinler için bireysel psikoterapi; klinisyenler ve saha ruh sağlığı çalışanları için süpervizyon.",
    "hero.lead": "Klinik psikoloji, psikanalitik çalışma ve insani yardım deneyimimi yetişkinlerle psikoterapi ve klinisyenlerle süpervizyon çalışmalarında bir araya getiriyorum.",
    "hero.aboutLink": "Eğitimimi, klinik geçmişimi ve çalışmalarımı inceleyin →",
    "hero.body": "Orta Doğu Teknik Üniversitesi'ndeki doktora çalışmamda, Irak'ta toplumsal travma ve klinik süpervizyon alanında çalışan ruh sağlığı çalışanlarının söylemlerini Lacanyen psikanalitik çerçevede inceledim. Ocak–Ağustos 2026 arasında University at Buffalo Center for the Study of Psychoanalysis & Culture bünyesinde misafir doktora sonrası araştırmacı olarak bulundum.",
    "hero.cred1": "Orta Doğu Teknik Üniversitesi Doktora",
    "hero.cred2": "Buffalo CSPC Misafir Araştırmacılığı · 2026",
    "hero.cred3": "WES Onaylı ABD Doktora Eşdeğerliği",
    "hero.cred4": "NYSED: İlk koşul karşılandı; ek eğitim sürüyor",
    "hero.cred5": "IPA Uluslararası Araştırma Bursu",
    "hero.cred6": "APsA 2026 · 44,5 CE saati",
    "hero.btnConsultation": "Ön Görüşme Randevusu Al",
    "hero.btnPractice": "Klinik Pratik & Süpervizyon",
    "hero.portraitTitle": "Klinik Psikolog • Buffalo CSPC, 2026",
    "hero.portraitLangs": "Diller: Türkçe • İngilizce C1 İleri Düzey • Kurmancî",
    "whatsNew.eyebrow": "GÜNCEL AKADEMİK ÇALIŞMALAR & ETKİNLİKLER",
    "whatsNew.title": "Güncel Duyurular & Akademik Etkinlikler",
    "whatsNew.subtitle": "Klinik psikanaliz, travma ve söylem analizi alanındaki güncel sempozyum ve yayınlar.",
    "whatsNew.card1Date": "2 MAYIS 2026 • BUFFALO, NEW YORK",
    "whatsNew.card1Title": "CSPC Sempozyumu: Dildeki Paranoit Boyut ve Soykırım",
    "whatsNew.card1Excerpt": "University at Buffalo CSPC Sempozyumu: “Conceptualizing Êzidî Femicide as Communicide: Psychoanalytic Reflections on the Paranoiac Dimension of Language in Genocide.”",
    "whatsNew.card1Link": "Ayrıntıları İncele →",
    "whatsNew.card2Date": "EKİM 2025 • PRAG, ÇEKYA",
    "whatsNew.card2Title": "25. Dünya Psikiyatri Kongresi e-Poster Bildirisi",
    "whatsNew.card2Excerpt": "Irak Ninova Ovası’nda Êzidî soykırımı mağdurlarıyla çalışan ruh sağlığı çalışanları üzerine Lacanyen psikanalitik saha çalışması: toplumsal travma ve klinik süpervizyon.",
    "whatsNew.card2Link": "Ayrıntıları İncele →",
    "whatsNew.card3Date": "2025 – 2026 • IPA ARAŞTIRMA BURSU & HAKEMLİK",
    "whatsNew.card3Title": "Uluslararası Psikanaliz Birliği Araştırma Bursu",
    "whatsNew.card3Excerpt": "“How Psychoanalytic Knowledge Can Be Used in Psychosocial Field Work” başlıklı 12 aylık araştırma desteği ve AYNA Klinik Psikoloji Dergisi hakemlik çalışmaları.",
    "whatsNew.card3Link": "Ayrıntıları İncele →",
    "practice.eyebrow": "KLİNİK YAKLAŞIM VE ÇALIŞMA ALANLARI",
    "practice.title": "Klinik Pratik & Süpervizyon",
    "practice.subtitle": "“Psikanaliz bir bilgi aktarımı değil, öznenin kendi arzusunun hakikatiyle karşılaşmasıdır.”",
    "practice.p1Num": "01 / PSİKOTERAPİ",
    "practice.p1Title": "Bireysel Psikanalitik Psikoterapi",
    "practice.p1Desc": "Lacanyen yönelimli psikoterapide semptom, ortadan kaldırılması gereken bir arıza olarak değil, kişinin yaşantısında anlam taşıyan bir ifade biçimi olarak dinlenir. Görüşmeler kişinin gündeme getirdiği konular etrafında ilerler.",
    "practice.p1Tag": "Bireysel • Yetişkin",
    "practice.p2Num": "02 / SÜPERVİZYON",
    "practice.p2Title": "Klinik Süpervizyon ve Vaka Analizi",
    "practice.p2Desc": "Klinik psikologlar, psikoterapistler ve sahada çalışan ruh sağlığı profesyonelleri için psikanalitik vaka kavramsallaştırması. Aktarım ve karşı-aktarım dinamikleri, nevroz, psikoz ve perversiyon klinik yapılarının ayrımı ve terapistin analitik duruşu ele alınır.",
    "practice.p2Tag": "Bireysel & Grup",
    "practice.p3Num": "03 / KLİNİK ÇERÇEVE",
    "practice.p3Title": "Klinik Çerçeve & Gizlilik",
    "practice.p3Desc": "Çalışmanın çerçevesi mesleki etik ve gizlilik sınırları gözetilerek birlikte belirlenir. Görüşme sıklığı ve yöntemi kişiyle konuşularak planlanır.",
    "practice.p3Tag": "Etik & Sınırlar",
    "practice.p4Num": "04 / FORMAT",
    "practice.p4Title": "Online ve Yüz Yüze Görüşmeler",
    "practice.p4Desc": "Online veya yüz yüze görüşme seçenekleri güncel uygunluğa göre değerlendirilir. Saat planlamasında Türkiye ve ABD Doğu saat dilimleri dikkate alınır.",
    "practice.p4Tag": "Online • Yüz Yüze",
    "practice.btnSchedule": "Ön Görüşme Randevusu Talep Et →",
    "practice.p1f1": "Serbest çağrışım ve sözün yakından dinlenmesi",
    "practice.p1f2": "Öznel kaygı, tekrarlar ve semptom analizi",
    "practice.p1f3": "Lacanyen noktalama ve seans ritmi",
    "practice.p1f4": "Yetişkinler için çevrim içi veya yüz yüze görüşmeler",
    "practice.p2f1": "Aktarım ve karşı-aktarım dinamiklerini ele alma",
    "practice.p2f2": "Psikanalitik vaka kavramsallaştırması",
    "practice.p2f3": "Kriz ortamlarında ikincil travmayı gözetme",
    "practice.p2f4": "Bireysel veya küçük grup süpervizyonu",
    "practice.p3f1": "Meslek etiği ve açık klinik sınırlar",
    "practice.p3f2": "Uygunluk halinde çevrim içi görüşme",
    "practice.p3f3": "Ücret ve çerçevenin önceden konuşulması",
    "practice.p3f4": "Uygunluğu değerlendirmek için ön görüşme",
    "practice.featurePill": "KLİNİK FORMÜLASYON & DİLE GELEN ARZU",
    "practice.featureTitle": "Semptomun Ardındaki Öznel Anlam",
    "practice.featureDesc": "Psikanalitik çalışma, kişinin semptomunun taşıyabileceği anlamı konuşup dikkatle dinlemek için alan açar.",
    "practice.featureBtn": "Ön Görüşme Talep Et",
    "practice.slidingTitle": "Ücret ve Uygunluk",
    "practice.slidingDesc": "Güncel ücret ve uygunluk bilgisi, ilk görüşme planlanmadan önce doğrudan konuşulabilir.",
    "practice.slidingBtn": "Ücret ve Uygunluğu Sor",
    "education.eyebrow": "ULUSLARARASI SAHA DENEYİMİ VE AKADEMİK ÇALIŞMALAR",
    "education.title": "Saha Çalışmaları & Akademi",
    "education.subtitle": "Kriz, yerinden edilme ve travma coğrafyalarında topluluk temelli psikososyal destek ve eğitim.",
    "education.badge1": "İnsani Yardım & Saha Liderliği",
    "education.historyTitle": "Uluslararası Saha Görevleri ve MHPSS Çalışmaları",
    "education.m1Date": "2023 • KAHRAMANMARAŞ & HATAY",
    "education.m1Role": "Koruma Görevlisi • IsraAID Türkiye",
    "education.m1Desc": "6 Şubat depremlerinin ardından Türkiye'deki müdahale çalışmalarında koruma görevlisi olarak görev aldı.",
    "education.m2Date": "2019 – 2020 • JUBA & YEI, GÜNEY SUDAN",
    "education.m2Role": "MHPSS Teknik Danışmanı • Humanity & Inclusion",
    "education.m2Desc": "Humanity & Inclusion bünyesinde Güney Sudan'da MHPSS teknik danışmanı olarak görev yaptı.",
    "education.m3Date": "2020 – 2021 • NİNOVA OVASI, IRAK",
    "education.m3Role": "Danışman Psikoterapist / Eğitmen • CVT",
    "education.m3Desc": "Center for Victims of Torture bünyesinde yarı zamanlı danışman psikoterapist ve eğitmen olarak görev yaptı.",
    "education.m4Date": "2017 • NİNOVA & ERBİL, IRAK",
    "education.m4Role": "MHCP Program Yöneticisi • Action Against Hunger",
    "education.m4Desc": "Ninova Ovası'ndaki ruh sağlığı ve psikososyal destek programlarının yönetiminde görev aldı.",
    "education.m5Date": "2015 – 2016 • ŞANLIURFA & DİYARBAKIR",
    "education.m5Role": "Klinik Psikolog ve Ruh Sağlığı Görevlisi • MSF / MDM",
    "education.m5Desc": "2015–2016 döneminde Şanlıurfa'da MSF, Diyarbakır'da MDM ile ruh sağlığı çalışmalarında görev yaptı.",
    "education.m1Loc": "TÜRKİYE · ISRAAID (2023)",
    "education.m1Title": "6 Şubat Depremleri Sonrası Koruma Çalışmaları",
    "education.m2Loc": "GÜNEY SUDAN · HUMANITY & INCLUSION (2019–2020)",
    "education.m2Title": "MHPSS Teknik Danışmanlığı",
    "education.m3Loc": "IRAK · CENTER FOR VICTIMS OF TORTURE (2020–2021)",
    "education.m3Title": "Ninova Ovası'nda Psikoterapi ve Eğitim",
    "education.m4Loc": "IRAK · ACTION AGAINST HUNGER (2017)",
    "education.m4Title": "Ruh Sağlığı Program Yöneticiliği",
    "education.m5Loc": "TÜRKİYE · MSF / MDM (2015–2016)",
    "education.m5Title": "Klinik Psikolog ve Ruh Sağlığı Görevlisi",
    "education.modulesTitle": "Eğitim ve Saha Danışmanlığı",
    "education.modulesDesc": "Eğitim ve saha danışmanlığı talepleri, klinik çalışmanın yanında ayrıca görüşülebilir.",
    "thought.eyebrow": "AKADEMİK VE PSİKANALİTİK YAYINLAR",
    "thought.title": "Yayınlar & Akademik Düşünce",
    "thought.subtitle": "Araştırma, yayın ve sunumların ayrıntılarına akademik arşivden ulaşabilirsiniz.",
    "thought.teaserResearchTag": "01 / ARAŞTIRMA",
    "thought.teaserResearchTitle": "Doktora araştırması",
    "thought.teaserResearchDesc": "Irak'ta toplumsal travma, klinisyen söylemi ve klinik süpervizyon üzerine Lacanyen psikanalitik çalışma.",
    "thought.teaserArticlesTag": "02 / MAKALELER",
    "thought.teaserArticlesTitle": "Hakemli yayınlar",
    "thought.teaserArticlesDesc": "Psikanalitik klinik çalışma ve bağlanma üzerine farklı yıllardan makaleler.",
    "thought.teaserTalksTag": "03 / SUNUMLAR",
    "thought.teaserTalksTitle": "Kongre ve davetli konuşmalar",
    "thought.teaserTalksDesc": "Akademik toplantılarda sunulan çalışmalar ve konuşmalar.",
    "thought.archiveLink": "Tüm yayınları ve sunumları incele →",
    "thought.filterAll": "Tümü",
    "thought.filterPsycho": "Psikanaliz",
    "thought.filterTrauma": "Saha & Travma",
    "thought.filterGrant": "Hibe & Hakemlik",
    "thought.item1Badge": "HAKEMLİ DERGİ • 2024",
    "thought.item1Title": "Psikotik Yapılanma ve Baba İşlevi: Lacanyen Bir Yaklaşım",
    "thought.item1Meta": "AYNA Klinik Psikoloji Dergisi • DOI: 10.31682/ayna.1282059",
    "thought.item2Badge": "DOKTORA TEZİ • 2024",
    "thought.item2Title": "Lacanyen Kuramda Klinik Süpervizyon ve Toplumsal Travma: Irak Ninova Ovası",
    "thought.item2Meta": "Orta Doğu Teknik Üniversitesi • Açık Arşiv No: 108851",
    "thought.item3Badge": "HAKEMLİ DERGİ • 2021",
    "thought.item3Title": "Obsesyonel Yapı ve Babanın Adı: Psikanalitik Vaka Kavramsallaştırması",
    "thought.item3Meta": "AYNA Klinik Psikoloji Dergisi • DOI: 10.31682/ayna.815903",
    "thought.item4Badge": "ULUSLARARASI HİBE • 2025 – 2026",
    "thought.item4Title": "International Psychoanalytical Association Araştırma Bursu",
    "thought.item4Meta": "Proje: “How Psychoanalytic Knowledge Can Be Used in Psychosocial Field Work”",
    "thought.item5Badge": "WPA KONGRESİ • 2025",
    "thought.item5Title": "25. Dünya Psikiyatri Kongresi Bildirisi: Êzidî Soykırımı ve Süpervizyon",
    "thought.item5Meta": "World Psychiatric Association Congress • Prag, Çekya • Poster 3015",
    "thought.item6Badge": "HAKEMLİ MAKALE • 2010",
    "thought.item6Title": "Yakın İlişkiler Envanteri’nin Kendilik Algısı ve Psikopatolojik Belirtiler Bağlamında İncelenmesi",
    "thought.item6Meta": "Türk Psikoloji Yazıları, 13 (26), 64–76 • Nesrin Hisli Şahin ile birlikte",
    "thought.viewArticle": "Makaleyi Oku →",
    "thought.viewThesis": "Tezi İncele (ODTÜ) →",
    "thought.viewGrantDoc": "Belgeyi Görüntüle",
    "thought.viewPoster": "Posteri Görüntüle",
    "thought.viewPdf": "PDF İncele",
    "personal.eyebrow": "KİŞİSEL İLGİLER",
    "personal.title": "Kişisel ilgi alanları",
    "personal.baglamaTitle": "Kısa sap bağlama",
    "personal.baglamaDesc": "Boş zamanlarında kısa sap bağlama çalışıyor.",
    "personal.birdsTitle": "Kuş gözlemciliği",
    "personal.birdsDesc": "Kuş gözlemciliğiyle ilgileniyor.",
    "personal.photoTitle": "Amatör fotoğrafçılık",
    "personal.photoDesc": "Amatör düzeyde fotoğrafla ilgileniyor.",
    "personal.subtitle": "“Sesin tınısı, doğanın sessizliği ve vizörden yansıyan insan hikâyeleri.”",
    "personal.card1Badge": "MÜZİK & GELENEK",
    "personal.card1Title": "Kısa Sap Bağlama İcrası",
    "personal.card1Desc": "Anadolu irfanının ve sözlü geleneğin kadim enstrümanı bağlama; klinik çalışmanın yoğun zihinsel mesaisinde bir iç dinginlik ve köklerle buluşma alanı.",
    "personal.card2Badge": "DOĞA & TÜR TESPİTİ",
    "personal.card2Title": "Kuş Gözlemciliği (Ornitoloji Merakı)",
    "personal.card2Desc": "Farklı coğrafyalarda (Mezopotamya sulak alanlarından Kuzey Amerika göç yollarına) sabırla beklemeyi ve ayrıntılara kulak kesilmeyi öğreten bir doğa pratiği.",
    "personal.card3Badge": "GÖRSEL ARŞİV",
    "personal.card3Title": "Belgesel Fotoğrafçılık",
    "personal.card3Desc": "İnsani yardım sahalarında ve yolculuklarda hayatın yalın anlarını, direncini ve mekânın ruhunu vizörden kaydetme merakı.",
    "contact.eyebrow": "RANDEVU VE İLETİŞİM PROTOKOLÜ",
    "contact.pageTitle": "İletişim ve Ön Görüşme | Dr. Ali İhsan Yaka",
    "contact.title": "İletişim & Ön Görüşme",
    "contact.subtitle": "“Benimle iletişime geçmek isterseniz lütfen e-posta gönderin, mesaj atın veya arayın. En kısa sürede dönüş yapacağım.”",
    "contact.phoneLabel": "TÜRKİYE DANIŞMA HATTI & WHATSAPP",
    "contact.phoneNote": "Randevu ve genel bilgi için telefon veya WhatsApp üzerinden ulaşabilirsiniz.",
    "contact.phoneVal": "+90 (537) 473 84 33",
    "contact.whatsappLink": "WhatsApp üzerinden mesaj gönderin →",
    "contact.emailLabel": "E-POSTA",
    "contact.emailHint": "E-posta ile iletişim",
    "contact.emailNote": "Klinik başvuruları ve akademik iş birlikleri için e-posta gönderebilirsiniz.",
    "contact.emailAction": "E-posta Gönder →",
    "contact.officeLabel": "AKADEMİK BAĞLANTI · KLİNİK ADRES DEĞİLDİR",
    "contact.officeNote": "University at Buffalo akademik bağlantısıdır; klinik görüşme adresi değildir.",
    "contact.formatLabel": "SEANS FORMATI VE SAAT DİLİMİ",
    "contact.formatHint": "Online ve yüz yüze seçenekler",
    "contact.onlineLabel": "Online görüşme:",
    "contact.onlineZones": "Türkiye (TRT / UTC+3); saatler başvuru sırasında netleştirilir",
    "contact.inPersonLabel": "Yüz yüze görüşme:",
    "contact.inPersonAvailability": "Güncel uygunluk iletişimde teyit edilir.",
    "contact.formatDesc": "Görüşme biçimi, konum ve güncel uygunluk başvuru öncesinde doğrudan teyit edilir.",
    "contact.formTitle": "Ön Görüşme Talebi",
    "contact.formBadge": "WHATSAPP MESAJI",
    "contact.formDesc": "Form, WhatsApp’ta inceleyip kendiniz gönderebileceğiniz bir mesaj hazırlar. Bu site form bilgilerini almaz veya saklamaz.",
    "contact.formName": "Adınız ve Soyadınız *",
    "contact.formNamePlaceholder": "",
    "contact.formEmail": "E-posta Adresiniz (isteğe bağlı)",
    "contact.formEmailPlaceholder": "",
    "contact.formPhone": "Telefon Numaranız",
    "contact.formPhonePlaceholder": "",
    "contact.formService": "Talep Edilen Hizmet *",
    "contact.optSelect": "Seçiniz...",
    "contact.optTherapy": "Bireysel Psikanalitik Psikoterapi",
    "contact.optSupervision": "Klinik Süpervizyon (Terapistler için)",
    "contact.optTraining": "Saha & Kurumsal Eğitim",
    "contact.optAcademic": "Akademik / Seminer Daveti",
    "contact.formFormat": "Tercih Edilen Format",
    "contact.optOnline": "Online (Görüntülü Görüşme)",
    "contact.optInPerson": "Yüz yüze (uygunluk iletişimde teyit edilir)",
    "contact.optFlexible": "Fark Etmez / Esnek",
    "contact.formMessage": "Kısaca Durumunuz / Talebiniz",
    "contact.formMessagePlaceholder": "Lütfen sağlık veya terapi ayrıntısı paylaşmayın.",
    "contact.formSensitiveNote": "Lütfen bu alana sağlık veya terapi ayrıntısı yazmayın.",
    "contact.formConsent": "WhatsApp’ta açılacak mesajı inceleyip kendim göndereceğim.",
    "contact.formPrivacyLink": "Gizlilik açıklaması",
    "contact.formSubmit": "WhatsApp Mesajı Hazırla",
    "contact.reassurance": "WhatsApp açılır; siz Gönder’e basmadıkça mesaj iletilmez. Bu site form bilgilerini almaz veya saklamaz.",
    "about.profileLinkedin": "LinkedIn profili",
    "about.profileOrcid": "ORCID araştırmacı kaydı",
    "about.profileScholar": "Google Scholar yayın profili",
    "about.profileDergipark": "DergiPark araştırmacı profili",
    "about.profileResearchgate": "ResearchGate araştırmacı profili",
    "about.profileTavsiye": "TavsiyeEdiyorum profili",
    "about.gipderTalk": "2024 · GİPDER, “Klinik Psikanalizde Vaka Kavramsallaştırması”, konuk konuşmacı — video ↗",
    "publication.bogaziciBadge": "DAVETLİ KONUŞMA · BOĞAZİÇİ ÜNİVERSİTESİ XI. PSİKOLOJİ GÜNÜ",
    "publication.bogaziciTitle": "Psikopatolojik Yalnızlıktan Subjektif Toplumsallığa: Psikanalitik Öznelleşme Deneyimi",
    "publication.bogaziciCitation": "<strong>Yaka, A. İ.</strong> (27 Nisan 2025). Boğaziçi Üniversitesi XI. Psikoloji Günü, “Yalnızlık”, İstanbul.",
    "publication.bogaziciDesc": "Yalnızlık ve psikanalitik perspektif üzerine davetli konuşma; Lacanyen psikanalitik perspektifte ayna evresi ve öznel toplumsallaşma ilişkisi çerçevesinde.",
    "publication.bogaziciImageAlt": "Dr. Ali İhsan Yaka, Boğaziçi Üniversitesi XI. Psikoloji Günü’nde psikanalitik yalnızlık sunumunu yaparken",
    "publication.bogaziciLink": "Etkinlik ayrıntılarını inceleyin →",
    "publication.kurdiBadge": "KURMANCÎ ÇEVİRİ · PSYCHOLOGY KURDÎ",
    "publication.kurdiTitle": "Psikopatolojik Yalnızlıktan Subjektif Toplumsallığa: Psikanalitik Öznelleşme Deneyimi",
    "publication.kurdiCitation": "<strong>Yaka, A. İ.</strong> (2026). “<em>Ji tenêtiya psîkopatolojîk berev civakîbûna subjektîf: Tecribeya bikerbûna psîkanalîtîk</em>.” <em>Psychology Kurdî</em>, 9(21), 61–74. Kurmancî çeviri: Aydin Rengîn.",
    "publication.kurdiDesc": "Psikanalitik bir çerçevede yalnızlık, öznel toplumsallaşma ve toplumsal travma ilişkisini ele alan makalenin Kurmancî çevirisi.",
    "publication.kurdiPdf": "Dergi sayısını PDF olarak görüntüle ↗",
    "publication.kurdiAnnouncement": "Sayı duyurusu ↗",
    "publication.details": "Ayrıntı ve dergi PDF’i ↗",
    "practice.methodEyebrow": "KLİNİK ÇALIŞMANIN ÇERÇEVESİ",
    "practice.methodTitle": "Söz, semptom ve çalışma çerçevesi",
    "practice.methodDesc": "Görüşmeler kişinin başvuru nedeni ve sözünü dikkatle dinleyerek ilerler. Semptomun kişisel anlamı, gizlilik ve çalışma biçimi birlikte ele alınır.",
    "practice.methodStep1": "Dinleme",
    "practice.methodStep1Desc": "Başvuru nedenine ve kişinin kendi sözcüklerine alan açmak.",
    "practice.methodStep2": "Kavramsallaştırma",
    "practice.methodStep2Desc": "Tekrarlayan güçlükleri ve semptomun taşıyabileceği öznel anlamı konuşmak.",
    "practice.methodStep3": "Çerçeve",
    "practice.methodStep3Desc": "Görüşme sıklığını, biçimini ve gizlilik sınırlarını birlikte belirlemek.",
    "practice.inclusiveEyebrow": "ÇALIŞMA YAKLAŞIMI",
    "practice.inclusiveTitle": "Kapsayıcı ve kültüre duyarlı bir alan",
    "practice.inclusiveDesc": "Çalışma, kişinin kendi yaşam öyküsünü, dilini ve kültürel bağlamını gözeten; LGBTQI+ bireyleri kapsayıcı ve onaylayıcı bir yaklaşımla yürütülür. Her görüşmenin çerçevesi ve ihtiyaçları kişiyle birlikte ele alınır.",
    "practice.focusAreas": "Yetişkinlerle çalışmada ele alınan temel başlıklar: kaygı ve anksiyete, panik atak, takıntılar (OKB), travma ve yas, korkular ve fobiler, depresif belirtiler, kendine zarar verme eğilimleri, odaklanma güçlükleri (DEHB), bağımlılıklar, ilişki ve bağlanma sorunları.",
    "practice.futurePublicationsLink": "Mevcut yayınları inceleyin",
    "practice.futureNewsLink": "Yeni duyuruları takip edin",
    "practice.futureMediaDesc": "Düzenli blog ve video serileri gelecek planı olarak değerlendiriliyor. Hakkımda bölümünde mevcut YouTube videosuna bağlantı bulunuyor.",
    "practice.futureMediaTitle": "Yazılı ve video içerikler",
    "practice.futureMediaTag": "YAYIN FİKRİ",
    "practice.futureCaseDesc": "Modüler eğitim fikri; içerik ve başvuru takvimi netleştiğinde duyurulacak.",
    "practice.futureCaseTitle": "Psikanalitik vaka kavramsallaştırması",
    "practice.futureCaseTag": "PLANLANAN MODÜL",
    "practice.futurePfaDesc": "Kurumların ihtiyaçlarına göre tasarlanabilecek eğitim içeriği; tarih ve kayıt bilgisi henüz yayımlanmadı.",
    "practice.futurePfaTitle": "Psikolojik İlk Yardım",
    "practice.futurePfaTag": "PLANLANAN EĞİTİM",
    "practice.futureIntro": "Aşağıdaki başlıklar kaynak notlarda geleceğe dönük fikirler olarak yer alıyor; şu anda açık eğitim veya yayın serisi olarak sunulmuyor.",
    "practice.futureTitle": "Geliştirilmesi planlanan eğitim ve yayınlar",
    "practice.futureEyebrow": "İLERİYE DÖNÜK İÇERİKLER",
    "practice.pageEyebrow": "KLİNİK PRATİK & HİZMETLER",
    "practice.pageTitle": "Klinik Pratik, Terapi & Süpervizyon",
    "practice.pageLead": "“Psikanaliz bir bilgi aktarımı değil; öznenin arzusunun hakikatiyle karşılaşmasıdır.” Klinik görüşmeler, etik çerçeve ve kişinin ihtiyaçları birlikte ele alınarak yürütülür.",
    "practice.profileBadge": "DOKTOR KLİNİK PSİKOLOG • CSPC, 2026",
    "practice.profileTitle": "Analitik Dinleme ve Semptomun Anlamı",
    "practice.profileDesc": "Lacanyen psikanalitik yönelim; danışanın şikâyet ettiği semptomu susturulması gereken bir arıza olarak değil, bilinçdışı arzunun ve dile gelemeyen çatışmaların bedendeki ya da ilişkilerdeki şifrelenmiş sözü olarak ele alır. Seanslar, standart reçeteler uygulamak yerine kişinin kendi arzusunun sorumluluğunu üstlenmesine eşlik eder.",
    "practice.profileCredentials": "WES doktora eşdeğerliği değerlendirmesi • NYSED eğitim koşullarından ilkini karşıladı; ek psikanalitik eğitim sürüyor • APsA 2026 sürekli eğitim kredisi",
    "practice.card1Number": "01 / PSİKANALİZ & TERAPİ",
    "practice.card1Title": "Bireysel Psikanalitik Psikoterapi",
    "practice.card1Desc": "Yetişkin bireylerle birebir yürütülen derinlikli psikanalitik psikoterapi seansları. Serbest çağrışım kuralı rehberliğinde; kaygı, yas, ilişkisel tıkanıklıklar, takıntılar ve kimlik çatışmalarının kökenindeki bilinçdışı dinamiklerin çözümlenmesi.",
    "practice.card1Item1": "• Serbest çağrışım ve sözün yakından dinlenmesi",
    "practice.card1Item2": "• Lacanyen noktalama ve seans ritmi",
    "practice.card1Item3": "• Tekrarlayan döngüler ve arzu çıkmazlarının analizi",
    "practice.card1Item4": "• Türkçe, English (C1) ve Kurmancî dillerinde seans seçeneği",
    "practice.card1Format": "<strong>Format:</strong> Görüşme biçimi ve güncel yüz yüze uygunluk, randevu öncesinde teyit edilir.",
    "practice.card1Cta": "Ön Görüşme Talep Et →",
    "practice.card2Number": "02 / SÜPERVİZYON",
    "practice.card2Title": "Klinik Süpervizyon & Vaka Formülasyonu",
    "practice.card2Desc": "Klinik psikologlar, psikoterapistler, psikiyatri hekimleri ve danışmanlar için vaka süpervizyonu. Danışanın söylemindeki yapıyı kavrama, aktarım ve karşı-aktarım düğümlerini çözme ve terapistin analitik duruşunu pekiştirme.",
    "practice.card2Item1": "• Lacanyen yapısal değerlendirme (Nevroz, Psikoz, Perversiyon)",
    "practice.card2Item2": "• Aktarımın yönlendirilmesi ve analistin arzusu",
    "practice.card2Item3": "• Ağır travma ve kriz vakalarında ikincil travma koruması",
    "practice.card2Item4": "• Bireysel veya 2–4 kişilik küçük kapalı grup formatı",
    "practice.card2Scope": "<strong>Kapsam:</strong> ODTÜ AYNA Klinik Psikoloji Destek Birimi deneyimiyle.",
    "practice.card2Cta": "Süpervizyon Başvurusu →",
    "practice.card3Number": "03 / MHPSS & EĞİTİM",
    "practice.card3Title": "Saha & Kurumsal Travma Danışmanlığı",
    "practice.card3Desc": "İnsani yardım kuruluşları, STK’lar, kriz ekipleri ve afet sahasında görev yapan saha personeli için kurumsal psikososyal destek (MHPSS) ve travma yönetimi danışmanlığı.",
    "practice.card3Item1": "• MHPSS programı ve kurum içi kapasite geliştirme danışmanlığı",
    "practice.card3Item2": "• Merhamet yorgunluğu ve tükenmişlik önleme protokolleri",
    "practice.card3Item3": "• IASC Rehberi standartlarında saha programlama",
    "practice.card3Item4": "• Irak, Güney Sudan ve 6 Şubat Deprem Sahası deneyimi",
    "practice.card3Scope": "<strong>Kurumsal:</strong> Kuruma ve ihtiyaca özel tasarlanmış atölyeler.",
    "practice.card3Cta": "Kurumsal Danışmanlık İste →",
    "practice.frameEyebrow": "ÇERÇEVE VE GİZLİLİK",
    "practice.frameTitle": "Klinik Çerçeve & Mesleki Gizlilik",
    "practice.frameDesc": "Klinik çalışma başlamadan önce görüşme çerçevesi, gizlilik ve bunun sınırları birlikte konuşulur.",
    "practice.frameItem1": "✓ <strong>Çerçeve:</strong> Görüşme sıklığı ve yöntemi kişiyle konuşularak planlanır.",
    "practice.frameItem2": "✓ <strong>Gizlilik:</strong> Gizlilik koşulları ve sınırları ilk görüşme öncesinde açıklığa kavuşturulur.",
    "practice.frameItem3": "✓ <strong>Online görüşmeler:</strong> Kullanılacak platform ve teknik koşullar randevu öncesinde netleştirilir.",
    "practice.feesEyebrow": "GÖRÜŞME ÇERÇEVESİ",
    "practice.feesTitle": "Ücret ve Uygunluk",
    "practice.feesDesc": "Görüşme ücretleri ve güncel uygunluk ilk görüşme öncesinde doğrudan iletişimle netleştirilir.",
    "practice.feesCta": "Ücret ve Uygunluk Hakkında Bilgi Al →",
    "practice.faqEyebrow": "SIKÇA SORULAN SORULAR",
    "practice.faqTitle": "Süreç Hakkında Merak Edilenler",
    "practice.faq1Title": "Ön görüşme süreci nasıl işler?",
    "practice.faq1Desc": "Ön görüşme (ilk seans), danışanın terapiye geliş sebebini, beklentilerini ve psikanalitik çalışmaya uygunluğunu değerlendirdiğimiz karşılıklı bir tanışma seansıdır. Bu seansta seans sıklığı, çalışma dili ve çerçeve detayları netleştirilir.",
    "practice.faq2Title": "Online seanslar yüz yüze seanslar kadar verimli midir?",
    "practice.faq2Desc": "Online görüşmelerin sizin için uygun olup olmadığı ilk görüşmede konuşulabilir. Kullanılacak platform, saat dilimi ve güncel uygunluk randevu öncesinde netleştirilir.",
    "practice.faq3Title": "Hangi dillerde seans alabilirim?",
    "practice.faq3Desc": "Seanslar danışanın kendisini en rahat ve sahici biçimde ifade ettiği dilde; Türkçe, İngilizce veya Kurmancî olarak gerçekleştirilebilmektedir.",
    "practice.faqCta": "Ön Görüşme Randevusu Başlat",
    "about.eventGalleryPhoto1": "Boğaziçi Üniversitesi XI. Psikoloji Günü’nde, “Yalnızlık ve Psikanalitik Perspektif” sunumundan.",
    "about.eventGalleryPhoto2": "Boğaziçi Üniversitesi’nde “Psikopatolojik Yalnızlıktan Subjektif Toplumsallığa” başlıklı konuşma sırasında.",
    "about.eventGalleryCaption1": "Yalnızlık ve psikanalitik perspektif",
    "about.eventGalleryCaption2": "XI. Psikoloji Günü · 27 Nisan 2025",
    "about.bogaziciKicker": "SEÇİLMİŞ SUNUM · 27 NİSAN 2025",
    "about.bogaziciTitle": "Boğaziçi Üniversitesi XI. Psikoloji Günü",
    "about.bogaziciDesc": "“Psikopatolojik Yalnızlıktan Subjektif Toplumsallığa: Psikanalitik Öznelleşme Deneyimi” başlıklı davetli konuşma. Fotoğraflar, sunumdaki Ayna Evresi ve psikanalitik yalnızlık tartışmalarından seçilmiştir.",
    "about.bogaziciLink": "Sunumu yayınlar arasında inceleyin →",
    "about.certificate2004Title": "9. Ulusal Psikoloji Öğrencileri Kongresi",
    "about.certificate2004Desc": "30 Haziran–4 Temmuz 2004 · Bildirili katılım.",
    "about.certificate2004Link": "Katılım belgesini aç →",
    "about.certificate2004Alt": "Ali İhsan Yaka adına 9. Ulusal Psikoloji Öğrencileri Kongresi bildirili katılım belgesi",
    "about.talkCspc2026": "2026 · University at Buffalo CSPC Yıllık Sempozyumu: “Conceptualizing Êzidî Femicide as Communicide: Psychoanalytic Reflections on the Paranoiac Dimension of Language in Genocide”, sunum (2 Mayıs).",
    "about.talkCspc2026": "2026 · University at Buffalo CSPC Yıllık Sempozyumu: “Conceptualizing Êzidî Femicide as Communicide: Psychoanalytic Reflections on the Paranoiac Dimension of Language in Genocide”, sunum (2 Mayıs).",
    "about.talkWpa2025": "2025 · 25. Dünya Psikiyatri Kongresi (WPA): “Êzidî Soykırımı ve Süpervizyonda Toplumsal Travma”, e-poster #3015 (Prag).",
    "about.talkWpa2025": "2025 · 25. Dünya Psikiyatri Kongresi (WPA): “Êzidî Soykırımı ve Süpervizyonda Toplumsal Travma”, e-poster #3015 (Prag).",
    "about.talkPsyCongress2004": "2004 · 9. Ulusal Psikoloji Öğrencileri Kongresi, bildirili katılım.",
    "about.talkCertificateLink": "Katılım belgesine git →",
    "about.eventMaterialsEyebrow": "SEÇİLMİŞ SUNUMLAR",
    "about.eventMaterialsTitle": "Uluslararası akademik buluşmalar",
    "about.eventMaterialsIntro": "Buffalo CSPC Yıllık Sempozyumu ve Dünya Psikiyatri Kongresi’ndeki çalışmaların program ve e-poster görselleri.",
    "about.cspcPosterAlt": "University at Buffalo CSPC 2026 Bahar Sempozyumu afişi",
    "about.wpaPosterAlt": "25. Dünya Psikiyatri Kongresi e-poster başlığı",
    "about.cspcPosterCaption": "CSPC Yıllık Sempozyumu · Buffalo · 2026",
    "about.wpaPosterCaption": "25. Dünya Psikiyatri Kongresi · Prag · 2025",
    "about.profileLinksLabel": "Doğrulanabilir akademik ve mesleki profiller",
    "footer.brandSub": "Doktor Klinik Psikolog • Psikanalist",
    "footer.ethos": "Lacanyen yönelimli klinik psikoterapi ve süpervizyon; toplumsal travma üzerine akademik çalışma.",
    "footer.langStatus": "Çalışma Dilleri: Türkçe • English (C1/IELTS 7.0) • Kurmancî",
    "footer.navHeading": "Site Gezintisi",
    "footer.affilHeading": "Kurumsal Bağlar & Akreditasyon",
    "footer.affilUB": "Buffalo CSPC Misafir Araştırmacılığı · 2026",
    "footer.affilMETU": "Klinik Psikoloji Doktora (Ph.D., 2024)",
    "footer.affilIPA": "2025 Araştırma Hibesi Sahibi (12 Ay)",
    "footer.affilNYSED": "NYSED: İlk eğitim koşulu karşılandı; ek psikanalitik eğitim sürüyor",
    "contact.phoneHint": "Telefon & WhatsApp",
    "practice.featureImageAlt": "Dr. Ali İhsan Yaka — klinik psikanalitik pratik ve süpervizyon",
    "footer.affilAPSA": "APsA 2026 katılımı: 44,5 sürekli eğitim saati",
    "footer.contactHeading": "Doğrudan İletişim & Klinik Hat",
    "footer.phoneLabel": "TÜRKİYE DANIŞMA HATTI",
    "footer.whatsappLabel": "WHATSAPP",
    "footer.whatsappAction": "Mesaj Başlat →",
    "footer.emailLabel": "E-POSTA",
    "footer.locationLabel": "SEANS LOKASYONLARI",
    "footer.locationDesc": "Görüşme formatı ve güncel konum uygunluğu iletişimde teyit edilir.",
    "footer.crisisTitle": "Kriz Bildirisi:",
    "footer.crisisText": "Bu web sitesi acil psikiyatrik müdahale hattı değildir. Acil durumlarda en yakın hastanenin acil servisine başvurun veya 112 Acil Çağrı Merkezi'ni arayın.",
    "footer.copy": "© 2026 Dr. Ali İhsan Yaka, Ph.D. Tüm hakları saklıdır.",
    "footer.privacy": "Web Sitesi Gizlilik Bilgilendirmesi",
    "meta.homeDescription": "Dr. Ali İhsan Yaka, Ph.D. — 2026’da Buffalo CSPC’de misafir doktora sonrası araştırmacı olarak görev yaptı. Lacanyen yönelimli psikanalitik psikoterapi, klinik süpervizyon ve insani yardım saha deneyimi.",
    "meta.aboutDescription": "Dr. Ali İhsan Yaka’nın eğitimi, klinik ve insani yardım deneyimi, araştırmaları, yayınları ve mesleki katkıları.",
    "meta.practiceDescription": "Yetişkinler için Lacanyen yönelimli psikanalitik psikoterapi, klinik süpervizyon, vaka formülasyonu ve kurumsal saha danışmanlığı.",
    "meta.newsDescription": "University at Buffalo CSPC sempozyumu, uluslararası kongre sunumları, IPA araştırma hibesi ve akademik çalışmalar.",
    "meta.fieldworkDescription": "Irak, Güney Sudan ve Türkiye’de ruh sağlığı ve psikososyal destek alanındaki insani yardım saha deneyimi.",
    "meta.publicationsDescription": "Dr. Ali İhsan Yaka’nın hakemli makaleleri, doktora tezi, kongre sunumları ve akademik çalışmaları.",
    "meta.faqDescription": "Lacanyen yönelimli psikanalitik psikoterapi, seans çerçevesi, gizlilik, çevrim içi görüşmeler ve klinik süpervizyon hakkında yanıtlar.",
    "meta.contactDescription": "Psikanalitik psikoterapi, klinik süpervizyon veya kurumsal eğitim hakkında iletişime geçin.",
    "meta.privacyDescription": "Web sitesindeki iletişim formu, tarayıcı tercihleri ve gizlilik uygulamaları hakkında bilgilendirme.",
    "footer.splashReplay": "Başa dön"
  },
  "en": {
    "page.title": "Dr. Ali Ihsan Yaka, Ph.D. | Lacanian Psychoanalysis & Clinical Psychology",
    "page.aboutTitle": "About | Dr. Ali Ihsan Yaka, Ph.D.",
    "page.practiceTitle": "Clinical Practice & Supervision | Dr. Ali Ihsan Yaka",
    "page.newsTitle": "Academic Work & Events | Dr. Ali Ihsan Yaka",
    "page.fieldworkTitle": "Humanitarian Fieldwork | Dr. Ali Ihsan Yaka",
    "page.publicationsTitle": "Publications & Presentations | Dr. Ali Ihsan Yaka",
    "page.faqTitle": "Frequently Asked Questions | Dr. Ali Ihsan Yaka",
    "page.privacyTitle": "Website Privacy Notice | Dr. Ali Ihsan Yaka",
    "privacy.eyebrow": "ETHICAL FRAMEWORK & LEGAL NOTICE",
    "page.notFoundTitle": "Page Not Found (404) | Dr. Ali Ihsan Yaka",
    "meta.notFoundDescription": "The page you are looking for could not be found. Visit the homepage to explore Dr. Ali Ihsan Yaka’s clinical practice, academic work, and contact information.",
    "fieldwork.eyebrow": "Fieldwork experience · MHPSS",
    "fieldwork.title": "Humanitarian Fieldwork & Mental Health (MHPSS)",
    "fieldwork.intro": "Selected work in mental health and psychosocial support across settings shaped by collective trauma, crisis, and disaster.",
    "fieldwork.2023.location": "Hatay & Kahramanmaraş, Turkey",
    "fieldwork.2023.period": "2023 Türkiye earthquakes",
    "fieldwork.2023.title": "Protection Work After the February 6 Earthquakes",
    "fieldwork.2023.role": "IsraAID Türkiye · Protection Officer",
    "fieldwork.2023.description": "Worked as a protection officer in Türkiye’s response following the February 6, 2023 earthquakes.",
    "fieldwork.2023.tag1": "Protection work",
    "fieldwork.2023.tag2": "Disaster response",
    "fieldwork.2023.source": "PİRHA report on volunteer psychosocial support ↗",
    "fieldwork.2021.location": "Nineveh Plains & Erbil, Iraq",
    "fieldwork.2021.period": "2020–2021 · Consultant Psychotherapist / Trainer",
    "fieldwork.2021.title": "Psychotherapy and Training in the Nineveh Plains",
    "fieldwork.2021.role": "Center for Victims of Torture (CVT)",
    "fieldwork.2021.description": "Served as a consultant psychotherapist and trainer in the Nineveh Plains from 2020 to 2021.",
    "fieldwork.2021.tag1": "Psychotherapy",
    "fieldwork.2021.tag2": "Training",
    "fieldwork.2020.location": "Juba & Yei, South Sudan",
    "fieldwork.2020.period": "2019–2020 · Country technical mission",
    "fieldwork.2020.title": "MHPSS Technical Advising in South Sudan",
    "fieldwork.2020.role": "Humanity & Inclusion",
    "fieldwork.2020.description": "Served as an MHPSS Technical Advisor in South Sudan from 2019 to 2020.",
    "fieldwork.2020.tag1": "MHPSS",
    "fieldwork.2020.tag2": "Technical advising",
    "fieldwork.2017.location": "Nineveh Plains, Iraq",
    "fieldwork.2017.period": "2017 · MHPSS program management",
    "fieldwork.2017.title": "Mental Health Program Management in the Nineveh Plains",
    "fieldwork.2017.role": "Action Against Hunger · MHCP Manager",
    "fieldwork.2017.description": "Worked as Mental Health and Care Practices (MHCP) Manager with Action Against Hunger in the Nineveh Plains in 2017.",
    "fieldwork.2017.tag1": "Mental health program",
    "fieldwork.2017.tag2": "MHPSS",
    "fieldwork.2015.location": "Şanlıurfa, Gaziantep & Diyarbakır, Turkey",
    "fieldwork.2015.period": "2015–2016 · Clinical psychologist / Mental health officer",
    "fieldwork.2015.title": "Clinical Psychologist and Mental Health Officer",
    "fieldwork.2015.role": "MSF Holland (2015) · Clinical Psychologist<br>MDM (2016) · Mental Health Officer",
    "fieldwork.2015.description": "Worked in mental health roles with MSF Holland in Şanlıurfa in 2015 and MDM in Diyarbakır in 2016.",
    "fieldwork.2015.tag1": "Clinical psychology",
    "fieldwork.2015.tag2": "Mental health",
    "fieldwork.cta": "Discuss Organizational Training & Collaboration →",
    "meta.homeDescription": "Dr. Ali Ihsan Yaka, Ph.D. was a visiting postdoctoral scholar at Buffalo CSPC in 2026. Lacanian-oriented psychoanalytic psychotherapy, clinical supervision, and humanitarian field experience.",
    "meta.aboutDescription": "Dr. Ali Ihsan Yaka’s education, clinical and humanitarian experience, research, publications, and professional contributions.",
    "meta.practiceDescription": "Lacanian-oriented psychoanalytic psychotherapy for adults, clinical supervision, case formulation, and organizational field consultation.",
    "meta.newsDescription": "University at Buffalo CSPC symposium, international conference presentations, IPA research grant, and academic work.",
    "meta.fieldworkDescription": "Humanitarian mental health and psychosocial support field experience in Iraq, South Sudan, and Turkey.",
    "meta.publicationsDescription": "Dr. Ali Ihsan Yaka’s peer-reviewed articles, doctoral dissertation, conference presentations, and academic work.",
    "meta.faqDescription": "Answers about Lacanian-oriented psychoanalytic psychotherapy, the session frame, confidentiality, online sessions, and clinical supervision.",
    "meta.contactDescription": "Get in touch about psychoanalytic psychotherapy, clinical supervision, or organizational training.",
    "meta.privacyDescription": "Information about the website’s contact form, browser preferences, and privacy practices.",
    "splash.aria": "Art Curtain",
    "a11y.skipToContent": "Skip to main content",
    "hero.portraitAlt": "Dr. Ali Ihsan Yaka, Ph.D. — Clinical Psychologist",
    "splash.eyebrow": "DR. ALI IHSAN YAKA, PH.D. • UNIVERSITY AT BUFFALO (SUNY)",
    "splash.quote": "“Listening to the unconscious opens (im)possibilities.”",
    "splash.supportQuote": "“Listening makes room for what has not yet found words.”",
    "splash.scholarTitle": "Psychoanalytic psychotherapy for adults • Clinical supervision",
    "splash.enterBtn": "Explore the work ↓",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.fieldwork": "Fieldwork",
    "nav.publications": "Publications",
    "nav.research": "Research",
    "psyche.homeLink": "Explore the model and research notes ↗",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.practice": "Clinical Practice",
    "nav.news": "News",
    "nav.mainMenu": "Main Menu",
    "nav.mobileMenu": "Mobile Menu",
    "nav.openMenu": "Open Menu",
    "nav.closeMenu": "Close Menu",
    "common.close": "Close",
    "lightbox.label": "Image Viewer",
    "header.sub": "Clinical Psychologist • Ph.D.",
    "header.welcome": "Welcome",
    "header.whatsNew": "What's New",
    "header.practice": "Practice",
    "header.education": "Education & Community",
    "header.thought": "Thought",
    "header.personal": "Personal",
    "header.contact": "Contact",
    "header.cta": "Consultation",
    "header.ctaLong": "Book a Consultation Request",
    "psyche.eyebrow": "PSYCHOANALYTIC THOUGHT · MODEL",
    "psyche.title": "From signifier to psychic structure",
    "psyche.intro": "A visual reading of how the concepts in the shared diagram relate to one another.",
    "psyche.loop": "signifier chain",
    "psyche.anchor": "master signifier",
    "psyche.origin": "Signifier",
    "psyche.originText": "A point of departure into speech and language",
    "psyche.message": "Paternal metaphor",
    "psyche.messageText": "Message · Mirror stage",
    "psyche.fall": "Falling out of the symbolic",
    "psyche.unrecognized": "Unrecognised in the symbolic",
    "psyche.recognized": "Recognised in the symbolic",
    "psyche.code": "Names-of-the-Father",
    "psyche.codeText": "Code · Psychic structures",
    "psyche.psychotic": "Psychotic",
    "psyche.perverse": "Perverse",
    "psyche.neurotic": "Neurotic",
    "psyche.speech": "Field of language",
    "psyche.speechText": "The subject’s speaking function",
    "psyche.speechTextA": "The subject’s",
    "psyche.speechTextB": "speaking function",
    "psyche.real": "The Real",
    "psyche.imaginary": "The Imaginary",
    "psyche.symbolic": "The Symbolic",
    "psyche.caption": "Model adapted from Dr. Ali İhsan Yaka’s work “Psychotic Structure and the Paternal Function,” redesigned with motion for the web. <a href=\"yayinlar.html#ayna-2024\">Read the 2024 article ↗</a>",
    "psyche.diagramTitle": "Diagram from the signifying chain to psychic structures",
    "psyche.diagramDesc": "The diagram follows the paternal metaphor and mirror stage into the links among the Real, Imaginary, and Symbolic, the S1 axis, psychic structures, and the subject’s speaking function.",
    "psyche.s2Label": "S2 · signifying chain",
    "psyche.s1Label": "S1",
    "psyche.ayna": "Mirror stage",
    "psyche.structureHeading": "Psychic structures",
    "psyche.captionText": "Adapted from Dr. Ali İhsan Yaka’s work “Psychotic Structure and the Paternal Function.”",
    "psyche.captionLink": "Read the 2024 article ↗",
    "psyche.researchPrompt": "For the article’s other diagrams and notes, visit",
    "psyche.motionNote": "The upper S2 loop returns from right to left; the lower loop connects from left to right. The message travels horizontally left to right as S1 coding rises vertically from bottom to top.",
    "psyche.panHint": "Swipe horizontally to follow the full diagram ↔",
    "psyche.sourceDiagram": "Open the original diagram PDF ↗",
    "psyche.loopNote": "The upper and lower loops connect the signifying chain.",
    "hero.eyebrow": "LACANIAN-ORIENTED PSYCHOTHERAPY • CLINICAL SUPERVISION",
    "hero.title": "Lacanian-oriented psychotherapy and clinical supervision.",
    "hero.quote": "“Listening to the unconscious opens (im)possibilities.”",
    "hero.audience": "Individual psychotherapy for adults; supervision for clinicians and frontline mental health workers.",
    "hero.lead": "I bring together clinical psychology, psychoanalytic work and humanitarian experience in psychotherapy with adults and supervision with clinicians.",
    "hero.aboutLink": "Explore my education, clinical background, and work →",
    "hero.body": "I completed my postdoctoral visiting scholar appointment at the University at Buffalo's Center for the Study of Psychoanalysis & Culture from January to August 2026. My doctoral research at Middle East Technical University examined mental health workers' discourse in Iraq through a Lacanian psychoanalytic framework, focusing on social trauma and clinical supervision.",
    "hero.cred1": "Middle East Technical University Ph.D.",
    "hero.cred2": "Buffalo CSPC Visiting Scholar · Jan–Aug 2026",
    "hero.cred3": "WES Verified U.S. Doctorate",
    "hero.cred4": "NYSED: first requirement met; further training remains",
    "hero.cred5": "IPA International Research Grantee",
    "hero.cred6": "APsA 2026 · 44.5 CE hours",
    "hero.btnConsultation": "Book Consultation Request",
    "hero.btnPractice": "Clinical Practice & Supervision",
    "hero.portraitTitle": "Clinical Psychologist • Buffalo CSPC, 2026",
    "hero.portraitLangs": "Languages: Turkish • English C1 Advanced • Kurdish (Kurmanji)",
    "whatsNew.eyebrow": "CURRENT SCHOLARLY INITIATIVES & EVENTS",
    "whatsNew.title": "News & Announcements",
    "whatsNew.subtitle": "Recent symposia, conference proceedings, and international psychoanalytic research.",
    "whatsNew.card1Date": "MAY 2, 2026 • BUFFALO, NEW YORK",
    "whatsNew.card1Title": "CSPC Symposium: Paranoiac Language and Genocide",
    "whatsNew.card1Excerpt": "University at Buffalo CSPC Symposium Presentation: “Conceptualizing Êzidî Femicide as Communicide: Psychoanalytic Reflections on the Paranoiac Dimension of Language in Genocide.”",
    "whatsNew.card1Link": "View Details →",
    "whatsNew.card2Date": "OCTOBER 2025 • PRAGUE, CZECHIA",
    "whatsNew.card2Title": "25th World Congress of Psychiatry e-Poster Presentation",
    "whatsNew.card2Excerpt": "Lacanian psychoanalytic fieldwork with mental health professionals supporting Êzidî genocide survivors in Iraq’s Nineveh Plains, focusing on social trauma and clinical supervision.",
    "whatsNew.card2Link": "View Details →",
    "whatsNew.card3Date": "2025 – 2026 • IPA RESEARCH GRANT & REVIEW",
    "whatsNew.card3Title": "International Psychoanalytical Association Grant",
    "whatsNew.card3Excerpt": "Awarded a 12-month research grant for “How Psychoanalytic Knowledge Can Be Used in Psychosocial Field Work,” alongside peer review service for AYNA Clinical Psychology Journal.",
    "whatsNew.card3Link": "View Details →",
    "practice.eyebrow": "CLINICAL MODALITIES & CONSULTATION",
    "practice.title": "Clinical Practice & Supervision",
    "practice.subtitle": "“Psychoanalysis is not the transmission of knowledge, but the subject's encounter with the truth of their desire.”",
    "practice.p1Num": "01 / PSYCHOTHERAPY",
    "practice.p1Title": "Individual Psychoanalytic Psychotherapy",
    "practice.p1Desc": "Lacanian-oriented psychoanalytic psychotherapy listens to a symptom not as a malfunction to eradicate, but as an expression that may hold meaning in a person's experience. Sessions follow the topics the person brings.",
    "practice.p1Tag": "Individual • Adults",
    "practice.p2Num": "02 / SUPERVISION",
    "practice.p2Title": "Clinical Supervision and Case Formulation",
    "practice.p2Desc": "Psychoanalytic case formulation for clinical psychologists and frontline mental health workers. Transference/counter-transference dynamics, differentiation of clinical structures (neurosis, psychosis, perversion).",
    "practice.p2Tag": "Individual & Group",
    "practice.p3Num": "03 / CLINICAL FRAME",
    "practice.p3Title": "Clinical Frame & Confidentiality",
    "practice.p3Desc": "The frame for clinical work is agreed together, with professional ethics and the limits of confidentiality in view. Frequency and format are discussed with each person.",
    "practice.p3Tag": "Ethics & Boundaries",
    "practice.p1f1": "Free association and close attention to speech",
    "practice.p1f2": "Exploring subjective anxiety, repetition, and symptoms",
    "practice.p1f3": "Lacanian punctuation (scansion) and session rhythm",
    "practice.p1f4": "Online or in-person sessions for adults",
    "practice.p2f1": "Working with transference and countertransference",
    "practice.p2f2": "Psychoanalytic case formulation",
    "practice.p2f3": "Considering secondary trauma in crisis settings",
    "practice.p2f4": "Individual or small-group supervision",
    "practice.p3f1": "Professional ethics and clear clinical boundaries",
    "practice.p3f2": "Online sessions where available",
    "practice.p3f3": "Fee arrangements discussed in advance",
    "practice.p3f4": "An initial conversation to clarify fit",
    "practice.featurePill": "CLINICAL FORMULATION & DESIRE IN SPEECH",
    "practice.featureTitle": "The Subjective Meaning Behind a Symptom",
    "practice.featureDesc": "Psychoanalytic work offers a space to speak and listen closely to the meaning a symptom may hold for each person.",
    "practice.featureBtn": "Request an Initial Conversation",
    "practice.slidingTitle": "Fees and Availability",
    "practice.slidingDesc": "Current fees and availability can be discussed directly before an initial meeting is arranged.",
    "practice.slidingBtn": "Ask About Fees and Availability",
    "education.m1Loc": "TURKEY · ISRAAID (2023)",
    "education.m1Title": "Protection Work After the February 6 Earthquakes",
    "education.m2Loc": "SOUTH SUDAN · HUMANITY & INCLUSION (2019–2020)",
    "education.m2Title": "MHPSS Technical Advisory",
    "education.m3Loc": "IRAQ · CENTER FOR VICTIMS OF TORTURE (2020–2021)",
    "education.m3Title": "Psychotherapy and Training in the Nineveh Plains",
    "education.m4Loc": "IRAQ · ACTION AGAINST HUNGER (2017)",
    "education.m4Title": "Mental Health Program Management",
    "education.m5Loc": "TURKEY · MSF / MDM (2015–2016)",
    "education.m5Title": "Clinical Psychologist and Mental Health Officer",
    "education.modulesTitle": "Training and Field Consultation",
    "education.modulesDesc": "Training and field consultation can be discussed upon request alongside clinical practice.",
    "education.mod1Title": "Psychological First Aid and Crisis Support",
    "education.mod1Desc": "Scope and content are shaped around the organization’s needs.",
    "education.mod2Title": "Clinical Case Supervision",
    "education.mod2Desc": "Details and availability can be discussed directly.",
    "thought.filterSuper": "Supervision & Equivalence",
    "thought.item1Link": "METU Archive →",
    "personal.dim1Title": "Baglama & Makam Music",
    "personal.dim1Desc": "Playing the short-necked baglama is a personal connection to Anatolian musical tradition.",
    "personal.dim2Title": "Birdwatching",
    "personal.dim2Desc": "Observing birds across different landscapes is a way to slow down and notice detail.",
    "personal.dim3Title": "Documentary Photography",
    "personal.dim3Desc": "A personal interest in documenting everyday moments and the places encountered on journeys.",
    "practice.p4Num": "04 / FORMAT",
    "practice.p4Title": "Online and In-Person Consultations",
    "practice.p4Desc": "Sessions are arranged online or in person as available. Scheduling takes Turkey and US Eastern time zones into account.",
    "practice.p4Tag": "Online • In Person",
    "practice.btnSchedule": "Request Consultation Appointment →",
    "education.eyebrow": "INTERNATIONAL HUMANITARIAN FIELDWORK & ACADEMIA",
    "education.title": "Fieldwork & Academia",
    "education.subtitle": "Community-based psychosocial support, supervision, and training across crises, displacement, and collective trauma.",
    "education.badge1": "Humanitarian Leadership",
    "education.historyTitle": "International Field Missions & Humanitarian Track Record",
    "education.m1Date": "2023 • KAHRAMANMARAŞ & HATAY",
    "education.m1Role": "Protection Officer • IsraAID Turkey",
    "education.m1Desc": "Worked as a protection officer in Turkey's response following the February 6 earthquakes.",
    "education.m2Date": "2019 – 2020 • JUBA & YEI, SOUTH SUDAN",
    "education.m2Role": "MHPSS Technical Advisor • Humanity & Inclusion",
    "education.m2Desc": "Served as an MHPSS technical advisor with Humanity & Inclusion in South Sudan.",
    "education.m3Date": "2020 – 2021 • NINEVEH PLAINS, IRAQ",
    "education.m3Role": "Consultant Psychotherapist / Trainer • CVT",
    "education.m3Desc": "Worked part-time as a consultant psychotherapist and trainer with the Center for Victims of Torture.",
    "education.m4Date": "2017 • NINEVEH & ERBIL, IRAQ",
    "education.m4Role": "MHCP Manager • Action Against Hunger",
    "education.m4Desc": "Managed a mental health and psychosocial support program in the Nineveh Plains.",
    "education.m5Date": "2015 – 2016 • ŞANLIURFA & DIYARBAKIR",
    "education.m5Role": "Clinical Psychologist and Mental Health Officer • MSF / MDM",
    "education.m5Desc": "Worked in mental health roles with MSF in Şanlıurfa and MDM in Diyarbakır during 2015–2016.",
    "thought.eyebrow": "SCHOLARLY & PSYCHOANALYTIC PUBLICATIONS",
    "thought.title": "Publications & Academic Thought",
    "thought.subtitle": "Explore the research, publications, and presentations in the academic archive.",
    "thought.teaserResearchTag": "01 / RESEARCH",
    "thought.teaserResearchTitle": "Doctoral research",
    "thought.teaserResearchDesc": "A Lacanian psychoanalytic study of social trauma, clinician discourse, and clinical supervision in Iraq.",
    "thought.teaserArticlesTag": "02 / ARTICLES",
    "thought.teaserArticlesTitle": "Peer-reviewed publications",
    "thought.teaserArticlesDesc": "Articles on psychoanalytic clinical work and attachment, published across several years.",
    "thought.teaserTalksTag": "03 / PRESENTATIONS",
    "thought.teaserTalksTitle": "Congresses and invited talks",
    "thought.teaserTalksDesc": "Research presentations and invited talks at academic meetings.",
    "thought.archiveLink": "View all publications and presentations →",
    "thought.filterAll": "All",
    "thought.filterPsycho": "Psychoanalysis",
    "thought.filterTrauma": "Fieldwork & Trauma",
    "thought.filterGrant": "Grants & Review",
    "thought.item1Badge": "PEER-REVIEWED • 2024",
    "thought.item1Title": "Psychotic Structure and the Paternal Function: A Lacanian Approach",
    "thought.item1Meta": "AYNA Clinical Psychology Journal • DOI: 10.31682/ayna.1282059",
    "thought.item2Badge": "DOCTORAL DISSERTATION • 2024",
    "thought.item2Title": "Clinical Supervision and Social Trauma in Lacanian Theory: The Nineveh Plains",
    "thought.item2Meta": "Middle East Technical University • Open Archive No: 108851",
    "thought.item3Badge": "PEER-REVIEWED • 2021",
    "thought.item3Title": "Obsessional Structure and the Name-of-the-Father: Clinical Case Formulation",
    "thought.item3Meta": "AYNA Clinical Psychology Journal • DOI: 10.31682/ayna.815903",
    "thought.item4Badge": "INTERNATIONAL GRANT • 2025 – 2026",
    "thought.item4Title": "International Psychoanalytical Association Research Grant",
    "thought.item4Meta": "Grant: “How Psychoanalytic Knowledge Can Be Used in Psychosocial Field Work”",
    "thought.item5Badge": "WPA CONGRESS • 2025",
    "thought.item5Title": "25th World Psychiatric Association Congress: Êzidî Genocide & Supervision",
    "thought.item5Meta": "World Psychiatric Association • Prague, Czechia • Poster 3015",
    "thought.item6Badge": "PEER-REVIEWED ARTICLE • 2010",
    "thought.item6Title": "Investigating the Experiences in Close Relationships Inventory (ECR-I) in the Context of Self-Perception, Negative Automatic Thoughts and Psychopathological Symptoms",
    "thought.item6Meta": "Turkish Psychological Articles, 13 (26), 64–76 • with Nesrin Hisli Şahin",
    "thought.viewArticle": "Read Article →",
    "thought.viewThesis": "View Dissertation →",
    "thought.viewGrantDoc": "View Grant Document",
    "thought.viewPoster": "View Poster",
    "thought.viewPdf": "View PDF",
    "personal.eyebrow": "PERSONAL INTERESTS",
    "personal.title": "Personal interests",
    "personal.baglamaTitle": "Short-necked baglama",
    "personal.baglamaDesc": "He practices the short-necked baglama in his free time.",
    "personal.birdsTitle": "Birdwatching",
    "personal.birdsDesc": "He enjoys birdwatching.",
    "personal.photoTitle": "Amateur photography",
    "personal.photoDesc": "He has an amateur interest in photography.",
    "personal.subtitle": "“The resonance of sound, the stillness of nature, and human resilience captured through the lens.”",
    "personal.card1Badge": "MUSIC & TRADITION",
    "personal.card1Title": "Short-Necked Baglama",
    "personal.card1Desc": "The ancient oral tradition of Anatolian baglama; an acoustic refuge of quiet presence, grounding mental rigor in melodic reflection.",
    "personal.card2Badge": "NATURE & BIRD IDENTIFICATION",
    "personal.card2Title": "Birdwatching & Naturalist Observation",
    "personal.card2Desc": "A disciplined contemplation practice across wetlands of Mesopotamia and migratory flyways of North America, teaching deep listening.",
    "personal.card3Badge": "VISUAL ARCHIVE",
    "personal.card3Title": "Documentary Photography",
    "personal.card3Desc": "Documenting raw moments of survival, human dignity, and architectural memory across humanitarian zones and journeys.",
    "contact.eyebrow": "CONSULTATION & INTAKE PROTOCOL",
    "contact.pageTitle": "Contact & Consultation | Dr. Ali Ihsan Yaka",
    "contact.title": "Contact & Consultation",
    "contact.subtitle": "“If you wish to initiate contact, please write an email, send a message, or call. I will respond as promptly as possible.”",
    "contact.phoneLabel": "PHONE & WHATSAPP",
    "contact.phoneNote": "Contact me by phone or WhatsApp about appointments and general inquiries.",
    "contact.phoneVal": "+90 (537) 473 84 33",
    "contact.whatsappLink": "Send a message via WhatsApp →",
    "contact.emailLabel": "EMAIL",
    "contact.emailHint": "Contact by email",
    "contact.emailNote": "Email me about clinical inquiries and academic collaborations.",
    "contact.emailAction": "Send Email →",
    "contact.officeLabel": "ACADEMIC AFFILIATION · NOT A CLINIC ADDRESS",
    "contact.officeNote": "This is an academic affiliation with the University at Buffalo, not a clinical appointment address.",
    "contact.formatLabel": "CONSULTATION FORMAT & TIME ZONES",
    "contact.formatHint": "Online and in-person options",
    "contact.onlineLabel": "Online sessions:",
    "contact.onlineZones": "Turkey (TRT / UTC+3); times are confirmed when you inquire",
    "contact.inPersonLabel": "In-person sessions:",
    "contact.inPersonAvailability": "Current availability is confirmed when you get in touch.",
    "contact.formatDesc": "Current format, location, and in-person availability are confirmed directly before an appointment.",
    "contact.formTitle": "Initial Consultation Request",
    "contact.formBadge": "WHATSAPP MESSAGE",
    "contact.formDesc": "This form prepares a WhatsApp message for you to review and send. This website does not receive or store the form details.",
    "contact.formName": "Full Name *",
    "contact.formNamePlaceholder": "",
    "contact.formEmail": "Email Address (optional)",
    "contact.formEmailPlaceholder": "",
    "contact.formPhone": "Phone Number",
    "contact.formPhonePlaceholder": "",
    "contact.formService": "Requested Service *",
    "contact.optSelect": "Select...",
    "contact.optTherapy": "Individual Psychoanalytic Psychotherapy",
    "contact.optSupervision": "Clinical Supervision and Case Formulation",
    "contact.optTraining": "Field & Organizational Training",
    "contact.optAcademic": "Academic / Speaking Invitation",
    "contact.formFormat": "Preferred Format",
    "contact.optOnline": "Online Video Session",
    "contact.optInPerson": "In person (availability confirmed directly)",
    "contact.optFlexible": "Flexible / Either",
    "contact.formMessage": "Brief Summary of Consultation Need",
    "contact.formMessagePlaceholder": "Please do not include health or therapy details.",
    "contact.formSensitiveNote": "Please do not include health or therapy details in this field.",
    "contact.formConsent": "I will review and send the message after it opens in WhatsApp.",
    "contact.formPrivacyLink": "Privacy notice",
    "contact.formSubmit": "Prepare WhatsApp Message",
    "contact.reassurance": "WhatsApp opens; the message is sent only if you tap Send. This website does not receive or store the form details.",
    "about.profileLinkedin": "LinkedIn profile",
    "about.profileOrcid": "ORCID researcher record",
    "about.profileScholar": "Google Scholar publications",
    "about.profileDergipark": "DergiPark researcher profile",
    "about.profileResearchgate": "ResearchGate researcher profile",
    "about.profileTavsiye": "TavsiyeEdiyorum profile",
    "about.gipderTalk": "2024 · GİPDER, guest talk on “Case Formulation in Clinical Psychoanalysis” — video ↗",
    "publication.bogaziciBadge": "INVITED TALK · 11TH PSYCHOLOGY DAY, BOĞAZİÇİ UNIVERSITY",
    "publication.bogaziciTitle": "From Pathological Loneliness to Subjective Sociality: The Experience of Psychoanalytic Subjectivation",
    "publication.bogaziciCitation": "<strong>Yaka, A. İ.</strong> (April 27, 2025). 11th Psychology Day, Boğaziçi University, “Loneliness”, Istanbul.",
    "publication.bogaziciDesc": "Invited talk on loneliness and a psychoanalytic perspective, including the mirror stage and subjectivity in social life from a Lacanian psychoanalytic perspective.",
    "publication.bogaziciImageAlt": "Dr. Ali Ihsan Yaka presenting on psychoanalytic perspectives on loneliness at Boğaziçi University’s 11th Psychology Day",
    "publication.bogaziciLink": "View event details →",
    "publication.kurdiBadge": "KURMANJI TRANSLATION · PSYCHOLOGY KURDÎ",
    "publication.kurdiTitle": "From Psychopathological Loneliness Toward Subjective Sociality: The Experience of Psychoanalytic Subjectivation",
    "publication.kurdiCitation": "<strong>Yaka, A. İ.</strong> (2026). “<em>Ji tenêtiya psîkopatolojîk berev civakîbûna subjektîf: Tecribeya bikerbûna psîkanalîtîk</em>.” <em>Psychology Kurdî</em>, 9(21), 61–74. Translated into Kurmanji by Aydin Rengîn.",
    "publication.kurdiDesc": "The Kurmanji translation of an article examining loneliness, subjective sociality, and social trauma through a psychoanalytic framework.",
    "publication.kurdiPdf": "View the journal issue (PDF) ↗",
    "publication.kurdiAnnouncement": "Issue announcement ↗",
    "publication.details": "Details and journal PDF ↗",
    "practice.methodEyebrow": "THE CLINICAL FRAME",
    "practice.methodTitle": "Speech, symptom, and the frame of the work",
    "practice.methodDesc": "Sessions begin by listening closely to what brings a person to therapy and how they describe it. The personal meaning of a symptom, confidentiality, and the working frame are discussed together.",
    "practice.methodStep1": "Listening",
    "practice.methodStep1Desc": "Make room for the reason for seeking therapy and the person’s own words.",
    "practice.methodStep2": "Formulation",
    "practice.methodStep2Desc": "Talk through recurring difficulties and the possible subjective meaning of symptoms.",
    "practice.methodStep3": "Working frame",
    "practice.methodStep3Desc": "Agree together on session frequency, format, and limits of confidentiality.",
    "practice.inclusiveEyebrow": "APPROACH TO CARE",
    "practice.inclusiveTitle": "An inclusive, culturally responsive space",
    "practice.inclusiveDesc": "The work attends to each person’s life story, language, and cultural context, and takes an LGBTQI+-affirming and inclusive approach. The frame and needs of each consultation are discussed collaboratively.",
    "practice.focusAreas": "Topics that may be explored in work with adults include anxiety and panic, fears and phobias, obsessions, trauma, grief and loss, depressive symptoms, stress, and relationship or family concerns.",
    "practice.futurePublicationsLink": "View existing publications",
    "practice.futureNewsLink": "Follow announcements",
    "practice.futureMediaDesc": "A regular blog and video series remain future plans. A link to an existing YouTube video is available in the About section.",
    "practice.futureMediaTitle": "Written and video content",
    "practice.futureMediaTag": "PUBLICATION IDEA",
    "practice.futureCaseDesc": "A modular training concept; details will be announced if the content and schedule are confirmed.",
    "practice.futureCaseTitle": "Psychoanalytic case formulation",
    "practice.futureCaseTag": "PLANNED MODULE",
    "practice.futurePfaDesc": "Training content that could be tailored to organizational needs; no dates or registration details have been published.",
    "practice.futurePfaTitle": "Psychological First Aid",
    "practice.futurePfaTag": "PLANNED TRAINING",
    "practice.futureIntro": "The following topics appear in the source notes as future ideas; they are not currently offered as open trainings or publication series.",
    "practice.futureTitle": "Training and publications under consideration",
    "practice.futureEyebrow": "FUTURE CONTENT",
    "practice.pageEyebrow": "CLINICAL PRACTICE & SERVICES",
    "practice.pageTitle": "Clinical Practice, Psychotherapy & Supervision",
    "practice.pageLead": "“Psychoanalysis is not the transmission of knowledge; it is the subject’s encounter with the truth of their desire.” Clinical work is guided by an ethical frame and discussed in relation to each person’s needs.",
    "practice.profileBadge": "CLINICAL PSYCHOLOGIST • CSPC, 2026",
    "practice.profileTitle": "Listening Analytically to the Meaning of Symptoms",
    "practice.profileDesc": "A Lacanian psychoanalytic orientation does not treat a symptom as a fault to silence. It listens to it as a possible expression of unconscious desire and conflicts that have not yet found words, sometimes carried in bodily experience or relationships. Sessions make space for each person to explore their experience rather than follow standard prescriptions.",
    "practice.profileCredentials": "WES evaluation of U.S. doctoral equivalency • NYSED: first education requirement met; further psychoanalytic training remains • APsA 2026 continuing education credit",
    "practice.card1Number": "01 / PSYCHOANALYSIS & THERAPY",
    "practice.card1Title": "Individual Psychoanalytic Psychotherapy",
    "practice.card1Desc": "Individual psychoanalytic psychotherapy for adults. Guided by free association, the work explores unconscious dynamics related to anxiety, grief, relationship impasses, obsessions, and conflicts around identity.",
    "practice.card1Item1": "• Free association and close attention to speech",
    "practice.card1Item2": "• Lacanian punctuation (scansion) and session rhythm",
    "practice.card1Item3": "• Exploring recurring patterns and impasses of desire",
    "practice.card1Item4": "• Sessions available in Turkish, English (C1), and Kurmanji",
    "practice.card1Format": "<strong>Format:</strong> Session format and current in-person availability are confirmed before an appointment.",
    "practice.card1Cta": "Request an Initial Consultation →",
    "practice.card2Number": "02 / SUPERVISION",
    "practice.card2Title": "Clinical Supervision & Case Formulation",
    "practice.card2Desc": "Case supervision for clinical psychologists, psychotherapists, psychiatrists, and counselors. The work may focus on the structure of a client’s discourse, transference and countertransference impasses, and the clinician’s analytic stance.",
    "practice.card2Item1": "• Lacanian structural formulation (neurosis, psychosis, perversion)",
    "practice.card2Item2": "• Working with transference and the analyst’s desire",
    "practice.card2Item3": "• Considering secondary trauma in severe trauma and crisis cases",
    "practice.card2Item4": "• Individual or small, closed groups of 2–4 participants",
    "practice.card2Scope": "<strong>Context:</strong> Informed by experience at METU AYNA Clinical Psychology Support Unit.",
    "practice.card2Cta": "Inquire About Supervision →",
    "practice.card3Number": "03 / MHPSS & TRAINING",
    "practice.card3Title": "Field & Organizational Trauma Consultation",
    "practice.card3Desc": "Organizational mental health and psychosocial support (MHPSS) and trauma consultation for humanitarian organizations, NGOs, crisis teams, and staff working in disaster settings.",
    "practice.card3Item1": "• MHPSS programming and organizational capacity development",
    "practice.card3Item2": "• Protocols to address compassion fatigue and prevent burnout",
    "practice.card3Item3": "• Field programming aligned with IASC Guidelines",
    "practice.card3Item4": "• Experience in Iraq, South Sudan, and the February 6 earthquake response",
    "practice.card3Scope": "<strong>Organizational:</strong> Workshops tailored to an organization’s needs.",
    "practice.card3Cta": "Request Organizational Consultation →",
    "practice.frameEyebrow": "FRAME & CONFIDENTIALITY",
    "practice.frameTitle": "Clinical Frame & Professional Confidentiality",
    "practice.frameDesc": "The frame for sessions, confidentiality, and its limits are discussed together before clinical work begins.",
    "practice.frameItem1": "✓ <strong>Frame:</strong> Session frequency and format are planned together.",
    "practice.frameItem2": "✓ <strong>Confidentiality:</strong> Its terms and limits are clarified before the first session.",
    "practice.frameItem3": "✓ <strong>Online sessions:</strong> The platform and technical arrangements are confirmed before an appointment.",
    "practice.feesEyebrow": "SESSION FRAME",
    "practice.feesTitle": "Fees & Availability",
    "practice.feesDesc": "Fees and current availability are clarified directly before an initial consultation is arranged.",
    "practice.feesCta": "Ask About Fees & Availability →",
    "practice.faqEyebrow": "FREQUENTLY ASKED QUESTIONS",
    "practice.faqTitle": "Questions About the Process",
    "practice.faq1Title": "What happens in an initial consultation?",
    "practice.faq1Desc": "The initial consultation is a mutual introductory session to discuss what brings you to therapy, your expectations, and whether psychoanalytic work may be a good fit. Session frequency, language, and the working frame are also discussed.",
    "practice.faq2Title": "Are online sessions as effective as in-person sessions?",
    "practice.faq2Desc": "Whether online sessions are suitable for you can be discussed during the initial consultation. The platform, time zone, and current availability are confirmed before an appointment.",
    "practice.faq3Title": "Which languages are sessions available in?",
    "practice.faq3Desc": "Sessions may be conducted in Turkish, English, or Kurmanji, in the language in which the client can express themselves most comfortably and authentically.",
    "practice.faqCta": "Request an Initial Consultation",
    "about.eventGalleryPhoto1": "From the ‘Loneliness and Psychoanalytic Perspective’ presentation at Boğaziçi University’s 11th Psychology Day.",
    "about.eventGalleryPhoto2": "During the talk ‘From Pathological Loneliness to Subjective Sociality’ at Boğaziçi University.",
    "about.eventGalleryCaption1": "Loneliness and a psychoanalytic perspective",
    "about.eventGalleryCaption2": "11th Psychology Day · April 27, 2025",
    "about.bogaziciKicker": "SELECTED PRESENTATION · APRIL 27, 2025",
    "about.bogaziciTitle": "Boğaziçi University 11th Psychology Day",
    "about.bogaziciDesc": "An invited talk titled “From Pathological Loneliness to Subjective Sociality: The Experience of Psychoanalytic Subjectivation.” The photos show selected moments from the talk’s discussion of the mirror stage and psychoanalytic perspectives on loneliness.",
    "about.bogaziciLink": "View the presentation in publications →",
    "about.certificate2004Title": "9th National Psychology Students Congress",
    "about.certificate2004Desc": "June 30–July 4, 2004 · Presentation participation.",
    "about.certificate2004Link": "Open participation certificate →",
    "about.certificate2004Alt": "Presentation participation certificate for Ali Ihsan Yaka at the 9th National Psychology Students Congress",
    "about.talkCspc2026": "2026 · Presentation at the University at Buffalo CSPC Annual Symposium (May 2).",
    "about.talkWpa2025": "2025 · World Psychiatric Association Congress, e-poster #3015 (Prague).",
    "about.talkPsyCongress2004": "2004 · Presentation at the 9th National Psychology Students Congress.",
    "about.talkCertificateLink": "View participation certificate →",
    "about.eventMaterialsEyebrow": "SELECTED PRESENTATIONS",
    "about.eventMaterialsTitle": "International academic meetings",
    "about.eventMaterialsIntro": "Program and e-poster visuals from presentations at the Buffalo CSPC Annual Symposium and the World Congress of Psychiatry.",
    "about.cspcPosterAlt": "Poster for the University at Buffalo CSPC 2026 Spring Symposium",
    "about.wpaPosterAlt": "E-poster title slide for the 25th World Congress of Psychiatry",
    "about.cspcPosterCaption": "CSPC Annual Symposium · Buffalo · 2026",
    "about.wpaPosterCaption": "25th World Congress of Psychiatry · Prague · 2025",
    "about.profileLinksLabel": "Verifiable academic and professional profiles",
    "footer.brandSub": "Clinical Psychologist • Psychoanalyst",
    "footer.ethos": "Lacanian-oriented psychotherapy and supervision, with academic work on social trauma.",
    "footer.langStatus": "Languages: Turkish • English C1 Advanced • Kurdish (Kurmanji)",
    "footer.navHeading": "Site Navigation",
    "footer.affilHeading": "Institutional Affiliations & Accreditation",
    "footer.affilUB": "Buffalo CSPC Visiting Scholar · 2026",
    "footer.affilMETU": "Middle East Technical University Ph.D. in Clinical Psychology",
    "footer.affilIPA": "International Psychoanalytical Association Research Grantee",
    "footer.affilNYSED": "NYSED: first education requirement met; further psychoanalytic training remains",
    "contact.phoneHint": "Phone & WhatsApp",
    "practice.featureImageAlt": "Dr. Ali Ihsan Yaka — clinical psychoanalytic practice and supervision",
    "footer.affilAPSA": "APsA 2026 attendance: 44.5 contact hours",
    "footer.contactHeading": "Direct Contact",
    "footer.phoneLabel": "TURKEY CLINICAL LINE",
    "footer.whatsappLabel": "WHATSAPP DIRECT",
    "footer.whatsappAction": "Start Direct Message →",
    "footer.emailLabel": "EMAIL",
    "footer.locationLabel": "SESSION LOCATIONS",
    "footer.locationDesc": "Confirm the session format and current location availability directly.",
    "footer.crisisTitle": "Crisis Notice:",
    "footer.crisisText": "This website is not an emergency psychiatric crisis intervention service. In case of crisis, please contact your nearest emergency room or emergency services immediately.",
    "footer.copy": "© 2026 Dr. Ali Ihsan Yaka, Ph.D. All rights reserved.",
    "footer.privacy": "Website Privacy Notice",
    "footer.splashReplay": "Back to top"
  }
};

  // English labels that predate the keyed translation system. Keep this
  // narrowly scoped to the bilingual homepage and restore them on TR switch.
  const homepageLooseText = {
    "Doktor Klinik Psikolog • Ph.D.": "Clinical Psychologist • Ph.D.",
    "ODTÜ DOKTORA TEZİ • 2024": "METU DOCTORAL DISSERTATION • 2024",
    "HAKEMLİ DERGİ MAKALESİ • 2024": "PEER-REVIEWED ARTICLE • 2024",
    "HAKEMLİ DERGİ MAKALESİ • 2021": "PEER-REVIEWED ARTICLE • 2021",
    "ULUSLARARASI HİBE • 2025 – 2026": "INTERNATIONAL RESEARCH GRANT • 2025–2026",
    "WES DOĞRULANMIŞ DOKTORA DENKLİĞİ & NYSED": "WES-VERIFIED DOCTORAL EQUIVALENCY & NYSED",
    "WPA 2025 • PRAG DÜNYA PSİKİYATRİ KONGRESİ": "WPA 2025 • WORLD CONGRESS OF PSYCHIATRY, PRAGUE",
    "ANKARA ÜNİVERSİTESİ YÜKSEK LİSANS TEZİ & TÜRK PSİKOLOJİ YAZILARI": "ANKARA UNIVERSITY MASTER’S THESIS & TURKISH PSYCHOLOGICAL ARTICLES",
    "International Psychoanalytical Association (IPA) 12 Aylık Araştırma Hibesi": "International Psychoanalytical Association (IPA) 12-Month Research Grant",
    "Proje: “How Psychoanalytic Knowledge Can Be Used in Psychosocial Field Work: Psychoanalytic Approach to Social Trauma” • 12 Ay": "Project: “How Psychoanalytic Knowledge Can Be Used in Psychosocial Field Work: Psychoanalytic Approach to Social Trauma” • 12 months",
    "WES Credly Verified • NYSED: psychoanalyst licensure education requirement 1 met; further psychoanalytic study is required": "WES-verified doctoral equivalency • NYSED: psychoanalyst licensure education requirement 1 met; further psychoanalytic study is required",
    "25th World Congress of Psychiatry (WPA) • e-Poster #3015 • Prag, Ekim 2025": "25th World Congress of Psychiatry (WPA) • e-Poster #3015 • Prague, October 2025",
    "DOI / İncele →": "View DOI →",
    "Detayları İncele →": "View Details →",
    "Credly Rozeti →": "View Credly Badge →",
    "Aktif Koordinasyon Hattı": "Phone and WhatsApp",
    "Hafta içi ve Cumartesi seans koordinasyonu ve bilgi almak için doğrudan ulaşabilirsiniz.": "Contact me by phone or WhatsApp about appointments and general inquiries.",
    "Doğrudan Yazışma & İletişim": "Contact by email",
    "Akademik iş birlikleri, kurumsal eğitim ve klinik başvurularınız için doğrudan yazabilirsiniz.": "Email me about clinical inquiries, training, and academic collaborations.",
    "E-posta Gönder →": "Send Email →",
    "Global Telehealth & Yüz Yüze": "Online and in-person options",
    "Online Görüntülü Seans:": "Online sessions:",
    "Türkiye (TRT / UTC+3) & ABD Doğu Saati (ET)": "Turkey (TRT / UTC+3) & US Eastern Time (ET)",
    "Yüz Yüze Randevu:": "In-person sessions:",
    "Buffalo, New York (Ofis) & Randevu ile Ankara": "Buffalo, NY (by appointment)",
    "Yüz yüze (uygunluk teyit edilir)": "In person (availability confirmed directly)",
    "GİZLİ & DOĞRUDAN BAŞVURU": "EMAIL DRAFT",
    "Ana Sayfa": "Home",
    "Hakkımda": "About",
    "Hizmetler": "Clinical Practice",
    "Saha Çalışmaları": "Fieldwork",
    "Yayınlar": "Publications",
    "Sıkça Sorulan Sorular (SSS)": "Frequently Asked Questions",
    "İletişim & Randevu": "Contact",
    "Web Sitesi Gizlilik Bilgilendirmesi": "Website Privacy Notice",
    "ODTÜ (METU) Klinik Psikoloji Ph.D.": "Ph.D. in Clinical Psychology, METU",
    "IPA 2025 Araştırma Hibesi (12 Ay)": "IPA 2025 Research Grant (12 months)",
    "APsA 2026 katılımı: 44,5 CE saati": "APsA 2026 attendance: 44.5 contact hours",
    "NYSED: İlk eğitim koşulu karşılandı; ek psikanalitik eğitim sürüyor": "NYSED: first education requirement met; further psychoanalytic training remains",
    "Çalışma Dilleri: Türkçe • English (C1/IELTS 7.0) • Kurmancî": "Languages: Turkish • English (C1/IELTS 7.0) • Kurmanji",
    "İletişim & Klinik Hat": "Contact & Clinical Line",
    "TÜRKİYE DANIŞMA HATTI": "TURKEY CONSULTATION LINE",
    "Online görüşme seçenekleri; yüz yüze uygunluk iletişimde teyit edilir.": "Online sessions are available; confirm in-person availability when you get in touch.",
    "Sanat Perdesi / Monografik Açılış": "Replay the opening",
    "Klinik randevular acil kriz müdahalesi amaçlı değildir; kriz durumunda 112 Acil Çağrı Merkezini arayınız.": "Clinical appointments are not an emergency crisis service. In an emergency in Turkey, call 112.",
    "HAKKIMDA · ÖZGEÇMİŞ & BİYOGRAFİ": "ABOUT · BIOGRAPHY & CV",
    "Klinik psikoloji ve psikanalitik çalışma; klinik uygulama, akademik araştırma ve insani yardım deneyiminin kesişiminde.": "Clinical psychology and psychoanalytic work across clinical practice, academic research, and humanitarian experience.",
    "Psikoloji eğitimimi Dicle Üniversitesi'nde tamamladıktan sonra Ankara Üniversitesi'nde klinik psikoloji yüksek lisansı, Orta Doğu Teknik Üniversitesi'nde klinik psikoloji doktorası yaptım. Çalışmalarım psikanalitik klinik pratik, toplumsal travma ve ruh sağlığı çalışanlarının saha deneyimlerine odaklanıyor.": "After earning my psychology degree from Dicle University, I completed a master’s degree in clinical psychology at Ankara University and a Ph.D. in clinical psychology at Middle East Technical University. My work focuses on psychoanalytic clinical practice, social trauma, and the field experiences of mental health workers.",
    "2026'nın Ocak–Ağustos döneminde University at Buffalo'daki": "From January to August 2026, I was a visiting postdoctoral researcher at the University at Buffalo’s",
    "bünyesinde misafir doktora sonrası araştırmacı olarak bulundum. Doktora araştırmamı, Irak'ta toplumsal travma koşullarında çalışan ruh sağlığı çalışanlarının söylemini ve klinik süpervizyon deneyimini Lacanyen psikanalitik bir yaklaşımla ele alarak tamamladım.": "as a visiting postdoctoral researcher. My doctoral research examined the discourse and clinical supervision experiences of mental health professionals working amid social trauma in Iraq through a Lacanian psychoanalytic lens.",
    "Araştırma odağı": "Research focus",
    "Toplumsal travma · Lacanyen psikanaliz · Klinik süpervizyon · İnsani yardım bağlamlarında ruh sağlığı": "Social trauma · Lacanian psychoanalysis · Clinical supervision · Mental health in humanitarian settings",
    "01 / EĞİTİM": "01 / EDUCATION",
    "Akademik geçmiş": "Academic background",
    "Misafir doktora sonrası araştırmacı · University at Buffalo, CSPC": "Visiting postdoctoral researcher · University at Buffalo, CSPC",
    "Ocak–Ağustos 2026. Psikanaliz ve kültür çalışmaları merkezindeki araştırma dönemi tamamlandı.": "January–August 2026. Completed a research appointment at the Center for the Study of Psychoanalysis and Culture.",
    "Doktora, Klinik Psikoloji · Orta Doğu Teknik Üniversitesi": "Ph.D. in Clinical Psychology · Middle East Technical University",
    "Tezi ODTÜ Açık Arşiv'de görüntüle": "View the dissertation in the METU Open Archive",
    "Yüksek Lisans, Klinik Psikoloji · Ankara Üniversitesi": "M.A. in Clinical Psychology · Ankara University",
    "Tez çalışması bağlanma, erken dönem uyumsuz şemalar, öz-düzenleme ve psikolojik belirtiler arasındaki ilişkileri inceledi.": "The thesis examined relationships among attachment, early maladaptive schemas, self-regulation, and psychological symptoms.",
    "Lisans, Psikoloji · Dicle Üniversitesi": "B.A. in Psychology · Dicle University",
    "ABD eğitim değerlendirmesi:": "U.S. education evaluation:",
    "WES doktora derecesini ABD doktora eşdeğerliği olarak değerlendirdi. NYSED yazısı, psikanalist lisansı başvurusunda eğitim koşullarından ilkini karşılanmış olarak değerlendiriyor; ek psikanalitik eğitim koşulu devam ediyor. Bu bilgi bir lisans sahibi olunduğu anlamına gelmez.": "WES evaluated the doctoral degree as equivalent to a U.S. doctorate. NYSED has found the first education requirement for psychoanalyst licensure met; additional psychoanalytic training is still required. This does not mean a license has been issued.",
    "02 / MESLEKİ DENEYİM": "02 / PROFESSIONAL EXPERIENCE",
    "Klinik ve saha çalışmaları": "Clinical and fieldwork experience",
    "Klinik hizmet ve ruh sağlığı programlarında farklı ekiplerle, kurumlarla ve insani yardım bağlamlarında edinilmiş deneyim.": "Experience across clinical services and mental health programs with multidisciplinary teams, institutions, and humanitarian organizations.",
    "Koruma Görevlisi · IsraAID": "Protection Officer · IsraAID",
    "Türkiye'deki 6 Şubat depremlerinin ardından yürütülen koruma ve psikososyal destek çalışmaları.": "Protection and psychosocial support work following the February 6 earthquakes in Turkey.",
    "ŞUBAT–NİSAN 2023": "FEBRUARY–APRIL 2023",
    "Gönüllü Klinik Psikolog · Deprem müdahalesi": "Volunteer Clinical Psychologist · Earthquake response",
    "Yerel topluluklar ve sivil toplumla koordinasyon içinde gönüllü klinik destek.": "Volunteer clinical support coordinated with local communities and civil society organizations.",
    "Hatay ve Kahramanmaraş": "Hatay and Kahramanmaraş",
    "Danışman Psikoterapist / Eğitmen · CVT": "Consultant Psychotherapist / Trainer · CVT",
    "Center for Victims of Torture bünyesinde yarı zamanlı danışmanlık ve eğitim çalışmaları.": "Part-time psychotherapy consultation and training with the Center for Victims of Torture.",
    "Ninewa Ovası, Irak": "Nineveh Plains, Iraq",
    "MHPSS Teknik Danışmanı · Humanity & Inclusion": "MHPSS Technical Advisor · Humanity & Inclusion",
    "Ruh sağlığı ve psikososyal destek programlarına teknik danışmanlık.": "Technical advice for mental health and psychosocial support programs.",
    "Güney Sudan": "South Sudan",
    "MHCP Program Yöneticisi · Action Against Hunger": "MHCP Manager · Action Against Hunger",
    "Ruh sağlığı ve toplum temelli psikososyal destek programı.": "Mental health and community-based psychosocial support programming.",
    "MHPSS Saha Teknik Danışmanı · Handicap International": "MHPSS Field Technical Advisor · Handicap International",
    "Gaziantep, Türkiye": "Gaziantep, Turkey",
    "Ruh Sağlığı Görevlisi · Médecins du Monde": "Mental Health Officer · Médecins du Monde",
    "Kamp ortamında ruh sağlığı çalışmaları.": "Mental health work in a camp setting.",
    "Diyarbakır, Türkiye": "Diyarbakır, Turkey",
    "Klinik psikolog olarak görev.": "Worked as a clinical psychologist.",
    "Şanlıurfa, Türkiye": "Şanlıurfa, Turkey",
    "Klinik Psikolog · Ahi Evran Üniversitesi Eğitim ve Araştırma Hastanesi": "Clinical Psychologist · Ahi Evran University Training and Research Hospital",
    "Psikiyatri servisinde klinik çalışma.": "Clinical work in the psychiatry department.",
    "Kırşehir, Türkiye": "Kırşehir, Turkey",
    "Psikolog · Farklı klinik ve danışmanlık kurumları": "Psychologist · Clinical and counseling organizations",
    "Ak Psikoteknik Merkezi (Ankara), Engelli Çocuklar Tıp Merkezi (Tekirdağ) ve İşitme Engelli Çocuklar Tıp Merkezi (Kocaeli).": "Ak Psychotechnical Center (Ankara), Disabled Children’s Medical Center (Tekirdağ), and Hearing Impaired Children’s Medical Center (Kocaeli).",
    "Saha çalışmalarının ayrıntılarına git": "Explore fieldwork details",
    "03 / KLİNİK EĞİTİM": "03 / CLINICAL TRAINING",
    "Klinik uygulama ve süpervizyon": "Clinical practice and supervision",
    "Klinik Süpervizör · ODTÜ–AYNA Klinik Psikoloji Birimi": "Clinical Supervisor · METU–AYNA Clinical Psychology Unit",
    "Ankara'daki klinik psikoloji biriminde süpervizyon çalışması.": "Supervision work at the clinical psychology unit in Ankara.",
    "Çocuk ve yetişkin klinik uygulaması · ODTÜ–AYNA": "Clinical practice with children and adults · METU–AYNA",
    "Çocuk ve yetişkin alanlarında klinik uygulama dönemi.": "Clinical placement in child and adult practice.",
    "Çocuk klinik uygulaması · Ankara Üniversitesi Tıp Fakültesi": "Child clinical placement · Ankara University Faculty of Medicine",
    "Çocuk Psikiyatrisi Anabilim Dalı ve Otistik Çocuklar Merkezi.": "Department of Child Psychiatry and Autism Center.",
    "Yetişkin klinik uygulaması · Ankara Üniversitesi Tıp Fakültesi": "Adult clinical placement · Ankara University Faculty of Medicine",
    "Yetişkin Psikiyatrisi Anabilim Dalı.": "Department of Adult Psychiatry.",
    "SEÇİLMİŞ SUNUM · 27 NİSAN 2025": "SELECTED PRESENTATION · APRIL 27, 2025",
    "Boğaziçi Üniversitesi XI. Psikoloji Günü": "Boğaziçi University 11th Psychology Day",
    "“Psikopatolojik Yalnızlıktan Subjektif Toplumsallığa: Psikanalitik Öznelleşme Deneyimi” başlıklı davetli konuşma.": "Invited talk: “From Psychopathological Loneliness to Subjective Sociality: The Experience of Psychoanalytic Subjectivation.”",
    "Etkinlik ve diğer güncel çalışmalar": "Event details and other recent work",
    "04 / ARAŞTIRMA & YAYIN": "04 / RESEARCH & PUBLICATIONS",
    "Akademik çalışmalar": "Academic work",
    "Araştırma hibesi": "Research grant",
    "“Psikanalitik Bilginin Psikososyal Saha Çalışmalarında Kullanımı: Toplumsal Travmaya Psikanalitik Yaklaşım” başlıklı 12 aylık proje.": "A 12-month project titled “Using Psychoanalytic Knowledge in Psychosocial Fieldwork: A Psychoanalytic Approach to Social Trauma.”",
    "AYNA Klinik Psikoloji Dergisi için hakemlik.": "Peer reviewer for AYNA Clinical Psychology Journal.",
    "SEÇİLMİŞ HAKEMLİ YAYINLAR": "SELECTED PEER-REVIEWED PUBLICATIONS",
    "· Nesrin Hisli Şahin ile ortak çalışma.": "· Co-authored with Nesrin Hisli Şahin.",
    "Türk Psikoloji Yazıları, 13": "Turkish Psychological Articles, 13",
    "Yayınların ve bildirilerin tamamı": "All publications and presentations",
    "Seçilmiş sunum ve konuşmalar": "Selected presentations and talks",
    "· University at Buffalo CSPC Yıllık Sempozyumu, sunum (2 Mayıs).": "· Presentation at the University at Buffalo CSPC Annual Symposium (May 2).",
    "· GİPDER, “Klinik Psikanalizde Vaka Kavramsallaştırması”, konuk konuşmacı.": "· Guest talk for GİPDER: “Case Formulation in Clinical Psychoanalysis.”",
    "· 7. Uluslararası Bilişsel Psikoterapi Kongresi, ortak sunum.": "· Co-presentation at the 7th International Congress of Cognitive Psychotherapy.",
    "· 9. Ulusal Psikoloji Öğrencileri Kongresi, sunum.": "· Presentation at the 9th National Congress of Psychology Students.",
    "05 / MESLEKİ KATKI": "05 / PROFESSIONAL CONTRIBUTIONS",
    "Mesleki hizmet, diller ve sürekli eğitim": "Professional service, languages, and continuing education",
    "Denetleme Kurulu Üyesi · Freud-Lacan Psikanaliz Derneği": "Audit Board Member · Freud–Lacan Psychoanalysis Association",
    "Yönetim Kurulu Üyesi · İnsan Hakları Derneği": "Board Member · Human Rights Association",
    "Ankara; özgeçmişte gönüllü üyeliğin sürdüğü belirtiliyor.": "Ankara; the CV notes that volunteer membership continues.",
    "Çalışma dilleri": "Working languages",
    "İngilizce": "English",
    "Katılım belgesinde 44,5 saatlik eğitim kredisi kayıtlı.": "The attendance certificate records 44.5 continuing education hours.",
    "Risk Değerlendirme Becerilerinin Geliştirilmesi": "Developing Risk Assessment Skills",
    "16 Aralık 2024'te tamamlanan eğitim.": "Training completed on December 16, 2024.",
    "Çocuk Gelişimi ve Psikososyal Destek İleri Eğitimi": "Advanced Training in Child Development and Psychosocial Support",
    "Klinik Hizmetleri İncele →": "Explore clinical services →",
    "Ön Görüşme Başvurusu →": "Request an initial consultation →",
    "2 MAYIS 2026 • UNIVERSITY AT BUFFALO (SUNY), NEW YORK": "MAY 2, 2026 • UNIVERSITY AT BUFFALO (SUNY), NEW YORK",
    "OCAK 2026 • SAN FRANCISCO, CA • APsA NATIONAL MEETING": "JANUARY 2026 • SAN FRANCISCO, CA • APsA NATIONAL MEETING",
    "Yayın ve bildiri kayıtlarını incele →": "View publication and presentation records →",
    "Ön Görüşme Randevusu Al →": "Request an Initial Consultation →",
    "Dr. Ali İhsan Yaka'nın portresi": "Portrait of Dr. Ali Ihsan Yaka",
    "American Psychoanalytic Association 2026 katılım belgesinin önizlemesi": "Preview of the 2026 American Psychoanalytic Association attendance certificate",
    "Ali İhsan Yaka'nın Boğaziçi Üniversitesi XI. Psikoloji Günü'ndeki sunumundan": "A photograph of Ali Ihsan Yaka presenting at Boğaziçi University’s 11th Psychology Day",
    "Dr. Ali İhsan Yaka Klinik Görünüm": "Clinical portrait of Dr. Ali Ihsan Yaka",
    "University at Buffalo CSPC Spring 2026 Symposium Afişi": "Poster for the University at Buffalo CSPC Spring 2026 Symposium",
    "25. Dünya Psikiyatri Kongresi (WPA) e-Poster Belgesi": "E-poster for the 25th World Congress of Psychiatry (WPA)",
    "Dr. Ali İhsan Yaka Boğaziçi Üniversitesi XI. Psikoloji Günü'nde Yalnızlık ve Psikanalitik Perspektif başlıklı konuşmasını yaparken": "Dr. Ali Ihsan Yaka speaking on loneliness and the psychoanalytic perspective at Boğaziçi University’s 11th Psychology Day",
    "AYNA Klinik Psikoloji Dergisi Hakemlik Belgesi": "Peer-review certificate for AYNA Clinical Psychology Journal",
    "APsA 2026 katılım belgesi; Ali Yaka adına 44,5 contact hour": "APsA 2026 attendance certificate for Ali Yaka, recording 44.5 contact hours",
    "Psikolog · Ak Psikoteknik Merkezi": "Psychologist · Ak Psycho-technical Center",
    "Psikoteknik değerlendirme ve danışmanlık çalışmaları.": "Psychometric assessment and counseling.",
    "Ankara, Türkiye": "Ankara, Turkey",
    "Psikolog · Engelli Çocuklar Tıp Merkezi": "Psychologist · Medical Center for Children with Disabilities",
    "Çocuklarla klinik psikoloji çalışmaları.": "Clinical psychology work with children.",
    "Tekirdağ, Türkiye": "Tekirdağ, Turkey",
    "Psikolog · İşitme Engelli Çocuklar Tıp Merkezi": "Psychologist · Medical Center for Hearing Impaired Children",
    "Psikolog · İşitme Engelli Çocuklar Tıp Merkezi": "Psychologist · Medical Center for Hearing Impaired Children",
    "Kocaeli, Türkiye": "Kocaeli, Turkey",
    "Özgeçmiş PDF’ini görüntüle ↗": "View CV (PDF) ↗",
    "Katılım belgesini görüntüle ↗": "View attendance certificate ↗",
    "kişisel katılım saati": "personal attendance hours",
    "Katılım belgesinden önizleme": "Attendance certificate preview",
    "Sempozyum programı PDF ↗": "Symposium program (PDF) ↗",
    "Belgeyi PDF olarak görüntüle ↗": "View certificate PDF ↗",
    "Sertifika PDF ↗": "Certificate PDF ↗",
    "Katılım belgesi PDF ↗": "Attendance certificate PDF ↗",
    "Kongre katılım belgeleri PDF ↗": "Conference attendance certificates PDF ↗",
    "Çocuk Gelişimi ve Psikososyal Destek İleri Eğitimi": "Advanced Training in Child Development and Psychosocial Support",
    "Erbil'de, Temmuz 2017.": "Erbil, July 2017.",
    "2025 · INTELLECT": "2025 · INTELLECT",
    "Trust & Safety Advanced Practitioner": "Trust & Safety Advanced Practitioner",
    "25 Mart 2025'te tamamlanan mesleki sertifika.": "Professional certificate completed on March 25, 2025.",
    "2022 · IPU BERLIN": "2022 · IPU BERLIN",
    "“The Future Now?!” Yaz Okulu": "“The Future Now?!” Summer School",
    "Uluslararası Psikanalitik Üniversite Berlin programı; toplam 60 akademik saat.": "International Psychoanalytic University Berlin program; 60 academic hours in total.",
    "2011 · ICCP": "2011 · ICCP",
    "7. Uluslararası Bilişsel Psikoterapi Kongresi": "7th International Congress of Cognitive Psychotherapy",
    "“Behavioral Treatment of Anxiety Disorders” atölyesine katılım; İstanbul, 2–5 Haziran 2011.": "Attendance at the “Behavioral Treatment of Anxiety Disorders” workshop; Istanbul, June 2–5, 2011.",
    "2009 · İSTANBUL": "2009 · ISTANBUL",
    "VI. Uluslararası Psikolojik Travma Sempozyumu": "VI International Psychological Trauma Symposium",
    "“Traumas in Daily Life” toplantısına katılım.": "Attendance at “Traumas in Daily Life.”",
    "Psikiyatri kongresi katılımı": "Psychiatry congress participation",
    "29–30 Mayıs 2014 tarihli Gülhane Askeri Tıp Akademisi etkinliği.": "Gülhane Military Medical Academy event held May 29–30, 2014.",



    "Doktor Klinik Psikolog · Ph.D.": "Clinical Psychologist · Ph.D.",
    "Doktora tezi:": "Doctoral dissertation:",
    "Türkiye": "Turkey",
    "Saha ekiplerine teknik destek.": "Technical support for field teams.",
    "Klinik Psikolog · MSF Holland": "Clinical Psychologist · MSF Holland",
    "2021–devam": "2021–present",
    "Makaleler": "Articles",
    "World Psychiatric Association Kongresi, e-poster #3015 (Prag).": "World Psychiatric Association Congress, e-poster #3015 (Prague).",
    "Türkçe  ve  Kurmancî  · anadil": "Turkish and Kurmanji · native languages",
    "Erbil'de, Temmuz 2017.": "Erbil, July 2017.",
    "Klinik Psikolog ve Ruh Sağlığı Görevlisi": "Clinical Psychologist and Mental Health Officer",
    "Psikoterapi": "Psychotherapy",
    "Eğitim": "Training",
    "Klinik psikoloji": "Clinical psychology",
    "Makale: ": "Article: ",
    "Makale:": "Article:",
    "AYNA Klinik Psikoloji Dergisi Bilimsel Hakemlik Belgesi": "AYNA Clinical Psychology Journal Peer-Review Certificate",
    "DergiPark Hakemlik Sertifikası": "DergiPark peer-review certificate",
    "Makaleyi Oku (DOI: 10.31682/ayna.815903) →": "Read the article (DOI: 10.31682/ayna.815903) →",
    "Menüyü Aç": "Open Menu",
    "Menüyü Kapat": "Close Menu",
    "Ana Menü": "Main menu",
    "Mobil Menü": "Mobile menu",
    "ETİK ÇERÇEVE & YASAL BİLGİLENDİRME": "ETHICAL FRAMEWORK & LEGAL NOTICE",
    "Bilimsel hakemlik": "Academic peer review",
    "2026  · University at Buffalo CSPC Yıllık Sempozyumu, sunum (2 Mayıs).": "2026 · University at Buffalo CSPC Annual Symposium, presentation (May 2).",
    "2025  · World Psychiatric Association Kongresi, e-poster #3015 (Prag).": "2025 · World Psychiatric Association Congress, e-poster #3015 (Prague).",
    "2024  · GİPDER, “Klinik Psikanalizde Vaka Kavramsallaştırması”, konuk konuşmacı.": "2024 · GİPDER, guest speaker on “Case Formulation in Clinical Psychoanalysis.”",
    "2011  · 7. Uluslararası Bilişsel Psikoterapi Kongresi, ortak sunum.": "2011 · Co-presentation at the 7th International Congress of Cognitive Psychotherapy.",
    "2004  · 9. Ulusal Psikoloji Öğrencileri Kongresi, sunum.": "2004 · Presentation at the 9th National Congress of Psychology Students.",
    " ve ": " and ",
    " · anadil": " · native languages",
    "ve": "and",
    "Türkçe": "Turkish",
    "Kurmancî": "Kurmanji",
    "· anadil": "· native languages",
    "· World Psychiatric Association Kongresi, e-poster #3015 (Prag).": "· World Psychiatric Association Congress, e-poster #3015 (Prague).",
    " · World Psychiatric Association Kongresi, e-poster #3015 (Prag).": " · World Psychiatric Association Congress, e-poster #3015 (Prague).",
    " · University at Buffalo CSPC Yıllık Sempozyumu, sunum (2 Mayıs).": " · University at Buffalo CSPC Annual Symposium, presentation (May 2).",
    " · GİPDER, “Klinik Psikanalizde Vaka Kavramsallaştırması”, konuk konuşmacı.": " · GİPDER, guest speaker on “Case Formulation in Clinical Psychoanalysis.”",
    " · 7. Uluslararası Bilişsel Psikoterapi Kongresi, ortak sunum.": " · Co-presentation at the 7th International Congress of Cognitive Psychotherapy.",
    " · 9. Ulusal Psikoloji Öğrencileri Kongresi, sunum.": " · Presentation at the 9th National Congress of Psychology Students.",
    "Makale Oku (DOI: 10.31682/ayna.815903) →": "Read the article (DOI: 10.31682/ayna.815903) →",
    "6 Şubat 2023 Depremleri": "February 6, 2023 Earthquakes",
    "2020–2021 · Danışman Psikoterapist / Eğitmen": "2020–2021 · Consultant Psychotherapist / Trainer",
    "2019–2020 · Ülke Teknik Misyonu": "2019–2020 · Country Technical Mission",
    "2017 · MHPSS Program Yönetimi": "2017 · MHPSS Program Management",
    "2015–2016 · Şanlıurfa ve Diyarbakır": "2015–2016 · Şanlıurfa and Diyarbakır",
    "Koruma çalışmaları": "Protection work",
    "Afet müdahalesi": "Disaster response",
    "2020–2021 döneminde Ninova Ovası’nda danışman psikoterapist ve eğitmen olarak görev yaptı.": "Worked as a consultant psychotherapist and trainer in the Nineveh Plains from 2020 to 2021.",
    "2019–2020 yılları arasında Güney Sudan’da MHPSS Teknik Danışmanı olarak görev yaptı.": "Served as an MHPSS Technical Advisor in South Sudan from 2019 to 2020.",
    "2017 yılında Action Against Hunger bünyesinde Ninova Ovası’nda Ruh Sağlığı ve Bakım Uygulamaları (MHCP) yöneticisi olarak çalıştı.": "In 2017, worked as a Mental Health and Care Practices (MHCP) Manager with Action Against Hunger in the Nineveh Plains.",
    "Bireysel Psikanalitik Psikoterapi": "Individual Psychoanalytic Psychotherapy",
    "Format:": "Format:",
    "Ön Görüşme Talep Et →": "Request an Initial Consultation →",
    "Kapsam:": "Scope:",
    "Süpervizyon Başvurusu →": "Request Supervision →",
    "Kurumsal:": "Organizations:",
    "Kurumsal Danışmanlık İste →": "Request Organizational Consultation →",
    "Çerçeve:": "Frame:",
    "Gizlilik:": "Confidentiality:",
    "Online görüşmeler:": "Online sessions:",
    "Hangi dillerde seans alabilirim?": "Which languages are sessions available in?",
    "KLİNİK PRATİK & HİZMETLER": "CLINICAL PRACTICE & SERVICES",
    "Klinik Pratik, Terapi & Süpervizyon": "Clinical Practice, Psychotherapy & Supervision",
    "“Psikanaliz bir bilgi aktarımı değil; öznenin arzusunun hakikatiyle karşılaşmasıdır.” Klinik görüşmeler, etik çerçeve ve kişinin ihtiyaçları birlikte ele alınarak yürütülür.": "“Psychoanalysis is not the transmission of knowledge; it is the subject’s encounter with the truth of their desire.” Clinical work is guided by an agreed ethical frame and each person’s needs.",
    "DOKTOR KLİNİK PSİKOLOG • CSPC, 2026": "CLINICAL PSYCHOLOGIST • CSPC, 2026",
    "Analitik Dinleme ve Semptomun Anlamı": "Analytic Listening and the Meaning of a Symptom",
    "Lacanyen psikanalitik yönelim; danışanın şikâyet ettiği semptomu susturulması gereken bir arıza olarak değil, bilinçdışı arzunun ve dile gelemeyen çatışmaların bedendeki ya da ilişkilerdeki ifadesi olarak ele alır. Seanslar, standart reçeteler uygulamak yerine kişinin kendi deneyimini anlamlandırmasına eşlik eder.": "A Lacanian psychoanalytic approach listens to symptoms as experiences that may carry meaning, rather than faults to silence. Sessions make space to explore feelings and conflicts that may not yet have found words, without relying on standard prescriptions.",
    "01 / PSİKANALİZ & TERAPİ": "01 / PSYCHOANALYSIS & THERAPY",
    "Yetişkin bireylerle birebir yürütülen derinlikli psikanalitik psikoterapi seansları. Serbest çağrışım kuralı rehberliğinde; kaygı, yas, ilişkisel tıkanıklıklar, takıntılar ve kimlik çatışmalarının kökenindeki bilinçdışı dinamiklerin çözümlenmesi.": "Individual psychoanalytic psychotherapy for adults. Guided by free association, sessions explore unconscious dynamics related to anxiety, grief, relational impasses, obsessions, and conflicts around identity.",
    "• Serbest çağrışım ve sözün yakından dinlenmesi": "• Free association and close attention to speech",
    "• Lacanyen noktalama ve seans ritmi": "• Lacanian punctuation (scansion) and session rhythm",
    "• Tekrarlayan döngüler ve arzu çıkmazlarının analizi": "• Exploring repeated patterns and impasses of desire",
    "• Türkçe, English (C1) ve Kurmancî dillerinde seans seçeneği": "• Sessions available in Turkish, English (C1), and Kurmanji",
    "Görüşme biçimi ve güncel yüz yüze uygunluk, randevu öncesinde teyit edilir.": "Format and current in-person availability are confirmed before an appointment.",
    "02 / SÜPERVİZYON": "02 / SUPERVISION",
    "Klinik Süpervizyon & Vaka Formülasyonu": "Clinical Supervision & Case Formulation",
    "Klinik psikologlar, psikoterapistler, psikiyatri hekimleri ve danışmanlar için vaka süpervizyonu. Danışanın söylemindeki yapıyı kavrama, aktarım ve karşı-aktarım düğümlerini çözme ve terapistin analitik duruşunu pekiştirme.": "Case supervision for clinical psychologists, psychotherapists, psychiatrists, and counselors. Work may include listening for structure in a client’s discourse, examining transference and countertransference, and strengthening the clinician’s analytic stance.",
    "• Lacanyen yapısal değerlendirme (Nevroz, Psikoz, Perversiyon)": "• Lacanian structural formulation (neurosis, psychosis, perversion)",
    "• Aktarımın yönlendirilmesi ve analistin arzusu": "• Transference and the analyst’s desire",
    "• Ağır travma ve kriz vakalarında ikincil travma koruması": "• Secondary-trauma protection in severe trauma and crisis work",
    "• Bireysel veya 2-4 kişilik küçük kapalı grup formatı": "• Individual or closed groups of 2–4 participants",
    "ODTÜ AYNA Klinik Psikoloji Destek Birimi tecrübesiyle.": "Informed by experience with the METU–AYNA Clinical Psychology Support Unit.",
    "03 / MHPSS & EĞİTİM": "03 / MHPSS & TRAINING",
    "Saha & Kurumsal Travma Danışmanlığı": "Fieldwork & Organizational Trauma Consultation",
    "İnsani yardım kuruluşları, STK'lar, kriz ekipleri ve afet sahasında görev yapan saha personeli için kurumsal psikososyal destek (MHPSS) ve travma yönetimi danışmanlığı.": "Organizational mental health and psychosocial support (MHPSS) and trauma consultation for humanitarian organizations, NGOs, crisis teams, and disaster-response staff.",
    "• MHPSS programı ve kurum içi kapasite geliştirme danışmanlığı": "• MHPSS programming and in-house capacity-building consultation",
    "• Merhamet yorgunluğu ve tükenmişlik önleme protokolleri": "• Compassion-fatigue and burnout-prevention protocols",
    "• IASC Rehberi standartlarında saha programlama": "• Field programming aligned with IASC guidelines",
    "• Irak, Güney Sudan ve 6 Şubat Deprem Sahası tecrübesi": "• Experience in Iraq, South Sudan, and the February 6 earthquake response",
    "Kuruma ve ihtiyaca özel tasarlanmış atölyeler.": "Workshops tailored to each organization and its needs.",
    "ÇERÇEVE VE GİZLİLİK": "FRAME & CONFIDENTIALITY",
    "Klinik Çerçeve & Mesleki Gizlilik": "Clinical Frame & Professional Confidentiality",
    "Klinik çalışma başlamadan önce görüşme çerçevesi, gizlilik ve bunun sınırları birlikte konuşulur.": "Before clinical work begins, the session frame, confidentiality, and its limits are discussed together.",
    "Görüşme sıklığı ve yöntemi kişiyle konuşularak planlanır.": "Session frequency and format are planned together.",
    "Gizlilik koşulları ve sınırları ilk görüşme öncesinde açıklığa kavuşturulur.": "The conditions and limits of confidentiality are clarified before the first meeting.",
    "Kullanılacak platform ve teknik koşullar randevu öncesinde netleştirilir.": "The platform and technical arrangements are agreed before the appointment.",
    "GÖRÜŞME ÇERÇEVESİ": "CONSULTATION FRAME",
    "Ücret ve Uygunluk": "Fees and Availability",
    "Görüşme ücretleri ve güncel uygunluk ilk görüşme öncesinde doğrudan iletişimle netleştirilir.": "Current fees and availability are discussed directly before an initial meeting.",
    "Ücret ve Uygunluk Hakkında Bilgi Al →": "Ask About Fees and Availability →",
    "SIKÇA SORULAN SORULAR": "FREQUENTLY ASKED QUESTIONS",
    "Süreç Hakkında Merak Edilenler": "Questions About the Process",
    "Ön görüşme süreci nasıl işler?": "How does an initial consultation work?",
    "Ön görüşme (ilk seans), danışanın terapiye geliş sebebini, beklentilerini ve psikanalitik çalışmaya uygunluğunu değerlendirdiğimiz karşılıklı bir tanışma seansıdır. Bu seansta seans sıklığı, çalışma dili ve çerçeve detayları netleştirilir.": "An initial consultation is a first meeting to discuss what brings you to therapy, your expectations, and whether psychoanalytic work may be a suitable fit. Session frequency, language, and the working frame are also discussed.",
    "Online seanslar yüz yüze seanslar kadar verimli midir?": "Can online sessions work as well as in-person sessions?",
    "Online görüşmelerin sizin için uygun olup olmadığı ilk görüşmede konuşulabilir. Kullanılacak platform, saat dilimi ve güncel uygunluk randevu öncesinde netleştirilir.": "Whether online sessions are suitable for you can be discussed at the first meeting. The platform, time zone, and current availability are confirmed before an appointment.",
    "Seanslar danışanın kendisini en rahat ve sahici biçimde ifade ettiği dilde; Türkçe, İngilizce veya Kurmancî olarak gerçekleştirilebilmektedir.": "Sessions may be held in Turkish, English, or Kurmanji, in the language in which the client feels most comfortable expressing themselves.",
    "Ön Görüşme Randevusu Başlat": "Request an Initial Consultation",
    "Ön Görüşme Randevusu Başlat →": "Request an Initial Consultation →",
    "GÜNCEL GELİŞMELER & DUYURULAR": "RECENT WORK & ANNOUNCEMENTS",
    "Akademik Çalışmalar, Sempozyumlar & Duyurular": "Academic Work, Symposia & Announcements",
    "Dr. Ali İhsan Yaka'nın University at Buffalo CSPC bünyesindeki araştırmaları, uluslararası kongre bildirileri, araştırma bursları ve güncel klinik etkinlikleri.": "Research at the University at Buffalo CSPC, international conference presentations, research grants, and recent clinical events.",
    "CSPC Yıllık Sempozyumu: “Dildeki Paranoit Boyut ve Soykırım”": "CSPC Annual Symposium: “The Paranoid Dimension of Language and Genocide”",
    "University at Buffalo Center for the Study of Psychoanalysis & Culture (CSPC) 2026 Bahar Sempozyumu kapsamında sunulan bu çalışma; Êzidî kadın kırımı ve soykırımını Lacanyen psikanalitik kuramın paranoit bilgi ve dil yapılanması üzerinden çözümler. Şiddetin yalnızca fiziksel bir imha değil, aynı zamanda simgesel düzeni ve iletişimi hedef alan bir \"iletişim-kırım\" (communicide) olarak nasıl inşa edildiğini irdeler.": "Presented at the University at Buffalo CSPC 2026 Spring Symposium, this paper examines the genocide of Êzidî women through Lacanian accounts of paranoid knowledge and language. It considers how violence targets not only bodies but also symbolic order and communication, a process described as “communicide.”",
    "Yer: 202 Clemens Hall, Buffalo, NY": "Location: 202 Clemens Hall, Buffalo, NY",
    "EKİM 2025 • PRAG, ÇEKYA • 25. DÜNYA PSİKİYATRİ KONGRESİ": "OCTOBER 2025 • PRAGUE, CZECHIA • 25TH WORLD CONGRESS OF PSYCHIATRY",
    "25. WPA Dünya Kongresi: Êzidî Soykırımı ve Süpervizyonda Toplumsal Travma": "25th WPA World Congress: Êzidî Genocide and Social Trauma in Supervision",
    "Dünya Psikiyatri Birliği (WPA) tarafından Prag'da düzenlenen 25. Dünya Psikiyatri Kongresi'nde kabul edilen araştırma; Irak Ninova Ovası'nda Êzidî soykırımı mağdurlarıyla çalışan ruh sağlığı personelinin aktarım, karşı-aktarım ve ikincil travma süreçlerini Lacanyen psikanaliz perspektifinden inceler.": "Accepted for the 25th World Congress of Psychiatry in Prague, this study uses a Lacanian psychoanalytic perspective to examine transference, countertransference, and secondary trauma among mental health workers supporting survivors of the Êzidî genocide in Iraq’s Nineveh Plains.",
    "Kongre Kaydı: WPA e-Poster #3015": "Conference record: WPA e-poster #3015",
    "27 NİSAN 2025 · BOĞAZİÇİ ÜNİVERSİTESİ": "APRIL 27, 2025 · BOĞAZİÇİ UNIVERSITY",
    "XI. Psikoloji Günü: Yalnızlık": "11th Psychology Day: Loneliness",
    "“Yalnızlık ve Psikanalitik Perspektif” başlıklı konuşmadan seçilmiş bir kare. Etkinlik, Boğaziçi Üniversitesi XI. Psikoloji Günü kapsamında düzenlendi.": "A selected image from the talk “Loneliness and the Psychoanalytic Perspective,” presented at Boğaziçi University’s 11th Psychology Day.",
    "Akademik çalışmaları incele →": "Explore academic work →",
    "Boğaziçi Üniversitesi · 27 Nisan 2025": "Boğaziçi University · April 27, 2025",
    "2025 – 2026 • ULUSLARARASI PSİKANALİZ BİRLİĞİ (IPA) & HAKEMLİK": "2025–2026 • INTERNATIONAL PSYCHOANALYTICAL ASSOCIATION (IPA) & PEER REVIEW",
    "IPA Araştırma Bursu ve AYNA Dergisi Hakemlik Çalışmaları": "IPA Research Grant and AYNA Journal Peer Review",
    "Uluslararası Psikanaliz Birliği (IPA) tarafından 12 aylık araştırma desteği kapsamında fonlanan çalışma, psikanalitik kuramın kriz ve afet sahalarında pratik bir metodolojiye dönüştürülmesini hedefler. Eş zamanlı olarak, ODTÜ bünyesinde yayımlanan hakemli": "Funded by a 12-month International Psychoanalytical Association research grant, this project explores practical uses of psychoanalytic theory in crisis and disaster settings. The researcher also serves as a peer reviewer for",
    "hakem kurulunda akademik değerlendirmeler yürütülmektedir.": "published by METU.",
    "Akademik Hakemlik • AYNA ODTÜ": "Academic peer review • AYNA, METU",
    "Tüm Akreditasyonları Gör →": "View credentials →",
    "APsA 2026 National Meeting: 44,5 Katılım Saati": "APsA 2026 National Meeting: 44.5 Attendance Hours",
    "San Francisco’da 27 Ocak–1 Şubat 2026 tarihlerinde düzenlenen APsA National Meeting için katılım belgesinde 44,5 contact hour kayıtlıdır. Program en fazla 45,5 saat sunmuştur; kişisel katılım toplamı 44,5 saattir.": "The attendance certificate for the APsA National Meeting in San Francisco, January 27–February 1, 2026, records 44.5 contact hours. The program offered up to 45.5 hours; the recorded personal attendance is 44.5 hours.",
    "Katılım belgesindeki kişisel toplam: 44,5 contact hour": "Personal total recorded on the certificate: 44.5 contact hours",
    "Katılım belgesinden önizleme · 44,5 contact hour": "Certificate preview · 44.5 contact hours",
    "Klinik Görüşme veya Akademik İletişim": "Clinical Consultation or Academic Inquiry",
    "Psikanalitik psikoterapi, vaka süpervizyonu veya kurumsal seminer talepleriniz için ön görüşme formunu doldurabilir ya da doğrudan e-posta ile ulaşabilirsiniz.": "For psychoanalytic psychotherapy, case supervision, or organizational seminar inquiries, use the initial consultation form or contact me by email.",
    "Klinik Hizmetleri İncele": "Explore clinical services",
    "SAHA DENEYİMİ · RUH SAĞLIĞI VE PSİKOSOSYAL DESTEK": "FIELD EXPERIENCE · MENTAL HEALTH & PSYCHOSOCIAL SUPPORT",
    "Saha Deneyimleri & İnsani Yardım (MHPSS)": "Fieldwork & Humanitarian Response (MHPSS)",
    "Kolektif travma, kriz ve afet sahalarındaki ruh sağlığı ve psikososyal destek çalışmalarından seçilmiş örnekler.": "Selected mental health and psychosocial support work in settings affected by collective trauma, crisis, and disaster.",
    "● HATAY & KAHRAMANMARAŞ, TÜRKİYE": "● HATAY & KAHRAMANMARAŞ, TURKEY",
    "6 Şubat Depremleri Sonrası Koruma Çalışmaları": "Protection Work After the February 6 Earthquakes",
    "IsraAID Türkiye • Koruma Görevlisi": "IsraAID Turkey • Protection Officer",
    "2023 yılında 6 Şubat depremlerinin ardından Türkiye’de yürütülen müdahalede koruma görevlisi olarak çalıştı.": "Worked as a protection officer in Turkey’s response following the February 6, 2023 earthquakes.",
    "● NİNOVA OVASI & ERBİL, IRAK": "● NINEVEH PLAINS & ERBIL, IRAQ",
    "2020–2021 • Danışman Psikoterapist / Eğitmen": "2020–2021 • Consultant Psychotherapist / Trainer",
    "Ninova Ovası’nda Psikoterapi ve Eğitim": "Psychotherapy and Training in the Nineveh Plains",
    "● JUBA & YEI, GÜNEY SUDAN": "● JUBA & YEI, SOUTH SUDAN",
    "2019–2020 • Ülke Teknik Misyonu": "2019–2020 • Country Technical Mission",
    "Güney Sudan’da MHPSS Teknik Danışmanlığı": "MHPSS Technical Advisory in South Sudan",
    "2019–2020 döneminde Güney Sudan’da MHPSS Teknik Danışmanı olarak görev yaptı.": "Served as an MHPSS Technical Advisor in South Sudan from 2019 to 2020.",
    "Teknik danışmanlık": "Technical advisory",
    "● NİNOVA OVASI, IRAK": "● NINEVEH PLAINS, IRAQ",
    "2017 • MHPSS Program Yönetimi": "2017 • MHPSS Program Management",
    "Ninova Ovası’nda Ruh Sağlığı Program Yönetimi": "Mental Health Program Management in the Nineveh Plains",
    "2017 yılında Action Against Hunger bünyesinde Ninova Ovası’nda Mental Health and Care Practices (MHCP) Manager olarak çalıştı.": "In 2017, worked as a Mental Health and Care Practices (MHCP) Manager with Action Against Hunger in the Nineveh Plains.",
    "Ruh sağlığı programı": "Mental health program",
    "● ŞANLIURFA, GAZİANTEP & DİYARBAKIR": "● ŞANLIURFA, GAZİANTEP & DİYARBAKIR",
    "2015–2016 • Şanlıurfa ve Diyarbakır": "2015–2016 • Şanlıurfa and Diyarbakır",
    "2015’te Şanlıurfa’da MSF Holland, 2016’da Diyarbakır’da MDM bünyesinde ruh sağlığı görevlerinde bulundu.": "Held mental health roles with MSF Holland in Şanlıurfa in 2015 and Médecins du Monde (MDM) in Diyarbakır in 2016.",
    "Ruh sağlığı": "Mental health",
    "Kurumsal İş Birliği & Eğitim Talebi →": "Request Organizational Consultation or Training →",
    "YAYINLAR & AKADEMİK ÜRETİM": "PUBLICATIONS & SCHOLARLY WORK",
    "Yayınlar, Tezler & Bildiriler": "Publications, Dissertations & Presentations",
    "Psikanalitik kuram, dil, baba işlevi ve toplumsal travmanın klinik kavramsallaştırması üzerine hakemli makaleler ve sunumlar.": "Peer-reviewed articles and presentations on psychoanalytic theory, language, the paternal function, and clinical formulations of social trauma.",
    "Saha deneyimi, toplumsal travma ve klinik süpervizyon üzerine çalışmalar.": "Studies on field experience, social trauma, and clinical supervision.",
    "Toplumsal travmanın anlaşılmasında psikanalitik yaklaşım ve klinisyen deneyimi.": "Psychoanalytic approach and clinician experience in understanding social trauma.",
    "İşitme engelli çocuklarla klinik psikoloji çalışmaları.": "Clinical psychology work with hearing impaired children.",
    "ODTÜ DOKTORA TEZİ • METU OPEN ARCHIVE": "METU DOCTORAL DISSERTATION • METU OPEN ARCHIVE",
    "(2024). Orta Doğu Teknik Üniversitesi (METU), Sosyal Bilimler Enstitüsü, Klinik Psikoloji Doktora Programı. Danışman: Prof. Dr. Faruk Gençöz.": "(2024). Middle East Technical University (METU), Graduate School of Social Sciences, Ph.D. Program in Clinical Psychology. Advisor: Prof. Dr. Faruk Gençöz.",
    "Savaş, soykırım ve kitlesel şiddet sonrasında Irak Ninova Ovası'nda çalışan yerel ruh sağlığı çalışanlarının söylemleri, Lacanyen psikanaliz ve klinik süpervizyon ekseninde incelenmiştir. Tez; kolektif travmanın dildeki izlerini, aktarım çıkmazlarını ve klinisyenin dinleme pozisyonunu açığa çıkarır.": "This dissertation examines the discourse of local mental health professionals working in the Nineveh Plains of Iraq after war, genocide, and mass violence, with a focus on Lacanian psychoanalysis and clinical supervision. It explores how collective trauma leaves traces in language, transference impasses, and the clinician’s listening position.",
    "ODTÜ Açık Arşiv Tezi →": "View dissertation in the METU Open Archive →",
    "WES US Doctoral Rozeti →": "WES U.S. Doctoral Equivalency Badge →",
    "SEÇİLMİŞ SUNUM · CSPC YILLIK SEMPOZYUMU": "SELECTED PRESENTATION · CSPC ANNUAL SYMPOSIUM",
    "(2 Mayıs 2026). University at Buffalo, Center for the Study of Psychoanalysis & Culture Annual Symposium, Buffalo, New York.": "(May 2, 2026). University at Buffalo, Center for the Study of Psychoanalysis & Culture Annual Symposium, Buffalo, New York.",
    "Etkinlik ayrıntısı →": "Event details →",
    "E-POSTER · WORLD PSYCHIATRIC ASSOCIATION": "E-POSTER · WORLD PSYCHIATRIC ASSOCIATION",
    "(5–8 Ekim 2025). 25th World Congress of Psychiatry, e-Poster #3015, Prag, Çekya.": "(October 5–8, 2025). 25th World Congress of Psychiatry, e-poster #3015, Prague, Czechia.",
    "KONGRE BİLDİRİSİ · COGNITIVE PSYCHOTHERAPY": "CONFERENCE PRESENTATION · COGNITIVE PSYCHOTHERAPY",
    "(2011). 7th International Congress of Cognitive Psychotherapy, İstanbul, Türkiye.": "(2011). 7th International Congress of Cognitive Psychotherapy, Istanbul, Turkey.",
    "HAKEMLİ MAKALE • AYNA KLİNİK PSİKOLOJİ": "PEER-REVIEWED ARTICLE • AYNA CLINICAL PSYCHOLOGY",
    "Psikotik Yapı, Baba İşlevi ve Lacanyen Kavramsallaştırma": "Psychotic Structure, the Paternal Function, and Lacanian Conceptualization",
    "Psikotik yapıda Babanın-Adı göstereninin menedilmesi (forclusion), Gerçek, Simgesel ve İmgesel sicillerin çözülmesi ve psikotik öznenin dil kurma süreçleri klinik vaka kesitleri eşliğinde psikanalitik kuram zemininde kavramsallaştırılmıştır.": "The article uses clinical vignettes and psychoanalytic theory to conceptualize foreclosure of the Name-of-the-Father in psychosis, the unbinding of the Real, Symbolic, and Imaginary registers, and how the psychotic subject forms language.",
    "Makaleyi Oku (DOI: 10.31682/ayna.1282059) →": "Read the article (DOI: 10.31682/ayna.1282059) →",
    "DergiPark Dizini →": "View the DergiPark record →",
    "HAKEMLİ MAKALE • AYNA KLİNİK PSİKOLOJİ 2021": "PEER-REVIEWED ARTICLE • AYNA CLINICAL PSYCHOLOGY 2021",
    "Obsesyonel Yapıda Baba İşlevinin Lacanyen Perspektiften İncelenmesi": "The Paternal Function in Obsessional Structure from a Lacanian Perspective",
    "Obsesyonel nevrozda borç, suçluluk, imkansız arzu ve Babanın-Adı'nın yasa koyucu rolü arasındaki klinik ilişkiler. Vaka materyali üzerinden analitik müdahaleler ve gösterenin işlevi ayrıntılandırılmıştır.": "The article examines clinical relations among debt, guilt, impossible desire, and the law-giving role of the Name-of-the-Father in obsessional neurosis. Analytic interventions and the function of the signifier are discussed through case material.",
    "ULUSAL HAKEMLİ • TÜRK PSİKOLOJİ YAZILARI": "NATIONAL PEER-REVIEWED JOURNAL • TURKISH PSYCHOLOGICAL ARTICLES",
    "Yakın İlişkiler Envanteri’nin Kendilik Algısı, Olumsuz Otomatik Düşünceler ve Psikopatolojik Belirtiler Bağlamında İncelenmesi": "The Relationship Inventory in the Context of Self-Perception, Negative Automatic Thoughts, and Psychopathological Symptoms",
    "Yetişkin bağlanma boyutlarının psikopatolojik semptomlar ve erken dönem uyumsuz şemalarla etkileşimini ampirik olarak ortaya koyan öncü araştırma makalesi.": "An empirical study of how adult attachment dimensions interact with psychopathological symptoms and early maladaptive schemas.",
    "Makale PDF İndir (350 KB) ↓": "Download article PDF (350 KB) ↓",
    "HAKEMLİ MAKALE · PSYCHOLOGY KURDÎ": "PEER-REVIEWED ARTICLE · PSYCHOLOGY KURDÎ",
    "Kurmancî dilinde yayımlanan makale. Başlık ve bibliyografik bilgiler yazarın güncel özgeçmişindeki kayda göre aktarılmıştır.": "Article published in Kurmanji. The title and bibliographic details are reproduced from the author’s current CV.",
    "HAKEMLİK SERTİFİKASI • DERGİPARK / TÜBİTAK ULAKBİM": "PEER REVIEW CERTIFICATE • DERGİPARK / TÜBİTAK ULAKBİM",
    "“Psikanalizde Aktarımın Rolü: Bir Histeri Vakasının İncelenmesi”": "“The Role of Transference in Psychoanalysis: A Study of a Hysteria Case”",
    "(Kayıt No: 1845184). Baş Editör: Prof. Dr. Faruk Gençöz.": "(Record no. 1845184). Editor-in-chief: Prof. Dr. Faruk Gençöz.",
    "Sertifikayı Tam Ekran İncele →": "View certificate full screen →",
    "Google Scholar Profilini İncele →": "View Google Scholar profile →",
    "Yayınlar, Tezler ve Bildiriler": "Publications, Dissertations and Presentations",
    "Yayınlar, Tezler ve Bildiriler | Dr. Ali İhsan Yaka": "Publications, Dissertations and Presentations | Dr. Ali Ihsan Yaka",
    "Hata 404 · Sayfa Bulunamadı": "Error 404 · Page Not Found",
    "Aradığınız sayfa dilin veya bilincin sınırları dışında kalmış olabilir.": "The page you are looking for may have moved or no longer be available.",
    "Bağlantı adresi değişmiş, kaldırılmış veya geçici olarak ulaşılamıyor olabilir. Ana sayfaya dönerek psikanalitik çalışma alanlarını ve yayınları inceleyebilirsiniz.": "The link may have changed, the page may have been removed, or it may be temporarily unavailable. Return to the home page to explore clinical work and publications.",
    "← Ana Sayfaya Güvenle Dön": "← Return safely to the home page",
    "Gizlilik, Mesleki Etik ve Hasta Mahremiyeti İlkeleri": "Privacy, Professional Ethics, and Patient Confidentiality",
    "Bu sayfa, yalnızca web sitesindeki iletişim formu ve tarayıcı tercihleri hakkında bilgi verir. Klinik görüşmelerin gizlilik çerçevesi ilk görüşme öncesinde ayrıca konuşulmalıdır.": "This notice covers only the website’s contact form and browser preferences. Confidentiality for clinical work should be discussed separately before the first meeting.",
    "1. İletişim formu": "1. Contact form",
    "Form gönderildiğinde bu web sitesi bilgileri almaz veya saklamaz. Form, girdiğiniz bilgileri içeren bir WhatsApp mesajını hazırlar. WhatsApp açıldığında mesajı inceleyebilir, değiştirebilir veya kapatabilirsiniz; yalnızca Gönder’e bastığınızda mesaj WhatsApp üzerinden iletilir. WhatsApp’ın kendi gizlilik koşulları ve uygulamaları geçerlidir.": "When you submit the form, this website does not receive or store the details. The form prepares a WhatsApp message containing the information you entered. You can review, edit, or close it when WhatsApp opens; the message is sent only if you tap Send. WhatsApp’s own privacy terms and practices apply.",
    "2. Hassas bilgi paylaşmayın": "2. Do not include sensitive information",
    "Form veya WhatsApp mesajına sağlık, terapi ya da başka hassas kişisel bilgiler yazmayın. Bir klinik görüşme başlatmadan önce gizlilik, sınırları ve bilgi işleme koşullarını doğrudan sorun.": "Do not include health, therapy, or other sensitive personal information in the form or WhatsApp message. Before beginning clinical work, ask directly about confidentiality, its limits, and how information is handled.",
    "3. Tarayıcı tercihleri": "3. Browser preferences",
    "Ana sayfadaki dil seçimi ve açılış perdesinin daha önce görüntülenmiş olması tarayıcınızın yerel depolamasında tutulur. Bu tercihler iletişim formuyla sunucuya gönderilmez.": "The language selected on the home page and whether the opening screen has been viewed are stored locally in your browser. These preferences are not sent to a server through the contact form.",
    "4. Harici içerik": "4. External content",
    "Yazı tipleri Google Fonts hizmetinden yüklenebilir. Bu isteklerde tarayıcınız Google ile bağlantı kurar; ilgili hizmetin kendi gizlilik koşulları uygulanır.": "Fonts may be loaded from Google Fonts. Your browser connects to Google for these requests, and Google’s privacy terms apply to that service.",
    "5. İletişim": "5. Contact",
    "Bu bilgilendirme veya siteyle ilgili sorular için": "For questions about this notice or the website, write to",
    "adresine yazabilirsiniz. Bu sayfa, klinik gizlilik koşullarının veya mevzuata ilişkin hukuki danışmanlığın yerine geçmez.": ". This notice does not replace clinical confidentiality terms or legal advice about applicable regulations.",
    "Gizlilik, Mesleki Etik ve Hasta Mahremiyeti İlkeleri | Dr. Ali İhsan Yaka": "Privacy, Professional Ethics, and Patient Confidentiality | Dr. Ali Ihsan Yaka",
    "Sayfa Bulunamadı (404) | Dr. Ali İhsan Yaka, Ph.D.": "Page Not Found (404) | Dr. Ali Ihsan Yaka, Ph.D.",
    "KLİNİK & PRATİK BİLGİLER": "CLINICAL PRACTICE INFORMATION",
    "Sıkça Sorulan Sorular": "Frequently Asked Questions",
    "Psikanalitik psikoterapi süreci, seansların çerçevesi, gizlilik esasları ve klinik süpervizyon hakkında merak edilen temel hususlar.": "Answers to common questions about psychoanalytic psychotherapy, the frame of sessions, confidentiality, and clinical supervision.",
    "Lacanyen psikanalitik psikoterapi nedir ve diğer yaklaşımlardan nasıl ayrılır?": "What is Lacanian psychoanalytic psychotherapy, and how does it differ from other approaches?",
    "Lacanyen psikanalitik psikoterapi; semptomu yalnızca susturulması veya yok edilmesi gereken mekanik bir arıza olarak görmez. Aksine semptom, öznenin dilde henüz ifade edemediği bilinçdışı arzusunun bedensel ya da ilişkisel bir şifresidir. Seanslarda danışanın serbest çağrışımı, dil sürçmeleri, rüyaları ve aktarım dinamikleri üzerinden konuşulur; amaç hazır reçeteler vermek değil, öznenin kendi hakikatiyle karşılaşabileceği derinlikli bir dinleme alanı açmaktır.": "Lacanian psychoanalytic psychotherapy does not treat a symptom simply as a mechanical fault to silence or remove. A symptom may express unconscious desire that has not yet found words, through bodily experience or relationships. Sessions attend to free association, slips of the tongue, dreams, and transference. The aim is not to provide ready-made prescriptions, but to create a space for careful listening and self-understanding.",
    "Seansların süresi, sıklığı ve çalışma çerçevesi nasıldır?": "How long and how often are sessions, and what is the working frame?",
    "Lacanyen psikanalitik psikoterapide seanslar genellikle haftada bir veya ihtiyaca göre haftada iki kez düzenli olarak yürütülür. İlk ön görüşmede danışanın başvuru sebebi, semptomların dinamikleri ve çalışma çerçevesi karşılıklı olarak netleştirilir. Seansların sürekliliği, belirlenen saatlere sadakat ve analitik nötrlük çalışmanın en temel zeminini oluşturur.": "In Lacanian psychoanalytic psychotherapy, sessions are usually held weekly, or twice weekly when appropriate. The initial consultation is used to discuss what brings the person to therapy, the dynamics of symptoms, and the working frame. Continuity, keeping agreed appointment times, and an analytic stance provide the basis for the work.",
    "Online terapi süreci nasıl işler? Yüz yüze terapi kadar etkili midir?": "How do online sessions work? Are they as effective as in-person sessions?",
    "Online görüşmelerin biçimi ve kullanılacak platform randevu öncesinde konuşulur. Görüşme sırasında bölünmeyeceğiniz, yalnız ve sessiz bir yerde bulunmanız önerilir. Online formatın sizin için uygun olup olmadığı ön görüşmede değerlendirilebilir.": "The format and platform for online sessions are discussed before an appointment. It is helpful to join from a private, quiet place where you will not be interrupted. Whether online sessions are suitable for you can be considered during the initial consultation.",
    "Türkiye, Amerika ve Avrupa arasındaki saat dilimleri nasıl ayarlanır?": "How are appointments scheduled across Turkey, Europe, and the United States?",
    "Seans saatleri Türkiye saati (TRT / UTC+3), Orta Avrupa saati (CET/CEST) ve ABD Doğu saati (ET) gözetilerek planlanır. Uygunluk, randevu öncesinde birlikte netleştirilir.": "Scheduling takes Turkey Time (TRT / UTC+3), Central European Time (CET/CEST), and U.S. Eastern Time (ET) into account. Availability is confirmed together before an appointment.",
    "Klinik süpervizyon kimler içindir ve süreç nasıl işler?": "Who is clinical supervision for, and how does it work?",
    "Klinik süpervizyon; aktif danışan gören klinik psikologlar, psikoterapistler ve insani yardım sahasında çalışan ruh sağlığı personeli (MHPSS) içindir. Lacanyen vaka formülasyonu, aktarım ve karşı-aktarım süreçleri ile terapistin etik dinleme pozisyonu ele alınır.": "Clinical supervision is for clinical psychologists, psychotherapists, and mental health staff (MHPSS) working in humanitarian settings. Supervision may address Lacanian case formulation, transference and countertransference, and the clinician’s ethical listening position.",
    "Acil kriz veya acil psikiyatrik müdahale durumlarında ne yapılmalıdır?": "What should I do in an emergency or psychiatric crisis?",
    "Lacanyen psikanalitik psikoterapi ve danışmanlık hizmetleri acil psikiyatrik kriz müdahalesi kapsamında değildir. Kendinize veya bir başkasına zarar verme riski ya da acil psikiyatrik durumlarda en yakın hastanenin acil servisine başvurun veya Türkiye'de 112 Acil Çağrı Merkezi'ni arayın.": "Lacanian psychoanalytic psychotherapy and consultation do not provide emergency psychiatric crisis care. If you or someone else may be at risk of harm or needs urgent psychiatric care, go to the nearest emergency department or call 112 in Turkey.",
    "Başka bir sorunuz veya ön görüşme talebiniz mi var?": "Do you have another question or want to request an initial consultation?",
    "Sorularınız ve seans başvurularınız için doğrudan iletişime geçebilirsiniz.": "Get in touch directly with questions or to inquire about sessions.",
    "Ön Görüşme Formunu Doldur →": "Complete the Initial Consultation Form →"
  };
  const homepageLooseTextEnglish = Object.fromEntries(Object.entries(homepageLooseText).map(([tr, en]) => [en, tr]));

  function translateUnkeyedText(lang) {
    const dictionary = lang === 'en' ? homepageLooseText : homepageLooseTextEnglish;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script,style')) continue;
      const keyed = parent.closest('[data-i18n]');
      if (keyed && translations[lang][keyed.getAttribute('data-i18n')]) continue;
      const raw = node.nodeValue;
      const trimmed = raw.trim();
      if (!trimmed || !Object.prototype.hasOwnProperty.call(dictionary, trimmed)) continue;
      const leading = raw.match(/^\s*/)?.[0] || '';
      const trailing = raw.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leading}${dictionary[trimmed]}${trailing}`;
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'tr';
    const isHomepage = Boolean(document.getElementById('welcomeHeading'));
    const supportsFullTranslation = Boolean(document.querySelector('.lang-switch-minimal, .lang-toggle'));
    const activeLang = supportsFullTranslation ? lang : 'tr';
    if (supportsFullTranslation) localStorage.setItem('aiy_lang', activeLang);
    document.querySelectorAll('.lang-switch-minimal, .lang-toggle').forEach(group => {
      group.hidden = !supportsFullTranslation;
    });
    document.documentElement.lang = activeLang;

    // Update document title
    const pageName = window.location.pathname.split('/').pop() || 'index.html';
    const pageTitleKey = {
      'hakkimda.html': 'page.aboutTitle',
      'klinik-pratik.html': 'page.practiceTitle',
      'guncel.html': 'page.newsTitle',
      'saha-calismalari.html': 'page.fieldworkTitle',
      'yayinlar.html': 'page.publicationsTitle',
      'sss.html': 'page.faqTitle',
      'gizlilik-politikasi.html': 'page.privacyTitle',
      '404.html': 'page.notFoundTitle'
    }[pageName] || 'contact.pageTitle';
    const titleKey = isHomepage ? 'page.title' : pageTitleKey;
    if (supportsFullTranslation && translations[activeLang][titleKey]) {
      const localizedTitle = translations[activeLang][titleKey];
      document.title = localizedTitle;
      document.querySelectorAll('meta[property="og:title"], meta[name="twitter:title"]').forEach(el => {
        el.setAttribute('content', localizedTitle);
      });
    }
    document.querySelectorAll('meta[data-i18n-content]').forEach(el => {
      const key = el.getAttribute('data-i18n-content');
      if (translations[activeLang][key]) el.setAttribute('content', translations[activeLang][key]);
    });

    // Keep English and Turkish shares/canonicals aligned with the selected language URL.
    if (supportsFullTranslation) {
      const requestedUrl = new URL(window.location.href);
      if (activeLang === 'en') requestedUrl.searchParams.set('lang', 'en');
      else requestedUrl.searchParams.delete('lang');
      const canonicalLink = document.querySelector('link[rel="canonical"]');
      if (canonicalLink) {
        const canonicalUrl = new URL(canonicalLink.href);
        canonicalUrl.searchParams.delete('lang');
        if (activeLang === 'en') canonicalUrl.searchParams.set('lang', 'en');
        canonicalLink.href = canonicalUrl.href;
      }
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) ogUrl.content = canonicalLink ? canonicalLink.href : requestedUrl.origin + requestedUrl.pathname;
      const ogLocale = document.querySelector('meta[property="og:locale"]');
      if (ogLocale) ogLocale.content = activeLang === 'en' ? 'en_US' : 'tr_TR';
      if (requestedUrl.href !== window.location.href) {
        window.history.replaceState(window.history.state, '', requestedUrl.href);
      }
    }

    // Update Language Toggle active pills
    document.querySelectorAll('.lang-btn, .lang-text-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === activeLang);
    });

    // Update all text/html elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[activeLang][key]) {
        el.innerHTML = translations[activeLang][key];
      }
    });

    // Update all input/textarea placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[activeLang][key]) {
        el.placeholder = translations[activeLang][key];
      }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      if (translations[activeLang][key]) el.setAttribute('aria-label', translations[activeLang][key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
      const key = el.getAttribute('data-i18n-alt');
      if (translations[activeLang][key]) el.alt = translations[activeLang][key];
    });

    document.querySelectorAll('img[alt]:not([data-i18n-alt])').forEach(img => {
      if (!img.dataset.localeBaseAlt) img.dataset.localeBaseAlt = img.alt;
      const dictionary = activeLang === 'en' ? homepageLooseText : homepageLooseTextEnglish;
      img.alt = dictionary[img.dataset.localeBaseAlt] || img.dataset.localeBaseAlt;
    });

    translateUnkeyedText(activeLang);
  }

  // Bind Language buttons
  document.querySelectorAll('.lang-btn, .lang-text-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  const queryLang = new URLSearchParams(window.location.search).get('lang');
  const savedLang = (queryLang === 'en' || queryLang === 'tr') ? queryLang : (localStorage.getItem('aiy_lang') || 'tr');
  setLanguage(savedLang);

  function initSplash() {
    const splash = document.getElementById('splashScreen');
    const enterButton = document.getElementById('splashEnterBtn');
    const replayButton = document.getElementById('replaySplashBtn');
    const splashSeenKey = 'aiy_splash_seen_v1';
    let splashAutoCloseTimer = 0;
    if (!splash) {
      replayButton?.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      return;
    }

    const backgroundRegions = [
      document.querySelector('.skip-link'),
      document.getElementById('siteHeader'),
      document.querySelector('main'),
      document.getElementById('siteFooter')
    ].filter(Boolean);
    const setBackgroundInert = (inert) => backgroundRegions.forEach(region => { region.inert = inert; });

    let hasSeenSplash = false;
    try { hasSeenSplash = localStorage.getItem(splashSeenKey) === '1'; } catch (_) {}
    try {
      hasSeenSplash = hasSeenSplash || sessionStorage.getItem('aiy_splash_seen_session_v4') === '1';
      if (hasSeenSplash) localStorage.setItem(splashSeenKey, '1');
    } catch (_) {}
    if (hasSeenSplash) {
      document.documentElement.classList.add('splash-visited');
      splash.classList.add('is-hidden');
      splash.setAttribute('aria-hidden', 'true');
      splash.inert = true;
    } else {
      splash.classList.remove('is-hidden');
      splash.removeAttribute('aria-hidden');
      splash.inert = false;
      document.body.classList.add('splash-active');
      setBackgroundInert(true);
      window.requestAnimationFrame(() => enterButton?.focus({ preventScroll: true }));
    }

    const closeSplash = () => {
      window.clearTimeout(splashAutoCloseTimer);
      splashAutoCloseTimer = 0;
      try { localStorage.setItem(splashSeenKey, '1'); } catch (_) {}
      try { sessionStorage.removeItem('aiy_splash_seen_session_v4'); } catch (_) {}
      document.documentElement.classList.add('splash-visited');
      splash.classList.add('is-hidden');
      splash.setAttribute('aria-hidden', 'true');
      splash.inert = true;
      document.body.classList.remove('splash-active');
      setBackgroundInert(false);
      document.getElementById('welcome')?.scrollIntoView({
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        block: 'start'
      });
      // Do not move focus to the heading after the timed dismissal: mobile
      // Safari draws a persistent focus rectangle around the hero title.
    };

    const scheduleSplashClose = () => {
      window.clearTimeout(splashAutoCloseTimer);
      splashAutoCloseTimer = window.setTimeout(closeSplash, 5000);
    };

    enterButton?.addEventListener('click', closeSplash);
    if (!hasSeenSplash) scheduleSplashClose();
    replayButton?.addEventListener('click', (event) => {
      event.preventDefault();
      try { localStorage.removeItem(splashSeenKey); } catch (_) {}
      document.documentElement.classList.remove('splash-visited');
      splash.classList.remove('is-hidden');
      splash.removeAttribute('aria-hidden');
      splash.inert = false;
      document.body.classList.add('splash-active');
      setBackgroundInert(true);
      enterButton?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'auto' });
      scheduleSplashClose();
    });
    document.addEventListener('keydown', (event) => {
      if (splash.classList.contains('is-hidden')) return;
      if (event.key === 'Escape') {
        event.preventDefault();
        closeSplash();
      } else if (event.key === 'Tab') {
        event.preventDefault();
        enterButton?.focus({ preventScroll: true });
      }
    });
  }

  // -------------------------------------------------------------
  // 2. SPLASH SCREEN (MONOGRAPH ART CURTAIN)
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // 3. SCROLL PROGRESS BAR & HEADER SCROLL SPY
  // -------------------------------------------------------------
  const progressBar = document.getElementById('scrollProgress');
  const siteHeader = document.getElementById('siteHeader');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (siteHeader) {
      siteHeader.classList.toggle('is-scrolled', scrollTop > 30);
    }

    // Scroll spy for active menu item
    let currentSection = '';
    sections.forEach(section => {
      const top = section.offsetTop - 150;
      const height = section.offsetHeight;
      if (scrollTop >= top && scrollTop < top + height) {
        currentSection = section.getAttribute('id');
      }
    });

    if (currentSection) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          link.classList.toggle('active', href === `#${currentSection}`);
        }
      });
    }
  }, { passive: true });

  // -------------------------------------------------------------
  // 4. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // Apple & Emil Kowalski Fluid Reveal Dynamics
  // -------------------------------------------------------------
  const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // -------------------------------------------------------------
  // 5. MOBILE DRAWER NAVIGATION
  // -------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  let mobileDrawer = document.getElementById('mobileDrawer');
  let drawerClose = document.getElementById('drawerClose');

  // Some legacy pages rendered the menu button without a drawer. Build the
  // same accessible panel from that page's own navigation so every route works.
  if (mobileToggle && !mobileDrawer) {
    const nav = document.querySelector('.nav-desktop');
    if (nav) {
      mobileDrawer = document.createElement('div');
      mobileDrawer.className = 'mobile-drawer';
      mobileDrawer.id = 'mobileDrawer';
      mobileDrawer.setAttribute('role', 'dialog');
      mobileDrawer.setAttribute('aria-modal', 'true');
      mobileDrawer.setAttribute('aria-label', 'Mobil Menü');
      mobileDrawer.setAttribute('data-i18n-aria-label', 'nav.mobileMenu');
      const panel = document.createElement('div');
      panel.className = 'drawer-panel';
      drawerClose = document.createElement('button');
      drawerClose.type = 'button';
      drawerClose.className = 'drawer-close';
      drawerClose.id = 'drawerClose';
      drawerClose.setAttribute('aria-label', 'Menüyü kapat');
      drawerClose.setAttribute('data-i18n-aria-label', 'common.close');
      drawerClose.textContent = '×';
      const list = document.createElement('ul');
      list.className = 'drawer-links';
      nav.querySelectorAll('a.nav-link').forEach(link => {
        const item = document.createElement('li');
        const drawerLink = link.cloneNode(true);
        drawerLink.className = 'drawer-link' + (link.classList.contains('active') ? ' active' : '');
        item.appendChild(drawerLink);
        list.appendChild(item);
      });
      const cta = document.querySelector('.header-cta-pill');
      const drawerHeader = document.createElement('div');
      drawerHeader.className = 'drawer-header';
      const drawerBrand = document.createElement('a');
      drawerBrand.className = 'drawer-brand';
      drawerBrand.href = 'index.html';
      drawerBrand.setAttribute('aria-label', 'Dr. Ali İhsan Yaka');
      drawerBrand.innerHTML = '<img src="assets/images/psyche-structure-mark.svg" alt="" width="42" height="42" aria-hidden="true"><span><strong>Dr. Ali İhsan Yaka</strong><small data-i18n="header.sub">Doktor Klinik Psikolog • Ph.D.</small></span>';
      drawerHeader.append(drawerBrand, drawerClose);
      panel.append(drawerHeader, list);
      if (cta) {
        const ctaWrap = document.createElement('div');
        ctaWrap.className = 'drawer-cta';
        const ctaLink = cta.cloneNode(true);
        ctaLink.className = 'btn btn-primary drawer-cta-link';
        ctaLink.innerHTML = '<span data-i18n="header.ctaLong">Ön Görüşme Randevusu Al</span> <span aria-hidden="true">→</span>';
        ctaWrap.appendChild(ctaLink);
        panel.appendChild(ctaWrap);
      }
      mobileDrawer.appendChild(panel);
      document.body.appendChild(mobileDrawer);
      setLanguage(document.documentElement.lang);
    }
  }
  const drawerLinks = mobileDrawer ? mobileDrawer.querySelectorAll('.drawer-link') : [];
  if (mobileToggle && mobileDrawer) {
    mobileToggle.setAttribute('aria-controls', 'mobileDrawer');
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    mobileToggle?.setAttribute('aria-expanded', 'true');
    mobileToggle?.setAttribute('data-i18n-aria-label', 'nav.closeMenu');
    if (mobileToggle) mobileToggle.setAttribute('aria-label', translations[document.documentElement.lang]?.['nav.closeMenu'] || 'Menüyü Kapat');
    document.body.style.overflow = 'hidden';
    drawerClose?.focus();
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
    mobileToggle?.setAttribute('data-i18n-aria-label', 'nav.openMenu');
    if (mobileToggle) mobileToggle.setAttribute('aria-label', translations[document.documentElement.lang]?.['nav.openMenu'] || 'Menüyü Aç');
    document.body.style.overflow = '';
    mobileToggle?.focus();
  }

  if (mobileToggle) mobileToggle.addEventListener('click', () => {
    if (mobileDrawer?.classList.contains('is-open')) closeDrawer();
    else openDrawer();
  });
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobileDrawer?.classList.contains('is-open')) closeDrawer();
  });

  // -------------------------------------------------------------
  // 6. THOUGHT SECTION PUBLICATION FILTERING
  // -------------------------------------------------------------
  const filterTabs = document.querySelectorAll('.filter-tab');
  const pubItems = document.querySelectorAll('.pub-item-outer');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      pubItems.forEach(item => {
        const category = item.dataset.category || '';
        if (filter === 'all' || category.includes(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------
  // 7. CONSULTATION FORM (WHATSAPP HANDOFF; NO WEBSITE SUBMISSION)
  // -------------------------------------------------------------
  const form = document.getElementById('consultationForm') || document.getElementById('appointmentForm');
  const formAlertSuccess = document.getElementById('formAlertSuccess');
  const formAlertError = document.getElementById('formAlertError');

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  if (form) {
    const clearFormFieldError = (event) => {
      const field = event.target;
      if (!field?.matches?.('[aria-invalid="true"]')) return;
      field.removeAttribute('aria-invalid');
      const errorNode = field.getAttribute('aria-describedby')
        ? document.getElementById(field.getAttribute('aria-describedby'))
        : null;
      if (errorNode) { errorNode.textContent = ''; errorNode.hidden = true; }
      if (formAlertError) { formAlertError.style.display = 'none'; formAlertError.textContent = ''; }
    };
    form.addEventListener('input', clearFormFieldError);
    form.addEventListener('change', clearFormFieldError);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (formAlertSuccess) { formAlertSuccess.style.display = 'none'; formAlertSuccess.textContent = ''; }
      if (formAlertError) { formAlertError.style.display = 'none'; formAlertError.textContent = ''; }

      const nameInp = form.querySelector('[name="name"]');
      const emailInp = form.querySelector('[name="email"]');
      const serviceInp = form.querySelector('[name="serviceType"]');
      const formatInp = form.querySelector('[name="preferredFormat"]');
      const messageInp = form.querySelector('[name="message"]');
      const consentInp = form.querySelector('[name="consent"]');
      const isEn = document.documentElement.lang === 'en';
      const errors = [];
      const email = emailInp?.value.trim() || '';
      const clearFieldError = (field) => {
        if (!field) return;
        field.removeAttribute('aria-invalid');
        const errorNode = field.getAttribute('aria-describedby')
          ? document.getElementById(field.getAttribute('aria-describedby'))
          : null;
        if (errorNode) { errorNode.textContent = ''; errorNode.hidden = true; }
      };
      const setFieldError = (field, message) => {
        if (!field) return;
        field.setAttribute('aria-invalid', 'true');
        const errorNode = field.getAttribute('aria-describedby')
          ? document.getElementById(field.getAttribute('aria-describedby'))
          : null;
        if (errorNode) { errorNode.textContent = message; errorNode.hidden = false; }
      };
      [nameInp, serviceInp, consentInp].forEach(clearFieldError);

      if (!nameInp || nameInp.value.trim().length < 2) {
        const message = isEn ? 'Please enter your name.' : 'Lütfen adınızı giriniz.';
        errors.push(message);
        setFieldError(nameInp, message);
      }
      if (email && !validateEmail(email)) errors.push(isEn ? 'Please enter a valid email address.' : 'Lütfen geçerli bir e-posta adresi giriniz.');
      if (!serviceInp?.value) {
        const message = isEn ? 'Please select a service type.' : 'Lütfen bir hizmet türü seçiniz.';
        errors.push(message);
        setFieldError(serviceInp, message);
      }
      if (!consentInp?.checked) {
        const message = isEn ? 'Please acknowledge the WhatsApp handoff.' : 'Lütfen WhatsApp mesajı bilgilendirmesini onaylayınız.';
        errors.push(message);
        setFieldError(consentInp, message);
      }

      if (errors.length) {
        if (formAlertError) {
          formAlertError.innerHTML = '<strong>' + (isEn ? 'Please check:' : 'Lütfen kontrol edin:') + '</strong><ul style="margin-top:6px;padding-left:18px">' + errors.map((error) => '<li>' + error + '</li>').join('') + '</ul>';
          formAlertError.style.display = 'block';
        }
        form.querySelector('[aria-invalid="true"]')?.focus();
        return;
      }

      const label = (field, fallback) => field?.selectedOptions?.[0]?.textContent?.trim() || field?.value || fallback;
      const lines = [
        isEn ? 'Consultation inquiry' : 'Ön görüşme talebi',
        (isEn ? 'Name: ' : 'Ad Soyad: ') + nameInp.value.trim(),
        ...(email ? [(isEn ? 'Email: ' : 'E-posta: ') + email] : []),
        (isEn ? 'Requested service: ' : 'Talep: ') + label(serviceInp, ''),
        (isEn ? 'Preferred format: ' : 'Tercih edilen format: ') + label(formatInp, ''),
        ...(messageInp?.value.trim() ? [(isEn ? 'Brief note: ' : 'Kısa not: ') + messageInp.value.trim()] : []),
        '',
        isEn ? 'I will share no sensitive health or therapy information in this initial message.' : 'Bu ilk mesajda hassas sağlık veya terapi bilgisi paylaşmıyorum.'
      ];
      const whatsappUrl = 'https://wa.me/905374738433?text=' + encodeURIComponent(lines.join('\n'));
      window.location.href = whatsappUrl;
    });
  }

  // -------------------------------------------------------------
  // 8. IMAGE LIGHTBOX MODAL
  // -------------------------------------------------------------
  const lightbox = document.getElementById('imageLightbox');
  const lbImg = document.getElementById('lightboxImg');
  const lbCaption = document.getElementById('lightboxCaption');
  const lbClose = document.getElementById('lightboxClose');

  function openLightbox(src, caption) {
    if (!lightbox || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = caption || 'Zoomed View';
    if (lbCaption) lbCaption.textContent = caption || '';
    lightbox.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-active');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (lbImg) lbImg.src = '';
    }, 200);
  }

  document.querySelectorAll('img[data-zoomable]').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      openLightbox(img.src, img.alt);
    });
  });

  document.querySelectorAll('[data-zoom]').forEach(btn => {
    btn.addEventListener('click', () => {
      openLightbox(btn.dataset.zoom, btn.getAttribute('data-i18n') || 'Görsel');
    });
  });

  if (lbClose) lbClose.addEventListener('click', closeLightbox);
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox && lightbox.classList.contains('is-active')) {
      closeLightbox();
    }
  });

  // -------------------------------------------------------------
  // INITIALIZATION ON DOM READY
  // -------------------------------------------------------------
  function initDOM() {
    initSplash();

    document.querySelectorAll('.faq-accordion').forEach((accordion) => {
      const items = [...accordion.querySelectorAll('.faq-accordion-item')];
      items.forEach((item, index) => {
        const button = item.querySelector('.faq-accordion-header');
        const panel = item.querySelector('.faq-accordion-body');
        if (!button || !panel) return;
        const panelId = panel.id || `faq-answer-${index + 1}`;
        panel.id = panelId;
        button.setAttribute('aria-controls', panelId);
        const syncState = (open) => {
          item.classList.toggle('is-open', open);
          button.setAttribute('aria-expanded', String(open));
          panel.hidden = !open;
        };
        syncState(item.classList.contains('is-open'));
        button.addEventListener('click', () => {
          const shouldOpen = !item.classList.contains('is-open');
          items.forEach((other) => {
            if (other === item) return;
            const otherButton = other.querySelector('.faq-accordion-header');
            const otherPanel = other.querySelector('.faq-accordion-body');
            other.classList.remove('is-open');
            otherButton?.setAttribute('aria-expanded', 'false');
            if (otherPanel) otherPanel.hidden = true;
          });
          syncState(shouldOpen);
        });
      });
    });

  // -------------------------------------------------------------
  // 8. HERO PSYCHE PARTICLE FIELD
  // -------------------------------------------------------------
  const canvas = document.getElementById('heroParticleCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d', { alpha: true });
    const wrap = canvas.closest('.hero-particle-field');
    const logicalSize = 420;
    const renderScale = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = logicalSize * renderScale;
    canvas.height = logicalSize * renderScale;
    ctx.setTransform(renderScale, 0, 0, renderScale, 0, 0);
    let seed = 7319;
    const random = () => { seed = (seed * 48271) % 2147483647; return (seed - 1) / 2147483646; };
    const particleCount = window.matchMedia('(max-width: 760px)').matches ? 112 : 188;
    const particles = Array.from({ length: particleCount }, () => {
      const x = 20 + random() * 380;
      const y = 22 + random() * 376;
      const warmGold = random() > 0.72;
      return {
        x, y,
        vx: (random() - 0.5) * 0.13,
        vy: (random() - 0.5) * 0.13,
        phase: random() * Math.PI * 2,
        radius: 0.45 + random() * 0.78,
        alpha: 0.18 + random() * 0.24,
        tone: warmGold ? [157, 119, 66] : [83, 73, 60]
      };
    });
    let fieldTime = 0;
    let visible = false;
    let frameId = 0;
    let lastFrame = 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function drawField(animate) {
      ctx.clearRect(0, 0, logicalSize, logicalSize);
      if (animate) {
        fieldTime += 0.018;
        particles.forEach((point) => {
          point.x += point.vx + Math.sin(fieldTime + point.phase) * 0.035;
          point.y += point.vy + Math.cos(fieldTime * 0.8 + point.phase) * 0.035;
          if (point.x < 12 || point.x > logicalSize - 12) point.vx *= -1;
          if (point.y < 12 || point.y > logicalSize - 12) point.vy *= -1;
          point.x = Math.max(12, Math.min(logicalSize - 12, point.x));
          point.y = Math.max(12, Math.min(logicalSize - 12, point.y));
        });
      }

      const neighborCounts = new Uint8Array(particles.length);
      const cellSize = 34;
      const maxDistanceSquared = cellSize * cellSize;
      const buckets = new Map();
      particles.forEach((point, index) => {
        const cellX = Math.floor(point.x / cellSize);
        const cellY = Math.floor(point.y / cellSize);
        const key = `${cellX},${cellY}`;
        if (!buckets.has(key)) buckets.set(key, []);
        buckets.get(key).push(index);
      });

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        const cellX = Math.floor(a.x / cellSize);
        const cellY = Math.floor(a.y / cellSize);
        for (let offsetY = -1; offsetY <= 1; offsetY++) {
          for (let offsetX = -1; offsetX <= 1; offsetX++) {
            const candidates = buckets.get(`${cellX + offsetX},${cellY + offsetY}`) || [];
            for (const j of candidates) {
              if (j <= i || neighborCounts[i] >= 3 || neighborCounts[j] >= 3) continue;
              const b = particles[j];
              const dx = a.x - b.x, dy = a.y - b.y;
              const distanceSquared = dx * dx + dy * dy;
              if (distanceSquared > maxDistanceSquared) continue;
              const distance = Math.sqrt(distanceSquared);
              const edge = Math.max(0, 1 - distance / cellSize);
              const alpha = (0.045 + edge * 0.09) * Math.min(a.alpha, b.alpha) / 0.42;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(132, 105, 69, ${alpha.toFixed(3)})`;
              ctx.lineWidth = 0.35 + edge * 0.22;
              ctx.stroke();
              neighborCounts[i]++;
              neighborCounts[j]++;
            }
          }
        }
      }

      particles.forEach((point) => {
        const shimmer = animate ? 0.82 + (Math.sin(fieldTime * 1.4 + point.phase) + 1) * 0.09 : 0.88;
        const alpha = point.alpha * shimmer;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${point.tone.join(',')}, ${alpha.toFixed(3)})`;
        ctx.fill();
      });
    }
    function animateParticles(time) {
      frameId = 0;
      if (!visible || document.hidden || reducedMotion.matches) return;
      const frameInterval = window.matchMedia('(max-width: 760px)').matches ? 48 : 33;
      if (time - lastFrame >= frameInterval) { drawField(true); lastFrame = time; }
      frameId = requestAnimationFrame(animateParticles);
    }
    function updateMotion() {
      if (visible && !document.hidden && !reducedMotion.matches && !frameId) frameId = requestAnimationFrame(animateParticles);
      else if ((!visible || document.hidden || reducedMotion.matches) && frameId) { cancelAnimationFrame(frameId); frameId = 0; }
      if (reducedMotion.matches) drawField(false);
    }
    if (wrap && 'IntersectionObserver' in window) {
      new IntersectionObserver(entries => { visible = entries.some(entry => entry.isIntersecting); updateMotion(); }, { threshold: 0.05 }).observe(wrap);
    } else { visible = true; }
    document.addEventListener('visibilitychange', updateMotion);
    reducedMotion.addEventListener?.('change', updateMotion);
    drawField(false);
    updateMotion();
  }

  // Card tilt listeners were removed: stable hover feedback is handled in CSS.
  const psycheModel = document.querySelector('[data-psyche-model]');
  if (psycheModel) {
    const svg = psycheModel.querySelector('.psyche-diagram-svg');
    const dots = svg ? [...svg.querySelectorAll('.psyche-motion-points animateMotion')] : [];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    let started = false;
    const syncPsycheMotion = () => {
      const play = inView && !document.hidden && !reduceMotion.matches;
      psycheModel.dataset.active = play ? 'true' : 'false';
      if (!dots.length) return;
      if (play && !started) {
        dots.forEach((animation, index) => window.setTimeout(() => animation.beginElement(), index * 1800));
        started = true;
      } else if (!play && svg && started) {
        svg.pauseAnimations();
      } else if (play && svg && started) {
        svg.unpauseAnimations();
      }
    };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => {
        inView = entries.some(entry => entry.isIntersecting);
        syncPsycheMotion();
      }, { threshold: 0.12 }).observe(psycheModel);
    } else {
      inView = true;
      syncPsycheMotion();
    }
    document.addEventListener('visibilitychange', syncPsycheMotion);
    reduceMotion.addEventListener?.('change', syncPsycheMotion);
  }

    setLanguage(savedLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDOM);
  } else {
    initDOM();
  }
})();
