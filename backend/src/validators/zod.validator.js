import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

import { customErrorResponse } from "../utils/common/responseObject.js";

export const validate = (schema) => {
  return async (req, res, next) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const explanation = [];
        let errorMessage = "";

        error.issues.forEach((issue) => {
          explanation.push(`${issue.path[0]} ${issue.message}`);
          errorMessage += `: ${issue.path[0]} ${issue.message}`;
        });

        return res.status(StatusCodes.BAD_REQUEST).json(
          customErrorResponse({
            message: "Validation error" + errorMessage,
            explanation
          })
        );
      }

      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
        customErrorResponse({
          message: error.message || "Internal Server Error",
          explanation: ["Unexpected validation error"]
        })
      );
    }
  };
};
