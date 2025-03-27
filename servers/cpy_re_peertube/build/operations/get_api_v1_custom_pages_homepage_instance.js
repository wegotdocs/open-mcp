import { z } from "zod";
export const toolName = `get_api_v1_custom_pages_homepage_instance`;
export const toolDescription = `Get instance custom homepage`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/custom-pages/homepage/instance`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({}).shape;
