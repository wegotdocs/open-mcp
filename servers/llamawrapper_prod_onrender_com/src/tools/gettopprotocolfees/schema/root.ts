import { z } from "zod"

export const inputParamsSchema = {
  "num_protocols": z.number().int().describe("The number of top protocols to return. Default to 10.").optional(),
  "time_period": z.enum(["day","week","month"]).describe("The time period in which the fees were collected. Can be 'day', 'week', or 'month'. Defaults to 'month'.").optional(),
  "chain": z.string().describe("Name of the blockchain or L2 to filter protocol fees by.").optional(),
  "category": z.enum(["liquid staking","dexes","lending","bridge","CDP","yield","services","derivatives","yield aggregator","cross chain","launchpad","indexes","synthetics","RWA","liquidity manager","nft lending","insurance","algo-stables","privacy","payments","leveraged farming","nft marketplace","options","options vault","staking pool","prediction market","farm","uncollateralized lending","reserve currency","RWA lending","gaming","oracle"]).describe("Category to filter protocols by.").optional()
}