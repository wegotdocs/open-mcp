import { z } from "zod";
export const toolName = `delete_c2c_v4_connectors_connectorid_ext_devices_batch`;
export const toolDescription = `Removes a batch of external devices from a connector`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/c2c/v4/connectors/{connectorId}/ext-devices-batch`;
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
export const inputParams = z.object({ "header": z.object({ "X-Request-Id": z.string().uuid().describe("ID used for correlating requests within HERE Tracking. Used for logging and error reporting.\n\nMust be a valid UUIDv4.\n").optional() }).optional(), "path": z.object({ "connectorId": z.string().min(1).max(50).describe("Identifier of the connector") }).optional(), "body": z.object({ "externalDeviceIds": z.array(z.string().min(1).max(50).describe("Identifier of the device on the external cloud.")).min(1).max(100).optional() }).optional() }).shape;
