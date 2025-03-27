import { z } from "zod";
export const toolName = `sendtx`;
export const toolDescription = `Broadcasts a signed raw transaction to the network (not NTP1 specific)`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/ins/tx/send`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "rawtx": z.string().describe("Signed raw tx hex to broadcast") }).optional() }).shape;
