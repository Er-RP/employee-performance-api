const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    assignee: { type: Schema.Types.ObjectId, ref: "users" },
    createdBy: { type: Schema.Types.ObjectId, ref: "users" },
    updatedBy: { type: Schema.Types.ObjectId, ref: "users" },
    estimatedTime: { type: Number, required: true },
    actualTime: { type: Number },
    progressLevel: {
      type: Number,
      required: true,
      default: 0,
      min: [0, "Can't be less than 0"],
      max: [100, "Can't be higher than 100"],
    },
    status: {
      type: String,
      required: true,
      default: "Notyet",
      enum: ["Notyet", "Progress", "Review", "Completed"],
    },
    completedAt: { type: Date },
    project: { type: Schema.Types.ObjectId, ref: "projects", required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
