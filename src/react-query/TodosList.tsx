import { List, ListItem } from "@chakra-ui/react";
import useTodos from "./hooks/useTodos";

const TodosList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;
  return (
    <>
      <List spacing={3}>
        {todos?.map((todo) => (
          <ListItem key={todo.id}>{todo.title}</ListItem>
        ))}
      </List>
    </>
  );
};

export default TodosList;
