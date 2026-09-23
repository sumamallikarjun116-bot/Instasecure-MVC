// Controller connects Model and View
class AuthController {
  constructor(model, view){ this.model=model; this.view=view; }
  handleRegister(){
    const d = this.view.getRegisterData();
    if(!d.name||!d.email||!d.password) return this.view.showMessage('regMsg','All fields required',true);
    const r = this.model.register(d.name,d.email,d.password);
    this.view.showMessage('regMsg',r.message,!r.success);
    if(r.success) setTimeout(()=>this.view.showTab('login'),1000);
  }
  handleLogin(){
    const d = this.view.getLoginData();
    const r = this.model.login(d.email,d.password);
    if(r.success){ localStorage.setItem('currentUser',JSON.stringify(r.user)); Router.navigate(this.view,'dashboard',r.user); }
    else this.view.showMessage('loginMsg',r.message,true);
  }
  handleLogout(){ localStorage.removeItem('currentUser'); this.view.hideDashboard(); }
}
