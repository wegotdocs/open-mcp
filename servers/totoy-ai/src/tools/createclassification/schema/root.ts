import { z } from "zod"

export const inputParamsSchema = {
  "model": z.enum(["rdc-de-2025-02-14","rdc-de"]).describe("The name of the model that will be used for the Classification. A model name without a date is an alias to the latest version of that model, i.e. `rdc-de` always points to the latest version of `rdc-de`."),
  "document": z.string().describe("Base64-encoded contents of a document (PDF, JPG or PNG)")
}