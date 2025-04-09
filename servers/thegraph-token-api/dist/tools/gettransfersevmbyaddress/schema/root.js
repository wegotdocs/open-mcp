import { z } from "zod";
export const inputParams = {
    "address": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("EVM wallet address to query"),
    "network_id": z.enum(["mainnet", "bsc", "base", "arbitrum-one", "optimism", "matic"]).describe("The Graph Network ID https://thegraph.com/networks").optional(),
    "age": z.number().int().gte(1).lte(180).describe("Indicates how many days have passed since the data's creation or insertion.").optional(),
    "contract": z.string().regex(new RegExp("^(0[xX])?[0-9a-fA-F]{40}$")).describe("Filter by contract address").optional(),
    "limit": z.number().int().gte(1).lte(1000).describe("The maximum number of items returned in a single request.").optional(),
    "page": z.number().int().gte(1).describe("The page number of the results to return.").optional()
};
