import { Router, Request, Response, NextFunction } from "express";
const queries = require('../database/queries');

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction): void{
  if(req.session?.loggedIn) {
    next();
    return;
  }

  res.status(403);
  res.redirect('https://annanovi.github.io/TodoApp/denied.html');
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.redirect('https://annanovi.github.io/TodoApp/login.html');
});

router.post('/login', async(req: RequestWithBody, res: Response) => {
  const { email, password, passwordRepeat } = req.body;
  if(email && password && passwordRepeat) {
    queries.addUser(email, password);
    res.redirect('https://annanovi.github.io/TodoApp/signup.html');
  } else if(email && password && await queries.checkUser(email, password)){
    req.session = { loggedIn: true };
    res.redirect('https://annanovi.github.io/TodoApp/link.html');
  } else {
    res.redirect('https://annanovi.github.io/TodoApp/invalid.html');
  };
});

router.get('/', (req: Request, res: Response) => {
  if(req.session?.loggedIn) {
    res.redirect('https://annanovi.github.io/TodoApp/link.html');
  } else {
    res.redirect('https://annanovi.github.io/TodoApp/index.html');
  }
});

router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

router.get('/todo', requireAuth, (req: Request, res: Response) => {
  res.redirect('https://annanovi.github.io/TodoApp/todo.html');
});

export { router };