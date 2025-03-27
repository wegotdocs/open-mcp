import { z } from "zod";
export const toolName = `gitignore_get_template`;
export const toolDescription = `Get a gitignore template`;
export const baseUrl = `https://api.github.com`;
export const path = `/gitignore/templates/{name}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "name": z.string() }).optional() }).shape;
