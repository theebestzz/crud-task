import { getAll } from "@/lib/actions";

import { AddTodo } from "@/components/shared/add-todo";
import { TodoLists } from "@/components/shared/todo-lists";
import { Todo } from "@/lib/types";

export default async function Home() {
  const todos: Todo[] = await getAll("todo");
  return (
    <section>
      <AddTodo />
      <TodoLists todos={todos} />
    </section>
  );
}
