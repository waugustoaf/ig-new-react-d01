import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { ITask } from '../../dtos/ITask';
import { Container, DeleteButton, Title, ToggleDoneButton } from './styles';

interface TaskProps {
  task: ITask;
  onToggleDone: (task: ITask) => void;
  onDelete: (task: ITask) => void;
}

export function Task({ task, onDelete, onToggleDone }: TaskProps) {
  const { done, title } = task;

  return (
    <Container>
      <ToggleDoneButton type='button' onClick={() => onToggleDone(task)}>
        {done ? (
          <CheckCircle weight='fill' size={24} />
        ) : (
          <Circle weight='bold' size={24} />
        )}
      </ToggleDoneButton>

      <Title done={done}>{title}</Title>

      <DeleteButton type='button' onClick={() => onDelete(task)}>
        <Trash size={24} weight='bold' />
      </DeleteButton>
    </Container>
  );
}
