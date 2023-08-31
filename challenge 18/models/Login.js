import { db } from "../connect.js";

export default class Login {
    constructor(obj) {
        this.username = obj.username
        this.pw = obj.pw
    }

    static cekUsername(username, next) {
        db.get('SELECT username FROM login WHERE username = ?', [username], (err, data) => {
            if(err) {
                console.log(err)
            }
            next(data)
        })
    }

    static cekPw(pw, next) {
        db.get('SELECT pw FROM login WHERE pw = ?', [pw], (err, data) => {
            if(err) {
                console.log(err)
            }
            next(data)
        })
    }
}