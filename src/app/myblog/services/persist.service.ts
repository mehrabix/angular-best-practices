import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';  


@Injectable({
    providedIn: 'root'
})
export class PersistService {



    public _cypherKey: string = this.cypherKeygen();

    cypherKeygen() {
        let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890!@#$%^&*";
        let pass = "";
        for (let x = 0; x < 25; x++) {
            var i = Math.floor(Math.random() * chars.length);
            pass += chars.charAt(i);
        }
        return pass;
    }

    set(key: string, data: any) {
        
        const _encryptedData = CryptoJS.AES.encrypt(data,this._cypherKey.trim())
        return localStorage.setItem(key, _encryptedData.toString())
    }
    get(key: string) {
        let _ls:any = localStorage.getItem(key)
        console.log(_ls)
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