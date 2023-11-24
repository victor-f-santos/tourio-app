// import { db_places } from "../../../lib/db_places";
import dbConnect from "../../../db/connect";
import Place from "../../../db/models/Place";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const places = await Place.find();
    console.log(places);
    return response.status(200).json(places);
  }
  if (request.method === "POST") {
    await Place.create(request.body);
    return response
      .status(200)
      .json({ success: true, status: "Place created" });
  }
}
