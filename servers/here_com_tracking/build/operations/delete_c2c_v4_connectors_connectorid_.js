import { z } from "zod";
export const toolName = `delete_c2c_v4_connectors_connectorid_`;
export const toolDescription = `Deletes a connector`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/c2c/v4/connectors/{connectorId}`;
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
export const inputParams = z.object({ "path": z.object({ "connectorId": z.string().min(1).max(50).describe("Identifier of the connector") }).optional(), "query": z.object({ "deleteDevices": z.boolean().describe("Unclaim and unprovision devices").optional() }).optional() }).shape;
