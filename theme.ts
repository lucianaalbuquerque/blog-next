import { buildLegacyTheme } from 'sanity';

const props = {
  "--my-white": "#eaeaea",
  "--my-black": "#1a1a1a",
  "--my-brand": "#116655",
  "--my-red": "#db4437",
  "--my-yellow": "#f4b400",
  "--my-green": "#0f9d58",
};

export const myTheme = buildLegacyTheme({
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": '#777',
  "--gray-base": '#777',

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  "--brand-primary": props["--my-brand"],

  "--default-button-color": '#666',

  "--focus-color": props["--my-brand"],

  //to continue use printscreen
})
