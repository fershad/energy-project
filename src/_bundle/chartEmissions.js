import { run } from './_svelte/helpers';
import Emissions from './_svelte/charts/emissionsChart.svelte';

run('[data-emissions-chart]', target => new Emissions({ target }));
