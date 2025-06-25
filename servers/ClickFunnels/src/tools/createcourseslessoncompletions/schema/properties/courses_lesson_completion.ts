import { z } from "zod"

export const inputParamsSchema = {
  "enrollment_id": z.number().int().describe("The ID of the `Courses::Enrollment` record that completed the lesson"),
  "lesson_id": z.number().int().describe("The ID of the `Courses::Lesson` record that was completed")
}