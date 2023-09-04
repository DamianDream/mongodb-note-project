import connectMongoDB from "@/libs/mongodb";
import TodoTemplate from "@/models/todoTemplate";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params
    const {newTitle: title, newDescription: description } =  await request.json()
    await connectMongoDB()
    await TodoTemplate.findByIdAndUpdate( id, { title, description } )
    return NextResponse.json({ message: "Todo updated" }, { status: 200 })
}

export async function GET(request, { params } ) {
    const { id } = await params
    await connectMongoDB()
    const todo = await TodoTemplate.findOne({ _id: id })
    return NextResponse.json({ todo }, { status: 200 })
}