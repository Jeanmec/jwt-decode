import jwt from "jsonwebtoken";
import { generate, count } from "random-words";

export default function handler(req, res) {
  const randomObject = generateRandomObject();

  const randomJwtSignature = generate({ min: 1, max: 5 }).join("-");

  const token = jwt.sign(randomObject, randomJwtSignature);

  res.status(200).json({ token });
}

const generateRandomObject = () => {
  const keys = generate({ min: 200, max: 500 });

  const randomObject = {};

  keys.forEach((key) => {
    randomObject[key] = generate();
  });

  return randomObject;
};
