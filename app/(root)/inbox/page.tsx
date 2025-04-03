import { AddTaskDialog } from "@/components/add-task-dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import React from "react";

const page = () => {
  const data = {
    task: [
      {
        title: "Finish Work",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro in, officia esse quasi voluptatibus reiciendis atque repudiandae modi magni impedit!",
        categoryId: 1,
        completed: false,
      },
      {
        title: "Finish Twerking",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro in, officia esse quasi voluptatibus reiciendis atque repudiandae modi magni impedit!",
        categoryId: 2,
        completed: false,
      },
      {
        title: "Workout",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro in, officia esse quasi voluptatibus reiciendis atque repudiandae modi magni impedit!",
        categoryId: 3,
        completed: false,
      },
      {
        title: "Workout",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro in, officia esse quasi voluptatibus reiciendis atque repudiandae modi magni impedit!",
        categoryId: 3,
        completed: false,
      },
      {
        title: "Workout",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro in, officia esse quasi voluptatibus reiciendis atque repudiandae modi magni impedit!",
        categoryId: 3,
        completed: false,
      },
    ],

    category: [
      {
        categoryId: 1,
        name: "work",
      },
      {
        categoryId: 2,
        name: "travel",
      },
      {
        categoryId: 3,
        name: "Personal",
      },
    ],
  };

  return (
    <section className="p-4 w-full">
      <div className="flex items-center justify-between">
        <h2 className="text-4xl">Inbox</h2>
        <AddTaskDialog />
      </div>
      <div className="w-full h-[1px] bg-zinc-200 my-4"></div>
      <div className="p-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {data.category.map((category) => (
          <Card key={category.categoryId}>
            <CardHeader>
              <div className="flex items-center gap-4">
                <h3 className="capitalize text-xl text-gray-500">
                  {category.name}
                </h3>
                <span>
                  {
                    data.task.filter(
                      (task) => task.categoryId === category.categoryId
                    ).length
                  }
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {data.task.map(
                (task, idx) =>
                  task.categoryId === category.categoryId && (
                    <Card key={idx}>
                      <CardHeader className="flex items-center  justify-between">
                        <h3 className="cursor-pointer">{task.title}</h3>
                        <Checkbox />
                      </CardHeader>
                    </Card>
                  )
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default page;
