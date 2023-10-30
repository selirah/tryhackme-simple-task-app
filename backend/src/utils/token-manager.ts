import jwt from "jsonwebtoken";

// Generate a token by signing the user ID and email with the application's JWT secret
export const createToken = (id: string, email: string, expiresIn = "1h") => {
  const token = jwt.sign({ id, email }, process.env.JWT_SECRET || "", {
    expiresIn
  });
  return token;
};
