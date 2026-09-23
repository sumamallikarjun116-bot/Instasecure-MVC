// Router decides where to go
class Router {
  static navigate(view, page, data=null) {
    if(page === 'dashboard') view.showDashboard(data.name, data.email);
    if(page === 'login') view.showTab('login');
  }
}
