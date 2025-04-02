import { z } from "zod";
export const toolName = `loadbalancers_add_droplets`;
export const toolDescription = `Add Droplets to a Load Balancer`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/load_balancers/{lb_id}/droplets`;
export const method = `post`;
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
        "droplet_ids"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "lb_id": z.string().describe("A unique identifier for a load balancer."), "droplet_ids": z.array(z.number().int()).describe("An array containing the IDs of the Droplets assigned to the load balancer.").optional() }).shape;
