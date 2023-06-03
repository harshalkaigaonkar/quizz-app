// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const total: number = 5;
let correct: number = 0;
let incorrect: number = 0;
let remaining: number = total;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    type: "success"|"faliure",
    data?: {
      correct: number,
      incorrect: number,
      remaining?: number,
    },
    error?: {
      message: string,
    }
  }>
) {
    switch(req.method) {
      case "POST" : {
        const {body} = req;
        const {
          type,
          reset
        }: {
          type: "correct"|"incorrect",
          reset: boolean
        } = body;

        if(reset) {
          correct = 0;
          incorrect = 0;
          remaining = total;
          return res.status(200).json({
            type: "success",
          })
        }
        
        if(type === "correct") {
          correct++;
        } else {
          incorrect++;
        }
        remaining--;

        return res.status(200).json({
          type: "success",
          data:  {
            correct,
            incorrect,
            remaining 
          }
        })
      }
      case "GET": {
        let newCorrect = correct;
        let newIncorrect = incorrect;
        console.log({newCorrect, newIncorrect})
          return res.status(200).json({
            type: "success",
            data: {
              correct: newCorrect,
              incorrect: newIncorrect
            }
          })
      }
      default: {
        res.setHeader("Allow", ["GET", "POST"]);
        return res
          .status(405)
          .json({ 
            type: "faliure",
            error: {
              message: `Method ${req.method} is Not Allowed for this API.`
            }
          });
      }

    }
}
