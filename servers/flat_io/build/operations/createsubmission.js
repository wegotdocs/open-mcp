import { z } from "zod";
export const toolName = `createsubmission`;
export const toolDescription = `Create or edit a submission`;
export const baseUrl = `https://api.flat.io/v2`;
export const path = `/classes/{class}/assignments/{assignment}/submissions`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "attachments": z.array(z.object({ "googleDriveFileId": z.string().describe("The ID of the Google Drive File").optional(), "lockScoreTemplate": z.boolean().describe("To be used with a score attached in `sharingMode` `copy` (score used as template). If true, students won't be able to change the original notes of the template.").optional(), "score": z.string().describe("A unique Flat score identifier. The user creating the assignment must at least have read access to the document. If the user has admin rights, new group permissions will be automatically added for the\nteachers and students of the class.\n").optional(), "sharingMode": z.enum(["read", "write", "copy", "performance"]).describe("The sharing mode of the score for classes post and assignments"), "type": z.enum(["flat", "link", "googleDrive", "worksheet"]).describe("The type of the attachment posted").optional(), "url": z.string().describe("The URL of the attachment.").optional(), "worksheet": z.string().describe("An unique worksheet identifier").optional() }).describe("Attachment creation for an assignment or stream post.\nThis attachment must contain a `score` or an `url`, all the details of this one will be resolved and returned as `ClassAttachment` once the assignment or stream post is created.\n")).optional(), "comments": z.object({ "total": z.number().describe("The total number of comments added to the submission").optional(), "unread": z.number().describe("The number of unread comments for the current user").optional() }).optional(), "draftGrade": z.number().gte(0).lte(100).nullable().describe("Optional grade. If unset, no grade was set. This value is only visible by the teacher, and we will be set to `grade` once the teacher returns the submission").optional(), "grade": z.number().gte(0).lte(100).nullable().describe("Optional grade. If unset, no grade was set.").optional(), "return": z.boolean().describe("If `true`, the submission will be marked as done").optional(), "submit": z.boolean().describe("If `true`, the submission will be marked as done").optional() }).describe("Assignment Submission creation").optional() }).shape;
