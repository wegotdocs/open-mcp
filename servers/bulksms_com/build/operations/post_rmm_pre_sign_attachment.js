import { z } from "zod";
export const toolName = `post_rmm_pre_sign_attachment`;
export const toolDescription = `Upload an attachment via a signed URL`;
export const baseUrl = `https://api.bulksms.com/v1`;
export const path = `/rmm/pre-sign-attachment`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    }
];
export const inputParams = z.object({ "body": z.object({ "fileExtension": z.string().describe("The extension of the file.  Usually related to the media type.").optional(), "mediaType": z.string().describe("The media type of the file you would like to upload.  If you are not sure what value to use here, check out the standard [list of media types](https://www.iana.org/assignments/media-types/media-types.xhtml).").optional() }).optional() }).shape;
