export const isString = (possibleString: any): boolean => {
  return typeof possibleString === "string" || possibleString instanceof String;
}

export const parseString = (value: any): string => {
  if (!value || !isString(value)) {
    throw new Error("Incorrect or missing value: " + value);
  }

  return value;
}

export const isEmail = (possibleEmail: string): boolean => {
  return isString(possibleEmail) && possibleEmail.includes("@");
}

export const parseEmail = (possibleEmail: any): string => {
  if (!possibleEmail || !isEmail(possibleEmail)) {
    throw new Error("Incorrect or missing email: " + possibleEmail);
  }

  return possibleEmail;
}

