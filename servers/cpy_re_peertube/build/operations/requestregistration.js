import { z } from "zod";
export const toolName = `requestregistration`;
export const toolDescription = `Request registration`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/registrations/request`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.string().optional() }).shape;
