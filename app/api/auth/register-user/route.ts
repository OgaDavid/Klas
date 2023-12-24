import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const userData = await req.json();

        const {name, email, password, phoneNumber} = await userData;

        if(!name || !email || !password || !phoneNumber) {
            return new NextResponse("Missing full name, email, password or phone number", { status: 400 })
        }

        const userExists = await prismadb.user.findUnique({
            where: {
                email: email
            }
        })

        if ( userExists ) {
            return new NextResponse("This user already exists", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prismadb.user.create({
            data: {
                name,
                email,
                hashedPassword,
                phoneNumber
            }
        })

        return NextResponse.json(newUser);

    } catch (error) {
        console.log('[AUTH_REGISTER_POST]', error);

        return new NextResponse("Internal server error", { status: 500 })
    }
}