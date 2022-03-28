import styles from "./CSSModule.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const CSSModule = () => {
  return (
    <div className={cx("wrapper", "inverted")}>안녕하세요 저는 CSS Module!</div>
  );
};
export default CSSModule;
