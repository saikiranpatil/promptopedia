import Prompt from "@models/prompt";
import { connectDB } from "@utils/database";

export const GET = async (req, { params }) => {
    try {
        await connectDB();
        const prompt = await Prompt.findById(params.id).populate("creator");

        if (!prompt) return new Response("Prompt not found with the given Id", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 });
    } catch (error) {
        return new Response(`Failed to Get Single Prompt with error: ${error}`, { status: 500 });
    }
}

export const PATCH = async (req, { params }) => {
    const { prompt, tag } = await req.json();
    try {
        await connectDB();
        const currentPrompt = await Prompt.findById(params.id).populate("creator");

        if (!currentPrompt) return new Response("Prompt not found with the given Id", { status: 404 });

        currentPrompt.prompt = prompt;
        currentPrompt.tag = tag;

        await currentPrompt.save();

        return new Response(JSON.stringify(currentPrompt), { status: 200 });
    } catch (error) {
        return new Response(`Failed to Update Prompt with error: ${error}`, { status: 500 });
    }
}

export const DELETE = async (req, { params }) => {
    try {
        await connectDB();
        await Prompt.findByIdAndDelete(params.id);

        return new Response("Prompt Deleted Sucessfully", { status: 200 });
    } catch (error) {
        return new Response(`Failed to Delete Prompt with error: ${error}`, { status: 500 });
    }
}