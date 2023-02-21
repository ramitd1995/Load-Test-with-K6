import http from 'k6/http';

export const options = {
  vus: 10,
  duration: '30s',
  thresholds: {
    http_req_duration: [
      { threshold: 'p(90) < 100',
        abortOnFail: true
      }
    ],
    http_req_blocked: [
      { threshold: 'max < 100',
        abortOnFail: false
      }
    ]
  },
};

export default function f1() {
  http.get('https://reqres.in/api/users?page=2');
}
