import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../layoutStyle.module.scss';
import { useHistory } from 'react-router-dom';

function ItemWrapper({
    name = '',
    route = '',
    index = 1,
    Icon,
    active = 1,
    setActiveIndex = (item) => item
}) {
    const history = useHistory();
    return (
        <>
            <div
                className={`${styles.sidebarItems}
        ${active === index + 1 ? 'active_sideBar_layout' : ''}`}
                key={name}
                onClick={() => {
                    setActiveIndex(index + 1);
                    history.push(`${route}?tab=${index + 1}`);
                }}
                >
                <span className='p-sidebar-close-icon  pi-print'>
                    {Icon && <Icon />}
                    {name}
                </span>
            </div>
        </>
    );
}
ItemWrapper.propTypes = {
  Icon: PropTypes.func,
  active: PropTypes.number,
  index: PropTypes.number,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  setActiveIndex: PropTypes.func
};
export default ItemWrapper;
