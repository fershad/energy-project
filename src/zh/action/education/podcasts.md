---
title: 聽
subtag: 您可以在線收聽許多播客，並詳細了解氣候危機的各個方面以及如何採取行動。
shortName: podcasts
hasMore: true
thumbnail: { 
    src: "./src/_includes/img/actions/podcasts.jpg", 
    alt: "人站立時拿著電話。",
    caption: <span>攝影者<a href="https://unsplash.com/@melanie_sophie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Melanie Pongratz</a>在<a href="https://unsplash.com/s/photos/listen-podcasts?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
}
contributors:
    - 
        - display: "Fershad"
        - twitter: "@fershad"
        - github: "fishintaiwan"
---
# {{ title }}
播客既可以娛樂又可以教育。 它們是擴展您對氣候變化這一複雜問題的認識的好方法。 它們使您可以與專家和行業領導者取得聯繫，此外，隨著政策，行業和科學的發展，它們也使您可以輕鬆保持最新狀態。

以下是一些播客，它們幫助我更好地了解了氣候變化問題以及我們可能採取的措施。 我希望擴展此列表，因此，如果您有任何建議，請[通過發送！](mailto:{{ site.contact.email }})

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