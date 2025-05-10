import { z } from "zod"

export const inputParamsSchema = {
  "num_protocols": z.number().int().describe("The number of top gainers you want to see. Default to 10."),
  "min_tvl": z.number().describe("The minimum TVL that a protocol should have to be included. Defaults to 100000.").optional(),
  "time_period": z.enum(["hour","day","week"]).describe("The time period in which the change occured. Can be 'hour', 'day', or 'week'. Defaults to 'week'.").optional(),
  "category": z.enum(["liquid staking","dexes","lending","bridge","CDP","yield","services","derivatives","yield aggregator","cross chain","launchpad","indexes","synthetics","RWA","liquidity manager","nft lending","insurance","algo-stables","privacy","payments","leveraged farming","nft marketplace","options","options vault","staking pool","prediction market","farm","uncollateralized lending","reserve currency","RWA lending","gaming","oracle"]).describe("Category to filter protocols by.").optional(),
  "chain": z.string().describe("Name of the chain or L2 to filter protocols by.").optional()
}