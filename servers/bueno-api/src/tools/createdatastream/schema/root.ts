import { z } from "zod"

export const inputParamsSchema = {
  "integrationId": z.string().uuid().describe("Unique identifier of the Integration"),
  "streamId": z.string().describe("Identifier of the Data Stream (unique within the Organisation)"),
  "status": z.enum(["ENABLED","DISABLED"]).describe("Whether the Data Stream is enabled or disabled (no longer ingesting data)"),
  "type": z.enum(["NUMBER","STRING"]).describe("The data type of the history"),
  "metadata": z.any().describe("Json field to store any useful information, for example the unit")
}