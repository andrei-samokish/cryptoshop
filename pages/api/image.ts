import { NextApiRequest, NextApiResponse } from "next";

let SVGFormula: string;
const readFile = (req: NextApiRequest) => {
  SVGFormula = req.body.match(/<svg (.*?)svg>/gms)[0];
};

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  await readFile(req);
  return res.status(200).json({ SVGFormula });
}
export default handler;

export const config = {
  api: {
    bodyParser: true,
  },
};
