// to allow custom user type on request object
declare namespace Express {
  interface Request {
    user?: any;
  }
}
