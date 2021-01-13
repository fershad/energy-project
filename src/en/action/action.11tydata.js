module.exports = {
    tags: ['action', 'en'],
    eleventyComputed: {
        permalink: '/{{ locale }}/actions/{{ shortName | slug }}/index.html',
        translationKey: 'action-{{ page.fileSlug }}',
    },
};
