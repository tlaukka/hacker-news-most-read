import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

function PageLayout () {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

const Layout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: #bababa;
`

export default PageLayout
