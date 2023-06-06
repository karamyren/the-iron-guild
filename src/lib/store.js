import { writable, derived, readable } from 'svelte/store';

export let server = 'http://98.7.198.132:44000/v1';

export function GetAllMessageHashRoute() {
    return `${server}/message`;
}

export function GetMessageTranscriptRoute(messageHash) {
    return `${server}/message/${messageHash}/transcript`;
}

export function GetMessageTimeServerHourRoute(messageHash) {
    return `${server}/message/${messageHash}/time/server/hour`;
}

export function GetMessageAudioFileWavRoute(messageHash){
    return `${server}/message/${messageHash}/audio/file/wav`;
}