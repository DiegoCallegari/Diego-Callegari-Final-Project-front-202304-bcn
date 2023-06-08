import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): React.ReactElement => {
  return (
    <NotFoundPageStyled className="not-found">
      <h1>Error 404</h1>
      <span>Page not found</span>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
