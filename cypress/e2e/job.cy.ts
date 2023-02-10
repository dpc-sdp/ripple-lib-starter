describe("Home page", () => {
  before(() => {
    cy.task("startMockServer");
  });
  it("loads", () => {
    cy.fixture("landingPage/job").then((response) => {
      cy.task("setMockRouteWithQuery", {
        route: "/api/tide/page",
        status: 200,
        response,
        query: "?path=/job&site=8888",
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
    cy.visit("/job", { failOnStatusCode: false });
    cy.get("body").should("have.attr", "data-nuxt-hydrated", "true");
    cy.wait(200);
  });
});
