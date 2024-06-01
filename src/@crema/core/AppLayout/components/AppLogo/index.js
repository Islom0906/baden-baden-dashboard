import React from 'react';
import './index.style.less';
import PropTypes from 'prop-types';
import {useSidebarContext} from '../../../../utility/AppContextProvider/SidebarContextProvider';

const AppLogo = ({hasSidebarColor}) => {
  const {sidebarColorSet} = useSidebarContext();
  return (
    <div className='app-logo'>
      {hasSidebarColor && sidebarColorSet.mode === 'dark' ? (
        <img src='/admin/logo.png' alt='the-baden-baden-logo' />
      ) : (
        <img src='/admin/logo.png' alt='the-baden-baden-logo' />
      )}
    </div>
  );
};

export default AppLogo;

AppLogo.propTypes = {
  hasSidebarColor: PropTypes.bool,
};
