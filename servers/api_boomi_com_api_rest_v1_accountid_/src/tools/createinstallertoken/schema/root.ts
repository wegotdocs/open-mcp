import { z } from "zod"

export const inputParamsSchema = {
  "accountId": z.string().optional(),
  "cloudId": z.string().describe("\\(For Runtime cloud installation\\) A unique ID assigned by the system to the Runtime cloud.").optional(),
  "created": z.string().datetime({ offset: true }).optional(),
  "durationMinutes": z.number().int().describe("The number of minutes for which the installer token is valid, from 30 to 1440.").optional(),
  "expiration": z.string().datetime({ offset: true }).optional(),
  "installType": z.enum(["CLOUD","ATOM","MOLECULE","BROKER","GATEWAY"]).describe("-   ATOM<br />-   MOLECULE<br />-   CLOUD<br />-   BROKER").optional(),
  "token": z.string().optional()
}