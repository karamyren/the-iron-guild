import { api } from './server.js';

export function GetAllMessagesRoute() {
    return `${api}/message/all`;
}

export function GetAllMessageHashesRoute() {
    return `${api}/message`;
}

export function GetMessageTranscriptRoute(messageHash) {
    return `${api}/message/${messageHash}/transcript`;
}

export function GetMessageHeraldryRoute(messageHash) {
    return `${api}/message/${messageHash}/heraldry`;
}

export function GetMessageTimeServerHourRoute(messageHash) {
    return `${api}/message/${messageHash}/time/server/hour`;
}

export function GetMessageAudioFileWavRoute(messageHash){
    return `${api}/message/audio/${messageHash}/wav`;
}

export function GetAllDevicesRoute() {
    return `${api}/message`;
}
