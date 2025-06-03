import { z } from "zod"

export const inputParamsSchema = {
  "sqs_key": z.string().describe("AWS SQS access key").optional(),
  "sqs_secret": z.string().describe("AWS SQS key secret").optional(),
  "sqs_url": z.string().describe("AWS SQS endpoint URL").optional()
}