import { run } from './_svelte/helpers';
import Carbon from './_svelte/carbonBadge.svelte';
import './_svelte/carbonBadge.css';

run('[data-carbon]', target => new Carbon({ target }));
