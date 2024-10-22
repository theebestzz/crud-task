export type Todo = {
  id: string;
  title: string | null;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type PrismaModels = "todo";
