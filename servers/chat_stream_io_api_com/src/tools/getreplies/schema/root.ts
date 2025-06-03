import { z } from "zod"

export const inputParamsSchema = {
  "parent_id": z.string(),
  "sort": z.array(z.object({ "direction": z.number().int().describe("Direction of sorting, 1 for Ascending, -1 for Descending, default is 1").optional(), "field": z.string().describe("Name of field to sort by").optional() }).nullable()).optional(),
  "limit": z.number().int().gte(0).describe("The maximum number of messages to return (max limit ").optional(),
  "offset": z.number().int().describe("The offset to start from").optional(),
  "id_gte": z.string().describe("The ID of the message to get messages with a timestamp greater than or equal to").optional(),
  "id_gt": z.string().describe("The ID of the message to get messages with a timestamp greater than").optional(),
  "id_lte": z.string().describe("The ID of the message to get messages with a timestamp smaller than or equal to").optional(),
  "id_lt": z.string().describe("The ID of the message to get messages with a timestamp smaller than").optional(),
  "created_at_after_or_equal": z.string().datetime({ offset: true }).describe("The timestamp to get messages with a created_at timestamp greater than or equal to").optional(),
  "created_at_after": z.string().datetime({ offset: true }).describe("The timestamp to get messages with a created_at timestamp greater than").optional(),
  "created_at_before_or_equal": z.string().datetime({ offset: true }).describe("The timestamp to get messages with a created_at timestamp smaller than or equal to").optional(),
  "created_at_before": z.string().datetime({ offset: true }).describe("The timestamp to get messages with a created_at timestamp smaller than").optional(),
  "id_around": z.string().describe("The result will be a set of messages, that are both older and newer than the message with the provided ID, and the message with the ID provided will be in the middle of the set").optional(),
  "created_at_around": z.string().datetime({ offset: true }).describe("The result will be a set of messages, that are both older and newer than the created_at timestamp provided, distributed evenly around the timestamp").optional()
}