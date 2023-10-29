export type TaskT = {
  _id: string;
  userId: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
};

export type TaskPayloadT = {
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
};
