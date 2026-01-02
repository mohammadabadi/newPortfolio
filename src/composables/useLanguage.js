import { ref, computed } from 'vue'

const currentLanguage = ref('fa')

const translations = {
    fa: {
        nav: {
            home: 'خانه',
            about: 'درباره من',
            experience: 'تجربیات',
            skills: 'مهارت‌ها',
            education: 'تحصیلات',
            contact: 'تماس'
        },
        hero: {
            greeting: 'سلام، من',
            name: 'علی محمدآبادی',
            title: 'هستم',
            typing: ['توسعه‌دهنده Fullstack', 'توسعه‌دهنده Vue', 'توسعه‌دهنده Nuxt', 'توسعه‌دهنده Laravel'],
            description: 'توسعه‌دهنده Fullstack با بیش از ۹ سال تجربه در ساخت اپلیکیشن‌های وب مقیاس‌پذیر و پرکارایی با Vue.js، Nuxt.js، React.js، Laravel و Python',
            contactBtn: 'تماس با من',
            moreBtn: 'بیشتر بدانید'
        },
        about: {
            title: 'درباره من',
            description1: 'توسعه‌دهنده Fullstack با بیش از',
            description2: '۹ سال تجربه',
            description3: 'در ساخت اپلیکیشن‌های وب مقیاس‌پذیر و پرکارایی با استفاده از Vue.js، Nuxt.js، React.js، Laravel و Python. توانایی اثبات‌شده در ارائه راه‌حل‌های کاربرمحور با تمرکز بر عملکرد، قابلیت نگهداری و همکاری بین تیمی.',
            description4: 'پیشینه قوی در متدولوژی‌های چابک، بهینه‌سازی UI/UX و تست خودکار. تجربه کار در پروژه‌های بزرگ و پیچیده با تمرکز بر کیفیت کد و بهترین شیوه‌های توسعه.',
            stats: {
                years: 'سال تجربه',
                projects: 'پروژه موفق',
                satisfaction: 'رضایت مشتری'
            }
        },
        experience: {
            title: 'تجربیات کاری',
            tasks: {
                mom1: 'رهبری توسعه فرانت‌اند برای چندین سیستم نوبت‌دهی بیمار و داشبورد مدیریت کلینیک',
                mom2: 'توسعه و نگهداری ماژول‌های مقیاس‌پذیر با استفاده از Nuxt.js با پوشش تست با Cypress',
                mom3: 'طراحی و پیاده‌سازی پنل مدیریت پیام و رزرو',
                mom4: 'پیاده‌سازی پنل دستیار هوش مصنوعی Mom با فریمورک React',
                mom5: 'بازسازی پنل ادمین پلتفرم و بهبود عملکرد فرانت‌اند',
                mom6: 'توسعه مجموعه تست end-to-end با Cypress',
                abakari1: 'طراحی و پیاده‌سازی پلتفرم چند فروشگاهی با Vue.js',
                abakari2: 'همکاری با تیم‌های بک‌اند برای اطمینان از امکان‌پذیری فنی و یکپارچه‌سازی بی‌نقص',
                abakari3: 'بهبود عملکرد JavaScript و CSS، منجر به بهبود UX',
                abakari4: 'پیاده‌سازی پنل تست با Cypress برای تست بخش‌ها و کامپوننت‌ها',
                abakari5: 'بررسی فرآیندهای سیستم و بهینه‌سازی آن‌ها در سمت کاربر و سرور',
                abakari6: 'بهبود فرآیندهای داخلی سیستم و مدیریت وظایف و پروژه',
                arz: 'پیاده‌سازی Atlas Dashboard (dashboard.atlas.trade) با Vue',
                dayan1: 'توسعه کامپوننت‌های وب مقیاس‌پذیر و اطمینان از سازگاری بین مرورگرها',
                dayan2: 'مشارکت در ثبات UI با نگهداری مستندات سیستم طراحی',
                eghamat1: 'همکاری با طراحان UX و تیم‌های بک‌اند برای پیاده‌سازی اپلیکیشن‌های وب پویا',
                eghamat2: 'نگهداری سازگاری بین مرورگرها و بهینه‌سازی عملکرد',
                greenweb1: 'ایجاد و نگهداری وب‌سایت‌های مشتری با تمرکز بر UI/UX',
                greenweb2: 'ارائه رابط‌های قابل دسترسی و سازگار با موبایل',
                momFreelance1: 'پیاده‌سازی پنل پیام‌رسان Mom با Vue.js و Laravel برای مدیریت پیام‌ها و ردیابی بین پروژه‌های داخلی',
                fifacoin1: 'پیاده‌سازی طراحی جدید و بهبود عملکرد whatsgaming و fifacoin با Vue.js، Nuxt.js و Laravel',
                fifacoin2: 'پیاده‌سازی mydgn.com با Vue.js و Laravel',
                fifacoin3: 'پیاده‌سازی کارت‌های بازیکن و لندینگ sorare',
                tandis1: 'توسعه رابط‌های وب ریسپانسیو و بهینه‌سازی عملکرد برای ترافیک بالا',
                tandis2: 'اعمال فرآیندهای چابک برای بهبود کیفیت کد و کاهش چرخه توسعه',
                vesta1: 'ساخت پلتفرم‌های وب پرکارایی برای پشتیبانی از ترافیک سنگین',
                vesta2: 'انجام تست خودکار و اعمال بهترین شیوه‌ها برای استفاده مجدد از کد و ماژولاریتی'
            }
        },
        skills: {
            title: 'مهارت‌ها',
            categories: {
                languages: 'زبان‌ها و فریمورک‌ها',
                tools: 'ابزارها و تست',
                practices: 'روش‌ها و تمرین‌ها'
            }
        },
        education: {
            title: 'تحصیلات و زبان‌ها',
            degree: 'کارشناسی مهندسی کامپیوتر',
            university: 'دانشگاه سجاد، مشهد، ایران',
            languages: 'زبان‌ها',
            persian: 'فارسی',
            english: 'انگلیسی',
            native: 'زبان مادری',
            intermediate: 'متوسط'
        },
        contact: {
            title: 'تماس با من',
            subtitle: 'بیایید با هم صحبت کنیم',
            description: 'اگر پروژه‌ای دارید یا می‌خواهید با من همکاری کنید، خوشحال می‌شوم از شما بشنوم.',
            email: 'ایمیل',
            telegram: 'تلگرام',
            mobile: 'موبایل',
            linkedin: 'لینکدین',
            ready: 'آماده شروع پروژه بعدی هستم!',
            footer: 'تمامی حقوق محفوظ است.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            skills: 'Skills',
            education: 'Education',
            contact: 'Contact'
        },
        hero: {
            greeting: 'Hi, I\'m',
            name: 'Ali Mohammadabadi',
            title: '',
            typing: ['Fullstack Developer', 'Vue Developer', 'Nuxt Developer', 'Laravel Developer'],
            description: 'Fullstack Developer with over 9 years of experience in building scalable, high-performance web applications using Vue.js, Nuxt.js, React.js, Laravel and Python',
            contactBtn: 'Contact Me',
            moreBtn: 'Learn More'
        },
        about: {
            title: 'About Me',
            description1: 'Fullstack Developer with over',
            description2: '9 years of experience',
            description3: 'in building scalable, high-performance web applications using Vue.js, Nuxt.js, React.js, Laravel and Python. Proven ability to deliver user-centric solutions with a focus on performance, maintainability, and cross-team collaboration.',
            description4: 'Strong background in agile methodologies, UI/UX optimization, and automated testing. Experience working on large and complex projects with a focus on code quality and best development practices.',
            stats: {
                years: 'Years Experience',
                projects: 'Successful Projects',
                satisfaction: 'Client Satisfaction'
            }
        },
        experience: {
            title: 'Work Experience',
            tasks: {
                mom1: 'Led frontend development for multiple patient appointment systems and clinic management dashboards.',
                mom2: 'Developed and maintained scalable modules using Nuxt.js with test coverage using Cypress.',
                mom3: 'Designed and implemented message management and booking panels.',
                mom4: 'Implementing Mom\'s AI Assistant panel with the React Framework.',
                mom5: 'Rebuilt the platform\'s admin panel and improved frontend performance.',
                mom6: 'Developed end-to-end test suite with Cypress.',
                abakari1: 'Designed and implemented a multi Store platform with Vue.js.',
                abakari2: 'Collaborated with backend teams to ensure technical feasibility and seamless integration.',
                abakari3: 'Improved JavaScript and CSS performance, resulting in enhanced UX.',
                abakari4: 'Implementing a test panel with Cypress to test sections and components.',
                abakari5: 'Reviewing system processes and optimizing them on the user and server side.',
                abakari6: 'Improving internal system processes and task and project management.',
                arz: 'Implementing Atlas Dashboard (dashboard.atlas.trade) with Vue.',
                dayan1: 'Developed scalable web components and ensured cross-browser compatibility.',
                dayan2: 'Contributed to UI consistency by maintaining design system documentation.',
                eghamat1: 'Collaborated with UX designers and backend teams to implement dynamic web applications.',
                eghamat2: 'Maintained cross-browser compatibility and performance optimization.',
                greenweb1: 'Created and maintained client websites with a focus on UI/UX.',
                greenweb2: 'Delivered accessible and mobile-friendly interfaces.',
                momFreelance1: 'Implementing mom messenger panel with Vue.js and Laravel to manage messaging and tracking between internal projects.',
                fifacoin1: 'Implementing new design and improving the performance of whatsgaming and fifacoin with Vue.js, Nuxt.js and Laravel.',
                fifacoin2: 'Implementing mydgn.com with Vue.js and Laravel.',
                fifacoin3: 'Implementing player cards and landing sorare.',
                tandis1: 'Developed responsive web interfaces and optimized performance for high traffic.',
                tandis2: 'Applied Agile workflows to enhance code quality and reduce development cycles.',
                vesta1: 'Built high-performance web platforms designed to support heavy traffic.',
                vesta2: 'Conducted automated testing and applied best practices for code reuse and modularity.'
            }
        },
        skills: {
            title: 'Skills',
            categories: {
                languages: 'Languages & Frameworks',
                tools: 'Testing & Tools',
                practices: 'Practices & Methods'
            }
        },
        education: {
            title: 'Education & Languages',
            degree: 'Bachelor of Computer Engineering',
            university: 'Sadjad University, Mashhad, Iran',
            languages: 'Languages',
            persian: 'Persian',
            english: 'English',
            native: 'Native',
            intermediate: 'Medium proficiency'
        },
        contact: {
            title: 'Contact Me',
            subtitle: 'Let\'s Talk',
            description: 'If you have a project or want to collaborate with me, I\'d be happy to hear from you.',
            email: 'Email',
            telegram: 'Telegram',
            mobile: 'Mobile',
            linkedin: 'LinkedIn',
            ready: 'Ready to start your next project!',
            footer: 'All rights reserved.'
        }
    }
}

export function useLanguage() {
    const language = computed(() => currentLanguage.value)
    const direction = computed(() => currentLanguage.value === 'fa' ? 'rtl' : 'ltr')
    const t = computed(() => translations[currentLanguage.value])

    const setLanguage = (lang) => {
        currentLanguage.value = lang
        localStorage.setItem('language', lang)
        document.documentElement.setAttribute('dir', direction.value)
        document.documentElement.setAttribute('lang', lang)
    }

    const toggleLanguage = () => {
        setLanguage(currentLanguage.value === 'fa' ? 'en' : 'fa')
    }

    return {
        language,
        direction,
        t,
        setLanguage,
        toggleLanguage
    }
}



