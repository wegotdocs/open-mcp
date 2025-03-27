import { z } from "zod";
export const toolName = `apps_get_by_slug`;
export const toolDescription = `Get an app`;
export const baseUrl = `https://api.github.com`;
export const path = `/apps/{app_slug}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "app_slug": z.string() }).optional() }).shape;
