import { z } from "zod";
export const toolName = `testnet_broadcasttx`;
export const toolDescription = `Broadcasts a signed raw transaction to the network`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ntp1/broadcast`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "txHex": z.string().describe("Signed raw tx hex to broadcast") }).optional() }).shape;
