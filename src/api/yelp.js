import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer V3Qcxg2fCH1YC9jGPCm9aiQZ8slihhpQari1h6y_oLiSIkTvNNDPE2POMpR7TebjDMDLCbPx5NiM3nfAIgWD7yxcxPjz0siTO_bmKQuiMxz1CQK5IX3LkMRJ3vbFXnYx"
  }
});
