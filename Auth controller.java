public class AuthController {
    private UserModel model;
    private AuthView view;

    public AuthController(UserModel model, AuthView view) {
        this.model = model;
        this.view = view;
    }

    public void handleRegister() {
        String[] data = view.getRegisterData();
        if(data[0].isEmpty() || data[1].isEmpty() || data[2].isEmpty()){
            view.showMessage("Please fill all fields");
            return;
        }
        boolean result = model.register(data[0], data[1], data[2]);
        if(result) {
            view.showMessage("Registration Successful!");
        }
    }

    public void handleLogin() {
        String[] data = view.getLoginData();
        boolean result = model.login(data[0], data[1]);
        if(result) {
            view.showMessage("Login Successful!");
        } else {
            view.showMessage("Login Failed!");
        }
    }
}
