import { z } from "zod";
export const toolName = `delete_files_id_metadata_enterprise_securityclassification_6vmvo`;
export const toolDescription = `Remove classification from file`;
export const baseUrl = `https://api.box.com/2.0`;
export const path = `/files/{file_id}/metadata/enterprise/securityClassification-6VMVochwUWo`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "path": z.object({ "file_id": z.string().describe("The unique identifier that represents a file.\n\nThe ID for any file can be determined\nby visiting a file in the web application\nand copying the ID from the URL. For example,\nfor the URL `https://*.app.box.com/files/123`\nthe `file_id` is `123`.") }).optional() }).shape;
