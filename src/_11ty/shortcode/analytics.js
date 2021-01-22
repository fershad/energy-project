const dev = process.env.NODE_ENV !== 'production';

module.exports = async function() {
    if (process.env.NODE_ENV === 'staging') {
        return `<!-- Fathom - beautiful, simple website analytics -->
      <script src="https://heron.cleanenergyproject.tw/script.js" data-site="TMLDWNIR" defer></script>
      <!-- / Fathom -->`;
    }

    if (dev) {
        return `<!-- Fathom - beautiful, simple website analytics -->`;
    }

    return `<!-- Fathom - beautiful, simple website analytics --><script src="https://heron.cleanenergyproject.tw/script.js" data-site="DTNNQUEE" defer></script><!-- / Fathom -->`;
};
