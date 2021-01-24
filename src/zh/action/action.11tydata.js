module.exports = {
    tags: ['action', 'zh'],
    layout: 'pages/action-page',
    eleventyComputed: {
        permalink: '/{{ locale }}/actions/{{ shortName | slug }}/index.html',
        translationKey: 'action-{{ page.fileSlug }}',
    },
};
