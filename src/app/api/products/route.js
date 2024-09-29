import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await mongoose.connect(connectionSrt);
        let data = await Product.find();
        return NextResponse.json({result:data,},{status:200})        
    } catch (error) {
        return NextResponse.json({ result: error })
    }
}

export async function POST(request,response){
    try {
        const payload = await request.json()
        await mongoose.connect(connectionSrt);
        let product = new Product(payload)
        let data = await product.save();
        return NextResponse.json({result:data,success:true}, {status:200})
        
    } catch (error) {
        return NextResponse.json({result:error})
        
    }
}