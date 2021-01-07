import { run } from './_svelte/helpers';
import Carbon from './_svelte/siteCarbon.svelte';

run('[data-carbon]', target => new Carbon({ target }));
