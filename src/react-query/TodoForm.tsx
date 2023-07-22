import { Button, HStack } from "@chakra-ui/react";
import { useRef } from "react";
import useAddTodo from "./hooks/useAddTodo";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  const addTodo = useAddTodo(() => {
    if (ref.current && ref.current.value) ref.current.value = "";
  });

  return (
    <>
      {addTodo.error && <span>{addTodo.error.message}</span>}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            });
        }}
      >
        <HStack>
          <input ref={ref} />
          <Button type="submit">add</Button>
        </HStack>
      </form>
    </>
  );
};

export default TodoForm;
