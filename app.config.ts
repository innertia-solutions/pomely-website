export default defineAppConfig({
    github: false,

    ui: {
        colors: {
            primary: 'violet',
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
        title: 'Documentia',
        description: 'Plataforma de gestión documental y cumplimiento con IA para empresas que se auditan.',

        image: '/isologo.png',

        socials: {},

        header: {
            logo: {
                light: '/isologo.png',
                dark: '/isologo.png',
            },
            title: 'Documentia',
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
                text: '© 2026 Documentia. Todos los derechos reservados.',
                href: '',
            },
            textLinks: [],
            iconLinks: [],
        },
    },
})
