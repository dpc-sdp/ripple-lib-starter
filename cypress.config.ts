import { defineConfig } from "cypress";
import apiMocking from "./cypress/support/mockttp";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
      on("task", { ...apiMocking });

      return config;
    },
  },
  blockHosts: ["*youtube.com", "*doubleclick.net"],
});
