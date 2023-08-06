import { createBrowserRouter } from 'react-router-dom'
import { ProjectListScreen } from '@/screens/ProjectList'
import { ProjectScreen } from '@/screens/Project'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ProjectListScreen />,
  },
  {
    path: '/projects',
    element: <ProjectListScreen />,
    children: [
      {
        path: '/projects/:projectId',
        element: <ProjectScreen />,
      },
    ],
  },
])
