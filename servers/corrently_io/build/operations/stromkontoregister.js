import { z } from "zod";
export const toolName = `stromkontoregister`;
export const toolDescription = `Register (new Stromkonto)`;
export const baseUrl = `https://api.corrently.io/v2.0`;
export const path = `/stromkonto/register`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "email": z.string().optional(), "first_name": z.string().optional(), "last_name": z.string().optional(), "zipcode": z.string().optional() }).optional() }).shape;
