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

  return <Form layout='inline' style={{ marginBottom: '2rem' }}>
    <Form.Item>
      <Input placeholder='项目名' type="text" value={param.name} onChange={evt => setParam({
        ...param,
        name: evt.target.value,
      })} />
    </Form.Item>
    <Form.Item>
      <Select value={param.id} onChange={value => setParam({
        ...param,
        id: Number(value),
      })}>
        <Select.Option value={''}>负责人</Select.Option>
        {
          users.map(user => <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
        }
      </Select>
    </Form.Item>
  </Form>
}

export default memo(SearchPanel)
