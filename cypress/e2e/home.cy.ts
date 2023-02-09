describe("Home page", () => {
  before(() => {
    cy.task("startMockServer");
  });
  it("loads", () => {
    cy.fixture("landingPage/home").then((response) => {
      cy.task("setMockRouteWithQuery", {
        route: "/api/tide/page",
        status: 200,
        response,
        query: "?path=/&site=8888",
      });
    });
    cy.fixture("site/reference").then((response) => {
      cy.task("setMockRouteWithQuery", {
        route: "/api/tide/site",
        status: 200,
        response,
        query: "?id=8888",
      });
    });
    cy.visit("/", { failOnStatusCode: false });
    cy.get("body").should("have.attr", "data-nuxt-hydrated", "true");
    cy.wait(200);
  });
});
