import { run } from './_svelte/helpers';
import Carbon from './_svelte/carbonBadge/carbonBadge.svelte';

run('[data-carbon]', target => new Carbon({ target }));
