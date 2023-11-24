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
  if (request.method === "PATCH") {
    console.log(request.body);
    await Place.findByIdAndUpdate(id, {
      $set: request.body,
    });
    response.status(200).json({ status: `Place ${id} updated!` });
  }
}
