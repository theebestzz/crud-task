import { getTodos } from "@/app/actions";

import { AddTodo } from "@/components/shared/add-todo";
import { TodoLists } from "@/components/shared/todo-lists";


export default async function Home() {
  const todos = await getTodos();
  return (
    <section>
      <AddTodo />
      <TodoLists todos={todos} />
    </section>
  );
}
