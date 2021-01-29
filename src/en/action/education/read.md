---
title: Read
subtag: There are plenty of good books out there than can help further your knowledge about climate issues and ways you can make a difference.
shortName: read
hasMore: true
thumbnail: { 
    src: "./src/_includes/img/actions/book.jpg", 
    alt: "Open book besides glasses and coffee.",
    caption: <span>Photo by <a href="https://unsplash.com/@sincerelymedia?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sincerely Media</a> on <a href="https://unsplash.com/s/photos/read?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
}
contributors:
    - 
        - display: "Fershad"
        - twitter: "@fershad"
        - github: "fishintaiwan"
---
# {{title}}
Whether in paperback form, or digital, books provide a deep wealth of knowledge that you can take in and process at your own pace.

Below are some of the books that have helped me understand the climate emergency we're facing, what role our actions are playing in it, and how we can turn things around.

I'd love to add to this list. So, if you have any book recommendations [send them through!](mailto:{{ site.contact.email }}) 

<div class="action-grid auto-grid">
{% for book in books %}
<div class="card book">
{% image book.image, 'Book cover for {{ book.title }}', '150, 300, 600' %}
<div class="card--content">
<p>{{ book.title }}<br><strong>{{ book.author }}</strong></p>
<a href="{{book.website}}" data-external class="text-center">{{ pages.action.visitWebsite | defaultLocale: locale }}</a>
</div>
</div>
{% endfor %}
</div>