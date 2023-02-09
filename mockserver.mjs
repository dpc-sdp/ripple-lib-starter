import mockttp from "mockttp";
import mockedRoutes from "./mock-routes.json" assert { type: "json" };
import mockSiteTaxonomy from "./cypress/fixtures/site/reference.json" assert { type: "json" };

const mockServer = mockttp.getLocal();

const setupMockServer = async () => {
  const API_URL = parseInt(process.env.API_URL) || 3001;
  await mockServer.start(API_URL);

  console.log("starting mock server...", mockServer.url);

  console.log(`Mocking site data: ${mockServer.url}/api/tide/site?id=8888`);
  await mockServer
    .forGet("/api/tide/site")
    .always()
    .withExactQuery(`?id=8888`)
    .thenJson(200, mockSiteTaxonomy);

  for (let index = 0; index < mockedRoutes.length; index++) {
    const route = mockedRoutes[index];
    console.log(
      `Mocking route : ${mockServer.url}/api/tide/page?path=${route.path}&site=8888`
    );
    const fixture = await import(`./cypress/fixtures/${route.fixture}`, {
      assert: { type: "json" },
    }).then((mdl) => mdl.default);
    console.log(fixture);
    await mockServer
      .forGet("/api/tide/page")
      .always()
      .withExactQuery(`?path=${route.path}&site=8888`)
      .thenJson(200, fixture);
  }

  await mockServer.forAnyRequest().thenForwardTo("http://localhost:3000");
};

setupMockServer();
