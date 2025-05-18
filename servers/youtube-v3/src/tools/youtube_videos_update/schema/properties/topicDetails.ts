import { z } from "zod"

export const inputParamsSchema = {
  "relevantTopicIds": z.array(z.string()).describe("Similar to topic_id, except that these topics are merely relevant to the video. These are topics that may be mentioned in, or appear in the video. You can retrieve information about each topic using Freebase Topic API.").optional(),
  "topicCategories": z.array(z.string()).describe("A list of Wikipedia URLs that provide a high-level description of the video's content.").optional(),
  "topicIds": z.array(z.string()).describe("A list of Freebase topic IDs that are centrally associated with the video. These are topics that are centrally featured in the video, and it can be said that the video is mainly about each of these. You can retrieve information about each topic using the < a href=\"http://wiki.freebase.com/wiki/Topic_API\">Freebase Topic API.").optional()
}