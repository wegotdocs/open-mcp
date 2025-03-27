import { z } from "zod";
export const toolName = `testnet_gettransactioninfo`;
export const toolDescription = `Information On an NTP1 Transaction`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ntp1/transactioninfo/{txid}`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "path": z.object({ "txid": z.string().describe("Neblio txid to get information on.") }).optional() }).shape;
