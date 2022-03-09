import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';  


@Injectable({
    providedIn: 'root'
})
export class PersistService {



    public _cypherKey: string = "qKSikFr*a#aU263Aqi6nJqi!Zt6";


    set(key: string, data: any) {
        const _encryptedData = CryptoJS.AES.encrypt(data,this._cypherKey.trim())
        return localStorage.setItem(key, _encryptedData.toString())
    }

    get(key: string) {
        let _ls:any = localStorage.getItem(key)
        const _decryptedKey = CryptoJS.AES.decrypt(_ls,this._cypherKey.trim()).toString(CryptoJS.enc.Utf8)   
        return _decryptedKey ? _decryptedKey.toString() : ""
    }
    
    remove(key: string) {
        return localStorage.removeItem(key)
    }

    clear() {
        return localStorage.clear();
    }
}