---
title: 閱讀
subtag: 市面上有許多好書能助您進一步了解氣候問題以及我們可以如何做出改變。
shortName: read
hasMore: true
thumbnail: { 
    src: "./src/_includes/img/actions/book.jpg", 
    alt: "放下眼鏡和咖啡，打開書本。", 
    caption: '<span>照片來源: <a href="https://unsplash.com/@sincerelymedia?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sincerely Media</a>在<a href="https://unsplash.com/s/photos/read?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>'
}
contributors:
    - 
        - display: "Fershad"
        - twitter: "@fershad"
        - github: "fishintaiwan"
---
# {{title}}
無論是紙本還是電子書，書本都可以為您提供豐富的知識，您可以按照自己的節奏來學習和消化。

以下的書幫助我了解我們所面臨的嚴峻氣候狀況，和我們的行動在其中扮演的角色，以及我們能如何扭轉局面。

我希望能持續添加這裡的資訊。 因此如果您有任何推薦的書，也[請告訴我！](mailto:{{ site.contact.email }})

<div class="action-grid auto-grid">
{% for book in books %}
<div class="card book">
{% image book.image, 'Book cover for {{ book.title }}', '150, 300, 600' %}
<div class="card--content">
<p>{{ book.title }}<br><strong>{{ book.author }}</strong></p>
<a href="{{book.website}}" data-external>{{ pages.action.visitWebsite | defaultLocale: locale }}</a>
</div>
</div>
{% endfor %}
</div>