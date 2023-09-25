import { Outlet } from 'react-router-dom';
import Navs from './Navs';
import AppTitle from './AppTitle';
import { TextCenter } from './common/TextCenter';
const MainLayout = () => {
  return (
    <div>
      <AppTitle />
      <Navs />
      <Outlet />
      <TextCenter style={{ paddingTop: '20px' }}>
        Created By @ <a href="https://github.com/AiyushKumar07">Aiyush Kumar</a>
      </TextCenter>
    </div>
  );
};

export default MainLayout;
