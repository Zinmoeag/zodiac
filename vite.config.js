import { defineConfig, loadEnv } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

export default ({mode}) =>  {

    return defineConfig({
      server : {
        host : process.env.VITE_HOST,
        port : process.env.PORT || "",
      },
      base : "https://zinmoeag.github.io/zodiac/",
    });
}
