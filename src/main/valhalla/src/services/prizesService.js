import authHeader  from "../services/authHeader";

class PrizesService {
    getPrizes() {
        return fetch("/api/prizes", { headers: authHeader() })
        .then(response => response.json())
        .catch(error => console.error(error));
    }

}

export default new PrizesService();