import { z } from "zod";
export const toolName = `ipgeolocationwithconfidenceareaapi`;
export const toolDescription = `IP Geolocation with Confidence Area API`;
export const baseUrl = `https://api.bigdatacloud.net`;
export const path = `/data/ip-geolocation-with-confidence`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "ip": z.string().describe("IPv4 IP address in a string or numeric format. If omitted, the caller’s IP address is assumed\n").optional(), "localityLanguage": z.string().describe("Preferred language for locality names in ISO 639-1 format, such as 'en' for English, 'es' for Spanish etc. Please note: 147 common world languages are supported, full list here, but not all languages are available for every location. If requested language is not available for a requested location it will default to English, if no English is available, the native, local names will be provided\n").optional(), "key": z.string().describe("Your API key\n").optional() }).optional() }).shape;
