import { z } from "zod"

export const inputParamsSchema = {
  "siteId": z.string().uuid().describe("Unique identifier of the Site"),
  "metricId": z.number().describe("Unique identifier of the Weather Metric"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the duration for which the Weather Histories are requested"),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the duration for which the Weather Histories are requested"),
  "lastObservation": z.enum(["INCLUDE_LOCF","EXCLUDE"]).describe("Include the last observation carried forward (_INCLUDE_LOCF_) or only return the histories within the requested time range (_EXCLUDE_)").optional()
}