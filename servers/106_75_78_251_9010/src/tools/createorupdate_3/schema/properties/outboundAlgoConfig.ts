import { z } from "zod"

export const inputParamsSchema = {
  "useLocalAlgorithm": z.boolean().optional(),
  "cutoffTime": z.number().int().optional(),
  "mode": z.string().optional(),
  "shareRackPoolMaxStationDistance": z.number().optional(),
  "maxHitNum": z.number().int().optional(),
  "orderDispatchStrategy": z.string().optional(),
  "orderDispatchBalanceOffset": z.number().int().optional(),
  "firstHitRackSide": z.string().optional(),
  "maxOnTheWayRackNum": z.number().int().optional(),
  "taskBalanceDimension": z.string().optional(),
  "algoName": z.string().optional()
}