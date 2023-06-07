import { writable, derived, readable } from 'svelte/store';

import { api } from './server.js';

//export let server = 'http://98.7.198.132:44000/v1';

export function GetAllMessageHashesRoute() {
    return `${api}/message`;
}

export function GetMessageTranscriptRoute(messageHash) {
    return `${api}/message/${messageHash}/transcript`;
}

export function GetMessageTimeServerHourRoute(messageHash) {
    return `${api}/message/${messageHash}/time/server/hour`;
}

export function GetMessageAudioFileWavRoute(messageHash){
    return `${api}/message/${messageHash}/audio/file/wav`;
}