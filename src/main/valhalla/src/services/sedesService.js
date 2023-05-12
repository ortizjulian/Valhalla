class SedesService {
    getSedes() {
        return fetch('/sedes')
          .then(response => response.json())
          .catch(error => console.error(error));
    }
}

export default new SedesService();