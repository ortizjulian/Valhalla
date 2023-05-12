class PlanesService {
    getPlanes() {
        return fetch('/planes')
          .then(response => response.json())
          .catch(error => console.error(error));
    }
}

export default new PlanesService();