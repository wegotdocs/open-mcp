import { z } from "zod";
export const toolName = `registeruser`;
export const toolDescription = `Register a user`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/register`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.any().optional() }).shape;
