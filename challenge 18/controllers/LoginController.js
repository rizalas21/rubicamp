import { menuUtama } from '../university.js'
import { garis } from '../university.js'
import { rl } from '../connect.js'
import Login from '../models/Login.js'
import { loginViews } from '../views/LoginViews.js'

export default class LoginController {
    static login() {
        rl.question('username : ', (username) => {
            Login.cekUsername(username, function (data) {
                if (!data) {
                    console.log('username tidak terdaftar')
                    LoginController.login()
                } else {
                    rl.question('password : ', (pw) => {
                        Login.cekPw(pw, function (item) {
                            if (!item) {
                                LoginController.login()
                            } else {
                                loginViews(username)
                                menuUtama()
                            }

                        })
                    })
                }
            })
        })
    }
}