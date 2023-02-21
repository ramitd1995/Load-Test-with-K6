import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    vus: 5,
    duration: '5s',
  };

export default function (){
    const res = http.get('https://1mg.com');
    console.log(res.status);
    sleep(1);
}