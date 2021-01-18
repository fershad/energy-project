<script>
    let display = false
    if (navigator.share) {
        display = true
    }
    
    function share() {
        if (display) {
            const url = document.querySelector('link[rel=canonical]') ? document.querySelector('link[rel=canonical]').href : document.location.href
            const title = document.querySelector('title').text
            const text = document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').text : ''
            const shareData = {
                url,
                title,
                text
            }
    
            shareBtn.addEventListener('click', async () => {
                try {
                    await navigator.share(shareData)
                    console.log('Shared', shareData)
                } catch(err) {
                    console.log(err)
                }
            })
        } else {
            console.log('Cannot share ...')
        }
    }
</script>

<style>
    .hidden {
        display: none;
    }
</style>

<button class="link--button" class:hidden={!display} id="shareBtn" on:click="{share()}">Share this page</button>