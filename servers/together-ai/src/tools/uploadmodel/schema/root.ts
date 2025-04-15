import { z } from "zod"

export const inputParamsSchema = {
  "model_name": z.string().describe("The name to give to your uploaded model"),
  "model_source": z.string().describe("The source location of the model (Hugging Face repo or S3 path)"),
  "hf_token": z.string().describe("Hugging Face token (if uploading from Hugging Face)").optional(),
  "description": z.string().describe("A description of your model").optional()
}