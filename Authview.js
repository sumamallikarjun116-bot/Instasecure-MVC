// View handles UI only
class AuthView {
  showMessage(id, text, isError=false){
    document.getElementById(id).innerHTML = `<span class="${isError?'error':'success'}">${text}</span>`;
  }
  showTab(tab){
    document.getElementById('loginForm').style.display = tab==='login'?'block':'none';
    document.getElementById('registerForm').style.display = tab==='register'?'block':'none';
    document.getElementById('loginTab').classList.toggle('active', tab==='login');
    document.getElementById('regTab').classList.toggle('active', tab==='register');
  }
  showDashboard(name, email){
    document.getElementById('authBox').style.display='none';
    document.getElementById('dashboard').style.display='block';
    document.getElementById('userInfo').innerText = `${name} (${email})`;
  }
  hideDashboard(){
    document.getElementById('authBox').style.display='block';
    document.getElementById('dashboard').style.display='none';
  }
  getLoginData(){ return {email:loginEmail.value, password:loginPass.value} }
  getRegisterData(){ return {name:regName.value, email:regEmail.value, password:regPass.value} }
}
