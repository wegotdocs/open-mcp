import { z } from "zod"

export const inputParamsSchema = {
  "folderIds": z.array(z.number().int().describe("Folders to move")).describe("Folders to move").optional(),
  "documentIds": z.array(z.number().int().describe("Documents to move")).describe("Documents to move").optional(),
  "destinationFolderId": z.number().int().describe("Destination folder").optional(),
  "destinationOrganizationId": z.number().int().describe("Destination client. Use when the root folder of the client does not exist.").optional()
}