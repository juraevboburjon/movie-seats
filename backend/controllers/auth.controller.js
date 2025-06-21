import authService from "../service/auth.service.js";

class AuthController {
  async register(req, res) {
    try {
      const user = await authService.register(req.body);
      res.status(200).json({ message: "User register succesfully", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async login(req, res) {
    try {
      const { token, userName, role } = await authService.login(req.body);
      console.log(req.body);
      res
        .status(200)
        .json({ message: "User loggined succesfully", token, userName, role });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async logout(req, res) {
    try {
      const result = await authService.logout();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default new AuthController();
