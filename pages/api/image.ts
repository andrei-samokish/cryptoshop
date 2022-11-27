import { NextApiRequest, NextApiResponse } from "next";

let SVGFormula:string;
const readFile = (req: NextApiRequest) => {
    SVGFormula =  req.body.match(/<svg (.*?)><\/svg>/g)[0]
    console.log('body: \n\n', SVGFormula)
}

async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
   await readFile(req);
   return res.status(200).json({done: "ok", });
}
export default handler;

export const config = {
    api: {
      bodyParser: true,
    },
};
export {SVGFormula}