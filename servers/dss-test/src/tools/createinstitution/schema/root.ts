import { z } from "zod"

export const inputParamsSchema = {
  "Id": z.string().uuid().describe("Represents an uuid"),
  "LegacyId": z.string(),
  "Name": z.string(),
  "Tenant": z.enum(["veheri","cmrad"])
}