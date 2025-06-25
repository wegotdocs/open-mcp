import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of your Team").optional(),
  "time_zone": z.union([z.string().describe("The human-readable time zone set manually by a ClickFunnels user or dynamically by the app.\nRead more about time zones and how to map them back to the TZ standard in [our Time Zones guide.](https://dash.readme.com/project/cf2/v2/docs/timezones).\n"), z.null().describe("The human-readable time zone set manually by a ClickFunnels user or dynamically by the app.\nRead more about time zones and how to map them back to the TZ standard in [our Time Zones guide.](https://dash.readme.com/project/cf2/v2/docs/timezones).\n")]).describe("The human-readable time zone set manually by a ClickFunnels user or dynamically by the app.\nRead more about time zones and how to map them back to the TZ standard in [our Time Zones guide.](https://dash.readme.com/project/cf2/v2/docs/timezones).\n").optional(),
  "locale": z.enum(["en","es","ja","pt"]).describe("The main language used to create a new website.").optional()
}