const Empty = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <span className="text-[100px]">🤷‍♂️</span>
      <span className="text-center text-[#B5B7BF] text-3xl font-bold">
        List is Empty
      </span>
    </div>
  );
};

export default Empty;
