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
    "page.researchTitle": "Psikanalitik Araştırmalar | Dr. Ali İhsan Yaka",
    "meta.researchDescription": "Psikanalitik araştırmalar, topolojik şemalar ve bilinçdışı üzerine görsel notlar. Dr. Ali İhsan Yaka.",
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
    "splash.quote": "“Bilinçdışı bir dil gibi yapılanmıştır.” <a href='https://oyc.yale.edu/english/engl-300/lecture-13' target='_blank' rel='noopener'>— Jacques Lacan ↗</a>",
    "splash.supportQuote": "“Benlik, kendi evinin efendisi değildir.” <a href='https://www.freudedition.net/werke/one-difficulties-psycho-analysis/druckschrift-0' target='_blank' rel='noopener'>— Sigmund Freud ↗</a>",
    "splash.scholarTitle": "Yetişkinler için psikanalitik psikoterapi • Klinik süpervizyon",
    "splash.enterBtn": "Çalışmaları keşfet ↓",
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.services": "Hizmetler",
    "nav.fieldwork": "Saha Çalışmaları",
    "nav.publications": "Yayınlar",
    "nav.research": "Araştırmalar",
    "research.eyebrow": "ARAŞTIRMA · ŞEMA · NOTLAR",
    "research.title": "Psikanalitik Araştırmalar",
    "research.lead": "Kavramları sabit bir diyagram olarak değil, birbirine bağlanan ilişkiler ve dönüşümler olarak okumak için görsel notlar.",
    "research.mapModel": "Güncel model", "research.mapTheory": "Kuramsal notlar", "research.mapSchemas": "Ek şemalar", "research.mapReading": "Okuma önerileri",
    "research.openTheory": "Kuramsal çerçeve ve ruhsal yapılar", "research.openSupplement": "Yayın, yöntem, klinik notlar ve diğer şemalar",
    "research.currentModelTitle": "Sözden Ruhsal Yapıya: Güncel Web Şeması", "research.currentFigureLabel": "GÜNCEL WEB ŞEMASI · SON REVİZYON", "research.modelStructure": "Modelin yapısı",
    "research.readingEyebrow": "OKUMA ÖNERİLERİ", "research.readingTitle": "Psikanaliz için seçilmiş okumalar", "research.readingLead": "Kuramsal metinlere ve klinik giriş kaynaklarına doğrudan erişim.",
    "research.readingPublisher": "Norton yayıncı sayfası ↗", "research.readingCatalog": "NLM katalog kaydı ↗", "research.readingAuthor": "Yazarın kitap listesi ↗", "research.readingText": "Freud metni ↗",
    "home.reflectionLabel": "ÇALIŞMA YAKLAŞIMI", "home.reflectionText": "Ruhsal yaşantıyı kişinin sözleri, ilişkileri ve içinde bulunduğu toplumsal bağlamla birlikte dinlemek.",
    "psyche.homeLink": "Şemayı ve araştırma notlarını keşfedin ↗",
    "psyche.mode2d": "2B Şema (Güncel Model)",
    "psyche.mode3d": "3D Halini Gör",
    "nav.faq": "SSS",
    "nav.faqDrawer": "Sıkça Sorulan Sorular (SSS)",
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
    "psyche.message": "Baba Metaforu",
    "psyche.messageText": "Mesaj · Ayna Evresi",
    "psyche.fall": "Simgeselden Düşme",
    "psyche.unrecognized": "Simgeselde Tanı(n)mama",
    "psyche.recognized": "Simgeselde Tanı(n)ma",
    "psyche.code": "Baba-nın-Adları",
    "psyche.codeText": "Kod · Ruhsal Yapılar",
    "psyche.psychotic": "Psikotik",
    "psyche.perverse": "Pervert",
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
    "psyche.ayna": "Ayna Evresi",
    "psyche.structureHeading": "Ruhsal Yapılar",
    "psyche.captionText": "Şema, Dr. Ali İhsan Yaka’nın “Psikotik Yapı ve Baba İşlevi” çalışmasından uyarlanmıştır.",
    "psyche.captionLink": "2024 tarihli makaleyi inceleyin ↗",
    "psyche.researchPrompt": "Makalede yer alan diğer şemalar ve açıklamalar için",
    "psyche.motionNote": "Üst S2 hattı sağdan sola döner; alt S2 hattı soldan sağa bağlar. Mesaj yatayda soldan sağa ilerler; Ayna Evresi oku aşağı, S1 kodlama vektörleri yukarı yönelir.",
    "psyche.panHint": "Şemayı yatay kaydırarak tüm akışları izleyin ↔",
    "psyche.mobileMessageFlow": "Mesaj · soldan sağa",
    "psyche.mobileCodeFlow": "Kodlama · aşağıdan yukarı",
    "psyche.mobileUpperLoop": "Üst döngü · sağdan sola",
    "psyche.mobileLowerLoop": "Alt döngü · soldan sağa",
    "psyche.mobileAria": "Psikanalitik şema: mobil görünüm",
    "psyche.mobileRealOnly": "İmgesel, …",
    "psyche.mobileRealImaginary": "İmgesel, Gerçek, …",
    "psyche.mobileRealImaginarySymbolic": "İmgesel, Gerçek, Simgesel",
    "psyche.sourceDiagram": "Özgün şemayı PDF olarak aç ↗",
    "psyche.loopNote": "Üst ve alt döngüler gösteren zincirini bağlar.",
    "hero.eyebrow": "LACANYEN YÖNELİMLİ PSİKOTERAPİ • KLİNİK SÜPERVİZYON",
    "hero.title": "Lacanyen yönelimli psikoterapi ve klinik süpervizyon.",
    "hero.quote": "“Bilinçdışı bir dil gibi yapılanmıştır.” <span>— Jacques Lacan</span>",
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
    "hero.portraitTitle": "Doktor Klinik Psikolog, Psikanalist ve Süpervizör • Buffalo CSPC, 2026",
    "hero.portraitLangs": "Diller: Türkçe • İngilizce C1 İleri Düzey • Kurmancî",
    "whatsNew.eyebrow": "GÜNCEL AKADEMİK ÇALIŞMALAR & ETKİNLİKLER",
    "whatsNew.title": "Güncel Duyurular & Akademik Etkinlikler",
    "whatsNew.subtitle": "Klinik psikanaliz, travma ve söylem analizi alanındaki güncel sempozyum ve yayınlar.",
    "whatsNew.card1Date": "2 MAYIS 2026 • BUFFALO, NEW YORK",
    "whatsNew.card1Title": "CSPC Sempozyumu: Dildeki Paranoid Boyut ve Soykırım",
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
    "practice.p3Num": "03 / EĞİTİM & SEMİNER",
    "practice.p3Title": "Seminerler & Psikanalitik Eğitimler",
    "practice.p3Desc": "Üniversiteler, meslek dernekleri ve sivil toplum kuruluşları için Lacanyen psikanaliz, klinik vaka formülasyonu ve travma kuramı seminerleri ve eğitim programları.",
    "practice.p3Tag": "Seminer & Eğitim",
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
    "practice.p3f1": "Üniversiteler ve dernekler için davetli konferanslar",
    "practice.p3f2": "Klinik vaka formülasyonu ve dinleme atölyeleri",
    "practice.p3f3": "Saha çalışanları için kriz ve travma seminerleri",
    "practice.p3f4": "Kurumsal ve akademik grup eğitimleri",
    "practice.featurePill": "KLİNİK FORMÜLASYON & DİLE GELEN ARZU",
    "practice.featureOrientation": "LACANYEN PSİKANALİTİK YÖNELİM",
    "practice.featureTitle": "Semptomun Ardındaki Öznel Anlam",
    "practice.featureDesc": "Psikanalitik çalışmada semptom, hızla susturulması gereken bir arıza olarak değil; kişinin yaşam öyküsünde, dilinde ve ilişkilerinde taşıdığı öznel anlamla dinlenir.",
    "practice.featureQuote": "Hazır reçeteler ya da standart protokoller yerine, her öznenin kendi sözüne, tekrar eden düğümlerine ve tekil arzusuna alan açan bir çalışma çerçevesi kurulur.",
    "practice.featureAxesAria": "Klinik çalışma eksenleri",
    "practice.featureAxis1Tag": "I · ANALİTİK DİNLEME",
    "practice.featureAxis1Title": "Söz ve Serbest Çağrışım",
    "practice.featureAxis1Desc": "Dil sürçmeleri, duraksamalar ve söylemdeki kırılmalar üzerinden bilinçdışı konumun duyulması.",
    "practice.featureAxis2Tag": "II · YAPISAL OKUMA",
    "practice.featureAxis2Title": "Öznel Konum ve Tekrar",
    "practice.featureAxis2Desc": "Semptomun ruhsal yapıdaki işlevinin ve ilişkisel döngülerin tekil bağlamda kavramsallaştırılması.",
    "practice.featureAxis3Tag": "III · KLİNİK ÇERÇEVE",
    "practice.featureAxis3Title": "Etik Sınırlar ve Ritim",
    "practice.featureAxis3Desc": "Gizlilik ilkesi, seans sıklığı ve öznel zamansallığın ilk görüşmelerden itibaren birlikte kurulması.",
    "practice.featureBtn": "Ön Görüşme Talep Et",
    "practice.featureMoreLink": "Klinik yaklaşımı ve çerçeveyi incele",
    "practice.featureLangs": "Türkçe • English • Kurmancî",
    "practice.featureCaptionRole": "Doktor Klinik Psikolog • Psikanalitik Psikoterapi & Süpervizyon",
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
    "contact.subtitle": "Bireysel psikanalitik psikoterapi, süpervizyon veya kurumsal çalışmalar için doğrudan iletişime geçebilir ya da ön görüşme formunu doldurabilirsiniz.",
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
    "contact.formBadge": "WHATSAPP İLE ÖN GÖRÜŞME PROTOKOLÜ",
    "contact.formDesc": "Form, WhatsApp’ta inceleyip kendiniz gönderebileceğiniz bir mesaj hazırlar. Bu site form bilgilerini almaz veya saklamaz.",
    "contact.formName": "Adınız ve Soyadınız *",
    "contact.formNamePlaceholder": "Örn. Dr. Deniz Demir",
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
    "contact.formMessagePlaceholder": "Kısaca başvuru gerekçeniz veya uygun olduğunuz saatler...",
    "contact.formSensitiveNote": "Lütfen bu alana sağlık veya terapi ayrıntısı yazmayın.",
    "contact.formConsent": "WhatsApp’ta açılacak mesajı inceleyip kendim göndereceğim.",
    "contact.formPrivacyLink": "Gizlilik açıklaması",
    "contact.formSubmit": "WhatsApp Mesajı Hazırla",
    "contact.reassurance": "WhatsApp açılır; siz Gönder’e basmadıkça mesaj iletilmez. Bu site form bilgilerini almaz veya saklamaz.",
    "contact.eyebrowSub": "ONLINE & YÜZ YÜZE GÖRÜŞMELER",
    "contact.trustConfidential": "Etik Çerçeve & Mutlak Gizlilik",
    "contact.trustResponse": "24 Saat İçinde Doğrudan Dönüş",
    "contact.trustLocation": "TRT (UTC+3) Online & İstanbul",
    "contact.step1": "Formu Doldurun",
    "contact.step2": "WhatsApp'ta İnceleyin",
    "contact.step3": "Kendiniz İletin",
    "contact.ethicsTitle": "Klinik Çerçeve ve Acil Durum Bilgilendirmesi",
    "contact.ethicsText": "Bu iletişim kanalları ve ön görüşme formu acil kriz müdahalesi için uygun değildir. Kendinize veya bir başkasına zarar verme riski taşıyan acil psikiyatrik kriz durumlarında lütfen en yakın sağlık kuruluşunun acil servisine başvurunuz veya 112 Acil Çağrı / Alo 183 / 182 hatlarını arayınız.",

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
    "news.bogaziciBadge": "DAVETLİ KONUŞMACI &bull; BOĞAZİÇİ ÜNİVERSİTESİ XI. PSİKOLOJİ GÜNÜ",
    "news.bogaziciLocation": "27 NİSAN 2025 &bull; ALBERT LONG HALL, İSTANBUL",
    "news.bogaziciTitle": "XI. Psikoloji Günü: Yalnızlık ve Psikanalitik Perspektif",
    "news.bogaziciSubtitle": "“Psikopatolojik Yalnızlıktan Subjektif Toplumsallığa: Psikanalitik Öznelleşme Deneyimi”",
    "news.bogaziciDesc": "Boğaziçi Üniversitesi Psikoloji Topluluğu davetiyle gerçekleştirilen bu konuşma; yalnızlığı salt bir sosyal soyutlanma ya da psikopatolojik semptom olarak değil, Lacanyen psikanalitik kuramın <strong>Ayna Evresi (Le stade du miroir)</strong>, imgesel yabancılaşma ve simgesel öznelleşme diyalektiği üzerinden irdeler. Bireyin Öteki (l'Autre) ile kurduğu bağın, psikopatolojik yalnızlıktan öznel toplumsallığa dönüşüm olanakları kürsü ve sunum şemaları eşliğinde tartışılmıştır.",
    "news.bogaziciTag1": "✦ Ayna Evresi (Le stade du miroir)",
    "news.bogaziciTag2": "✦ Lacanyen Psikanaliz",
    "news.bogaziciTag3": "✦ Simgesel Düzen &amp; Öteki",
    "news.bogaziciTag4": "✦ Öznel Toplumsallaşma",
    "news.bogaziciCta": "Akademik Çalışmaları İncele",
    "news.bogaziciCitationLink": "Yayın Kaydı: Yaka, A. İ. (2025) &rarr;",
    "news.bogaziciStageBadge": "KÜRSÜ &amp; SALON &bull; BOĞAZİÇİ ÜNİVERSİTESİ",
    "news.bogaziciStageCaption": "Boğaziçi Üniversitesi XI. Psikoloji Günü · 27 Nisan 2025",
    "news.bogaziciStageDesc": "Albert Long Hall, Davetli Konuşmacı Açılış Oturumu",
    "news.bogaziciSlideBadge": "✦ SUNUM SLAYDI &bull; AYNA EVRESİ",
    "news.bogaziciSlideTitle": "Ayna Evresi Sunumundan",
    "news.bogaziciSlideDesc": "Simgesel Düzen ve Psikanalitik Perspektif",
    "news.bogaziciSpeakerBadge": "ÖZNELLEŞME DENEYİMİ",
    "news.bogaziciSpeakerTitle": "Yalnızlık ve Psikanalitik Perspektif",
    "news.bogaziciSpeakerDesc": "Öznel Toplumsallaşma Tartışması",
    "news.bogaziciZoomHint": "Büyüt",
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
    "practice.methodEthics": "Bireysel mahremiyet, gizlilik ve Lacanyen etik ilkeler rehberliğinde",
    "practice.methodStep1": "Dinleme",
    "practice.methodStep1Desc": "Başvuru nedenine ve kişinin kendi sözcüklerine alan açmak.",
    "practice.step1Pill": "Serbest Çağrışım",
    "practice.methodStep2": "Kavramsallaştırma",
    "practice.methodStep2Desc": "Tekrarlayan güçlükleri ve semptomun taşıyabileceği öznel anlamı konuşmak.",
    "practice.step2Pill": "Bilinçdışı Anlam",
    "practice.methodStep3": "Çerçeve",
    "practice.methodStep3Desc": "Görüşme sıklığını, biçimini ve gizlilik sınırlarını birlikte belirlemek.",
    "practice.step3Pill": "Etik Çerçeve",
    "practice.inclusiveEyebrow": "ÇALIŞMA YAKLAŞIMI",
    "practice.inclusiveTitle": "Kapsayıcı ve kültüre duyarlı bir alan",
    "practice.inclusiveDesc": "Çalışma, kişinin kendi yaşam öyküsünü, dilini ve kültürel bağlamını gözeten; LGBTQI+ bireyleri kapsayıcı ve onaylayıcı bir yaklaşımla yürütülür. Her görüşmenin çerçevesi ve ihtiyaçları kişiyle birlikte ele alınır.",
    "practice.focusAreas": "Yetişkinlerle çalışmada ele alınan temel başlıklar: kaygı ve anksiyete, panik atak, takıntılar (OKB), travma ve yas, korkular ve fobiler, depresif belirtiler, kendine zarar verme eğilimleri, odaklanma güçlükleri (DEHB), bağımlılıklar, ilişki ve bağlanma sorunları.",
    "practice.inclusivePillar1Title": "Kültürel ve Dilsel Bağlam",
    "practice.inclusivePillar1Tag": "TR · EN · Kurmancî",
    "practice.inclusivePillar1Desc": "Kişinin kendi yaşam öyküsünü, ana dilini ve içinde yetiştiği toplumsal-kültürel bağlamı gözeten analitik dinleme.",
    "practice.inclusivePillar2Title": "LGBTQI+ Kapsayıcı ve Onaylayıcı Yaklaşım",
    "practice.inclusivePillar2Tag": "Onaylayıcı Etik",
    "practice.inclusivePillar2Desc": "Cinsiyet kimliği ve cinsel yönelim çeşitliliğini patolojize etmeyen, öznel deneyimi onaylayıcı ve güvenli klinik alan.",
    "practice.inclusivePillar3Title": "Özneyle Birlikte Kurulan Çerçeve",
    "practice.inclusivePillar3Tag": "İşbirlikçi Süreç",
    "practice.inclusivePillar3Desc": "Her görüşmenin ritmi, çerçevesi ve öncelikli ihtiyaçları standart kalıplarla değil, kişiyle birlikte değerlendirilir.",
    "practice.focusAreasHeading": "YETİŞKİNLERLE ÇALIŞMADA ELE ALINAN TEMEL BAŞLIKLAR",
    "practice.focusAreasSub": "Bireysel psikanalitik psikoterapi ve klinik danışmanlık sürecinde çalışılan başlıca başvuru alanları",
    "practice.focusAreasCount": "10 Klinik Başlık",
    "practice.topic1Title": "Kaygı ve Anksiyete",
    "practice.topic1Desc": "Süregelen endişe, belirsizlik intoleransı ve içsel huzursuzluk döngüleri",
    "practice.topic2Title": "Panik Atak",
    "practice.topic2Desc": "Ani bedensel sıkışma, çarpıntı ve kontrol kaybı korkusunun analizi",
    "practice.topic3Title": "Takıntılar (OKB)",
    "practice.topic3Desc": "Tekrarlayan düşünceler, şüphe döngüleri ve zorlantılı ritüeller",
    "practice.topic4Title": "Travma ve Yas",
    "practice.topic4Desc": "Kayıp süreçleri, sarsıcı yaşantılar ve toplumsal travma izleri",
    "practice.topic5Title": "Korkular ve Fobiler",
    "practice.topic5Desc": "Belirli nesne veya durumlara yönelen yoğun kaçınma ve semptom yapısı",
    "practice.topic6Title": "Depresif Belirtiler",
    "practice.topic6Desc": "İsteksizlik, anlam yitimi, çökkünlük ve öznel yalnızlık deneyimi",
    "practice.topic7Title": "Kendine Zarar Verme Eğilimleri",
    "practice.topic7Desc": "Dile gelemeyen ruhsal acının bedensel eyleme dönüşümü ve dürtüsellik",
    "practice.topic8Title": "Odaklanma Güçlükleri (DEHB)",
    "practice.topic8Desc": "Dikkat dağınıklığı, erteleme ve zihinsel meşguliyet örüntüleri",
    "practice.topic9Title": "Bağımlılıklar",
    "practice.topic9Desc": "Tekrarlayan nesne, madde veya davranış bağımlılığı döngüleri",
    "practice.topic10Title": "İlişki ve Bağlanma Sorunları",
    "practice.topic10Desc": "Yakınlık, sınırlar, terk edilme kaygısı ve tekrarlayan ilişki çıkmazları",
    "practice.focusFooterNote": "Tanı etiketlerinin ötesinde, her semptom kişinin kendi öznel tarihi içinde dinlenir.",
    "practice.focusFooterCta": "Ön Görüşme Planla",
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
    "practice.profileOrientation": "LACANYEN PSİKANALİTİK YÖNELİM",
    "practice.profileCaptionSub": "Doktor Klinik Psikolog • University at Buffalo (SUNY) CSPC, 2026",
    "practice.profileTitle": "Analitik Dinleme ve Semptomun Anlamı",
    "practice.profileDesc": "Lacanyen psikanalitik yönelim; danışanın şikâyet ettiği semptomu susturulması gereken bir arıza olarak değil, bilinçdışı arzunun ve dile gelemeyen çatışmaların bedendeki ya da ilişkilerdeki şifrelenmiş sözü olarak ele alır. Seanslar, standart reçeteler uygulamak yerine kişinin kendi arzusunun sorumluluğunu üstlenmesine eşlik eder.",
    "practice.profileEthos": "Her başvuru, kişinin kendi sözcükleri, öznel zamansallığı ve tekil yaşam öyküsü içinde; gizlilik ve mesleki etik sınırlar gözetilerek dinlenir.",
    "practice.profileCredsAria": "Akademik denklik ve sürekli eğitim bilgileri",
    "practice.profileCred1Tag": "WES · DOKTORA DENKLİĞİ",
    "practice.profileCred1Title": "ABD Doktora Eşdeğerliği",
    "practice.profileCred1Desc": "WES doktora eşdeğerliği değerlendirmesi ile doğrulanmış klinik psikoloji doktora derecesi (ODTÜ Ph.D.).",
    "practice.profileCred2Tag": "NYSED · EĞİTİM KOŞULU",
    "practice.profileCred2Title": "İlk Eğitim Koşulu & Formasyon",
    "practice.profileCred2Desc": "NYSED eğitim koşullarından ilkini karşıladı; ek psikanalitik eğitim sürüyor.",
    "practice.profileCred3Tag": "APsA · SÜREKLİ EĞİTİM",
    "practice.profileCred3Title": "APsA 2026 Sürekli Eğitim Kredisi",
    "practice.profileCred3Desc": "American Psychoanalytic Association 2026 Ulusal Toplantısı kapsamında kayıtlı 44,5 saat sürekli eğitim kredisi.",
    "practice.profileCredentials": "WES doktora eşdeğerliği değerlendirmesi • NYSED eğitim koşullarından ilkini karşıladı; ek psikanalitik eğitim sürüyor • APsA 2026 sürekli eğitim kredisi",
    "practice.profileCta": "Ön Görüşme Talep Et",
    "practice.profileVerifyLink": "Akademik doğrulama ve belgeler",
    "practice.profileLangs": "Türkçe • English (C1) • Kurmancî",
    "practice.pillarsEyebrow": "HİZMET ALANLARI & KLİNİK UZMANLIK",
    "practice.pillarsTitle": "Üç Temel Klinik & Kurumsal Çalışma Alanı",
    "practice.pillarsSubtitle": "Bireysel psikanalitik psikoterapiden mesleki süpervizyona ve kurumsal saha travma danışmanlığına uzanan derinlikli uzmanlık.",
    "practice.card1Number": "01 / PSİKANALİZ & TERAPİ",
    "practice.card1Title": "Bireysel Psikanalitik Psikoterapi",
    "practice.card1Desc": "Yetişkin bireylerle birebir yürütülen derinlikli psikanalitik psikoterapi seansları. Serbest çağrışım kuralı rehberliğinde; kaygı, yas, ilişkisel tıkanıklıklar, takıntılar ve kimlik çatışmalarının kökenindeki bilinçdışı dinamiklerin çözümlenmesi.",
    "practice.card1Item1": "Serbest çağrışım ve sözün yakından dinlenmesi",
    "practice.card1Item2": "Lacanyen noktalama ve seans ritmi",
    "practice.card1Item3": "Tekrarlayan döngüler ve arzu çıkmazlarının analizi",
    "practice.card1Item4": "Türkçe, English (C1) ve Kurmancî dillerinde seans seçeneği",
    "practice.card1Format": "<strong>Format:</strong> Görüşme biçimi ve güncel yüz yüze uygunluk, randevu öncesinde teyit edilir.",
    "practice.card1Cta": "Ön Görüşme Talep Et",
    "practice.card2Number": "02 / SÜPERVİZYON",
    "practice.card2Title": "Klinik Süpervizyon & Vaka Formülasyonu",
    "practice.card2Desc": "Klinik psikologlar, psikoterapistler, psikiyatri hekimleri ve danışmanlar için vaka süpervizyonu. Danışanın söylemindeki yapıyı kavrama, aktarım ve karşı-aktarım düğümlerini çözme ve terapistin analitik duruşunu pekiştirme.",
    "practice.card2Item1": "psikanalitik vaka formülasyonu (Nevroz, Psikoz, Perversiyon)",
    "practice.card2Item2": "Aktarımın yönlendirilmesi ve analistin arzusu",
    "practice.card2Item3": "Ağır travma ve kriz vakalarında ikincil travma koruması",
    "practice.card2Item4": "Bireysel veya 2–4 kişilik küçük kapalı grup formatı",
    "practice.card2Scope": "<strong>Kapsam:</strong> ODTÜ AYNA Klinik Psikoloji Destek Birimi deneyimiyle.",
    "practice.card2Cta": "Süpervizyon Başvurusu",
    "practice.card3Number": "03 / MHPSS & EĞİTİM",
    "practice.card3Title": "Saha & Kurumsal Travma Danışmanlığı",
    "practice.card3Desc": "İnsani yardım kuruluşları, STK’lar, kriz ekipleri ve afet sahasında görev yapan saha personeli için kurumsal psikososyal destek (MHPSS) ve travma yönetimi danışmanlığı.",
    "practice.card3Item1": "MHPSS programı ve kurum içi kapasite geliştirme danışmanlığı",
    "practice.card3Item2": "Merhamet yorgunluğu ve tükenmişlik önleme protokolleri",
    "practice.card3Item3": "IASC Rehberi standartlarında saha programlama",
    "practice.card3Item4": "Irak, Güney Sudan ve 6 Şubat Deprem Sahası deneyimi",
    "practice.card3Scope": "<strong>Kurumsal:</strong> Kuruma ve ihtiyaca özel tasarlanmış atölyeler.",
    "practice.card3Cta": "Kurumsal Danışmanlık İste",
    "practice.frameEyebrow": "ÇERÇEVE VE GİZLİLİK",
    "practice.frameTitle": "Klinik Çerçeve & Mesleki Gizlilik",
    "practice.frameDesc": "Klinik çalışma başlamadan önce görüşme çerçevesi, gizlilik ve bunun sınırları birlikte konuşulur.",
    "practice.frameItem1": "✓ <strong>Çerçeve:</strong> Görüşme sıklığı ve yöntemi kişiyle konuşularak planlanır.",
    "practice.frameItem2": "✓ <strong>Gizlilik:</strong> Gizlilik koşulları ve sınırları ilk görüşme öncesinde açıklığa kavuşturulur.",
    "practice.frameItem3": "✓ <strong>Online görüşmeler:</strong> Kullanılacak platform ve teknik koşullar randevu öncesinde netleştirilir.",
    "practice.frameItem1Title": "Analitik Çerçeve & Sıklık",
    "practice.frameItem1Desc": "Görüşme sıklığı ve yöntemi kişiyle konuşularak planlanır.",
    "practice.frameItem2Title": "Mesleki ve Etik Gizlilik",
    "practice.frameItem2Desc": "Gizlilik koşulları ve sınırları ilk görüşme öncesinde açıklığa kavuşturulur.",
    "practice.frameItem3Title": "Online & Dijital Güvenlik",
    "practice.frameItem3Desc": "Kullanılacak platform ve teknik koşullar randevu öncesinde netleştirilir.",
    "practice.feesEyebrow": "GÖRÜŞME ÇERÇEVESİ",
    "practice.feesTitle": "Ücret ve Uygunluk",
    "practice.feesDesc": "Görüşme ücretleri ve güncel uygunluk ilk görüşme öncesinde doğrudan iletişimle netleştirilir.",
    "practice.feesPoint1Title": "Doğrudan İletişim:",
    "practice.feesPoint1Desc": "İlk görüşme öncesinde seans bedeli ve uygunluk takvimi doğrudan paylaşılır.",
    "practice.feesPoint2Title": "Seans Formatı:",
    "practice.feesPoint2Desc": "Online (görüntülü) ve yüz yüze uygunluk durumu başvuru sırasında değerlendirilir.",
    "practice.feesPoint3Title": "Veri Koruma:",
    "practice.feesPoint3Desc": "Gizlilik gereği formda hiçbir hassas sağlık veya terapi detayı talep edilmez.",
    "practice.feesCta": "Ücret ve Uygunluk Hakkında Bilgi Al",
    "practice.feesReassurance": "İlk görüşme öncesi tüm sorularınız doğrudan yanıtlanır.",
    "practice.faqEyebrow": "KLİNİK SÜREÇ & ÇERÇEVE",
    "practice.faqTitle": "Ön Görüşme ve Seans Çerçevesi",
    "practice.faq1Desc": "Psikanalitik çalışma, danışan ile analist arasında karşılıklı bir tanışma niteliği taşıyan ön görüşme (ilk seans) ile başlar. Bu ilk buluşmada danışanın terapiye geliş sebebi, beklentileri ve psikanalitik çalışmaya uygunluğu birlikte değerlendirilir; seans sıklığı, çalışma dili ve analitik çerçevenin temel esasları netleştirilir.",
    "practice.faq2Desc": "Görüşmeler, danışanın ihtiyaçlarına ve coğrafi koşullarına bağlı olarak yüz yüze veya çevrim içi (online) olarak yürütülür. Online seansların sizin için uygunluğu ilk görüşmede ele alınırken; kullanılacak platform, saat dilimi ve güncel randevu uygunluğu süreç öncesinde karşılıklı olarak netleştirilir.",
    "practice.faq3Desc": "Öznenin kendi hakikatine ve bilinçdışı süreçlerine temas edebilmesi için dil kurucu bir öneme sahiptir. Bu doğrultuda seanslar, danışanın kendisini en rahat, sansürsüz ve sahici biçimde ifade edebildiği dilde; <strong>Türkçe</strong>, <strong>İngilizce</strong> veya <strong>Kurmancî</strong> olarak gerçekleştirilmektedir.",
    "practice.faqCtaTitle": "İlk adımı birlikte planlayalım.",
    "practice.faqCtaNote": "Ön görüşme detayları ve uygunluk için doğrudan iletişime geçebilirsiniz.",
    "practice.faqCta": "Ön Görüşme Randevusu Başlat",
    "about.eventGalleryPhoto1": "Boğaziçi Üniversitesi XI. Psikoloji Günü’nde, “Yalnızlık ve Psikanalitik Perspektif” sunumundan.",
    "about.eventGalleryPhoto2": "Boğaziçi Üniversitesi’nde “Psikopatolojik Yalnızlıktan Subjektif Toplumsallığa” başlıklı konuşma sırasında.",
    "about.eventGalleryCaption1": "Yalnızlık ve psikanalitik perspektif",
    "about.eventGalleryCaption2": "XI. Psikoloji Günü · 27 Nisan 2025",
    "about.bogaziciKicker": "SEÇİLMİŞ SUNUM · 27 NİSAN 2025",
    "about.ipaInstTag": "International Psychoanalytical Association",
    "about.ipaDurationChip": "12 Aylık Proje",
    "about.ipaScopeChip": "Toplumsal Travma & Saha",
    "about.aynaInstTag": "ODTÜ · DergiPark Akademik",
    "about.peerCertId": "DergiPark Hakemlik Belgesi · ID: 1817613",
    "about.peerCertView": "Belgeyi gör ↗",
    "about.peerCertVerify": "Doğrula ↗",
    "about.peerRoleChip": "ULAKBİM Hakemli Dergi",
    "about.peerScopeChip": "Klinik Psikanaliz & Kuram",
    "about.baGradNote": "Psikoloji lisans mezuniyeti (2005) ve ulusal psikoloji öğrenci kongreleri dönemi.",
    "about.baGradPhotoTitle": "Lisans Mezuniyeti (2005)",
    "about.baGradPhotoSub": "Büyütmek için tıklayın",
    "about.hiMissionOrderLink": "Görev Belgesi (PDF) ↗",
    "fieldwork.2020.missionOrder": "Resmi Görevlendirme Belgesi (Ordre de Mission · PDF) ↗",
    "fieldwork.2017.certLink": "Erbil İleri Psikososyal Destek Eğitim Sertifikası (ACF · PDF) ↗",
    "about.pubCountBadge": "4 Hakemli Yayın",
    "about.pubArchiveLink": "Arşiv ↗",
    "about.pubIndexNote": "DergiPark · ULAKBİM · Google Scholar · ORCID",
    "about.talksBadge": "Kongre & Sempozyum Kayıtları",
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
    "footer.brandSub": "Doktor Klinik Psikolog, Psikanalist ve Süpervizör",
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
    "pub.heroEyebrow": "YAYINLAR & AKADEMİK ÜRETİM",
    "pub.heroSubBadge": "HAKEMLİ ARŞİV • TEZ • BİLDİRİLER",
    "pub.heroTitle": "Yayınlar, Tezler & Bildiriler",
    "pub.heroLead": "Psikanalitik kuram, dil, baba işlevi ve toplumsal travmanın klinik kavramsallaştırması üzerine hakemli makaleler ve sunumlar.",
    "pub.axesAria": "Kuramsal araştırma eksenleri",
    "pub.axis1Kicker": "EKSEN 01 • YAPI & DİL",
    "pub.axis1Title": "Baba İşlevi & Ruhsal Yapılar",
    "pub.axis1Desc": "Psikoz ve obsesyonel nevrozda gösteren zinciri, Babanın-Adı ve menetme (forclusion).",
    "pub.axis2Kicker": "EKSEN 02 • SÜPERVİZYON",
    "pub.axis2Title": "Söylem & Klinik Dinleme",
    "pub.axis2Desc": "Kriz ve saha koşullarında çalışan klinisyenlerin aktarım çıkmazları ve etik konumu.",
    "pub.axis3Kicker": "EKSEN 03 • TOPLUMSAL TRAVMA",
    "pub.axis3Title": "Soykırım, Dil & Öznelleşme",
    "pub.axis3Desc": "Kolektif şiddetin dildeki izleri, paranoid bilgi ve subjektif toplumsallaşma.",
    "pub.heroIdsAria": "Doğrulanmış akademik kimlikler ve dizinler",
    "pub.idScholarVal": "Yayın & Atıf Dizini",
    "pub.idDergiparkVal": "ULAKBİM Kaydı",
    "pub.ledgerAria": "Akademik üretim envanteri",
    "pub.ledgerEyebrow": "AKADEMİK KORPUS ENVANTERİ",
    "pub.ledger1Cat": "DOKTORA MONOGRAFİSİ • ODTÜ (METU) PH.D.",
    "pub.ledger1Title": "Klinik Süpervizyonda Toplumsal Travma & Söylem",
    "pub.ledger2Cat": "HAKEMLİ DERGİ MAKALELERİ • 4 YAYIN",
    "pub.ledger2Title": "AYNA Klinik Psikoloji, Türk Psikoloji Yazıları & Psychology Kurdî",
    "pub.ledger3Cat": "ULUSLARARASI SEMPOZYUM & KONGRE • 4 BİLDİRİ",
    "pub.ledger3Title": "University at Buffalo CSPC, WPA Prag, Boğaziçi & ICCP",
    "pub.ledger4Cat": "AKREDİTASYON & İLERİ EĞİTİM • 4 BELGE",
    "pub.ledger4Title": "APsA San Francisco (44.5 CE), IPU Berlin, GATA & DAPHB",
    "pub.ledger5Cat": "ARAŞTIRMA HİBESİ • IPA LONDON",
    "pub.ledger5Title": "IPA Küresel Araştırma Hibesi (12 Aylık Desteklenen Proje)",
    "pub.filterAria": "Yayın kategorisi filtreleme",
    "pub.filterAll": "Tümü",
    "pub.filterThesis": "Doktora Tezi",
    "pub.filterArticles": "Hakemli Makaleler",
    "pub.filterTalks": "Kongre & Sunumlar",
    "pub.statThesesLabel": "Lisansüstü Tez (ODTÜ Doktora & Ankara Üni. YL)",
    "pub.statArticlesLabel": "Hakemli Makale & Çeviri (AYNA, TPY, Kurdî)",
    "pub.statTalksLabel": "Sempozyum & Kongre Bildirisi (UB CSPC, WPA...)",
    "pub.statAccreditationLabel": "Uluslararası Akreditasyon & CE (APsA, IPU Berlin...)",
    "pub.statGrantsLabel": "IPA Araştırma Hibesi (Londra)",
    "pub.filterThesis": "Lisansüstü Tezler",
    "pub.filterTalks": "Kongre & Sempozyumlar",
    "pub.filterAccreditation": "Akreditasyon & Eğitim",
    "pub.filterReview": "Araştırma Hibesi",
    "pub.filterStatusAll": "16 Doğrulanmış Akademik Kayıt • Kronolojik ve Tematik Arşiv",
    "pub.thesisPill": "DOKTORA MONOGRAFİSİ · PH.D.",
    "pub.ankaraPill": "KLİNİK PSİKOLOJİ · M.S.",
    "pub.ankaraDesc": "Yetişkin bağlanma stilleri, erken dönem uyumsuz şemalar (EMS) ve bilişsel/duygusal öz-düzenleme süreçlerinin psikolojik belirti düzeyleri (depresyon, kaygı ve somatizasyon) üzerindeki yordayıcı rollerini inceleyen ampirik klinik psikoloji tezi.",
    "pub.ankaraAdvisor": "Tez Danışmanı: Prof. Dr. Nesrin Hisli Şahin",
    "pub.bursaPill": "KONGRE SÖZLÜ BİLDİRİSİ",
    "pub.bursaDesc": "Duygu ve akıl ikilemini Antonio Damasio'nun nörobiyolojik 'Descartes'ın Yanılgısı' tezi ve duygusal zeka kuramları üzerinden ele alan sözlü kongre sunumu.",
    "pub.bursaCaption": "2004 Kongre Katılım & Bildiri Belgesi (1800×1290) · Büyütmek için tıklayınız",
    "pub.apsaPill": "SÜREKLİ TIP EĞİTİMİ (CE) • 44,5 SAAT",
    "pub.apsaDesc": "Amerikan Psikanaliz Birliği (APsA) tarafından 27 Ocak – 1 Şubat 2026 tarihlerinde San Francisco'da düzenlenen Ulusal Kongre kapsamında 44,5 AMA PRA Category 1 Kredi / Sürekli Eğitim (CE) saati tamamlanmış; çağdaş psikanalitik teknik, aktarım ve klinik vaka analizleri üzerine ileri oturumlar akredite edilmiştir.",
    "pub.ipuPill": "60 AKADEMİK SAAT • ÇAĞDAŞ PSİKANALİZ",
    "pub.ipuDesc": "International Psychoanalytic University (IPU) Berlin bünyesinde 27 Haziran – 8 Temmuz 2022 tarihlerinde düzenlenen 'Contemporary Developments in Psychoanalysis' yoğun programı kapsamında; psikanalitik kuramın çağdaş klinik, kültürel ve epistemolojik boyutları 60 akademik saatlik seminer dizisiyle tamamlanmıştır.",
    "pub.gataPill": "KRİZE MÜDAHALE • PSİKOLOJİK TRAVMA",
    "pub.gataDesc": "GATA Ruh Sağlığı ve Hastalıkları Anabilim Dalı tarafından 29–30 Mayıs 2014 tarihlerinde Ankara'da düzenlenen kongre kapsamında; akut kriz durumları, çatışma ve görev kaynaklı psikolojik travmalar ve klinik müdahale modelleri üzerine ileri eğitim tamamlanmıştır.",
    "pub.traumaPill": "TRAVMA SONRASI İYİLEŞME • KLİNİK EĞİTİM",
    "pub.traumaDesc": "Doğal Afetler ve Travmalarda Psikososyal Hizmetler Birliği (DAPHB) tarafından 11–13 Aralık 2009 tarihlerinde İstanbul'da düzenlenen VI. Uluslararası Psikolojik Travma Sempozyumu katılımı ve psikolojik travma klinik müdahaleleri eğitim sertifikası.",
    "pub.ipaPill": "IPA KÜRESEL ARAŞTIRMA HİBESİ",
    "pub.ipaDesc": "Uluslararası Psikanaliz Birliği (IPA) Araştırma Komitesi tarafından desteklenen 12 aylık araştırma projesi: Psikanalitik bilginin kitlesel şiddet ve soykırım sonrası psikososyal saha çalışmalarında ve toplumsal travma süreçlerinde nasıl kullanılabileceğini niteliksel klinik süpervizyon ekseninde modeller.",
    "pub.copyCitation": "Alıntıyı Kopyala",
    "pub.thesisSpecsAria": "Doktora tezi künye bilgileri",
    "pub.specInstLabel": "KURUM & ENSTİTÜ",
    "pub.specInstVal": "Orta Doğu Teknik Üniversitesi (METU) · Klinik Psikoloji Ph.D.",
    "pub.specAdvisorLabel": "TEZ DANIŞMANI",
    "pub.specFieldLabel": "SAHA & KURAMSAL EKSEN",
    "pub.specFieldVal": "Irak Ninova Ovası · Lacanyen Söylem Analizi & Süpervizyon",
    "pub.specEquivLabel": "ULUSLARARASI AKREDİTASYON",
    "pub.specEquivVal": "WES ABD Doktora Eşdeğerliği · Tescil No: 15141",
    "pub.symposiumPill": "ULUSLARARASI SEMPOZYUM",
    "pub.cspcDesc": "University at Buffalo (SUNY) CSPC 2026 Bahar Sempozyumu kapsamında sunulan bu çalışma; Êzidî kadın kırımı ve soykırımını Lacanyen psikanalitik kuramın paranoid bilgi ve dil yapılanması üzerinden çözümler. Şiddetin simgesel düzeni ve iletişimi hedef alan bir “iletişim-kırım” (communicide) olarak nasıl inşa edildiğini irdeler.",
    "pub.cspcTopicTag": "Dilde Paranoid Boyut & Soykırım",
    "pub.wpaPill": "DÜNYA PSİKİYATRİ KONGRESİ",
    "pub.wpaDesc": "Dünya Psikiyatri Birliği (WPA) tarafından Prag'da düzenlenen 25. Dünya Psikiyatri Kongresi'nde kabul edilen araştırma; Irak Ninova Ovası'nda Êzidî soykırımı mağdurlarıyla çalışan ruh sağlığı personelinin aktarım, karşı-aktarım ve ikincil travma süreçlerini Lacanyen psikanaliz perspektifinden inceler.",
    "pub.wpaTopicTag": "Klinik Süpervizyon & Toplumsal Travma",
    "pub.invitedTalkPill": "DAVETLİ KONUŞMA",
    "pub.bogaziciTopicTag1": "Ayna Evresi (Le stade du miroir)",
    "pub.bogaziciTopicTag2": "Psikanalitik Öznelleşme",
    "pub.peerReviewedPill": "ULAKBİM HAKEMLİ DERGİ",
    "pub.ayna2024Pages": "Cilt 11 · Sayı 1 · s. 1–37",
    "pub.ayna2024Topic": "Baba Metaforu & Menetme (Forclusion)",
    "pub.interactiveTopologyBtn": "Etkileşimli Topolojik Şema →",
    "pub.ayna2021Pages": "Cilt 8 · Sayı 2 · s. 199–220",
    "pub.ayna2021Topic": "Obsesyonel Nevroz & Babanın-Adı",
    "pub.kurdiTypePill": "DERGİ YAYINI · KURMANCÎ",
    "pub.kurdiMetaTranslator": "Çeviri: Aydin Rengîn",
    "pub.kurdiMetaLang": "Dil: Kurmancî",
    "pub.tpyTypePill": "AMPİRİK ARAŞTIRMA MAKALESİ",
    "pub.tpyMetaCoauthor": "Ortak Yazar: Prof. Dr. Nesrin Hisli Şahin",
    "pub.tpyMetaTopic": "Yetişkin Bağlanma & Şemalar",
    "pub.iccpTypePill": "ULUSLARARASI KONGRE BİLDİRİSİ",
    "pub.iccpDesc": "Bağlanma örüntüleri, erken dönem uyumsuz şemalar ve öz-düzenleme süreçlerinin psikolojik belirtilerle ilişkisini inceleyen uluslararası kongre bildirisi.",
    "pub.iccpMetaTopic": "Bağlanma, Şemalar & Öz-Düzenleme",
    "pub.reviewTypePill": "BİLİMSEL HAKEMLİK KAYDI",
    "pub.reviewDesc": "TÜBİTAK ULAKBİM DergiPark sistemi üzerinden yayımlanan hakemli AYNA Klinik Psikoloji Dergisi kapsamında tamamlanan çift-kör bilimsel hakemlik değerlendirme kaydı.",
    "pub.reviewMetaId": "Kayıt No: 1845184",
    "pub.reviewMetaRole": "Kör Hakemlik Değerlendirmesi",
    "pub.reviewCaption": "DergiPark / AYNA Klinik Psikoloji Dergisi · Doğrulanmış Hakemlik Belgesi",
    "pub.hubAria": "Akademik dizinler ve doğrulanabilir araştırmacı profilleri",
    "pub.hubEyebrow": "AKADEMİK DİZİNLER & AÇIK ERİŞİM DOĞRULAMA",
    "pub.hubTitle": "Uluslararası Akademik Profiller ve Atıf Kayıtları",
    "pub.hubDesc": "Hakemli dergi yayınları, ORCID araştırmacı sicili, uluslararası kongre bildirileri ve açık erişim doktora tezi resmi akademik veri tabanları üzerinden incelenebilir.",
    "pub.hubScholarSub": "Atıf dizini ve akademik yayın listesi",
    "pub.hubOrcidSub": "Uluslararası araştırmacı kimlik kaydı",
    "pub.hubDergiparkName": "DergiPark Araştırmacı Profili",
    "pub.hubDergiparkSub": "Ulusal hakemli makaleler ve hakemlik",
    "pub.hubRgSub": "Araştırma çıktıları ve akademik ağ",
    "footer.splashReplay": "Başa dön",
    "practice.clinicianEyebrow": "RUH SAĞLIĞI ÇALIŞANLARI & UZMANLAR İÇİN",
    "practice.clinicianTitle": "Süpervizyon, Vaka Kavramsallaştırma ve Seminer Çalışmaları",
    "practice.clinicianIntro": "Klinik psikologlar, psikoterapistler, psikiyatri hekimleri ve ruh sağlığı uzmanları için; danışanın söylemini psikanalitik eksende okuma, aktarım dinamiğini kavrama ve analitik duruşu pekiştirmeye yönelik yapılandırılmış mesleki programlar.",
    "practice.prog1Tag": "KLİNİK SÜPERVİZYON",
    "practice.prog1Title": "Bireysel & Küçük Grup Süpervizyonu",
    "practice.prog1Desc": "Danışanın söylemindeki yapıyı kavrama, aktarım ve karşı-aktarım düğümlerini çözme ve terapistin analitik duruşunu pekiştirme. ODTÜ AYNA Klinik Destek Birimi deneyimiyle.",
    "practice.prog1Cta": "Süpervizyon Başvurusu Yap",
    "practice.prog2Tag": "UYGULAMALI ATÖLYE",
    "practice.prog2Title": "Psikanalitik Vaka Kavramsallaştırma",
    "practice.prog2Desc": "L Şeması, gösteren zinciri, arzu grafı ve semptomun analitik dinlenmesi üzerinden yapılandırılmış klinik kavramsallaştırma eğitimleri. Talep halinde açılan modüler program.",
    "practice.prog2Cta": "Atölye Ön Talebi Bildir",
    "practice.prog3Tag": "ETKİNLİK & ÇALIŞMA GRUBU",
    "practice.prog3Title": "Lacan Seminerleri Okuma Grubu",
    "practice.prog3Desc": "Jacques Lacan'ın seminer metinlerinin satır satır, kavramsal ve klinik izdüşümleriyle ortak okunması. İki haftada bir çevrimiçi kapalı analitik çalışma halkası.",
    "practice.prog3Cta": "Çalışma Grubuna Ön Kayıt",
    "practice.clinicianFooterNote": "Süpervizyon ve eğitim süreçleri klinisyenin mesleki ihtiyacına göre şekillendirilir; kurumlar veya uzman grupları özel içerik talebinde bulunabilir.",
    "practice.clinicianDirectCta": "Doğrudan İletişime Geçin",
    "practice.clinicianResearchLink": "Teorik Şemaları & Makaleleri İnceleyin",
    "practice.homeCalloutPill": "RUH SAĞLIĞI UZMANLARI İÇİN",
    "practice.homeCalloutText": "Psikolog ve klinisyenler için süpervizyon, psikanalitik vaka kavramsallaştırma ve Lacan okuma grubu programları.",
    "practice.homeCalloutLink": "Uzman Programlarını İnceleyin",
    "research.schemasEyebrow": "TEORİK MODELLER & SAHA ŞEMALARI",
    "research.schemasTitle": "Kavramsal Çizimler, Doktora Tezi ve Çokdilli Psikanaliz Sözlüğü",
    "research.schemasIntro": "Dr. Ali İhsan Yaka'nın obsesyonel yapı makalesi, ODTÜ doktora tezindeki saha topolojisi ve Türkçe, English ve Kurmancî dillerini bir araya getiren psikanalitik terminoloji çalışması.",
    "research.schema1Tag": "KLİNİK MAKALE ÇİZİMLERİ",
    "research.schema1Title": "Obsesyonel Yapı ve Arzu Çıkmazı",
    "research.schema1Desc": "Freud'un Sıçan Adam vakasından Lacan'ın Seminer IV & V metinlerine uzanan obsesyonel dinamik: Özne ($) ile Öteki (A) arasındaki borç, şüphe, ruminasyon ve arzuyu erteleme / imkansız kılma stratejisinin yapısal şemaları.",
    "research.schema2Tag": "ODTÜ DOKTORA TEZİ TOPOLOJİSİ",
    "research.schema2Title": "Ninova & Irak Sahası Söylem Matrisi",
    "research.schema2Desc": "2024 ODTÜ doktora tezinde geliştirilen, çatışma sonrası alanda kolektif yas, şiddet ve kimlik travmalarını Lacan'ın Dört Söylemi (Efendi, Üniversite, Histerik, Analist) üzerinden haritalandıran saha şemaları.",
    "research.schema3Tag": "ÇOKDİLLİ PSİKANALİZ ÇALIŞMASI",
    "research.schema3Title": "Üç Dilli Psikanaliz Terimleri Sözlüğü",
    "research.schema3Desc": "Dr. Ali İhsan Yaka'nın psikanalitik kavramları Türkçe, İngilizce ve Kürtçe (Kurmancî) dillerinde karşılıklı olarak ele aldığı, kavramsal netliği ve çokdilli klinik dinlemeyi destekleyen terminoloji matrisi.",
    "research.schemaToolbarObsessional": "Obsesyonel Nevroz • Şema L & Arzu Grafı",
    "research.schemaToolbarL": "4K Vektörel Şema",
    "research.schemaFocus": "Odak:",
    "research.schemaTheory": "Kuramsal Temel:",
    "research.schemaToolbarDiscourses": "Saha Söylem Analizi • Lacan'ın Dört Söylemi",
    "research.schemaInstitute": "Kurum & Yıl:",
    "research.schemaMethod": "Yöntem:",
    "guncel.heroPill": "GÜNCEL SEMPOZYUM & ETKİNLİKLER",
    "guncel.heroTitle": "Akademik Çalışmalar, Sempozyumlar & Duyurular",
    "guncel.heroLead": "Dr. Ali İhsan Yaka'nın University at Buffalo CSPC bünyesindeki araştırmaları, uluslararası kongre bildirileri, araştırma bursları ve güncel klinik etkinlikleri.",
    "guncel.apsaCredits": "44,5 Sürekli Eğitim Kredisi",
    "practice.prog1Status": "Güncel uygunluk başvuruda teyit edilir",
    "practice.prog2Status": "Talep üzerine · kontenjan teyit edilir",
    "practice.prog3Status": "Program takvimi için iletişim",
    "meta.publicationsTitle": "Yayınlar, Tezler ve Bildiriler | Dr. Ali İhsan Yaka, Ph.D.",
    "about.bogaziciTalkAlt": "Dr. Ali İhsan Yaka Boğaziçi Üniversitesi konuşması",
    "pub.thesisDesc": "Bu doktora monografisi; Irak Ninova Ovası'nda IŞİD/Êzidî soykırımı sonrasında sahada görev yapan yerel ruh sağlığı uzmanlarının klinik süpervizyon seanslarındaki söylemlerini Lacanyen psikanalitik kuram, Dört Söylem modeli ve toplumsal travma ekseninde çözümler.",
    "pub.thesisMetaKeywords": "Lacanyen Söylem Analizi • Toplumsal Travma",
    "pub.ayna2024Desc": "Psikotik yapıyı nevrozdan ayıran temel psikanalitik mekanizma olarak Babanın-Adı göstereninin simgesel düzene kaydedilemeyişini (menetme/forclusion) ve psikoz kliniğinde baba işlevinin Lacanyen kuram ekseninde yeniden kavramsallaştırılmasını inceler.",
    "pub.ayna2021Desc": "Obsesyonel nevrozda arzu ile yasa arasındaki gerilimi, babanın simgesel işlevinin özne tarafından nasıl konumlandırıldığını ve klinik pratikteki göstergelerini Lacanyen psikanaliz perspektifinden inceler.",
    "pub.tpyDesc": "Yakın İlişkiler Envanteri'nin (ECR-I) Türkçe psikometrik standardizasyonu; bağlanma boyutlarının kendilik algısı, bilişsel çarpıtmalar ve psikopatolojik belirtilerle ilişkisini ampirik olarak değerlendirir.",
    "pub.kurdiDesc": "Bireyin patolojik yalnızlık kapanından psikanalitik çalışma yoluyla sıyrılarak kolektif bağlar içinde öznelleşme serüvenini Lacanyen kuram çerçevesinde ele alan kamu yayıncılığı makalesi.",
    "pub.bogaziciDesc": "Yalnızlığın psikopatolojik bir tecrit halinden simgesel düzenle kurulan bağ üzerinden öznelleşme imkanına nasıl evrilebileceğini Lacan'ın ayna evresi ve öteki kavramları üzerinden ele alan davetli sempozyum konuşması.",
  },
  "en": {
    "page.title": "Dr. Ali Ihsan Yaka, Ph.D. | Lacanian Psychoanalysis & Clinical Psychology",
    "page.aboutTitle": "About | Dr. Ali Ihsan Yaka, Ph.D.",
    "page.practiceTitle": "Clinical Practice & Supervision | Dr. Ali Ihsan Yaka",
    "page.newsTitle": "Academic Work & Events | Dr. Ali Ihsan Yaka",
    "page.fieldworkTitle": "Humanitarian Fieldwork | Dr. Ali Ihsan Yaka",
    "page.publicationsTitle": "Publications & Presentations | Dr. Ali Ihsan Yaka",
    "page.researchTitle": "Psychoanalytic Research | Dr. Ali Ihsan Yaka, Ph.D.",
    "meta.researchDescription": "Psychoanalytic research notes, topological diagrams, and visual studies on the unconscious. Dr. Ali Ihsan Yaka.",
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
    "splash.quote": "“The unconscious is structured like a language.” <a href='https://oyc.yale.edu/english/engl-300/lecture-13' target='_blank' rel='noopener'>— Jacques Lacan ↗</a>",
    "splash.supportQuote": "“The ego is not master in its own house.” <a href='https://www.freudedition.net/werke/one-difficulties-psycho-analysis/druckschrift-0' target='_blank' rel='noopener'>— Sigmund Freud ↗</a>",
    "splash.scholarTitle": "Psychoanalytic psychotherapy for adults • Clinical supervision",
    "splash.enterBtn": "Explore the work ↓",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.fieldwork": "Fieldwork",
    "nav.publications": "Publications",
    "nav.research": "Research",
    "research.eyebrow": "RESEARCH · DIAGRAM · NOTES",
    "research.title": "Psychoanalytic Research",
    "research.lead": "Visual notes exploring concepts not as static diagrams, but as interconnected relations and transformations.",
    "research.mapModel": "Current model", "research.mapTheory": "Theoretical notes", "research.mapSchemas": "Further diagrams", "research.mapReading": "Suggested reading",
    "research.openTheory": "Theoretical framework and psychic structures", "research.openSupplement": "Publication, method, clinical notes, and further diagrams",
    "research.currentModelTitle": "From Speech to Psychic Structure: Updated Web Diagram", "research.currentFigureLabel": "UPDATED WEB DIAGRAM · LATEST REVISION", "research.modelStructure": "How to read the model",
    "research.readingEyebrow": "SUGGESTED READING", "research.readingTitle": "Selected reading in psychoanalysis", "research.readingLead": "Direct links to theoretical texts and clinical introductions.",
    "research.readingPublisher": "Norton publisher page ↗", "research.readingCatalog": "NLM catalogue record ↗", "research.readingAuthor": "Author’s book list ↗", "research.readingText": "Freud text ↗",
    "home.reflectionLabel": "WORKING APPROACH", "home.reflectionText": "Listening to psychic life through a person’s words and relationships, within the social contexts they inhabit.",
    "psyche.homeLink": "Explore the model and research notes ↗",
    "psyche.mode2d": "2D Schema (Updated Model)",
    "psyche.mode3d": "Explore 3D View",
    "nav.faq": "FAQ",
    "nav.faqDrawer": "Frequently Asked Questions (FAQ)",
    "nav.contact": "Contact",
    "nav.practice": "Clinical Practice",
    "nav.news": "Updates",
    "nav.mainMenu": "Main Menu",
    "nav.mobileMenu": "Mobile Menu",
    "nav.openMenu": "Open Menu",
    "nav.closeMenu": "Close Menu",
    "common.close": "Close",
    "lightbox.label": "Image Viewer",
    "header.sub": "Clinical Psychologist • Ph.D.",
    "header.welcome": "Welcome",
    "header.whatsNew": "Updates",
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
    "psyche.message": "Paternal Metaphor",
    "psyche.messageText": "Message · Mirror Stage",
    "psyche.fall": "Falling from Symbolic",
    "psyche.unrecognized": "Unrecognised in Symbolic",
    "psyche.recognized": "Recognised in Symbolic",
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
    "psyche.caption": "Model adapted from Dr. Ali Ihsan Yaka’s work “Psychotic Structure and the Paternal Function,” redesigned with motion for the web. <a href=\"yayinlar.html#ayna-2024\">Read the 2024 article ↗</a>",
    "psyche.diagramTitle": "Diagram from the signifying chain to psychic structures",
    "psyche.diagramDesc": "The diagram follows the paternal metaphor and mirror stage into the links among the Real, Imaginary, and Symbolic, the S1 axis, psychic structures, and the subject’s speaking function.",
    "psyche.s2Label": "S2 · signifying chain",
    "psyche.s1Label": "S1",
    "psyche.ayna": "Mirror Stage",
    "psyche.structureHeading": "Psychic structures",
    "psyche.captionText": "Adapted from Dr. Ali Ihsan Yaka’s work “Psychotic Structure and the Paternal Function.”",
    "psyche.captionLink": "Read the 2024 article ↗",
    "psyche.researchPrompt": "For the article’s other diagrams and notes, visit",
    "psyche.motionNote": "The upper S2 loop returns from right to left; the lower loop connects from left to right. The message travels horizontally left to right; the Mirror Stage axis points down while S1 coding vectors rise from bottom to top.",
    "psyche.panHint": "Swipe horizontally to follow the full diagram ↔",
    "psyche.mobileMessageFlow": "Message · left to right",
    "psyche.mobileCodeFlow": "Coding · bottom to top",
    "psyche.mobileUpperLoop": "Upper loop · right to left",
    "psyche.mobileLowerLoop": "Lower loop · left to right",
    "psyche.mobileAria": "Psychoanalytic diagram: mobile view",
    "psyche.mobileRealOnly": "The Imaginary, …",
    "psyche.mobileRealImaginary": "The Imaginary, the Real, …",
    "psyche.mobileRealImaginarySymbolic": "The Imaginary, the Real, the Symbolic",
    "psyche.sourceDiagram": "Open the original diagram PDF ↗",
    "psyche.loopNote": "The upper and lower loops connect the signifying chain.",
    "hero.eyebrow": "LACANIAN-ORIENTED PSYCHOTHERAPY • CLINICAL SUPERVISION",
    "hero.title": "Lacanian-oriented psychotherapy and clinical supervision.",
    "hero.quote": "“The unconscious is structured like a language.” <span>— Jacques Lacan</span>",
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
    "hero.portraitTitle": "Clinical Psychologist, Psychoanalyst & Supervisor • Buffalo CSPC, 2026",
    "hero.portraitLangs": "Languages: Turkish • English C1 Advanced • Kurdish (Kurmanji)",
    "whatsNew.eyebrow": "CURRENT SCHOLARLY INITIATIVES & EVENTS",
    "whatsNew.title": "Recent Work & Academic Events",
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
    "practice.p3Num": "03 / TRAININGS & SEMINARS",
    "practice.p3Title": "Seminars & Psychoanalytic Trainings",
    "practice.p3Desc": "Invited lectures, clinical seminars, and training modules on Lacanian psychoanalysis, trauma theory, and case formulation for universities, professional associations, and humanitarian organizations.",
    "practice.p3Tag": "Seminars & Training",
    "practice.p1f1": "Free association and close attention to speech",
    "practice.p1f2": "Exploring subjective anxiety, repetition, and symptoms",
    "practice.p1f3": "Lacanian punctuation (scansion) and session rhythm",
    "practice.p1f4": "Online or in-person sessions for adults",
    "practice.p2f1": "Working with transference and countertransference",
    "practice.p2f2": "Psychoanalytic case formulation",
    "practice.p2f3": "Considering secondary trauma in crisis settings",
    "practice.p2f4": "Individual or small-group supervision",
    "practice.p3f1": "Invited university and association talks (Boğaziçi, GİPDER, etc.)",
    "practice.p3f2": "Case formulation and psychoanalytic listening workshops",
    "practice.p3f3": "Humanitarian aid and crisis psychology training modules",
    "practice.p3f4": "Institutional and academic group seminars",
    "practice.featurePill": "CLINICAL FORMULATION & DESIRE IN SPEECH",
    "practice.featureOrientation": "LACANIAN PSYCHOANALYTIC ORIENTATION",
    "practice.featureTitle": "The Subjective Meaning Behind a Symptom",
    "practice.featureDesc": "In psychoanalytic work, a symptom is not treated as a malfunction to be quickly silenced, but listened to for the subjective meaning it holds within a person’s history, language, and relationships.",
    "practice.featureQuote": "Rather than applying ready-made formulas or standardized protocols, sessions establish a working frame that makes room for each subject’s own words, recurring impasses, and singular desire.",
    "practice.featureAxesAria": "Clinical practice axes",
    "practice.featureAxis1Tag": "I · ANALYTIC LISTENING",
    "practice.featureAxis1Title": "Speech & Free Association",
    "practice.featureAxis1Desc": "Attending closely to slips of the tongue, pauses, and ruptures in discourse where unconscious position emerges.",
    "practice.featureAxis2Tag": "II · STRUCTURAL READING",
    "practice.featureAxis2Title": "Subjective Position & Repetition",
    "practice.featureAxis2Desc": "Formulating the function a symptom serves within psychic structure and recurring relational patterns.",
    "practice.featureAxis3Tag": "III · CLINICAL FRAME",
    "practice.featureAxis3Title": "Ethical Boundaries & Rhythm",
    "practice.featureAxis3Desc": "Establishing confidentiality, session frequency, and subjective temporality together from the initial meetings.",
    "practice.featureBtn": "Request Initial Consultation",
    "practice.featureMoreLink": "Clinical approach & frame",
    "practice.featureLangs": "Turkish • English • Kurmanji",
    "practice.featureCaptionRole": "Clinical Psychologist, Ph.D. • Psychoanalytic Psychotherapy & Supervision",
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
    "contact.subtitle": "You may reach out directly for psychoanalytic psychotherapy, supervision, or organizational consultations, or complete the initial consultation inquiry below.",
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
    "contact.formBadge": "WHATSAPP CONSULTATION PROTOCOL",
    "contact.formDesc": "This form prepares a WhatsApp message for you to review and send. This website does not receive or store the form details.",
    "contact.formName": "Full Name *",
    "contact.formNamePlaceholder": "e.g. Alex Morgan",
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
    "contact.formMessagePlaceholder": "Brief reason for consultation or preferred hours...",
    "contact.formSensitiveNote": "Please do not include health or therapy details in this field.",
    "contact.formConsent": "I will review and send the message after it opens in WhatsApp.",
    "contact.formPrivacyLink": "Privacy notice",
    "contact.formSubmit": "Prepare WhatsApp Message",
    "contact.reassurance": "WhatsApp opens; the message is sent only if you tap Send. This website does not receive or store the form details.",
    "contact.eyebrowSub": "ONLINE & IN-PERSON SESSIONS",
    "contact.trustConfidential": "Ethical Framework & Absolute Confidentiality",
    "contact.trustResponse": "Direct Response Within 24h",
    "contact.trustLocation": "TRT (UTC+3) Online & Istanbul",
    "contact.step1": "Fill Details",
    "contact.step2": "Review on WhatsApp",
    "contact.step3": "Send Directly",
    "contact.ethicsTitle": "Clinical Framework & Emergency Notice",
    "contact.ethicsText": "These contact channels and consultation request form are not intended for acute emergency psychiatric crisis intervention. In case of immediate psychiatric emergency or risk of harm to oneself or others, please contact emergency medical services immediately (112 Emergency / 911 / local emergency hospital).",

    "about.profileLinkedin": "LinkedIn profile",
    "about.profileOrcid": "ORCID researcher record",
    "about.profileScholar": "Google Scholar publications",
    "about.profileDergipark": "DergiPark researcher profile",
    "about.profileResearchgate": "ResearchGate researcher profile",
    "about.profileTavsiye": "TavsiyeEdiyorum profile",
    "about.gipderTalk": "2024 · GİPDER, guest talk on “Case Formulation in Clinical Psychoanalysis” — video ↗",
    "publication.bogaziciBadge": "INVITED TALK · 11TH PSYCHOLOGY DAY, BOĞAZİÇİ UNIVERSITY",
    "publication.bogaziciTitle": "From Pathological Loneliness to Subjective Sociality: The Experience of Psychoanalytic Subjectivation",
    "publication.bogaziciCitation": "<strong>Yaka, A. I.</strong> (April 27, 2025). 11th Psychology Day, Boğaziçi University, “Loneliness”, Istanbul.",
    "publication.bogaziciDesc": "Invited talk on loneliness and a psychoanalytic perspective, including the mirror stage and subjectivity in social life from a Lacanian psychoanalytic perspective.",
    "publication.bogaziciImageAlt": "Dr. Ali Ihsan Yaka presenting on psychoanalytic perspectives on loneliness at Boğaziçi University’s 11th Psychology Day",
    "publication.bogaziciLink": "View event details →",
    "news.bogaziciBadge": "INVITED KEYNOTE &bull; BOĞAZİÇİ UNIVERSITY 11TH PSYCHOLOGY DAY",
    "news.bogaziciLocation": "APRIL 27, 2025 &bull; ALBERT LONG HALL, ISTANBUL",
    "news.bogaziciTitle": "11th Psychology Day: Loneliness and Psychoanalytic Perspective",
    "news.bogaziciSubtitle": "“From Pathological Loneliness to Subjective Sociality: The Experience of Psychoanalytic Subjectivation”",
    "news.bogaziciDesc": "Delivered as an invited keynote at the 11th Psychology Day organized by the Boğaziçi University Psychology Society, this talk re-articulates loneliness beyond clinical pathology through Lacanian psychoanalysis—focusing on the <strong>Mirror Stage (Le stade du miroir)</strong>, imaginary alienation, and the symbolic dialectic of subjectivation. The presentation examines how the subject's relation to the Other (l'Autre) opens pathways from psychopathological loneliness toward subjective sociality.",
    "news.bogaziciTag1": "✦ The Mirror Stage (Le stade du miroir)",
    "news.bogaziciTag2": "✦ Lacanian Psychoanalysis",
    "news.bogaziciTag3": "✦ Symbolic Order &amp; the Other",
    "news.bogaziciTag4": "✦ Subjective Sociality",
    "news.bogaziciCta": "Explore Academic Work",
    "news.bogaziciCitationLink": "Publication Record: Yaka, A. I. (2025) &rarr;",
    "news.bogaziciStageBadge": "KEYNOTE &amp; HALL &bull; BOĞAZİÇİ UNIVERSITY",
    "news.bogaziciStageCaption": "Boğaziçi University 11th Psychology Day · April 27, 2025",
    "news.bogaziciStageDesc": "Albert Long Hall, Invited Keynote Opening Session",
    "news.bogaziciSlideBadge": "✦ THEORETICAL SLIDE &bull; THE MIRROR STAGE",
    "news.bogaziciSlideTitle": "From the Mirror Stage Presentation",
    "news.bogaziciSlideDesc": "The Symbolic Order and Psychoanalytic Perspective",
    "news.bogaziciSpeakerBadge": "SUBJECTIVATION EXPERIENCE",
    "news.bogaziciSpeakerTitle": "Loneliness &amp; Psychoanalytic Perspective",
    "news.bogaziciSpeakerDesc": "Discussion on Subjective Sociality",
    "news.bogaziciZoomHint": "Zoom",
    "publication.kurdiBadge": "KURMANJI TRANSLATION · PSYCHOLOGY KURDÎ",
    "publication.kurdiTitle": "From Psychopathological Loneliness Toward Subjective Sociality: The Experience of Psychoanalytic Subjectivation",
    "publication.kurdiCitation": "<strong>Yaka, A. I.</strong> (2026). “<em>Ji tenêtiya psîkopatolojîk berev civakîbûna subjektîf: Tecribeya bikerbûna psîkanalîtîk</em>.” <em>Psychology Kurdî</em>, 9(21), 61–74. Translated into Kurmanji by Aydin Rengîn.",
    "publication.kurdiDesc": "The Kurmanji translation of an article examining loneliness, subjective sociality, and social trauma through a psychoanalytic framework.",
    "publication.kurdiPdf": "View the journal issue (PDF) ↗",
    "publication.kurdiAnnouncement": "Issue announcement ↗",
    "publication.details": "Details and journal PDF ↗",
    "practice.methodEyebrow": "THE CLINICAL FRAME",
    "practice.methodTitle": "Speech, symptom, and the frame of the work",
    "practice.methodDesc": "Sessions begin by listening closely to what brings a person to therapy and how they describe it. The personal meaning of a symptom, confidentiality, and the working frame are discussed together.",
    "practice.methodEthics": "Guided by personal confidentiality, privacy, and Lacanian ethical principles",
    "practice.methodStep1": "Listening",
    "practice.methodStep1Desc": "Make room for the reason for seeking therapy and the person’s own words.",
    "practice.step1Pill": "Free Association",
    "practice.methodStep2": "Formulation",
    "practice.methodStep2Desc": "Talk through recurring difficulties and the possible subjective meaning of symptoms.",
    "practice.step2Pill": "Unconscious Meaning",
    "practice.methodStep3": "Working frame",
    "practice.methodStep3Desc": "Agree together on session frequency, format, and limits of confidentiality.",
    "practice.step3Pill": "Ethical Frame",
    "practice.inclusiveEyebrow": "APPROACH TO CARE",
    "practice.inclusiveTitle": "An inclusive, culturally responsive space",
    "practice.inclusiveDesc": "The work attends to each person’s life story, language, and cultural context, and takes an LGBTQI+-affirming and inclusive approach. The frame and needs of each consultation are discussed collaboratively.",
    "practice.focusAreas": "Core areas addressed in work with adults: anxiety and generalized worry, panic attacks, obsessions (OCD), trauma and grief, fears and phobias, depressive symptoms, self-harm tendencies, attention and focus difficulties (ADHD), addictions, and relationship and attachment difficulties.",
    "practice.inclusivePillar1Title": "Cultural & Linguistic Context",
    "practice.inclusivePillar1Tag": "TR · EN · Kurmanji",
    "practice.inclusivePillar1Desc": "Analytic listening that honors each person’s life story, mother tongue, and socio-cultural context.",
    "practice.inclusivePillar2Title": "LGBTQI+-Affirming & Inclusive Care",
    "practice.inclusivePillar2Tag": "Affirming Ethics",
    "practice.inclusivePillar2Desc": "A safe, non-pathologizing clinical space that affirms gender identity and sexual orientation diversity.",
    "practice.inclusivePillar3Title": "Collaboratively Built Frame",
    "practice.inclusivePillar3Tag": "Collaborative Frame",
    "practice.inclusivePillar3Desc": "Session rhythm, boundaries, and priorities are shaped together with the subject rather than through rigid templates.",
    "practice.focusAreasHeading": "CORE AREAS EXPLORED IN WORK WITH ADULTS",
    "practice.focusAreasSub": "Primary clinical themes addressed in individual psychoanalytic psychotherapy and consultations",
    "practice.focusAreasCount": "10 Clinical Areas",
    "practice.topic1Title": "Anxiety & Worry",
    "practice.topic1Desc": "Persistent worry, intolerance of uncertainty, and inner restlessness",
    "practice.topic2Title": "Panic Attacks",
    "practice.topic2Desc": "Acute somatic constriction, palpitations, and fear of losing control",
    "practice.topic3Title": "Obsessions (OCD)",
    "practice.topic3Desc": "Intrusive thoughts, cycles of doubt, and compulsive rituals",
    "practice.topic4Title": "Trauma & Grief",
    "practice.topic4Desc": "Bereavement, overwhelming life events, and traces of collective trauma",
    "practice.topic5Title": "Fears & Phobias",
    "practice.topic5Desc": "Intense avoidance and symptom formations around specific objects or situations",
    "practice.topic6Title": "Depressive Symptoms",
    "practice.topic6Desc": "Loss of vitality and meaning, low mood, and subjective withdrawal",
    "practice.topic7Title": "Self-Harm Tendencies",
    "practice.topic7Desc": "Unspoken psychic pain enacted through the body and impulsive states",
    "practice.topic8Title": "Attention Difficulties (ADHD)",
    "practice.topic8Desc": "Distractibility, procrastination, and executive-focus struggles",
    "practice.topic9Title": "Addictions",
    "practice.topic9Desc": "Recurring cycles of substance, object, or behavioral dependency",
    "practice.topic10Title": "Relationship & Attachment Issues",
    "practice.topic10Desc": "Intimacy, boundaries, fear of abandonment, and repeating relational impasses",
    "practice.focusFooterNote": "Beyond diagnostic labels, every symptom is listened to within the person’s singular subjective history.",
    "practice.focusFooterCta": "Schedule an Initial Consultation",
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
    "practice.profileOrientation": "LACANIAN PSYCHOANALYTIC ORIENTATION",
    "practice.profileCaptionSub": "Clinical Psychologist, Ph.D. • University at Buffalo (SUNY) CSPC, 2026",
    "practice.profileTitle": "Listening Analytically to the Meaning of Symptoms",
    "practice.profileDesc": "A Lacanian psychoanalytic orientation does not treat a symptom as a fault to silence. It listens to it as a ciphered expression of unconscious desire and conflicts that have not yet found words, carried in bodily experience or relationships. Sessions accompany each subject in assuming responsibility for their own desire rather than following standard prescriptions.",
    "practice.profileEthos": "Every consultation is listened to within the person’s own words, subjective temporality, and singular life history, guided by strict confidentiality and professional ethics.",
    "practice.profileCredsAria": "Academic equivalency and continuing education records",
    "practice.profileCred1Tag": "WES · DOCTORAL EQUIVALENCY",
    "practice.profileCred1Title": "U.S. Doctoral Equivalency",
    "practice.profileCred1Desc": "WES evaluation confirming U.S. doctoral equivalency in Clinical Psychology (METU Ph.D.).",
    "practice.profileCred2Tag": "NYSED · EDUCATION REQUIREMENT",
    "practice.profileCred2Title": "First Education Requirement",
    "practice.profileCred2Desc": "NYSED first education requirement met; further psychoanalytic training remains ongoing.",
    "practice.profileCred3Tag": "APsA · CONTINUING EDUCATION",
    "practice.profileCred3Title": "APsA 2026 CE Credit",
    "practice.profileCred3Desc": "44.5 continuing education contact hours recorded at the APsA 2026 National Meeting.",
    "practice.profileCredentials": "WES evaluation of U.S. doctoral equivalency • NYSED: first education requirement met; further psychoanalytic training remains • APsA 2026 continuing education credit",
    "practice.profileCta": "Request Consultation",
    "practice.profileVerifyLink": "Academic verification & records",
    "practice.profileLangs": "Turkish • English (C1) • Kurmanji",
    "practice.pillarsEyebrow": "AREAS OF PRACTICE & EXPERTISE",
    "practice.pillarsTitle": "Three Core Clinical & Institutional Pillars",
    "practice.pillarsSubtitle": "Deep clinical expertise spanning individual psychoanalytic psychotherapy, professional supervision, and frontline trauma consultation.",
    "practice.card1Number": "01 / PSYCHOANALYSIS & THERAPY",
    "practice.card1Title": "Individual Psychoanalytic Psychotherapy",
    "practice.card1Desc": "Individual psychoanalytic psychotherapy for adults. Guided by free association, the work explores unconscious dynamics related to anxiety, grief, relationship impasses, obsessions, and conflicts around identity.",
    "practice.card1Item1": "Free association and close attention to speech",
    "practice.card1Item2": "Lacanian punctuation (scansion) and session rhythm",
    "practice.card1Item3": "Exploring recurring patterns and impasses of desire",
    "practice.card1Item4": "Sessions available in Turkish, English (C1), and Kurmanji",
    "practice.card1Format": "<strong>Format:</strong> Session format and current in-person availability are confirmed before an appointment.",
    "practice.card1Cta": "Request an Initial Consultation",
    "practice.card2Number": "02 / SUPERVISION",
    "practice.card2Title": "Clinical Supervision & Case Formulation",
    "practice.card2Desc": "Case supervision for clinical psychologists, psychotherapists, psychiatrists, and counselors. The work may focus on the structure of a client’s discourse, transference and countertransference impasses, and the clinician’s analytic stance.",
    "practice.card2Item1": "Lacanian structural formulation (neurosis, psychosis, perversion)",
    "practice.card2Item2": "Working with transference and the analyst’s desire",
    "practice.card2Item3": "Considering secondary trauma in severe trauma and crisis cases",
    "practice.card2Item4": "Individual or small, closed groups of 2–4 participants",
    "practice.card2Scope": "<strong>Context:</strong> Informed by experience at METU AYNA Clinical Psychology Support Unit.",
    "practice.card2Cta": "Inquire About Supervision",
    "practice.card3Number": "03 / MHPSS & TRAINING",
    "practice.card3Title": "Field & Organizational Trauma Consultation",
    "practice.card3Desc": "Organizational mental health and psychosocial support (MHPSS) and trauma consultation for humanitarian organizations, NGOs, crisis teams, and staff working in disaster settings.",
    "practice.card3Item1": "MHPSS programming and organizational capacity development",
    "practice.card3Item2": "Protocols to address compassion fatigue and prevent burnout",
    "practice.card3Item3": "Field programming aligned with IASC Guidelines",
    "practice.card3Item4": "Experience in Iraq, South Sudan, and the February 6 earthquake response",
    "practice.card3Scope": "<strong>Organizational:</strong> Workshops tailored to an organization’s needs.",
    "practice.card3Cta": "Request Organizational Consultation",
    "practice.frameEyebrow": "FRAME & CONFIDENTIALITY",
    "practice.frameTitle": "Clinical Frame & Professional Confidentiality",
    "practice.frameDesc": "The frame for sessions, confidentiality, and its limits are discussed together before clinical work begins.",
    "practice.frameItem1": "✓ <strong>Frame:</strong> Session frequency and format are planned together.",
    "practice.frameItem2": "✓ <strong>Confidentiality:</strong> Its terms and limits are clarified before the first session.",
    "practice.frameItem3": "✓ <strong>Online sessions:</strong> The platform and technical arrangements are confirmed before an appointment.",
    "practice.frameItem1Title": "Analytical Frame & Frequency",
    "practice.frameItem1Desc": "Session frequency and methodology are planned together with the client.",
    "practice.frameItem2Title": "Professional & Ethical Confidentiality",
    "practice.frameItem2Desc": "Confidentiality terms and limits are clarified before the first session.",
    "practice.frameItem3Title": "Online & Digital Setup",
    "practice.frameItem3Desc": "The platform and technical arrangements are confirmed prior to an appointment.",
    "practice.feesEyebrow": "SESSION FRAME",
    "practice.feesTitle": "Fees & Availability",
    "practice.feesDesc": "Fees and current availability are clarified directly before an initial consultation is arranged.",
    "practice.feesPoint1Title": "Direct Communication:",
    "practice.feesPoint1Desc": "Session fees and scheduling availability are shared directly prior to the initial consultation.",
    "practice.feesPoint2Title": "Session Format:",
    "practice.feesPoint2Desc": "Online (video call) and in-person options are evaluated during initial contact.",
    "practice.feesPoint3Title": "Data Privacy:",
    "practice.feesPoint3Desc": "For your confidentiality, no sensitive health or therapy details are requested via form.",
    "practice.feesCta": "Inquire About Fees & Availability",
    "practice.feesReassurance": "All questions are answered directly prior to the initial consultation.",
    "practice.faqEyebrow": "CLINICAL PROCESS & FRAME",
    "practice.faqTitle": "The Initial Consultation & Working Frame",
    "practice.faq1Desc": "Psychoanalytic work begins with an initial consultation, serving as a mutual introduction between the client and analyst. In this opening session, the reasons for seeking therapy, personal expectations, and suitability for psychoanalytic exploration are carefully assessed; session frequency, working language, and the foundational parameters of the analytical frame are clarified together.",
    "practice.faq2Desc": "Sessions may be conducted in person or online, depending on individual clinical needs and geographic location. The suitability of remote meetings is explored during the initial consultation; secure communication platforms, time zones, and scheduling availability are established prior to beginning.",
    "practice.faq3Desc": "Language plays a constitutive role in giving voice to unconscious processes and personal truth. Accordingly, sessions are conducted in whichever language the client feels most comfortable, uncensored, and authentic—offering work in <strong>Turkish</strong>, <strong>English</strong>, or <strong>Kurmanji</strong>.",
    "practice.faqCtaTitle": "Plan the first step together.",
    "practice.faqCtaNote": "Feel free to reach out directly to discuss consultation details and availability.",
    "practice.faqCta": "Request an Initial Consultation",
    "about.eventGalleryPhoto1": "From the ‘Loneliness and Psychoanalytic Perspective’ presentation at Boğaziçi University’s 11th Psychology Day.",
    "about.eventGalleryPhoto2": "During the talk ‘From Pathological Loneliness to Subjective Sociality’ at Boğaziçi University.",
    "about.eventGalleryCaption1": "Loneliness and a psychoanalytic perspective",
    "about.eventGalleryCaption2": "11th Psychology Day · April 27, 2025",
    "about.bogaziciKicker": "SELECTED PRESENTATION · APRIL 27, 2025",
    "about.ipaInstTag": "International Psychoanalytical Association",
    "about.ipaDurationChip": "12-Month Project",
    "about.ipaScopeChip": "Collective Trauma & Fieldwork",
    "about.aynaInstTag": "METU · DergiPark Academic",
    "about.peerCertId": "DergiPark Reviewer Certificate · ID: 1817613",
    "about.peerCertView": "View certificate ↗",
    "about.peerCertVerify": "Verify ↗",
    "about.peerRoleChip": "ULAKBİM Indexed Journal",
    "about.peerScopeChip": "Clinical Psychoanalysis & Theory",
    "about.baGradNote": "Undergraduate degree in Psychology (2005) and national psychology student congress years.",
    "about.baGradPhotoTitle": "B.A. Graduation (2005)",
    "about.baGradPhotoSub": "Click to enlarge",
    "about.hiMissionOrderLink": "Mission Order (PDF) ↗",
    "fieldwork.2020.missionOrder": "Official Mission Order (Ordre de Mission · PDF) ↗",
    "fieldwork.2017.certLink": "Erbil Advanced Psychosocial Support Training Certificate (ACF · PDF) ↗",
    "about.pubCountBadge": "4 Peer-Reviewed Articles",
    "about.pubArchiveLink": "Archive ↗",
    "about.pubIndexNote": "DergiPark · ULAKBİM · Google Scholar · ORCID",
    "about.talksBadge": "Congress & Symposium Records",
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
    "footer.brandSub": "Clinical Psychologist, Psychoanalyst & Clinical Supervisor",
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
    "pub.heroEyebrow": "PUBLICATIONS & SCHOLARLY WORK",
    "pub.heroSubBadge": "PEER-REVIEWED ARCHIVE • DISSERTATION • PROCEEDINGS",
    "pub.heroTitle": "Publications, Dissertations & Presentations",
    "pub.heroLead": "Peer-reviewed articles and presentations on psychoanalytic theory, language, the paternal function, and clinical formulations of social trauma.",
    "pub.axesAria": "Theoretical research axes",
    "pub.axis1Kicker": "AXIS 01 • STRUCTURE & LANGUAGE",
    "pub.axis1Title": "Paternal Function & Psychic Structures",
    "pub.axis1Desc": "Signifying chain, Name-of-the-Father, and foreclosure across psychosis and obsessional neurosis.",
    "pub.axis2Kicker": "AXIS 02 • SUPERVISION",
    "pub.axis2Title": "Discourse & Analytic Listening",
    "pub.axis2Desc": "Transference impasses and the ethical listening position of clinicians in crisis settings.",
    "pub.axis3Kicker": "AXIS 03 • SOCIAL TRAUMA",
    "pub.axis3Title": "Genocide, Language & Subjectivation",
    "pub.axis3Desc": "Traces of collective violence in speech, paranoiac knowledge, and subjective sociality.",
    "pub.heroIdsAria": "Verified academic identifiers and indexes",
    "pub.idScholarVal": "Citation & Publication Index",
    "pub.idDergiparkVal": "ULAKBİM Record",
    "pub.ledgerAria": "Scholarly corpus inventory",
    "pub.ledgerEyebrow": "SCHOLARLY CORPUS INVENTORY",
    "pub.ledger1Cat": "DOCTORAL MONOGRAPH • METU PH.D.",
    "pub.ledger1Title": "Social Trauma & Discourse in Clinical Supervision",
    "pub.ledger2Cat": "PEER-REVIEWED JOURNAL ARTICLES • 4 PAPERS",
    "pub.ledger2Title": "AYNA Clinical Psychology, Turkish Psychological Articles & Psychology Kurdî",
    "pub.ledger3Cat": "INTERNATIONAL SYMPOSIA & CONGRESSES • 4 PRESENTATIONS",
    "pub.ledger3Title": "University at Buffalo CSPC, WPA Prague, Boğaziçi & ICCP",
    "pub.ledger4Cat": "ACCREDITATIONS & CONTINUING ED • 4 CREDENTIALS",
    "pub.ledger4Title": "APsA San Francisco (44.5 CE), IPU Berlin, GATA & DAPHB",
    "pub.ledger5Cat": "RESEARCH GRANT • IPA LONDON",
    "pub.ledger5Title": "IPA Global Research Grant (12-Month Supported Project)",
    "pub.filterAria": "Filter publications by category",
    "pub.filterAll": "All",
    "pub.filterThesis": "Ph.D. Dissertation",
    "pub.filterArticles": "Peer-Reviewed Articles",
    "pub.filterTalks": "Symposia & Talks",
    "pub.statThesesLabel": "Graduate Theses (METU Ph.D. & Ankara Univ. M.S.)",
    "pub.statArticlesLabel": "Peer-Reviewed Articles & Translation (AYNA, TPA, Kurdî)",
    "pub.statTalksLabel": "Symposia & Congress Proceedings (UB CSPC, WPA...)",
    "pub.statAccreditationLabel": "International Accreditations & CE (APsA, IPU Berlin...)",
    "pub.statGrantsLabel": "IPA Research Grant (London)",
    "pub.filterThesis": "Graduate Theses",
    "pub.filterTalks": "Symposia & Congresses",
    "pub.filterAccreditation": "Accreditations & Training",
    "pub.filterReview": "Research Grant",
    "pub.filterStatusAll": "16 Verified Scholarly Records • Chronological & Thematic Archive",
    "pub.thesisPill": "DOCTORAL MONOGRAPH · PH.D.",
    "pub.thesisDesc": "This doctoral monograph examines the clinical supervision discourse of local mental health workers in the Nineveh Plains of Iraq following the ISIS/Êzidî genocide through Lacanian psychoanalytic theory, the Four Discourses, and social trauma.",
    "pub.thesisMetaKeywords": "Lacanian Discourse Analysis • Social Trauma",
    "pub.ankaraPill": "CLINICAL PSYCHOLOGY · M.S.",
    "pub.ankaraDesc": "Empirical clinical psychology master's thesis investigating the predictive roles of adult attachment styles, early maladaptive schemas (EMS), and self-regulation on psychological symptoms (depression, anxiety, and somatization).",
    "pub.ankaraAdvisor": "Thesis Advisor: Prof. Dr. Nesrin Hisli Şahin",
    "pub.ayna2024Desc": "Examines foreclosure (forclusion) of the Name-of-the-Father signifier from the symbolic order as the fundamental psychoanalytic mechanism distinguishing psychosis from neurosis, and reconceptualizes the paternal function in the clinic of psychosis.",
    "pub.ayna2021Desc": "Examines the tension between desire and the law in obsessional neurosis, how the symbolic function of the father is positioned by the subject, and its clinical manifestations from a Lacanian psychoanalytic perspective.",
    "pub.tpyDesc": "Turkish psychometric standardization of the Experiences in Close Relationships Inventory (ECR-I), empirically evaluating the relationships among attachment dimensions, self-perception, negative automatic thoughts, and psychopathological symptoms.",
    "pub.kurdiDesc": "Public-facing psychoanalytic article examining the subject's movement from pathological isolation toward subjective sociality within collective bonds through Lacanian theory.",
    "pub.bogaziciDesc": "Invited symposium talk addressing how loneliness can be transformed from pathological isolation into an opening for subjectivation through the symbolic order, via Lacan's mirror stage and the Other.",
    "pub.bursaPill": "CONGRESS ORAL PAPER",
    "pub.bursaDesc": "Oral presentation examining the emotion-cognition dichotomy through Antonio Damasio's 'Descartes' Error' and emotional intelligence frameworks.",
    "pub.bursaCaption": "9th National Psychology Students Congress · Bursa · Official Certificate (1800×1290)",
    "pub.apsaPill": "CONTINUING MEDICAL EDUCATION (CE) • 44.5 HOURS",
    "pub.apsaDesc": "Participation in the APsA 2026 National Meeting in San Francisco; awarded 44.5 AMA PRA Category 1 Credits / CE hours covering contemporary psychoanalytic technique, clinical practice, and advanced case deliberations.",
    "pub.ipuPill": "60 ACADEMIC HOURS • CONTEMPORARY PSYCHOANALYSIS",
    "pub.ipuDesc": "International Summer School at the International Psychoanalytic University (IPU) Berlin on 'Contemporary Developments in Psychoanalysis' (60 academic hours), accredited intensive training in Berlin, Germany.",
    "pub.gataPill": "MILITARY PSYCHIATRY CONGRESS • CRISIS INTERVENTION",
    "pub.gataDesc": "8th Military Psychiatry Days Congress organized by Gulhane Military Medical Academy (GATA) Department of Psychiatry in Ankara, Turkey: Crisis intervention and psychological trauma clinical training certificate.",
    "pub.traumaPill": "INTERNATIONAL TRAUMA SYMPOSIUM • CLINICAL INTERVENTIONS",
    "pub.traumaDesc": "6th International Psychological Trauma Symposium organized by DAPHB in Istanbul, Turkey; certified training in post-traumatic clinical interventions.",
    "pub.ipaPill": "IPA GLOBAL RESEARCH GRANT",
    "pub.ipaDesc": "12-month research program funded by the International Psychoanalytical Association (IPA) Research Committee: Investigating qualitative psychoanalytic clinical supervision and discourse analysis in social trauma and psychosocial field work.",
    "pub.copyCitation": "Copy Citation",
    "pub.thesisSpecsAria": "Doctoral dissertation bibliographic specifications",
    "pub.specInstLabel": "INSTITUTION & SCHOOL",
    "pub.specInstVal": "Middle East Technical University (METU) · Ph.D. in Clinical Psychology",
    "pub.specAdvisorLabel": "DISSERTATION ADVISOR",
    "pub.specFieldLabel": "FIELD SITE & THEORETICAL AXIS",
    "pub.specFieldVal": "Nineveh Plains, Iraq · Lacanian Discourse Analysis & Supervision",
    "pub.specEquivLabel": "INTERNATIONAL ACCREDITATION",
    "pub.specEquivVal": "WES U.S. Doctoral Equivalency · Registration No: 15141",
    "pub.symposiumPill": "INTERNATIONAL SYMPOSIUM",
    "pub.cspcDesc": "Presented at the University at Buffalo (SUNY) CSPC 2026 Spring Symposium, this paper examines the genocide of Êzidî women through Lacanian accounts of paranoiac knowledge and language—analyzing how violence targets the symbolic order and communication as “communicide.”",
    "pub.cspcTopicTag": "Paranoiac Language & Genocide",
    "pub.wpaPill": "WORLD CONGRESS OF PSYCHIATRY",
    "pub.wpaDesc": "Accepted for the 25th World Congress of Psychiatry in Prague, this study uses a Lacanian psychoanalytic perspective to examine transference, countertransference, and secondary trauma among mental health workers supporting survivors of the Êzidî genocide in Iraq’s Nineveh Plains.",
    "pub.wpaTopicTag": "Clinical Supervision & Social Trauma",
    "pub.invitedTalkPill": "INVITED KEYNOTE TALK",
    "pub.bogaziciTopicTag1": "The Mirror Stage (Le stade du miroir)",
    "pub.bogaziciTopicTag2": "Psychoanalytic Subjectivation",
    "pub.peerReviewedPill": "ULAKBİM PEER-REVIEWED JOURNAL",
    "pub.ayna2024Pages": "Vol. 11 · Issue 1 · pp. 1–37",
    "pub.ayna2024Topic": "Paternal Metaphor & Foreclosure (Forclusion)",
    "pub.interactiveTopologyBtn": "Interactive Topological Diagram →",
    "pub.ayna2021Pages": "Vol. 8 · Issue 2 · pp. 199–220",
    "pub.ayna2021Topic": "Obsessional Neurosis & Name-of-the-Father",
    "pub.kurdiTypePill": "JOURNAL PUBLICATION · KURMANJI",
    "pub.kurdiMetaTranslator": "Translated by Aydin Rengîn",
    "pub.kurdiMetaLang": "Language: Kurmanji",
    "pub.tpyTypePill": "EMPIRICAL RESEARCH ARTICLE",
    "pub.tpyMetaCoauthor": "Co-author: Prof. Dr. Nesrin Hisli Şahin",
    "pub.tpyMetaTopic": "Adult Attachment & Schemas",
    "pub.iccpTypePill": "INTERNATIONAL CONGRESS PAPER",
    "pub.iccpDesc": "International conference paper examining the relationships among attachment patterns, early maladaptive schemas, self-regulation processes, and psychological symptoms.",
    "pub.iccpMetaTopic": "Attachment, Schemas & Self-Regulation",
    "pub.reviewTypePill": "PEER-REVIEW RECORD",
    "pub.reviewDesc": "Double-blind academic peer-review evaluation record completed for the peer-reviewed AYNA Clinical Psychology Journal via TÜBİTAK ULAKBİM DergiPark.",
    "pub.reviewMetaId": "Record No: 1845184",
    "pub.reviewMetaRole": "Double-Blind Peer Review",
    "pub.reviewCaption": "DergiPark / AYNA Clinical Psychology Journal · Verified Peer-Review Certificate",
    "pub.hubAria": "Academic indexes and verifiable researcher profiles",
    "pub.hubEyebrow": "SCHOLARLY INDEXES & OPEN-ACCESS VERIFICATION",
    "pub.hubTitle": "International Academic Profiles & Citation Records",
    "pub.hubDesc": "Peer-reviewed journal articles, ORCID researcher record, international conference proceedings, and the open-access doctoral dissertation can be verified directly across official scholarly databases.",
    "pub.hubScholarSub": "Citation index and academic publication list",
    "pub.hubOrcidSub": "International researcher identifier record",
    "pub.hubDergiparkName": "DergiPark Researcher Profile",
    "pub.hubDergiparkSub": "National peer-reviewed articles & review record",
    "pub.hubRgSub": "Research outputs and academic network",
    "footer.splashReplay": "Back to top",
    "practice.clinicianEyebrow": "FOR MENTAL HEALTH PROFESSIONALS & CLINICIANS",
    "practice.clinicianTitle": "Supervision, Case Formulation & Seminar Study Groups",
    "practice.clinicianIntro": "Structured professional programs for clinical psychologists, psychotherapists, psychiatrists, and counselors focusing on psychoanalytic discourse, transference dynamics, and analytic posture.",
    "practice.prog1Tag": "CLINICAL SUPERVISION",
    "practice.prog1Title": "Individual & Small Group Supervision",
    "practice.prog1Desc": "Comprehending structural discourse, untangling transference and countertransference, and reinforcing the clinician's analytic position. Backed by METU AYNA Clinical Unit experience.",
    "practice.prog1Cta": "Apply for Supervision",
    "practice.prog2Tag": "APPLIED WORKSHOP",
    "practice.prog2Title": "Psychoanalytic Case Formulation",
    "practice.prog2Desc": "Modular case formulation training based on Schema L, signifying chains, graph of desire, and structural diagnostic axes. Available on demand.",
    "practice.prog2Cta": "Submit Workshop Inquiry",
    "practice.prog3Tag": "EVENT & STUDY GROUP",
    "practice.prog3Title": "Lacan Seminars Reading Group",
    "practice.prog3Desc": "Line-by-line close reading of Jacques Lacan's seminar texts exploring conceptual and clinical ramifications. Bi-weekly closed online cartel format.",
    "practice.prog3Cta": "Pre-Register for Reading Group",
    "practice.clinicianFooterNote": "Supervision and training are tailored to clinicians' needs; institutions or peer groups may request custom syllabi.",
    "practice.clinicianDirectCta": "Contact Directly",
    "practice.clinicianResearchLink": "Explore Theoretical Models & Articles",
    "practice.homeCalloutPill": "FOR MENTAL HEALTH PROFESSIONALS",
    "practice.homeCalloutText": "Clinical supervision, psychoanalytic case formulation, and Lacan seminar reading groups for psychologists and clinicians.",
    "practice.homeCalloutLink": "Explore Professional Programs",
    "research.schemasEyebrow": "THEORETICAL SCHEMAS & FIELDWORK TOPOLOGY",
    "research.schemasTitle": "Conceptual Diagrams, Doctoral Thesis & Trilingual Psychoanalysis Dictionary",
    "research.schemasIntro": "Dr. Ali Ihsan Yaka's conceptual schemas from his obsessional neurosis paper, METU doctoral fieldwork topology, and the trilingual psychoanalysis terminology study across English, Kurmancî, and Turkish.",
    "research.schema1Tag": "CLINICAL RESEARCH DIAGRAMS",
    "research.schema1Title": "Obsessional Structure & The Impasse of Desire",
    "research.schema1Desc": "Structural schemas from Freud's Rat Man to Lacan's Seminars IV & V: The split subject's ($) strategy of impossible desire, doubt, debt, and procrastination against the demand of the Other (A).",
    "research.schema2Tag": "METU PH.D. FIELDWORK TOPOLOGY",
    "research.schema2Title": "Nineveh & Iraq Fieldwork Discourse Matrix",
    "research.schema2Desc": "Developed in the 2024 METU Ph.D. dissertation, mapping post-conflict collective mourning, violence, and trauma through Lacan's Four Discourses (Master, University, Hysteric, Analyst).",
    "research.schema3Tag": "TRILINGUAL TERMINOLOGY STUDY",
    "research.schema3Title": "Trilingual Psychoanalysis Dictionary",
    "research.schema3Desc": "Comparative psychoanalytic terminology matrix compiled across English, Kurdish (Kurmancî), and Turkish to facilitate multilingual clinical listening and conceptual rigor.",
    "research.schemaToolbarObsessional": "Obsessional Neurosis • Schema L & Graph of Desire",
    "research.schemaToolbarL": "4K Vector Diagram",
    "research.schemaFocus": "Focus:",
    "research.schemaTheory": "Theoretical Basis:",
    "research.schemaToolbarDiscourses": "Field Discourse Analysis • Lacan's Four Discourses",
    "research.schemaInstitute": "Institution & Year:",
    "research.schemaMethod": "Method:",
    "guncel.heroPill": "CURRENT SYMPOSIA & EVENTS",
    "guncel.heroTitle": "Academic Work, Symposia & Announcements",
    "guncel.heroLead": "Dr. Ali Ihsan Yaka's research at the University at Buffalo CSPC, international congress papers, research grants, and current clinical events.",
    "guncel.apsaCredits": "44.5 Continuing Education Credits",
    "practice.prog1Status": "Current availability confirmed upon inquiry",
    "practice.prog2Status": "Available on demand · capacity confirmed",
    "practice.prog3Status": "Contact for schedule",
    "meta.publicationsTitle": "Publications, Dissertations & Presentations | Dr. Ali Ihsan Yaka, Ph.D.",
    "about.bogaziciTalkAlt": "Dr. Ali Ihsan Yaka presenting at Boğaziçi University",
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
    "Dr. Ali Ihsan Yaka'nın portresi": "Portrait of Dr. Ali Ihsan Yaka",
    "American Psychoanalytic Association 2026 katılım belgesinin önizlemesi": "Preview of the 2026 American Psychoanalytic Association attendance certificate",
    "Ali Ihsan Yaka'nın Boğaziçi Üniversitesi XI. Psikoloji Günü'ndeki sunumundan": "A photograph of Ali Ihsan Yaka presenting at Boğaziçi University’s 11th Psychology Day",
    "Dr. Ali Ihsan Yaka Klinik Görünüm": "Clinical portrait of Dr. Ali Ihsan Yaka",
    "University at Buffalo CSPC Spring 2026 Symposium Afişi": "Poster for the University at Buffalo CSPC Spring 2026 Symposium",
    "25. Dünya Psikiyatri Kongresi (WPA) e-Poster Belgesi": "E-poster for the 25th World Congress of Psychiatry (WPA)",
    "Dr. Ali Ihsan Yaka Boğaziçi Üniversitesi XI. Psikoloji Günü'nde Yalnızlık ve Psikanalitik Perspektif başlıklı konuşmasını yaparken": "Dr. Ali Ihsan Yaka speaking on loneliness and the psychoanalytic perspective at Boğaziçi University’s 11th Psychology Day",
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
    "Dr. Ali Ihsan Yaka'nın University at Buffalo CSPC bünyesindeki araştırmaları, uluslararası kongre bildirileri, araştırma bursları ve güncel klinik etkinlikleri.": "Research at the University at Buffalo CSPC, international conference presentations, research grants, and recent clinical events.",
    "CSPC Yıllık Sempozyumu: “Dildeki Paranoid Boyut ve Soykırım”": "CSPC Annual Symposium: “The Paranoid Dimension of Language and Genocide”",
    "University at Buffalo Center for the Study of Psychoanalysis & Culture (CSPC) 2026 Bahar Sempozyumu kapsamında sunulan bu çalışma; Êzidî kadın kırımı ve soykırımını Lacanyen psikanalitik kuramın paranoid bilgi ve dil yapılanması üzerinden çözümler. Şiddetin yalnızca fiziksel bir imha değil, aynı zamanda simgesel düzeni ve iletişimi hedef alan bir \"iletişim-kırım\" (communicide) olarak nasıl inşa edildiğini irdeler.": "Presented at the University at Buffalo CSPC 2026 Spring Symposium, this paper examines the genocide of Êzidî women through Lacanian accounts of paranoid knowledge and language. It considers how violence targets not only bodies but also symbolic order and communication, a process described as “communicide.”",
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
    "Obsesyonel Yapıda Baba İşlevinin Lacanyen Açıdan İncelenmesi": "Examining the Paternal Function in Obsessional Structure from a Lacanian Perspective",
    "Irak'taki Ruh Sağlığı Çalışanlarının Söyleminin İncelenmesi: Klinik Süpervizyonda Toplumsal Travmaya Lacanyen Bir Yaklaşım": "Turkish Title: Examining the Discourse of Mental Health Workers in Iraq: A Lacanian Approach to Social Trauma in Clinical Supervision",
    "Makale PDF ↗": "Article PDF ↗",
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
    "2 TEZ": "2 THESES",
    "5 BİLDİRİ": "5 PAPERS",
    "4 BELGE": "4 CREDENTIALS",
    "2 KAYIT": "2 RECORDS",
    "Danışman: Prof. Dr. Faruk Gençöz": "Advisor: Prof. Dr. Faruk Gençöz",
    "ODTÜ Açık Arşiv Handle: 11511/108851": "METU Open Archive Handle: 11511/108851",
    "ANKARA ÜNİVERSİTESİ YÜKSEK LİSANS TEZİ": "ANKARA UNIVERSITY MASTER'S THESIS",
    "Ankara Üniversitesi · Sosyal Bilimler Enstitüsü": "Ankara University · Graduate School of Social Sciences",
    "Bağlanma, Şema Kuramı & Öz-Düzenleme": "Attachment, Schema Theory & Self-Regulation",
    "ResearchGate Tez & Araştırmacı Kaydı": "ResearchGate Thesis & Profile",
    "HAKEMLİ DERGİ MAKALESİ • TÜBİTAK ULAKBİM": "PEER-REVIEWED JOURNAL ARTICLE • TÜBİTAK ULAKBİM",
    "DergiPark Makale Sayfası": "DergiPark Article Page",
    "PDF İndir": "Download PDF",
    "TÜRK PSİKOLOJİ YAZILARI • TÜBİTAK ULAKBİM & PsycINFO": "TURKISH PSYCHOLOGICAL ARTICLES • TÜBİTAK ULAKBİM & PsycINFO",
    "Türk Psikoloji Yazıları · Cilt 13(26)": "Turkish Psychological Articles · Vol. 13(26)",
    "Türk Psikologlar Derneği Kaydı ↗": "Turkish Psychological Association Record ↗",
    "PSYCHOLOGY KURDÎ • DERGİ YAYINI": "PSYCHOLOGY KURDÎ • JOURNAL PUBLICATION",
    "Psychology Kurdî 21. Sayı ↗": "Psychology Kurdî Issue 21 ↗",
    "SEÇİLMİŞ SUNUM • CSPC YILLIK SEMPOZYUMU": "SELECTED PRESENTATION • CSPC ANNUAL SYMPOSIUM",
    "2 Mayıs 2026 · Clemens Hall 202": "May 2, 2026 · Clemens Hall 202",
    "Sempozyum Programı PDF ↗": "Symposium Program PDF ↗",
    "Tam Boy Sempozyum Afişi (792×1224) · Büyütmek için tıklayınız": "Full-Size Symposium Poster (792×1224) · Click to enlarge",
    "25. DÜNYA PSİKİYATRİ KONGRESİ • WPA PRAGUE": "25TH WORLD CONGRESS OF PSYCHIATRY • WPA PRAGUE",
    "WPA 2025 Kongre Portalı ↗": "WPA 2025 Congress Portal ↗",
    "WPA 2025 Prag Bildiri Belgesi · Büyütmek için tıklayınız": "WPA 2025 Prague Acceptance Record · Click to enlarge",
    "BOĞAZİÇİ ÜNİVERSİTESİ • 11. PSİKOLOJİ GÜNÜ": "BOĞAZİÇİ UNIVERSITY • 11TH PSYCHOLOGY DAY",
    "Albert Long Hall Sunum Fotoğrafı · Büyütmek için tıklayınız": "Albert Long Hall Presentation Photo · Click to enlarge",
    "KONGRE BİLDİRİSİ • COGNITIVE PSYCHOTHERAPY": "CONGRESS PAPER • COGNITIVE PSYCHOTHERAPY",
    "9. ULUSAL PSİKOLOJİ ÖĞRENCİLERİ KONGRESİ": "9TH NATIONAL PSYCHOLOGY STUDENTS CONGRESS",
    "Uludağ Üniversitesi · Bursa": "Uludağ University · Bursa",
    "6–9 Temmuz 2004": "July 6–9, 2004",
    "Descartes'ın Yanılgısı • Duygusal Zeka": "Descartes' Error • Emotional Intelligence",
    "IPA ARAŞTIRMA HİBESİ • INTERNATIONAL PSYCHOANALYTICAL ASSOCIATION (LONDON)": "IPA RESEARCH GRANT • INTERNATIONAL PSYCHOANALYTICAL ASSOCIATION (LONDON)",
    "Toplumsal Travma • Niteliksel Saha Çalışması": "Social Trauma • Qualitative Fieldwork",
    "IPA Resmi Portalı (ipa.world) ↗": "IPA Official Portal (ipa.world) ↗",
    "DergiPark Hakem Profili ↗": "DergiPark Reviewer Profile ↗",
    "ULUSLARARASI AKREDİTASYON • AMERICAN PSYCHOANALYTIC ASSOCIATION (APsA)": "INTERNATIONAL ACCREDITATION • AMERICAN PSYCHOANALYTIC ASSOCIATION (APsA)",
    "Çağdaş Psikanaliz • İleri Klinik Seminerler": "Contemporary Psychoanalysis • Advanced Clinical Seminars",
    "Katılım & CE Belgesini İncele (PDF) ↗": "View Attendance & CE Certificate (PDF) ↗",
    "APsA 2026 San Francisco Katılım & CE Belgesi (1082×1400) · Büyütmek için tıklayınız": "APsA 2026 San Francisco Attendance & CE Certificate (1082×1400) · Click to enlarge",
    "ULUSLARARASI AKADEMİK YAZ OKULU • IPU BERLIN (ALMANYA)": "INTERNATIONAL ACADEMIC SUMMER SCHOOL • IPU BERLIN (GERMANY)",
    "Berlin, Almanya • IPU Berlin": "Berlin, Germany • IPU Berlin",
    "Sertifikayı İncele (PDF) ↗": "View Certificate (PDF) ↗",
    "IPU Berlin Summer School Başarı Sertifikası (2434×1700) · Büyütmek için tıklayınız": "IPU Berlin Summer School Certificate (2434×1700) · Click to enlarge",
    "KONGRE EĞİTİMİ • GÜLHANE ASKERİ TIP AKADEMİSİ (GATA)": "CONGRESS TRAINING • GÜLHANE MILITARY MEDICAL ACADEMY (GATA)",
    "GATA • Ankara, Türkiye": "GATA • Ankara, Turkey",
    "Krize Müdahale • Psikolojik Travma": "Crisis Intervention • Psychological Trauma",
    "Akut Stres • Klinik Psikiyatri Günleri": "Acute Stress • Clinical Psychiatry Days",
    "Kongre Katılım Belgesini İncele (PDF) ↗": "View Congress Certificate (PDF) ↗",
    "GATA Askeri Psikiyatri Günleri Belgesi (3510×2482) · Büyütmek için tıklayınız": "GATA Military Psychiatry Days Certificate (3510×2482) · Click to enlarge",
    "ULUSLARARASI SEMPOZYUM • DAPHB (İSTANBUL)": "INTERNATIONAL SYMPOSIUM • DAPHB (ISTANBUL)",
    "İstanbul, Türkiye • DAPHB": "Istanbul, Turkey • DAPHB",
    "Uluslararası Travma Sempozyumu": "International Trauma Symposium",
    "Klinik Travma • Psikososyal Müdahale": "Clinical Trauma • Psychosocial Intervention",
    "Sempozyum Sertifikasını İncele (PDF) ↗": "View Symposium Certificate (PDF) ↗",
    "Travma Sempozyumu Katılım Sertifikası (3510×2482) · Büyütmek için tıklayınız": "Trauma Symposium Attendance Certificate (3510×2482) · Click to enlarge",
    "ORCID KAYDI": "ORCID RECORD",
    "Yayınlar, Tezler ve Bildiriler": "Publications, Dissertations and Presentations",
    "Yayınlar, Tezler ve Bildiriler | Dr. Ali Ihsan Yaka": "Publications, Dissertations and Presentations | Dr. Ali Ihsan Yaka",
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
    "Gizlilik, Mesleki Etik ve Hasta Mahremiyeti İlkeleri | Dr. Ali Ihsan Yaka": "Privacy, Professional Ethics, and Patient Confidentiality | Dr. Ali Ihsan Yaka",
    "Sayfa Bulunamadı (404) | Dr. Ali Ihsan Yaka, Ph.D.": "Page Not Found (404) | Dr. Ali Ihsan Yaka, Ph.D.",
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
    "Soru kategorileri": "Question categories",
    "Terapi Süreci": "Therapy Process",
    "Çerçeve & Randevu": "Frame & Appointments",
    "Süpervizyon & Eğitim": "Supervision & Training",
    "Gizlilik & Güvenlik": "Privacy & Safety",
    "İlk ön görüşmede neler konuşulur?": "What is discussed in the initial consultation?",
    "Ön görüşme, birbirimizi tanıma ve çalışmanın size uygun olup olmadığını birlikte değerlendirme fırsatıdır. Başvuru nedeninizi, beklentilerinizi ve varsa önceki deneyimlerinizi paylaşırsınız; seans düzeni, çalışma biçimi ve sorularınız da bu görüşmede netleştirilir. Ön görüşme bir tedavi taahhüdü değildir.": "The initial consultation is an opportunity to get acquainted and to assess together whether this work suits you. You share your reason for seeking help, your expectations, and any previous experience; the session schedule, working method, and your questions are clarified in this meeting. The initial consultation is not a commitment to treatment.",
    "Görüşmelerin gizliliği nasıl sağlanır?": "How is confidentiality ensured?",
    "Seanslarda paylaşılan bilgiler gizlidir ve rızanız olmadan üçüncü kişilerle paylaşılmaz. Yasal yükümlülüklerin ve kendinize ya da bir başkasına yönelik ciddi risk durumlarının doğurabileceği sınırlı istisnalar ön görüşmede açıkça konuşulur. Çevrim içi görüşmelerde sizin de kesintisiz ve özel bir ortamda bulunmanız gizlilik açısından önemlidir.": "Information shared in sessions is confidential and is not disclosed to third parties without your consent. The limited exceptions that legal obligations or serious risk of harm to yourself or others may require are discussed openly in the initial consultation. For online sessions, being in an uninterrupted, private setting on your side is also important for confidentiality.",
    "Hangi dillerde seans yapılıyor?": "In which languages are sessions held?",
    "Seanslar Türkçe, Kurmancî (Kürtçe) ve İngilizce olarak yürütülebilir. Klinik çalışmada kişinin kendini en rahat ifade ettiği dil önemlidir; bu nedenle dil tercihi ön görüşmede birlikte belirlenir.": "Sessions can be conducted in Turkish, Kurmanji (Kurdish), and English. In clinical work, the language in which a person feels most at ease expressing themselves matters, so the language is chosen together in the initial consultation.",
    "Terapi sürecinde ilaç yazılır mı? Psikiyatrist ile ilişkisi nedir?": "Is medication prescribed during therapy? How does it relate to a psychiatrist?",
    "Klinik psikologlar ilaç yazmaz. Psikiyatrik tedavi ihtiyacı doğarsa, değerlendirme için bir psikiyatriste yönlendirme yapılır ve gerektiğinde sizin onayınızla süreç birlikte koordine edilir. Mevcut ilaç tedavinizi kendi başınıza değiştirmemeniz önemlidir.": "Clinical psychologists do not prescribe medication. If a need for psychiatric treatment arises, you are referred to a psychiatrist for evaluation, and with your consent the process can be coordinated together. It is important not to change your current medication on your own.",
    "Ücretlendirme, randevu değişikliği ve iptal koşulları nasıldır?": "What are the fees, rescheduling, and cancellation terms?",
    "Seans ücreti ve randevu değişikliği ile iptal koşulları, çalışmaya başlamadan önce ön görüşmede açıkça paylaşılır. Böylece sürecin çerçevesi baştan şeffaf olur ve sonradan belirsizlik yaşanmaz.": "Session fees and the terms for rescheduling and cancellation are shared clearly in the initial consultation, before work begins, so that the frame is transparent from the start and no uncertainty arises later.",
    "Ruh sağlığı çalışanlarına yönelik hangi hizmetler sunuluyor?": "What services are offered for mental health professionals?",
    "Klinik süpervizyonun yanı sıra psikanalitik vaka kavramsallaştırma çalışmaları ve talep halinde eğitim ya da atölye programları planlanabilir. Bireysel veya küçük grup formatları mümkündür; kapsam ve takvim, ihtiyacınıza göre iletişim yoluyla belirlenir.": "In addition to clinical supervision, psychoanalytic case conceptualization work and, on request, training or workshop programs can be arranged. Individual or small-group formats are possible; scope and schedule are determined through contact according to your needs.",
    "Sorularınız ve seans başvurularınız için doğrudan iletişime geçebilirsiniz.": "Get in touch directly with questions or to inquire about sessions.",
    "Ön Görüşme Formunu Doldur →": "Complete the Initial Consultation Form →",
    "GÖSTEREN · S2": "SIGNIFIER · S2",
    "S1 · SÖZCE": "S1 · UTTERANCE",
    "İMGESEL · GERÇEK · SİMGESEL": "IMAGINARY · REAL · SYMBOLIC",
    "BABA METAFORU": "PATERNAL METAPHOR",
    "RUHSAL YAPILAR": "PSYCHIC STRUCTURES",
    "(Mesaj)": "(Message)",
    "(Kod)": "(Code)",
    "Ruhsal": "Psychic",
    "Yapılar": "Structures",
    "Gerçek": "Real",
    "İmgesel": "Imaginary",
    "Simgesel": "Symbolic",
    "Süjenin": "The Subject’s",
    "Dil Alanı": "Field of Language",
    "ve": "and",
    "Konuşma": "Speaking",
    "İşlevi": "Function",
    "ÇALIŞMALARDAN SEÇKİ": "SELECTED WORK",
    "Sahadan akademiye, kişisel meraklara": "From fieldwork to academia and personal interests",
    "Klinik çalışmaları, saha deneyimini ve akademik üretimi bir arada keşfedin.": "Explore clinical practice, humanitarian fieldwork, and academic research together.",
    "SAHA ÇALIŞMALARI · IRAK": "FIELDWORK · IRAQ",
    "Ninova Ovası'ndan klinik düşünceye": "From the Nineveh Plains to clinical thought",
    "Saha çalışmalarını incele": "Explore fieldwork",
    "YAYINLAR · ARAŞTIRMA": "PUBLICATIONS · RESEARCH",
    "Psikanalitik bilgi ve saha çalışması": "Psychoanalytic knowledge and fieldwork",
    "Yayınlara göz at": "Browse publications",
    "GÜNCEL · 2026": "NEWS · 2026",
    "Buffalo CSPC Sempozyumu": "Buffalo CSPC Symposium",
    "Dil, paranoya ve soykırım üzerine psikanalitik değerlendirme.": "Psychoanalytic reflections on language, paranoia, and genocide.",
    "Güncel çalışmaları gör": "View recent work",
    "EĞİTİM · ETKİNLİK": "TRAINING · EVENTS",
    "Uluslararası akademik buluşmalar": "International academic meetings",
    "Buffalo CSPC, APsA Ulusal Kongresi ve Berlin yaz okulu seçkisi.": "Highlights from Buffalo CSPC, the APsA National Meeting, and the Berlin Summer School.",
    "Eğitim ve etkinlikler": "Training and events",
    "KİŞİSEL İLGİLER & DOĞA": "PERSONAL INTERESTS & NATURE",
    "Merakın farklı biçimleri": "Different forms of curiosity",
    "Kuş gözlemciliği": "Birdwatching",
    "Fotoğrafçılık": "Photography",
    "Bağlama": "Bağlama",
    "Hakkımda daha fazlası": "More about me",
    "KLİNİK PRATİK": "CLINICAL PRACTICE",
    "Psikoterapi ve süpervizyon": "Psychotherapy and supervision",
    "Yetişkinlerle bireysel psikoterapi; klinisyenler için klinik süpervizyon.": "Individual psychotherapy for adults; clinical supervision for clinicians.",
    "Klinik hizmetleri incele": "Explore clinical services",
    "(Özgün başlık:": "(Original title:",
    "T.C. Sağlık Bakanlığı Diploma Tescili: Klinik Psikolog (Doktora) · Tescil No: 15141": "Turkish Ministry of Health Diploma Registration: Clinical Psychologist (Ph.D.) · Reg. No: 15141",
    "Yüksek lisans tezi:": "Master’s thesis:",
    "Bağlanma, Erken Dönem Uyumsuz Şemalar, Öz-Düzenleme ve Psikolojik Belirtiler Arasındaki İlişkiler": "The Relationships Between Attachment, Early Maladaptive Schemas, Self-Regulation, and Psychological Symptoms",
    "SÜDGE Eğitici Belgesi · T.C. Sağlık Bakanlığı": "SÜDGE Trainer Certificate · Turkish Ministry of Health",
    "Sürücü Davranışlarını Geliştirme Eğitimi (SÜDGE) eğitici eğitimi sertifikasyonu.": "Driver Behavior Improvement Training (SÜDGE) trainer certification.",
    "Kayseri, Türkiye": "Kayseri, Turkey",
    "Buffalo CSPC Araştırma Ofisi · Dr. Ali Ihsan Yaka (#408)": "Buffalo CSPC Research Office · Dr. Ali Ihsan Yaka (#408)",
    "CSPC Sempozyumu Programı, Tezi ve Freud Arşivi": "CSPC Symposium Program, Dissertation & Freud Archive",
    "· 7. Uluslararası Bilişsel Psikoterapi Kongresi (ICCP): Bağlanma, şemalar ve psikopatoloji üzerine bildiri (İstanbul).": "· 7th International Congress of Cognitive Psychotherapy (ICCP): Paper on attachment, schemas, and psychopathology (Istanbul).",
    "05 / MESLEKİ KATKI · DİLLER & AKREDİTASYON": "05 / PROFESSIONAL SERVICE · LANGUAGES & ACCREDITATION",
    "Psikanalitik kurumlardaki yönetim ve denetim sorumlulukları, çok dilli klinik yetkinlik ve uluslararası akredite sürekli mesleki gelişim (CPD) programları.": "Governance and supervisory roles in psychoanalytic institutions, multilingual clinical proficiency, and internationally accredited continuing professional development (CPD) programs.",
    "KURUMSAL HİZMET": "INSTITUTIONAL SERVICE",
    "Dernek Görevleri & Kurul Üyelikleri": "Association Roles & Board Memberships",
    "DENETLEME KURULU": "SUPERVISORY BOARD",
    "Freud-Lacan Psikanaliz Derneği": "Freud-Lacan Psychoanalysis Association",
    "Ankara · Psikanalitik formasyon seminerleri, dernek içi etik standartlar ve denetim süreçleri.": "Ankara · Psychoanalytic formation seminars, internal ethical standards, and auditing processes.",
    "YÖNETİM KURULU": "EXECUTIVE BOARD",
    "İnsan Hakları Derneği (İHD)": "Human Rights Association (İHD)",
    "Ankara · Hak temelli psikososyal destek, toplumsal travma sahası ve süregiden gönüllü üyelik.": "Ankara · Rights-based psychosocial support, social trauma fieldwork, and ongoing voluntary membership.",
    "KLİNİK ÇOK DİLLİLİK": "CLINICAL MULTILINGUALISM",
    "Çalışma Dilleri & Yetkinlik": "Working Languages & Proficiency",
    "Türkçe & Kurmancî": "Turkish & Kurmanji",
    "Anadil Düzeyinde": "Native Proficiency",
    "Kültürel duyarlı psikanalitik psikoterapi, anadilde klinik dinleme ve vaka kavramsallaştırması.": "Culturally sensitive psychoanalytic psychotherapy, clinical listening in the mother tongue, and case formulation.",
    "İngilizce (English)": "English",
    "IELTS Academic 7.0 (2015) · Uluslararası klinik görüşmeler, süpervizyon ve konferans sunumları.": "IELTS Academic 7.0 (2015) · International clinical consultations, supervision, and conference presentations.",
    "Resmi Özgeçmiş PDF'ini İncele ↗": "View Official CV (PDF) ↗",
    "DOĞRULANABİLİR AKADEMİK & KLİNİK PROFİLLER": "VERIFIABLE ACADEMIC & CLINICAL PROFILES",
    "Mesleki Ağ": "Professional Network",
    "Yayın & Atıf": "Publications & Citations",
    "Hakemli Yayın": "Peer-Reviewed Archive",
    "Bilimsel Profil": "Scientific Profile",
    "Doğrulanmış Uzman": "Verified Specialist",
    "SÜREKLİ EĞİTİM & AKREDİTASYON": "CONTINUING EDUCATION & ACCREDITATION",
    "Sürekli Mesleki Gelişim (CPD) ve Sertifikalar": "Continuing Professional Development (CPD) & Certificates",
    "Tümü (11)": "All (11)",
    "Psikanaliz": "Psychoanalysis",
    "Risk & Güvenlik": "Risk & Safety",
    "Uluslararası": "International",
    "44.5 CME/CE KREDİSİ": "44.5 CME/CE CREDITS",
    "Araştırma eğitimi, kültürel anlatılar, nöropsikanaliz ve klinik vaka oturumlarını içeren 44,5 saatlik sürekli eğitim akreditasyonu (San Francisco / New York).": "44.5-hour continuing education accreditation covering research training, cultural narratives, neuropsychoanalysis, and clinical case sessions (San Francisco / New York).",
    "Belgeyi PDF Olarak Görüntüle": "View Certificate (PDF)",
    "25 Mart 2025'te tamamlanan dijital platformlarda kullanıcı güvenliği, risk değerlendirmesi ve ileri klinik etik sertifikasyon programı.": "Advanced certification program in user safety, risk assessment, and clinical ethics on digital platforms, completed on March 25, 2025.",
    "KLİNİK RİSK DEĞERLENDİRME": "CLINICAL RISK ASSESSMENT",
    "16 Aralık 2024'te tamamlanan klinik risk değerlendirme, kendine zarar verme eğilimleri ve kriz protokolleri ileri eğitimi.": "Advanced training in clinical risk assessment, self-harm tendencies, and crisis protocols, completed on December 16, 2024.",
    "60 AKADEMİK SAAT": "60 ACADEMIC HOURS",
    "“The Future Now?!” Uluslararası Yaz Okulu": "“The Future Now?!” International Summer School",
    "Berlin Uluslararası Psikanalitik Üniversitesi programı kapsamında çağdaş psikanaliz, travma ve toplumsal krizler üzerine 60 saatlik yoğun eğitim.": "60-hour intensive training on contemporary psychoanalysis, trauma, and social crises at the International Psychoanalytic University Berlin.",
    "Katılım Belgesi PDF ↗": "Attendance Certificate PDF ↗",
    "İNSANİ YARDIM & SAHA": "HUMANITARIAN & FIELDWORK",
    "Kriz ve çatışma bölgelerinde çocuk gelişimi, ikincil travma ve saha çalışanlarına yönelik ileri psikososyal destek eğitimi (Temmuz 2017).": "Advanced psychosocial support training for fieldworkers on child development and secondary trauma in crisis and conflict zones (July 2017).",
    "Erbil Saha Belgesi": "Erbil Field Certificate",
    "KLİNİK PSİKİYATRİ": "CLINICAL PSYCHIATRY",
    "Gülhane Askeri Tıp Akademisi · Ankara": "Gülhane Military Medical Academy · Ankara",
    "GATA Psikiyatri Kongresi Katılımı": "GATA Psychiatry Congress Attendance",
    "29–30 Mayıs 2014 tarihli Gülhane Askeri Tıp Akademisi psikiyatri kongresi ve klinik vaka oturumlarına katılım.": "Participation in the Gülhane Military Medical Academy psychiatry congress and clinical case sessions (May 29–30, 2014).",
    "ULUSLARARASI DEĞİŞİM": "INTERNATIONAL EXCHANGE",
    "Council of International Fellowship · İsviçre": "Council of International Fellowship · Switzerland",
    "“Work with persons from other cultures” mesleki değişim programı; Zürih ve Baden merkezli kültürlerarası psikososyal çalışma (5–20 Nisan 2013).": "“Work with persons from other cultures” professional exchange program; cross-cultural psychosocial work based in Zurich and Baden (April 5–20, 2013).",
    "KONGRE & ATÖLYE": "CONGRESS & WORKSHOP",
    "“Behavioral Treatment of Anxiety Disorders” atölyesine katılım; anksiyete bozukluklarının tedavisi üzerine uzmanlaşma (İstanbul, 2–5 Haziran 2011).": "Participation in the “Behavioral Treatment of Anxiety Disorders” workshop; specialized training in the treatment of anxiety disorders (Istanbul, June 2–5, 2011).",
    "2010 · T.C. SAĞLIK BAKANLIĞI": "2010 · MINISTRY OF HEALTH (TR)",
    "EĞİTİCİ EĞİTİMİ": "TRAINER CERTIFICATION",
    "Temel Sağlık Hizmetleri Genel Müdürlüğü": "Directorate General of Primary Health Care",
    "SÜDGE Programı Eğitici Eğitimi": "SÜDGE Program Trainer Certification",
    "Sürücü Davranışlarını Geliştirme Eğitimi (SÜDGE) Programı çerçevesinde riskli davranış analizi ve eğitici eğitimi (20–21 Aralık 2010, No: 2010-06).": "Risky behavior analysis and trainer certification under the Driver Behavior Improvement Training (SÜDGE) Program (Dec 20–21, 2010, No: 2010-06).",
    "Bakanlık Tescilli Belge": "Ministry Registered Certificate",
    "TOPLUMSAL TRAVMA": "SOCIAL TRAUMA",
    "Travma Çalışmaları Derneği": "Association for Trauma Studies",
    "“Traumas in Daily Life” (Günlük Yaşamda Travmalar) sempozyumu oturumları ve saha müdahale atölyeleri katılımı.": "Participation in the “Traumas in Daily Life” symposium sessions and field intervention workshops.",
    "2004 · ULUDAĞ ÜNİV.": "2004 · ULUDAĞ UNIV.",
    "BİLDİRİLİ KATILIM": "ORAL PRESENTATION",
    "9. Ulusal Psikoloji Öğrencileri Kongresi": "9th National Psychology Students Congress",
    "30 Haziran–4 Temmuz 2004 tarihli ulusal kongrede bildirili katılım ve bilimsel araştırma sunumu.": "Oral paper presentation and scientific research contribution at the national congress (June 30–July 4, 2004).",
    "Katılım Belgesini Aç ↗": "Open Attendance Certificate ↗",
    "Klinik dinlemenin gerektirdiği sabır ve dikkat, doğanın sessizliğinde ve vizörün ardında da sürer. Kuş gözlemi, yaban hayatı ve farklı coğrafyalardaki ağaçların hikâyeleri.": "The patience and attention required by clinical listening continue in the quiet of nature and behind the viewfinder—birdwatching, wildlife, and the stories of trees across geographies.",
    "Doğa & Moon Tree (California)": "Nature & Moon Tree (California)",
    "NASA Apollo 14 misyonuyla tohumu uzayda taşınan ve California’da yeşeren tarihi \"Moon Tree\" altında doğa ve insan karşılaşmaları.": "Encounters with nature beneath the historic “Moon Tree” grown in California from a seed carried into lunar orbit aboard NASA’s Apollo 14 mission.",
    "Hizmet Odakları:": "Service Tracks:",
    "Danışanlar İçin Terapi & Destek": "Therapy & Support for Clients",
    "Ruh Sağlığı Uzmanları İçin Süpervizyon & Atölyeler →": "Supervision & Workshops for Mental Health Professionals →",
    "Hızlı Erişim:": "Quick Jump:",
    "Klinik Süpervizyon": "Clinical Supervision",
    "Vaka Kavramsallaştırma": "Case Formulation",
    "Lacan Seminerleri Okuma Grubu": "Lacan Seminars Reading Group",
    "Güncel uygunluk başvuruda teyit edilir": "Current availability confirmed upon inquiry",
    "Lacanyen Yapısal Tanı": "Lacanian Structural Diagnosis",
    "Aktarımın Yönlendirilmesi": "Direction of the Treatment & Transference",
    "2–4 Kişilik Grup / Bireysel": "Small Group (2–4) / Individual",
    "Talep üzerine · kontenjan teyit edilir": "Available on demand · capacity confirmed",
    "L Şeması & Arzu Grafı": "Schema L & Graph of Desire",
    "Nevroz • Psikoz • Perversiyon": "Neurosis • Psychosis • Perversion",
    "Klinik Dinleme Matrisi": "Clinical Listening Matrix",
    "Program takvimi için iletişim": "Contact for schedule",
    "Seminer Metinleri": "Seminar Texts",
    "Klinik Yansımalar": "Clinical Reflections",
    "Sınırlı Katılımcı": "Limited Capacity",
    "GÜNCEL SEMPOZYUM & ETKİNLİKLER": "CURRENT SYMPOSIA & EVENTS",
    "Afişin tamamını yüksek çözünürlükte incelemek için tıklayınız": "Click to view the full poster in high resolution",
    "e-Poster belgesinin tamamını yüksek çözünürlükte incelemek için tıklayınız": "Click to view the full e-Poster document in high resolution",
    "AYNA Klinik Psikoloji Dergisi": "AYNA Clinical Psychology Journal",
    "2025 – 2026 • ULUSLARARASI PSİKANALİZ BİRLİĞİ (IPA)": "2025 – 2026 • INTERNATIONAL PSYCHOANALYTICAL ASSOCIATION (IPA)",
    "IPA Küresel Araştırma Hibesi (Research Grant)": "IPA Global Research Grant",
    "Uluslararası Psikanaliz Birliği (IPA) tarafından 12 aylık araştırma desteği kapsamında fonlanan çalışma, psikanalitik kuramın kriz ve afet sahalarında pratik bir metodolojiye dönüştürülmesini ve toplumsal travma koşullarında klinik süpervizyon süreçlerini inceler.": "Funded as a 12-month research project by the International Psychoanalytical Association (IPA), this study examines the translation of psychoanalytic theory into a practical field methodology in crisis settings and clinical supervision under conditions of collective trauma.",
    "12 Aylık Desteklenen Proje • IPA London": "12-Month Supported Project • IPA London",
    "Proje Kaydını İncele →": "View Project Record →",
    "Proje Başlığı (TR)": "Project Title (TR)",
    "DESTEK KURUMU": "FUNDING INSTITUTION",
    "IPA (Londra)": "IPA (London)",
    "PROJE SÜRESİ": "PROJECT DURATION",
    "12 Ay (2025–2026)": "12 Months (2025–2026)",
    "1 PROJE": "1 PROJECT",
    "Tümü (12)": "All (12)",
    "Kriz ve çatışma bölgelerinde çocuk gelişimi, ikincil travma ve saha çalışanlarına yönelik 24 saatlik ileri psikososyal destek eğitimi (Temmuz 2017, Dr. Koen Sevenants).": "24-hour advanced training on child development, secondary trauma, and psychosocial support for field workers in crisis and conflict settings (July 2017, Dr. Koen Sevenants).",
    "KONGRE & 5 ATÖLYE": "CONGRESS & 5 WORKSHOPS",
    "İstanbul’da (2–5 Haziran 2011) düzenlenen kongre katılımı ve psikotik semptomlar, temel inançlar, olumsuz düşünce stratejileri, imgelem ve anksiyete tedavisi üzerine 5 ayrı klinik atölye sertifikası.": "Congress attendance in Istanbul (June 2–5, 2011) and 5 clinical workshop certificates on psychotic symptoms, core beliefs, negative thinking strategies, imagery in therapy, and anxiety treatment.",
    "Kongre Katılım PDF ↗": "Congress Attendance PDF ↗",
    "Psikotik Semptomlar ↗": "Psychotic Symptoms ↗",
    "Temel İnançlar ↗": "Core Beliefs ↗",
    "Olumsuz Düşünce ↗": "Negative Thinking ↗",
    "Terapide İmgelem ↗": "Imagery in Therapy ↗",
    "Anksiyete Atölyesi ↗": "Anxiety Workshop ↗",
    "2003 · ANKARA ÜNİV.": "2003 · ANKARA UNIV.",
    "PSİKOLOJİ & SANAT": "PSYCHOLOGY & ART",
    "Ankara Üniversitesi DTCF Psikoloji Bölümü": "Ankara University Department of Psychology",
    "VIII. Ulusal Psikoloji Öğrencileri Kongresi": "8th National Psychology Students Congress",
    "Ankara Üniversitesi Dil ve Tarih-Coğrafya Fakültesi Psikoloji Bölümü tarafından 2–5 Temmuz 2003 tarihlerinde düzenlenen “Psikoloji ve Sanat” temalı ulusal kongre katılım belgesi.": "Participation certificate for the 8th National Psychology Students Congress (“Psychology and Art”), hosted by Ankara University Department of Psychology on July 2–5, 2003.",
    "Kongre Katılım Belgesi (PDF) ↗": "Congress Attendance Certificate (PDF) ↗",
    "Psikotik Semptomlar Atölyesi (PDF) ↗": "Psychotic Symptoms Workshop (PDF) ↗",
    "Anksiyete Atölyesi (PDF) ↗": "Anxiety Workshop (PDF) ↗",
    "Hakemlik sertifikasının tamamını yüksek çözünürlükte incelemek için tıklayınız": "Click to view the full peer-review certificate in high resolution",
    "44,5": "44.5",
    "Saat CE Kredisi": "CE Credit Hours",
    "44,5 Sürekli Eğitim Kredisi": "44.5 Continuing Education Credits",
    "San Francisco’da 27 Ocak–1 Şubat 2026 tarihlerinde düzenlenen American Psychoanalytic Association (APsA) Ulusal Toplantısı kapsamında, sunulan en yüksek saat aralığı olan 45,5 saatin 44,5 saatine bizzat katılım sağlanarak resmi sürekli mesleki eğitim kredisi (CE / Contact Hours) tamamlanmıştır.": "Completed 44.5 official continuing education credits (CE / Contact Hours) out of the 45.5-hour maximum program offered at the American Psychoanalytic Association (APsA) 2026 National Meeting held in San Francisco from January 27 to February 1, 2026.",
    "✦ Çağdaş Psikanalitik Klinik": "✦ Contemporary Psychoanalytic Clinic",
    "✦ Sınır Durumlar & Aktarım": "✦ Borderline States & Transference",
    "✦ Psikanalitik Araştırmalar": "✦ Psychoanalytic Research",
    "✦ NYSED & WES Akreditasyonu": "✦ NYSED & WES Accreditation",
    "Katılım Belgesini Aç (PDF)": "Open Attendance Certificate (PDF)",
    "Akademik Belgeler →": "Academic Credentials →",
    "Meslektaşlarla": "With Colleagues",
    "San Francisco • Uluslararası akademisyen ve klinisyen meslektaşlarla": "San Francisco • With international academic and clinical colleagues",
    "Resmi Belge (44,5 h)": "Official Record (44.5 h)",
    "Resmi Katılım ve Sürekli Eğitim Belgesi": "Official Attendance and Continuing Education Certificate",
    "Doktora Tezi Odağı": "Doctoral Dissertation Focus",
    "Doktora Araştırması Zemin Çalışması": "Doctoral Research Fieldwork Foundation",
    "Bu saha deneyimi, Dr. Ali Ihsan Yaka’nın ODTÜ doktora tezinin (2024) ve Buffalo CSPC sunumunun klinik zeminini oluşturmuştur.": "This fieldwork experience formed the clinical foundation of Dr. Ali Ihsan Yaka’s METU doctoral dissertation (2024) and his Buffalo CSPC symposium presentation.",
    "Bağlanma Örüntüleri, Erken Dönem Uyumsuz Şemalar, Öz-Düzenleme ve Psikolojik Belirtiler Arasındaki İlişkiler": "The Relationships Between Attachment Patterns, Early Maladaptive Schemas, Self-Regulation, and Psychological Symptoms",
    "(2012). Ankara Üniversitesi Sosyal Bilimler Enstitüsü, Psikoloji (Klinik Psikoloji) Anabilim Dalı Yüksek Lisans Tezi. Tez Danışmanı: Prof. Dr. Nesrin Hisli Şahin.": "(2012). Master's Thesis, Ankara University Graduate School of Social Sciences, Department of Psychology (Clinical Psychology). Advisor: Prof. Dr. Nesrin Hisli Şahin.",
    "(2024). AYNA Klinik Psikoloji Dergisi, 11(1), 1–37. https://doi.org/10.31682/ayna.1282059": "(2024). AYNA Clinical Psychology Journal, 11(1), 1–37. https://doi.org/10.31682/ayna.1282059",
    "(2021). AYNA Klinik Psikoloji Dergisi, 8(2), 199–220. https://doi.org/10.31682/ayna.815903": "(2021). AYNA Clinical Psychology Journal, 8(2), 199–220. https://doi.org/10.31682/ayna.815903",
    "Yakın İlişkiler Envanteri’nin Kendilik Algısı, Olumsuz Otomatik Düşünceler ve Psikolojik Belirtiler Bağlamında Güvenirliği ve Geçerliği": "Reliability and Validity of the Experiences in Close Relationships Inventory in the Context of Self-Perception, Negative Automatic Thoughts, and Psychological Symptoms",
    "(2010). Türk Psikoloji Yazıları, 13(26), 64–76.": "(2010). Turkish Psychological Articles (Türk Psikoloji Yazıları), 13(26), 64–76.",
    "Psikopatolojik Yalnızlıktan Subjektif Toplumsallığa: Psikanalitik Öznelleşme Deneyimi": "From Psychopathological Loneliness to Subjective Sociality: The Experience of Psychoanalytic Subjectivation",
    ", 9(21), 61–74. Çeviri: Aydin Rengîn.": ", 9(21), 61–74. Translated by Aydin Rengîn.",
    "(5–8 Ekim 2025). 25th World Congress of Psychiatry (WPA), Prague, Czech Republic. e-Poster #3015.": "(October 5–8, 2025). 25th World Congress of Psychiatry (WPA), Prague, Czech Republic. e-Poster #3015.",
    "(19 Nisan 2025). Boğaziçi Üniversitesi 11. Psikoloji Günü: \"Yalnızlık Sempozyumu\", Albert Long Hall, İstanbul.": "(April 19, 2025). Boğaziçi University 11th Psychology Day: “Loneliness Symposium”, Albert Long Hall, Istanbul.",
    "Boğaziçi Üniversitesi": "Boğaziçi University",
    "Descartes’ın Yanılgısı ve Duygusal Zeka: Duygu ve Akıl İkilemi": "Descartes’ Error and Emotional Intelligence: The Emotion and Reason Dichotomy",
    "(6–9 Temmuz 2004). 9. Ulusal Psikoloji Öğrencileri Kongresi, Uludağ Üniversitesi, Bursa, Türkiye.": "(July 6–9, 2004). 9th National Psychology Students Congress, Uludağ University, Bursa, Turkey.",
    "Psikanalitik Bilginin Psikososyal Saha Çalışmalarında Kullanımı: Toplumsal Travmaya Psikanalitik Yaklaşım": "How Psychoanalytic Knowledge Can Be Used in Psychosocial Field Work: Psychoanalytic Approach to Social Trauma",
    "Amerikan Psikanaliz Birliği 2026 Ulusal Kongresi: 44,5 Sürekli Eğitim (CE) Kredisi": "American Psychoanalytic Association (APsA) 2026 National Meeting: 44.5 Continuing Education (CE) Credits",
    "IPU Berlin Uluslararası Yaz Okulu: Çağdaş Psikanalitik Gelişmeler (60 Akademik Saat)": "IPU Berlin International Summer School: Contemporary Developments in Psychoanalysis (60 Academic Hours)",
    "8. Gülhane Askeri Psikiyatri Günleri Kongresi": "8th Gülhane Military Psychiatry Days Congress",
    "Krize Müdahale ve Psikolojik Travma Alanında Klinik Yaklaşımlar & Sürekli Eğitim": "Clinical Approaches & Continuing Education in Crisis Intervention and Psychological Trauma",
    "(2014). 8. Gülhane Askeri Psikiyatri Günleri Kongresi: Krize Müdahale ve Psikolojik Travma. Gülhane Askeri Tıp Akademisi (GATA) Ruh Sağlığı ve Hastalıkları AD, Ankara, Türkiye.": "(2014). 8th Gülhane Military Psychiatry Days Congress: Crisis Intervention and Psychological Trauma. Gülhane Military Medical Academy (GATA) Dept. of Psychiatry, Ankara, Turkey.",
    "Travma Sonrası İyileşme, Erken Müdahale ve Psikososyal Hizmet Modelleri": "Post-Traumatic Recovery, Early Intervention, and Psychosocial Service Models",
    "(2009). VI. Uluslararası Psikolojik Travma Sempozyumu: Travma Sonrası İyileşme ve Klinik Müdahaleler. Doğal Afetler ve Travmalarda Psikososyal Hizmetler Birliği (DAPHB), İstanbul, Türkiye.": "(2009). 6th International Psychological Trauma Symposium: Post-Traumatic Recovery and Clinical Interventions. Association for Psychosocial Services in Disasters and Traumas (DAPHB), Istanbul, Turkey.",
    "ARAŞTIRMALAR · DOKTORA SONRASI & KURAMSAL YAYINLAR": "RESEARCH · POSTDOCTORAL & THEORETICAL PUBLICATIONS",
    "Psikotik Yapı ve Baba İşlevi": "Psychotic Structure and the Paternal Function",
    "Sözden ruhsal yapıya: Gösteren zinciri, Baba metaforu ve ayna evresi üzerinden ruhsal yapıların oluşumu ve topolojik analizi.": "From speech to psychic structure: Topological analysis of the formation of psychic structures through the signifying chain, the paternal metaphor, and the mirror stage.",
    "Dr. Ali Ihsan Yaka’nın": "Published in",
    "’nde yayımlanan hakemli araştırması; ana akım biyomedikal yaklaşımların semptom kataloglarına sıkışan psikoz kavramsallaştırmasını Lacanyen psikanalitik dinleme, gösteren zinciri ve topolojik formasyonlar ekseninde yeniden temellendirir.": ", Dr. Ali Ihsan Yaka’s peer-reviewed study reconceptualizes psychosis beyond mainstream biomedical symptom catalogs through Lacanian psychoanalytic listening, the signifying chain, and topological formations.",
    "YAYIN ORGANI": "JOURNAL",
    "2024 · Cilt 11, Sayı 1, ss. 1–37": "2024 · Vol. 11, Issue 1, pp. 1–37",
    "AKADEMİK DİZİN & DOI": "INDEXING & DOI",
    "KURAMSAL MODEL": "THEORETICAL MODEL",
    "Şekil 1–5 Bütüncül Topolojisi": "Integrated Topology of Figures 1–5",
    "S₁ ↔ S₂ Diyalektik Matrisi ve Borromeo Sentezi": "S₁ ↔ S₂ Dialectical Matrix & Borromean Synthesis",
    "01 / KURAMSAL TEMELLER": "01 / THEORETICAL FOUNDATIONS",
    "Epistemolojik Çerçeve: Biyomedikal Determinizm vs. Lacanyen Dinleme": "Epistemological Frame: Biomedical Determinism vs. Lacanian Listening",
    "Klinik psikanalizde bir rahatsızlığın nasıl kavramsallaştırıldığı, yalnızca teorik bir düzlemde kalmayıp sağaltım stratejilerini ve analistin dinleme etiğini doğrudan belirler.": "How a clinical condition is conceptualized in psychoanalysis is never merely theoretical—it directly determines treatment orientation and the analyst’s ethics of listening.",
    "ANA AKIM PSİKİYATRİ & DSM/ICD": "MAINSTREAM PSYCHIATRY & DSM/ICD",
    "Biyomedikal Determinizm ve Semptom Sınıflandırması": "Biomedical Determinism and Symptom Classification",
    "19. yüzyıl sonlarından itibaren psikozu gözlemlenebilir davranış bozukluklarına ve biyolojik işaretlere göre kategorize eden ana akım klinik modeldir.": "The mainstream clinical model since the late 19th century that categorizes psychosis according to observable behavioral disturbances and biological markers.",
    "Biyolojik İndirgemecilik:": "Biological Reductionism:",
    "Psikotik belirtiler nörolojik süreçlere, genetik etkenlere ve beyin kimyasına indirgenerek anlamından koparılır.": "Psychotic phenomena are severed from subjective meaning and reduced to neurological processes, genetic factors, and brain chemistry.",
    "Psikofarmakolojinin Amaçlaşması:": "Psychopharmacology as an End in Itself:",
    "İlaç sağaltımı bir klinik kolaylaştırıcı olmaktan çıkıp tedavinin birincil ve yegâne amacına dönüştürülür (Lakoff, 2005; Leader, 2011).": "Medication ceases to be a clinical facilitator and becomes the primary and sole aim of treatment (Lakoff, 2005; Leader, 2011).",
    "Sübjektifliğin ve Söylemin Dışlanması:": "Exclusion of Subjectivity and Discourse:",
    "Danışanın kendi yaşam öyküsü, arzusu ve söylemi formülasyonun dışına itilir; semptom yalnızca bastırılması gereken bir disfonksiyon sayılır.": "The patient’s life history, desire, and speech are pushed outside the formulation; the symptom is treated merely as a dysfunction to be suppressed.",
    "LACANYEN KLİNİK PSİKANALİZ": "LACANIAN CLINICAL PSYCHOANALYSIS",
    "Konuşma İşlevi ve Söylem Temelli Yapısal Teşhis": "Speaking Function and Discourse-Based Structural Diagnosis",
    "Biyolojik nedenselliğin psişik süreçleri açıklayamayacağını, psikotik yapılanmanın dil alanı ve arzu ekonomisi üzerinden şekillendiğini temel alan psikanalitik yaklaşımdır (Dor, 1999).": "A psychoanalytic approach grounded in the premise that biological causality cannot explain psychic processes, and that psychotic structure is formed through the field of language and the economy of desire (Dor, 1999).",
    "Söylem Aracılığıyla Teşhis:": "Diagnosis Through Discourse:",
    "Fenomenolojik semptomlar ile süjenin ruhsal yapısı arasındaki radikal fark ancak hastanın söylemi (parole) dinlenerek çözümlenebilir (Lacan, 1966/2006).": "The radical distinction between phenomenological symptoms and the subject’s psychic structure can only be deciphered by listening to the patient’s speech (parole) (Lacan, 1966/2006).",
    "Psikanalitik Dinleme Etiği:": "Ethics of Psychoanalytic Listening:",
    "Analist, hastayı eğiten efendi veya teşhis koyan gözetmen değil; süjenin diline ve deliliğin sekreterliğine tanıklık eden konumdadır.": "The analyst is neither an educating master nor a diagnostic overseer, but witnesses the subject’s language as a ‘secretary to the insane.’",
    "Topolojik Arzu Profili:": "Topological Desire Profile:",
    "Ruhsal yapılar stereotipik bir yörüngeyi takip ederek Baba-nın-Adları ve Baba metaforu üzerinden dilde istikrarlı topolojik özellikler üretir.": "Psychic structures follow a structural trajectory, producing stable topological properties in language through the Names-of-the-Father and the paternal metaphor.",
    "02 / KLİNİK MATRİS": "02 / CLINICAL MATRIX",
    "Üç Ruhsal Yapı ve Savunma Mekanizmaları": "Three Psychic Structures and Defense Mechanisms",
    "Freud’un": "Building on Freud’s",
    "Olumsuzlama (Verneinung, 1925)": "Negation (Verneinung, 1925)",
    "metninden yola çıkan Lacan, üç temel ruhsal yapıyı olumsuzlamanın üç farklı biçimi ve savunma mekanizması olarak kuramsallaştırmıştır. Kartlara tıklayarak 3B topolojide ilgili yolu anında izole edebilirsiniz.": ", Lacan theorized the three fundamental psychic structures as three distinct modes of negation and defense. Click any card below to isolate its pathway in the 3D topology.",
    "SAVUNMA: FORCLUSION (VERWERFUNG)": "DEFENSE: FORECLOSURE (FORCLUSION / VERWERFUNG)",
    "Psikotik Yapı": "Psychotic Structure",
    "S₁ ↓ Hesaptan / Simgeselden Düşme": "S₁ ↓ Foreclosure / Falling out of the Symbolic",
    "Simgeselden Düşme": "Falling from Symbolic",
    "Yalnızca Gerçek (Réel)": "The Real (Réel) Only",
    "Hezeyanlı Onarım": "Delusional Restitution",
    "Baba-nın-Adları (S₁) temel göstereni simgesel hesaptan düşmüştür. Simgesel düzen delindiği için Borromeo halkası çözülür; simgeselden dışlanan gösteren doğrudan Gerçek (Réel) düzende delilik, halüsinasyon ve hezeyan olarak geri döner.": "The primordial signifier of the Names-of-the-Father (S₁) is foreclosed from the symbolic account. Because the symbolic register is perforated, the Borromean knot unravels; what is foreclosed from the Symbolic returns directly in the Real as hallucination and delusion.",
    "3B Sahnede Psikotik Yolu İzole Et": "Isolate Psychotic Path in 3D Scene",
    "SAVUNMA: DÉSAVEU (VERLEUGNUNG)": "DEFENSE: DISAVOWAL (DÉSAVEU / VERLEUGNUNG)",
    "Pervert (Sapkın) Yapı": "Perverse Structure",
    "Désaveu ⟹ Simgeselde Tanı(n)mama": "Désaveu ⟹ Unrecognised in the Symbolic",
    "Simgeselde Tanı(n)mama": "Unrecognised in Symbolic",
    "İmgesel + Gerçek Kayıt": "Imaginary + Real Registers",
    "Öteki'nin Jouissance Nesnesi": "Instrument of the Other’s Jouissance",
    "Yasa ve kastrasyon simgesel olarak bilinir ancak eşzamanlı olarak inkâr edilir ve askıya alınır. Özne kendi eksikliğini üstlenmek yerine kendini Öteki'nin jouissance nesnesi ve aracı haline getirir.": "The law and castration are known symbolically yet simultaneously disavowed and suspended. Rather than assuming their own lack, the subject positions themselves as the object and instrument of the Other’s jouissance.",
    "3B Sahnede Pervert Yolu İzole Et": "Isolate Perverse Path in 3D Scene",
    "SAVUNMA: REFOULEMENT (VERDRÄNGUNG)": "DEFENSE: REPRESSION (REFOULEMENT / VERDRÄNGUNG)",
    "Nevrotik Yapı": "Neurotic Structure",
    "S₁ → S₂ · Bastırma ⟹ Simgeselde Tanı(n)ma": "S₁ → S₂ · Repression ⟹ Recognised in the Symbolic",
    "Simgeselde Tanı(n)ma": "Recognised in Symbolic",
    "R.S.I. Tam Kenetlenme": "Full R.S.I. Borromean Linking",
    "Kastrasyon Kabulü": "Acceptance of Castration",
    "Baba-nın-Adları (S₁) simgesel yasa olarak tanınır; kastrasyon ve eksiklik kabul edilir. S₂ diyakronik mesajı S₁ tarafından geriye doğru (après-coup) kapitone edilir. Semptom dilde şifrelenmiş bilinçdışı arzudur.": "The Names-of-the-Father (S₁) is recognized as symbolic law; castration and lack are accepted. The diachronic message S₂ is retroactively quilted (après-coup) by S₁. The symptom is unconscious desire ciphered in language.",
    "3B Sahnede Nevrotik Yolu İzole Et": "Isolate Neurotic Path in 3D Scene",
    "03 / BÜTÜNCÜL SENTEZ": "03 / INTEGRATED SYNTHESIS",
    "Sözden Ruhsal Yapıya 3B Topolojik Laboratuvarı": "From Speech to Psychic Structure: 3D Topological Laboratory",
    "Hareketi izleyin: Yatay çizgiler S₂’nin mesajını soldan sağa taşır. Dikey çizgiler, Baba-nın-Adları’nın S₁ kodlamasını aşağıdan yukarı kurar. Bu vektörlerin kesişmesi, üç yapıda baba metaforunun farklı biçimlerde okunmasını görünür kılar.": "Follow the motion: Horizontal vectors carry the message of S₂ from left to right. Vertical vectors establish the S₁ coding of the Names-of-the-Father from bottom to top. Their intersection makes visible how the paternal metaphor is read across the three structures.",
    "ŞEKİL 5 · TOPOLOJİK VEKTÖR LABORATUVARI": "FIGURE 5 · TOPOLOGICAL VECTOR LABORATORY",
    "Gösteren zinciri · S₂ diyakronik akış": "Signifying chain · S₂ diachronic flow",
    "Baba-nın-Adları · S₁ senkronik kodlama": "Names-of-the-Father · S₁ synchronic coding",
    "Döngüsel vektör düğümleri": "Cyclic vector nodes",
    "BÜTÜNCÜL TOPOLOJİ": "INTEGRATED TOPOLOGY",
    "Canlı Düğüm Müfettişi": "Live Node Inspector",
    "Baba İşlevi Grafiği: Gösteren Zinciri ve Ruhsal Yapılar": "Paternal Function Graph: Signifying Chain & Psychic Structures",
    "Diyakronik mesaj akışı (soldan sağa S₂) ile senkronik dikey kodlamanın (aşağıdan yukarı S₁) kesişim matrisi.": "Intersection matrix of diachronic message flow (left-to-right S₂) and synchronic vertical coding (bottom-to-top S₁).",
    "S₁ ↔ S₂ · R.S.I. (Borromeo Düğümü Sentezi)": "S₁ ↔ S₂ · R.S.I. (Borromean Knot Synthesis)",
    "Klinik Dinamik:": "Clinical Dynamic:",
    "Üç ruhsal yapının (Nevrotik, Pervert, Psikotik) konuşma işlevi ve dil alanı içindeki formasyonunu haritalandıran akademik model.": "Academic model mapping the formation of the three psychic structures (Neurotic, Perverse, Psychotic) within the speaking function and field of language.",
    "Şema, makaledeki 2–5. şekiller ve 26–29. sayfalardaki açıklamalara dayanarak web için yeniden modellenmiştir. Akademik bir sentezdir.": "Remodeled for the web based on Figures 2–5 and pages 26–29 of the article. An academic synthesis.",
    "Özgün Şemayı PDF Olarak Aç": "Open Original Diagram (PDF)",
    "04 / KAVRAMSAL GELİŞİM": "04 / CONCEPTUAL PROGRESSION",
    "Lacanyen Topolojinin Adım Adım Evrimi (Şekil 1–5)": "Step-by-Step Evolution of the Lacanian Topology (Figures 1–5)",
    "Dr. Ali Ihsan Yaka’nın makalesinde Şekil 1’den 5’e doğru ilerlerken gösteren zinciri, kodlama ve mesaj arasındaki ilişki adım adım inşa edilir.": "Across Figures 1 to 5 in Dr. Ali Ihsan Yaka’s article, the relationship among the signifying chain, coding, and the message is constructed step by step.",
    "ŞEKİL 1 · LACAN'IN ARZU GRAFİĞİ": "FIGURE 1 · LACAN’S GRAPH OF DESIRE",
    "Temel Düzey Arzu Grafı & Kapitone Noktası": "Elementary Graph of Desire & Quilting Point (Point de Capiton)",
    "A (Kod)": "A (Code)",
    "s(A) (Mesaj)": "s(A) (Message)",
    "Gösteren zinciri (S → S') ile öznenin niyet vektörü (Δ → $) kesişir. Anlam geriye doğru (après-coup) kapitone noktası s(A) ile sabitlenir. Schreber vakasında bu iki nokta arasındaki bağ kopmuştur.": "The signifying chain (S → S') intersects the subject’s intentional vector (Δ → $). Meaning is retroactively (après-coup) anchored at the quilting point s(A). In the Schreber case, the link between these two points is severed.",
    "Δ → $ kesişimi: A (Büyük Öteki) ve s(A) (Kapitone)": "Δ → $ intersection: A (Big Other) and s(A) (Quilting Point)",
    "ŞEKİL 2 · S₁ / S₂": "FIGURE 2 · S₁ / S₂",
    "Nevrotik Yapıda Gösteren Zincirinin Oluşumu": "Formation of the Signifying Chain in Neurotic Structure",
    "S₁ (Efendi)": "S₁ (Master)",
    "S₂ (Bilgi)": "S₂ (Knowledge)",
    "Anlamdan yoksun ilk gösteren (S₁ / Maître), bilgiyi ve anlamı taşıyan diğer göstereni (S₂ / Savoir) diyalektik olarak harekete geçirir. S₂, süje için \"bütünsellik-bilgisi\" (savoir-totalité) fantazisini kurar.": "The primordial signifier devoid of meaning (S₁ / Maître) dialectically sets in motion the signifier of knowledge and meaning (S₂ / Savoir). S₂ establishes the fantasy of ‘total knowledge’ (savoir-totalité) for the subject.",
    "S₁ (Simgesel Kod) → S₂ (İmgesel Anlam)": "S₁ (Symbolic Code) → S₂ (Imaginary Meaning)",
    "ŞEKİL 3 · KOD / MESAJ": "FIGURE 3 · CODE / MESSAGE",
    "Diyakronik & Senkronik Kesişim Noktaları": "Diachronic & Synchronic Intersection Points",
    "S₁ Kod": "S₁ Code",
    "S₂ Mesaj →": "S₂ Message →",
    "Soldan sağa ilerleyen diyakronik mesaj (S₂), ters yönde aşağıdan yukarı dikey yükselen efendi gösteren (S₁) tarafından senkronik olarak geriye doğru kodlanır; anlam bu kesişimle kurulur.": "The diachronic message moving left to right (S₂) is synchronically and retroactively coded by the master signifier (S₁) rising vertically from bottom to top; signification is produced at this intersection.",
    "S₂ Mesajı ∩ S₁ Kodu = Anlamlandırma (Signification)": "S₂ Message ∩ S₁ Code = Signification",
    "ŞEKİL 4 · VEKTÖR AĞI": "FIGURE 4 · VECTOR NETWORK",
    "Baba İşlevi Bağlamında Gösteren Zinciri": "The Signifying Chain in the Context of the Paternal Function",
    "Baba-nın-Adları mekanizmasını temsil eden 3 dikey kodlama vektörü (Simgesel, İmgesel, Gerçek Baba); üç ruhsal yapıdaki savunma mekanizmalarını temsil eden 3 yatay anlamlandırma vektörüyle eşleşir.": "Three vertical coding vectors representing the Names-of-the-Father (Symbolic, Imaginary, and Real Father) intersect three horizontal signification vectors representing the defense mechanisms of the three psychic structures.",
    "3 Dikey Kodlama Vektörü × 3 Yatay Anlamlandırma": "3 Vertical Coding Vectors × 3 Horizontal Significations",
    "ŞEKİL 5 · NİHAİ MODEL": "FIGURE 5 · INTEGRATED MODEL",
    "Bütüncül Baba İşlevi ve Ruhsal Yapılar Grafiği": "Integrated Graph of the Paternal Function and Psychic Structures",
    "Süjenin dil alanı ve konuşma işlevinden gösterene doğru ilerleyen diyalektik döngü. Süje baba metaforu üzerinden S₂’ye doğru diyakronik ilerlerken, Baba-nın-Adları (S₁) kodlama noktalarından senkronik olarak geriye doğru hareket eder ve ayna evresinden geçer. Sonuç olarak ruhsal yapıların formasyonu dil ve konuşma işlevinde kararlı gösterenler olarak billurlaşır.": "The dialectical loop moving between the subject’s field of language / speaking function and the signifier. While the subject advances diachronically toward S₂ through the paternal metaphor, the Names-of-the-Father (S₁) moves synchronically and retroactively across the coding nodes through the mirror stage—crystallizing the formation of psychic structures within speech and language.",
    "Gösteren → Baba Metaforu (S₂) → Ayna Evresi → Baba-nın-Adları (S₁) → Ruhsal Yapılar → Süjenin Dil Alanı ve Konuşma İşlevi": "Signifier → Paternal Metaphor (S₂) → Mirror Stage → Names-of-the-Father (S₁) → Psychic Structures → Subject’s Field of Language & Speaking Function",
    "05 / VAKA ANALİZLERİ & KAVRAMLAR": "05 / CASE STUDIES & CONCEPTS",
    "Schreber Vakası, Temel Fenomenler ve Sinthome": "The Schreber Case, Elementary Phenomena, and the Sinthome",
    "Makalenin 24–32. sayfalarında incelenen klinik olgular, psikotik yapıda semptomun dilsel doğasını ve analistin kliniğe nasıl konumlanması gerektiğini aydınlatır.": "The clinical phenomena examined on pages 24–32 of the article illuminate the linguistic nature of symptoms in psychosis and how the analyst must position themselves in clinical work.",
    "KLİNİK VAKA · DANIEL PAUL SCHREBER": "CLINICAL CASE · DANIEL PAUL SCHREBER",
    "Kesintili Mesaj Fenomeni ve Noktalama Eksikliği": "Interrupted Message Phenomena and Absence of Punctuation",
    "Schreber, Tanrı'dan kesintiye uğramış mesajlar aldığını ifade ederken (": "When Schreber reports receiving interrupted messages from God (",
    "\"...şimdi ben yapacağım... kendim...\"": "“...now I shall... myself...”",
    "), bu ifadeler S₁ kodlama düzeyinde takılı kalmaktadır. Jakobson’un değiştirici (shifter) kavramında olduğu gibi, cümlenin dizinsel elementlerinde kopuş gerçekleşir. Schreber, kapitone noktası üretemediği için bu boşluğu hezeyanlı bir noktalama (punctuation) ile (": "), these utterances remain arrested at the level of S₁ coding. As in Jakobson’s concept of the shifter, a rupture occurs in the indexical elements of the sentence. Unable to produce a quilting point, Schreber is compelled to complete the gap through delusional punctuation (",
    "\"...bir aptal olduğum gerçeğiyle yüzleşmek...\"": "“...face the fact that I am an idiot...”",
    ") tamamlamak zorunda kalmıştır.": ").",
    "KLİNİK KONUMLANMA · SECRÉTAIRE DE L'ALIÉNÉ": "CLINICAL POSITION · SECRÉTAIRE DE L’ALIÉNÉ",
    "\"Deliliğin Sekreterleri\" ve Hezeyanın Onarım İşlevi": "“Secretaries to the Insane” and the Restitutive Function of Delusion",
    "Lacan’a göre psikotik hezeyanlar gelişigüzel bir saçmalık değil, Baba-nın-Adları’nın hesaptan düşmesiyle simgesel düzende açılan derin boşluğu imgesel formlarla yamamaya çalışan bir sekreterlik görevidir. Bu durumda sağaltımdaki asıl mesele, analistin hastanın söylemini referans alan bir dinleme konumunda kalarak deliliğin sekreterliğine tanıklık etmesidir (Lacan, 1955-56/1993, s. 213).": "For Lacan, psychotic delusions are not random nonsense, but a work of reconstruction attempting to patch with imaginary forms the void opened in the symbolic order by the foreclosure of the Names-of-the-Father. The decisive clinical task is for the analyst to remain in a listening position anchored in the patient’s speech, bearing witness as a ‘secretary to the insane’ (Lacan, 1955–56/1993, p. 213).",
    "TOPOLOJİ & SANAT · JAMES JOYCE": "TOPOLOGY & ART · JAMES JOYCE",
    "Le Sinthome: Çözülmeyi Önleyen Dördüncü Halka": "Le Sinthome: The Fourth Ring Preventing Unraveling",
    "Lacan, Seminer XXIII’te James Joyce’un ruhsal yapılanmasını incelemiş; Joyce’un psikotik yapıda olmasına rağmen hiçbir psikotik atak geçirmemesini sanatsal yaratımlarına bağlamıştır. Joyce'un dili parçalayıp yeniden kuran edebiyatı, Gerçek, İmgesel ve Simgesel düzenlerini bir arada tutan dördüncü bir halka, yani": "In Seminar XXIII, Lacan examined James Joyce’s psychic structure, attributing the absence of an acute psychotic break—despite a psychotic structure—to his artistic creation. Joyce’s literature, fracturing and remaking language, functioned as a fourth ring holding the Real, Imaginary, and Symbolic registers together—the",
    "(Adlar-ın-Babası / Père-du-nom) işlevi görerek çözülmeyi önlemiştir.": "(Père-du-nom)—preventing topological unraveling.",
    "06 / METODOLOJİK İLKELER": "06 / METHODOLOGICAL PRINCIPLES",
    "Şema Nasıl Okunabilir? 6 Temel İlke": "How to Read the Diagram: 6 Core Principles",
    "Grafiği yalnızca statik çizgiler kümesi olarak değil; diyakronik akışlar, senkronik kodlamalar ve topolojik kayıt dönüşümleri olarak okumak için kuramsal ilkeler:": "Theoretical principles for reading the graph not as a static set of lines, but as diachronic flows, synchronic codings, and topological register transformations:",
    "Gösteren Zincirinin Diyalektiği": "Dialectics of the Signifying Chain",
    "Anlam tek bir işarette kapanmaz; gösterenler arasındaki bağlar ve retroaktif hareket (après-coup) boyunca kurulur ve sürekli yeniden düzenlenir.": "Meaning is never closed within a single sign; it is constituted and continually reorganized across links between signifiers and retroactive motion (après-coup).",
    "Topolojik Kayıt İlişkileri": "Topological Register Relations",
    "Çizgiler yalnızca bir sırayı değil; Gerçek, İmgesel ve Simgesel kayıtlar arasındaki düğümleri, dönüşleri ve geçişleri görünür kılar.": "The vectors make visible not merely a sequence, but the knots, turns, and transitions among the Real, Imaginary, and Symbolic registers.",
    "Kodlama (S₁) ve Mesaj (S₂) Asimetrisi": "Asymmetry of Coding (S₁) and Message (S₂)",
    "S₁ kodlaması senkronik ve geriye doğru işlerken, S₂ mesajı ileriye doğru diyakronik akar. Kapitone noktası bu iki zıt hareketin kesişimidir.": "While S₁ coding operates synchronically and retroactively, the S₂ message flows forward diachronically. The quilting point is the intersection of these two opposing vectors.",
    "Ayna Evresi ve Narsistik Eksen": "The Mirror Stage and the Narcissistic Axis",
    "Ego, ayna evresinde (a - a') imgesel bir yabancılaşma ile kurulur. Ruhsal yapının zeminindeki paranoid durum Baba-nın-Adları ile dengelenir.": "The ego is constituted through imaginary alienation in the mirror stage (a – a'). The paranoiac foundation of psychic structure is stabilized through the Names-of-the-Father.",
    "Konuşma İşlevinin Önceliği": "Primacy of the Speaking Function",
    "Semptomlar biyomedikal kataloglarla değil; öznenin dili nasıl kullandığı, neyi bastırdığı ve neyi simgeselden düşürdüğü ile anlaşılır.": "Symptoms are understood not through biomedical catalogs, but through how the subject inhabits language—what is repressed, disavowed, or foreclosed from the Symbolic.",
    "Analistin Yapısal Konumu": "The Analyst’s Structural Position",
    "Tedavi oryantasyonu hastanın ruhsal yapısına göre şekillenir. Analist efendi rolünü bırakıp süjenin arzusunun ekonomisini dinleyen konumda kalmalıdır.": "Treatment orientation is shaped by the patient’s psychic structure. The analyst relinquishes the position of master and remains attentive to the economy of the subject’s desire.",
    "07 / AKADEMİK KÜNYE": "07 / CITATION & DOWNLOADS",
    "Yayın Künyesi ve Doğrudan İndirme": "Bibliographic Citation & Direct Downloads",
    "Yaka, A. I. (2024). Psikotik Yapı, Baba İşlevi ve Lacanyen Kavramsallaştırma.": "Yaka, A. I. (2024). Psychotic Structure, Paternal Function, and Lacanian Conceptualization.",
    "Özgün Şemayı PDF Olarak Aç / İndir (Vektörel)": "Open / Download Original Diagram PDF (Vector)",
    "Makale Tam Metnini İncele (37 Sayfa PDF)": "Read Full Article PDF (37 Pages)",
    "Yayın Sayfasına Git ↗": "Go to Journal Page ↗",
    "2021 Makalesi: Obsesyonel Yapı ↗": "2021 Article: Obsessional Structure ↗",
    "Obsesyonel Nevroz": "Obsessional Neurosis",
    "4K Vektörel Şema": "4K Vector Diagram",
    "ŞEMA L • SEMİNER IV & V": "SCHEMA L • SEMINARS IV & V",
    "JACQUES LACAN • ŞEMA L: OBSESYONEL ARZU ÇIKMAZI": "JACQUES LACAN • SCHEMA L: OBSESSIONAL IMPASSE OF DESIRE",
    "İMGELERİN PERDESİ (DÜŞÜNCE ENGELİ)": "SCREEN OF IMAGES (THOUGHT BLOCKADE)",
    "a ⟶ a' İmgesel Savunma: Şüphe & Ruminasyon": "a ⟶ a' Imaginary Defense: Doubt & Rumination",
    "BİLİNÇDIŞI ARZUNUN İMKANSIZLIĞI ($ ↔ A)": "IMPOSSIBILITY OF UNCONSCIOUS DESIRE ($ ↔ A)",
    "Simgesel Eksen: Öteki'nin Talebini Erteleme / Felç Etme": "Symbolic Axis: Procrastinating / Paralyzing the Other's Demand",
    "ÖZNE ($)": "SUBJECT ($)",
    "Bölünmüş Özne": "Split Subject",
    "BENLİK (a)": "EGO (a)",
    "Narsisistik Ego": "Narcissistic Ego",
    "Moi / İdeal Benlik": "Moi / Ideal Ego",
    "İMGESEL ÖTEKİ (a')": "IMAGINARY OTHER (a')",
    "Ayna Benzeri": "Specular Counterpart",
    "Autre / Savunma": "Autre / Defense",
    "BÜYÜK ÖTEKİ (A)": "BIG OTHER (A)",
    "Dil & Bilinçdışı": "Language & Unconscious",
    "Simgesel Eksen ($ ↔ A), İmgesel Savunma Hattı (a ⟶ a') Tarafından Perdeler ve Arzuyu Çıkmaza Sürükler": "The Symbolic Axis ($ ↔ A) is Screened by the Imaginary Defense Line (a ⟶ a'), Driving Desire into an Impasse",
    "Simgesel Eksen: $ ⟶ A (Öteki'nin Talebi)": "Symbolic Axis: $ ⟶ A (Demand of the Other)",
    "İmgesel Savunma: a ⟶ a' (Şüphe Çıkmazı)": "Imaginary Defense: a ⟶ a' (Impasse of Doubt)",
    "Odak:": "Focus:",
    "Şüphe, ertelenen arzu, düşünce nöbetleri": "Doubt, deferred desire, obsessive rumination",
    "Kuramsal Temel:": "Theoretical Basis:",
    "Jacques Lacan (Seminer V) & Sigmund Freud": "Jacques Lacan (Seminar V) & Sigmund Freud",
    "Saha Söylem Analizi": "Field Discourse Analysis",
    "DÖRT SÖYLEM MATRİSİ • SEMİNER XVII": "FOUR DISCOURSES MATRIX • SEMINAR XVII",
    "ODTÜ DOKTORA TEZİ (2024) • NİNOVA & IRAK SAHA SÖYLEM MATRİSİ": "METU PH.D. THESIS (2024) • NINEVEH & IRAQ FIELD DISCOURSE MATRIX",
    "EFENDİ SÖYLEMİ": "DISCOURSE OF THE MASTER",
    "AJAN (Fail)": "AGENT",
    "HAKİKAT": "TRUTH",
    "ÖTEKİ (Köle/Sistem)": "OTHER (Slave/System)",
    "ÜRETİM (Artık-Haz)": "PRODUCTION (Surplus-Jouissance)",
    "İktidar & Kimlik Yaptırımı": "Sovereign Power & Identity Mandate",
    "Saha: Egemen Siyasi Otorite & Toplumsal Yasa Dayatması": "Field: Sovereign Political Authority & Imposition of Social Law",
    "ÜNİVERSİTE SÖYLEMİ": "DISCOURSE OF THE UNIVERSITY",
    "AJAN (Uzmanlık/Bilgi)": "AGENT (Expertise/Knowledge)",
    "HAKİKAT (Gizli Buyruk)": "TRUTH (Hidden Imperative)",
    "ÖTEKİ (Yönetilen Nesne)": "OTHER (Managed Object)",
    "ÜRETİM (Yabancılaşan Özne)": "PRODUCTION (Alienated Subject)",
    "Uzmanlık & Kurumsal Bilgi": "Institutional Expertise & Bureaucratic Knowledge",
    "Saha: İnsani Yardım Bürokrasisi & Raporlama Dili": "Field: Humanitarian Aid Bureaucracy & Reporting Language",
    "HİSTERİK SÖYLEMİ": "DISCOURSE OF THE HYSTERIC",
    "AJAN (Bölünmüş Özne)": "AGENT (Split Subject)",
    "HAKİKAT (Kayıp Nesne)": "TRUTH (Lost Object)",
    "ÖTEKİ (Efendi/Otorite)": "OTHER (Master/Authority)",
    "ÜRETİM (Yeni Bilgi Talebi)": "PRODUCTION (Demand for Knowledge)",
    "Soru, Şikayet & Hakikat Arayışı": "Questioning, Complaint & Search for Truth",
    "Saha: Travma Tanıklığı, Kayıp & Kolektif Yas Feryadı": "Field: Trauma Testimony, Loss & Collective Lament",
    "ANALİST SÖYLEMİ": "DISCOURSE OF THE ANALYST",
    "AJAN (Psikanalist/Dinleme)": "AGENT (Analyst/Listening)",
    "HAKİKAT (Gizli Teori)": "TRUTH (Latent Knowledge)",
    "ÖTEKİ (Analizan / Özne)": "OTHER (Analysand / Subject)",
    "ÜRETİM (Tekil Gösteren)": "PRODUCTION (Singular Signifier)",
    "Öznel Sorumluluk & Dinleme": "Subjective Responsibility & Analytic Listening",
    "Saha: Psikanalitik Müdahale & Söylem Dönüşümü": "Field: Psychoanalytic Intervention & Discourse Transformation",
    "¼ ROTASYON": "¼ ROTATION",
    "Jacques Lacan • Seminer XVII (1969-1970) | Dört Söylem Matrisinin Çatışma Sonrası Saha Söylemlerine Uyarlanışı": "Jacques Lacan • Seminar XVII (1969–1970) | Adaptation of the Four Discourses Matrix to Post-Conflict Fieldwork",
    "Saha Görüşmeleri: Ninova Ovası (Musul & Erbil)": "Field Interviews: Nineveh Plains (Mosul & Erbil)",
    "Kolektif Travma & Söylem Dönüşümü": "Collective Trauma & Discourse Transformation",
    "Kurum & Yıl:": "Institution & Year:",
    "ODTÜ Klinik Psikoloji Doktora Tezi, 2024": "METU Clinical Psychology Ph.D. Dissertation, 2024",
    "Yöntem:": "Method:",
    "Niteliksel Psikanalitik Söylem Analizi": "Qualitative Psychoanalytic Discourse Analysis",
    "12 Temel Kavram": "12 Core Concepts",
    "Kürtçe / Kurmancî": "Kurdish / Kurmanji",
    "Türkçe": "Turkish",
    "Terim ara (Örn: Unconscious, Arzu, Kiryar)...": "Search terms (e.g., Unconscious, Desire, Kiryar)...",
    "Psikanaliz terimlerinde ara": "Search psychoanalysis terms",
    "Bu terminoloji çalışması, çokdilli psikanalitik psikoterapi seanslarında ve çokkültürlü klinik saha bağlamında dilsel ve kavramsal aktarımı kolaylaştırmak üzere Dr. Ali Ihsan Yaka tarafından derlenmektedir.": "This terminology matrix is compiled by Dr. Ali Ihsan Yaka to facilitate conceptual precision and multilingual clinical listening across psychoanalytic sessions and cross-cultural fieldwork."
  };
  const homepageLooseTextEnglish = Object.fromEntries(Object.entries(homepageLooseText).map(([tr, en]) => [en, tr]));
  const homepageLooseNorm = Object.fromEntries(
    Object.entries(homepageLooseText).map(([tr, en]) => [tr.replace(/\s+/g, ' ').trim(), en])
  );

  function translateUnkeyedText(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest('script,style,[data-psyche-3d],#psychoanalysisDictTable tbody')) continue;
      const keyed = parent.closest('[data-i18n]');
      if (keyed) {
        const k = keyed.getAttribute('data-i18n');
        if ((translations.en && translations.en[k]) || (translations.tr && translations.tr[k])) continue;
      }
      if (node._origTr === undefined) {
        node._origTr = node.nodeValue;
      }
      if (lang === 'tr') {
        node.nodeValue = node._origTr;
        continue;
      }
      const orig = node._origTr;
      const norm = orig.replace(/\s+/g, ' ').trim();
      if (!norm || !Object.prototype.hasOwnProperty.call(homepageLooseNorm, norm)) continue;
      const leading = orig.match(/^\s*/)?.[0] || '';
      const trailing = orig.match(/\s*$/)?.[0] || '';
      node.nodeValue = `${leading}${homepageLooseNorm[norm]}${trailing}`;
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'tr';
    const isHomepage = Boolean(document.getElementById('welcomeHeading'));
    const supportsFullTranslation = Boolean(document.querySelector('.lang-switch-minimal, .lang-toggle, .lang-switch'));
    const activeLang = supportsFullTranslation ? lang : 'tr';
    if (supportsFullTranslation) localStorage.setItem('aiy_lang', activeLang);
    document.querySelectorAll('.lang-switch-minimal, .lang-toggle, .lang-switch').forEach(group => {
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
      'arastirmalar.html': 'page.researchTitle',
      'iletisim.html': 'contact.pageTitle',
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
      if (el.dataset.origTrHtml === undefined) el.dataset.origTrHtml = el.innerHTML;
      const key = el.getAttribute('data-i18n');
      if (translations[activeLang] && translations[activeLang][key]) {
        el.innerHTML = translations[activeLang][key];
      } else if (activeLang === 'tr') {
        el.innerHTML = el.dataset.origTrHtml;
      }
    });

    // Update all input/textarea placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[activeLang][key]) {
        el.placeholder = translations[activeLang][key];
      }
    });

    document.querySelectorAll('input[placeholder]:not([data-i18n-placeholder]), textarea[placeholder]:not([data-i18n-placeholder])').forEach(el => {
      if (el.dataset.origTrPlaceholder === undefined) el.dataset.origTrPlaceholder = el.placeholder;
      const norm = el.dataset.origTrPlaceholder.replace(/\s+/g, ' ').trim();
      el.placeholder = activeLang === 'en' ? (homepageLooseNorm[norm] || el.dataset.origTrPlaceholder) : el.dataset.origTrPlaceholder;
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
      const norm = img.dataset.localeBaseAlt.replace(/\s+/g, ' ').trim();
      img.alt = activeLang === 'en' ? (homepageLooseNorm[norm] || img.dataset.localeBaseAlt) : img.dataset.localeBaseAlt;
    });

    // Unified 4K Brand Logo localization (Alt text updates with language)
    const isEnMode = (activeLang === 'en');
    document.querySelectorAll('img.brand-logo-img').forEach(img => {
      img.alt = isEnMode ? 'Ali Yaka Psychology — Healing, Understanding, Peace' : 'Ali Yaka Psychology — Healing, Understanding, Peace';
    });

    translateUnkeyedText(activeLang);
    window.dispatchEvent(new CustomEvent('aiy:langchange', { detail: { lang: activeLang } }));
  }

  // Bind Language buttons (manual choice overrides auto geo-detection)
  document.querySelectorAll('.lang-btn, .lang-text-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      try { localStorage.setItem('aiy_lang_manual', btn.dataset.lang); } catch (_) {}
      setLanguage(btn.dataset.lang);
    });
  });

  function resolveInitialLanguage() {
    const queryLang = new URLSearchParams(window.location.search).get('lang');
    if (queryLang === 'en' || queryLang === 'tr') {
      try { localStorage.setItem('aiy_lang_manual', queryLang); } catch (_) {}
      return queryLang;
    }
    try {
      const manual = localStorage.getItem('aiy_lang_manual');
      if (manual === 'en' || manual === 'tr') return manual;
      const cachedCountry = sessionStorage.getItem('aiy_geo_country') || localStorage.getItem('aiy_geo_country');
      if (cachedCountry) return cachedCountry.toUpperCase() === 'TR' ? 'tr' : 'en';
    } catch (_) {}
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
      if (/Istanbul|Turkey/i.test(tz)) return 'tr';
      if (tz) return 'en';
    } catch (_) {}
    const navLang = (navigator.language || '').toLowerCase();
    return navLang.startsWith('tr') ? 'tr' : 'en';
  }

  let savedLang = resolveInitialLanguage();
  setLanguage(savedLang);

  // Live IP Geolocation check: TR -> Turkish ('tr'), all other countries -> English ('en')
  (function detectCountryLanguage() {
    try {
      if (localStorage.getItem('aiy_lang_manual')) return;
      if (sessionStorage.getItem('aiy_geo_verified') === '1') return;
    } catch (_) {}

    const applyCountry = (code) => {
      if (!code || typeof code !== 'string') return false;
      const country = code.trim().toUpperCase();
      if (!/^[A-Z]{2}$/.test(country)) return false;
      try {
        localStorage.setItem('aiy_geo_country', country);
        sessionStorage.setItem('aiy_geo_country', country);
        sessionStorage.setItem('aiy_geo_verified', '1');
        if (localStorage.getItem('aiy_lang_manual')) return true;
      } catch (_) {}
      const targetLang = country === 'TR' ? 'tr' : 'en';
      savedLang = targetLang;
      if (document.documentElement.lang !== targetLang) {
        setLanguage(targetLang);
      }
      return true;
    };

    const fetchWithTimeout = (url, ms = 3200) => {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), ms);
      return fetch(url, { signal: ctrl.signal, cache: 'no-store' })
        .then(r => { clearTimeout(timer); return r.ok ? r.json() : Promise.reject(); });
    };

    fetchWithTimeout('https://api.country.is/')
      .then(d => applyCountry(d && d.country) || Promise.reject())
      .catch(() => fetchWithTimeout('https://get.geojs.io/v1/ip/country.json')
        .then(d => applyCountry(d && d.country) || Promise.reject()))
      .catch(() => fetchWithTimeout('https://ipapi.co/json/')
        .then(d => applyCountry(d && d.country_code)))
      .catch(() => {});
  })();

  function initSplash() {
    const splash = document.getElementById('splashScreen');
    const enterButton = document.getElementById('splashEnterBtn');
    const replayButton = document.getElementById('replaySplashBtn');
    const splashSeenKey = 'aiy_splash_seen_v1';
    let splashAutoCloseTimer = 0;
    let isClosed = false;

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

    // Ensure clean state and remove any old bypass keys from browser
    try {
      localStorage.removeItem(splashSeenKey);
      localStorage.removeItem('aiy_splash_seen_v1');
      sessionStorage.removeItem('aiy_splash_seen_session_v4');
    } catch (_) {}

    // Splash screen presentation: 3 seconds auto-timer, dismissible instantly by clicking anywhere
    document.documentElement.classList.remove('splash-visited');
    splash.classList.remove('is-hidden', 'splash-closing');
    splash.removeAttribute('aria-hidden');
    splash.inert = false;
    splash.style.display = '';
    document.body.classList.add('splash-active');
    setBackgroundInert(true);
    window.requestAnimationFrame(() => enterButton?.focus({ preventScroll: true }));

    const closeSplash = () => {
      if (isClosed) return;
      isClosed = true;

      window.clearTimeout(splashAutoCloseTimer);
      splashAutoCloseTimer = 0;

      // Immediately restore scrolling and unblock all background regions
      document.body.classList.remove('splash-active');
      setBackgroundInert(false);

      // Trigger smooth fade-out
      splash.classList.add('splash-closing');

      const finalizeClose = () => {
        splash.classList.add('is-hidden');
        splash.classList.remove('splash-closing');
        splash.setAttribute('aria-hidden', 'true');
        splash.inert = true;
        splash.style.display = 'none';
        document.documentElement.classList.add('splash-visited');
      };

      // 260ms smooth transition, guaranteed fallback
      window.setTimeout(finalizeClose, 260);
    };

    let splashStartTime = Date.now();
    let wheelAccum = 0;

    const scheduleSplashClose = () => {
      window.clearTimeout(splashAutoCloseTimer);
      splashAutoCloseTimer = window.setTimeout(closeSplash, 3000);
    };

    // 1. Enter button click (dismisses immediately on direct user intent)
    enterButton?.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSplash();
    });

    // 2. Click anywhere on splash backdrop / card: instant dismissal
    splash.addEventListener('click', () => {
      closeSplash();
    });

    // 3. Scroll wheel / touchpad down: instant dismissal on intentional scroll
    const onWheel = (e) => {
      if (e.deltaY > 20) closeSplash();
    };
    splash.addEventListener('wheel', onWheel, { passive: true });

    // 4. Touch swipe gesture dismisses curtain on mobile
    let touchStartY = 0;
    splash.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });
    splash.addEventListener('touchmove', (e) => {
      const dy = touchStartY - e.touches[0].clientY;
      if (dy > 40) closeSplash();
    }, { passive: true });

    // 5. 3-Second Auto-dismiss timer
    scheduleSplashClose();

    // 6. Replay button in footer
    replayButton?.addEventListener('click', (event) => {
      event.preventDefault();
      try { localStorage.removeItem(splashSeenKey); } catch (_) {}
      isClosed = false;
      splashStartTime = Date.now();
      wheelAccum = 0;
      document.documentElement.classList.remove('splash-visited');
      splash.classList.remove('is-hidden', 'splash-closing');
      splash.removeAttribute('aria-hidden');
      splash.inert = false;
      splash.style.display = '';
      document.body.classList.add('splash-active');
      setBackgroundInert(true);
      enterButton?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: 'auto' });

      // Restart progress bar animation
      const pBar = splash.querySelector('.splash-progress-bar');
      if (pBar) {
        pBar.style.animation = 'none';
        void pBar.offsetWidth; // trigger reflow
        pBar.style.animation = '';
      }
      scheduleSplashClose();
    });

    // 7. Keyboard navigation
    document.addEventListener('keydown', (event) => {
      if (splash.classList.contains('is-hidden') || isClosed) return;
      if (['Escape', 'Enter', ' ', 'ArrowDown', 'PageDown'].includes(event.key)) {
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
      drawerBrand.setAttribute('aria-label', 'Dr. Ali İhsan Yaka — Simgesel • İmgesel • Gerçek');
      drawerBrand.innerHTML = '<picture><source srcset="assets/images/ali-yaka-psychology-horizontal.svg?v=2" type="image/svg+xml"><img class="brand-logo-img drawer-logo-img" src="assets/images/ali-yaka-psychology-horizontal.svg?v=2" alt="Ali Yaka Psychology — Healing, Understanding, Peace" width="133" height="48"></picture>';
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
  // 8. HERO PSYCHE PARTICLE FIELD (Disabled per client request: static shape only)
  // -------------------------------------------------------------
  // Canvas particle motion intentionally disabled; hero background is static geometric shape.

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

  // -------------------------------------------------------------
  // 9. FOOTER AMBIENT CONSTELLATION (Zero-Jank Static Canvas Render)
  // -------------------------------------------------------------
  function initFooterEffects() {
    const footers = document.querySelectorAll('.site-footer');
    if (!footers.length) return;

    footers.forEach(footer => {
      let ambient = footer.querySelector('.footer-ambient-effects');
      if (!ambient) {
        ambient = document.createElement('div');
        ambient.className = 'footer-ambient-effects';
        ambient.setAttribute('aria-hidden', 'true');
        ambient.innerHTML = `
          <div class="footer-top-beam"></div>
          <div class="footer-ambient-orb footer-orb-1"></div>
          <div class="footer-ambient-orb footer-orb-2"></div>
          <div class="footer-ambient-orb footer-orb-3"></div>
          <canvas class="footer-canvas"></canvas>
        `;
        footer.insertBefore(ambient, footer.firstChild);
      }

      const canvas = ambient.querySelector('.footer-canvas');
      if (!canvas) return;

      const ctx = canvas.getContext('2d', { alpha: true });
      if (!ctx) return;

      let width = 0;
      let height = 0;
      let particles = [];

      const buildAndDraw = () => {
        const rect = footer.getBoundingClientRect();
        width = Math.max(rect.width || window.innerWidth, 300);
        height = Math.max(rect.height || 360, 200);
        canvas.width = Math.floor(width);
        canvas.height = Math.floor(height);

        const count = width < 768 ? 16 : 28;
        particles = [];
        for (let i = 0; i < count; i++) {
          const isGold = (i % 3) !== 0;
          particles.push({
            x: ((i * 137.5) % 100) / 100 * width,
            y: ((i * 73.1 + 19) % 100) / 100 * height,
            radius: 0.8 + (i % 3) * 0.45,
            alpha: 0.22 + (i % 4) * 0.07,
            color: isGold ? [217, 193, 143] : [164, 184, 218]
          });
        }

        ctx.clearRect(0, 0, width, height);

        // Single batched stroke for faint synaptic threads
        const maxDistSq = 110 * 110;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(217, 193, 143, 0.065)';
        ctx.lineWidth = 0.6;
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            if (dx * dx + dy * dy < maxDistSq) {
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
            }
          }
        }
        ctx.stroke();

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color[0]}, ${p.color[1]}, ${p.color[2]}, ${p.alpha.toFixed(2)})`;
          ctx.fill();
        }
      };

      buildAndDraw();

      let resizeTimer = 0;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(buildAndDraw, 180);
      }, { passive: true });
    });
  }

  initFooterEffects();

  // RAF-throttled spotlight helper (prevents synchronous getBoundingClientRect layout thrashing)
  function bindSmoothSpotlight(selector) {
    const cards = document.querySelectorAll(selector);
    cards.forEach(card => {
      let rafId = 0;
      let lastX = 0;
      let lastY = 0;
      card.addEventListener('pointermove', (e) => {
        lastX = e.clientX;
        lastY = e.clientY;
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          const rect = card.getBoundingClientRect();
          card.style.setProperty('--mouse-x', `${Math.round(lastX - rect.left)}px`);
          card.style.setProperty('--mouse-y', `${Math.round(lastY - rect.top)}px`);
        });
      }, { passive: true });
    });
  }

  bindSmoothSpotlight('.practice-method-band, .contact-window-card, .form-card-outer, .pillar-card-outer');

  // Publication Category Filter on yayinlar.html
  const pubFilterBtns = document.querySelectorAll('.pub-filter-btn[data-pub-filter]');
  const pubArchiveCards = document.querySelectorAll('#pubArchiveStack .pub-window-card[data-pub-category]');
  const pubFilterStatus = document.getElementById('pubFilterStatus');
  if (pubFilterBtns.length && pubArchiveCards.length) {
    pubFilterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-pub-filter') || 'all';
        pubFilterBtns.forEach(b => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        let visibleCount = 0;
        let animatedIdx = 0;
        pubArchiveCards.forEach(card => {
          const cat = card.getAttribute('data-pub-category') || '';
          const match = filter === 'all' || cat.split(/\s+/).includes(filter);
          card.hidden = !match;
          card.classList.toggle('is-filtered-out', !match);
          if (match) {
            visibleCount++;
            animatedIdx++;
          }
        });
        if (pubFilterStatus) {
          const currentLang = document.documentElement.lang === 'en' ? 'en' : 'tr';
          if (filter === 'all') {
            pubFilterStatus.textContent = translations[currentLang]['pub.filterStatusAll'];
          } else {
            const labelEl = btn.querySelector('[data-i18n]');
            const catLabel = labelEl ? labelEl.textContent.trim() : '';
            pubFilterStatus.textContent = currentLang === 'en'
              ? `Showing ${visibleCount} verified record${visibleCount === 1 ? '' : 's'} in ${catLabel}`
              : `${catLabel} kategorisinde ${visibleCount} doğrulanmış akademik kayıt gösteriliyor`;
          }
        }
      });
    });
  }

  // Publication Citation Copy Button with toast feedback
  const copyButtons = document.querySelectorAll('.pub-copy-btn[data-citation]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      const citation = btn.getAttribute('data-citation');
      if (!citation) return;
      const textSpan = btn.querySelector('.pub-copy-text');
      const origText = textSpan ? textSpan.textContent : '';
      const isEn = document.documentElement.lang === 'en';

      const doFeedback = () => {
        if (textSpan) textSpan.textContent = isEn ? 'Copied ✓' : 'Kopyalandı ✓';
        btn.classList.add('is-copied');
        setTimeout(() => {
          if (textSpan) textSpan.textContent = origText;
          btn.classList.remove('is-copied');
        }, 2200);
      };

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(citation);
          doFeedback();
        } else {
          throw new Error('Clipboard API unavailable');
        }
      } catch (err) {
        try {
          const ta = document.createElement('textarea');
          ta.value = citation;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          doFeedback();
        } catch (e2) {
          console.warn('Fallback copy error', e2);
          doFeedback();
        }
      }
    });
  });

  setLanguage(savedLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDOM);
  } else {
    initDOM();
  }
})();

// Trilingual Psychoanalysis Dictionary Interactive Search Filter
document.addEventListener('DOMContentLoaded', () => {
  const termInput = document.getElementById('termSearchInput');
  if (termInput) {
    const updateFilter = () => {
      const q = termInput.value.toLowerCase().trim();
      const rows = document.querySelectorAll('#psychoanalysisDictTable tbody tr');
      let visible = 0;
      rows.forEach(r => {
        const text = r.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          r.style.display = '';
          visible++;
        } else {
          r.style.display = 'none';
        }
      });
      const pill = document.getElementById('termCountPill');
      if (pill) {
        const isEn = document.documentElement.lang === 'en';
        pill.textContent = q
          ? (isEn ? (visible + ' Concepts Found') : (visible + ' Kavram Bulundu'))
          : (isEn ? '12 Core Concepts' : '12 Temel Kavram');
      }
    };
    termInput.addEventListener('input', updateFilter);
    window.addEventListener('aiy:langchange', updateFilter);
  }
});

// Messenger-Style Draggable WhatsApp Chat-Head (All Pages & Viewports)
(function initWhatsAppChatHead() {
  function mountChatHead() {
    if (document.querySelector('.wa-chathead')) return;

    const btn = document.createElement('a');
    btn.className = 'wa-chathead';
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.innerHTML = `
      <span class="wa-chathead-inner" aria-hidden="true">
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path d="M16.004 3.2c-7.068 0-12.8 5.731-12.8 12.8 0 2.257.589 4.46 1.708 6.404L3.09 28.8l6.564-1.721a12.747 12.747 0 0 0 6.35 1.689h.005c7.067 0 12.799-5.731 12.799-12.8 0-3.42-1.332-6.636-3.751-9.054A12.716 12.716 0 0 0 16.004 3.2zm0 23.408h-.004a10.61 10.61 0 0 1-5.408-1.481l-.388-.23-3.998 1.048 1.067-3.897-.253-.402a10.596 10.596 0 0 1-1.629-5.646c0-5.862 4.77-10.631 10.635-10.631 2.84 0 5.51 1.107 7.517 3.116a10.565 10.565 0 0 1 3.113 7.519c0 5.863-4.771 10.604-10.652 10.604zm5.833-7.959c-.319-.16-1.891-.933-2.184-1.04-.293-.106-.506-.16-.719.16-.213.32-.825 1.04-1.012 1.253-.186.213-.373.24-.692.08-.32-.16-1.349-.497-2.57-1.586-.95-.847-1.591-1.894-1.778-2.214-.186-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.186.213-.32.32-.533.106-.213.053-.4-.027-.56-.08-.16-.719-1.733-.985-2.373-.26-.624-.524-.539-.719-.549l-.612-.011c-.213 0-.559.08-.852.4-.293.32-1.119 1.093-1.119 2.666s1.145 3.093 1.305 3.306c.16.213 2.254 3.441 5.46 4.826.763.33 1.358.526 1.822.674.766.243 1.463.209 2.014.127.614-.092 1.891-.773 2.157-1.52.266-.746.266-1.386.186-1.52-.08-.133-.293-.213-.612-.373z"/>
        </svg>
      </span>
      <span class="wa-chathead-badge" aria-hidden="true"></span>
      <span class="wa-chathead-tooltip"></span>
    `;

    const tooltip = btn.querySelector('.wa-chathead-tooltip');
    const syncLang = () => {
      const isEn = document.documentElement.lang === 'en';
      const msg = isEn
        ? 'Hello Dr. Ali İhsan Yaka, could I receive information regarding psychotherapy sessions and available appointment options? Thank you.'
        : 'Merhaba Dr. Ali İhsan Yaka, psikoterapi seanslarınız ve uygun randevu seçenekleri hakkında bilgi rica edebilir miyim? Teşekkür ederim.';
      btn.href = 'https://wa.me/905374738433?text=' + encodeURIComponent(msg);
      const label = isEn ? 'WhatsApp Direct' : 'WhatsApp İletişim';
      btn.setAttribute('aria-label', label);
      if (tooltip) tooltip.textContent = label;
    };
    syncLang();
    window.addEventListener('aiy:langchange', syncLang);

    const STORAGE_KEY = 'aiy_wa_chathead_pos';
    const getMargin = () => (window.innerWidth <= 768 ? 14 : 18);
    const getBottomDefault = () => (window.innerWidth <= 768 ? 20 : 24);

    let state = { side: 'right', topRatio: null };
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null');
      if (saved && (saved.side === 'left' || saved.side === 'right')) {
        state = saved;
      }
    } catch (_) {}

    function applyDockedPosition() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const size = btn.offsetWidth || (vw <= 768 ? 46 : 50);
      const margin = getMargin();
      const minY = margin + 64;
      const maxY = Math.max(minY, vh - size - getBottomDefault());

      const targetX = state.side === 'left' ? margin : Math.max(margin, vw - size - margin);
      const targetY = typeof state.topRatio === 'number'
        ? Math.min(maxY, Math.max(minY, Math.round(state.topRatio * vh)))
        : maxY;

      btn.style.left = targetX + 'px';
      btn.style.top = targetY + 'px';
      btn.classList.toggle('is-docked-left', state.side === 'left');
    }

    applyDockedPosition();
    document.body.appendChild(btn);
    requestAnimationFrame(() => btn.classList.add('is-ready'));
    window.addEventListener('resize', applyDockedPosition, { passive: true });

    let pointerId = null;
    let startX = 0;
    let startY = 0;
    let originLeft = 0;
    let originTop = 0;
    let moved = false;

    btn.addEventListener('pointerdown', e => {
      if (e.button !== undefined && e.button !== 0) return;
      pointerId = e.pointerId;
      startX = e.clientX;
      startY = e.clientY;
      const rect = btn.getBoundingClientRect();
      originLeft = rect.left;
      originTop = rect.top;
      moved = false;
      try { btn.setPointerCapture(pointerId); } catch (_) {}
    });

    btn.addEventListener('pointermove', e => {
      if (pointerId === null || e.pointerId !== pointerId) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (!moved && Math.hypot(dx, dy) > 6) {
        moved = true;
        btn.classList.remove('is-snapping');
        btn.classList.add('is-dragging');
      }
      if (!moved) return;

      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const size = btn.offsetWidth || 48;
      const margin = 8;
      const nextLeft = Math.min(vw - size - margin, Math.max(margin, originLeft + dx));
      const nextTop = Math.min(vh - size - margin, Math.max(margin, originTop + dy));
      btn.style.left = nextLeft + 'px';
      btn.style.top = nextTop + 'px';
    });

    function finishDrag(e) {
      if (pointerId === null || (e && e.pointerId !== undefined && e.pointerId !== pointerId)) return;
      try { btn.releasePointerCapture(pointerId); } catch (_) {}
      pointerId = null;

      if (moved) {
        btn.classList.remove('is-dragging');
        btn.classList.add('is-snapping');
        const rect = btn.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const centerX = rect.left + rect.width / 2;
        state.side = centerX < vw / 2 ? 'left' : 'right';
        state.topRatio = rect.top / Math.max(1, vh);
        try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) {}
        applyDockedPosition();
        setTimeout(() => btn.classList.remove('is-snapping'), 450);
      }
    }

    btn.addEventListener('pointerup', finishDrag);
    btn.addEventListener('pointercancel', finishDrag);

    btn.addEventListener('click', e => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountChatHead);
  } else {
    mountChatHead();
  }
})();
