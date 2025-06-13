import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(4, { message: "Name should be at least 4 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  password: z
    .string()
    .min(8, { message: "Password should be at least 8 characters" }),
});

// const user = {
//     name: 'Abhi',
//     email: 'sd@gmail.com',
//     password: 'ds'
// }

// try {
//     const result = userSchema.parse(user)
//     console.log('result: ', result)
// } catch (error) {
//   console.log("error: ", JSON.stringify(error, null, 2));
// }

export const validate = (req, res, next) => {
  try {
    const result = userSchema.parse(req.body);

    req.body = result;

    next();
  } catch (error) {
    // console.log("error: ", JSON.stringify(error, null, 2));
    return res.status(400).json({ error: error.flatten().fieldErrors });
  }
};
