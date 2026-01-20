import app from "@/server";
import { SERVER_PORT } from "@/config/env";

app.listen(SERVER_PORT, () => {
    console.log(`Server suprisingly successfully started & is running on http://localhost:${ SERVER_PORT }`);
})
