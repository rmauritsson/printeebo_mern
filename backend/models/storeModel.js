import mongoose from "mongoose";

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    socialMedia: [
      {
        name: { type: String, default: "facebook" },
        url: { type: String, default: "#" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Store = mongoose.model("Store", storeSchema);

export default Store;
