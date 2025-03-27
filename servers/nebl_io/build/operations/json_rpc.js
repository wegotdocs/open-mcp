import { z } from "zod";
export const toolName = `json_rpc`;
export const toolDescription = `Send a JSON-RPC call to a localhost neblio-Qt or nebliod node`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/`;
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
export const inputParams = z.object({ "body": z.object({ "id": z.string().describe("Identifier of RCP caller"), "jsonrpc": z.string().describe("JSON-RPC version"), "method": z.string().describe("Name of the Neblio RPC method to call"), "params": z.array(z.string()).describe("Array of string params that should be passed to the RPC method.") }).optional() }).shape;
