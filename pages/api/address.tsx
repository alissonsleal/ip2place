// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async (req: any, res: any) => {
  const { data } = await axios.get(`http://ip-api.com/json/`);
  res.statusCode = 200;
  res.json({ data: data });
};
