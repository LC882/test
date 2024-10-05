'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * 语言切换功能
 */
const languageToggle = document.querySelector("[data-language-toggle]");
const elementsToTranslate = document.querySelectorAll("[data-translate]");

const translations = {
  'zh': {
    'home': '首页',
    'about': '关于我们',
    'services': '服务',
    'blog': '动态',
    'contact': '联系',
    'logo': 'HQ Logistics',
    'HQ': '宏强',
    'InternationalLogistics': '国际物流',
    'A partner you can trust': '您可以信赖的合作伙伴',
    'bestQuote': '获得最好的报价',
    'aboutCompany': '关于公司',
    'hqLogistics': 'HQ 国际物流',
    'logisticsDescription': '我们提供全面的物流服务，确保货物从中国高效安全地运输到俄罗斯所有城市.',
    'avoidPaperwork': '客户避免所有文书工作和海关手续，货物到达俄罗斯联邦后再付款.',
    'assistClients': '我们协助客户与工厂达成协议，确保每笔交易高效顺利完成.',
    'controlProcess': '全程把控从采购到交付的每个环节，确保执行无误.',
    'languageBarrier': '客户经理精通俄语，消除语言障碍，确保沟通准确无误.',
    'focusOnQuality': '我们始终专注于货物安全和服务质量，提供可靠的解决方案.',
    'vision': '我们的愿景是使全球物流变得更加高效和创新.',
    'viewServices': '查看服务',
    'mainDirections': '主要方向',
    'serviceCatalog': '服务目录',
    'orderLogistics': '订购物流',
    'russiaKazakhstan': '俄罗斯&哈萨克斯坦',
    'cargoTracking': '货物跟踪',
    'orderTracking': '订单追踪&查询物流',
    'warehousingService': '仓储服务',
    'storageAndAgency': '储存货物&仓库代理',
    'learnMore': '了解更多',
    'companyUpdates': '公司动态展示',
    'officialPartner': '我们是俄罗斯市场官方合作伙伴，为您与中国合作提供全方位服务。 从中国网站购买商品没有最低订单金额限制。 中国至俄罗斯及独联体国家的散货及集箱的货物运输9-15天内快速交货。我们也可以帮助您选择产品与厂家协商价格。',
    'whyChooseUs': '为什么选择我们',
    'ourAdvantages': '我们的优势',
    'customsRepresentative': '我们公司在机场设有海关代表，公司的专业人员能够解决清关过程中的任何困难。',
    'lowPrices': '我们的价格低廉',
    'customsDifficulties': '我们公司拥有海关代表，可以解决清关过程中遇到的任何困难。我们自己接收、运输和交付货物，无需外部帮助。',
    'noHiddenFees': '我们没有隐藏费用',
    'noHiddenCosts': '我们直接向客户报告商品、运输、包装和保险的费用，从供应商或制造商处直接报价。我们提前公布所有服务，并在发货时提供最终账单，价格不会改变。',
    'workingSince2008': '我们自2008年起工作',
    'ownTransportLines': '我们拥有自己的运输路线，以及在中国、俄罗斯、哈萨克斯坦和吉尔吉斯斯坦的仓库和员工。',
    'contactUs': '联系我们',
  },

  'ru': {
    'home': 'Главная',
    'about': 'О нас',
    'services': 'Услуги',
    'blog': 'Блог',
    'contact': 'Контакты',
    'logo': 'HQ логистика',
    'HQ': 'HQ ООО',
    'InternationalLogistics': 'логистика',
    'A partner you can trust': 'Партнер, которому можно доверять',
    'bestQuote': 'лучшая цитата',
    'aboutCompany': 'О компании',
    'hqLogistics': 'HQ Международная логистика',
    'logisticsDescription': 'Мы предоставляем комплексные логистические услуги, обеспечивая эффективную и безопасную доставку грузов из Китая во все города России.',
    'avoidPaperwork': 'Клиенты избегают всей бумажной работы и таможенных процедур, оплачивая груз после его прибытия в Российскую Федерацию.',
    'assistClients': 'Мы помогаем клиентам заключать соглашения с заводами, обеспечивая эффективное и гладкое выполнение каждой сделки.',
    'controlProcess': 'Мы контролируем каждый этап от закупки до доставки, гарантируя точное выполнение.',
    'languageBarrier': 'Менеджеры по работе с клиентами владеют русским языком, устраняя языковые барьеры и обеспечивая точность коммуникации.',
    'focusOnQuality': 'Мы всегда сосредоточены на безопасности грузов и качестве обслуживания, предлагая надежные решения.',
    'vision': 'Наша цель — сделать глобальную логистику более эффективной и инновационной.',
    'viewServices': 'Посмотреть услуги',
    'mainDirections': 'Основные направления',
    'serviceCatalog': 'Каталог услуг',
    'orderLogistics': 'Заказ логистики',
    'russiaKazakhstan': 'Направление России и направление Казахстана',
    'cargoTracking': 'Отслеживание грузов',
    'orderTracking': 'Отслеживание заказов и запрос логистики',
    'warehousingService': 'Услуги хранения',
    'storageAndAgency': 'Хранение грузов и складское агентство',
    'learnMore': 'Узнать больше',
    'companyUpdates': 'Новости компании',
    'officialPartner': 'Мы являемся официальным партнером на российском рынке и предоставляем вам полный спектр услуг для сотрудничества с Китаем. Нет минимальной суммы заказа при покупке товаров на китайских сайтах. Быстрая доставка грузов от 9 до 15 дней из Китая в Россию и страны СНГ. Мы также можем помочь вам выбрать продукты и согласовать цены с производителями.',
    'whyChooseUs': 'Почему выбирают нас',
    'ourAdvantages': 'Наши преимущества',
    'customsRepresentative': 'Наша компания имеет таможенных представителей в аэропортах, и наши специалисты могут решить проблемы, возникающие в процессе таможенного оформления.',
    'lowPrices': 'Наши цены низкие',
    'customsDifficulties': 'Наша компания имеет таможенных представителей в аэропортах. Наши специалисты могут решить любые проблемы, возникающие в процессе таможенного оформления. Мы сами принимаем, транспортируем и доставляем грузы без внешней помощи.',
    'noHiddenFees': 'У нас нет скрытых платежей',
    'noHiddenCosts': 'Мы сразу же сообщаем стоимость товаров, доставки, упаковки и страхования от поставщиков или производителей. Мы заранее объявляем все услуги и предоставляем счет с окончательной ценой при отгрузке; цена не изменится.',
    'workingSince2008': 'Мы работаем с 2008 года',
    'ownTransportLines': 'У нас есть собственные транспортные маршруты, а также склады и сотрудники в Китае, России, Казахстане и Кыргызстане.',
    'contactUs': 'Свяжитесь с нами',
  }
};

