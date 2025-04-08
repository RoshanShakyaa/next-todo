"use client";

import { useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus, CalendarClock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { taskDataSchema } from "@/types";

// Helper function to format Date object to datetime-local input format
function formatDateForInput(date: Date | undefined): string {
  if (!date) return "";
  // Format as YYYY-MM-DDThh:mm (datetime-local input format)
  return date.toISOString().slice(0, 16);
}

export function AddTaskDialog() {
  const [open, setOpen] = useState(false);
  const { user } = useKindeBrowserClient();
  // Define form with proper schema
  const form = useForm<z.infer<typeof taskDataSchema>>({
    resolver: zodResolver(taskDataSchema),
    defaultValues: {
      task: "",
      description: "",
      categoryId: "",
      kinde_Id: "", // Will be set during submit
      taskId: "", // Will be generated during submit
      dueDate: undefined,
      reminder: new Date(), // Default value, will be auto-managed
      priority: "medium",
      completed: false,
    },
  });

  async function onSubmit(values: z.infer<typeof taskDataSchema>) {
    if (!user?.id) return;
    console.log("Form values:", values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 shadow-sm hover:shadow-md transition-shadow"
        >
          <Plus className="h-4 w-4" /> Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-lg p-6 shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">
            Create New Task
          </DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Task Title */}
            <FormField
              control={form.control}
              name="task"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Task Name*</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter task title"
                      {...field}
                      className="transition-all focus-visible:ring-2 focus-visible:ring-offset-1"
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter task description"
                      {...field}
                      className="min-h-24 transition-all focus-visible:ring-2 focus-visible:ring-offset-1"
                    />
                  </FormControl>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />

            {/* Due Date and Priority in a 2-column layout */}
            <div className="grid grid-cols-2 gap-6">
              {/* Due Date */}
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium flex items-center gap-1.5">
                      <CalendarClock className="h-4 w-4" /> Due Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="datetime-local"
                        value={formatDateForInput(field.value)}
                        onChange={(e) => {
                          // Convert the string date to a Date object
                          const date = e.target.value
                            ? new Date(e.target.value)
                            : undefined;
                          field.onChange(date);
                        }}
                        onBlur={field.onBlur}
                        name={field.name}
                        ref={field.ref}
                        className="transition-all focus-visible:ring-2 focus-visible:ring-offset-1"
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />

              {/* Priority */}
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4" /> Priority
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="transition-all focus-visible:ring-2 focus-visible:ring-offset-1">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem
                          value="low"
                          className="flex items-center gap-2"
                        >
                          <span className="h-2 w-2 rounded-full bg-blue-400"></span>{" "}
                          Low
                        </SelectItem>
                        <SelectItem
                          value="medium"
                          className="flex items-center gap-2"
                        >
                          <span className="h-2 w-2 rounded-full bg-yellow-400"></span>{" "}
                          Medium
                        </SelectItem>
                        <SelectItem
                          value="high"
                          className="flex items-center gap-2"
                        >
                          <span className="h-2 w-2 rounded-full bg-red-400"></span>{" "}
                          High
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
            </div>

            {/* Category */}
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Category*</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="transition-all focus-visible:ring-2 focus-visible:ring-offset-1">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="work">Work</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="shopping">Shopping</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-sm" />
                </FormItem>
              )}
            />

            <DialogFooter className="mt-8 pt-2 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="transition-all hover:bg-gray-100"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="ml-2 transition-all shadow-sm hover:shadow-md"
              >
                Create Task
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
