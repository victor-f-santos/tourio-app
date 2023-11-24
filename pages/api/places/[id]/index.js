import { db_places } from "../../../../lib/db_places";
import { db_comments } from "../../../../lib/db_comments";
import dbConnect from "../../../../db/connect";
import Place from "../../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;
  console.log(id);
  if (request.method === "GET") {
    const place = await Place.findById(id);
    console.log("placeId: ", place);
    if (!place) {
      return response.status(404).json({ status: "NOT FOUND" });
    }
    response.status(200).json({ place });
  }
}

//   if (!id) {
//     return;
//   }
//   if (request.method === "GET") {
//     const place = await Place.findById(id);
//     if (!place) {
//       return response.status(404).json({ status: "NOT FOUND" });
//     }
//     response.status(200).json(place);
//   }
//   const comment = place?.comments;
//   const allCommentIds = comment?.map((comment) => comment.$oid) || [];
//   const comments = db_comments.filter((comment) =>
//     allCommentIds.includes(comment._id.$oid)
//   );
// }

// // }

// //     const place = db_places.find((place) => place._id.$oid === id);

// //     if (!place) {
// //       return response.status(404).json({ status: "Not found" });
// //     }

// //     response.status(200).json({ place: place, comments: comments });
// //   }
// // }
