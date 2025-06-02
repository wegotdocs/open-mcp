import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "userId": z.string().optional(),
  "vaultAccountId": z.number().optional(),
  "connectionMethod": z.string().optional(),
  "feeLevel": z.string().optional(),
  "appUrl": z.string().optional(),
  "appName": z.string().optional()
}