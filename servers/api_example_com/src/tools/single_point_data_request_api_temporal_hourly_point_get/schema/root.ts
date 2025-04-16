import { z } from "zod"

export const inputParamsSchema = {
  "start": z.number().int().describe("This is the start time for the data request formatted as YYYYMMDD."),
  "end": z.number().int().describe("This is the end time for the data request formatted as YYYYMMDD."),
  "latitude": z.number().describe("This is the point latitude value."),
  "longitude": z.number().describe("This is the point longitude value."),
  "community": z.enum(["ag","sb","re"]).describe("The user community to return units for."),
  "parameters": z.string().describe("A comma delimited list of the parameter abbreviations."),
  "format": z.enum(["csv","json","ascii","netcdf","epw","epw_csv","xarray","sam","srw"]).describe("The response objects output format.").optional(),
  "user": z.string().describe("A user name for identification purposes.").optional(),
  "header": z.boolean().describe("To show or hide the header files of CSV and ASCII formats.").optional(),
  "time-standard": z.enum(["lst","utc"]).describe("The time standard to return timestamps for.").optional(),
  "site-elevation": z.number().describe("The custom site elevation in meters to produce the corrected atmospheric pressure adjusted for elevation.").optional(),
  "wind-elevation": z.number().describe("The custom wind elevation in meters to produce the wind speed adjusted for elevation.").optional(),
  "wind-surface": z.string().describe("The definable surface type to adjusted the wind speed.").optional()
}