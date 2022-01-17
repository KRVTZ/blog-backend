const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId },
    images: { type: String, require: true },
    title: { type: String, require: true },
    excerpt: { type: String, require: true },
    text: { type: String, require: true },
  },
  { timestamps: true }
);

const commentsSchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId },
    post_id: { type: mongoose.Schema.Types.ObjectId },
    text: { type: String, require: true },
  },
  { timestamps: true }
);

const replySchema = mongoose.Schema(
  {
    user_id: { type: mongoose.Schema.Types.ObjectId },
    comment_id: { type: mongoose.Schema.Types.ObjectId },
    post_id: { type: mongoose.Schema.Types.ObjectId },
    text: { type: String, require: true },
  },
  { timestamps: true }
);
