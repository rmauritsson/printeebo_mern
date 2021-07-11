import mongoose from "mongoose";

const storeSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
    },
    banner: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
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
