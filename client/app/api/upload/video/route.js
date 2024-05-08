import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
  cloud_name: "dqrtcb1vl",
  api_key: "292437823597285",
  api_secret: "abU0fhlKOC_MArXMbmdl2mBOGf4",
});

export async function POST(request) {
  const data = await request.formData();
  const img = data.get("file");

  if (!img) NextResponse.json("Archivo no seleccionado", { status: 400 });

  const bytes = await img.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const video_response = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { resource_type: "video", public_id: "video_upload" },
        (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
        }
      )
      .end(buffer);
  });

  console.log(video_response);
  return NextResponse.json({
    message: "imagen subida",
    url:video_response.secure_url
  });
}
