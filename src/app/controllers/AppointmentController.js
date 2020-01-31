import Appointment from '../models/Appointment';
import User from '../models/User';

class AppointmentController {
  async select(request, response) {
    try {
      const appointments = await Appointment.findAll({
        include: [
          {
            model: User,
            as: 'user',
          },
        ],
      });

      return response.json({
        status: 'Registros listados',
        payload: appointments,
      });
    } catch (error) {
      console.log(error);
      return response.status(400).json('Server error');
    }
  }
}

export default new AppointmentController();
