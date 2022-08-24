function validEmail(userEmail) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
}

const registerValidation = async (req, res, next) => {
  let { name, email, password, password2 } = req.body;
  console.log({ name, email, password, password2 });

  let errors = [];

  if (!name || !email || !password || !password2) {
    errors.push({ message: "Please enter all fields" });
  }

  if (password.length < 6) {
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (password.length > 12) {
    errors.push({ message: "Password must be under 12 characters long" });
  }

  if (!validEmail(email)) {
    errors.push({ message: "Please enter a valid email" });
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
    next();
  }
};

const loginValidation = async (req, res, next) => {
  let { email, password } = req.body;
  console.log({ email, password });

  let errors = [];

  if (!email || !password) {
    errors.push({ message: "Please enter all fields" });
  }

  if (!validEmail(email)) {
    errors.push({ message: "Please enter a valid email" });
  }

  if (errors.length > 0) {
    console.log(errors);
    return res.send(errors);
  } else {
    next();
  }
};

module.exports = { registerValidation, loginValidation };

// const validations(req, res, next) => {
//   const { email, name, password } = req.body;

//   function validEmail(userEmail) {
//     return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
//   }

//   if (req.path === "/register") {
//     console.log(!email.length);
//     if (![email, name, password].every(Boolean)) {
//       return res.json("Missing Credentials");
//     } else if (!validEmail(email)) {
//       return res.json("Invalid Email");
//     }
//   } else if (req.path === "/login") {
//     if (![email, password].every(Boolean)) {
//       return res.json("Missing Credentials");
//     } else if (!validEmail(email)) {
//       return res.json("Invalid Email");
//     }
//   }

//   next();
// };
