import { z } from "zod"

export const inputParamsSchema = {
  "expand": z.string().describe("Comma-delimited values expands the response with additional fields: `account`,  `managers`, and `contracts`").optional(),
  "people_id": z.number().int().describe("The unique identifier for this person. Ignored when creating a person").readonly().optional(),
  "name": z.string().max(150).describe("The person's full name"),
  "email": z.string().max(200).describe("Email address for this person").optional(),
  "job_title": z.string().max(200).describe("The name of the person's role as defined by their `role_id`").optional(),
  "role_id": z.number().int().describe("ID of a role associated with this person, `role.name` is used for `job_title`, during updates `role_id` is higher order").optional(),
  "department": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `department` to the tool, first call the tool `expandSchema` with \"/properties/department\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "notes": z.string().max(65535).describe("Any notes related to this person").optional(),
  "avatar_file": z.string().max(40).describe("Filename of thumbnail image for this person").readonly().optional(),
  "auto_email": z.number().int().describe("Should this person's schedule be emailed at start of week? 1 = Yes, 0 = No").optional(),
  "employee_type": z.number().int().describe("Full-time or part-type. `1` = Full-time, `0`  = Part-time").optional(),
  "work_days_hours": z.array(z.number().int()).describe("Hours that a part-time person is available for scheduling each day in order from Sunday to Saturday").optional(),
  "active": z.number().int().describe("Is this person active or archived? `1` = Active, `0` = Archived. Archived people do not show on the schedule or contribute to billing seats and will have their access removed").optional(),
  "people_type_id": z.number().int().describe("Is this person an `1` = Employee (default), `2` = Contractor, `3` = Placeholder?").optional(),
  "tags": z.array(z.object({ "name": z.string().max(64).describe("The name of the tag") })).optional(),
  "start_date": z.string().describe("Date the person started").optional(),
  "end_date": z.string().describe("Date the person finished").optional(),
  "default_hourly_rate": z.string().describe("Default hourly rate applied when the person is added to a fee-based project, the request also accepts a decimal `number`").optional(),
  "region_id": z.number().int().describe("ID of the public holiday region to which the person belongs").optional(),
  "created": z.string().describe("Date this record was created").readonly().optional(),
  "modified": z.string().describe("Date this record was last modified").readonly().optional(),
  "contracts": z.array(z.object({ "effective_date": z.string().date().describe("The date the contract starts; defaults to the person's start_date"), "role_id": z.number().int().describe("The ID of the role the contract is for (`null` if the person has no role)").optional(), "role_name": z.string().describe("The name of the role the contract is for (`null` if the person has no role)").optional(), "cost_rate": z.string().describe("The effective cost rate for the contract (`null` if there are no cost rates)").optional(), "cost_rate_from": z.string().describe("The entity that the cost rate is derived from either role, person, or `null` (if there are no cost rates).").optional() })).describe("`expand` field. List of applicable contracts determined for the person based on effective dates").readonly().optional(),
  "account": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `account` to the tool, first call the tool `expandSchema` with \"/properties/account\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "managers": z.array(z.number().int()).describe("`expand` field. List of accounts by `account_id` that manage this person, multiple managers are possible using departments. `null` if none").readonly().optional()
}