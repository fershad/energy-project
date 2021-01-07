import { run } from './_svelte/helpers';
import Production from './_svelte/charts/productionChart.svelte';

run('[data-production-chart]', target => new Production({ target }));
