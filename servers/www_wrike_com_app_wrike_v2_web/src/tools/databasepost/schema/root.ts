import { z } from "zod"

export const inputParamsSchema = {
  "requestId": z.string().describe("Should  be any unique value, e.g. UUID, current timestamp etc"),
  "title": z.string(),
  "databaseRecordName": z.string().optional(),
  "parentFolderId": z.string()
}