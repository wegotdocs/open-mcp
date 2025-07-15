import { z } from "zod"

export const inputParamsSchema = {
  "client_id": z.number().int().describe("A client ID associated with projects to filter the response on").optional(),
  "project_id": z.number().int().describe("A project ID to filter the response on").optional(),
  "phase_id": z.number().int().describe("A phase ID associated with a project to filter the response on").optional(),
  "page": z.number().int().gte(1).describe("The page number of the page of results to return, default `1`").optional(),
  "per-page": z.number().int().gte(1).lte(200).describe("The number of items per page, default is `50`").optional()
}