import { z } from "zod"

export const inputParams = {
  "companyId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `companyId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/companyId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "type": z.enum(["TrialBalance","FsTrialBalance"]),
  "viewBy": z.enum(["Total","Year","Quarter","Month"]),
  "startPeriod": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `startPeriod` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/startPeriod\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "endPeriod": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `endPeriod` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/endPeriod\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "dateMacro": z.enum(["CurrentMonth","LastFullMonth","LastThreeMonths","LastThreeFullMonths","CurrentYear","LastYear","QuarterToDate","YearToDate"]).optional(),
  "highWatermarkToken": z.string().optional(),
  "level": z.enum(["Compact","Summary","Detailed"]).optional(),
  "basis": z.enum(["cash","accrual"]).optional()
}