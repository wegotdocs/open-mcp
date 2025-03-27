import { z } from "zod";
export const toolName = `getoauthtoken`;
export const toolDescription = `Login`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/token`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({}).shape;
