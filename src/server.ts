import { createApp } from "./app";
import { CONFIG_ENVIRONMENT } from './config';

const PORT = CONFIG_ENVIRONMENT.PORT;
const app = createApp();
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));