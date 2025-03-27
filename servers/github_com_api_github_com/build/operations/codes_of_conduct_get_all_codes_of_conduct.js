import { z } from "zod";
export const toolName = `codes_of_conduct_get_all_codes_of_conduct`;
export const toolDescription = `Get all codes of conduct`;
export const baseUrl = `https://api.github.com`;
export const path = `/codes_of_conduct`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
