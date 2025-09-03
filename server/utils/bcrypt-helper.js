import bcrypt from "bcrypt";

export const getHashedPassword = async (planePassword) => {
  const hasedPassword = await bcrypt.hash(planePassword, 12);
  return hasedPassword;
};

export const compareHashedPassword = async (planePassword, hashedPassword) => {
  const result = await bcrypt.compare(planePassword, hashedPassword);
  return result;
};
