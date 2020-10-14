import '@material/mwc-top-app-bar-fixed';
import '@material/mwc-icon-button';

import '@material/mwc-tab-bar';
import '@material/mwc-tab';

import '@material/mwc-list';
import '@material/mwc-list/mwc-list-item';


import '@material/mwc-button';

const tabBarViews = document.querySelectorAll('.hme-tab-bar-view');

const mainTabBar = document.getElementById('main-tab-bar');
mainTabBar.addEventListener('MDCTabBar:activated', (e) => {
  tabBarViews.forEach((view, index) => view.hidden = index != e.detail.index);
});