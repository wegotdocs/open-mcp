import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique identifier of the deal label (required for updates, ignored for creation)").optional(),
  "name": z.string().describe("Name of the deal label"),
  "type": z.enum(["DEAL","CHANNEL","WAY","COMMERCIAL","TYPOLOGY","SERVICE"]).describe("Type of the deal label (DEALS, CHANNEL, MEDIA, COMERCIAL, TYPOLOGY, SERVICE)")
}