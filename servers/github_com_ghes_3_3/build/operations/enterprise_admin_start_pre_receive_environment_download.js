import { z } from "zod";
export const toolName = `enterprise_admin_start_pre_receive_environment_download`;
export const toolDescription = `Start a pre-receive environment download`;
export const baseUrl = `https://github.com`;
export const path = `/admin/pre-receive-environments/{pre_receive_environment_id}/downloads`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "pre_receive_environment_id": z.number().int().describe("The unique identifier of the pre-receive environment.") }).optional() }).shape;
