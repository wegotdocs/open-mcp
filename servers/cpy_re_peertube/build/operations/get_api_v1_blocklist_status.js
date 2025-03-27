import { z } from "zod";
export const toolName = `get_api_v1_blocklist_status`;
export const toolDescription = `Get block status of accounts/hosts`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/blocklist/status`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "accounts": z.array(z.string()).describe("Check if these accounts are blocked").optional(), "hosts": z.array(z.string()).describe("Check if these hosts are blocked").optional() }).optional() }).shape;
