import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

const UserLayout = () => {
  return (
    <div>
      <>
      <Header />
      {/* Main content */}
      <main>
        <Outlet />
      </main>

      <Footer />
      
      </>
    </div>
  )
}

export default UserLayout
