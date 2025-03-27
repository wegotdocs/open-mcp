import { z } from "zod";
export const toolName = `get_bulkjobs_v4_deviceuploads_jobid_status`;
export const toolDescription = `Gets bulk upload status`;
export const baseUrl = `https://tracking.api.here.com`;
export const path = `/bulkjobs/v4/deviceUploads/{jobId}/status`;
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
export const inputParams = z.object({}).shape;
