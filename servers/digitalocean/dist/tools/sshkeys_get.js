import { z } from "zod";
export const toolName = `sshkeys_get`;
export const toolDescription = `Retrieve an Existing SSH Key`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/account/keys/{ssh_key_identifier}`;
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
    "query": [],
    "header": [],
    "path": [
        "ssh_key_identifier"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "ssh_key_identifier": z.union([z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly(), z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly()]).describe("Either the ID or the fingerprint of an existing SSH key.")
};
