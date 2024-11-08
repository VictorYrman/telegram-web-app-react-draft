const telegram = window.Telegram.WebApp;

export function useTelegram() {
  const onClose = () => {
    telegram.close();
  };

  const onToggleButton = () => {
    if (telegram.MainButton.isVisible) {
      telegram.MainButton.hide();
    } else {
      telegram.MainButton.show();
    }
  };

  return {
    onClose,
    onToggleButton,
    telegram,
    user: telegram.initDataUnsafe?.user?.username,
    queryId: telegram.initDataUnsafe?.query_id,
  };
}
