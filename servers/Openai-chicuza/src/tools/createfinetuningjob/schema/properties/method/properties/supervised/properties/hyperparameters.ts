import { z } from "zod"

export const inputParamsSchema = {
  "batch_size": z.literal("auto").describe("Number of examples in each batch. A larger batch size means that model parameters are updated less frequently, but with lower variance.\n").optional(),
  "learning_rate_multiplier": z.literal("auto").describe("Scaling factor for the learning rate. A smaller learning rate may be useful to avoid overfitting.\n").optional(),
  "n_epochs": z.literal("auto").describe("The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset.\n").optional()
}