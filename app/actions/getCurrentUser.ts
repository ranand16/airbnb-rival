import { authOption } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import client from "../libs/prismaDb";

export async function getSession() {
  return await getServerSession(authOption);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await client.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    if (!currentUser) return null;
    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerfied: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (e) {
    return null;
  }
}
