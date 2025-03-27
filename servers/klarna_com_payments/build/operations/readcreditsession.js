import { z } from "zod";
export const toolName = `readcreditsession`;
export const toolDescription = `Read an existing payment session`;
export const baseUrl = `https://api.klarna.com`;
export const path = `/payments/v1/sessions/{session_id}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "session_id": z.string().describe("session_id") }).optional() }).shape;
