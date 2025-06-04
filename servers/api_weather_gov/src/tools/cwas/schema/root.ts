import { z } from "zod"

export const inputParamsSchema = {
  "cwsuId": z.enum(["ZAB","ZAN","ZAU","ZBW","ZDC","ZDV","ZFA","ZFW","ZHU","ZID","ZJX","ZKC","ZLA","ZLC","ZMA","ZME","ZMP","ZNY","ZOA","ZOB","ZSE","ZTL"]).describe("Three-letter identifier for a Center Weather Service Unit (CWSU).")
}