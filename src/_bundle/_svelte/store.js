import { writable } from 'svelte/store';
import { getLocale } from './helpers';

const url = document.querySelector("link[rel='canonical']").href;

export const locale = writable(getLocale(url));
