import React, { useState } from 'react';
import { Sidebar as PrimeSidebar } from 'primereact/sidebar';
import { Avatar } from 'primereact/avatar';
import { sidebarItems } from './sidebarItems/items';
import ItemWrapper from './sidebarItems/itemWrapper.js';
import { useHistory } from 'react-router';
// import styles from "../layoutStyle.module.scss"
function Sidebar() {
  const [active, setActive] = useState(1);
  const [visible] = useState(true);
  let history = useHistory();
  React.useEffect(() => {
    if (history.location.search) {
      let query = (history.location.search).substring(1, (history.location.search).length);
      let tabNo = query.match(/tab=(\d+)/i)[1];
      console.log(history.location, query, tabNo, query.indexOf('='));
      setActive(parseInt(tabNo, 10));
    }
  }, []);
  return (
    <div className='layout-sidebar' role='navigation'>
      <PrimeSidebar
        closeOnEscape={false}
        dismissable={false}
        icons={<Avatar icon='pi pi-user' shape='circle' size='xlarge' />}
        position='left'
        showCloseIcon={false}
        visible={visible}
        >
        <div id='userMenu'>
          {sidebarItems.map((i, k) => (
            <ItemWrapper
              active={active}
              Icon={i.icon}
              index={k}
              key={k}
              name={i.name}
              route={i.route}
              setActiveIndex={(item) => setActive(item)}
            />
          ))}
        </div>
        <div id='userHandel'>
          <ItemWrapper key='user_name' name='User Name' route='/' />
          <ItemWrapper key='logout' name='Log Out' route='/logout' />
        </div>
      </PrimeSidebar>
    </div>
  );
}

export default Sidebar;
