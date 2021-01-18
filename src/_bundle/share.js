import { run } from './_svelte/helpers';
import Share from './_svelte/shareBtn/share.svelte';

run('[data-share-btn]', target => new Share({ target }));
