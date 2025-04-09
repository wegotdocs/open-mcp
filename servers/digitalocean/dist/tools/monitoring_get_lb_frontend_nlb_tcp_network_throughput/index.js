export { inputParams } from "./schema/root.js";
export const toolName = `monitoring_get_lb_frontend_nlb_tcp_network_throughput`;
export const toolDescription = `Get Network Load Balancer Frontend TCP Throughput Metrics`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/monitoring/metrics/load_balancer/frontend_nlb_tcp_network_throughput`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [
        "lb_id",
        "start",
        "end"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
