// import Anthropic from "@anthropic-ai/sdk";
// import { NextRequest, NextResponse } from "next/server";
// import { getSystemPrompt } from "@/lib/prompts";

// const anthropic = new Anthropic({
//   apiKey: process.env.ANTHROPIC_API_KEY,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { messages, explanationLevel = "beginner" } = body;

//     if (!messages || !Array.isArray(messages)) {
//       return NextResponse.json(
//         { error: "Invalid messages format" },
//         { status: 400 }
//       );
//     }

//     if (!process.env.ANTHROPIC_API_KEY) {
//       return NextResponse.json(
//         { error: "API key not configured" },
//         { status: 500 }
//       );
//     }

//     const systemPrompt = getSystemPrompt(explanationLevel);

//     const response = await anthropic.messages.create({
//       model: "claude-sonnet-4-20250514",
//       max_tokens: 2048,
//       system: systemPrompt,
//       messages: messages,
//     });

//     const content = response.content[0];
//     const textContent = content.type === "text" ? content.text : "";

//     return NextResponse.json({
//       content: textContent,
//       model: response.model,
//       usage: response.usage,
//     });
//   } catch (error) {
//     console.error("API Error:", error);
    
//     if (error instanceof Anthropic.APIError) {
//       return NextResponse.json(
//         { error: `Claude API Error: ${error.message}` },
//         { status: error.status || 500 }
//       );
//     }

//     return NextResponse.json(
//       { error: "Failed to process request" },
//       { status: 500 }
//     );
//   }
// }



// import OpenAI from "openai";
// import { NextRequest, NextResponse } from "next/server";
// import { getSystemPrompt } from "@/lib/prompts";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { messages, explanationLevel = "beginner" } = body;

//     if (!messages || !Array.isArray(messages)) {
//       return NextResponse.json(
//         { error: "Invalid messages format" },
//         { status: 400 }
//       );
//     }

//     if (!process.env.OPENAI_API_KEY) {
//       return NextResponse.json(
//         { error: "OpenAI API key not configured" },
//         { status: 500 }
//       );
//     }

//     const systemPrompt = getSystemPrompt(explanationLevel);

//     // 🧠 Convert messages to OpenAI format
//     const formattedMessages = [
//       { role: "system", content: systemPrompt },
//       ...messages,
//     ];

//     const response = await openai.chat.completions.create({
//       model: "gpt-4o-mini", // ✅ cheap + fast
//       messages: formattedMessages,
//       max_tokens: 1000,
//     });

//     return NextResponse.json({
//       content: response.choices[0].message.content,
//     });

//   } catch (error: any) {
//     console.error("API Error:", error);

//     return NextResponse.json(
//       { error: error.message || "Failed to process request" },
//       { status: 500 }
//     );
//   }
// }



import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { getSystemPrompt } from "@/lib/prompts";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { messages, explanationLevel = "beginner" } = body;

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid messages format" },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const systemPrompt = getSystemPrompt(explanationLevel);

    // 🧠 Convert chat messages
    const chatHistory = messages
      .map((msg: any) => `${msg.role}: ${msg.content}`)
      .join("\n");

    const finalPrompt = `
${systemPrompt}

Conversation:
${chatHistory}

Assistant:
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash", // 🔥 YOUR MODEL
    });

    const result = await model.generateContent(finalPrompt);
    const response = result.response;
    const text = response.text();

    return NextResponse.json({
      content: text,
    });

  } catch (error: any) {
    console.error("API Error:", error);

    return NextResponse.json(
      { error: error.message || "Failed to process request" },
      { status: 500 }
    );
  }
}