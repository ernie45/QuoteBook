import axios from "axios";

export default {
    /** Call on the back-end for database info */
    pullDatabaseQuotes: () => {
        return axios.get("/api/quotes");
    }
};