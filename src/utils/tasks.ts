export interface ITask {
  id: number;
  done: boolean;
  description: string;
}

export const tasksPlaceHolder: Array<ITask> = [
  {
    id: 1,
    done: false,
    description: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    done: false,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
  {
    id: 3,
    done: true,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
  },
];
