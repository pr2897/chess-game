exports.movePeice = catchAsync(async (req, res, next) => {
    const { name, email, password, passwordConfirm } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });
  
    const token = getToken(newUser._id);
  
    res.status(201).json({
      status: "success",
      message: "user signed up!",
      token,
      data: {
        user: { name: newUser.name, email: newUser.email },
      },
    });
    next();
  });