import NavBar from '../NavBar/NavBar';

function Layout({ children }) {
  return (
    <div className="lg:flex min-w-full">
      <NavBar />
      <main className="flex flex-col flex-grow max-w-7xl">{children}</main>
    </div>
  );
}

export default Layout;
