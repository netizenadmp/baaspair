export type Language = 'en' | 'zh' | 'fr' | 'es';

export const translations = {
  en: {
    nav: {
      solutions: "Solutions",
      network: "Network",
      services: "Services",
      about: "About",
      getStarted: "Get Started",
    },
    hero: {
      badge: "Global Banking-as-a-Service Advisory",
      title: "The Bridge to Global Finance.",
      subtitle: "BAAS is a specialized consulting firm connecting high-growth fintechs with established banking institutions worldwide. We navigate the complexity of BaaS so you can focus on innovation.",
      consult: "Consult with Experts",
      network: "Our Global Network",
      partners: "Strategic partners across 4 Continents",
      statValue: "98%",
      statLabel: "Successful Partner Integrations",
    },
    stats: {
      fintech: { label: "Fintech Partners", value: "300+", description: "High-growth Innovators Globally" },
      bank: { label: "Bank Partnerships", value: "25+", description: "FDIC-Insured/Top Tier Banks" },
      customers: { label: "Customers Served", value: "150+", description: "Renowned Global Fintech Clients" },
      integration: { label: "Integration Rate", value: "98%", description: "Successful pairing success" },
    },
    features: {
      title: "The Future of Banking is Modular.",
      subtitle: "Banking-as-a-Service allows any company to offer financial products. We provide the expertise and connections to make it happen.",
      items: [
        {
          title: "Bank & Fintech Partnerships",
          description: "Direct access to Tier 1 and Tier 2 banks across Europe, Asia, and the Americas."
        },
        {
          title: "Compliance & Licensing",
          description: "Navigate complex regulatory landscapes with our expert compliance advisory."
        },
        {
          title: "API Integration",
          description: "Seamlessly connect to core banking systems through modern, secure API layers."
        },
        {
          title: "Strategic Consulting",
          description: "Tailored roadmaps for fintechs looking to launch cards, accounts, or payments."
        }
      ]
    },
    network: {
      title: "Our Global Ecosystem.",
      subtitle: "We don't just consult; we connect. Our network includes over 100 banks, EMIs, and technology providers worldwide, ensuring you find the perfect partner for your specific needs.",
      items: [
        "Named accounts for individuals and businesses",
        "Access to multiple banking licenses (EMI, PI, Full Banking)",
        "Support for 40+ currencies and local payment rails",
        "Pre-vetted technology stacks for rapid deployment",
        "End-to-end project management from RFP to Launch"
      ],
      cta: "Explore Our Network"
    },
    services: {
      title: "Comprehensive BaaS Consulting",
      subtitle: "From initial concept to live operations, we provide the strategic and technical support needed to build a successful financial product.",
      cta: "All Services",
      items: [
        {
          title: "Market Entry Strategy",
          description: "We help you identify the best jurisdictions and banking partners based on your business model and target audience."
        },
        {
          title: "BaaS RFP Management",
          description: "We manage the entire selection process, from defining requirements to negotiating commercial terms with banks."
        },
        {
          title: "Technical Advisory",
          description: "Expert guidance on selecting the right middleware, ledger systems, and card processing partners."
        }
      ]
    },
    process: {
      title: "Instant Named Account Issuance.",
      subtitle: "Our automated workflow allows you to create fully compliant accounts in your client's name in seconds. We support account creation for both individuals and businesses, ensuring every account is issued in the end-user's name.",
      steps: [
        { title: "Client Onboarding", description: "Collect individual or business details for named account issuance." },
        { title: "KYC/KYB Verification", description: "Automated identity and compliance checks." },
        { title: "Account Generation", description: "Assigning dedicated IBAN and virtual ledger." },
        { title: "Account Ready", description: "Named account is live and ready for payments." }
      ],
      demo: {
        individual: "Individual: John Doe",
        business: "Business: TechFlow Inc.",
        submit: "Submit Details",
        verifying: "Verifying Identity",
        crossRef: "Cross-referencing global watchlists...",
        holder: "Account Holder",
        iban: "Virtual IBAN",
        card: "Virtual Card",
        success: "Account Successfully Issued"
      }
    },
    cta: {
      title: "Ready to build the next generation of finance?",
      subtitle: "Schedule a discovery call with our experts and explore how our global BaaS network can accelerate your growth.",
      book: "Book a Discovery Call",
      contact: "Contact Sales"
    },
    footer: {
      description: "The leading global consulting firm for Banking-as-a-Service and Fintech infrastructure.",
      solutions: "Solutions",
      company: "Company",
      solutionItems: ["Digital Banking", "Card Issuing", "Crypto & Web3"],
      companyItems: ["About Us", "Our Network", "Contact"],
      rights: "© 2026 BAAS. All rights reserved.",
      links: ["Privacy Policy", "Terms of Service", "Cookie Policy"]
    }
  },
  zh: {
    nav: {
      solutions: "解决方案",
      network: "网络",
      services: "服务",
      about: "关于我们",
      getStarted: "立即开始",
    },
    hero: {
      badge: "全球银行即服务 (BaaS) 咨询",
      title: "通往全球金融的桥梁。",
      subtitle: "BAAS 是一家专业的咨询公司，致力于将高增长的金融科技公司与全球知名银行机构联系起来。我们处理 BaaS 的复杂性，让您专注于创新。",
      consult: "咨询专家",
      network: "我们的全球网络",
      partners: "跨越 4 大洲的战略合作伙伴",
      statValue: "98%",
      statLabel: "成功的合作伙伴集成",
    },
    stats: {
      fintech: { label: "金融科技合作伙伴", value: "300+", description: "全球高增长创新者" },
      bank: { label: "银行合作伙伴", value: "25+", description: "FDIC 承保/顶级银行" },
      customers: { label: "服务客户", value: "150+", description: "知名全球金融科技客户" },
      integration: { label: "集成率", value: "98%", description: "成功的配对成功率" },
    },
    features: {
      title: "银行的未来是模块化的。",
      subtitle: "银行即服务允许任何公司提供金融产品。我们提供专业知识和联系来实现这一目标。",
      items: [
        {
          title: "银行与金融科技合作伙伴关系",
          description: "直接对接欧洲、亚洲和美洲的一级和二级银行。"
        },
        {
          title: "合规与许可",
          description: "通过我们的专家合规咨询，应对复杂的监管环境。"
        },
        {
          title: "API 集成",
          description: "通过现代、安全的 API 层无缝连接到核心银行系统。"
        },
        {
          title: "战略咨询",
          description: "为希望推出卡片、账户或支付的金融科技公司量身定制路线图。"
        }
      ]
    },
    network: {
      title: "我们的全球生态系统。",
      subtitle: "我们不仅提供咨询，还建立联系。我们的网络包括全球 100 多家银行、EMI 和技术提供商，确保您找到满足特定需求的完美合作伙伴。",
      items: [
        "为个人和企业提供记名账户",
        "获得多种银行牌照（EMI、PI、全能银行）",
        "支持 40 多种货币和本地支付轨道",
        "预先审查的技术堆栈，实现快速部署",
        "从 RFP 到启动的全流程项目管理"
      ],
      cta: "探索我们的网络"
    },
    services: {
      title: "全面的 BaaS 咨询",
      subtitle: "从最初的概念到实际运营，我们提供构建成功金融产品所需的战略和技术支持。",
      cta: "所有服务",
      items: [
        {
          title: "市场进入策略",
          description: "我们根据您的业务模式和目标受众，帮助您确定最佳司法管辖区和银行合作伙伴。"
        },
        {
          title: "BaaS RFP 管理",
          description: "我们管理整个选择过程，从定义需求到与银行谈判商业条款。"
        },
        {
          title: "技术咨询",
          description: "关于选择合适的中间件、分类账系统和卡处理合作伙伴的专家指导。"
        }
      ]
    },
    process: {
      title: "即时记名账户发行。",
      subtitle: "我们的自动化工作流程允许您在几秒钟内以客户的名义创建完全合规的账户。我们支持为个人和企业创建账户，确保每个账户都以最终用户的名义发行。",
      steps: [
        { title: "客户入驻", description: "收集个人或企业详细信息以发行记名账户。" },
        { title: "KYC/KYB 验证", description: "自动身份和合规性检查。" },
        { title: "账户生成", description: "分配专用 IBAN 和虚拟分类账。" },
        { title: "账户就绪", description: "记名账户已上线，随时可以进行支付。" }
      ],
      demo: {
        individual: "个人：John Doe",
        business: "企业：TechFlow Inc.",
        submit: "提交详细信息",
        verifying: "正在验证身份",
        crossRef: "正在交叉引用全球观察名单...",
        holder: "账户持有人",
        iban: "虚拟 IBAN",
        card: "虚拟卡",
        success: "账户发行成功"
      }
    },
    cta: {
      title: "准备好构建下一代金融了吗？",
      subtitle: "与我们的专家预约探索电话，了解我们的全球 BaaS 网络如何加速您的增长。",
      book: "预约探索电话",
      contact: "联系销售"
    },
    footer: {
      description: "全球领先的银行即服务 (BaaS) 和金融科技基础设施咨询公司。",
      solutions: "解决方案",
      company: "公司",
      solutionItems: ["数字银行", "发卡业务", "加密货币与 Web3"],
      companyItems: ["关于我们", "我们的网络", "联系我们"],
      rights: "© 2026 BAAS. 保留所有权利。",
      links: ["隐私政策", "服务条款", "Cookie 政策"]
    }
  },
  fr: {
    nav: {
      solutions: "Solutions",
      network: "Réseau",
      services: "Services",
      about: "À propos",
      getStarted: "Commencer",
    },
    hero: {
      badge: "Conseil Global en Banking-as-a-Service",
      title: "Le Pont vers la Finance Mondiale.",
      subtitle: "BAAS est un cabinet de conseil spécialisé connectant les fintechs à forte croissance avec des institutions bancaires établies dans le monde entier. Nous naviguons dans la complexité du BaaS pour que vous puissiez vous concentrer sur l'innovation.",
      consult: "Consulter des Experts",
      network: "Notre Réseau Mondial",
      partners: "Partenaires stratégiques sur 4 continents",
      statValue: "98%",
      statLabel: "Intégrations de Partenaires Réussies",
    },
    stats: {
      fintech: { label: "Partenaires Fintech", value: "300+", description: "Innovateurs à forte croissance mondialement" },
      bank: { label: "Partenariats Bancaires", value: "25+", description: "Assurés par la FDIC / Banques de premier rang" },
      customers: { label: "Clients Servis", value: "150+", description: "Clients fintech mondiaux de renom" },
      integration: { label: "Taux d'Intégration", value: "98%", description: "Succès du jumelage réussi" },
    },
    features: {
      title: "L'avenir de la banque est modulaire.",
      subtitle: "Le Banking-as-a-Service permet à toute entreprise de proposer des produits financiers. Nous fournissons l'expertise et les connexions pour y parvenir.",
      items: [
        {
          title: "Partenariats Banques & Fintech",
          description: "Accès direct aux banques de rang 1 et 2 en Europe, en Asie et aux Amériques."
        },
        {
          title: "Conformité & Licences",
          description: "Naviguez dans des paysages réglementaires complexes grâce à nos conseils d'experts en conformité."
        },
        {
          title: "Intégration API",
          description: "Connectez-vous de manière transparente aux systèmes bancaires centraux via des couches API modernes et sécurisées."
        },
        {
          title: "Conseil Stratégique",
          description: "Feuilles de route sur mesure pour les fintechs souhaitant lancer des cartes, des comptes ou des paiements."
        }
      ]
    },
    network: {
      title: "Notre Écosystème Mondial.",
      subtitle: "Nous ne nous contentons pas de conseiller ; nous connectons. Notre réseau comprend plus de 100 banques, EMI et fournisseurs de technologie dans le monde entier, vous garantissant de trouver le partenaire idéal pour vos besoins spécifiques.",
      items: [
        "Comptes nommés pour particuliers et entreprises",
        "Accès à plusieurs licences bancaires (EMI, PI, Banque complète)",
        "Prise en charge de plus de 40 devises et rails de paiement locaux",
        "Piles technologiques pré-approuvées pour un déploiement rapide",
        "Gestion de projet de bout en bout, de l'appel d'offres au lancement"
      ],
      cta: "Explorer Notre Réseau"
    },
    services: {
      title: "Conseil Complet en BaaS",
      subtitle: "Du concept initial aux opérations en direct, nous fournissons le soutien stratégique et technique nécessaire pour construire un produit financier réussi.",
      cta: "Tous les Services",
      items: [
        {
          title: "Stratégie d'Entrée sur le Marché",
          description: "Nous vous aidons à identifier les meilleures juridictions et partenaires bancaires en fonction de votre modèle d'affaires et de votre public cible."
        },
        {
          title: "Gestion d'Appel d'Offres BaaS",
          description: "Nous gérons l'ensemble du processus de sélection, de la définition des besoins à la négociation des conditions commerciales avec les banques."
        },
        {
          title: "Conseil Technique",
          description: "Conseils d'experts sur la sélection du bon middleware, des systèmes de grand livre et des partenaires de traitement de cartes."
        }
      ]
    },
    process: {
      title: "Émission Instantanée de Comptes Nommés.",
      subtitle: "Notre flux de travail automatisé vous permet de créer des comptes entièrement conformes au nom de votre client en quelques secondes. Nous prenons en charge la création de comptes pour les particuliers et les entreprises, garantissant que chaque compte est émis au nom de l'utilisateur final.",
      steps: [
        { title: "Intégration Client", description: "Collecte des détails du particulier ou de l'entreprise pour l'émission d'un compte nommé." },
        { title: "Vérification KYC/KYB", description: "Contrôles d'identité et de conformité automatisés." },
        { title: "Génération de Compte", description: "Attribution d'un IBAN dédié et d'un grand livre virtuel." },
        { title: "Compte Prêt", description: "Le compte nommé est en ligne et prêt pour les paiements." }
      ],
      demo: {
        individual: "Particulier : John Doe",
        business: "Entreprise : TechFlow Inc.",
        submit: "Soumettre les Détails",
        verifying: "Vérification de l'Identité",
        crossRef: "Croisement des listes de surveillance mondiales...",
        holder: "Titulaire du Compte",
        iban: "IBAN Virtuel",
        card: "Carte Virtuelle",
        success: "Compte Émis avec Succès"
      }
    },
    cta: {
      title: "Prêt à construire la prochaine génération de la finance ?",
      subtitle: "Planifiez un appel de découverte avec nos experts et explorez comment notre réseau mondial BaaS peut accélérer votre croissance.",
      book: "Réserver un Appel de Découverte",
      contact: "Contacter les Ventes"
    },
    footer: {
      description: "Le principal cabinet de conseil mondial pour l'infrastructure Banking-as-a-Service and Fintech.",
      solutions: "Solutions",
      company: "Entreprise",
      solutionItems: ["Banque Numérique", "Émission de Cartes", "Crypto & Web3"],
      companyItems: ["À Propos", "Notre Réseau", "Contact"],
      rights: "© 2026 BAAS. Tous droits réservés.",
      links: ["Politique de Confidentialité", "Conditions d'Utilisation", "Politique de Cookies"]
    }
  },
  es: {
    nav: {
      solutions: "Soluciones",
      network: "Red",
      services: "Servicios",
      about: "Acerca de",
      getStarted: "Empezar",
    },
    hero: {
      badge: "Consultoría Global de Banking-as-a-Service",
      title: "El Puente hacia las Finanzas Globales.",
      subtitle: "BAAS es una firma de consultoría especializada que conecta fintechs de alto crecimiento con instituciones bancarias establecidas en todo el mundo. Navegamos la complejidad de BaaS para que usted pueda enfocarse en la innovación.",
      consult: "Consultar con Expertos",
      network: "Nuestra Red Global",
      partners: "Socios estratégicos en 4 continentes",
      statValue: "98%",
      statLabel: "Integraciones de Socios Exitosas",
    },
    stats: {
      fintech: { label: "Socios Fintech", value: "300+", description: "Innovadores de Alto Crecimiento Globalmente" },
      bank: { label: "Asociaciones Bancarias", value: "25+", description: "Asegurados por la FDIC/Bancos de Primer Nivel" },
      customers: { label: "Clientes Atendidos", value: "150+", description: "Clientes Fintech Globales de Renombre" },
      integration: { label: "Tasa de Integración", value: "98%", description: "Éxito en el emparejamiento exitoso" },
    },
    features: {
      title: "El Futuro de la Banca es Modular.",
      subtitle: "Banking-as-a-Service permite que cualquier empresa ofrezca productos financieros. Proporcionamos la experiencia y las conexiones para hacerlo realidad.",
      items: [
        {
          title: "Asociaciones de Bancos y Fintech",
          description: "Acceso directo a bancos de Nivel 1 y Nivel 2 en Europa, Asia y las Américas."
        },
        {
          title: "Cumplimiento y Licencias",
          description: "Navegue por paisajes regulatorios complejos con nuestra asesoría experta en cumplimiento."
        },
        {
          title: "Integración de API",
          description: "Conéctese sin problemas a los sistemas bancarios centrales a través de capas de API modernas y seguras."
        },
        {
          title: "Consultoría Estratégica",
          description: "Hojas de ruta a medida para fintechs que buscan lanzar tarjetas, cuentas o pagos."
        }
      ]
    },
    network: {
      title: "Nuestro Ecosistema Global.",
      subtitle: "No solo consultamos; conectamos. Nuestra red incluye más de 100 bancos, EMIs y proveedores de tecnología en todo el mundo, asegurando que encuentre el socio perfecto para sus necesidades específicas.",
      items: [
        "Cuentas nominativas para individuos y empresas",
        "Acceso a múltiples licencias bancarias (EMI, PI, Banca Completa)",
        "Soporte para más de 40 monedas y rieles de pago locales",
        "Pilas tecnológicas pre-aprobadas para un despliegue rápido",
        "Gestión de proyectos de extremo a extremo desde la RFP hasta el lanzamiento"
      ],
      cta: "Explorar Nuestra Red"
    },
    services: {
      title: "Consultoría Integral de BaaS",
      subtitle: "Desde el concepto inicial hasta las operaciones en vivo, proporcionamos el apoyo estratégico y técnico necesario para construir un producto financiero exitoso.",
      cta: "Todos los Servicios",
      items: [
        {
          title: "Estrategia de Entrada al Mercado",
          description: "Le ayudamos a identificar las mejores jurisdicciones y socios bancarios según su modelo de negocio y público objetivo."
        },
        {
          title: "Gestión de RFP de BaaS",
          description: "Gestionamos todo el proceso de selección, desde la definición de requisitos hasta la negociación de términos comerciales con los bancos."
        },
        {
          title: "Asesoría Técnica",
          description: "Orientación experta sobre la selección del middleware, sistemas de contabilidad y socios de procesamiento de tarjetas adecuados."
        }
      ]
    },
    process: {
      title: "Emisión Instantánea de Cuentas Nominativas.",
      subtitle: "Nuestro flujo de trabajo automatizado le permite crear cuentas totalmente compatibles a nombre de su cliente en segundos. Admitimos la creación de cuentas tanto para individuos como para empresas, asegurando que cada cuenta se emita a nombre del usuario final.",
      steps: [
        { title: "Incorporación de Clientes", description: "Recopile detalles de individuos o empresas para la emisión de cuentas nominativas." },
        { title: "Verificación KYC/KYB", description: "Controles de identidad y cumplimiento automatizados." },
        { title: "Generación de Cuentas", description: "Asignación de IBAN dedicado y libro mayor virtual." },
        { title: "Cuenta Lista", description: "La cuenta nominativa está activa y lista para pagos." }
      ],
      demo: {
        individual: "Individual: John Doe",
        business: "Empresa: TechFlow Inc.",
        submit: "Enviar Detalles",
        verifying: "Verificando Identidad",
        crossRef: "Cruzando listas de vigilancia globales...",
        holder: "Titular de la Cuenta",
        iban: "IBAN Virtual",
        card: "Tarjeta Virtual",
        success: "Cuenta Emitida con Éxito"
      }
    },
    cta: {
      title: "¿Listo para construir la próxima generación de finanzas?",
      subtitle: "Programe una llamada de descubrimiento con nuestros expertos y explore cómo nuestra red global de BaaS puede acelerar su crecimiento.",
      book: "Reservar una Llamada de Descubrimiento",
      contact: "Contactar a Ventas"
    },
    footer: {
      description: "La firma de consultoría global líder para infraestructura de Banking-as-a-Service y Fintech.",
      solutions: "Soluciones",
      company: "Empresa",
      solutionItems: ["Banca Digital", "Emisión de Tarjetas", "Cripto y Web3"],
      companyItems: ["Sobre Nosotros", "Nuestra Red", "Contacto"],
      rights: "© 2026 BAAS. Todos los derechos reservados.",
      links: ["Política de Privacidad", "Términos de Servicio", "Política de Cookies"]
    }
  }
};
