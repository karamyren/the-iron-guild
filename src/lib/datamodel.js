import { writable } from 'svelte/store'

export const hashList = writable([]);

class MessageHashesList{

    constructor(hash) {
        this.hash = hash;
      }

    getMessageHashes(){
        return this.hash
    }

    from(json){
        return Object.assign(new MessageHashesList(), json)
    }
}

export const messageHashesList = new MessageHashesList();
