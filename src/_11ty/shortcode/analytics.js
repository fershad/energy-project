const dev = process.env.NODE_ENV !== 'production';

module.exports = async function() {
    if (dev) {
        return `<!-- Fathom - beautiful, simple website analytics -->`;
    }

    if (process.env.NODE_ENV === 'staging') {
        return `<!-- Fathom - beautiful, simple website analytics -->
      <script src="https://heron.cleanenergyproject.tw/script.js" data-site="TMLDWNIR" defer></script>
      <!-- / Fathom -->`;
    }

    return `<!-- Fathom - beautiful, simple website analytics --><script src="https://heron.cleanenergyproject.tw/script.js" data-site="ZRTUZXPV" defer></script><!-- / Fathom -->`;
};
