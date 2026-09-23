// Model handles DATA only
class UserModel {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users') || '{}');
  }
  save() { localStorage.setItem('users', JSON.stringify(this.users)); }
  register(name, email, password) {
    if(this.users[email]) return {success:false, message:"User exists!"};
    this.users[email]={name,password}; this.save();
    return {success:true, message:"Account created!"};
  }
  login(email, password) {
    if(email==='demo@test.com' && password==='123456')
      return {success:true, user:{name:"Demo User", email}};
    const u = this.users[email];
    if(u && u.password===password) return {success:true, user:{name:u.name, email}};
    return {success:false, message:"Invalid credentials"};
  }
}
