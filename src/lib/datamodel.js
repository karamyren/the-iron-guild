import { writable } from 'svelte/store'

export const hashList = writable([]);
export const messageAll = writable([]);

/*
export function createMessage(hash, transcript, heraldry){
    const thisHash = hash;
    const thisTranscript = transcript;
    const thisHeraldry = heraldry;

    function getHash(){
        console.log("get hash!")
        return thisHash;
    }

    function getTranscript(){
        return thisTranscript
    }

    function getHeraldry(){
        return thisHeraldry
    }

    return {
        getHash,
        getTranscript,
        getHeraldry
    }
}
*/
/*
class Message{

    constructor(hash, transcript, heraldry) {
        this.hash = hash;
        this.transcript = transcript;
        this.heraldry = heraldry;
    }

    getHash(){
        return this.hash
    }

    
    getIp(){
        return this.ip
    }

    //skipping label

    getTranscript(){
        return this.transcript
    }

    //skipping read
    //skipping metadata
    //skipping time
    //skipping time server

    getTime(){
        return this.time
    }

    getHeraldry(){
        return this.heraldry
    }

    from(json){
        return Object.assign(new Message(), json)
    }
}

export const messageAll = new Message();
*/