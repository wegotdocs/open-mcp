import { z } from "zod";
export const toolName = `kubernetes_get_credentials`;
export const toolDescription = `Retrieve Credentials for a Kubernetes Cluster`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/kubernetes/clusters/{cluster_id}/credentials`;
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
        "expiry_seconds"
    ],
    "header": [],
    "path": [
        "cluster_id"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "cluster_id": z.string().uuid().describe("A unique ID that can be used to reference a Kubernetes cluster."), "expiry_seconds": z.number().int().gte(0).describe("The duration in seconds that the returned Kubernetes credentials will be valid. If not set or 0, the credentials will have a 7 day expiry.") }).shape;
