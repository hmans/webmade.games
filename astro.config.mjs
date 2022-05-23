import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), turbolinks()]
});