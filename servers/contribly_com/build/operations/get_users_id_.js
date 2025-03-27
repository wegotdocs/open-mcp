import { z } from "zod";
export const toolName = `get_users_id_`;
export const toolDescription = `Retrieve a single user by id`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/users/{id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Id of the user to return") }).optional() }).shape;
