export const signup = (req, res) => {
  try {
    const {fullName, username, password, confirmPassword} = req.body;
  } catch (error) {
    
  }
};

export const login = (req, res) => {
  res.send("login users");
};

export const logout = (req, res) => {
  res.send("login users");
};
