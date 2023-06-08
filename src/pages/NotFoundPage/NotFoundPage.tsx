import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <span>Error 404</span>
      <span>NOT FOUND</span>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
