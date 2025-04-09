import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the issue priority."),
    "avatarId": z.number().int().describe("The ID for the avatar for the priority. This parameter is nullable and both iconUrl and avatarId cannot be defined.").optional(),
    "description": z.string().max(255).nullable().describe("The description of the priority.").optional(),
    "iconUrl": z.enum(["/images/icons/priorities/blocker.png", "/images/icons/priorities/critical.png", "/images/icons/priorities/high.png", "/images/icons/priorities/highest.png", "/images/icons/priorities/low.png", "/images/icons/priorities/lowest.png", "/images/icons/priorities/major.png", "/images/icons/priorities/medium.png", "/images/icons/priorities/minor.png", "/images/icons/priorities/trivial.png", "/images/icons/priorities/blocker_new.png", "/images/icons/priorities/critical_new.png", "/images/icons/priorities/high_new.png", "/images/icons/priorities/highest_new.png", "/images/icons/priorities/low_new.png", "/images/icons/priorities/lowest_new.png", "/images/icons/priorities/major_new.png", "/images/icons/priorities/medium_new.png", "/images/icons/priorities/minor_new.png", "/images/icons/priorities/trivial_new.png"]).nullable().describe("The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. Both iconUrl and avatarId cannot be defined.").optional(),
    "name": z.string().max(60).nullable().describe("The name of the priority. Must be unique.").optional(),
    "statusColor": z.string().nullable().describe("The status color of the priority in 3-digit or 6-digit hexadecimal format.").optional()
};
