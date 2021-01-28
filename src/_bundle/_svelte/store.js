import { writable } from 'svelte/store';
import { getLocale } from './helpers';

const url = encodeURIComponent(document.querySelector("link[rel='canonical']").href);

// function showChart() {
//     const { subscribe, set } = writable(false);
//     return {
//         subscribe,
//         show: () => set(true),
//         hide: () => set(false),
//     };
// }

export const locale = writable(getLocale(url));
// export const showEmissions = showChart();
