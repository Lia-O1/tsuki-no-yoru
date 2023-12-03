export const validateName = (value) => {
  if (!value) {
    return "Please fill out this field.";
  } else if (!/^[a-zA-Z\s]*$/.test(value)) {
    return "Please enter a valid name.";
  }
  return "";
};

export const validateDate = (value) => {
  if (!value) {
    return "Please fill out this field.";
  } else {
    const today = new Date();
    const selectedDate = new Date(value);
    if (selectedDate < today) {
      return "Please select a date in the future.";
    }
  }
  return "";
};

export const validateTime = (value) => {
  if (!value) {
    return "Please fill out this field.";
  }
  return "";
};

export const validateGuests = (value) => {
  if (!value) {
    return "Please fill out this field.";
  } else {
    const guests = Number(value);
    if (!Number.isInteger(guests) || guests <= 0) {
      return "Please enter a valid number of guests.";
    }
  }
  return "";
};

export const validateEmail = (value) => {
  if (!value) {
    return "Please fill out this field.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address.";
    }
  }
  return "";
};

export const validateMobile = (value) => {
  if (!value) {
    return "Please fill out this field.";
  } else {
    const mobileRegex = /^04\d{8}$/;
    if (!mobileRegex.test(value)) {
      return "Please enter a valid Australian mobile number.";
    }
  }
  return "";
};
