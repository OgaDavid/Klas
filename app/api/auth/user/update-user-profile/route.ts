import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { UpdateProfileFormSchema } from "@/schemas";
import getSession from "@/actions/get-user-session";

export async function POST(req: Request) {
    try {
        const user = await getSession(); 
        
        if (!user) {
            return new NextResponse("Something went wrong, please try logging in again")
        }

        const userData = await req.json();

        const validatedFields = UpdateProfileFormSchema.safeParse(userData);

        if (!validatedFields.success) {
            return new NextResponse("Invalid fields")
        }

        const { name, about, jobTitle, username, phoneNumber } = validatedFields.data;

        if (!name || !about || !jobTitle || !phoneNumber || !username) {
            return new NextResponse("Missing full name, about, job title, username or phone number", { status: 400 })
        }

        const updatedUser = await prismadb.user.update({
            where: { id: user.id },

            data: { name, about, jobTitle, username, phoneNumber }
        });

        return NextResponse.json(updatedUser);

    } catch (error) {
        console.log('[AUTH_UPDATE_USER_POST]', error);

        return new NextResponse("Internal server error", { status: 500 })
    }
}