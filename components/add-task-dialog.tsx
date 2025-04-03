"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export function AddTaskDialog() {
  const [form, setForm] = useState({
    task: "",
    description: "",
    categoryId: "",
    dueDate: "",
    priority: "medium" as "low" | "medium" | "high",
    completed: false,
  });

  const { user, isLoading } = useKindeBrowserClient();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && user) {
      setUserId(user.id);
    }
  }, [user, isLoading]);

  const handleSubmit = async () => {
    if (!user?.id || !task.trim()) return;

    setIsLoading(true);
    try {
      const { databases } = createAdminClient();
      await databases.createDocument(/* ... */);
      // Optional: Refresh task list here
    } catch (error) {
      console.error("Failed to add task:", error);
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Plus className="h-4 w-4" /> Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center">Create New Task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Task Title */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
              Task*
            </Label>
            <Input
              id="task"
              value={form.task}
              onChange={(e) => setForm({ ...form, task: e.target.value })}
              className="col-span-3"
              required
            />
          </div>

          {/* Description */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              className="col-span-3"
            />
          </div>

          {/* Category */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Category*</Label>
            <Select
              value={form.categoryId}
              onValueChange={(value) => setForm({ ...form, categoryId: value })}
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="work">Work</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="shopping">Shopping</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Due Date */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="dueDate" className="text-right">
              Due Date
            </Label>
            <Input
              id="dueDate"
              type="datetime-local"
              value={form.dueDate}
              onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
              className="col-span-3"
            />
          </div>

          {/* Priority */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Priority</Label>
            <Select
              value={form.priority}
              onValueChange={(value: "low" | "medium" | "high") =>
                setForm({ ...form, priority: value })
              }
            >
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button type="button" onClick={handleSubmit}>
            Create Task
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
