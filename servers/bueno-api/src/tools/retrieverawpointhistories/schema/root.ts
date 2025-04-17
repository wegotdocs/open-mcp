import { z } from "zod"

export const inputParamsSchema = {
  "pointId": z.string().uuid().describe("Unique identifier of the Point"),
  "from": z.string().datetime({ offset: true }).describe("Start timestamp of the duration for which the Point Histories are requested"),
  "to": z.string().datetime({ offset: true }).describe("End timestamp of the duration for which the Point Histories are requested"),
  "lastObservation": z.enum(["INCLUDE_LOCF","EXCLUDE"]).describe("Include the last observation carried forward (_INCLUDE_LOCF_) or only return the histories within the requested time range (_EXCLUDE_)").optional(),
  "convertTo": z.enum(["RAW","STANDARD"]).describe("Convert Point Histories to either their original (_RAW_) or standardised (_STANDARD_) unit").optional()
}