import http from 'k6/http';
import {sleep} from 'k6';
import {check} from 'k6';

export const options = {
    vus: 1,
};

const url = 'https://reqres.in/api/users';

const payload = JSON.stringify({
    'name':'ramit',
    'job':'sdet',
});

const params = {headers:{
        'Content-Type': 'application/json',
}};

export default function(){
    const res = http.post(url,payload,params);
    console.log(res.body);

    // check behaves like a soft assertion and hence, doesn't stops the execution
    check((res), {
        'is http status 201': (r) => r.status===201,
        'does body includes job': (r) => r.body.includes('sdet'),
    });
}




