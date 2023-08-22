"use client";
import { fetchInstance } from "@/config/fetch";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { BarLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Button } from "../Button";
import { Input } from "../Input";

export const CreateTodo = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        if (!data.title) return toast.error("Title is required");
        try {
            setLoading(true);
            await fetchInstance("/todos/create", {
                method: "POST",
                body: JSON.stringify(data),
            });

            toast.success("Todo created");
            router.refresh();
            reset();
        } catch (error) {
            toast.error("Error creating todo");
        }
        setLoading(false);
    };

    if (loading) return <BarLoader width={"100%"} color="#af7eea" />;

    return (
        <form className="flex gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input className="grow" placeholder="Title" register={register} name="title" />
            <Button type="submit">Create</Button>
        </form>
    );
};
