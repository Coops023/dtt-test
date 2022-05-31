import axios from "axios";

const API_KEY = "T2M1og_uLjqZEztfNe4wlJYmUxIhpXDs";

export default {
  fetchHouses() {
    return axios.get("https://api.intern.d-tt.nl/api/houses", {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
  },
  async deleteHouse(id) {
    axios
      .delete(`https://api.intern.d-tt.nl/api/houses/${id}`, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })
      .then(() => {
        console.log("successful deletion");
      });
  },
  createNewHouse(formData) {
    console.log("api page", formData);
    const image = formData.houseImage;

    return axios
      .post("https://api.intern.d-tt.nl/api/houses", formData.form, {
        headers: {
          "X-Api-Key": API_KEY,
        },
      })
      .then((res) => {
        console.log("REACHED FIRST POST");
        const id = res.data.id;
        const formData = new FormData();

        formData.append("image", image[0]);
        axios
          .post(
            `https://api.intern.d-tt.nl/api/houses/${id}/upload`,
            formData,
            {
              headers: {
                "X-Api-Key": API_KEY,
              },
            }
          )
          .then(console.log("success"))
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
