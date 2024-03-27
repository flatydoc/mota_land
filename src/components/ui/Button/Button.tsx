import { ArrowUpwardRounded } from "@mui/icons-material";
import styles from "./Button.module.scss";
import { CircularProgress } from "@mui/material";
import classNames from "classnames";

type ButtonProps = {
  text: string;
  event?: () => void;
  type: string;
  loading?: boolean;
};
export default function Button({ text, event, type, loading }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (type === "button" && event) {
      event();
    }
  };

  return (
    <button
      aria-label={text}
      onClick={handleClick}
      className={classNames(styles.btn, {
        [styles.disabled]: loading,
      })}
      disabled={loading}>
      <div className={styles.iconWrapper}>
        {loading ? (
          <CircularProgress />
        ) : (
          <ArrowUpwardRounded fontSize="large" />
        )}
      </div>
      <span className={styles.text}>{text}</span>
    </button>
  );
}
