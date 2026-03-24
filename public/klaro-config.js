window.klaroConfig = {
    // You can customize the storage method: 'cookie' (default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses to store user consent.
    elementID: 'klaro',

    // You can change the name of the cookie Klaro uses to store the consent.
    storageName: 'klaro',

    // You can specify a custom privacy policy URL.
    privacyPolicy: '/datenschutz',

    // You can specify whether to show the banner for everyone or just for certain locations (optional).
    // For simplicity and full compliance, we'll show it for all.
    
    // Default state for applications.
    default: false,

    // You can specify whether to always show the banner even if the user has already consented.
    mustConsent: false,

    // You can specify the theme of the banner.
    acceptAll: true,
    hideDeclineAll: false,
    hideLearnMore: false,

    // The applications that Klaro will manage.
    apps: [
        {
            name: 'google-analytics',
            default: false,
            title: {
                en: 'Google Analytics',
                de: 'Google Analytics',
            },
            description: {
                en: 'Statistical analysis of website usage to improve our services.',
                de: 'Statistische Analyse der Website-Nutzung zur Verbesserung unseres Angebots.',
            },
            cookies: [
                [/^_ga/, '/', 'ocalkaptan.de'],
                [/^_gid/, '/', 'ocalkaptan.de'],
                [/^_gat/, '/', 'ocalkaptan.de'],
            ],
            purposes: ['analytics'],
        },
    ],

    // Translations for the UI.
    translations: {
        en: {
            consentModal: {
                title: 'Information that we collect',
                description: 'Here you can see and customize the information that we collect about you. Entries marked as "Service" are required to satisfy technical requirements.',
            },
            consentNotice: {
                changeDescription: 'There were changes since your last visit, please update your consent.',
                description: 'We use cookies to enhance your experience. You can choose which cookies you want to allow.',
                learnMore: 'Manage settings',
                imprint: 'Impressum',
                privacyPolicy: 'Privacy Policy',
            },
            googleAnalytics: {
                description: 'Statistical analysis of website usage.',
            },
            purposes: {
                analytics: 'Analytics',
            },
            ok: 'Accept all',
            decline: 'Decline all',
            save: 'Save',
        },
        de: {
            consentModal: {
                title: 'Informationen, die wir sammeln',
                description: 'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln. Einträge, die als "Service" bezeichnet werden, sind technisch notwendig.',
            },
            consentNotice: {
                changeDescription: 'Es gab Änderungen seit Ihrem letzten Besuch, bitte aktualisieren Sie Ihre Zustimmung.',
                description: 'Wir verwenden Cookies, um Ihre Erfahrung zu verbessern. Sie können wählen, welche Cookies Sie zulassen möchten.',
                learnMore: 'Einstellungen verwalten',
                imprint: 'Impressum',
                privacyPolicy: 'Datenschutzerklärung',
            },
            googleAnalytics: {
                description: 'Statistische Analyse der Website-Nutzung.',
            },
            purposes: {
                analytics: 'Analyse',
            },
            ok: 'Alle akzeptieren',
            decline: 'Alle ablehnen',
            save: 'Speichern',
        },
    },
};
