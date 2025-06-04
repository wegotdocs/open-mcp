import { z } from "zod"

export const inputParamsSchema = {
  "timeZone": z.string().describe("Timezone identifier").optional(),
  "config": z.array(z.object({ "day": z.enum(["sun","mon","tue","wed","thu","fri","sat"]).describe("Day of the week").optional(), "mode": z.enum(["open_24h","specific_hours"]).describe("Mode of working hours. You can not combine both").optional(), "openTime": z.number().describe("Representation on hour in minutes. I.e 9 A.M. - 540").optional(), "closeTime": z.number().describe("Representation on hour in minutes. I.e 16 - 960").optional() }).describe("Working hours")).describe("Working hours configuration").optional()
}