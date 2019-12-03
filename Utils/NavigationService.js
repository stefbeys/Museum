
import { NavigationActions } from 'react-navigation';

let _navigator;
let _params={}
function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function popToTop(){
  _navigator.dispatch(
    NavigationActions.popToTop()
  );
}

function navigate(routeName, params) {
  _params=params;
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
function getParam(paramname){
  return _params[paramname];
}
// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
  getParam,
  popToTop
};