import CustomButton from "./CustomButton";

const Thing = ({ thing, handelCompletedThing }) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold text-center  ">{thing}</h1>

      <CustomButton
        text="Completed ??"
        handelCompletedThing={handelCompletedThing}
      />
    </>
  );
};

export default Thing;
