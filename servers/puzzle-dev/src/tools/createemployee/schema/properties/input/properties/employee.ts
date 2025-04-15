import { z } from "zod"

export const inputParams = {
  "firstName": z.string(),
  "lastName": z.string(),
  "employmentType": z.enum(["FullTime","PartTime","Contractor"]),
  "jobTitle": z.string(),
  "startDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `startDate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/employee/properties/startDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "officeLocationId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `officeLocationId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/employee/properties/officeLocationId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "payRate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `payRate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/employee/properties/payRate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "payFrequency": z.enum(["Hour","Day","Week","Month","Year","Paycheck"]),
  "nativeId": z.string(),
  "terminationDate": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `terminationDate` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/employee/properties/terminationDate\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "flsaStatus": z.enum(["Exempt","SalariedNonexempt","Nonexempt","Owner"]).optional(),
  "departmentId": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `departmentId` to the tool, first call the tool `expandSchema` with \"/properties/input/properties/employee/properties/departmentId\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}