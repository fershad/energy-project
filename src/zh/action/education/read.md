---
title: 看書
subtag: 那裡有很多好書，無法幫助您進一步了解氣候問題以及如何發揮作用。
shortName: read
hasMore: true
thumbnail: { 
    src: "./src/_includes/img/actions/book.jpg", 
    alt: "打開書本，除了眼鏡和咖啡。",
    caption: <span>攝影者<a href="https://unsplash.com/@sincerelymedia?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sincerely Media</a>在<a href="https://unsplash.com/s/photos/read?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
}
contributors:
    - 
        - display: "Fershad"
        - twitter: "@fershad"
        - github: "fishintaiwan"
---
# {{title}}
無論是平裝本還是數字書，書本都可以提供您豐富的知識，您可以按照自己的節奏進行學習和處理。

以下是一些幫助我了解我們所面臨的氣候緊急情況，我們的行動在其中扮演的角色以及如何扭轉局面的書。

我希望添加到此列表中。 因此，如果您有任何推薦書[請發送通過！](mailto:{{ site.contact.email }}) 

<div class="action-grid auto-grid">
{% for book in books %}
<div class="card book">
{% image book.image, 'Book cover for {{ book.title }}', '150, 300, 600' %}
<div class="card--content">
<p>{{ book.title }}<br><strong>{{ book.author }}</strong></p>
</div>
</div>
{% endfor %}
</div>