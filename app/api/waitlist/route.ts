import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validated = waitlistSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        {
          success: false,
          message: validated.error.errors[0]?.message || "Invalid form data",
        },
        { status: 400 }
      );
    }

    const { name, email, role, experience } = validated.data;
    const supabase = createServerSupabaseClient();

    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Waitlist service is not configured. Please contact support.",
        },
        { status: 503 }
      );
    }

    const { error } = await supabase.from("waitlist").insert({
      name,
      email: email.toLowerCase().trim(),
      role,
      experience,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            message: "This email is already on the waitlist.",
          },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Failed to join waitlist. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Successfully joined the waitlist!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again.",
      },
      { status: 500 }
    );
  }
}
