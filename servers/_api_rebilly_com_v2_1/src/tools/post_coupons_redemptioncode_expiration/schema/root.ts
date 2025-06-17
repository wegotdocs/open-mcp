import { z } from "zod"

export const inputParamsSchema = {
  "expiredTime": z.string().datetime({ offset: true }).describe("The coupon's expiry time, must be greater than the issued time. Null or empty string will immediately expire the coupon.")
}