---
title: Listen
subtag: There are a multitude of podcasts online that you can listen to and learn more about various facets of the climate crisis, and ways you can act.
shortName: podcasts
hasMore: true
thumbnail: { 
    src: "./src/_includes/img/actions/podcasts.jpg", 
    alt: "Person standing while holding phone.",
    caption: <span>Photo by <a href="https://unsplash.com/@melanie_sophie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Melanie Pongratz</a> on <a href="https://unsplash.com/s/photos/listen-podcasts?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
}
contributors:
    - 
        - display: "Fershad"
        - twitter: "@fershad"
        - github: "fishintaiwan"
---
# {{ title }}
Podcasts can be both entertaining and educational. They are a great way to expand your knowledge on the complex issue that is climate change. They allow you access to experts and industry leaders, plus they make it easy to remain up-to-date as policy, industry and science evolves.

Below are a few podcasts that have helped me better understand the problem of climate change, and what we might be able to do to fix it. I'd love to expand this list, so if you've got any recommendations then [send them through!](mailto:{{ site.contact.email }})

<div class="action-grid auto-grid">
{% for pod in podcasts %}
<div class="card podcast">
{% image pod.image, 'Book cover for {{ pod.title }}', '150, 300, 600' %}
<div class="card--content">
<p>{{ pod.title }}<br><strong>{{ pod.author }}</strong></p>
<a href="{{pod.website}}" data-external class="text-center">{{ pages.action.visitWebsite | defaultLocale: locale }}</a>
</div>
</div>
{% endfor %}
</div>