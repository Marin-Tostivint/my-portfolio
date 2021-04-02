module.exports = {
    //-- SITE SETTINGS -----
    author: "@konstantinmuenster",
    siteTitle: "Marin Tostivint Portfolio",
    siteShortTitle: "Marin Tostivint", // Used as logo text in header, footer, and splash screen
    siteDescription: "Etudiant en école d'informatique",
    siteUrl: "https://gatsby-starter-portfolio-minimal.netlify.app/",
    siteLanguage: "en_US",
    siteIcon: "content/favicon.png", // Relative to gatsby-config file
    seoTitleSuffix: "Portfolio Marin Tostivint", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

    // -- THEME SETTINGS -----
    colors: {
        lightTheme: {
            primary: "#000000",
            secondary: "#FFF4D9",
            tertiary: "#F2F2F2",
            text: "#000000",
            subtext: "#555555",
            background: "#FFFFFF",
            card: "#FFFFFF",
            scrollBar: "rgba(0, 0, 0, 0.5)",
            boxShadow: "rgba(0, 0, 0, 0.16)",
            boxShadowHover: "rgba(0, 0, 0, 0.32)",
        },
        darkTheme: {
            primary: "#FAFAFA",
            secondary: "#2A2926",
            tertiary: "#252525",
            text: "rgba(255, 255, 255, 0.87)",
            subtext: "#AAAAAA",
            background: "#121212",
            card: "#1C1C1C",
            scrollBar: "rgba(255, 255, 255, 0.5)",
            boxShadow: "rgba(0, 0, 0, 0.16)",
            boxShadowHover: "rgba(0, 0, 0, 0.32)",
        },
    },
    fonts: {
        primary: "Roboto, Arial, sans-serif",
    },

    //-- ARTICLES SECTION SETTINGS -----
    // You can create your own Medium feed with this rss to json converter: https://rss2json.com/
    // To access your Medium RSS feed, just replace this url with your username: https://medium.com/feed/@{yourname}

    shownArticles: 3,

    //-- SOCIAL MEDIA SETTINGS -----
    // There are icons available for the following platforms:
    // Medium, GitHub, LinkedIn, XING, Behance, E-Mail
    socialMedia: [{
            name: "Linkedin",
            url: "https://www.linkedin.com/in/konstantin-muenster/",
        },
        {
            name: "Medium",
            url: "https://konstantinmuenster.medium.com/",
        },
        {
            name: "Github",
            url: "https://github.com/konstantinmuenster/gatsby-starter-portfolio-minimal",
        },
        {
            name: "Behance",
            url: "https://www.behance.net/konstanmnster",
        },
        // {
        //   name: "Mail",
        //   url: "mailto:mail@konstantin.digital",
        // },
    ],

    //-- NAVIGATION SETTINGS -----
    navLinks: {
        menu: [{
                name: "A propos",
                url: "/#about",
            },
            {
                name: "Mes projets",
                url: "/#projects",
            },
            {
                name: "Contact",
                url: "/#contact",
            },
        ],
        button: {
            useFileName: true,
            name: "CV",
            fileName: "CV.pdf", // the file has to be placed inside the static folder at the root level
            url: "", // if useFileName=false, you can set an anchor link here and use the button for navigational purposes
        },
    },
    footerLinks: [{
        name: "Imprint",
        url: "/imprint",
    }, ],
};