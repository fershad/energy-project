---
title: Clear out your inbox
subtag: Email makes up a small fraction of an individual's carbon footprint, but it's one that's really easy to cut down.
shortName: clean inbox
hasMore: true
thumbnail: { 
    src: "./src/_includes/img/actions/gmail.jpg", 
    alt: "Gmail inbox feature Google's Gmail logo.",
    caption: <span>Photo by <a href="https://unsplash.com/@hostreviews?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Stephen Phillips - Hostreviews.co.uk</a> on <a href="https://unsplash.com/s/photos/email?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
}
actions:
    - Review the email newsletters you're subscribed to. If you don't read them, or they don't bring you much value then unsubscribe from them.
    - Try out an app like [Cleanfox](https://www.cleanfox.io/) which can help you with this, and give you an idea of the CO2 savings you're making.
contributors:
    - 
        - display: "Fershad"
        - twitter: "@fershad"
        - github: "fishintaiwan"
---

# {{ title }}
There are nearly 300 billion (yep, billion) emails sent out every day. Out of that number, it's estimated that 55% of these are spam emails <sub>[1][1]</sub>. 

Most of the carbon emissions from email come from embodied emissions within the devices used to write and read them. The rest comes from the network and data centres involved in their transmission and storage. 

- A spam email that's picked up by your provider's spam filter produces <strong>0.03g of CO<sub>2</sub></strong> <sup>[2][2]</sup>
- A short-form email can generate up to <strong>0.3g of CO<sub>2</sub></strong> <sup>[2][2]</sup>
- Longer form emails and emails with attachments/images can generate up to <strong>0.5g of CO<sub>2</sub></strong> <sup>[3][3]</sup>

While email might only form a small fraction of the internet's overall carbon footprint, it's a really easy place to start reducing your personal carbon footprint (and restoring some sanity too, depending on how messy your inbox is!).

<div class="action-cta card" data-spaced>
<div class="card--content">
<h2>
    What can you do?
</h2>
{% for action in actions %}
{{ action }}
{% endfor %}
</div>
</div>

## Sources
1. [Global Email Spam Rate - Statista][1]
2. [*How Bad Are Bananas* - Mike Berners-Lee][2]
3. [The Carbon Cost of Email][3]

[1]:https://www.statista.com/statistics/270899/global-e-mail-spam-rate/
[2]:https://www.howbadarebananas.com
[3]:https://carbonliteracy.com/the-carbon-cost-of-an-email/