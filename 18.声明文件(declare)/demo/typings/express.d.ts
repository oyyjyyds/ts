declare module 'express' {
  interface Router {
    get(path: string, cb: (req: string, res: any) => void): void;
  }
  interface App {
    use(path: string, router: Router);
    listen(port: number, cb: () => void);
  }

  interface Express {
    (): App;
    Router(): Router;
  }
  const express: Express;
  export default express;
}
