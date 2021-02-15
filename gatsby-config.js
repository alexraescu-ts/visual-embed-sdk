module.exports = {
    pathPrefix: '/embed-sdk',
    siteMetadata: {
        title: 'tseverywhere-docs',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-mdx',
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/docs/src/pages`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/docs/src/pages/`,
            },
            __key: 'pages',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'asciidocs',
                path: `${__dirname}/docs/src/asciidocs/`,
            },
            __key: 'asciidocs',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'common',
                path: `${__dirname}/docs/src/asciidocs/common/`,
            },
            __key: 'asciidocs_common',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'static',
                path: `${__dirname}/docs/src/static/`,
            },
            __key: 'asciidocs_common',
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/docs/src/intl`,
                // supported language
                languages: ['en'],
                // language file path
                defaultLanguage: 'en',
                // option to redirect to `/en` when connecting `/`
                redirect: true,
            },
        },
        {
            resolve: `gatsby-transformer-asciidoc`,
            options: {
                attributes: {
                    showtitle: true,
                },
                fileExtensions: ['ad', 'adoc'],
            },
        },
    ],
};
