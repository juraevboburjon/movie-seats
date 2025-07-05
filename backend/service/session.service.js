import sessionModel from "../models/session.model.js";

class SessionService {
  async create(session) {
    const newSession = await sessionModel.create(session);
    return newSession;
  }

  async getAllSession() {
    const allSession = await sessionModel.find().populate("movieId");
    // .populate("seats");
    return allSession;
  }

  async getOne(id) {
    const session = await sessionModel.findById(id).populate("movieId");
    return session;
  }

  async delete(id) {
    const session = await sessionModel.findByIdAndDelete(id);
    return { session, message: "Session deleted succesfully" };
  }
}

export default new SessionService();
