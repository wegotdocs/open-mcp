export const OPENAPI_URL = "https://s3.filebin.net/filebin/1e49f31a6119c2e9b14f334f770bd537d54a71bb07dde0d1554c3637f2d4f5d8/d910ba2ef878f7db0223a966b81c8b3f3b65027bb39e4431bb05140171eece39?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=7pMj6hGeoKewqmMQILjm%2F20250602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250602T155302Z&X-Amz-Expires=60&X-Amz-SignedHeaders=host&response-cache-control=max-age%3D60&response-content-disposition=inline%3B%20filename%3D%22openapi.yaml%22&response-content-type=text%2Fplain%3B%20charset%3Dutf-8&X-Amz-Signature=b18d0d3dd278ab9f73ba15a951e3cb837c4a47d093732ca61d92d3ffe44fa91e"
export const SERVER_NAME = "localhost_3030"
export const SERVER_VERSION = "0.0.1"
export const OPERATION_FILES_RELATIVE = [
  "./tools/healthcheck/index.js",
  "./tools/getmetrics/index.js",
  "./tools/snshealthcheck/index.js",
  "./tools/reprocessbycorrelation/index.js",
  "./tools/reprocessbyapplication/index.js",
  "./tools/reprocessbypayment/index.js",
  "./tools/createadjustmentrecord/index.js",
  "./tools/getholidays/index.js",
  "./tools/getforecast/index.js",
  "./tools/compensatearrangements/index.js"
]