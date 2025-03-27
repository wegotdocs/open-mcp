import { z } from "zod";
export const toolName = `post_c2c_v4_connectors_connectorid_ext_devices`;
export const toolDescription = `Adds external devices to a connector`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/c2c/v4/connectors/{connectorId}/ext-devices`;
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
export const inputParams = z.object({ "header": z.object({ "X-Request-Id": z.string().uuid().describe("ID used for correlating requests within HERE Tracking. Used for logging and error reporting.\n\nMust be a valid UUIDv4.\n").optional() }).optional(), "path": z.object({ "connectorId": z.string().min(1).max(50).describe("Identifier of the connector") }).optional(), "body": z.array(z.object({ "enabled": z.boolean().describe("Indicates if C2C should pull data for this device from external cloud at connector execution time.").optional(), "externalDeviceId": z.string().min(1).max(50), "externalDeviceInfo": z.record(z.any()).describe("Other extra information related to the external device or shipment ID.").optional() }).strict()).min(1).max(100).optional() }).shape;
