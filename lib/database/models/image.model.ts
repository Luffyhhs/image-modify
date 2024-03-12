import mongoose, { Schema, Document, model, models } from "mongoose";
export interface ImageInterface extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: URL; // Assuming URL type is imported
  width?: number; // Optional property
  height?: number; // Optional property
  config?: Record<string, unknown>; // Interface for config object (if necessary)
  transformationUrl?: URL; // Optional property
  aspectRatio?: string; // Optional property
  color?: string; // Optional property
  prompt?: string; // Optional property
  author?: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  // Timestamp properties
  createdAt?: Date;
  updatedAt?: Date;
}

const ImageSchema = new Schema(
  {
    title: { type: String, required: true },
    transformationType: { type: String, required: true },
    publicId: { type: String, required: true },
    secureUrl: { type: URL, required: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
