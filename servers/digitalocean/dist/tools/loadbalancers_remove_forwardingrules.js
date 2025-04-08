import { z } from "zod";
export const toolName = `loadbalancers_remove_forwardingrules`;
export const toolDescription = `Remove Forwarding Rules from a Load Balancer`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/load_balancers/{lb_id}/forwarding_rules`;
export const method = `delete`;
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
    "query": [],
    "header": [],
    "path": [
        "lb_id"
    ],
    "cookie": [],
    "body": [
        "forwarding_rules"
    ]
};
export const flatMap = {};
export const inputParams = {
    "lb_id": z.string().describe("A unique identifier for a load balancer."),
    "forwarding_rules": z.array(z.object({ "entry_protocol": z.enum(["http", "https", "http2", "http3", "tcp", "udp"]).describe("The protocol used for traffic to the load balancer. The possible values are: `http`, `https`, `http2`, `http3`, `tcp`, or `udp`. If you set the  `entry_protocol` to `udp`, the `target_protocol` must be set to `udp`.  When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.\n"), "entry_port": z.number().int().describe("An integer representing the port on which the load balancer instance will listen."), "target_protocol": z.enum(["http", "https", "http2", "tcp", "udp"]).describe("The protocol used for traffic from the load balancer to the backend Droplets. The possible values are: `http`, `https`, `http2`, `tcp`, or `udp`. If you set the `target_protocol` to `udp`, the `entry_protocol` must be set to  `udp`. When using UDP, the load balancer requires that you set up a health  check with a port that uses TCP, HTTP, or HTTPS to work properly.\n"), "target_port": z.number().int().describe("An integer representing the port on the backend Droplets to which the load balancer will send traffic."), "certificate_id": z.string().describe("The ID of the TLS certificate used for SSL termination if enabled.").optional(), "tls_passthrough": z.boolean().describe("A boolean value indicating whether SSL encrypted traffic will be passed through to the backend Droplets.").optional() }).describe("An object specifying a forwarding rule for a load balancer.")).min(1).optional()
};
