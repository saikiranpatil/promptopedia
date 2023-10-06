import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        const prompts = await Prompt.find({ creator: params.id }).populate("creator");

        return new Response(JSON.stringify(prompts), { status: 201 });
    } catch (error) {
        return new Response(`Failed to Fetch Prompt with error: ${error}`, { status: 500 });
    }
}