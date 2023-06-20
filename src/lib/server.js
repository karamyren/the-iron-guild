import { writable, derived, readable } from 'svelte/store';

let server = '71.225.98.52'
let port = '44000'
let version = 'v1'
export const api = `http://${server}:${port}/${version}`
