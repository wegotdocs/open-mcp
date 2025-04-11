import { z } from "zod"

export const inputParams = {
  "cwsuId": z.enum(["ZAB","ZAN","ZAU","ZBW","ZDC","ZDV","ZFA","ZFW","ZHU","ZID","ZJX","ZKC","ZLA","ZLC","ZMA","ZME","ZMP","ZNY","ZOA","ZOB","ZSE","ZTL"]).describe("Three-letter identifier for a Center Weather Service Unit (CWSU)."),
  "date": z.string().date().describe("Date (in YYYY-MM-DD format)."),
  "sequence": z.number().int().gte(100).describe("Sequence number")
}