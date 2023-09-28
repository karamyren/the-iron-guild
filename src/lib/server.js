import { writable, derived, readable } from 'svelte/store';

let server = '100.14.63.251'
let port = '44000'
let version = 'v1'
export const api = `http://${server}:${port}/${version}`
