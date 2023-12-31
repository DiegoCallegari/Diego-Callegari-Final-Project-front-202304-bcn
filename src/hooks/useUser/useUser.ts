import axios from "axios";
import { UserCredentials } from "../../store/user/types";
import paths from "../../routers/paths";
import { useCallback } from "react";
import { useAppDispatch } from "../../store";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../store/ui/uiSlice";
import { wrongCredentials } from "../../components/Modal/feedback";

export const apiUrl = import.meta.env.VITE_APP_URL;

const useUser = () => {
  const dispatch = useAppDispatch();

  const getUserToken = useCallback(
    async (userCredentials: UserCredentials): Promise<string | undefined> => {
      try {
        dispatch(showLoadingActionCreator());

        const { data } = await axios.post<{ token: string }>(
          `${apiUrl}${paths.user}${paths.login}`,
          userCredentials
        );
        dispatch(hideLoadingActionCreator());

        return data.token;
      } catch {
        dispatch(hideLoadingActionCreator());
        dispatch(
          showModalActionCreator({
            isError: true,
            title: wrongCredentials.title,
            text: wrongCredentials.text,
            isVisible: true,
          })
        );
      }
    },
    [dispatch]
  );

  return {
    getUserToken,
  };
};

export default useUser;
