import { run } from './_svelte/helpers';
import Emissions from './_svelte/data/emissions.svelte';

run('[data-emissions-button]', target => new Emissions({ target }));
