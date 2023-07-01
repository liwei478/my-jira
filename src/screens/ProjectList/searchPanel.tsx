import type { Dispatch, FC, ReactNode, SetStateAction } from 'react'
import { memo } from 'react'
import { Form, Input, Select } from 'antd'
import type { IUser } from './type'

interface IProps {
  param: IUser
  users: IUser[]
  setParam: Dispatch<SetStateAction<IUser>>
  children?: ReactNode
}
const SearchPanel: FC<IProps> = (props) => {
  const { users, param, setParam } = props
  const userSelectOptions = [{ id: 0, name: '负责人' }, ...users]

  return <Form layout='inline' style={{ marginBottom: '2rem' }}>

    <Form.Item>
      <Input placeholder='项目名' type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value,
      })} />
    </Form.Item>
    <Form.Item>
      <Select defaultValue={0} options={userSelectOptions.map(d => ({
        value: d.id,
        label: d.name,
      }))} style={{ width: 120 }} onChange={value => setParam({
        ...param,
        id: Number(value),
      })} />
    </Form.Item>
  </Form>
}

export default memo(SearchPanel)
