import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    const sid = (await cookies()).get("sid");

    if (!sid) {
        redirect("/auth");
    }

    return <>{children}</>;
    }
