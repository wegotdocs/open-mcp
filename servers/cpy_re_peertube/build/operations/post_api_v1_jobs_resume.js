import { z } from "zod";
export const toolName = `post_api_v1_jobs_resume`;
export const toolDescription = `Resume job queue`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/jobs/resume`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({}).shape;
