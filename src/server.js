const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: { // response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');
      cors: {
        origin: ['*'], // response.header('Access-Control-Allow-Origin', '*');
        //* artinya all
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
// http://notesapp-v1.dicodingacademy.com/
