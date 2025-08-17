import mongoose, {mongo, Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const commentSchema = new Schema (
    {
        content: {
            type: String,
            required: true

            },
            video: {
                type: Schema.type.Objected,
                ref: "Video"
            },
            Owner: {
                type: Schema.type.Objected,
                ref: "User"
            }

        },
        {
          timestamps: true   
        }

    
)

commentSchema.plugin(mongooseAggregatePaginate)
export const comment = mongoose.model("comment, commentSchema")
