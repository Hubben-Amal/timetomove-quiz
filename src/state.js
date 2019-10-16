import { writable } from 'svelte/store';

export const loading = writable(true);
export const current = writable({});
export const max_score = writable(0);
export const score = writable(0);
export const q_result = writable(-1);