const translation = {
  createApp: 'UYGULAMA OLUŞTUR',
  types: {
    all: 'Hepsi',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Workflow',
    completion: 'Tamamlama',
  },
  duplicate: 'Çoğalt',
  duplicateTitle: 'Uygulamayı Çoğalt',
  export: 'DSL Dışa Aktar',
  exportFailed: 'DSL dışa aktarımı başarısız oldu.',
  importDSL: 'DSL dosyasını içe aktar',
  createFromConfigFile: 'DSL dosyasından oluştur',
  importFromDSL: 'DSL içe aktar',
  importFromDSLFile: 'DSL dosyasından',
  importFromDSLUrl: 'URL\'den',
  importFromDSLUrlPlaceholder: 'DSL bağlantısını buraya yapıştır',
  deleteAppConfirmTitle: 'Bu uygulamayı silmek istiyor musunuz?',
  deleteAppConfirmContent: 'Uygulamanın silinmesi geri alınamaz. Kullanıcılar artık uygulamanıza erişemeyecek ve tüm prompt yapılandırmaları ile loglar kalıcı olarak silinecektir.',
  appDeleted: 'Uygulama silindi',
  appDeleteFailed: 'Uygulama silinemedi',
  join: 'Topluluğa katıl',
  communityIntro: 'Farklı kanallarda takım üyeleri, katkıda bulunanlar ve geliştiricilerle tartışın.',
  roadmap: 'Yol haritamızı görün',
  newApp: {
    startFromBlank: 'Boş Oluştur',
    startFromTemplate: 'Şablondan Oluştur',
    captionAppType: 'Ne tür bir uygulama oluşturmak istiyorsunuz?',
    chatbotDescription: 'Sohbete dayalı bir uygulama oluşturun. Bu uygulama, çoklu turlar halinde sürekli konuşmaya izin veren bir soru-cevap formatı kullanır.',
    completionDescription: 'Prompt temelinde yüksek kaliteli metinler üreten bir uygulama oluşturun, örneğin makaleler, özetler, çeviriler ve daha fazlasını oluşturmak için.',
    completionWarning: 'Bu tür bir uygulama artık desteklenmeyecek.',
    agentDescription: 'Görevleri tamamlamak için araçları bağımsız olarak seçebilen bir zeki Agent oluşturun',
    workflowDescription: 'Yüksek derecede özelleştirilebilir bir workflow ile yüksek kaliteli metinler üreten bir uygulama oluşturun. Deneyimli kullanıcılar için uygundur.',
    workflowWarning: 'Şu anda beta aşamasında',
    chatbotType: 'Chatbot düzenleme yöntemi',
    basic: 'Temel',
    basicTip: 'Yeni başlayanlar için, daha sonra Chatflow\'a geçilebilir',
    basicFor: 'YENİ BAŞLAYANLAR İÇİN',
    basicDescription: 'Temel Orkestrasyon, yerleşik promptları değiştirme yeteneği olmadan, basit ayarlarla bir Chatbot uygulamasının orkestrasyonuna olanak tanır. Yeni başlayanlar için uygundur.',
    advanced: 'Chatflow',
    advancedFor: 'Gelişmiş kullanıcılar için',
    advancedDescription: 'Workflow Orkestrasyonu, yerleşik promptları düzenleme yeteneği de dahil olmak üzere yüksek derecede özelleştirme sunarak Chatbotları workflow formunda düzenler. Deneyimli kullanıcılar için uygundur.',
    captionName: 'Uygulama simgesi & ismi',
    appNamePlaceholder: 'Uygulamanıza bir isim verin',
    captionDescription: 'Açıklama',
    appDescriptionPlaceholder: 'Uygulamanın açıklamasını girin',
    useTemplate: 'Bu şablonu kullan',
    previewDemo: 'Önizleme demosu',
    chatApp: 'Asistan',
    chatAppIntro: 'Sohbete dayalı bir uygulama oluşturmak istiyorum. Bu uygulama, çoklu turlar halinde sürekli konuşmaya izin veren bir soru-cevap formatı kullanır.',
    agentAssistant: 'Yeni Agent Asistanı',
    completeApp: 'Metin Üretici',
    completeAppIntro: 'Promptlara dayalı olarak yüksek kaliteli metinler üreten bir uygulama oluşturmak istiyorum, örneğin makaleler, özetler, çeviriler ve daha fazlasını oluşturmak için.',
    showTemplates: 'Bir şablondan seçmek istiyorum',
    hideTemplates: 'Mod seçim ekranına geri dön',
    Create: 'Oluştur',
    Cancel: 'İptal',
    nameNotEmpty: 'İsim boş olamaz',
    appTemplateNotSelected: 'Lütfen bir şablon seçin',
    appTypeRequired: 'Lütfen bir uygulama türü seçin',
    appCreated: 'Uygulama oluşturuldu',
    appCreateFailed: 'Uygulama oluşturulamadı',
  },
  editApp: 'Bilgileri Düzenle',
  editAppTitle: 'Uygulama Bilgilerini Düzenle',
  editDone: 'Uygulama bilgileri güncellendi',
  editFailed: 'Uygulama bilgileri güncellenemedi',
  iconPicker: {
    ok: 'Tamam',
    cancel: 'İptal',
    emoji: 'Emoji',
    image: 'Görsel',
  },
  switch: 'Workflow Orkestrasyonuna Geç',
  switchTipStart: 'Sizin için yeni bir uygulama kopyası oluşturulacak ve yeni kopya Workflow Orkestrasyonuna geçecektir. Yeni kopya ',
  switchTip: 'izin vermeyecek',
  switchTipEnd: ' Temel Orkestrasyona geri dönmek.',
  switchLabel: 'Oluşturulacak uygulama kopyası',
  removeOriginal: 'Orijinal uygulamayı sil',
  switchStart: 'Geçişi Başlat',
  typeSelector: {
    all: 'ALL Types',
    chatbot: 'Chatbot',
    agent: 'Agent',
    workflow: 'Workflow',
    completion: 'Completion',
  },
  tracing: {
    title: 'Uygulama performansını izleme',
    description: 'Üçüncü taraf LLMOps sağlayıcısını yapılandırma ve uygulama performansını izleme.',
    config: 'Yapılandırma',
    collapse: 'Daralt',
    expand: 'Genişlet',
    tracing: 'İzleme',
    disabled: 'Devre Dışı',
    disabledTip: 'Lütfen önce sağlayıcıyı yapılandırın',
    enabled: 'Hizmette',
    tracingDescription: 'Uygulama yürütmesinin tam bağlamını, LLM çağrıları, bağlam, promptlar, HTTP istekleri ve daha fazlası dahil olmak üzere üçüncü taraf izleme platformuna yakalama.',
    configProviderTitle: {
      configured: 'Yapılandırıldı',
      notConfigured: 'İzlemeyi etkinleştirmek için sağlayıcıyı yapılandırın',
      moreProvider: 'Daha Fazla Sağlayıcı',
    },
    langsmith: {
      title: 'LangSmith',
      description: 'LLM destekli uygulama yaşam döngüsünün her adımı için her şeyi kapsayan bir geliştirici platformu.',
    },
    langfuse: {
      title: 'Langfuse',
      description: 'LLM uygulamanızı hata ayıklamak ve geliştirmek için izlemeler, değerlendirmeler, prompt yönetimi ve metrikler.',
    },
    inUse: 'Kullanımda',
    configProvider: {
      title: 'Yapılandırma',
      placeholder: '{{key}} bilgilerinizi girin',
      project: 'Proje',
      publicKey: 'Genel Anahtar',
      secretKey: 'Gizli Anahtar',
      viewDocsLink: '{{key}} dökümanlarını görüntüle',
      removeConfirmTitle: '{{key}} yapılandırmasını kaldır?',
      removeConfirmContent: 'Mevcut yapılandırma kullanımda, kaldırılması İzleme özelliğini kapatacaktır.',
    },
    view: 'Görünüm',
  },
  answerIcon: {
    descriptionInExplore: 'Keşfet\'te değiştirilecek 🤖 WebApp simgesinin kullanılıp kullanılmayacağı',
    title: 'Değiştirmek 🤖 için WebApp simgesini kullanın',
    description: 'Paylaşılan uygulamada değiştirmek 🤖 için WebApp simgesinin kullanılıp kullanılmayacağı',
  },
}

export default translation
