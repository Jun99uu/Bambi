export const handleNewTab = (url: string) => {
  window.open(url, "_blank", "noopener, noreferrer");
};

export const openMail = () => {
  window.location.href =
    "mailto:igun042388@gmail.com?subject=밤비%20관련%20문의드립니다.";
};
