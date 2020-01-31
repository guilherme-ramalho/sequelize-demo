import User from '../models/User';

class UserController {
  async select(request, response) {
    try {
      const users = await User.findAll();

      return response.json({
        status: 'Registros listados',
        payload: users,
      });
    } catch (error) {
      return response.status(400).json('Server error');
    }
  }
}

export default new UserController();
