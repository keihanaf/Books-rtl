export const validateField = (name, value) => {
  let error = "";

  if (name === "username") {
    if (!value) {
      error = ".نام کاربری الزامی است";
    } else if (value.length < 3) {
      error = ".نام کاربری باید حداقل ۳ کاراکتر باشد";
    }
  }

  if (name === "password") {
    if (!value) {
      error = ".رمز عبور الزامی است";
    } else if (value.length < 6) {
      error = ".رمز عبور باید حداقل ۶ کاراکتر باشد";
    }
  }

  return error;
};

export const validateForm = (form) => {
  const errors = {};
  errors.username = validateField("username", form.username);
  errors.password = validateField("password", form.password);
  return errors;
};
