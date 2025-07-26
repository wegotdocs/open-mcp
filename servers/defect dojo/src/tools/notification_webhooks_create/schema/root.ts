import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(100).describe("Name of the incoming webhook").optional(),
  "url": z.string().url().min(1).max(200).describe("The full URL of the incoming webhook").optional(),
  "header_name": z.string().max(100).nullable().describe("Name of the header required for interacting with Webhook endpoint").optional(),
  "header_value": z.string().max(100).nullable().describe("Content of the header required for interacting with Webhook endpoint").optional(),
  "owner": z.number().int().nullable().describe("Owner/receiver of notification, if empty processed as system notification").optional()
}