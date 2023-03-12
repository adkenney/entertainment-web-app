import NavBar from '../NavBar/NavBar';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
