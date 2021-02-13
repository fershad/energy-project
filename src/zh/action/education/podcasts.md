---
title: 聆聽
subtag: 現在有非常多 podcasts 能讓我們用聽的去了解氣候危機的各個面向以及能採取哪些行動。
shortName: podcasts
hasMore: true
thumbnail: { 
    src: "./src/_includes/img/actions/podcasts.jpg", 
    alt: "一個人站著並拿著手機。",
    caption: <span>照片來源: <a href="https://unsplash.com/@melanie_sophie?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Melanie Pongratz</a>在<a href="https://unsplash.com/s/photos/listen-podcasts?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
}
contributors:
    - 
        - display: "Fershad"
        - twitter: "@fershad"
        - github: "fishintaiwan"
---
# {{ title }}
Podcast 既是娛樂又是教育媒介。 聆聽這些 podcasts 是擴展氣候變遷這一複雜問題的認識的好方法。 作為接觸專家和產業領導者想法的方式，也讓我們隨時知道政策、產業和科學發展的最新狀況。

以下是幫助我更加了解氣候問題以及我們能如何應對的 podcasts。 我希望持續擴展這個列表，因此如果您有任何推薦，也[請告訴我！](mailto:{{ site.contact.email }})

<div class="action-grid auto-grid">
{% for pod in podcasts %}
<div class="card podcast">
{% image pod.image, 'Book cover for {{ pod.title }}', '150, 300, 600' %}
<div class="card--content">
<p>{{ pod.title }}<br><strong>{{ pod.author }}</strong></p>
<a href="{{pod.website}}" data-external>{{ pages.action.visitWebsite | defaultLocale: locale }}</a>
</div>
</div>
{% endfor %}
</div>