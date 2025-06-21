export const isAdmin = (req, res, next) => {
  console.log("req.user:", req.user); // Показывает, что реально приходит в req.user

  if (req.user && req.user.role === "admin") {
    next();
  } else {
    // Лучше возвращать JSON для фронта и логировать отдельно
    res.status(403).json({
      message: "Only for admins",
      user: req.user || null,
    });
    console.log("Access denied. req.user:", req.user);
  }
};
