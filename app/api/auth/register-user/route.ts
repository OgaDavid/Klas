import bcrypt from "bcryptjs";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { RegisterFormSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export async function POST(req: Request) {
    try {
        const userData = await req.json();

        const validatedFields = RegisterFormSchema.safeParse(userData);

        if (!validatedFields.success) {
            return new NextResponse("Invalid fields")
        }

        const {name, email, password, phoneNumber} = validatedFields.data;

        if(!name || !email || !password || !phoneNumber) {
            return new NextResponse("Missing full name, email, password or phone number", { status: 400 })
        }

        const userExists = await getUserByEmail(email);

        if ( userExists ) {
            return new NextResponse("Email already in use. Please log in or reset password if forgotten.", { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await prismadb.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phoneNumber
            }
        })

        return NextResponse.json(newUser);

    } catch (error) {
        console.log('[AUTH_REGISTER_POST]', error);

        return new NextResponse("Internal server error", { status: 500 })
    }
}