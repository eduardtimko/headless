// Server
import { server } from "./init/server";

// Config
import { PORT } from "./init/config";

server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
