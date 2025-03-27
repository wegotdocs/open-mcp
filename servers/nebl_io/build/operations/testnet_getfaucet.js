import { z } from "zod";
export const toolName = `testnet_getfaucet`;
export const toolDescription = `Withdraws testnet NEBL to the specified address`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/faucet`;
export const method = `get`;
export const security = [];
export const inputParams = z.object({ "query": z.object({ "address": z.string().describe("Your Neblio Testnet Address"), "amount": z.number().describe("Amount of NEBL to withdrawal in satoshis").optional() }).optional() }).shape;
