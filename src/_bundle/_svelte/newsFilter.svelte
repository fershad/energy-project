<script>
  import { getLocale } from "./helpers";
  const url = window.location.href;
  const articlesEN = document.querySelectorAll('[data-language="en"]');
  const articlesZH = document.querySelectorAll('[data-language="zh"]');

  async function changeVisibility(hide, show) {
    hide.forEach(article => {
      article.style.display = "none";
    });

    show.forEach(article => {
      article.style.display = "block";
    });
  }

  function toggleEN() {
    articlesEN.forEach(article => {
      article.classList.toggle("hidden");
    });
  }

  function toggleZH() {
    articlesZH.forEach(article => {
      article.classList.toggle("hidden");
    });
  }

  const locale = getLocale(url);
  let values = {};
</script>

<style>

</style>

<label for="en">
  <input
    type="checkbox"
    name="en"
    id="en"
    checked
    bind:value={values['en']}
    on:change={toggleEN} />
  English
</label>
<label for="zh">
  <input
    type="checkbox"
    name="zh"
    id="zh"
    checked
    bind:value={values['zh']}
    on:change={toggleZH} />
  Chinese
</label>
