import { z } from "zod";
export const toolName = `enterprise_admin_update_pre_receive_environment`;
export const toolDescription = `Update a pre-receive environment`;
export const baseUrl = `https://github.com`;
export const path = `/admin/pre-receive-environments/{pre_receive_environment_id}`;
export const method = `patch`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "pre_receive_environment_id": z.number().int().describe("The unique identifier of the pre-receive environment.") }).optional(), "body": z.object({ "image_url": z.string().describe("URL from which to download a tarball of this environment.").optional(), "name": z.string().describe("This pre-receive environment's new name.").optional() }).optional() }).shape;
