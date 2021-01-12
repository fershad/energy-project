import { run } from './_svelte/helpers';
import Carbon from './_svelte/carbonBadge/carbonBadge.svelte';
import './_svelte/carbonBadge/carbonBadge.css';

run('[data-carbon]', target => new Carbon({ target }));
