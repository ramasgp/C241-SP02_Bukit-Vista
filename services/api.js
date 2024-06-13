const BASE_URL = 'https://service-be-bukitvista-6lbl6hnqrq-et.a.run.app'; 

const ENDPOINT = {
  predict: `${BASE_URL}/predict`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
  }

    const json = await response.json();
    return json;
  }
}

module.exports = PredictAPI;