export const isString = (possibleString: any): boolean => {
  return typeof possibleString === "string" || possibleString instanceof String;
}

export const parseString = (value: any): string => {
  if (!value || !isString(value)) {
    throw new Error("Incorrect or missing string: " + value);
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

export const isNumber = (possibleNumber: any): boolean => {
  return typeof possibleNumber === "number" && isFinite(possibleNumber);
}

export const parseNumber = (value: any): number => {
  if (!value || !isNumber(value)) {
    throw new Error("Incorrect or missing number: " + value);
  }

  return value;
}

