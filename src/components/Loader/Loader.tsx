import LoaderStyled from "./LoaderStyled";

const Loader = (): React.ReactElement => {
  return (
    <LoaderStyled>
      <div className="custom-loader" aria-label="loader"></div>
    </LoaderStyled>
  );
};

export default Loader;
