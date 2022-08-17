const registerValidation = async (req, res, next) => {
  let { name, email, password, password2 } = req.body;

  let errors = [];

  console.log({ name, email, password, password2 });

  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (password.length > 12) {
    errors.push({ message: "Password must be under 12 characters long" });
  }

  if (!email.includes("@")) {
    errors.push({ message: "Please enter a valid email" });
  }

  if (password !== password2) {
    errors.push({ message: "Passwords do not match" });
  }

  if (errors.length > 0) {
    console.log(errors);
    return res.send(errors);
  } else {
  }
};

module.exports = { registerValidation };
