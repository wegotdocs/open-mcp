import { z } from "zod"

export const inputParams = {
  "units": z.enum(["us","si"]).describe("Denotes the units used in the textual portions of the forecast.").optional(),
  "Feature-Flags": z.array(z.enum(["forecast_temperature_qv","forecast_wind_speed_qv"])).describe("Enable future and experimental features (see documentation for more info):\n* forecast_temperature_qv: Represent temperature as QuantitativeValue\n* forecast_wind_speed_qv: Represent wind speed as QuantitativeValue\n").optional()
}