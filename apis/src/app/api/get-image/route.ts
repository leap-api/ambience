import { NextResponse } from "next/server";

import { supabase } from "@/lib/supabase";

export const runtime = "edge";
export const revalidate = 60;

export async function GET(request: Request) {
  let { data: images, error } = await supabase
    .from("images")
    .select("*")
    .limit(1)
    .or("device.eq.desktop,device.is.null")
    .order("id", { ascending: false });

  if (error) {
    console.error(error);
    return NextResponse.error();
  }

  if (!images || images.length === 0) {
    return NextResponse.error();
  }

  return NextResponse.json(images[0], {
    // add CORS headers
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}
