import { z } from "zod";
export const toolName = `get_validate_uuid_uuid_`;
export const toolDescription = ``;
export const baseUrl = `https://api.mineskin.org`;
export const path = `/validate/uuid/{uuid}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "uuid": z.string() }).optional(), "header": z.object({ "User-Agent": z.string().describe("Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples") }).optional() }).shape;
