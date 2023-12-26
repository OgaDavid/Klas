import { getServerSession } from "next-auth";

export default async function getSession() {
    const session = await getServerSession();
    return session?.user;
}