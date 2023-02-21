import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 1,
    duration: '5s',
  };

export default function (){
    const res = http.get('https://reqres.in/api/users/' + __ENV.USER_ID);
    console.log(res.url);
    console.log(res.body);
}

// use command -> k6 run -e USER_ID=2 withenvvariable.js -> to run this script