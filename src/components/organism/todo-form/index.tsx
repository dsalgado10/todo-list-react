import { FC, useState } from 'react'
import { ITodoResponse } from '../../../models'
import { Button } from '../../atoms/button'
import { Input } from '../../atoms/input'
import Typography from '../../atoms/typography'
import './index.scss'

const TodoForm: FC = () => {

  const [todo, setTodo] = useState<ITodoResponse>({ description: '', finish_at: '', status: 0 })
  const handleOnChange = (property: 'description' | 'finish_at') => (value: string) => {
    setTodo(current => ({
      ...current,
      [property]: value
    }))
  }

  return <div className='todo-form'>
    <div className='todo-form-imput-container'>
      <Typography>
        Descripción
      </Typography>
      <Input placeholder='Descripción' initialValue={todo.description} onChange={handleOnChange('description')} />
    </div>
    <div className='todo-form-imput-container'>
      <Typography>
        Fecha limite
      </Typography>
      <Input placeholder='Fecha limite' type='date' initialValue={todo.finish_at} onChange={handleOnChange('finish_at')} />
    </div>
    <div className='todo-form-button-container'>
      <Button> Agregar </Button>
    </div>
  </div>
}

export default TodoForm