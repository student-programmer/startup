import {$authHost, $host} from './index'
import jwt_decode from "jwt-decode"

export const registration = async (email, password) =>{
    const {data} = await $host.post('auth/registration', {email, password, role:'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const login = async (email, password) =>{
    const {data} = await $host.post('auth/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () =>{
    const {data} = await $authHost.get('auth/check')
    localStorage.setItem('token', data.token)
    console.log(data)
    return jwt_decode(data.token)
}
export const fetchCategory = async () => {
    const {data} = await $authHost.get('/category')
    return data
}