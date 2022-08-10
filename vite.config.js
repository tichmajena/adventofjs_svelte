import { sveltekit } from "@sveltejs/kit/vite";
import dns from "dns";
/** @type {import('vite').UserConfig} */
dns.setDefaultResultOrder("verbatim");
const config = {
  plugins: [sveltekit()],
};

export default config;
