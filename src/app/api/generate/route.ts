import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const CONTENT_TYPE_PROMPTS: Record<string, string> = {
  linkedin: `Write a LinkedIn post for an attorney. The post should:
- Be 150-250 words
- Start with a compelling hook or observation
- Include 2-3 actionable insights or takeaways
- End with a question to encourage engagement
- Include 3-4 relevant hashtags at the end
- Sound like a knowledgeable practitioner, not a marketer
- Be professional but personable`,

  article: `Write a client alert/blog post outline for a law firm. The post should:
- Include a clear headline
- Have an executive summary (2-3 sentences)
- Be structured with 3-4 main sections using ## headers
- Include actionable takeaways
- Be 300-400 words
- Sound authoritative and helpful, not salesy`,

  speaking: `Create 2-3 speaking topic proposals for a conference or webinar. Each should include:
- A compelling title
- Suggested format (keynote, panel, workshop)
- Target audience
- 3-4 key takeaways attendees will gain
- Why this topic is timely/relevant`,

  newsletter: `Write an email newsletter segment for a law firm's client outreach. The newsletter should:
- Have a clear, engaging subject line suggestion
- Open with a brief, relevant hook (1-2 sentences)
- Cover 1-2 key developments or insights in the practice area
- Include practical implications for clients
- End with a soft call-to-action (reach out to discuss, etc.)
- Be 200-300 words total
- Sound helpful and informative, not salesy`,
};

export async function POST(request: NextRequest) {
  try {
    const { practiceArea, contentType, topic } = await request.json();

    if (!practiceArea || !contentType) {
      return NextResponse.json(
        { error: "Practice area and content type are required" },
        { status: 400 }
      );
    }

    const contentTypePrompt = CONTENT_TYPE_PROMPTS[contentType] || CONTENT_TYPE_PROMPTS.linkedin;

    const topicContext = topic
      ? `The specific topic to focus on is: "${topic}"`
      : "Choose a timely, relevant topic based on current trends in this practice area.";

    const message = await client.messages.create({
      model: "claude-3-5-haiku-20241022",
      max_tokens: 1024,
      messages: [
        {
          role: "user",
          content: `You are a thought leadership content creator for UB Greensfelder, a mid-sized law firm.

Practice Area: ${practiceArea}
${topicContext}

${contentTypePrompt}

Write the content now. Do not include any preamble or explanation - just the content itself.`,
        },
      ],
    });

    const content = message.content[0];
    if (content.type !== "text") {
      return NextResponse.json(
        { error: "Unexpected response format" },
        { status: 500 }
      );
    }

    return NextResponse.json({ content: content.text });
  } catch (error) {
    console.error("Error generating content:", error);
    return NextResponse.json(
      { error: "Failed to generate content" },
      { status: 500 }
    );
  }
}
