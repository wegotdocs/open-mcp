import { z } from "zod"

export const inputParamsSchema = {
  "filesSize": z.number().int().gte(0).describe("Represents a size in bytes"),
  "id": z.string().uuid().describe("Represents an uuid"),
  "institutionId": z.string(),
  "numOfFiles": z.number().int().gte(0),
  "source": z.enum(["web-upload","cm-connect","direct-dicom"]),
  "storageArea": z.string()
}