let currentLanguage = 'zh'; // 默认语言为中文

languageToggle.addEventListener("click", function() {
  currentLanguage = currentLanguage === 'zh' ? 'ru' : 'zh';
  updateLanguage();
});

function updateLanguage() {
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
  
  // 更新语言切换按钮文本
  languageToggle.textContent = currentLanguage === 'zh' ? 'русский' : '中文';
}

// 页面加载时初始化语言为俄语
document.addEventListener('DOMContentLoaded', function() {
  document.documentElement.lang = 'ru'; // 设置默认语言为俄语
  currentLanguage = 'ru'; // 更新当前语言
  updateLanguage(); // 更新页面内容
});

// 语言切换函数
function switchLanguage(language) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    element.textContent = translations[language][key] || element.textContent;
  });
}

// 绑定语言切换按钮
document.querySelector('[data-language-toggle]').addEventListener('click', () => {
  const currentLanguage = document.documentElement.lang; // 获取当前语言
  const newLanguage = currentLanguage === 'zh' ? 'ru' : 'zh'; // 切换语言
  document.documentElement.lang = newLanguage; // 更新语言属性
  switchLanguage(newLanguage); // 更新内容
  languageToggle.textContent = newLanguage === 'zh' ? 'русский' : '中文'; // 更新按钮文本
});