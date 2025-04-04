import { z } from "zod";
export const taskDataSchema = z.object({
  taskId: z.string().uuid(),
  kinde_Id: z.string(),
  categoryId: z.string(),
  task: z.string(),
  description: z.string(),
  completed: z.boolean(),
  dueDate: z.date(),
  priority: z.enum(["low", "medium", "high"]),
  reminder: z.date(),
});

export type taskData = z.infer<typeof taskDataSchema>;
