import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("ID of the merge request."),
  "MergeRequestDetails": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `MergeRequestDetails` to the tool, first call the tool `expandSchema` with \"/properties/MergeRequestDetails\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "createdBy": z.string().describe("The user who created the merge request.").optional(),
  "createdDate": z.string().datetime({ offset: true }).describe("The date and time the merge request was created.").optional(),
  "destinationBranchId": z.string().describe("The ID of the destination branch.").optional(),
  "destinationBranchName": z.string().optional(),
  "b_id": z.string().optional(),
  "inactiveDate": z.string().datetime({ offset: true }).optional(),
  "lockNonce": z.number().int().optional(),
  "lockedBy": z.string().optional(),
  "lockedDate": z.string().datetime({ offset: true }).optional(),
  "mergeRequestAction": z.enum(["UPDATE","MERGE","RETRY_DRAFTING","REVERT"]).optional(),
  "modifiedBy": z.string().describe("The user who last modified the merge request.").optional(),
  "modifiedDate": z.string().datetime({ offset: true }).describe("The date and time the merge request was last modified.").optional(),
  "note": z.string().optional(),
  "previousStage": z.enum(["NOT_EXIST","DRAFTING","FAILED_TO_DRAFT","FAILED_TO_REDRAFT","DRAFTED","REVIEWING","MERGING","MERGED","FAILED_TO_MERGE","DELETED","REDRAFTING","REVERTED"]).describe("The previous stage of the merge.").optional(),
  "priorityBranch": z.enum(["SOURCE","DESTINATION"]).describe("The branch which should take priority in an override merge.").optional(),
  "sourceBranchId": z.string().describe("The ID of the source branch.").optional(),
  "sourceBranchName": z.string().optional(),
  "stage": z.enum(["NOT_EXIST","DRAFTING","FAILED_TO_DRAFT","FAILED_TO_REDRAFT","DRAFTED","REVIEWING","MERGING","MERGED","FAILED_TO_MERGE","DELETED","REDRAFTING","REVERTED"]).describe("The current stage of the merge.").optional(),
  "strategy": z.enum(["OVERRIDE","CONFLICT_RESOLVE","SUBSET"]).describe("The merge strategy.").optional()
}