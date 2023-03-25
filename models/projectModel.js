const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
    name: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
    description: { type: String },
    manager: { type: Schema.Types.ObjectId, ref: "users" },
    members: [{ type: Schema.Types.ObjectId, ref: "users" }],
    duration: { type: Number, required: true },
    hoursTaken: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
    tasks: [{ type: Schema.Types.ObjectId, ref: "tasks" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
