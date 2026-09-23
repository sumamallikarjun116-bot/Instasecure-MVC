// App initialization
const model = new UserModel();
const view = new AuthView();
const controller = new AuthController(model, view);

function showTab(t){ view.showTab(t); }
function register(){ controller.handleRegister(); }
function login(){ controller.handleLogin(); }
function logout(){ controller.handleLogout(); }

// Auto-login
const saved = localStorage.getItem('currentUser');
if(saved){ const u=JSON.parse(saved); view.showDashboard(u.name, u.email); }
