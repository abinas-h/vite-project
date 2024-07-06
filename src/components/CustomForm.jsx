import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";

const Form = ({ handelInput, handelSubmit, thing }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center  ">
        Complete A Thing You Are Doing
      </h1>

      <form
        onSubmit={handelSubmit}
        className=" flex ring-4  rounded-md ring-slate-200 focus-within:ring-teal-600 
          ring-offset-slate-200  focus-within:ring-offset-4  "
        //  action={}
      >
        <input
          type="text"
          className="bg-inherit rounded-md font-sans text-slate-800 py-2 px-6 focus:outline-none
          text-xl sm: text-2xl placeholder:text-slate-400 caret-teal-600 appearance-none w-full
          "
          placeholder="One Thing At a time"
          maxLength={64}
          value={thing}
          onInput={handelInput}
          required
        />

        <button
          className="bg-inherit rounded-md  font-sans text-slate-800 py-2 pr-6 focus:outline-none
          focus:text-teal-600 hover:text-teal-600"
        >
          <ArrowRightCircleIcon className="h-12 w-12 pointer-events-none" />
        </button>
      </form>
    </>
  );
};

export default Form;
