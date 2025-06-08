import sessionModel from "../models/session.model.js";

class SessionService {
  async create(session) {
    const newSession = await sessionModel.create(session);
    return newSession;
  }

  async getAllSession() {
    const allSession = await sessionModel.find();
    return allSession;
  }
}

export default new SessionService();
