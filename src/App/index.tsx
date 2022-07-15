import { PlusCircle } from 'phosphor-react';
import { useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Task } from '../components/Task';
import { ITask } from '../dtos/ITask';
import { useTask } from '../hooks/task';
import {
  Container,
  Content,
  List,
  ListContainer,
  ListHeader,
  SearchContainer,
} from './styles';

function App() {
  const [taskName, setTaskName] = useState('');

  const { addTask, removeTask, toggleTask, tasks } = useTask();

  const tasksDone = useMemo(() => {
    return tasks.filter((task) => task.done);
  }, [tasks]);

  function handleAddItem(event: React.FormEvent) {
    event.preventDefault();

    if (!taskName) {
      toast.error('O título da task é obrigatório.');

      return;
    }

    addTask(taskName);
    setTaskName('');
    toast.success('Task adicionada com sucesso!');
  }

  function handleToggleDoneTask(task: ITask) {
    toggleTask(task.id);

    toast.success(
      task.done ? 'Task desmarcada com sucesso!' : 'Task marcada com sucesso!',
    );
  }

  function handleDeleteTask(task: ITask) {
    removeTask(task.id);
    toast.success('Task removida com sucesso!');
  }

  return (
    <Container>
      <Header />

      <Content>
        <SearchContainer onSubmit={handleAddItem}>
          <Input
            placeholder='Adicione uma nova tarefa'
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
          />

          <Button type='submit' disabled={!taskName}>
            Criar
            <PlusCircle weight='bold' />
          </Button>
        </SearchContainer>

        <ListContainer>
          <ListHeader>
            <div>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>

            <div>
              <strong>Concluídas</strong>
              <span>{`${tasksDone.length} de ${tasks.length}`}</span>
            </div>
          </ListHeader>

          <List>
            {tasks.map((task) => (
              <Task
                task={task}
                onToggleDone={handleToggleDoneTask}
                onDelete={handleDeleteTask}
              />
            ))}
          </List>
        </ListContainer>
      </Content>
    </Container>
  );
}

export default App;
