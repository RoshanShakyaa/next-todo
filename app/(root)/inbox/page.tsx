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
      <h2 className="text-4xl">Inbox</h2>
      <div className="w-full h-[1px] bg-zinc-200 my-4"></div>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.category.map((category) => (
          <h3>{category.categoryId}</h3>
        ))}
      </div>
    </section>
  );
};

export default page;
