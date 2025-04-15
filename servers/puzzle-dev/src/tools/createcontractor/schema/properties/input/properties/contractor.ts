import { z } from "zod"

export const inputParams = {
  "firstName": z.string(),
  "lastName": z.string(),
  "businessName": z.string().optional(),
  "startDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `startDate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/contractor/properties/startDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "type": z.enum(["Individual","Business"]),
  "payRate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payRate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/contractor/properties/payRate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "wageType": z.enum(["Fixed","Hourly","Daily","Weekly","Monthly","Biweekly","Semimonthly","Annually","Custom"]),
  "isActive": z.boolean(),
  "departmentId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `departmentId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/contractor/properties/departmentId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "nativeId": z.string()
}