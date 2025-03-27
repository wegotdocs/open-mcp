import { z } from "zod";
export const toolName = `enterprise_admin_create_pre_receive_hook`;
export const toolDescription = `Create a pre-receive hook`;
export const baseUrl = `https://github.com`;
export const path = `/admin/pre-receive-hooks`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "allow_downstream_configuration": z.boolean().describe("Whether enforcement can be overridden at the org or repo level. default: `false`").optional(), "enforcement": z.string().describe("The state of enforcement for this hook. default: `disabled`").optional(), "environment": z.object({}).catchall(z.any()).describe("The pre-receive environment where the script is executed."), "name": z.string().describe("The name of the hook."), "script": z.string().describe("The script that the hook runs."), "script_repository": z.object({}).catchall(z.any()).describe("The GitHub repository where the script is kept.") }).optional() }).shape;
