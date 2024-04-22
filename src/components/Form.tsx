import { useForm } from "react-hook-form";
import sendEmail from "~/utils/send-email";
import TextEditor from "./TextEditor";
import { useState } from "react";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Form = () => {
  const [message, setMessage] = useState<string>("");

  const { register, handleSubmit, watch, reset, formState } =
    useForm<FormData>();

  function onSubmit(data: FormData) {
    const sanitizedData = {
      name: data.name,
      email: data.email,
      message: message,
    };

    sendEmail(sanitizedData);
    reset();
    setMessage("");
    if (formState.isSubmitted) {
      toast.success("🎉 Message sent successfully!", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="group relative mb-5">
        <label
          htmlFor="name"
          className={`absolute transition-all ease-in-out group-focus-within:-top-6 group-focus-within:left-1 group-focus-within:text-sm ${watch("name") ? "-top-6 left-1 text-sm text-black" : "left-4 top-[15px] text-gray-400"}`}
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="off"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 font-sans text-gray-700 outline-none transition-all ease-in-out focus:rounded-none focus:border-black focus:shadow-[5px_5px_black]"
          {...register("name", { required: true })}
        />
      </div>
      <div className="group relative mb-5 mt-10">
        <label
          htmlFor="email"
          className={`absolute transition-all ease-in-out group-focus-within:-top-6 group-focus-within:left-1 group-focus-within:text-sm ${watch("email") ? "-top-6 left-1 text-sm text-black" : "left-4 top-[15px] text-gray-400"}`}
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 font-sans text-gray-700 outline-none transition-all ease-in-out focus:rounded-none focus:border-black focus:shadow-[5px_5px_black]"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label className="mb-3 flex flex-col font-medium text-black md:flex-row">
          <span>
            Message{" "}
            <span className="font-sans text-xs font-light text-gray-500 md:text-sm">
              (try Markdown for fun or use regular text 😎)
            </span>
          </span>
          <Link
            target="_blank"
            href={"https://www.markdownguide.org/cheat-sheet/"}
            className="mt-2 font-sans text-xs md:ml-auto md:mt-0 md:text-sm"
          >
            📃 <span className="underline">Markdown Cheatsheet</span>
          </Link>
        </label>
        <TextEditor message={message} setMessage={setMessage} />
      </div>
      <div>
        <button className="hover:shadow-form w-full rounded-md bg-black px-8 py-3 text-white outline-none md:w-[50%]">
          {formState.isSubmitting ? (
            <span className="loading loading-dots loading-md"></span>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </form>
  );
};

export default Form;
