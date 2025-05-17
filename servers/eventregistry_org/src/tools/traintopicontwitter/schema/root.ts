import { z } from "zod"

export const inputParamsSchema = {
  "apiKey": z.string().describe("Your API key"),
  "action": z.enum(["createTopic","addDocument","finishTraining","getTrainedTopic"]).describe("string containing the content to search for. It can be a Twitter user account (using \"@\" prefix or user's Twitter url), a hash tag (using \"#\" prefix) or a regular keyword."),
  "name": z.string().describe("name of the topic to create. Relevant for action `createTopic`.").optional(),
  "uri": z.string().describe("uri of the topic to update or retrieve information about. Relevant for actions: `addDocument`, `finishTraining`, `getTrainedTopic`.").optional(),
  "text": z.string().describe("the content of the document to use for updating the topic definition. The document will be annotated and categorized and the concepts and categories will be used to update the topic.").optional(),
  "maxConcepts": z.number().int().describe("The maximum number of concepts to use in the final topic. Relevant for action `finishTraining`.").optional(),
  "maxCategories": z.number().int().describe("The maximum number of categories to use in the final topic. Relevant for action `finishTraining`.").optional(),
  "idfNormalization": z.boolean().describe("Should the concepts be normalized to punish the concepts that are more commonly mentioned in general news?").optional()
}