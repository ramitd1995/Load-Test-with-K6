import http from 'k6/http';
import {SharedArray} from 'k6/data';

export const options={
        vus:5,
        iterations:5
}

const data = new SharedArray("userdata",function(){
    return JSON.parse(open('./users.json')).users;
})

const url = 'https://reqres.in/api/users';

export default function(){

    for (let i = 0; i < data.length; i++) {

        var res = http.post(url,data[i],null);
        console.log('************************')
        console.log(res.body);
        console.log('************************')
    }

}