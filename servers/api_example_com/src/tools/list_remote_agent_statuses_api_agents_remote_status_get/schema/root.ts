import { z } from "zod"

export const inputParamsSchema = {
  "backend": z.enum(["auto","dynamodb","s3"]).optional()
}