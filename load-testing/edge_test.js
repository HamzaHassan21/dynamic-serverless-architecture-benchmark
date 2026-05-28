import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 50 },
    { duration: '30s', target: 100 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<5000'],
    http_req_failed: ['rate<0.1'],
  },
};

export default function () {
  const res = http.get(
    'https://d2asztbanmsq98.cloudfront.net/products?region=US&category=laptop'
  );
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(1);
}