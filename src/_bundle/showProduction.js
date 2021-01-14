import { run } from './_svelte/helpers';
import Production from './_svelte/data/production.svelte';

run('[data-production-button]', target => new Production({ target }));
