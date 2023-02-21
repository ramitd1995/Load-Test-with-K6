import http from 'k6/http';
import {sleep} from 'k6';

export const options = {
    discardResponseBodies: true,
    scenarios: {
      scenario_test_example: { 
        executor: 'per-vu-iterations',
        vus: 10,
        iterations: 10
        },
    },
  };
  

export default function (){
    http.get('https://reqres.in/api/users?page=2');
    sleep(1);
}

// for per-vu-iterations executor, we define iterations = number of iteration per vu will perform
// for shared-iterations executor, we define iterations = number of max iterations all vu's will perform
// for constant-vus executor, vu's execute as many iterations as possible for a specified amount of time defined in duration