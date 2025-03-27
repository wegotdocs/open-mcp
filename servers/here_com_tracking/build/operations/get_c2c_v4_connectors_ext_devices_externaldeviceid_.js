import { z } from "zod";
export const toolName = `get_c2c_v4_connectors_ext_devices_externaldeviceid_`;
export const toolDescription = `Gets connector identifiers for an external device`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/c2c/v4/connectors/ext-devices/{externalDeviceId}`;
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
export const inputParams = z.object({ "header": z.object({ "X-Request-Id": z.string().uuid().describe("ID used for correlating requests within HERE Tracking. Used for logging and error reporting.\n\nMust be a valid UUIDv4.\n").optional() }).optional(), "query": z.object({ "projectId": z.string().min(1).max(50).describe("Project ID.\nAny HERE Tracking user must be a member of a Tracking project.\nThe project ID can be implicitly resolved if the user calling the API is a member of a single project.\nIf the user is a member of multiple projects, the `projectId` query parameter needs to be specified explicitly.\n").optional() }).optional(), "path": z.object({ "externalDeviceId": z.string().min(1).max(50).describe("Identifier of the external device") }).optional() }).shape;
