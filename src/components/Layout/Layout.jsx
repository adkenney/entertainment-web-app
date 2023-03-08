import NavBar from '../NavBar/NavBar';

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
