const axios = require("axios");

async function ttdl(url) {
    try {
        let response = await axios.get(`https://nekoapi.web.id/download/tiktok-download?url=${encodeURIComponent(url)}`);
        return response.data;
    } catch (error) {
        return { error: "Gagal mengambil data", details: error.message };
    }
}

module.exports = { ttdl };
