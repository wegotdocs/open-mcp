import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Guid"),
  "Name": z.string().describe("The name of the use case.").optional(),
  "Description": z.string().describe("The description of the use case.").optional(),
  "Instructions": z.string().describe("Instructions of use for the use case").optional(),
  "Metadata": z.string().describe("Metadata info for the use case").optional(),
  "Active": z.boolean().describe("A value indicating whether the use case is active or not.").optional(),
  "Type": z.string().describe("The type of the use case.").optional(),
  "StreamingEnabled": z.boolean().describe("Indicates if the streaming is enabled for the use case.").optional(),
  "Image": z.string().base64().describe("The image file for the use case.").optional(),
  "DeploymentId": z.string().uuid().describe("The deployment identifier for the use case.").optional(),
  "ChunkSize": z.number().int().describe("Size of the chunks for generate embeddings").optional(),
  "AssistantId": z.string().uuid().describe("AssistantId of the UseCase").optional(),
  "IsEditable": z.boolean().describe("A value indicating whether the use case is editable or not.").optional()
}