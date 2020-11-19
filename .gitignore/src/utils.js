export const getTasksByStage = (stage, tasks) => {
  const allTodos = tasks;
  switch (stage) {
    case 'COMPLETED':
      return Object.values(allTodos).filter(todo => todo.completed);
    case 'ACTIVE':
      return Object.values(allTodos).filter(todo => !todo.completed);
    case 'ALL':
    default:
      return allTodos;
  }
};
