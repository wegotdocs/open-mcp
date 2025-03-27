import { z } from "zod";
export const toolName = `productsall`;
export const toolDescription = `List products`;
export const baseUrl = `https://api.apideck.com`;
export const path = `/ecosystems/{ecosystem_id}/products`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "ecosystem_id": z.string() }).optional() }).shape;
