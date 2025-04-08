import { z } from "zod";
export const toolName = `sshkeys_update`;
export const toolDescription = `Update an SSH Key's Name`;
export const baseUrl = `https://api.digitalocean.com`;
export const path = `/v2/account/keys/{ssh_key_identifier}`;
export const method = `put`;
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
    "body": [
        "name"
    ]
};
export const flatMap = {};
export const inputParams = {
    "ssh_key_identifier": z.union([z.number().int().describe("A unique identification number for this key. Can be used to embed a  specific SSH key into a Droplet.").readonly(), z.string().describe("A unique identifier that differentiates this key from other keys using  a format that SSH recognizes. The fingerprint is created when the key is added to your account.").readonly()]).describe("Either the ID or the fingerprint of an existing SSH key."),
    "name": z.string().describe("A human-readable display name for this key, used to easily identify the SSH keys when they are displayed.").optional()
};
