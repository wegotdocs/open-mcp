import { z } from "zod"

export const inputParamsSchema = {
  "lon": z.number().gte(-180).lte(180).describe("Longitude"),
  "lat": z.number().gte(-90).lte(90).describe("Latitude"),
  "depths": z.array(z.enum(["0-5cm","0-30cm","5-15cm","15-30cm","30-60cm","60-100cm","100-200cm"])).min(1).describe("List of depths to include in the query."),
  "properties": z.array(z.enum(["bdod","cec","cfvo","clay","nitrogen","ocd","ocs","phh2o","sand","silt","soc"])).min(1).describe("List of soil properties to include in the query."),
  "values": z.array(z.enum(["mean","Q0.05","Q0.5","Q0.95","uncertainty"])).min(1).describe("List of values to include in the query.")
}