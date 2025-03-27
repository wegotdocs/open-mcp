import { z } from "zod";
export const toolName = `testnet_burntoken`;
export const toolDescription = `Builds a transaction that burns an NTP1 Token`;
export const baseUrl = `https://ntp1node.nebl.io`;
export const path = `/testnet/ntp1/burntoken`;
export const method = `post`;
export const security = [];
export const inputParams = z.object({ "body": z.object({ "burn": z.array(z.object({ "amount": z.number().describe("Amount of tokens to burn").optional(), "tokenId": z.string().describe("Unique token id we are burning").optional() })).describe("Array of objects representing tokens to be burned"), "fee": z.number().describe("Fee in satoshi to include in the issuance transaction min 10000 (0.0001 NEBL)"), "from": z.array(z.string()).describe("Array of addresses to send the token from").optional(), "transfer": z.array(z.object({ "address": z.string().describe("Address to transfer tokens to").optional(), "amount": z.number().describe("Number of tokens to send").optional(), "tokenId": z.string().describe("ID of token we are sending").optional() })).optional() }).optional() }).shape;
