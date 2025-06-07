import { z } from "zod"

export const inputParamsSchema = {
  "environment": z.string(),
  "backend": z.enum(["auto","dynamodb","s3"]).optional()
}