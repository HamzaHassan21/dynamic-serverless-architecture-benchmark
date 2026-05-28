'use strict';

exports.handler = async (event) => {
  const request = event.Records[0].cf.request;

  request.headers['x-fyp-edge-processed'] = [
    {
      key: 'X-FYP-Edge-Processed',
      value: 'true'
    }
  ];

  request.headers['x-fyp-architecture'] = [
    {
      key: 'X-FYP-Architecture',
      value: 'Edge-Assisted-CloudFront-LambdaEdge-APIGateway-Lambda-DynamoDB'
    }
  ];

  return request;
};