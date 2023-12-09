import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
  /* will only scroll the element that has the overflow scroll property */
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      {/* THE OUTLET WILL DISPLAY THE SELECTED CHILD COMPONENT OF APP LAYOUT COMPONENT */}
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      {/* THE <Outlet /> components comes from react-router-dom which show pages */}
    </StyledAppLayout>
  );
}

export default AppLayout;
