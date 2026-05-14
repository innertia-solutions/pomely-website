export default defineAppConfig({
    github: false,

    ui: {
        colors: {
            primary: 'rose',
            secondary: 'stone',
            neutral: 'stone',
        },
        button: {
            color: {
                stone: {
                    solid: 'bg-stone-900 text-white hover:bg-stone-800',
                }
            }
        }
    },

    docus: {
        title: 'Pomely',
        description: 'Sistema de cotización con IA. Captura pedidos, arma cotizaciones automáticamente y controla tus flujos comerciales.',

        image: '/isologo.png',

        socials: {},

        header: {
            logo: {
                light: '/isologo.png',
                dark: '/isologo.png',
            },
            title: 'Pomely',
            showTitle: true,
            colorMode: false,
        },

        aside: {
            level: 0,
            collapsed: false,
        },

        main: {
            padded: true,
            fluid: false,
        },

        footer: {
            credits: {
                text: '© 2026 Pomely. Todos los derechos reservados.',
                href: '',
            },
            textLinks: [],
            iconLinks: [],
        },
    },
})
